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

  const confidenceItems = [
    {
      icon: Home,
      title: 'For Your Home',
      description: 'A practical solar solution designed around your energy needs.',
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
      description: 'Smarter energy for greater control over operating costs.',
      action: () => {
        handleScroll('solutions');
      },
      ariaLabel: 'Explore commercial and industrial solar solutions',
    },
    {
      icon: Layers,
      title: 'End-to-End Solar',
      description: 'From consultation and design through installation and commissioning.',
      action: () => {
        handleScroll('solutions');
      },
      ariaLabel: 'Learn about our turnkey solar engineering process',
    },
    {
      icon: Headphones,
      title: 'Support Beyond Installation',
      description: 'Continued assistance when you need it.',
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

  const getDividerClasses = (idx: number) => {
    // Mobile (< sm): Clean vertical stack with light bottom border
    let cls = idx < 3 ? 'border-b border-stone-200/60 pb-6 ' : 'pb-0 ';

    // Tablet (sm to lg): 2x2 grid with horizontal and vertical separators
    if (idx < 2) {
      cls += 'sm:border-b sm:border-stone-200/80 sm:pb-6 ';
    } else {
      cls += 'sm:border-b-0 sm:pt-6 ';
    }

    if (idx % 2 === 0) {
      cls += 'sm:border-r sm:border-stone-200/80 sm:pr-6 md:sm:pr-8 ';
    } else {
      cls += 'sm:border-r-0 sm:pl-6 md:sm:pl-8 ';
    }

    // Desktop (lg and up): 4 horizontal columns separated by delicate dividers
    cls += 'lg:border-b-0 lg:pt-0 lg:pb-0 ';
    if (idx < 3) {
      cls += 'lg:border-r lg:border-stone-200/80 ';
    } else {
      cls += 'lg:border-r-0 ';
    }
    cls += 'lg:px-6 xl:px-8 first:lg:pl-0 last:lg:pr-0';

    return cls;
  };

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

        {/* ── Bottom Gradient Feather & Controls Dock Floating Above Base ── */}
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none pb-4 sm:pb-6 px-3.5 sm:px-8 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/60 to-transparent pt-16">
          <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 pointer-events-auto">
            
            {/* PM Surya Ghar Authorized EPC Partner Pill */}
            <div className="eyebrow inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white shadow-sm text-[11px] sm:text-[13px] tracking-wide max-w-full">
              <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
              <span className="truncate">PM SURYA GHAR AUTHORIZED EPC PARTNER</span>
            </div>

            {/* Minimalist On-Site Video Controls Dock with ergonomic tap hit areas */}
            <div className="flex items-center gap-2.5 sm:gap-3 bg-black/40 backdrop-blur-md border border-white/15 rounded-full px-3 sm:px-3.5 py-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-semibold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span className="hidden sm:inline text-amber-300 font-heading">ON-SITE FOOTAGE</span>
                <span className="hidden sm:inline text-slate-400">•</span>
                <span>Maharashtra EPC</span>
              </div>

              <div className="flex items-center gap-1 pl-2 border-l border-white/20">
                <button
                  onClick={togglePlayPause}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  title={isPlaying ? 'Pause' : 'Play'}
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
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  title={isMuted ? 'Unmute' : 'Mute'}
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

      {/* ── 2. EDITORIAL CONFIDENCE BRIDGE (Single Horizontal Information Rail) ── */}
      <section
        aria-label="SolarARK Core Capabilities"
        className="w-full bg-[#FAF8F5] border-b border-stone-200/80 relative z-10"
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8 lg:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-0">
            {confidenceItems.map((item, idx) => {
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
                  className={`group cursor-pointer flex flex-col justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/40 focus-visible:ring-offset-2 rounded-lg transition-colors ${getDividerClasses(
                    idx
                  )}`}
                >
                  <div className="space-y-3">
                    {/* Compact, understated line icon */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8B1E1E]/8 text-[#8B1E1E] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#8B1E1E] group-hover:text-white">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
                    </div>

                    {/* Headline */}
                    <h3 className="font-heading text-base sm:text-[17px] font-bold text-stone-900 tracking-tight group-hover:text-[#8B1E1E] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Supporting Value Copy */}
                    <p className="text-xs sm:text-[13px] text-stone-600 font-normal leading-relaxed text-left">
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
        </div>
      </section>
    </>
  );
};

