
import Link from "next/link";
import { Sparkles, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-primary/10 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 font-headline font-bold text-xl">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
            <Sparkles className="w-5 h-5" />
          </div>
          <span>AgelessBeauty</span>
        </div>

        <div className="flex gap-8 text-sm text-muted-foreground">
          <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-primary transition-colors">Return Policy</Link>
        </div>

        <div className="flex gap-4">
          <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all">
            <Twitter className="w-4 h-4" />
          </Link>
          <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all">
            <Linkedin className="w-4 h-4" />
          </Link>
          <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all">
            <Instagram className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <div className="text-center mt-12 text-xs text-muted-foreground font-medium">
        © {new Date().getFullYear()} JAYSUING Hydrolyzed Collagen Neck Cream. All rights reserved.
      </div>
    </footer>
  );
}
