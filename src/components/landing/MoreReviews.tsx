
"use client";

import Image from "next/image";
import { Star, Facebook } from "lucide-react";
import { Card } from "@/components/ui/card";
import { getPlaceholderImage } from "@/lib/placeholder-images";

const moreReviewsData = [
  {
    name: "Annette",
    text: "I tried so many organic creams from Instagram, but they did nothing. My neck started wrinkling, and I looked way older than my age. People even thought I was sick! But this collagen cream changed everything—my skin is smoother, firmer, and I look younger than ever.",
    imageId: "more-rev-1"
  },
  {
    name: "Funmilayo Adekunle",
    text: "I never really trusted skincare products, but this cream changed my mind. The fine lines on my neck are fading, and my skin feels so much smoother!",
    imageId: "more-rev-2"
  },
  {
    name: "Anthonia",
    text: "JAYSUING Collagen Neck Cream worked wonders for my neck! My skin feels tighter, and the fine lines are fading. I use it every day, and the results are amazing!",
    imageId: "more-rev-3"
  },
  {
    name: "Naomi",
    text: "The sagging around my neck was something I thought I’d just have to live with. But after a month of using this neck cream, I couldn’t believe my eyes. It has a lifting effect that makes my neck look younger and my skin more elastic. My skin feels lifted, hydrated, and much smoother. It’s given me a renewed sense of pride in how I look.",
    imageId: "more-rev-4"
  },
  {
    name: "Emelia",
    text: "As a young woman, I didn’t think much about skincare, but I started noticing my neck looking loose and aged. My husband recommended this cream because she also uses it. So, I decided to give it a shot, and I’m glad I did. It’s gentle, non-greasy, and incredibly effective. My neck feels firmer, and the lines I was worried about have nearly disappeared. I’d recommend this to anyone!",
    imageId: "more-rev-5"
  },
  {
    name: "Samantha",
    text: "I always took care of my face but completely neglected my neck. That was a big mistake! Wrinkles and loose skin started appearing, making me look older. This cream has been a game changer! It hydrates deeply, smooths out lines, and gives my neck a firmer, youthful look. It’s now a must-have in my skincare routine!",
    imageId: "more-rev-6"
  }
];

export function MoreReviews() {
  return (
    <section id="more-reviews" className="py-24 px-4 bg-white/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">More Testimonies</p>
          <h2 className="text-3xl md:text-5xl font-headline font-bold">
            Real Results, <span className="accent-italic">Real Confidence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See why thousands of women are switching to Ageless Beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moreReviewsData.map((review, i) => {
            const img = getPlaceholderImage(review.imageId, {
              imageUrl: "https://picsum.photos/seed/more-rev/600/600",
              description: review.name,
              imageHint: "customer testimony"
            });

            return (
              <Card key={i} className="flex flex-col overflow-hidden border-none rounded-[2rem] bg-white lavender-shadow hover:scale-[1.02] transition-transform duration-300">
                <div className="relative aspect-square w-full">
                  <Image 
                    src={img.imageUrl} 
                    alt={img.description} 
                    fill 
                    className="object-cover"
                    data-ai-hint={img.imageHint}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                    <Facebook className="w-5 h-5 text-[#1877F2] fill-current" />
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex text-amber-400 mb-4 gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-sm md:text-base text-secondary-foreground/80 leading-relaxed italic mb-6 flex-1">
                    "{review.text}"
                  </p>
                  
                  <div className="pt-6 border-t border-primary/5">
                    <span className="font-bold text-lg block">{review.name}</span>
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">Verified Customer</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
