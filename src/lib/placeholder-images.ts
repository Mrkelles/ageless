import data from '@/app/lib/placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// Defensive export: ensure it's always an array at runtime
export const PlaceHolderImages: ImagePlaceholder[] = (data && Array.isArray(data.placeholderImages)) 
  ? data.placeholderImages 
  : [];

/**
 * Safely retrieves a placeholder image by ID with a mandatory fallback.
 */
export function getPlaceholderImage(id: string, fallback: { imageUrl: string; description: string; imageHint: string }): ImagePlaceholder {
  const found = PlaceHolderImages.find(img => img && img.id === id);
  return {
    id,
    imageUrl: found?.imageUrl || fallback.imageUrl,
    description: found?.description || fallback.description,
    imageHint: found?.imageHint || fallback.imageHint
  };
}
