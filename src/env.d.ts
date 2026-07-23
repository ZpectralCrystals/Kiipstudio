/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CLOUDINARY_CLOUD_NAME?: string;
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_SANITY_PROJECT_ID?: string;
  readonly PUBLIC_SANITY_DATASET?: string;
  readonly SANITY_STUDIO_PROJECT_ID?: string;
  readonly SANITY_STUDIO_DATASET?: string;
  readonly SANITY_PROJECT_ID?: string;
  readonly SANITY_DATASET?: string;
  readonly SANITY_API_VERSION?: string;
  readonly SANITY_READ_TOKEN?: string;
  readonly DISABLE_SANITY?: string;
  readonly PUBLIC_DISABLE_SANITY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
