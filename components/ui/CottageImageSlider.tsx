"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";

export interface CottageImage {
  src: string;
  alt: string;
  title: string;
}

interface CottageImageSliderProps {
  images: CottageImage[];
  autoSlideInterval?: number;
}

export function CottageImageSlider({
  images,
  autoSlideInterval = 4500,
}: CottageImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = images.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play timer
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, autoSlideInterval, total]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 45;
      if (diff > minSwipeDistance) {
        nextSlide();
      } else if (diff < -minSwipeDistance) {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    // Resume auto-play after a short delay
    setTimeout(() => setIsPaused(false), 2000);
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      className="flex flex-col"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Slider Stage */}
      <div
        className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-warm-100 shadow-sm select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides Track */}
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div key={idx} className="relative h-full w-full shrink-0">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={idx === 0}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Floating Top Pill / Photo Counter */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="bg-forest-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[11px] font-medium border border-white/15 shadow-xs truncate max-w-[70%]">
            {images[currentIndex].title}
          </span>
          <span className="bg-forest-950/80 backdrop-blur-md px-2 py-0.5 rounded-full text-emerald-300 text-[10px] font-bold border border-white/15 shadow-xs">
            {currentIndex + 1} / {total}
          </span>
        </div>

        {/* Manual Arrow Buttons */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous cottage photo"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-forest-950/70 hover:bg-forest-900 active:scale-95 text-white flex items-center justify-center transition-all border border-white/20 backdrop-blur-sm shadow z-10 focus:outline-none"
        >
          <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next cottage photo"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-forest-950/70 hover:bg-forest-900 active:scale-95 text-white flex items-center justify-center transition-all border border-white/20 backdrop-blur-sm shadow z-10 focus:outline-none"
        >
          <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>

        {/* Mobile Dot Indicators (inside main image at bottom) */}
        <div className="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1.5 z-10 pointer-events-auto">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Go to photo ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === idx
                  ? "w-6 h-1.5 bg-emerald-400 shadow-sm"
                  : "w-1.5 h-1.5 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails Row (Desktop & Tablet Quick Navigation) */}
      <div className="hidden sm:grid grid-cols-4 gap-2.5 mt-3">
        {images.slice(0, 4).map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => goToSlide(idx)}
            className={`relative aspect-[16/10] rounded-xl overflow-hidden transition-all duration-200 border-2 ${
              currentIndex === idx
                ? "border-forest-700 ring-2 ring-forest-600/30 shadow-md scale-[1.02]"
                : "border-transparent opacity-75 hover:opacity-100"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="15vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
