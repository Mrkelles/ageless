
"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const mainReviews = [
  {
    name: "Maria",
    text: "I was always self-conscious about my 'turkey neck.' Within weeks, the sagging skin started to tighten up! I finally feel confident wearing V-neck tops again.",
    rating: 5,
    avatar: PlaceHolderImages.find(img => img.id === "testimonial-1")?.imageUrl
  },
  {
    name: "Mrs. Enem Bassey",
    text: "It is Magical, I got mine few days back and I have been applying it, the results is great. I wish i got it earlier instead of wasting money.",
    rating: 5,
    avatar: PlaceHolderImages.find(img => img.id === "testimonial-2")?.imageUrl
  },
  {
    name: "Tare",
    text: "The swelling went down, and my skin feels firmer and more toned. My husband noticed and asked what I've been doing differently! Thanks to the Jaysuing Miracle!",
    rating: 5,
    avatar: PlaceHolderImages.find(img => img.id === "testimonial-3")?.imageUrl
  }
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">Real Stories</p>
          <h2 className="text-3xl md:text-5xl font-headline font-bold">
            See What Our <span className="accent-italic">Customers Are Saying</span>
          </h2>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto mb-16">
          <CarouselContent>
            {mainReviews.map((review, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-none bg-white p-8 md:p-12 relative overflow-hidden lavender-shadow">
                    <Quote className="absolute -top-4 -right-4 w-32 h-32 text-primary/5 -rotate-12" />
                    <CardContent className="flex flex-col items-center text-center p-0 space-y-6">
                      <div className="flex text-amber-400">
                        {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                      </div>
                      <p className="text-lg md:text-2xl font-medium leading-relaxed italic">
                        "{review.text}"
                      </p>
                      <div className="flex flex-col items-center gap-2">
                        <Avatar className="w-16 h-16 border-4 border-primary/10">
                          <AvatarImage src={review.avatar} alt={review.name} />
                          <AvatarFallback>{review.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="font-bold text-lg">{review.name}</span>
                        <span className="text-xs text-primary font-medium tracking-wide uppercase">Verified Customer</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Annette", text: "I tried so many organic creams but they did nothing. This collagen cream changed everything—my skin is smoother and firmer." },
            { name: "Funmilayo Adekunle", text: "I never really trusted skincare products, but this cream changed my mind. The fine lines are fading!" },
            { name: "Anthonia", text: "Works wonders for my neck! My skin feels tighter, and the results are amazing. I use it every day!" }
          ].map((r, i) => (
            <Card key={i} className="p-6 border-none bg-white/70 backdrop-blur-sm lavender-shadow">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="text-sm text-secondary-foreground/80 mb-4 italic">"{r.text}"</p>
              <div className="font-bold text-sm">— {r.name}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
