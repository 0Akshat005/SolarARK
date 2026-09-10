/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Hero Component — Full-Page Immersive Video Hero + Official Verified Metrics Strip
 *
 * Updated per user specifications:
 * - Hero banner takes full viewport page (h-screen / min-h-[100dvh]) with immersive background video.
 * - Removed the old card-rail section.
 * - Below the hero section upon scroll: Clean numbers counter strip inspired by Image 2 design,
 *   with authentic numbers from official site (Image 3):
 *   1. 5,000+ Home Solarized
 *   2. 10+ Years Of Experience
 *   3. 100+ MW Installation
 *   4. 15+ Crore Subsidy Distributed
 */

import React, { useRef, useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronDown,
} from 'lucide-react';
import { OfficialMetricsStrip } from './home/OfficialMetricsStrip';

interface HeroProps {
  onCtaClick?: () => void;
  onCalculatorClick?: () => void;
  onClaimEstimate?: (data: { pincode: string; monthlyBill: number }) => void;
  onNavigate?: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onCtaClick,
  onCalculatorClick,
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



  return (
    <>
      {/* ── 1. FULL-PAGE IMMERSIVE BACKGROUND-VIDEO HERO ── */}
      <section
        id="hero"
        className="relative w-full overflow-hidden bg-[#0A0F1D] h-screen min-h-[640px] flex items-center justify-center"
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

        {/* Ambient darkening scrim */}
        <div className="absolute inset-0 z-[1] bg-black/20 pointer-events-none" />

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

      {/* ── 2. OFFICIAL METRICS STRIP (Sleek Compact Sizing + Counting Animation) ── */}
      <OfficialMetricsStrip />
    </>
  );
};
