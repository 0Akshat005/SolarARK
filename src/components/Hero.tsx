/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import {
  BadgeCheck,
  Building2,
  Cpu,
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
    <>
      {/* ── 1. CLEAN, IMMERSIVE BACKGROUND-VIDEO HERO (VIDEO-FIRST) ── */}
      <section
        id="hero"
        className="relative w-full overflow-hidden bg-[#0A0F1D] min-h-[75vh] sm:min-h-[85vh] lg:min-h-[92vh] max-h-[1050px] flex items-center justify-center"
      >
        {/* Full-bleed real project hero video */}
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-[#0A0F1D]">
          <video
            ref={videoRef}
            autoPlay={!isReducedMotion}
            muted={isMuted}
            loop
            playsInline
            preload="auto"
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
        </div>

        {/* ── Subtle Cinematic Depth Gradients (Very gentle & soft so video remains full-fledge visible) ── */}
        <div className="absolute inset-0 z-[1] pointer-events-none select-none">
          {/* Top subtle scrim for Navbar contrast */}
          <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#0A0F1D]/35 to-transparent" />

          {/* Bottom gentle edge feather for smooth transition */}
          <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#0A0F1D]/50 to-transparent" />
        </div>
      </section>

      {/* ── 2. BELOW-HERO TRANSITION & PROOF RAIL SECTION (NATURAL PAGE FLOW) ── */}
      <section className="w-full bg-[#0A0F1D] py-4 sm:py-5 border-b border-stone-800/50 relative z-10 space-y-3.5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5">
          
          {/* PM Surya Ghar Authorized EPC Partner Pill */}
          <div className="flex items-center justify-center">
            <div className="eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/20 text-white shadow-sm text-xs sm:text-[13px] tracking-wide">
              <BadgeCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>PM SURYA GHAR AUTHORIZED EPC PARTNER</span>
            </div>
          </div>

          {/* 4-Pillar Proof Rail Card with Live Video Controls */}
          <div className="bg-[#0A0F1D]/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/20 shadow-[0_16px_48px_rgba(0,0,0,0.45)] ring-1 ring-white/10 p-4 sm:p-5">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
              
              {/* 4 Proof Items — Clean Responsive Cards (Zero awkward divider lines) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 w-full xl:w-auto flex-1">
                {proofRailItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-2.5 sm:p-2 rounded-xl bg-white/[0.04] lg:bg-transparent border border-white/10 lg:border-0"
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
      </section>
    </>
  );
};


