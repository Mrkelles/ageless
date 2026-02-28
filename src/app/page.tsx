
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { Testimonials } from "@/components/landing/Testimonials";
import { ProductPackages } from "@/components/landing/ProductPackages";
import { OrderForm } from "@/components/landing/OrderForm";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Header />
      <Hero />
      
      {/* Introduction text block as requested */}
      <section className="py-16 px-4 bg-white/30 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-headline font-bold leading-tight">
            If you're tired of wrinkles, Fine Lines, Puffiness, sagging and an uneven skin tune... <span className="accent-italic">this is for you.</span>
          </h2>
          <p className="text-lg text-secondary-foreground/80 leading-relaxed">
            Find out why 2,065+ Nigerian women in their 30s, 40s and 50s are satisfied with Collagen Neck cream that is All Natural, specially made for you and Safe for your skin.
          </p>
        </div>
      </section>

      <Benefits />
      <Testimonials />
      <ProductPackages />
      <FAQ />
      <OrderForm />
      <Footer />
    </main>
  );
}
