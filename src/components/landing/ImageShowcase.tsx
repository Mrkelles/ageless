
"use client";

import Image from "next/image";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { CheckCircle2 } from "lucide-react";

export function ImageShowcase() {
  const largeImg = getPlaceholderImage("showcase-large", {
    imageUrl: "https://picsum.photos/seed/showcase-large/800/800",
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
    <div className="space-y-24 py-16 bg-white/20">
      {/* Section 1: Image Left, Text Right */}
      <section className="px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <Image
              src={largeImg.imageUrl}
              alt={largeImg.description}
              fill
              className="object-cover"
              data-ai-hint={largeImg.imageHint}
            />
          </div>
          
          {/* Text Side */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              Real Transformation
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-extrabold leading-tight">
              See the <span className="accent-italic">Visible Difference</span> in Days
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our unique hydrolyzed collagen formula doesn't just sit on the surface. It penetrates deep to restore elasticity and firmness where you need it most.
            </p>
            <ul className="space-y-4">
              {[
                "Reduces neck lines and 'turkey neck' sagging",
                "Deeply hydrates for a smoother texture",
                "Evens out skin tone and diminishes puffiness"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-secondary-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: 3 Images Grid */}
      <section className="px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-headline font-bold mb-2">Proven Results Across All Skin Types</h3>
          <p className="text-muted-foreground">Join thousands of women who have regained their youthful confidence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gridImages.map((img, i) => (
            <div key={i} className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white group hover:scale-[1.02] transition-transform duration-500">
              <Image
                src={img.imageUrl}
                alt={img.description}
                fill
                className="object-cover"
                data-ai-hint={img.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-bold text-sm">{img.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
