interface ImageOptions {
  width?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg';
}

export const optimizeImage = (src: string, options: ImageOptions = {}) => {
  const {
    width = 800,
    quality = 75,
    format = 'webp'
  } = options;

  // If the source is an absolute URL (e.g., from Unsplash)
  if (src.startsWith('http')) {
    // For Unsplash images, we can use their optimization parameters
    if (src.includes('unsplash.com')) {
      const baseUrl = src.split('?')[0];
      return `${baseUrl}?w=${width}&q=${quality}&fm=${format}&fit=crop`;
    }
    return src;
  }

  // For local images (to be implemented with a proper image optimization service)
  return src;
};

export const preloadImages = (images: string[]) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = optimizeImage(src);
  });
};

export const generateSrcSet = (src: string, widths: number[] = [320, 640, 768, 1024, 1280]) => {
  return widths
    .map((width) => `${optimizeImage(src, { width })} ${width}w`)
    .join(', ');
};

export const generateImageSizes = (sizes: { min: number; max?: number; width: string }[]) => {
  return sizes
    .map(({ min, max, width }) => {
      if (max) {
        return `(min-width: ${min}px) and (max-width: ${max}px) ${width}`;
      }
      return `(min-width: ${min}px) ${width}`;
    })
    .join(', ');
}; 