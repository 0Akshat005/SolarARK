/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface ProjectTrustBridgeProps {
  onNavigate: (path: string) => void;
}

export const ProjectTrustBridge: React.FC<ProjectTrustBridgeProps> = ({ onNavigate }) => {
  return (
    <section
      aria-label="Built For Real Roofs"
      className="w-full bg-[#FAF8F5] border-b border-stone-200/80 h-[270px] sm:h-[280px] lg:h-[350px] flex flex-col justify-center relative overflow-hidden select-none"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="max-w-3xl space-y-2.5 sm:space-y-3.5">
          
          {/* Eyebrow: BUILT FOR REAL ROOFS */}
          <div className="text-[#B8422A] text-[11px] sm:text-[12.5px] font-bold font-heading tracking-[0.18em] uppercase">
            BUILT FOR REAL ROOFS
          </div>

          {/* Headline: Good solar work should be easy to inspect. */}
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#0A0F1D] tracking-tight leading-[1.15] m-0">
            Good solar work should be easy to inspect.
          </h2>

          {/* Body */}
          <p className="text-xs sm:text-[15px] text-slate-700 font-normal leading-relaxed max-w-2xl m-0">
            See how SolarARK systems are designed, installed, and brought online across real homes.
          </p>

          {/* CTA: Refined Inline Navigation Element */}
          <div className="pt-2 sm:pt-4">
            
            {/* Desktop Navigation: Preceded by small terracotta node on thin navy engineering line */}
            <button
              onClick={() => onNavigate('/projects')}
              className="group hidden sm:inline-flex items-center gap-3.5 cursor-pointer text-left focus:outline-none transition-all py-1"
              aria-label="View our projects"
            >
              {/* Small terracotta circular node */}
              <span className="w-2 h-2 rounded-full bg-[#B8422A] shrink-0 transition-transform duration-300 group-hover:scale-125" />

              {/* CTA Label */}
              <span className="font-heading font-bold text-sm sm:text-[15px] text-[#0A0F1D] tracking-tight transition-colors duration-300 group-hover:text-[#B8422A]">
                View our projects
              </span>

              {/* Thin horizontal navy engineering line that smoothly extends and brightens */}
              <span className="h-[1px] w-20 lg:w-32 bg-[#0A0F1D]/25 transition-all duration-300 group-hover:w-32 lg:group-hover:w-48 group-hover:bg-[#B8422A]/80" />

              {/* Refined Arrow that shifts slightly right */}
              <span className="text-[#0A0F1D] font-medium text-base transition-all duration-300 group-hover:text-[#B8422A] group-hover:translate-x-1.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </button>

            {/* Mobile Navigation: Full-width 44px-tall text-link row with top rule */}
            <button
              onClick={() => onNavigate('/projects')}
              className="group sm:hidden flex items-center justify-between w-full h-[44px] border-t border-[#0A0F1D]/15 text-left cursor-pointer focus:outline-none active:opacity-75 transition-opacity"
              aria-label="View our projects"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#B8422A] shrink-0" />
                <span className="font-heading font-bold text-xs xs:text-sm text-[#0A0F1D]">
                  View our projects
                </span>
              </div>
              <span className="text-[#0A0F1D] text-base group-active:translate-x-1 transition-transform">
                ↗
              </span>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};
