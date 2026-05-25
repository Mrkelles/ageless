
import { Header } from "@/components/landing/Header";
import { OrderForm } from "@/components/landing/OrderForm";
import { Footer } from "@/components/landing/Footer";

export default function OrderPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background">
      <Header />
      <div className="pt-32 pb-16">
        <OrderForm />
      </div>
      <Footer />
    </main>
  );
}
