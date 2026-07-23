import { createClient } from '@sanity/client';
import { homeLandingContent, type HomeLandingContent } from '@features/home/data/homeContent';

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

function cloneContent<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function mergeContent<T>(fallback: T, remote: unknown): T {
  if (Array.isArray(fallback)) {
    return (Array.isArray(remote) && remote.length > 0 ? remote : fallback) as T;
  }

  if (!isRecord(fallback) || !isRecord(remote)) {
    return (remote ?? fallback) as T;
  }

  const merged: Record<string, unknown> = cloneContent(fallback);
  for (const [key, value] of Object.entries(remote)) {
    if (key === '_type' || key === '_key' || value === null || value === undefined) continue;
    const fallbackValue = (fallback as Record<string, unknown>)[key];
    merged[key] = mergeContent(fallbackValue, value);
  }

  return merged as T;
}

export async function getHomeLandingContent(): Promise<HomeLandingContent> {
  if (!client) return homeLandingContent;

  try {
    const remote = await client.fetch(homeLandingQuery);
    return mergeContent(homeLandingContent, remote);
  } catch (error) {
    console.warn('Sanity content unavailable. Using local fallback.', error);
    return homeLandingContent;
  }
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
  if (!client) return null;

  try {
    return await client.fetch<ServicePageContent | null>(servicePageQuery, {slug});
  } catch (error) {
    console.warn(`Sanity service unavailable: ${slug}`, error);
    return null;
  }
}
