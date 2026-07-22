type CloudinaryImageOptions = {
  publicId: string;
  width: number;
  quality?: 'auto' | number;
};

const cloudName = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo';

const withWebpExtension = (url: string) => url.replace(/\.(?:jpe?g|png)(?=$|\?)/i, '.webp');

// Centralizes Cloudinary URL rules so every slice gets same optimization defaults.
export function getCloudinaryImageUrl({
  publicId,
  width,
  quality = 'auto',
}: CloudinaryImageOptions) {
  const transforms = [
    'c_fill',
    'g_auto',
    `w_${width}`,
    `q_${quality}`,
    'f_webp',
  ].join(',');

  return withWebpExtension(`https://res.cloudinary.com/${cloudName}/image/upload/${transforms}/${publicId}`);
}

// Sanity stores original Cloudinary URLs. Insert delivery transforms at render time
// so CMS edits stay simple while every browser receives an appropriately sized file.
export function getOptimizedCloudinaryUrl(url: string | undefined, width: number, height?: number) {
  if (!url || !url.includes('res.cloudinary.com/') || !url.includes('/image/upload/')) return url || '';

  const transforms = height
    ? `c_fill,g_auto,w_${width},h_${height},q_auto,f_webp`
    : `c_limit,w_${width},q_auto,f_webp`;
  return withWebpExtension(url.replace('/image/upload/', `/image/upload/${transforms}/`));
}
