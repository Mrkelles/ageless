
"use client";

import * as React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const videos = [
  { id: "OamZCh7VYSc", title: "Visible Results", duration: "1:45" },
  { id: "rTLaukePnUU", title: "Customer Stories", duration: "2:10" },
  { id: "IH9WTehpogc", title: "Usage Guide", duration: "0:58" },
];

export function VideoCarousel() {
  const [mainApi, setMainApi] = React.useState<CarouselApi>();
  const [thumbApi, setThumbApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = React.useCallback(() => {
    if (!mainApi || !thumbApi) return;
    const index = mainApi.selectedScrollSnap();
    setSelectedIndex(index);
    thumbApi.scrollTo(index);
  }, [mainApi, thumbApi]);

  React.useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on("select", onSelect);
    mainApi.on("reInit", onSelect);
  }, [mainApi, onSelect]);

  const onThumbClick = React.useCallback(
    (index: number) => {
      if (!mainApi) return;
      mainApi.scrollTo(index);
    },
    [mainApi]
  );

  return (
    <section className="py-24 px-4 bg-white/40 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase">Video Gallery</p>
          <h2 className="text-3xl md:text-5xl font-headline font-bold">
            See the Magic <span className="accent-italic">in Action</span>
          </h2>
        </div>

        {/* Main Big Video Carousel */}
        <div className="relative group max-w-4xl mx-auto">
          <Carousel setApi={setMainApi} className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {videos.map((video, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl lavender-shadow bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                      title={video.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="absolute inset-y-0 -left-4 -right-4 flex items-center justify-between pointer-events-none">
              <CarouselPrevious className="relative left-0 pointer-events-auto h-12 w-12 bg-white shadow-xl hover:bg-primary hover:text-white border-none translate-x-0 translate-y-0" />
              <CarouselNext className="relative right-0 pointer-events-auto h-12 w-12 bg-white shadow-xl hover:bg-primary hover:text-white border-none translate-x-0 translate-y-0" />
            </div>
          </Carousel>
        </div>

        {/* Thumbnail Carousel beneath */}
        <div className="relative max-w-2xl mx-auto">
          <Carousel
            setApi={setThumbApi}
            opts={{
              align: "center",
              containScroll: "trimSnaps",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {videos.map((video, index) => {
                const isActive = selectedIndex === index;
                const thumbUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                
                return (
                  <CarouselItem 
                    key={index} 
                    className="pl-4 basis-1/3 cursor-pointer"
                    onClick={() => onThumbClick(index)}
                  >
                    <div 
                      className={cn(
                        "relative aspect-video rounded-2xl overflow-hidden border-2 transition-all duration-500",
                        isActive 
                          ? "border-primary scale-110 shadow-lg z-10" 
                          : "border-transparent opacity-40 grayscale-[50%]"
                      )}
                    >
                      <Image
                        src={thumbUrl}
                        alt={video.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                          isActive ? "bg-primary text-white" : "bg-white/80 text-primary"
                        )}>
                          <Play className="w-3 h-3 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <p className={cn(
                      "text-[10px] font-bold text-center mt-3 uppercase tracking-tighter transition-opacity",
                      isActive ? "opacity-100 text-primary" : "opacity-0"
                    )}>
                      {video.title}
                    </p>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            <div className="flex items-center justify-center gap-4 mt-6">
              <CarouselPrevious className="static translate-x-0 translate-y-0 h-8 w-8 rounded-full border-primary/20 hover:bg-primary/10" />
              <div className="flex gap-1.5">
                {videos.map((_, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      selectedIndex === i ? "bg-primary w-6" : "bg-primary/20 w-1.5"
                    )} 
                  />
                ))}
              </div>
              <CarouselNext className="static translate-x-0 translate-y-0 h-8 w-8 rounded-full border-primary/20 hover:bg-primary/10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
