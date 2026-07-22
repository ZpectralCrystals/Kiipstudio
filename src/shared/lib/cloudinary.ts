type CloudinaryImageOptions = {
  publicId: string;
  width: number;
  quality?: 'auto' | number;
  format?: 'webp' | 'auto';
};

const cloudName = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo';

// Centralizes Cloudinary URL rules so every slice gets same optimization defaults.
export function getCloudinaryImageUrl({
  publicId,
  width,
  quality = 'auto',
  format = 'webp',
}: CloudinaryImageOptions) {
  const transforms = [
    'c_fill',
    'g_auto',
    `w_${width}`,
    `q_${quality}`,
    format === 'webp' ? 'f_webp' : 'f_auto',
  ].join(',');

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms}/${publicId}`;
}

// Sanity stores original Cloudinary URLs. Insert delivery transforms at render time
// so CMS edits stay simple while every browser receives an appropriately sized file.
export function getOptimizedCloudinaryUrl(url: string | undefined, width: number) {
  if (!url || !url.includes('res.cloudinary.com/') || !url.includes('/image/upload/')) return url || '';

  const transforms = `c_limit,w_${width},q_auto,f_auto`;
  return url.replace('/image/upload/', `/image/upload/${transforms}/`);
}
