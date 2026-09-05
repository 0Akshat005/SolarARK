/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';

interface EditorialHeroProps {
  onCtaClick: () => void;
  onAssessmentClick: () => void;
}

const HERO_PERSPECTIVES = [
  {
    id: '01',
    title: 'Architectural Rooftop Array',
    location: 'Amravati, Maharashtra',
    tagline: 'Sustainable • Reliable • Future-Ready',
    image: '/images/revamp/hero-architectural-solar.jpg',
  },
  {
    id: '02',
    title: 'Commercial Solar Glass Hub',
    location: 'Chh. Sambhajinagar',
    tagline: 'High-Yield • Commercial EPC • Tier-1',
    image: '/images/services/commercial.png',
  },
  {
    id: '03',
    title: 'Industrial Manufacturing Shed',
    location: 'Wardha Industrial Area',
    tagline: '250 kW System • Peak Shaving',
    image: '/images/services/industrials.jpg',
  },
  {
    id: '04',
    title: 'Independent Luxury Villa',
    location: 'Bavdhan & Pune Suburbs',
    tagline: 'Zero-Down EMI • ₹78,000 Subsidy',
    image: '/images/services/homes.jpg',
  },
];

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  onCtaClick: _onCtaClick,
  onAssessmentClick,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const currentItem = HERO_PERSPECTIVES[activeSlide];

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_PERSPECTIVES.length);
  };

  return (
    <>
      <section className="relative w-full bg-[#FAF9F6] pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 border-b border-stone-200/80 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
            
            {/* ── LEFT COLUMN: EDITORIAL STATEMENT & DUAL CTAs ── */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-8 z-10">
              
              {/* Eyebrow with editorial dash */}
              <div className="flex items-center gap-3">
                <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-stone-600">
                  Clean Energy
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-stone-600">
                  Brighter Tomorrows
                </span>
                <span className="w-8 sm:w-12 h-px bg-stone-300" />
              </div>

              {/* Bold Editorial Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-bold text-slate-900 tracking-tight leading-[1.04]">
                Powering<br />
                a brighter<br />
                <span className="text-[#8B1E1E]">tomorrow.</span>
              </h1>

              {/* Concise Supporting Copy */}
              <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-md">
                Smart solar solutions for homes, businesses and industries across Maharashtra.
              </p>

              {/* Conversion CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* Primary Button */}
                <button
                  onClick={onAssessmentClick}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#8B1E1E] hover:bg-[#741616] text-white text-sm sm:text-base font-heading font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <span>Get a Solar Assessment</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                {/* Secondary Button: Watch Story */}
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full border border-stone-300 hover:border-stone-400 bg-white/70 hover:bg-white text-slate-800 text-sm sm:text-base font-heading font-semibold transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-xs"
                >
                  <span className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-slate-700">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </span>
                  <span>Watch Our Story</span>
                </button>
              </div>

              {/* Micro Proof Badge */}
              <div className="pt-2 flex items-center gap-4 text-xs text-stone-500 font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  PM Surya Ghar Authorized EPC
                </span>
                <span className="text-stone-300">•</span>
                <span>Tier-1 Modules</span>
                <span className="text-stone-300">•</span>
                <span>25-Yr SunSure Guarantee</span>
              </div>

            </div>

            {/* ── RIGHT COLUMN: RECTANGULAR EDITORIAL ARCHITECTURAL SHOWCASE ── */}
            <div className="lg:col-span-7 relative">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-xl overflow-hidden bg-stone-900 shadow-xl border border-stone-200/60 group">
                
                {/* Visual Image */}
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30 pointer-events-none" />

                {/* Top Right Tagline */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 text-right">
                  <div className="inline-flex flex-col items-end backdrop-blur-md bg-black/40 border border-white/20 px-3.5 py-2 rounded-lg text-white">
                    <span className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-wider text-amber-300">
                      Sustainable
                    </span>
                    <span className="text-[10px] sm:text-xs font-heading font-medium tracking-wide text-white/90">
                      Reliable
                    </span>
                    <span className="text-[10px] sm:text-xs font-heading font-normal tracking-wide text-white/70">
                      Future-Ready
                    </span>
                  </div>
                </div>

                {/* Center / Subtle Watermark Branding */}
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-10">
                  <div className="space-y-1">
                    <div className="font-heading font-bold text-2xl sm:text-3xl text-white/90 tracking-tight drop-shadow-md">
                      Solar<span className="text-[#E74C3C]">ARK</span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-200 font-medium">
                      {currentItem.title} <span className="text-white/50">•</span> {currentItem.location}
                    </p>
                  </div>
                </div>

                {/* Bottom Right Slide Counter & Next Trigger */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10">
                  <button
                    onClick={handleNextSlide}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md border border-white/20 text-white font-mono text-xs transition-colors cursor-pointer"
                    title="Next Project View"
                  >
                    <span>{currentItem.id} / 0{HERO_PERSPECTIVES.length}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/80" />
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── VIDEO LIGHTBOX MODAL ── */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video w-full">
              <video
                controls
                autoPlay
                className="w-full h-full object-contain"
                src="/videos/hero-drone-installation.mp4"
                poster="/images/hero-video-poster.jpg"
              >
                <source src="/videos/hero-drone-installation.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
