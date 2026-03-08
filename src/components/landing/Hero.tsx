"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Truck, ShieldCheck } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Hero() {
  const carouselImageIds = [
    "hero-carousel-1",
    "hero-carousel-2",
    "hero-carousel-3",
    "hero-carousel-4",
    "hero-carousel-5",
  ];

  // Map requested IDs to image data from the placeholder registry
  const heroImages = carouselImageIds.map(id => {
    return (PlaceHolderImages || []).find(img => img.id === id);
  }).filter(Boolean);

  return (
    <section className="pt-32 pb-16 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
            <span className="animate-pulse">●</span> Order Now To Claim 45% Off + Free Delivery
          </div>

          <h1 className="text-4xl md:text-6xl font-headline font-extrabold leading-[1.1] text-foreground">
            Talk to Your Skin <br />
            <span className="accent-italic">Anytime, Everywhere.</span>
          </h1>

          <p className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Discover why 2,065+ Nigerian Women are charmed over our Collagen Neck Cream. Guaranteed to help you achieve smoother wrinkle-free skin.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button size="lg" className="w-full sm:w-auto rounded-full px-8 py-6 text-lg shadow-xl hover:scale-95 transition-transform" asChild>
              <a href="#order">Click Here To Order Now</a>
            </Button>
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs font-medium text-muted-foreground">4.8/5.0 Based on 100,000+ Reviews</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-primary/10">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Truck className="w-4 h-4 text-primary" /> Free Delivery
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-primary" /> 30-Day Guarantee
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Star className="w-4 h-4 text-primary" /> Natural Ingredients
            </div>
          </div>
        </div>

        <div className="relative animate-float">
          <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-foreground shadow-2xl bg-white">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {heroImages.length > 0 ? heroImages.map((img, i) => (
                  <CarouselItem key={i}>
                    <div className="relative aspect-[4/5] w-full">
                      <Image 
                        src={img!.imageUrl} 
                        alt={img!.description} 
                        fill
                        className="object-cover"
                        priority={i === 0}
                        data-ai-hint={img!.imageHint}
                      />
                    </div>
                  </CarouselItem>
                )) : (
                  <CarouselItem>
                    <div className="relative aspect-[4/5] bg-muted flex items-center justify-center">
                      <p className="text-muted-foreground text-sm">Product Image Placeholder</p>
                    </div>
                  </CarouselItem>
                )}
              </CarouselContent>
              <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none">
                <CarouselPrevious className="relative left-0 pointer-events-auto h-10 w-10 bg-white/20 hover:bg-white/40 backdrop-blur-md border-none text-foreground translate-x-0 translate-y-0" />
                <CarouselNext className="relative right-0 pointer-events-auto h-10 w-10 bg-white/20 hover:bg-white/40 backdrop-blur-md border-none text-foreground translate-x-0 translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
