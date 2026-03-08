
import data from '@/app/lib/placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// Defensive export: ensure it's always an array at runtime
const rawPlaceholderImages = (data && typeof data === 'object' && 'placeholderImages' in data && Array.isArray(data.placeholderImages)) 
  ? data.placeholderImages 
  : [];

export const PlaceHolderImages: ImagePlaceholder[] = rawPlaceholderImages;

/**
 * Safely retrieves a placeholder image by ID with a mandatory fallback.
 */
export function getPlaceholderImage(id: string, fallback: { imageUrl: string; description: string; imageHint: string }): ImagePlaceholder {
  // Defensive check for PlaceHolderImages
  const list = Array.isArray(PlaceHolderImages) ? PlaceHolderImages : [];
  const found = list.find(img => img && img.id === id);
  
  return {
    id,
    imageUrl: found?.imageUrl || fallback.imageUrl || '',
    description: found?.description || fallback.description || '',
    imageHint: found?.imageHint || fallback.imageHint || ''
  };
}
