
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="pill-nav lavender-shadow">
        <Link href="/" className="flex items-center gap-2 font-headline font-bold text-lg">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
            <Sparkles className="w-4 h-4" />
          </div>
          <span>Ageless</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary-foreground/70">
          <Link href="/#benefits" className="hover:text-primary transition-colors">Benefits</Link>
          <Link href="/#reviews" className="hover:text-primary transition-colors">Reviews</Link>
          <Link href="/#faq" className="hover:text-primary transition-colors">FAQ</Link>
        </div>

        <Button asChild size="sm" className="rounded-full px-6 bg-foreground text-background hover:opacity-90">
          <Link href="/order">Order Now</Link>
        </Button>
      </div>
    </nav>
  );
}
