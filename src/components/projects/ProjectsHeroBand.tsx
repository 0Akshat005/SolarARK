/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Band 1: HERO BAND — “Real spaces. Real impact.”
 * Pareto 80/20 Note: Sets the strategic context and establishes architectural credibility 
 * in the first viewport before diving into focused case studies.
 */

import React from 'react';

interface ProjectsHeroBandProps {
  onCtaClick?: () => void;
  onExploreClick?: () => void;
}

export const ProjectsHeroBand: React.FC<ProjectsHeroBandProps> = ({
  onCtaClick,
  onExploreClick,
}) => {
  return (
    <section className="w-full bg-[#F7F5F0] pt-8 sm:pt-12 pb-12 sm:pb-16 border-b border-[#E6E3DD]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* ── LEFT: HERO TEXT (5 Cols) ── */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-[11px] sm:text-xs font-medium font-body uppercase tracking-[0.18em] text-[#6C6C68] block">
              PROJECTS
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[62px] font-medium text-[#151817] tracking-tight leading-[1.04] m-0">
              Real spaces.<br />
              <span className="text-[#7A211D]">Real impact.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#6C6C68] font-body font-normal leading-relaxed max-w-md m-0">
              From homes to large-scale facilities, our projects power a cleaner, brighter tomorrow.
            </p>
          </div>

          {/* ── CENTER: ARCHITECTURAL STATEMENT (3 Cols) ── */}
          <div className="lg:col-span-3 hidden lg:flex flex-col justify-center border-l border-[#E6E3DD] pl-8 space-y-6">
            <div className="space-y-1 text-[#6C6C68] font-body text-[11px] tracking-[0.2em] uppercase font-medium leading-relaxed">
              <p className="m-0">DIFFERENT</p>
              <p className="m-0">SPACES</p>
              <p className="m-0">SAME</p>
              <p className="m-0">PURPOSE</p>
            </div>

            <div className="w-8 h-px bg-[#E6E3DD]" />

            <div className="space-y-1 text-[#6C6C68] font-body text-[11px] tracking-[0.2em] uppercase font-medium leading-relaxed">
              <p className="m-0">CLEANER</p>
              <p className="m-0">BRIGHTER</p>
              <p className="m-0">MAHARASHTRA</p>
            </div>
          </div>

          {/* ── RIGHT: VERTICAL PORTRAIT VISUAL (4 Cols) ── */}
          <div className="lg:col-span-4 relative flex items-center justify-end">
            <div className="relative w-full aspect-[3/4] max-h-[460px] bg-[#151817] overflow-hidden rounded-none border border-[#E6E3DD] shadow-sm group">
              <img
                src="/images/projects/hero-solar-architecture.jpg"
                alt="Modern architectural building with elevated rooftop solar pergola"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Right Side Caption Tag */}
              <div className="absolute bottom-6 right-6 text-right text-white font-sans text-[10px] tracking-[0.2em] uppercase font-semibold leading-tight drop-shadow-md">
                <p className="m-0">BUILDING</p>
                <p className="m-0">A BRIGHTER</p>
                <p className="m-0 text-amber-200">TOMORROW</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
