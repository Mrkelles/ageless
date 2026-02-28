
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Does it bleach?",
    a: "No, our collagen neck cream is made from natural ingredients and hydrolyzed collagen. It is designed to firm and restore your skin, not bleach it."
  },
  {
    q: "Can I get it in a pharmacy?",
    a: "While we have a nationwide distribution network, we primarily sell directly through our website to ensure you get the best price and authentic product delivered to your door."
  },
  {
    q: "Is it effective for all ages?",
    a: "Yes! While it's especially popular among women in their 30s-60s for anti-aging, it's suitable for anyone looking to maintain firm and healthy skin on their neck and face."
  },
  {
    q: "How/where can I get it?",
    a: "Simply fill out the order form below. Thanks to our efficient nationwide network, you'll receive your product within 2-3 business days with payment on delivery available."
  },
  {
    q: "Is it an organic product?",
    a: "Yes, it is infused with natural and naturally derived ingredients, including aloe vera and hydrolyzed collagen. It harnesses the power of nature for radiant skin."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">Common Questions</p>
          <h2 className="text-3xl md:text-5xl font-headline font-bold">
            Frequently Asked <span className="accent-italic">Questions</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-primary/10 py-2">
              <AccordionTrigger className="text-left font-bold text-lg hover:no-underline hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
