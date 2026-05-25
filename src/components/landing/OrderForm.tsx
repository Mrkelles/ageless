
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Package, Info, ShieldCheck, Phone } from "lucide-react";
import Image from "next/image";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { submitOrder } from "@/app/actions/order";

export function OrderForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const upsellImg = getPlaceholderImage("upsell-botox", {
    imageUrl: "https://picsum.photos/seed/serum/600/400",
    description: "Serum bottle",
    imageHint: "skincare serum"
  });

  const handleAction = async (formData: FormData) => {
    setIsSubmitting(true);
    const result = await submitOrder(formData);
    if (result?.error) {
      setIsSubmitting(false);
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: result.error,
      });
    }
  };

  return (
    <section id="order" className="px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold">
            Fill the Form to <span className="accent-italic">Place Your Order Now</span>
          </h2>
          <p className="text-muted-foreground">Free Delivery & Pay on Delivery Nationwide</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8 border-none lavender-shadow bg-white rounded-[2rem]">
              <form action={handleAction} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input name="name" id="name" placeholder="Enter Your Name" required className="rounded-xl h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input name="phone" id="phone" type="tel" placeholder="Enter Your Phone Number" required className="rounded-xl h-12" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">Alternative / WhatsApp Number</Label>
                  <Input name="whatsapp" id="whatsapp" placeholder="Enter Your WhatsApp Number" className="rounded-xl h-12" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Delivery Address (City & State)</Label>
                  <Textarea name="address" id="address" placeholder="Enter Your Full Address, City and State" required className="rounded-xl min-h-[100px]" />
                </div>

                <div className="space-y-4">
                  <Label className="text-lg font-bold">Select Package</Label>
                  <RadioGroup name="package" defaultValue="pkg1" className="space-y-3">
                    <div className="flex items-center space-x-3 p-4 border rounded-2xl hover:bg-primary/5 cursor-pointer transition-colors border-primary/20 bg-primary/5">
                      <RadioGroupItem value="pkg1" id="pkg1" />
                      <Label htmlFor="pkg1" className="flex-1 cursor-pointer">
                        <span className="font-bold">₦27,000</span> — 1 Pack + 1 Free (45% OFF)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-2xl hover:bg-primary/5 cursor-pointer transition-colors">
                      <RadioGroupItem value="pkg2" id="pkg2" />
                      <Label htmlFor="pkg2" className="flex-1 cursor-pointer">
                        <span className="font-bold">₦44,000</span> — 2 Packs + 2 Free (BEST SELLER)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-2xl hover:bg-primary/5 cursor-pointer transition-colors">
                      <RadioGroupItem value="pkg3" id="pkg3" />
                      <Label htmlFor="pkg3" className="flex-1 cursor-pointer">
                        <span className="font-bold">₦105,000</span> — 10 Packs (GIFT A FRIEND)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="p-6 rounded-3xl bg-foreground text-background space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 border-primary/30">
                      <Image 
                        src={upsellImg.imageUrl} 
                        alt={upsellImg.description} 
                        width={100} 
                        height={100} 
                        className="object-cover" 
                        data-ai-hint={upsellImg.imageHint}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-primary">Special Bonus Offer!</h4>
                      <p className="text-xs text-background/70">Add our Botox Stock Solution at a 45% Discount! Proven: Get results faster when combined.</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox name="upsell" id="upsell" />
                    <Label htmlFor="upsell" className="text-sm font-medium cursor-pointer">Yes, add it for just ₦12,000 (Today only!)</Label>
                  </div>
                </div>

                <Button type="submit" className="w-full py-8 text-xl rounded-full font-extrabold shadow-lg hover:scale-[1.02] transition-transform" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Complete My Order"}
                </Button>

                <div className="flex items-center justify-center gap-6 pt-4 text-muted-foreground">
                  <div className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest">
                    <ShieldCheck className="w-4 h-4 text-primary" /> Secure Checkout
                  </div>
                  <div className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest">
                    <Info className="w-4 h-4 text-primary" /> Privacy Protected
                  </div>
                </div>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 border-none lavender-shadow bg-white/50 backdrop-blur-sm rounded-3xl">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" /> Why Order Today?
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                  Free delivery within 2-3 business days.
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                  Pay only when you receive your order.
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                  45% Limited time discount applied.
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                  Full 30-day money-back guarantee.
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-none bg-foreground text-background rounded-3xl space-y-4 text-center">
              <p className="text-sm font-medium text-primary uppercase tracking-widest">Need Help?</p>
              <div className="text-2xl font-bold">08137152040</div>
              <p className="text-xs text-background/60">Give us a call. Let's help you today!</p>
              <Button variant="outline" className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-white" asChild>
                <a href="https://wa.me/2348137152040">Order on WhatsApp</a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
