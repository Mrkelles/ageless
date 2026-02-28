
import { CheckCircle2, Zap, Heart, Shield, Sparkles, Smile, RotateCcw } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Sparkles,
    title: "Youthful Skin Renewal",
    desc: "Helps your skin renew, fights wrinkles, and slows aging. Designed for women in their 30s to 60s."
  },
  {
    icon: Heart,
    title: "Specialized Neck Care",
    desc: "Unlike face creams, our formula caters specifically to the unique skin of the neck region."
  },
  {
    icon: Zap,
    title: "Suitable for All Skin",
    desc: "Works perfectly on dry or oily skin. Easy to apply and absorbs quickly without greasiness."
  },
  {
    icon: RotateCcw,
    title: "Anti-Aging Quality",
    desc: "Age backward. Penetrates deep into your skin, creating new cells for a fresh youthful glow."
  },
  {
    icon: Shield,
    title: "Collagen Boost",
    desc: "Restores the 30% of body protein lost with age. Restores structure, strength, and firmness."
  },
  {
    icon: Smile,
    title: "Natural & Skin-Loving",
    desc: "Infused with Aloe Vera and Hydrolyzed Collagen. Dermatologist-tested and soothing."
  },
  {
    icon: RotateCcw,
    title: "100% Risk-Free",
    desc: "30-day return policy. If you aren't satisfied, we'll take care of you. 97% success rate."
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">7 Reasons Why</p>
          <h2 className="text-3xl md:text-5xl font-headline font-bold">
            Why 2,065+ Women <span className="accent-italic">Love Our Cream</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything your neck and face need to stay firm, hydrated, and radiant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <Card key={i} className="p-8 border-none lavender-shadow hover:lavender-shadow-hover transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
