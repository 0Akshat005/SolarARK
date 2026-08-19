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
      className="relative w-full overflow-hidden bg-[#0A0F1D] text-white selection:bg-[#8B1E1E] selection:text-white flex flex-col justify-between"
      style={{ minHeight: 'clamp(720px, 92vh, 890px)' }}
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

      {/* ── 2. BALANCED IMMERSIVE EDITORIAL OVERLAY ──
           Carefully tuned left scrim: rich enough for 100% text clarity, yet translucent enough for full footage immersion. ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Desktop Left Scrim */}
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(10, 15, 29, 0.84) 0%, rgba(10, 15, 29, 0.68) 30%, rgba(10, 15, 29, 0.32) 50%, rgba(10, 15, 29, 0.08) 65%, transparent 78%)',
          }}
        />

        {/* Mobile / Tablet Scrim */}
        <div
          className="lg:hidden absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10, 15, 29, 0.84) 0%, rgba(10, 15, 29, 0.65) 45%, rgba(10, 15, 29, 0.90) 100%)',
          }}
        />

        {/* Top Scrim for Navbar Contrast */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#0A0F1D]/75 to-transparent" />

        {/* Bottom Scrim Behind Proof Rail */}
        <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/80 to-transparent" />
      </div>

      {/* ── 3. MAIN HERO CONTENT AREA (TOP & MIDDLE) ── */}
      <div className="max-w-[1400px] w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10 pt-32 sm:pt-36 lg:pt-34 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* Left Headline & Action Column */}
          <div className="lg:col-span-8 xl:col-span-7 space-y-6">
            
            {/* Accreditation Badge — Condensed Bold, wide tracking */}
            <div className="eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white shadow-sm text-xs">
              <BadgeCheck className="w-4 h-4 text-amber-400" />
              <span>PM SURYA GHAR AUTHORIZED EPC PARTNER</span>
            </div>

            {/* Hero Display — Extended Black per typography decision */}
            <div className="space-y-1">
              <h1 
                className="hero-display text-[36px] sm:text-[48px] lg:text-[56px] text-white m-0"
                style={{ textShadow: '0 2px 18px rgba(0, 0, 0, 0.7)' }}
              >
                Power your home.
              </h1>
              <h2 
                className="hero-display text-[34px] sm:text-[46px] lg:text-[54px] text-[#E53E3E] m-0"
                style={{ textShadow: '0 2px 18px rgba(0, 0, 0, 0.7)' }}
              >
                Pay less every month.
              </h2>
            </div>

            {/* Supporting Factual Copy */}
            <p 
              className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed max-w-xl text-left"
              style={{ textShadow: '0 1px 12px rgba(0, 0, 0, 0.75)' }}
            >
              Harness clean rooftop solar energy for your home. Slash your monthly electricity bills by up to 90% with turnkey installation and seamless government subsidies.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-2 space-y-3.5">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={onCtaClick}
                  className="btn-primary-maroon font-heading font-bold text-[15px] px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 cursor-pointer group"
                >
                  <span>Get Free Solar Estimate</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleScrollToCalc}
                  className="bg-black/40 hover:bg-black/55 backdrop-blur-md border border-white/25 text-white font-heading font-semibold text-[14px] px-6 py-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>See How Much You Can Save</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-300" />
                </button>
              </div>

              {/* Reassurance Microcopy */}
              <div 
                className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium pl-0.5"
                style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.7)' }}
              >
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>60-second estimate</span>
                <span className="text-slate-400">•</span>
                <span>No obligation</span>
                <span className="text-slate-400">•</span>
                <span>End-to-end support</span>
              </div>
            </div>

          </div>

          {/* Right column completely open to preserve full view of solar rooftop footage */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />

        </div>
      </div>

      {/* ── 4. FLOATING PROOF RAIL STRADDLING THE HERO DIVISION SEAM ──
           Optimally positioned right in the middle where Hero divides with the next section.
           Full 4-sided rounded pill architecture with glassmorphic depth and soft elevation. ── */}
      <div className="w-full relative z-30 -mb-10 sm:-mb-12 lg:-mb-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A0F1D]/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/20 shadow-[0_16px_48px_rgba(0,0,0,0.45)] ring-1 ring-white/10 p-4 sm:p-5">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
              
              {/* 4 Proof Items (Explicitly text-left to prevent awkward stretching) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 divide-y sm:divide-y-0 sm:divide-x divide-white/10 w-full xl:w-auto flex-1">
                {proofRailItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-3 ${
                        idx > 0 ? 'pt-2.5 sm:pt-0 sm:pl-3.5 lg:pl-5' : ''
                      }`}
                    >
                      <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 text-amber-400 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5 text-left">
                        <h4 className="font-heading text-xs sm:text-sm font-bold text-white tracking-wide text-left">
                          {item.label}
                        </h4>
                        <p className="text-[11px] text-slate-300 text-left leading-snug">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Minimalist Live Video Controls Dock */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 shrink-0 self-end xl:self-center">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="hidden sm:inline text-amber-300 font-heading">LIVE FOOTAGE</span>
                  <span className="hidden sm:inline text-slate-400">•</span>
                  <span>Maharashtra EPC</span>
                </div>

                <div className="flex items-center gap-1.5 pl-2 border-l border-white/15">
                  <button
                    onClick={togglePlayPause}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
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
                    className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
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
        </div>
      </div>

    </section>
  );
};
