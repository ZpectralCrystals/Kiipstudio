import { createClient } from '@sanity/client';
import type { HomeLandingContent } from '@features/home/data/homeContent';

const projectId = import.meta.env.SANITY_PROJECT_ID || import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET || import.meta.env.PUBLIC_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.SANITY_API_VERSION || '2025-01-01';
const token = import.meta.env.SANITY_READ_TOKEN;
const isDev = import.meta.env.DEV;

const hasSanityConfig = Boolean(projectId && dataset);

const client = hasSanityConfig
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      token,
      useCdn: !token && !isDev,
      perspective: token && isDev ? 'drafts' : 'published',
    })
  : null;

const homeLandingQuery = `*[_type == "homeLanding" && _id == "homeLanding"][0]{
  whatsappUrl,
  logo,
  nav,
  heroBackground,
  headline,
  serviceCards,
  about,
  studio,
  why,
  gallery,
  process,
  footer
}`;

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === 'object' && !Array.isArray(value));
}

export async function getHomeLandingContent(): Promise<HomeLandingContent> {
  if (!client) throw new Error('Missing Sanity config: SANITY_PROJECT_ID and SANITY_DATASET');

  const remote = await client.fetch<HomeLandingContent | null>(homeLandingQuery);
  if (!isRecord(remote)) throw new Error('Missing Sanity document: homeLanding');

  return remote;
}

export type SanityImage = {
  imageUrl?: string;
  alt?: string;
};

export type ServicePageContent = {
  title: string;
  slug: string;
  seoDescription?: string;
  hero: SanityImage;
  photoLabel: string;
  videoLabel: string;
  gallery: SanityImage[];
  videos: Array<{title?: string; youtubeId?: string; youtubeUrl?: string; image?: SanityImage}>;
  packages: {
    eyebrow?: string;
    title?: string;
    ctaLabel?: string;
    plans: Array<{
      name: string;
      price: string;
      featured?: boolean;
      sections?: Array<{heading?: string; items?: string[]}>;
      bullets?: string[];
    }>;
  };
};

const servicePageQuery = `*[_type == "servicePage" && slug == $slug][0]{
  title,
  slug,
  seoDescription,
  hero,
  photoLabel,
  videoLabel,
  gallery,
  videos,
  packages
}`;

export async function getServicePage(slug: string): Promise<ServicePageContent | null> {
  if (!client) throw new Error('Missing Sanity config: SANITY_PROJECT_ID and SANITY_DATASET');

  return await client.fetch<ServicePageContent | null>(servicePageQuery, {slug});
}
