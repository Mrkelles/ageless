
"use client";

import Image from "next/image";
import { Star, Facebook } from "lucide-react";
import { Card } from "@/components/ui/card";
import { getPlaceholderImage } from "@/lib/placeholder-images";

const reviewsData = [
  {
    name: "Maria",
    text: "I was always self-conscious about my neck—what they call the dreaded ‘turkey neck.’ I tried scarves and high collars, but they weren’t real solutions. Then I discovered this neck cream, and within weeks, the sagging skin started to tighten up! Not only that, but the fine lines and crepe-like texture began to smooth out. I finally feel confident wearing V-neck tops again, and I can’t stop recommending this cream to my friends!",
    imageId: "rev-1"
  },
  {
    name: "Mrs. Enem Bassey",
    text: "It is Magical, I got mine few days back and I have been applying it, the results is great. I wish i got it earlier instead of wasting money.",
    imageId: "rev-2"
  },
  {
    name: "Azeezah",
    text: "I didn’t think a cream could work this well, but my neck feels firmer, and the lines are fading. Now, I use it every day!",
    imageId: "rev-3"
  },
  {
    name: "Mrs. Vivian Nwadi Agbawa",
    text: "I ordered this product by just clicking on the link on this website and since I started using it, My Neck wrinkles have been fading and I have used one tube so far.",
    imageId: "rev-4"
  },
  {
    name: "Tare",
    text: "I never realized how much puffiness around my neck was affecting my appearance. After using this neck cream daily, I noticed a big difference. The swelling went down, and my skin feels firmer and more toned. My coworkers even asked if I’ve been working out—I just smiled and said, ‘Something like that!’ This cream has been a game-changer for me.” Even my husband noticed and asked what I’ve been doing differently! Thanks to the Jaysuing Miracle!",
    imageId: "rev-5"
  },
  {
    name: "Clara",
    text: "I’ve been battling neck wrinkles for years, feeling like nothing would work. But this cream truly delivered. It penetrates deep into the skin, leaving it hydrated and smoother. I’ve seen a noticeable reduction in wrinkles, and the overall appearance of my neck has improved dramatically. People have started guessing my age wrong—in the best way possible!",
    imageId: "rev-6"
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 px-4 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">Verified Results</p>
          <h2 className="text-3xl md:text-5xl font-headline font-bold">
            What Our <span className="accent-italic">Customers Are Saying</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from real users across Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review, i) => {
            const img = getPlaceholderImage(review.imageId, {
              imageUrl: "https://picsum.photos/seed/rev/600/600",
              description: review.name,
              imageHint: "customer review"
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
