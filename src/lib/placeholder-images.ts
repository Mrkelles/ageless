import data from '@/app/lib/placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// Defensive export: ensure it's always an array at runtime
// Handles potential differences in JSON import behavior (object vs default wrapper)
const getRawData = () => {
  if (!data) return [];
  if (Array.isArray(data.placeholderImages)) return data.placeholderImages;
  // @ts-ignore - handle potential default wrapper
  if (data.default?.placeholderImages) return data.default.placeholderImages;
  return [];
};

export const PlaceHolderImages: ImagePlaceholder[] = getRawData();

/**
 * Safely retrieves a placeholder image by ID with a mandatory fallback.
 * Prevents "Cannot read properties of undefined" errors by always returning a valid object.
 */
export function getPlaceholderImage(id: string, fallback: { imageUrl: string; description: string; imageHint: string }): ImagePlaceholder {
  const list = Array.isArray(PlaceHolderImages) ? PlaceHolderImages : [];
  const found = list.find(img => img && img.id === id);
  
  return {
    id,
    imageUrl: found?.imageUrl || fallback.imageUrl || '',
    description: found?.description || fallback.description || '',
    imageHint: found?.imageHint || fallback.imageHint || ''
  };
}
