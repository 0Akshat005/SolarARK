/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { BadgeCheck } from 'lucide-react';

interface HeroProps {
  onCtaClick?: () => void;
  onCalculatorClick?: () => void;
  onClaimEstimate?: (data: { pincode: string; monthlyBill: number }) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mq.matches);
  }, []);

  return (
    <>
      {/* ── 1. CLEAN, IMMERSIVE BACKGROUND-VIDEO HERO ── */}
      <section
        id="hero"
        className="relative w-full overflow-hidden bg-[#0A0F1D] min-h-[70vh] sm:min-h-[80vh] lg:min-h-[88vh] max-h-[1000px] flex items-center justify-center"
      >
        {/* Full-bleed real project hero video */}
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            autoPlay={!isReducedMotion}
            muted
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

        {/* ── Subtle Cinematic Depth Gradients (Maintains depth without washing out or obscuring footage) ── */}
        <div className="absolute inset-0 z-[1] pointer-events-none select-none">
          {/* Top Scrim for Navbar Contrast */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#0A0F1D]/60 via-[#0A0F1D]/20 to-transparent" />

          {/* Bottom Scrim for Smooth Section Transition */}
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/50 to-transparent" />
        </div>
      </section>

      {/* ── 2. TRANSITION ELEMENT: PM SURYA GHAR AUTHORIZED EPC PARTNER PILL (BELOW HERO) ── */}
      <div className="w-full bg-[#0A0F1D] py-5 sm:py-6 flex items-center justify-center border-b border-stone-800/40 relative z-10">
        <div className="eyebrow inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/20 text-white shadow-sm text-xs sm:text-[13px] tracking-wide">
          <BadgeCheck className="w-4 h-4 text-amber-400 shrink-0" />
          <span>PM SURYA GHAR AUTHORIZED EPC PARTNER</span>
        </div>
      </div>
    </>
  );
};

