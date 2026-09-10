/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Band 6: PRE-FOOTER CTA STRIP
 * Directly mirrors the inspiration layout:
 * - Headline: "Planning your own solar project?"
 * - Subtitle: "Let's build a solution that works for your space."
 * - Primary Action: Maroon button "Request Consultation →"
 * - Category Links: Residential Solar · Commercial Rooftops · Industrial Microgrids · Housing Societies
 * - Sharp architectural corners (rounded-none), on-brand warm neutrals and hairline borders.
 */

import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

interface ProjectPreFooterCtaProps {
  onCtaClick?: () => void;
  onNavigate?: (path: string) => void;
}

export const ProjectPreFooterCta: React.FC<ProjectPreFooterCtaProps> = ({
  onCtaClick,
  onNavigate,
}) => {
  const categories = [
    { label: 'Residential Solar', path: '/services' },
    { label: 'Commercial Rooftops', path: '/services' },
    { label: 'Industrial Microgrids', path: '/services' },
    { label: 'Housing Societies', path: '/services' },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-20">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Architectural Card Strip */}
        <div className="bg-white rounded-none border border-stone-200/90 p-8 sm:p-12 lg:p-14 shadow-2xs">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-stone-200/80">
            
            {/* Left Copy */}
            <div className="space-y-2 max-w-2xl">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.24em] text-[#8B1E1E]">
                START YOUR TRANSITION
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight leading-tight m-0">
                Planning your own solar project?
              </h2>
              <p className="font-sans text-sm sm:text-base text-stone-600 leading-relaxed m-0">
                Let’s build an engineered solution that works specifically for your space, load requirements, and utility tariff.
              </p>
            </div>

            {/* Right Action Button & Direct Desk */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0">
              <button
                onClick={onCtaClick}
                className="px-7 py-3.5 bg-[#8B1E1E] hover:bg-[#701818] text-white font-sans font-semibold text-xs sm:text-sm rounded-none inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-colors group"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:7080909590"
                className="px-5 py-3.5 border border-stone-300 hover:border-stone-900 text-stone-800 font-sans font-medium text-xs sm:text-sm rounded-none inline-flex items-center justify-center gap-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#8B1E1E]" />
                <span>+91 7080909590</span>
              </a>
            </div>

          </div>

          {/* Bottom Quick Category Strip */}
          <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
            <span className="text-stone-400 font-medium uppercase tracking-wider text-[11px]">
              SOLAR INSTALLATION SEGMENTS:
            </span>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {categories.map((cat, idx) => (
                <button
                  key={cat.label}
                  onClick={() => onNavigate && onNavigate(cat.path)}
                  className="text-stone-600 hover:text-[#8B1E1E] transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B1E1E]/40" />
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
