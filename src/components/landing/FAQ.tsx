
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";

interface FAQItem {
  q: string;
  a: string | ReactNode;
}

const faqs: FAQItem[] = [
  {
    q: "Does it bleach?",
    a: "We understand your concern about bleaching. Jaysuing Hydrolyzed Collagen Neck Cream is designed to address a range of neck and décolleté skin concerns, promoting an evenly toned appearance without any bleaching effects. You can trust its dermatologist-tested and certified safe formulation to deliver noticeable results while maintaining your natural skin tone."
  },
  {
    q: "Can I get it in a pharmacy?",
    a: "We are an online store. However, we have agents that distribute nationwide. So, you may never find it in a pharmacy, but you can get it delivered to your doorstep once you place an order for it."
  },
  {
    q: "Is it effective?",
    a: "With the feedback we have received so far, we are confident enough to say that Jaysuing Hydrolyzed Collagen Neck Cream is a very effective product. So, feel free to try it and also recommend it to others. The results you get will be your own testimony."
  },
  {
    q: "Does it really work?",
    a: "Certainly, Jaysuing Hydrolyzed Collagen Neck Cream works. Customers comment about the visible reduction of fine lines, the smoothing of wrinkles, and the diminished puffiness. This is a testament to the product’s effectiveness and reliability."
  },
  {
    q: "How do I use it?",
    a: (
      <div className="space-y-4">
        <p>We have a three-step guide on how to use this neck cream. For effectiveness, please follow this guide strictly.</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Take a bath</strong> – Ensure you are clean and ready.</li>
          <li><strong>Apply the neck cream</strong> on your neck and chest area. Use an appropriate amount. Rub the cream evenly until it is well absorbed.</li>
          <li><strong>Apply twice daily</strong> – Use the cream in the morning and at night as part of your skincare routine.</li>
        </ol>
      </div>
    )
  },
  {
    q: "How/where can I get it?",
    a: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Thanks to our efficient nationwide distribution network, you can enjoy the convenience of ordering online and receiving your product within 2-3 business days. While you won’t find it in traditional pharmacies, our direct delivery system ensures you receive your order quickly and securely.</li>
        <li>The product gets to you between 2 – 3 days after purchase.</li>
      </ul>
    )
  },
  {
    q: "Is it just for old people?",
    a: "Skin issues aren’t exclusive to any age group. Whether you’re experiencing early signs of aging or simply want to maintain a healthy neck, Jaysuing Hydrolyzed Collagen Neck Cream is designed to deliver visible results. We’ve received glowing reviews from customers of all ages, proving that healthy, beautiful skin is achievable at any stage of life. Age is not the focus but the skin issues are. Don’t wait for signs of aging; invest in your skin’s future now. So, go ahead and give it a try."
  },
  {
    q: "What’s the delivery plan?",
    a: "We’ve created a delivery plan that prioritizes your convenience and security. Expect your order within 3 business days, with no hidden delivery fees. For added peace of mind, we offer a secure payment-on-delivery option, allowing you to inspect your product before payment. This customer-favorite service is designed to make your shopping experience as seamless and worry-free as possible. This is one gesture our customers have enjoyed and are still enjoying."
  },
  {
    q: "Is it only for women?",
    a: "Jaysuing Hydrolyzed Collagen Neck Cream is for everyone. While many women have discovered the incredible benefits of this Neck Cream, we’ve also received glowing testimonials from men who are equally thrilled with their results. It is suitable for both male and female. The truth is, everyone deserves to feel confident in their skin."
  },
  {
    q: "Hope it’s not a scam?",
    a: (
      <ul className="list-disc pl-5 space-y-2">
        <li>No! Our products and services are not scams. We are here to stay, and you can count on us. So far, we have not received negative reports about the product, our agents, and the delivery plan can be trusted.</li>
        <li>Our commitment to quality is reflected in the overwhelmingly positive feedback from our satisfied customers. We operate with complete transparency, and our delivery process is meticulously managed. You can rely on us to deliver on our promises, every time.</li>
      </ul>
    )
  },
  {
    q: "Is it an organic product?",
    a: "We understand the importance of gentle skincare. That’s why Jaysuing Hydrolyzed Collagen Neck Cream is carefully formulated with a blend of natural and naturally derived ingredients, chosen for their skin-loving properties. We prioritize ingredients that are both effective and safe, so you can feel confident in what you’re putting on your skin."
  },
  {
    q: "Does it have NAFDAC number?",
    a: "Jaysuing Hydrolyzed Collagen Neck Cream is an internationally formulated product, crafted to meet rigorous quality standards. While not made in Nigeria, it has undergone thorough testing and is certified safe by dermatologists. You can trust in its proven effectiveness and safety, regardless of where it’s produced."
  },
  {
    q: "Is this neck cream suitable for all skin types?",
    a: "Absolutely! This neck cream loves your skin already, and your skin will love it too once you start using it. Regardless of your skin type or your complexion, you can trust it. No adverse effect or skin irritation attached. However, we encourage everyone to observe if their skin reacts to it when they start using it. But be rest assured that the product is suitable for all skin types."
  },
  {
    q: "How long does it take to see visible results?",
    a: "Unlike other products, Jaysuing Hydrolyzed Collagen Neck Cream shows signs of effectiveness within 7 days. Yes, you read right! You will see visible results within 7 days, and in 3-4 weeks, you’ll notice that your neck issues are not becoming a thing of the past."
  },
  {
    q: "How soon can I see results from Collagen Neck Cream?",
    a: "Individual results may vary, but many users experience relief within a few days of starting Collagen Neck Cream. For best results, continue using Collagen Neck Serum as directed for the recommended duration."
  },
  {
    q: "How long does it take for delivery?",
    a: "Delivery times may vary depending on your location. Typically, domestic deliveries within Nigeria take 24 – 48hrs."
  },
  {
    q: "I'm getting an error message after submitting the form. What should I do?",
    a: "If you encounter an error message after submitting the form, please ensure all required fields are correctly filled out. Double-check your entries for accuracy, including your contact details and selected treatment option. If the issue persists, contact our customer support on 08137152040 for assistance."
  },
  {
    q: "I have questions. Can I speak to someone directly?",
    a: "Certainly! Our customer support team is available to answer your questions. You can reach us via phone at 08137152040."
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
