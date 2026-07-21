import '../sanity/loadEnv.js';
import fs from 'node:fs';
import path from 'node:path';
import { Readable } from 'node:stream';
import { v2 as cloudinary } from 'cloudinary';
import yauzl from 'yauzl';
import sharp from 'sharp';

const cwd = process.cwd();
const defaultZips = [
  '/Volumes/MAC/MAC Ext/Downloads/drive-download-20260719T172233Z-1-001.zip',
  '/Volumes/MAC/MAC Ext/Downloads/drive-download-20260719T172233Z-1-002.zip',
];
const localAssetDirs = [
  path.join(cwd, 'public/assets/figma/home-v2'),
  path.join(cwd, 'public/assets/figma/how-we-work'),
];
const outFile = path.join(cwd, 'cloudinary-upload-manifest.json');
const folder = process.env.CLOUDINARY_FOLDER || 'klipstudio';
const dryRun = process.argv.includes('--dry-run');
const maxUploadBytes = 9.5 * 1024 * 1024;

if (!process.env.CLOUDINARY_URL && !dryRun) {
  throw new Error('Missing CLOUDINARY_URL. Example: cloudinary://API_KEY:API_SECRET@CLOUD_NAME');
}

const imageExt = new Set(['.jpg', '.jpeg', '.png', '.webp']);

function slug(input) {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9/_-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^[-/]+|[-/]+$/g, '')
    .toLowerCase();
}

async function fitCloudinaryLimit(buffer) {
  if (buffer.length <= maxUploadBytes) return { buffer, optimized: false };

  for (const width of [3200, 2800, 2400, 2000, 1600]) {
    for (const quality of [86, 78, 70, 62]) {
      const optimized = await sharp(buffer, { failOn: 'none' })
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality, effort: 4 })
        .toBuffer();
      if (optimized.length <= maxUploadBytes) return { buffer: optimized, optimized: true };
    }
  }

  throw new Error(`Could not optimize image below ${maxUploadBytes} bytes`);
}

async function uploadBuffer(buffer, publicId, resourceType = 'image') {
  const uploadable = await fitCloudinaryLimit(buffer);
  if (dryRun) {
    return Promise.resolve({
      public_id: publicId,
      secure_url: `dry-run://${publicId}`,
      bytes: uploadable.buffer.length,
      optimized: uploadable.optimized,
    });
  }

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        public_id: publicId,
        resource_type: resourceType,
        overwrite: true,
        unique_filename: false,
        use_filename: false,
      },
      (error, result) => (error ? reject(error) : resolve(result)),
    );
    Readable.from(uploadable.buffer).pipe(stream);
  });
}

function readZipEntries(zipPath) {
  return new Promise((resolve, reject) => {
    yauzl.open(zipPath, { lazyEntries: true, decodeStrings: true }, (openError, zip) => {
      if (openError) return reject(openError);
      const entries = [];
      zip.readEntry();
      zip.on('entry', (entry) => {
        const ext = path.extname(entry.fileName).toLowerCase();
        if (!entry.fileName.endsWith('/') && imageExt.has(ext)) entries.push(entry);
        zip.readEntry();
      });
      zip.on('end', () => {
        zip.close();
        resolve(entries);
      });
      zip.on('error', reject);
    });
  });
}

function readZipEntryBuffer(zipPath, targetEntry) {
  return new Promise((resolve, reject) => {
    yauzl.open(zipPath, { lazyEntries: true, decodeStrings: true }, (openError, zip) => {
      if (openError) return reject(openError);
      zip.readEntry();
      zip.on('entry', (entry) => {
        if (entry.fileName !== targetEntry.fileName) {
          zip.readEntry();
          return;
        }
        zip.openReadStream(entry, (streamError, stream) => {
          if (streamError) return reject(streamError);
          const chunks = [];
          stream.on('data', (chunk) => chunks.push(chunk));
          stream.on('end', () => {
            zip.close();
            resolve(Buffer.concat(chunks));
          });
          stream.on('error', reject);
        });
      });
      zip.on('error', reject);
    });
  });
}

function walkImages(dir) {
  if (!fs.existsSync(dir)) return [];
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkImages(full));
    if (entry.isFile() && imageExt.has(path.extname(entry.name).toLowerCase())) files.push(full);
  }
  return files;
}

const manifest = {
  uploadedAt: new Date().toISOString(),
  folder,
  assets: {},
  sourcePhotos: {},
};

for (const file of localAssetDirs.flatMap(walkImages)) {
  const rel = path.relative(path.join(cwd, 'public/assets'), file);
  const publicId = `${folder}/site/${slug(rel).replace(/\.[^.]+$/, '')}`;
  const result = await uploadBuffer(fs.readFileSync(file), publicId);
  manifest.assets[`/${path.relative(path.join(cwd, 'public'), file)}`] = {
    publicId: result.public_id,
    secureUrl: result.secure_url,
    bytes: result.bytes,
  };
  console.log(`asset ${rel} -> ${result.public_id}`);
}

for (const zipPath of defaultZips.filter(fs.existsSync)) {
  const entries = await readZipEntries(zipPath);
  console.log(`${path.basename(zipPath)}: ${entries.length} images`);
  for (const entry of entries) {
    const publicId = `${folder}/source/${slug(entry.fileName).replace(/\.[^.]+$/, '')}`;
    const buffer = await readZipEntryBuffer(zipPath, entry);
    const result = await uploadBuffer(buffer, publicId);
    manifest.sourcePhotos[entry.fileName] = {
      publicId: result.public_id,
      secureUrl: result.secure_url,
      bytes: entry.uncompressedSize,
      uploadedBytes: result.bytes,
    };
    console.log(`photo ${entry.fileName} -> ${result.public_id}`);
  }
}

fs.writeFileSync(outFile, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`manifest ${outFile}`);
