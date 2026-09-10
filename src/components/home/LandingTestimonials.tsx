/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface TestimonialVideo {
  id: string;
  index: string;
  name: string;
  location: string;
  systemType: string;
  duration: string;
  videoSrc: string;
  posterSrc: string;
  quoteSnippet: string;
}

const TESTIMONIAL_VIDEOS: TestimonialVideo[] = [
  {
    id: 'client-1',
    index: '01',
    name: 'Rajesh Patil',
    location: 'Amravati, Maharashtra',
    systemType: '5.2 kWp Elevated Rooftop Canopy',
    duration: '01:57',
    videoSrc: '/videos/client-1.mp4',
    posterSrc: '/images/client-1-poster.jpg',
    quoteSnippet: 'Zero rooftop space wasted with the elevated structure.',
  },
  {
    id: 'client-2',
    index: '02',
    name: 'Nitin Gaikwad',
    location: 'Chh. Sambhajinagar, Maharashtra',
    systemType: '6.4 kWp High-Efficiency Array',
    duration: '01:30',
    videoSrc: '/videos/client-2.mp4',
    posterSrc: '/images/client-2-poster.jpg',
    quoteSnippet: 'Electricity bills dropped immediately from month one.',
  },
  {
    id: 'client-3',
    index: '03',
    name: 'Pravin Joshi',
    location: 'Wardha, Maharashtra',
    systemType: '4.8 kWp Covered Terrace System',
    duration: '00:45',
    videoSrc: '/videos/client-3.mp4',
    posterSrc: '/images/client-3-poster.jpg',
    quoteSnippet: 'Complete net-metering and government subsidy handled seamlessly.',
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

  const handleSelectVideo = (index: number) => {
    if (index === currentIndex) {
      handlePlayToggle();
      return;
    }
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setCurrentIndex(index);
  };

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
      className="relative w-full bg-[#F7F5F0] border-t border-b border-[#E6E3DD] py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── SECTION HEADER & CONTROLS ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 border-b border-[#E6E3DD] pb-6">
          <div className="space-y-1.5">
            <span className="text-[11px] sm:text-xs font-medium font-body uppercase tracking-[0.18em] text-[#7A211D] block">
              CLIENT EXPERIENCES · VIDEO ARCHIVE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium text-[#151817] tracking-tight leading-tight m-0">
              Our Testimonials
            </h2>
            <p className="text-xs sm:text-sm text-[#6C6C68] font-body font-normal max-w-xl m-0 pt-1">
              Authentic homeowner walkthroughs and verified rooftop installations across Maharashtra.
            </p>
          </div>

          {/* Quick Arrow Controls */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <span className="text-xs font-heading font-semibold text-[#6C6C68] uppercase tracking-wider mr-2">
              {current.index} / 03
            </span>
            <button
              onClick={handlePrev}
              aria-label="Previous Video"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-none bg-white hover:bg-[#7A211D] text-[#151817] hover:text-white border border-[#E6E3DD] hover:border-[#7A211D] transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Video"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-none bg-white hover:bg-[#7A211D] text-[#151817] hover:text-white border border-[#E6E3DD] hover:border-[#7A211D] transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* ── ARCHITECTURAL THEATER: 12-COLUMN ASYMMETRIC GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ══ LEFT ZONE: 8 COLUMNS - CINEMATIC MAIN STAGE ══ */}
          <div className="lg:col-span-8 flex flex-col bg-white border border-[#E6E3DD] shadow-sm rounded-none overflow-hidden">
            
            {/* Top Architectural HUD Bar */}
            <div className="bg-[#151817] px-4 py-2.5 flex items-center justify-between text-white border-b border-stone-800">
              <div className="flex items-center gap-2.5">
                <span className="inline-block w-2 h-2 bg-[#7A211D] animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-body font-medium uppercase tracking-[0.18em] text-stone-300">
                  VIDEO {current.index} / 03 · VERIFIED HOMEOWNER
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-stone-400">
                  {current.duration}
                </span>
                <span className="text-[10px] uppercase font-body font-medium px-1.5 py-0.5 bg-stone-800 text-stone-300 border border-stone-700">
                  HD 720P
                </span>
              </div>
            </div>

            {/* Video Surface */}
            <div className="relative w-full aspect-[16/9] bg-black group overflow-hidden">
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

              {/* Custom Play Trigger Overlay (Hidden when video is playing) */}
              {!isPlaying && (
                <div
                  onClick={handlePlayToggle}
                  className="absolute inset-0 bg-black/25 hover:bg-black/15 transition-all duration-300 flex items-center justify-center cursor-pointer select-none"
                >
                  {/* Sharp Architectural Play Button */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-none bg-[#7A211D] hover:bg-[#962B26] text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-105 border border-white/30">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
                  </div>

                  {/* Bottom Floating Hover Hint */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none opacity-90">
                    <span className="text-xs sm:text-sm font-heading font-semibold text-white bg-black/60 px-3 py-1 backdrop-blur-xs border border-white/10">
                      Click to Watch: {current.name}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Architectural Caption Bar */}
            <div className="p-4 sm:p-5 bg-white border-t border-[#E6E3DD] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h3 className="font-heading text-lg sm:text-xl font-medium text-[#151817] m-0">
                    {current.name}
                  </h3>
                  <span className="text-[11px] font-body uppercase font-medium text-[#7A211D] bg-[#7A211D]/10 px-2 py-0.5 border border-[#7A211D]/20">
                    {current.location}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#6C6C68] font-body m-0">
                  {current.systemType} · <span className="italic text-stone-700">"{current.quoteSnippet}"</span>
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-xs font-medium font-body shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>SolarARK Verified Rooftop</span>
              </div>
            </div>

          </div>

          {/* ══ RIGHT ZONE: 4 COLUMNS - THE 3-VIDEO REEL SELECTOR ══ */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-1">
              <span className="text-[11px] font-body font-medium uppercase tracking-widest text-[#6C6C68]">
                SELECT TESTIMONIAL ({TESTIMONIAL_VIDEOS.length})
              </span>
              <span className="text-[11px] font-body text-[#6C6C68]">
                Click card to switch
              </span>
            </div>

            {TESTIMONIAL_VIDEOS.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectVideo(idx)}
                  className={`group cursor-pointer rounded-none border transition-all p-3 sm:p-3.5 flex items-start gap-3.5 ${
                    isActive
                      ? 'bg-white border-stone-400 border-l-4 border-l-[#7A211D] shadow-sm'
                      : 'bg-stone-50/70 hover:bg-white border-[#E6E3DD] hover:border-[#151817]'
                  }`}
                >
                  {/* Thumbnail Preview with Duration Chip */}
                  <div className="relative w-24 sm:w-28 aspect-[16/9] bg-stone-900 shrink-0 overflow-hidden border border-[#E6E3DD]">
                    <img
                      src={item.posterSrc}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 transition-colors flex items-center justify-center ${
                      isActive ? 'bg-[#7A211D]/30' : 'bg-black/30 group-hover:bg-black/10'
                    }`}>
                      <div className={`w-6 h-6 flex items-center justify-center rounded-none ${
                        isActive ? 'bg-[#7A211D] text-white' : 'bg-white/90 text-stone-800'
                      }`}>
                        <Play className="w-3 h-3 fill-current translate-x-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-1 right-1 text-[9px] font-mono font-bold bg-black/85 text-white px-1 py-0.2">
                      {item.duration}
                    </span>
                  </div>

                  {/* Metadata */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className={`text-[10px] font-mono font-medium uppercase tracking-wider ${
                        isActive ? 'text-[#7A211D]' : 'text-[#6C6C68]'
                      }`}>
                        STORY {item.index}
                      </span>
                      {isActive && (
                        <span className="text-[10px] font-body font-medium uppercase tracking-wider text-[#7A211D] flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-[#7A211D] animate-ping" />
                          Playing
                        </span>
                      )}
                    </div>

                    <h4 className="font-heading text-sm sm:text-base font-medium text-[#151817] truncate m-0">
                      {item.name}
                    </h4>

                    <p className="text-[11px] sm:text-xs text-[#6C6C68] font-body truncate m-0">
                      {item.location}
                    </p>

                    <p className="text-[11px] text-[#6C6C68] font-body line-clamp-1 italic m-0 pt-0.5">
                      "{item.quoteSnippet}"
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Micro Trust Strip */}
            <div className="bg-stone-100/80 border border-[#E6E3DD] p-3 flex items-center justify-between text-[#6C6C68] mt-1 font-body">
              <span className="text-[11px] font-normal">
                Recorded on-site at real SolarARK installations
              </span>
              <span className="text-[11px] font-medium text-[#7A211D]">
                100% Unscripted
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
