/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import {
  BadgeCheck,
  Layers,
  Headphones,
  Play,
  Pause,
  Volume2,
  VolumeX
} from 'lucide-react';

interface HeroProps {
  onCtaClick?: () => void;
  onCalculatorClick?: () => void;
  onClaimEstimate?: (data: { pincode: string; monthlyBill: number }) => void;
}

// ── CUSTOM LINE-ART SVG ICONS MATCHING DESIGN REFERENCE ──

// Real Projects: Building with center tower, archway, and side wings
const RealProjectsIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 21h18" />
    <path d="M5 21V10a2 2 0 0 1 2-2h1" />
    <path d="M16 8h1a2 2 0 0 1 2 2v11" />
    <rect x="8" y="3" width="8" height="18" rx="2" />
    <path d="M10 17v4" />
    <path d="M14 17v4" />
    <path d="M10 17h4" />
    <path d="M10 7h4" />
    <path d="M10 11h4" />
  </svg>
);

// Quality Components: 12-scallop rosette circular badge with 5-point star
const QualityBadgeIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    <polygon points="12 8 13.2 10.8 16.2 11.1 13.9 13.1 14.6 16 12 14.4 9.4 16 10.1 13.1 7.8 11.1 10.8 10.8 12 8" strokeWidth="1.4" />
  </svg>
);

export const Hero: React.FC<HeroProps> = () => {
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

  const proofRailItems = [
    {
      icon: RealProjectsIcon,
      label: 'REAL PROJECTS',
      sub: 'Across Maharashtra',
    },
    {
      icon: QualityBadgeIcon,
      label: 'QUALITY COMPONENTS',
      sub: 'Tier-1 technology',
    },
    {
      icon: Layers,
      label: 'COMPLETE EPC',
      sub: 'Design → Install → Commission',
    },
    {
      icon: Headphones,
      label: 'AFTER-SALES',
      sub: 'Support when you need it',
    },
  ];

  return (
    <>
      {/* ── 1. IMMERSIVE BACKGROUND-VIDEO HERO (VIDEO-FIRST) ── */}
      <section
        id="hero"
        className="relative w-full overflow-hidden bg-[#0A0F1D] min-h-[75vh] sm:min-h-[85vh] lg:min-h-[92vh] max-h-[1050px] flex items-center justify-center"
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
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none pb-4 sm:pb-6 px-4 sm:px-8 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/60 to-transparent pt-16">
          <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-3 pointer-events-auto">
            
            {/* PM Surya Ghar Authorized EPC Partner Pill */}
            <div className="eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white shadow-sm text-xs sm:text-[13px] tracking-wide">
              <BadgeCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>PM SURYA GHAR AUTHORIZED EPC PARTNER</span>
            </div>

            {/* Minimalist On-Site Video Controls Dock */}
            <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/15 rounded-full px-3.5 py-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="hidden sm:inline text-amber-300 font-heading">ON-SITE FOOTAGE</span>
                <span className="hidden sm:inline text-slate-400">•</span>
                <span>Maharashtra EPC</span>
              </div>

              <div className="flex items-center gap-1.5 pl-2 border-l border-white/20">
                <button
                  onClick={togglePlayPause}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause className="w-2.5 h-2.5 fill-white" />
                  ) : (
                    <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? (
                    <VolumeX className="w-3 h-3" />
                  ) : (
                    <Volume2 className="w-3 h-3" />
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. UNBOXED EDITORIAL PROOF RAIL (MATCHING DESIGN REFERENCE EXACTLY) ── */}
      <section className="w-full bg-[#0A0F1D] py-5 sm:py-7 border-b border-stone-800/80 relative z-10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0 items-center">
            {proofRailItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3.5 sm:gap-4 lg:px-6 xl:px-8 ${
                    idx < 3 ? 'lg:border-r lg:border-white/15' : ''
                  }`}
                >
                  {/* Standalone Golden Line-Art Icon (Zero Box Container) */}
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#E5A93C] shrink-0 stroke-[1.75]" />

                  {/* Clean Typography Hierarchy */}
                  <div className="space-y-0.5 min-w-0">
                    <h4 className="font-heading text-xs sm:text-[13px] font-bold text-white tracking-wider uppercase">
                      {item.label}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300/80 font-normal leading-snug">
                      {item.sub}
                    </p>
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
