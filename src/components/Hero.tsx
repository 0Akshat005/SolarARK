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
  Cog,
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
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleScroll = (elementId: string) => {
    if (elementId === 'calculator' && onCalculatorClick) {
      onCalculatorClick();
      return;
    }
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ── DESKTOP ITEMS: Matching media_1788899365713.png ──
  const desktopItems = [
    {
      icon: Home,
      title: 'For Your Home',
      line1: 'Lower electricity bills.',
      line2: 'A brighter future.',
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
      line1: 'Smarter energy.',
      line2: 'Higher savings.',
      description: 'Smarter energy. Higher savings.',
      action: () => {
        handleScroll('solutions');
      },
      ariaLabel: 'Explore commercial and industrial solar solutions',
    },
    {
      icon: Cog,
      title: 'End-to-End Support',
      line1: 'From consultation',
      line2: 'to commissioning.',
      description: 'From consultation to commissioning.',
      action: () => {
        handleScroll('solutions');
      },
      ariaLabel: 'Learn about our turnkey solar engineering process',
    },
    {
      icon: Leaf,
      title: 'A Cleaner Tomorrow',
      line1: 'Sustainable energy',
      line2: 'for generations.',
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
      line1: 'Lower electricity bills.',
      line2: 'A brighter future.',
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
      line1: 'Smarter energy.',
      line2: 'Greater savings.',
      description: 'Smarter energy. Greater savings.',
      action: () => {
        handleScroll('solutions');
      },
      ariaLabel: 'Explore commercial solar solutions',
    },
    {
      icon: Layers,
      title: 'End-to-End Solar',
      line1: 'From consultation',
      line2: 'to commissioning.',
      description: 'From consultation to commissioning.',
      action: () => {
        handleScroll('solutions');
      },
      ariaLabel: 'Learn about our turnkey solar engineering process',
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      line1: "We're with you",
      line2: 'beyond installation.',
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
        className="relative w-full overflow-hidden bg-[#0A0F1D] min-h-[60vh] sm:min-h-[70vh] lg:h-[calc(100vh-165px)] lg:min-h-[480px] lg:max-h-[725px] flex items-center justify-center"
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
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none pb-4 sm:pb-6 lg:pb-7 px-4 sm:px-8 lg:px-12 bg-gradient-to-t from-[#0A0F1D]/90 via-[#0A0F1D]/40 to-transparent pt-12 sm:pt-20">
          <div className="max-w-[1400px] mx-auto flex flex-row items-end justify-between gap-3 sm:gap-6 pointer-events-auto">
            
            {/* Editorial Headline & Eyebrow (Compact, Structured, Video-First) */}
            <div className="space-y-1 sm:space-y-2 max-w-xl flex-1">
              {/* Eyebrow with subtle maroon accent line */}
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span className="w-5 sm:w-8 h-[2px] bg-[#8B1E1E] shrink-0" />
                <p className="text-[9px] sm:text-[11px] font-semibold tracking-[0.16em] text-white/85 uppercase font-sans m-0">
                  TRUSTED BY HOMES &amp; BUSINESSES
                </p>
              </div>

              {/* Serif Display Headline: Proportional, Elegant Editorial Sizing */}
              <h1
                className="font-serif text-[21px] sm:text-2xl lg:text-[32px] xl:text-[36px] font-normal text-white tracking-tight leading-[1.18] m-0"
                style={{ textShadow: '0 2px 18px rgba(0, 0, 0, 0.7)' }}
              >
                Reliable Solar Solutions.<br />
                Real Impact.
              </h1>
            </div>

            {/* Controls on the RIGHT side (Never obstructing video view) */}
            <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3 shrink-0 pb-0.5">
              <div className="hidden sm:flex items-center gap-2 text-[11px] font-medium tracking-wider text-white/70 uppercase font-sans">
                <span>Real Project Footage</span>
                <span className="text-white/30 font-light">/</span>
                <span>Maharashtra</span>
              </div>

              {/* Frameless, clean controls */}
              <div className="flex items-center gap-1 sm:pl-3 sm:border-l sm:border-white/20">
                <button
                  onClick={togglePlayPause}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  className="w-8 h-8 rounded-lg bg-black/40 hover:bg-black/60 text-white/85 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/15 backdrop-blur-xs"
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
                  className="w-8 h-8 rounded-lg bg-black/40 hover:bg-black/60 text-white/85 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/15 backdrop-blur-xs"
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
        className="w-full bg-[#FAF8F5] border-b border-stone-200/80 relative z-10 overflow-hidden"
      >
        {/* Subtle topographical architectural contour line watermark matching reference */}
        <svg
          className="absolute -bottom-6 -left-6 w-80 h-48 pointer-events-none opacity-25 text-[#D1BEA8] select-none"
          viewBox="0 0 260 170"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.85"
        >
          <path d="M-20 170 C 35 145, 75 105, 140 125 C 200 145, 220 95, 270 85" />
          <path d="M-30 140 C 25 115, 85 75, 160 95 C 220 115, 240 65, 290 55" />
          <path d="M-40 110 C 15 85, 95 45, 180 65 C 240 85, 250 35, 310 25" />
          <path d="M-50 80 C 5 55, 105 15, 200 35 C 260 55, 270 5, 330 -5" />
        </svg>

        {/* ── DESKTOP VIEW (≥ lg / 1024px): 4 Columns + Full-Bleed Right Scenic Vignette Matching Desktop Reference ── */}
        <div className="hidden lg:grid grid-cols-12 w-full min-h-[148px] items-stretch relative z-10 pl-4 sm:pl-6 lg:pl-8 xl:pl-12 pr-0">
          {/* Left 4 Columns (9 cols of 12) */}
          <div className="col-span-9 grid grid-cols-4 py-2 xl:py-2.5 px-4 xl:px-6 divide-x divide-[#EAE1D3]">
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
                  className="group cursor-pointer flex flex-col justify-between text-left px-4 xl:px-5 first:pl-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/40 rounded-xl transition-all"
                >
                  <div className="space-y-1.5">
                    {/* Bespoke Architectural Warm Sandstone Medallion */}
                    <div className="w-10 h-10 xl:w-11 xl:h-11 rounded-full bg-gradient-to-br from-[#FAF5ED] via-[#F4ECE1] to-[#EAE0D0] border border-[#E2D5C3] shadow-[0_2px_8px_rgba(42,33,24,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] flex items-center justify-center text-[#8B1E1E] transition-all duration-300 group-hover:border-[#8B1E1E]/40 group-hover:shadow-[0_4px_14px_rgba(139,30,30,0.12)] group-hover:scale-105">
                      <Icon className="w-4.5 h-4.5 xl:w-5 xl:h-5 stroke-[1.65]" />
                    </div>

                    {/* Headline in Editorial Serif */}
                    <h3 className="font-serif text-[16px] xl:text-[17px] font-medium text-stone-900 tracking-[-0.01em] group-hover:text-[#8B1E1E] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Supporting 2-Line Editorial Copy */}
                    <p className="text-[12px] xl:text-[12.5px] text-stone-600 font-normal leading-tight text-left">
                      <span>{item.line1}</span>
                      <br />
                      <span className="text-stone-500">{item.line2}</span>
                    </p>
                  </div>

                  {/* Bespoke Circular Micro-Action Button */}
                  <div className="pt-2 flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#F5ECE0]/80 border border-[#E2D5C3]/80 flex items-center justify-center text-[#8B1E1E] group-hover:bg-[#8B1E1E] group-hover:border-[#8B1E1E] group-hover:text-white group-hover:translate-x-1 transition-all duration-300 shadow-sm">
                      <ArrowRight className="w-3 h-3 stroke-[2]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Brand Vignette (3 cols of 12) Matching Editorial Reference */}
          <div className="col-span-3 relative border-l border-[#EAE1D3] overflow-hidden flex flex-col justify-center py-2.5 px-4 xl:px-6 select-none">
            {/* Background scenic photo with soft ivory gradient fade */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img
                src="/images/solar-sunrise-editorial.jpg"
                alt="Clean energy brighter lives sunrise backdrop"
                className="w-full h-full object-cover object-[78%_center] xl:object-[82%_center] opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/60 38% to-transparent" />
            </div>

            {/* Foreground Brand Note */}
            <div className="relative z-10 space-y-1.5">
              {/* Eyebrow: maroon accent line + leaf + small refined uppercase text */}
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-4 h-[1.5px] bg-[#8B1E1E] shrink-0" />
                <Leaf className="w-3.5 h-3.5 text-[#8B1E1E] stroke-[1.75] shrink-0" />
                <span className="text-[9.5px] xl:text-[10.5px] font-bold tracking-[0.14em] text-stone-700 uppercase font-sans">
                  POWERING A BRIGHTER TOMORROW
                </span>
              </div>

              {/* Script Headline: Visual Focal Point with Elegant Underline Accent */}
              <div className="pt-0.5">
                <div
                  className="text-[25px] xl:text-[29px] text-[#8B1E1E] leading-[1.08] -rotate-2 transform inline-block"
                  style={{ fontFamily: "var(--font-handwriting, 'Caveat', cursive)" }}
                >
                  <span className="block">Clean energy,</span>
                  <span className="relative inline-block mt-0.5">
                    brighter lives
                    <svg
                      className="absolute -bottom-1 left-0 w-full h-2 text-[#8B1E1E] overflow-visible"
                      viewBox="0 0 120 8"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 5C35 2, 85 2, 118 6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
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
              <span className="text-[11px] font-bold tracking-[0.16em] text-stone-500 uppercase font-sans">
                WHY SOLARARK
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 tracking-tight leading-tight">
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
                    idx % 2 === 0 ? 'border-r border-[#EAE1D3] pr-4 sm:pr-6' : 'pl-4 sm:pl-6'
                  } ${
                    /* Horizontal cross border: row 1 has bottom border */
                    idx < 2 ? 'border-b border-[#EAE1D3] pb-5 sm:pb-6' : 'pt-5 sm:pt-6'
                  }`}
                >
                  <div className="space-y-2">
                    {/* Bespoke Architectural Warm Sandstone Medallion */}
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#FAF5ED] via-[#F4ECE1] to-[#EAE0D0] border border-[#E2D5C3] shadow-[0_2px_8px_rgba(42,33,24,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] flex items-center justify-center text-[#8B1E1E] transition-all duration-300 group-hover:border-[#8B1E1E]/40 group-hover:scale-105">
                      <Icon className="w-5 h-5 stroke-[1.65]" />
                    </div>

                    {/* Title in Serif */}
                    <h3 className="font-serif text-[15px] sm:text-base font-medium text-stone-900 leading-snug group-hover:text-[#8B1E1E] transition-colors">
                      {item.title}
                    </h3>

                    {/* Subtext with 2-line cadence */}
                    <p className="text-[11px] sm:text-xs text-stone-600 font-normal leading-relaxed text-left">
                      <span>{item.line1}</span>
                      <br />
                      <span className="text-stone-500">{item.line2}</span>
                    </p>
                  </div>

                  {/* Micro circular arrow button matching reference */}
                  <div className="pt-3">
                    <div className="w-6 h-6 rounded-full bg-[#F5ECE0] border border-[#E2D5C3] flex items-center justify-center text-[#8B1E1E] transition-all duration-300 group-hover:bg-[#8B1E1E] group-hover:border-[#8B1E1E] group-hover:text-white group-hover:translate-x-0.5 shadow-sm">
                      <ArrowRight className="w-3 h-3 stroke-[2]" />
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
            className="mt-5 p-3.5 sm:p-4 rounded-2xl bg-[#F7F3EB] border border-[#E4D7C5] flex items-center justify-between gap-3 cursor-pointer group hover:border-[#8B1E1E]/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/40 shadow-sm"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FAF5ED] via-[#F4ECE1] to-[#EAE0D0] border border-[#E2D5C3] shadow-[0_2px_8px_rgba(42,33,24,0.06)] text-[#8B1E1E] flex items-center justify-center shrink-0 group-hover:border-[#8B1E1E]/40 group-hover:scale-105 transition-all">
                <Leaf className="w-4.5 h-4.5 stroke-[1.65]" />
              </div>
              <div className="min-w-0">
                <h4 className="font-serif text-sm sm:text-base font-medium text-stone-900 group-hover:text-[#8B1E1E] transition-colors truncate">
                  A Cleaner, Brighter Maharashtra
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-600 truncate mt-0.5 font-sans">
                  Sustainable energy for stronger communities.
                </p>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full bg-[#F5ECE0] border border-[#E2D5C3] flex items-center justify-center text-[#8B1E1E] group-hover:bg-[#8B1E1E] group-hover:border-[#8B1E1E] group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0 shadow-sm">
              <ArrowRight className="w-3 h-3 stroke-[2]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

