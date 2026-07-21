import '../sanity/loadEnv.js';
import fs from 'node:fs';
import path from 'node:path';
import { createClient } from '@sanity/client';
import { homeLandingContent } from '../src/features/home/data/homeContent.ts';

const cwd = process.cwd();
const manifestPath = path.join(cwd, 'cloudinary-upload-manifest.json');

const projectId = process.env.SANITY_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_WRITE_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2025-01-01';
const force = process.argv.includes('--force');

if (!projectId || !dataset || !token) {
  throw new Error('Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_WRITE_TOKEN');
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const manifest = fs.existsSync(manifestPath)
  ? JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  : { assets: {} };

function cleanForSanity(value) {
  if (Array.isArray(value)) return value.map(cleanForSanity);
  if (!value || typeof value !== 'object') return value;

  if (typeof value.localSrc === 'string') {
    return {
      _type: 'editableImage',
      imageUrl: manifest.assets[value.localSrc]?.secureUrl || '',
      alt: value.alt || '',
    };
  }

  const output = {};
  for (const [key, child] of Object.entries(value)) {
    if (key === 'cloudinaryPublicId' || key === 'imageUrl') continue;
    output[key] = cleanForSanity(child);
  }
  return output;
}

const doc = {
  _id: 'homeLanding',
  _type: 'homeLanding',
  title: 'Contenido Home',
  ...cleanForSanity(homeLandingContent),
};

if (force) {
  await client.createOrReplace(doc);
  console.log(`Sanity reset from code: ${projectId}/${dataset} homeLanding`);
} else {
  await client.createIfNotExists(doc);
  console.log(`Sanity singleton ready: ${projectId}/${dataset} homeLanding`);
}
