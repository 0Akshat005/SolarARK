/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Home,
  Building2,
  Layers,
  Headphones,
  Leaf,
  ArrowRight
} from 'lucide-react';

interface HeroProps {
  onCtaClick?: () => void;
  onCalculatorClick?: () => void;
  onClaimEstimate?: (data: { pincode: string; monthlyBill: number }) => void;
  onNavigate?: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onCtaClick,
  onCalculatorClick,
  onNavigate,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mq.matches);

    if (mq.matches && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Browser autoplay fallback
      });
    }
  }, []);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ── DESKTOP ITEMS: Matching media_1788899365713.png ──
  const desktopItems = [
    {
      icon: Home,
      title: 'For Your Home',
      description: 'Lower electricity bills. A brighter future.',
      action: () => {
        if (onCalculatorClick) {
          onCalculatorClick();
        } else {
          handleScroll('calculator');
        }
      },
      ariaLabel: 'Explore home solar solutions and calculate savings',
    },
    {
      icon: Building2,
      title: 'For Your Business',
      description: 'Smarter energy. Higher savings.',
      action: () => {
        handleScroll('solutions');
      },
      ariaLabel: 'Explore commercial and industrial solar solutions',
    },
    {
      icon: Layers,
      title: 'End-to-End Support',
      description: 'From consultation to commissioning.',
      action: () => {
        handleScroll('solutions');
      },
      ariaLabel: 'Learn about our turnkey solar engineering process',
    },
    {
      icon: Leaf,
      title: 'A Cleaner Tomorrow',
      description: 'Sustainable energy for generations.',
      action: () => {
        if (onCtaClick) {
          onCtaClick();
        } else {
          handleScroll('contact-form');
        }
      },
      ariaLabel: 'Contact our solar advisory and support team',
    },
  ];

  // ── MOBILE 2×2 GRID ITEMS: Matching media_1788899365794.png ──
  const mobileGridItems = [
    {
      icon: Home,
      title: 'For Your Home',
      description: 'Lower electricity bills. A brighter future.',
      action: () => {
        if (onCalculatorClick) {
          onCalculatorClick();
        } else {
          handleScroll('calculator');
        }
      },
      ariaLabel: 'Explore home solar solutions and calculate savings',
    },
    {
      icon: Building2,
      title: 'For Your Business',
      description: 'Smarter energy. Greater savings.',
      action: () => {
        handleScroll('solutions');
      },
      ariaLabel: 'Explore commercial solar solutions',
    },
    {
      icon: Layers,
      title: 'End-to-End Solar',
      description: 'From consultation to commissioning.',
      action: () => {
        handleScroll('solutions');
      },
      ariaLabel: 'Learn about our turnkey solar engineering process',
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      description: "We're with you beyond installation.",
      action: () => {
        if (onCtaClick) {
          onCtaClick();
        } else {
          handleScroll('contact-form');
        }
      },
      ariaLabel: 'Contact our ongoing solar support team',
    },
  ];

  return (
    <>
      {/* ── 1. IMMERSIVE BACKGROUND-VIDEO HERO (VIDEO-FIRST) ── */}
      <section
        id="hero"
        className="relative w-full overflow-hidden bg-[#0A0F1D] min-h-[65vh] sm:min-h-[80vh] lg:min-h-[92vh] max-h-[1050px] flex items-center justify-center"
      >
        {/* Full-bleed real project hero video with 60fps web-optimized local stream */}
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-[#0A0F1D] transform-gpu">
          <video
            ref={videoRef}
            autoPlay={!isReducedMotion}
            muted={isMuted}
            defaultMuted
            loop
            playsInline
            preload="auto"
            poster="/images/hero-video-poster.jpg"
            className="w-full h-full object-cover object-center will-change-transform transform-gpu"
          >
            <source
              src="/videos/hero-drone-installation.mp4"
              type="video/mp4"
            />
            <source
              src="https://www.thesolarark.com/static/media/homepage1.064e908497b52c839705.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* ── Bottom Gradient Overlay & Editorial Hero Content ── */}
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-8 lg:px-12 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/70 to-transparent pt-24 sm:pt-32">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 pointer-events-auto">
            
            {/* Editorial Headline & Eyebrow (Refined Scale Matching Reference Exactly) */}
            <div className="space-y-2.5 sm:space-y-3 max-w-xl">
              {/* Eyebrow with subtle maroon accent line */}
              <div className="flex items-start gap-2.5">
                <span className="w-6 sm:w-8 h-[2px] bg-[#8B1E1E] mt-1.5 shrink-0" />
                <div className="space-y-0.5">
                  <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-white/80 uppercase font-sans">
                    TRUSTED BY HOMES.
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-white/80 uppercase font-sans">
                    BUSINESSES &amp; A CLEANER TOMORROW
                  </p>
                </div>
              </div>

              {/* Serif Display Headline: Proportional, Elegant Editorial Sizing */}
              <h1
                className="font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-normal text-white tracking-tight leading-[1.18]"
                style={{ textShadow: '0 2px 18px rgba(0, 0, 0, 0.6)' }}
              >
                Reliable Solar Solutions.<br />
                Real Impact.
              </h1>
            </div>

            {/* Frameless Editorial Location Stamp & Discreet Controls (Zero AI Capsule Pill) */}
            <div className="flex items-center gap-3 self-start md:self-end pb-1">
              <div className="hidden sm:flex items-center gap-2 text-[11px] font-medium tracking-wider text-white/70 uppercase font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Real Project Footage</span>
                <span className="text-white/30">•</span>
                <span>Maharashtra</span>
              </div>

              {/* Frameless, clean controls */}
              <div className="flex items-center gap-1 sm:pl-3 sm:border-l sm:border-white/20">
                <button
                  onClick={togglePlayPause}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  className="w-8 h-8 rounded-lg bg-black/30 hover:bg-black/50 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                  title={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5 fill-current" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  className="w-8 h-8 rounded-lg bg-black/30 hover:bg-black/50 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                  title={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? (
                    <VolumeX className="w-3.5 h-3.5" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. EDITORIAL CONFIDENCE BRIDGE & TRANSITION ── */}
      <section
        aria-label="SolarARK Core Capabilities"
        className="w-full bg-[#FAF8F5] border-b border-stone-200/80 relative z-10"
      >
        {/* ── DESKTOP VIEW (≥ lg / 1024px): 4 Columns + Right Scenic Vignette Matching Desktop Reference ── */}
        <div className="hidden lg:grid grid-cols-12 max-w-[1440px] mx-auto min-h-[140px]">
          {/* Left 4 Columns (9 cols of 12) */}
          <div className="col-span-9 grid grid-cols-4 py-8 px-4 xl:px-6 divide-x divide-stone-200/80">
            {desktopItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={item.action}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      item.action();
                    }
                  }}
                  aria-label={item.ariaLabel}
                  className="group cursor-pointer flex flex-col justify-between text-left px-5 xl:px-6 first:pl-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/40 rounded-lg transition-colors"
                >
                  <div className="space-y-2.5">
                    {/* Compact circular icon frame */}
                    <div className="w-10 h-10 rounded-full bg-[#8B1E1E]/8 text-[#8B1E1E] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#8B1E1E] group-hover:text-white">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>

                    {/* Headline */}
                    <h3 className="font-heading text-base xl:text-[17px] font-bold text-stone-900 tracking-tight group-hover:text-[#8B1E1E] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Supporting Value Copy */}
                    <p className="text-xs xl:text-[13px] text-stone-600 font-normal leading-relaxed text-left">
                      {item.description}
                    </p>
                  </div>

                  {/* Restrained Interactive Action Arrow */}
                  <div className="pt-3.5 flex items-center">
                    <ArrowRight className="w-4 h-4 text-[#8B1E1E] transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Brand Vignette (3 cols of 12) Matching Desktop Reference */}
          <div className="col-span-3 relative border-l border-stone-200/80 overflow-hidden flex flex-col justify-center py-6 px-6 xl:px-8">
            {/* Background scenic photo with soft ivory gradient fade */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img
                src="/images/calc-sunset-sky.jpg"
                alt="Clean energy brighter lives sunset backdrop"
                className="w-full h-full object-cover object-right opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/85 to-transparent" />
            </div>

            {/* Foreground Brand Note */}
            <div className="relative z-10 space-y-2">
              <div className="flex items-center gap-1.5 text-[10px] xl:text-[11px] font-bold tracking-[0.16em] text-stone-600 uppercase">
                <Leaf className="w-3.5 h-3.5 text-[#8B1E1E]" />
                <span>POWERING A BRIGHTER TOMORROW</span>
              </div>
              <div className="pt-1">
                <span
                  className="block text-2xl xl:text-3xl text-[#8B1E1E] leading-tight select-none -rotate-2 transform"
                  style={{ fontFamily: "var(--font-handwriting, 'Caveat', cursive)" }}
                >
                  Clean energy brighter lives
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE / TABLET VIEW (< lg / 1024px): Intentional 2×2 "Why SolarARK" Composition Matching Mobile Reference ── */}
        <div className="block lg:hidden px-4 sm:px-6 py-8 sm:py-10 max-w-2xl mx-auto">
          {/* Header */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#8B1E1E]" />
              <span className="text-[11px] font-bold tracking-[0.16em] text-stone-500 uppercase">
                WHY SOLARARK
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight">
              Powering What Matters to You
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed text-left pt-0.5">
              From homes to businesses, we make solar simple, reliable and worry-free.
            </p>
          </div>

          {/* 2×2 Cross-Divider Grid Matching Reference */}
          <div className="grid grid-cols-2 mt-6">
            {mobileGridItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={item.action}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      item.action();
                    }
                  }}
                  aria-label={item.ariaLabel}
                  className={`group cursor-pointer flex flex-col justify-between p-3.5 sm:p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/40 transition-colors ${
                    /* Vertical cross border: column 1 has right border */
                    idx % 2 === 0 ? 'border-r border-stone-200/80 pr-4 sm:pr-6' : 'pl-4 sm:pl-6'
                  } ${
                    /* Horizontal cross border: row 1 has bottom border */
                    idx < 2 ? 'border-b border-stone-200/80 pb-5 sm:pb-6' : 'pt-5 sm:pt-6'
                  }`}
                >
                  <div className="space-y-2">
                    {/* Compact circular icon frame */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8B1E1E]/8 text-[#8B1E1E] flex items-center justify-center transition-colors group-hover:bg-[#8B1E1E] group-hover:text-white">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-[13px] sm:text-sm font-bold text-stone-900 leading-snug group-hover:text-[#8B1E1E] transition-colors">
                      {item.title}
                    </h3>

                    {/* Subtext */}
                    <p className="text-[11px] sm:text-xs text-stone-600 font-normal leading-relaxed text-left">
                      {item.description}
                    </p>
                  </div>

                  {/* Micro circular arrow button matching reference */}
                  <div className="pt-3">
                    <div className="w-6 h-6 rounded-full bg-stone-100/90 border border-stone-200/70 flex items-center justify-center text-[#8B1E1E] transition-all duration-200 group-hover:bg-[#8B1E1E] group-hover:text-white group-hover:translate-x-0.5">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Community Banner Card: "A Cleaner, Brighter Maharashtra" */}
          <div
            onClick={() => {
              if (onCtaClick) {
                onCtaClick();
              } else {
                handleScroll('contact-form');
              }
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (onCtaClick) onCtaClick();
                else handleScroll('contact-form');
              }
            }}
            aria-label="Learn about sustainable energy for Maharashtra communities"
            className="mt-5 p-3.5 sm:p-4 rounded-2xl bg-[#F4F1EB] border border-stone-200/80 flex items-center justify-between gap-3 cursor-pointer group hover:border-[#8B1E1E]/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/40"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8B1E1E]/8 text-[#8B1E1E] flex items-center justify-center shrink-0 group-hover:bg-[#8B1E1E] group-hover:text-white transition-colors">
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
              </div>
              <div className="min-w-0">
                <h4 className="font-heading text-xs sm:text-sm font-bold text-stone-900 group-hover:text-[#8B1E1E] transition-colors truncate">
                  A Cleaner, Brighter Maharashtra
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-600 truncate mt-0.5">
                  Sustainable energy for stronger communities.
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#8B1E1E] shrink-0 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </section>
    </>
  );
};

