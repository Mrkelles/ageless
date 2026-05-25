
import { Check, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const packages = [
  {
    title: "1 Pack + 1 Free",
    desc: "Good for a start! Recommended for testing the results.",
    oldPrice: "30,000",
    newPrice: "27,000",
    features: ["45% Discount", "Free Delivery", "Pay on Delivery"],
    tag: "START",
    highlight: false
  },
  {
    title: "2 Packs + 2 Free",
    desc: "Best Seller! Perfect results with consistent use.",
    oldPrice: "48,000",
    newPrice: "44,000",
    features: ["Massive Savings", "Free Delivery", "Pay on Delivery"],
    tag: "BEST SELLER",
    highlight: true
  },
  {
    title: "10 Packs Bulk",
    desc: "Perfect for gifting friends and family or long-term care.",
    oldPrice: "120,000",
    newPrice: "105,000",
    features: ["Special Discount", "Bulk Purchase", "Free Delivery"],
    tag: "GIFT A FRIEND",
    highlight: false
  }
];

export function ProductPackages() {
  return (
    <section className="py-24 px-4 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">Pricing Plans</p>
          <h2 className="text-3xl md:text-5xl font-headline font-bold">
            Choose Your <span className="accent-italic">Package Below</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
                pkg.highlight 
                  ? 'bg-foreground text-background scale-105 shadow-2xl z-10' 
                  : 'bg-white text-foreground lavender-shadow hover:scale-102'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-white border-none py-1 px-4 rounded-full text-xs font-bold">
                    RECOMMENDED
                  </Badge>
                </div>
              )}
              
              <div className="mb-6">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${pkg.highlight ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'}`}>
                  {pkg.tag}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
              <p className={`text-sm mb-6 ${pkg.highlight ? 'text-background/70' : 'text-muted-foreground'}`}>
                {pkg.desc}
              </p>

              <div className="mb-8">
                <div className={`text-sm line-through ${pkg.highlight ? 'text-background/40' : 'text-muted-foreground'}`}>
                  ₦{pkg.oldPrice}
                </div>
                <div className="text-4xl font-extrabold">₦{pkg.newPrice}</div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <BadgeCheck className={`w-5 h-5 ${pkg.highlight ? 'text-primary' : 'text-primary'}`} />
                    {feat}
                  </li>
                ))}
              </ul>

              <Button 
                variant={pkg.highlight ? "default" : "outline"} 
                className={`w-full py-6 rounded-full font-bold transition-all ${
                  pkg.highlight 
                    ? 'bg-primary text-white border-none hover:bg-primary/90' 
                    : 'border-foreground text-foreground hover:bg-foreground hover:text-background'
                }`}
                asChild
              >
                <Link href="/order">I Want This Package</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
