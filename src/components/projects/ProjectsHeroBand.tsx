/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Band 1: HERO BAND — “Real spaces. Real impact.”
 * Pareto 80/20 Note: Sets the strategic context and establishes architectural credibility 
 * in the first viewport before diving into focused case studies.
 */

import React from 'react';
import { ArrowRight, ShieldCheck, Award, Zap, Sparkles } from 'lucide-react';

interface ProjectsHeroBandProps {
  onCtaClick?: () => void;
  onExploreClick?: () => void;
}

export const ProjectsHeroBand: React.FC<ProjectsHeroBandProps> = ({
  onCtaClick,
  onExploreClick,
}) => {
  return (
    <section className="w-full bg-[#FAF8F5] pt-6 sm:pt-10 pb-10 sm:pb-14 border-b border-stone-200/80">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Stack */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow & Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200/90 text-[11px] font-bold tracking-[0.16em] uppercase text-stone-700 font-heading shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Projects Archive</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-stone-500 font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% DISCOM Net-Metered
                </span>
                <span className="text-stone-300">•</span>
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-600" /> PM Surya Ghar Certified
                </span>
              </div>
            </div>

            {/* H1 Headline & Architectural Paragraph */}
            <div className="space-y-3.5">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[56px] font-bold text-stone-900 tracking-tight leading-[1.08]">
                Real spaces.<br />
                <span className="text-[#8B1E1E]">Real impact.</span>
              </h1>
              <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-xl">
                From luxury residential villas to large-scale industrial manufacturing facilities, explore how SolarARK’s turnkey engineering transforms unutilized rooftop real estate into high-yield, zero-compromise clean power assets across Maharashtra.
              </p>
            </div>

            {/* Trust Metrics Pill Strip */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg border-t border-stone-200/70">
              <div className="space-y-0.5">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-stone-900">5,000+</div>
                <div className="text-[11px] text-stone-500 uppercase tracking-wider font-medium">MH Rooftops</div>
              </div>
              <div className="space-y-0.5">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-stone-900">35+ MW</div>
                <div className="text-[11px] text-stone-500 uppercase tracking-wider font-medium">Grid-Synced</div>
              </div>
              <div className="space-y-0.5">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-emerald-700">90%+</div>
                <div className="text-[11px] text-stone-500 uppercase tracking-wider font-medium">Avg Bill Cut</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onCtaClick}
                className="btn-primary-maroon px-6 py-3.5 rounded-xl font-heading font-bold text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer shadow-md shadow-[#8B1E1E]/20 hover:scale-[1.01] active:scale-[0.99] transition-transform"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Request Site Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onExploreClick && (
                <button
                  onClick={onExploreClick}
                  className="px-5 py-3.5 rounded-xl border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-950 font-heading font-semibold text-xs sm:text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer bg-white"
                >
                  <span>Explore Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

          {/* Right Photographic Feature (Large Architectural Solar Installation) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/90 shadow-xl bg-stone-900 group">
              <img
                src="/images/revamp/hero-architectural-solar.jpg"
                alt="SolarARK Architectural Solar Installation on modern building rooftop"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                loading="eager"
              />
              
              {/* Subtle Scrim Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              {/* Inset In-Picture Caption Badge */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-end justify-between gap-3 text-white">
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] uppercase font-bold tracking-wider text-amber-300 border border-white/10">
                    <Zap className="w-3 h-3 text-amber-400" /> Architectural EPC
                  </span>
                  <h2 className="font-heading text-lg sm:text-xl font-bold leading-tight drop-shadow-sm text-white m-0">
                    Precision Engineered Elevated Structures
                  </h2>
                  <p className="text-xs text-stone-200 line-clamp-1 m-0">
                    100% usable terrace space with hot-dip galvanized framework &amp; bifacial yield.
                  </p>
                </div>

                <div className="text-right shrink-0 hidden sm:block">
                  <span className="font-heading text-xl font-bold text-white block">25 Years</span>
                  <span className="text-[10px] text-stone-300 uppercase tracking-wider block">Performance Guarantee</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
