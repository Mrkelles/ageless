
import { CheckCircle2, Zap, Heart, Shield, Sparkles, Smile, RotateCcw } from "lucide-react";
import Image from "next/image";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Sparkles,
    title: "Youthful Skin Renewal",
    desc: "Helps your skin renew, fights wrinkles, and slows aging. Designed for women in their 30s to 60s.",
    imageId: "benefit-1"
  },
  {
    icon: Heart,
    title: "Specialized Neck Care",
    desc: "Unlike face creams, our formula caters specifically to the unique skin of the neck region.",
    imageId: "benefit-2"
  },
  {
    icon: Zap,
    title: "Suitable for All Skin",
    desc: "Works perfectly on dry or oily skin. Easy to apply and absorbs quickly without greasiness.",
    imageId: "benefit-3"
  },
  {
    icon: RotateCcw,
    title: "Anti-Aging Quality",
    desc: "Age backward. Penetrates deep into your skin, creating new cells for a fresh youthful glow.",
    imageId: "benefit-4"
  },
  {
    icon: Shield,
    title: "Collagen Boost",
    desc: "Restores the 30% of body protein lost with age. Restores structure, strength, and firmness.",
    imageId: "benefit-5"
  },
  {
    icon: Smile,
    title: "Natural & Skin-Loving",
    desc: "Infused with Aloe Vera and Hydrolyzed Collagen. Dermatologist-tested and soothing.",
    imageId: "benefit-6"
  },
  {
    icon: RotateCcw,
    title: "100% Risk-Free",
    desc: "30-day return policy. If you aren't satisfied, we'll take care of you. 97% success rate.",
    imageId: "benefit-7"
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">7 Reasons Why</p>
          <h2 className="text-3xl md:text-5xl font-headline font-bold">
            Why 2,065+ Women <span className="accent-italic">Love Our Cream</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything your neck and face need to stay firm, hydrated, and radiant.
          </p>
        </div>

        <div className="space-y-12 md:space-y-0">
          {benefits.map((benefit, i) => {
            const isEven = i % 2 === 0;
            const img = getPlaceholderImage(benefit.imageId, {
              imageUrl: `https://picsum.photos/seed/benefit${i}/600/400`,
              description: benefit.title,
              imageHint: "skincare"
            });

            return (
              <div 
                key={i} 
                className={cn(
                  "flex flex-col md:flex-row items-center gap-8 md:gap-16 py-12 border-b border-primary/5 last:border-0",
                  !isEven && "md:flex-row-reverse"
                )}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 relative group">
                  <div className="absolute -inset-2 bg-primary/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border-2 border-white shadow-xl lavender-shadow group-hover:scale-[1.02] transition-transform duration-500">
                    <Image 
                      src={img.imageUrl} 
                      alt={img.description} 
                      fill 
                      className="object-cover"
                      data-ai-hint={img.imageHint}
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary font-bold text-xl">
                    {i + 1}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-headline font-extrabold flex items-center justify-center md:justify-start gap-3">
                      <benefit.icon className="w-6 h-6 text-primary" />
                      {benefit.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Verified Benefit
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
