
"use client";

import Image from "next/image";
import { getPlaceholderImage } from "@/lib/placeholder-images";

export function ImageShowcase() {
  const largeImg = getPlaceholderImage("showcase-large", {
    imageUrl: "https://picsum.photos/seed/showcase-large/1200/600",
    description: "Product showcase large",
    imageHint: "skincare result"
  });

  const gridImages = [
    getPlaceholderImage("showcase-grid-1", {
      imageUrl: "https://picsum.photos/seed/grid1/600/800",
      description: "Result 1",
      imageHint: "skincare result"
    }),
    getPlaceholderImage("showcase-grid-2", {
      imageUrl: "https://picsum.photos/seed/grid2/600/800",
      description: "Result 2",
      imageHint: "skincare result"
    }),
    getPlaceholderImage("showcase-grid-3", {
      imageUrl: "https://picsum.photos/seed/grid3/600/800",
      description: "Result 3",
      imageHint: "skincare result"
    }),
  ];

  return (
    <div className="space-y-12 py-16 bg-white/20">
      {/* Section 1: Large Image */}
      <section className="px-4 max-w-6xl mx-auto">
        <div className="relative aspect-[21/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
          <Image
            src={largeImg.imageUrl}
            alt={largeImg.description}
            fill
            className="object-cover"
            data-ai-hint={largeImg.imageHint}
          />
        </div>
      </section>

      {/* Section 2: 3 Images Grid */}
      <section className="px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gridImages.map((img, i) => (
            <div key={i} className="relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white group hover:scale-[1.02] transition-transform duration-500">
              <Image
                src={img.imageUrl}
                alt={img.description}
                fill
                className="object-cover"
                data-ai-hint={img.imageHint}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
