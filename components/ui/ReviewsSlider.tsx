"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { GuestReview } from "@/content/reviews";
import {
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  GoogleIcon,
} from "@/components/ui/icons";

interface ReviewsSliderProps {
  reviews: GuestReview[];
  autoSlideInterval?: number;
}

export function ReviewsSlider({
  reviews,
  autoSlideInterval = 5000,
}: ReviewsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = reviews.length;

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

  // Touch Swipe Handlers for mobile
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
    // Resume auto-slide after a brief rest
    setTimeout(() => setIsPaused(false), 2500);
  };

  if (!reviews || reviews.length === 0) return null;

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Carousel Window */}
      <div
        className="overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="w-full shrink-0 px-0.5"
            >
              <div className="bg-beige-50 rounded-2xl p-5 sm:p-6 border border-warm-300/80 shadow-sm flex flex-col justify-between min-h-[290px] sm:min-h-[270px]">
                <div className="space-y-3">
                  {/* Top Bar: Stars + Tag */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="inline-block text-[11px] font-semibold text-forest-800 bg-forest-50 px-2.5 py-0.5 rounded-full border border-forest-100">
                      {review.tag}
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-olive-800 leading-relaxed italic line-clamp-6">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Reviewer Meta Footer */}
                <div className="pt-3.5 mt-2 border-t border-warm-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-forest-800 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                      {review.avatarInitial}
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs sm:text-sm text-forest-950">
                        {review.author}
                      </h4>
                      <p className="text-[11px] text-olive-700">
                        {review.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-warm-500 text-[11px]">
                    <GoogleIcon className="w-3.5 h-3.5" />
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls (Manual Arrows & Dots) */}
      <div className="flex items-center justify-between mt-4 px-1">
        {/* Prev Arrow */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous review"
          className="w-8 h-8 rounded-full bg-forest-900 hover:bg-forest-800 active:scale-95 text-white flex items-center justify-center transition-all shadow-xs focus:outline-none"
        >
          <ChevronLeftIcon className="w-4 h-4 text-white" />
        </button>

        {/* Indicator Dots */}
        <div className="flex items-center gap-1.5">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Go to review ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === idx
                  ? "w-6 h-2 bg-forest-800 shadow-xs"
                  : "w-2 h-2 bg-warm-300 hover:bg-warm-400"
              }`}
            />
          ))}
        </div>

        {/* Next Arrow */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next review"
          className="w-8 h-8 rounded-full bg-forest-900 hover:bg-forest-800 active:scale-95 text-white flex items-center justify-center transition-all shadow-xs focus:outline-none"
        >
          <ChevronRightIcon className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}
