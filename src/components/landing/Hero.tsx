import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Truck, ShieldCheck } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-cream") || {
    imageUrl: "https://picsum.photos/seed/skincare1/800/1000",
    description: "Premium collagen neck cream",
    imageHint: "skincare cream"
  };

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
          <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-foreground shadow-2xl">
            <Image 
              src={heroImg.imageUrl} 
              alt={heroImg.description} 
              width={800} 
              height={1000} 
              className="object-cover"
              data-ai-hint={heroImg.imageHint}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
