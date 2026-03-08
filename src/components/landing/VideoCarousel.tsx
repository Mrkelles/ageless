
"use client";

import * as React from "react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const videos = [
  { id: "video-1", title: "Visible Results in 7 Days", duration: "1:45" },
  { id: "video-2", title: "How to Apply for Best Results", duration: "2:10" },
  { id: "video-3", title: "Real Customer Unboxing", duration: "0:58" },
  { id: "video-4", title: "Expert Dermatologist Review", duration: "3:20" },
  { id: "video-5", title: "My Morning Skincare Routine", duration: "1:15" },
];

export function VideoCarousel() {
  const [mainApi, setMainApi] = React.useState<CarouselApi>();
  const [thumbApi, setThumbApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = React.useCallback(() => {
    if (!mainApi || !thumbApi) return;
    setSelectedIndex(mainApi.selectedScrollSnap());
    thumbApi.scrollTo(mainApi.selectedScrollSnap());
  }, [mainApi, thumbApi]);

  React.useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on("select", onSelect);
    mainApi.on("reInit", onSelect);
  }, [mainApi, onSelect]);

  const onThumbClick = React.useCallback(
    (index: number) => {
      if (!mainApi || !thumbApi) return;
      mainApi.scrollTo(index);
    },
    [mainApi, thumbApi]
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
        <div className="relative group">
          <Carousel setApi={setMainApi} className="w-full">
            <CarouselContent>
              {videos.map((video, index) => {
                const img = getPlaceholderImage(video.id, {
                  imageUrl: "https://picsum.photos/seed/vid/800/600",
                  description: video.title,
                  imageHint: "skincare video",
                });
                return (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl lavender-shadow">
                      <Image
                        src={img.imageUrl}
                        alt={img.description}
                        fill
                        className="object-cover"
                        data-ai-hint={img.imageHint}
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group/play">
                        <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover/play:scale-110 transition-transform cursor-pointer">
                          <Play className="w-8 h-8 text-primary fill-current ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-8 left-8 text-white z-10">
                        <h3 className="text-2xl font-bold font-headline">{video.title}</h3>
                        <p className="text-sm opacity-80">{video.duration} • Tutorial</p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            {/* Custom styled arrows for the main video frame */}
            <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <CarouselPrevious className="relative left-0 pointer-events-auto h-12 w-12 bg-white/20 hover:bg-white/40 backdrop-blur-md border-none text-white translate-x-0 translate-y-0" />
              <CarouselNext className="relative right-0 pointer-events-auto h-12 w-12 bg-white/20 hover:bg-white/40 backdrop-blur-md border-none text-white translate-x-0 translate-y-0" />
            </div>
          </Carousel>
        </div>

        {/* Thumbnail Carousel beneath */}
        <div className="relative max-w-2xl mx-auto px-10">
          <Carousel
            setApi={setThumbApi}
            opts={{
              align: "center",
              containScroll: "trimSnaps",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video, index) => {
                const img = getPlaceholderImage(video.id, {
                  imageUrl: "https://picsum.photos/seed/vid/200/150",
                  description: video.title,
                  imageHint: "skincare thumb",
                });
                const isActive = selectedIndex === index;
                
                return (
                  <CarouselItem 
                    key={index} 
                    className="pl-2 md:pl-4 basis-1/3 cursor-pointer"
                    onClick={() => onThumbClick(index)}
                  >
                    <div 
                      className={cn(
                        "relative aspect-video rounded-2xl overflow-hidden border-2 transition-all duration-300",
                        isActive 
                          ? "border-primary scale-110 shadow-lg z-10" 
                          : "border-transparent opacity-60 scale-95"
                      )}
                    >
                      <Image
                        src={img.imageUrl}
                        alt={img.description}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className={cn("w-4 h-4 fill-current", isActive ? "text-primary" : "text-white")} />
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-x-0 translate-y-0 h-8 w-8 rounded-full border-primary/20 hover:bg-primary/10" />
              <div className="flex gap-2">
                {videos.map((_, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "w-1.5 h-1.5 rounded-full transition-all",
                      selectedIndex === i ? "bg-primary w-4" : "bg-primary/20"
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
