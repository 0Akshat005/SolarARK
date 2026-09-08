/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import {
  BadgeCheck,
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

  const desktopRailItems = [
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
      ariaLabel: 'Calculate residential solar savings',
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

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO BANNER
          Desktop: Immersive Drone Video + Editorial Title + Controls Dock
          Mobile: Architectural Villa Sunset + Script Signature + Maroon CTA
          ══════════════════════════════════════════════════════════════════════ */}
      
      {/* ── DESKTOP HERO (lg:flex) per reference media_1788898100400.png ── */}
      <section
        id="hero"
        aria-label="SolarARK Hero Banner"
        className="relative w-full overflow-hidden bg-[#0A0F1D] min-h-[68vh] sm:min-h-[82vh] lg:min-h-[90vh] max-h-[1050px] hidden lg:flex items-center justify-center"
      >
        {/* Full-bleed real project hero video */}
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

        {/* High-contrast photographic scrim */}
        <div className="absolute inset-0 z-[5] bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 z-[6] h-36 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/60 to-transparent pointer-events-none" />

        {/* Desktop Foreground Content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-8 xl:px-12 py-12 flex flex-col justify-between min-h-[70vh]">
          <div className="max-w-2xl space-y-4 pt-16">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-0.5 bg-[#8B1E1E]" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-stone-300">
                TRUSTED BY HOMES, BUSINESSES &amp; A CLEANER TOMORROW
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl xl:text-5xl 2xl:text-[56px] font-bold text-white tracking-tight leading-[1.08]">
              Reliable Solar Solutions.<br />
              <span className="text-stone-200">Real Impact.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-stone-300 font-normal leading-relaxed max-w-lg pt-1">
              Cut electricity costs up to 90% with Tier-1 residential &amp; commercial solar EPC across Maharashtra.
            </p>

            {/* CTA Button */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onCtaClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[14px] bg-[#8B1E1E] hover:bg-[#A82424] text-white text-sm font-heading font-semibold shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Get a Free Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Dock: Partner Pill & On-Site Video Controls */}
          <div className="flex items-center justify-between gap-3 pt-8 pointer-events-auto">
            <div className="eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white shadow-sm text-xs tracking-wide">
              <BadgeCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>PM SURYA GHAR AUTHORIZED EPC PARTNER</span>
            </div>

            <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/15 rounded-full px-3.5 py-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span className="text-amber-300 font-heading">ON-SITE FOOTAGE</span>
                <span className="text-slate-400">•</span>
                <span>Maharashtra EPC</span>
              </div>

              <div className="flex items-center gap-1 pl-2 border-l border-white/20">
                <button
                  onClick={togglePlayPause}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  {isPlaying ? (
                    <Pause className="w-3 h-3 fill-white" />
                  ) : (
                    <Play className="w-3 h-3 fill-white ml-0.5" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
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

      {/* ── MOBILE HERO (block lg:hidden) per reference media_1788898112364.png ── */}
      <section
        aria-label="SolarARK Mobile Hero"
        className="relative w-full overflow-hidden bg-[#0A0F1D] min-h-[580px] sm:min-h-[640px] flex flex-col justify-between p-5 sm:p-7 pt-24 sm:pt-28 block lg:hidden"
      >
        {/* Authentic Rooftop Sunset Villa Photography */}
        <img
          src="/images/calc-villa-sunset.jpg"
          alt="Modern architectural home with rooftop solar panels at golden hour"
          className="absolute inset-0 w-full h-full object-cover object-center transform-gpu"
        />

        {/* Gradient Scrim for crisp readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-black/45 to-black/30 pointer-events-none" />

        {/* Foreground Content */}
        <div className="relative z-10 space-y-3">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-1">
            <span className="w-5 h-0.5 bg-[#8B1E1E]" />
            <span className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-stone-300">
              CLEAN ENERGY. BRIGHTER FUTURES.
            </span>
          </div>

          {/* Cursive Handwriting Signature */}
          <div>
            <span className="font-handwriting text-2xl sm:text-3xl text-amber-100/90 -rotate-2 inline-block font-normal">
              Clean energy brighter lives
            </span>
          </div>

          {/* Headline with Maroon Serif Accent */}
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.12]">
            A Cleaner<br />
            Tomorrow<br />
            Is <span className="text-[#E05252] font-serif italic font-normal">Within Reach</span>
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm text-stone-200/90 font-normal leading-relaxed max-w-sm pt-1 text-left">
            Reliable solar solutions for homes, businesses and a more sustainable tomorrow.
          </p>

          {/* Primary Action Button */}
          <div className="pt-3">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[14px] bg-[#8B1E1E] hover:bg-[#A82424] text-white text-sm font-heading font-semibold shadow-lg transition-all duration-200 cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Pagination & Footage Pill */}
        <div className="relative z-10 flex items-center justify-between gap-3 pt-6 border-t border-white/10 mt-6">
          {/* Pagination dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-6 h-1.5 rounded-full bg-[#8B1E1E]" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </div>

          {/* On-site footage tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[10.5px] font-semibold text-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-amber-300 font-heading">ON-SITE FOOTAGE</span>
            <span>•</span>
            <span>Maharashtra</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. WHY SOLARARK SECTION
          Desktop: 5-Column Editorial Rail with Right Brand Message & Sun Landscape
          Mobile: Header + 2x2 Grid + Maharashtra Transition Element
          ══════════════════════════════════════════════════════════════════════ */}

      {/* ── DESKTOP WHY SOLARARK RAIL (hidden lg:block) per media_1788898100400.png ── */}
      <section
        id="why-solar-ark"
        aria-label="Why SolarARK Confidence Bridge"
        className="w-full bg-[#FAF8F5] border-b border-stone-200/80 relative z-10 hidden lg:block"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-7 lg:py-8">
          <div className="grid grid-cols-12 gap-0 items-stretch">
            
            {/* Left 4 Columns (col-span-9): Value Points */}
            <div className="col-span-9 grid grid-cols-4 gap-0 items-stretch">
              {desktopRailItems.map((item, idx) => {
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
                    className={`group cursor-pointer flex flex-col justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/40 focus-visible:ring-offset-2 rounded-lg transition-colors border-r border-stone-200/80 ${
                      idx === 0 ? 'pr-6 xl:pr-8' : 'px-6 xl:px-8'
                    }`}
                  >
                    <div className="space-y-3">
                      {/* Subdued circular outline medallion */}
                      <div className="w-10 h-10 rounded-full bg-[#8B1E1E]/8 text-[#8B1E1E] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#8B1E1E] group-hover:text-white">
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-base font-bold text-stone-900 tracking-tight group-hover:text-[#8B1E1E] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-stone-600 font-normal leading-relaxed text-left">
                        {item.description}
                      </p>
                    </div>

                    {/* Restrained directional arrow */}
                    <div className="pt-3.5 flex items-center">
                      <ArrowRight className="w-4 h-4 text-[#8B1E1E] transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right 5th Column (col-span-3): Brand Message with Sunlit Landscape */}
            <div className="col-span-3 pl-6 xl:pl-8 flex items-center">
              <div className="relative w-full h-full min-h-[140px] rounded-xl overflow-hidden p-5 flex flex-col justify-center bg-gradient-to-r from-[#F4F1EB] to-amber-50/40 border border-stone-200/60 shadow-xs">
                {/* Sunlit Landscape Backdrop */}
                <img
                  src="/images/revamp/sun-landscape-tomorrow.jpg"
                  alt="Sunlit horizon"
                  className="absolute inset-0 w-full h-full object-cover object-right opacity-35 mix-blend-multiply pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#F4F1EB] via-[#F4F1EB]/80 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 space-y-1">
                  <div className="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-stone-600">
                    <Leaf className="w-3.5 h-3.5 text-[#8B1E1E]" />
                    <span>POWERING A BRIGHTER TOMORROW</span>
                  </div>

                  <p className="font-handwriting text-2xl xl:text-[28px] text-[#8B1E1E] font-medium tracking-wide leading-tight -rotate-2 pt-0.5">
                    Clean energy brighter lives
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MOBILE WHY SOLARARK (block lg:hidden) per media_1788898112364.png ── */}
      <section
        id="why-solar-ark-mobile"
        aria-label="Why SolarARK Core Value Pillars"
        className="w-full bg-[#FAF8F5] px-4 sm:px-6 py-6 sm:py-8 border-b border-stone-200/80 block lg:hidden"
      >
        <div className="max-w-lg mx-auto">
          
          {/* Eyebrow & Headline Header */}
          <div className="space-y-1.5 mb-5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#8B1E1E]" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-stone-500">
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

          {/* 2x2 Value Grid with crisp dividers */}
          <div className="grid grid-cols-2 gap-0 border-t border-stone-200/80 mb-5">
            
            {/* Item 1: For Your Home */}
            <div
              onClick={() => (onCalculatorClick ? onCalculatorClick() : handleScroll('calculator'))}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (onCalculatorClick) onCalculatorClick();
                  else handleScroll('calculator');
                }
              }}
              className="border-r border-b border-stone-200/80 pr-3 sm:pr-4 pt-4 pb-5 text-left group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-[#8B1E1E]/8 text-[#8B1E1E] flex items-center justify-center mb-2.5">
                <Home className="w-4 h-4 stroke-[1.75]" />
              </div>
              <h4 className="font-heading text-sm font-bold text-stone-900 group-hover:text-[#8B1E1E] transition-colors leading-snug">
                For Your Home
              </h4>
              <p className="text-[11px] sm:text-xs text-stone-600 font-normal leading-relaxed mt-1 text-left">
                Lower electricity bills. A brighter future.
              </p>
              <div className="pt-2">
                <ArrowRight className="w-3.5 h-3.5 text-[#8B1E1E] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Item 2: For Your Business */}
            <div
              onClick={() => handleScroll('solutions')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleScroll('solutions');
                }
              }}
              className="border-b border-stone-200/80 pl-3 sm:pl-4 pt-4 pb-5 text-left group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-[#8B1E1E]/8 text-[#8B1E1E] flex items-center justify-center mb-2.5">
                <Building2 className="w-4 h-4 stroke-[1.75]" />
              </div>
              <h4 className="font-heading text-sm font-bold text-stone-900 group-hover:text-[#8B1E1E] transition-colors leading-snug">
                For Your Business
              </h4>
              <p className="text-[11px] sm:text-xs text-stone-600 font-normal leading-relaxed mt-1 text-left">
                Smarter energy. Greater savings.
              </p>
              <div className="pt-2">
                <ArrowRight className="w-3.5 h-3.5 text-[#8B1E1E] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Item 3: End-to-End Solar */}
            <div
              onClick={() => handleScroll('solutions')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleScroll('solutions');
                }
              }}
              className="border-r border-stone-200/80 pr-3 sm:pr-4 pt-5 pb-4 text-left group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-[#8B1E1E]/8 text-[#8B1E1E] flex items-center justify-center mb-2.5">
                <Layers className="w-4 h-4 stroke-[1.75]" />
              </div>
              <h4 className="font-heading text-sm font-bold text-stone-900 group-hover:text-[#8B1E1E] transition-colors leading-snug">
                End-to-End Solar
              </h4>
              <p className="text-[11px] sm:text-xs text-stone-600 font-normal leading-relaxed mt-1 text-left">
                From consultation to commissioning.
              </p>
              <div className="pt-2">
                <ArrowRight className="w-3.5 h-3.5 text-[#8B1E1E] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Item 4: Ongoing Support */}
            <div
              onClick={() => (onCtaClick ? onCtaClick() : handleScroll('contact-form'))}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (onCtaClick) onCtaClick();
                  else handleScroll('contact-form');
                }
              }}
              className="pl-3 sm:pl-4 pt-5 pb-4 text-left group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-[#8B1E1E]/8 text-[#8B1E1E] flex items-center justify-center mb-2.5">
                <Headphones className="w-4 h-4 stroke-[1.75]" />
              </div>
              <h4 className="font-heading text-sm font-bold text-stone-900 group-hover:text-[#8B1E1E] transition-colors leading-snug">
                Ongoing Support
              </h4>
              <p className="text-[11px] sm:text-xs text-stone-600 font-normal leading-relaxed mt-1 text-left">
                We're with you beyond installation.
              </p>
              <div className="pt-2">
                <ArrowRight className="w-3.5 h-3.5 text-[#8B1E1E] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

          {/* Section 9 Transition Element: A Cleaner, Brighter Maharashtra */}
          <div
            onClick={() => (onNavigate ? onNavigate('/about') : handleScroll('solutions'))}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (onNavigate) onNavigate('/about');
                else handleScroll('solutions');
              }
            }}
            className="w-full p-4 rounded-2xl bg-[#F4F1EB] border border-stone-200/80 flex items-center justify-between gap-3 group cursor-pointer hover:border-[#8B1E1E]/40 transition-colors shadow-xs"
          >
            <div className="w-9 h-9 rounded-full bg-[#8B1E1E]/8 text-[#8B1E1E] flex items-center justify-center shrink-0">
              <Leaf className="w-4 h-4 stroke-[1.75]" />
            </div>
            
            <div className="flex-1 text-left min-w-0">
              <h5 className="font-heading font-bold text-xs sm:text-sm text-stone-900 leading-tight truncate">
                A Cleaner, Brighter Maharashtra
              </h5>
              <p className="text-[11px] sm:text-xs text-stone-600 font-normal leading-tight mt-0.5 truncate text-left">
                Sustainable energy for stronger communities.
              </p>
            </div>

            <ArrowRight className="w-4 h-4 text-[#8B1E1E] group-hover:translate-x-1 transition-transform shrink-0" />
          </div>

        </div>
      </section>
    </>
  );
};

