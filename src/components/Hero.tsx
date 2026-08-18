/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  BadgeCheck,
  Building2,
  Cpu,
  Layers,
  Headphones,
  Check
} from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
  onCalculatorClick?: () => void;
  onClaimEstimate?: (data: { pincode: string; monthlyBill: number }) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onCtaClick,
  onCalculatorClick,
  onClaimEstimate,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mq.matches);

    if (mq.matches && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
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

  const handleScrollToCalc = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCalculatorClick) {
      onCalculatorClick();
    } else {
      const el = document.getElementById('calculator');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const proofRailItems = [
    {
      icon: Building2,
      label: 'REAL PROJECTS',
      sub: 'Solar installations across Maharashtra',
    },
    {
      icon: Cpu,
      label: 'QUALITY COMPONENTS',
      sub: 'Tier-1 technology & engineering',
    },
    {
      icon: Layers,
      label: 'COMPLETE EPC',
      sub: 'Design → Install → Commission',
    },
    {
      icon: Headphones,
      label: 'AFTER-SALES SUPPORT',
      sub: 'Long-term assistance when you need it',
    },
  ];

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#0A0F1D] text-white selection:bg-[#8B1E1E] selection:text-white"
      style={{ minHeight: 'clamp(740px, 94vh, 920px)' }}
    >
      {/* ── 1. FULL-BLEED REAL PROJECT HERO VIDEO (OFFICIAL CLIENT FOOTAGE) ── */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay={!isReducedMotion}
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          poster="/hero-solar-home.png"
          onLoadedData={() => setVideoLoaded(true)}
          className="w-full h-full object-cover object-center"
        >
          <source
            src="https://www.thesolarark.com/static/media/homepage1.064e908497b52c839705.mp4"
            type="video/mp4"
          />
          <source
            src="https://www.thesolarark.com/static/media/SolarPanels.f60c55f23cce92688a48.mp4"
            type="video/mp4"
          />
        </video>

        {/* Fallback poster image behind video for fast loading */}
        <img
          src="/hero-solar-home.png"
          alt="SolarARK Real Installation Footage"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 pointer-events-none ${
            videoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>

      {/* ── 2. CINEMATIC EDITORIAL OVERLAY SYSTEM ──
           Left: Darker scrim for 100% headline readability.
           Right: Transparent, leaving the real rooftop solar panels vivid and vibrant.
           Top & Bottom: Restrained subtle transitions. ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Desktop Left Scrim */}
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(10, 15, 29, 0.94) 0%, rgba(10, 15, 29, 0.82) 38%, rgba(10, 15, 29, 0.45) 58%, transparent 80%)',
          }}
        />

        {/* Mobile / Tablet Full Scrim */}
        <div
          className="lg:hidden absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10, 15, 29, 0.88) 0%, rgba(10, 15, 29, 0.78) 50%, rgba(10, 15, 29, 0.92) 100%)',
          }}
        />

        {/* Top Vignette (For Header Readability) */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0A0F1D]/80 to-transparent" />

        {/* Bottom Transition Scrim */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/60 to-transparent" />
      </div>

      {/* ── 3. MAIN HERO CONTENT CONTAINER ── */}
      <div
        className="max-w-[1400px] w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10 flex flex-col justify-between pt-32 sm:pt-36 lg:pt-32 pb-8 sm:pb-10"
        style={{ minHeight: 'clamp(740px, 94vh, 920px)' }}
      >
        {/* Top Row: Left Narrative + Right Project Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1">
          
          {/* ── LEFT COLUMN: Headline, Eyebrow & CTAs (38–42% width) ── */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6">
            
            {/* Eyebrow / Trust Accreditation Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-sm text-xs font-bold font-heading tracking-wider uppercase">
              <BadgeCheck className="w-4 h-4 text-amber-400" />
              <span>PM SURYA GHAR AUTHORIZED EPC PARTNER</span>
            </div>

            {/* Dominant Headline Hierarchy */}
            <div className="space-y-1">
              <h1 className="font-heading text-[34px] sm:text-[46px] lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.08] m-0">
                Power your home.
              </h1>
              <h2 className="font-heading text-[32px] sm:text-[44px] lg:text-[52px] font-extrabold text-[#E27D16] sm:text-[#FF9E2C] lg:text-[#E27D16] tracking-tight leading-[1.08] m-0">
                Pay less every month.
              </h2>
            </div>

            {/* Supporting Factual Narrative (2–3 lines) */}
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-xl">
              Harness clean rooftop solar energy for your home. Slash your monthly electricity bills by up to 90% with turnkey installation and seamless government subsidies.
            </p>

            {/* CTA Group */}
            <div className="pt-2 space-y-3.5">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={onCtaClick}
                  className="bg-[#8B1E1E] hover:bg-[#A82424] active:scale-[0.98] text-white font-heading font-bold text-[15px] px-8 py-4 rounded-xl shadow-lg shadow-[#8B1E1E]/40 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
                >
                  <span>Get Free Solar Estimate</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleScrollToCalc}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-heading font-semibold text-[14px] px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>See How Much You Can Save</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-300" />
                </button>
              </div>

              {/* Reassurance Microcopy */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium pl-0.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>60-second estimate</span>
                <span className="text-slate-500">•</span>
                <span>No obligation</span>
                <span className="text-slate-500">•</span>
                <span>End-to-end support</span>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: Live Project Spotlight & Video Controls ── */}
          <div className="lg:col-span-5 xl:col-span-6 flex flex-col justify-end lg:items-end pt-4 lg:pt-0">
            <div className="inline-flex items-center gap-4 bg-[#0B1730]/80 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl">
              <div className="space-y-0.5 text-left">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 font-heading block">
                  PROJECT SPOTLIGHT
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white font-heading">
                  Industrial &amp; Residential Rooftop
                </h4>
                <p className="text-[11px] text-slate-300">
                  SolarARK EPC Installation • Maharashtra, India
                </p>
              </div>

              {/* Subtle Translucent Video Controls */}
              <div className="flex items-center gap-2 border-l border-white/20 pl-4 shrink-0">
                <button
                  onClick={togglePlayPause}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5 fill-white" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
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

        {/* ── 4. CINEMATIC ENGINEERING PROOF RAIL ── */}
        <div className="w-full pt-8 sm:pt-10">
          <div className="bg-[#0A0F1D]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-4 sm:p-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {proofRailItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-3.5 ${
                      idx > 0 ? 'pt-3 sm:pt-0 sm:pl-4 lg:pl-6' : ''
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-amber-400 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5 text-left">
                      <h4 className="font-heading text-xs sm:text-sm font-bold text-white tracking-wide">
                        {item.label}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-300">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* Clean Bottom Boundary */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#8B1E1E]/40 to-transparent" />
    </section>
  );
};
