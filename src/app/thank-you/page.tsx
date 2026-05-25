
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4 pt-32 pb-16">
        <div className="max-w-md w-full text-center space-y-8 bg-white p-12 rounded-[3rem] lavender-shadow">
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-primary animate-pulse" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-headline font-extrabold text-foreground">Order Placed!</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thank you for choosing Ageless Beauty. We've received your order and will contact you shortly to confirm delivery details.
            </p>
          </div>

          <div className="pt-4">
            <Button asChild size="lg" className="w-full rounded-full py-6 text-lg shadow-xl hover:scale-105 transition-transform">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground">
            Questions? Contact support at 08137152040
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
