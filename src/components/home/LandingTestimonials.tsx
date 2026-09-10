/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialVideo {
  id: string;
  name: string;
  location: string;
  videoSrc: string;
  posterSrc: string;
}

const TESTIMONIAL_VIDEOS: TestimonialVideo[] = [
  {
    id: 'client-1',
    name: 'Rajesh Patil',
    location: 'Amravati, Maharashtra',
    videoSrc: '/videos/client-testimonial-web.mp4',
    posterSrc: '/images/client-video-poster.jpg',
  },
  {
    id: 'client-2',
    name: 'Nitin Gaikwad',
    location: 'Chh. Sambhajinagar, Maharashtra',
    videoSrc: 'https://www.thesolarark.com/static/media/client22.80bbb9519d5085aa522d.mp4',
    posterSrc: '/images/client-video-poster.jpg',
  },
  {
    id: 'client-3',
    name: 'Pravin Joshi',
    location: 'Wardha, Maharashtra',
    videoSrc: 'https://www.thesolarark.com/static/media/client33.fa92b1c9475488f3c0bd.mp4',
    posterSrc: '/images/client-video-poster.jpg',
  },
];

export interface LandingTestimonialsProps {
  onNavigate?: (path: string) => void;
  onCtaClick?: () => void;
}

export const LandingTestimonials: React.FC<LandingTestimonialsProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const current = TESTIMONIAL_VIDEOS[currentIndex];

  const handlePrev = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIAL_VIDEOS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setCurrentIndex((prev) => (prev === TESTIMONIAL_VIDEOS.length - 1 ? 0 : prev + 1));
  };

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section 
      id="customer-stories" 
      className="relative w-full bg-[#FAF8F5] border-t border-b border-stone-300/80 py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── CLEAN CENTERED HEADER ── */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 space-y-1.5">
          <span className="text-[11px] sm:text-xs font-bold font-sans uppercase tracking-[0.24em] text-[#8B1E1E] block">
            TESTIMONIALS
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight leading-tight m-0">
            Our <span className="text-[#8B1E1E]">Testimonials</span>
          </h2>
        </div>

        {/* ── CENTERED VIDEO THEATER WITH SHARP BOXY CONTROLS ── */}
        <div className="relative flex items-center justify-center gap-2 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
          
          {/* Left Arrow Button (Sharp Boxy - NO rounded pill) */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-none bg-white hover:bg-[#8B1E1E] text-stone-700 hover:text-white border border-stone-300 hover:border-[#8B1E1E] transition-all flex items-center justify-center cursor-pointer shadow-2xs shrink-0 select-none"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Video Player Box (Sharp Architectural Geometry) */}
          <div className="relative w-full max-w-[840px] aspect-[16/9] bg-black rounded-none border border-stone-300 shadow-sm overflow-hidden group">
            <video
              key={current.videoSrc}
              ref={videoRef}
              src={current.videoSrc}
              poster={current.posterSrc}
              className="w-full h-full object-cover"
              controls={isPlaying}
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Custom Play Trigger Overlay (Hidden when playing) */}
            {!isPlaying && (
              <div
                onClick={handlePlayToggle}
                className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-all duration-300 flex items-center justify-center cursor-pointer select-none"
              >
                {/* Sharp Center Play Trigger */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-none bg-[#8B1E1E] hover:bg-[#A82424] text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-105 border border-white/20">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
                </div>
              </div>
            )}
          </div>

          {/* Right Arrow Button (Sharp Boxy - NO rounded pill) */}
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-none bg-white hover:bg-[#8B1E1E] text-stone-700 hover:text-white border border-stone-300 hover:border-[#8B1E1E] transition-all flex items-center justify-center cursor-pointer shadow-2xs shrink-0 select-none"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

        </div>

        {/* ── CLIENT NAME & LOCATION (Directly Below Video) ── */}
        <div className="text-center mt-5 sm:mt-6 space-y-1">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-stone-900 m-0">
            {current.name}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 font-sans m-0">
            {current.location}
          </p>
        </div>

        {/* ── BOX-STYLE SLIDE INDICATOR DASHES (Sharp Rectangles) ── */}
        <div className="mt-5 flex items-center justify-center gap-2">
          {TESTIMONIAL_VIDEOS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsPlaying(false);
                if (videoRef.current) {
                  videoRef.current.pause();
                  videoRef.current.currentTime = 0;
                }
                setCurrentIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 transition-all cursor-pointer rounded-none ${
                idx === currentIndex
                  ? 'w-8 bg-[#8B1E1E]'
                  : 'w-3 bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
