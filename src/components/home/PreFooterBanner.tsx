/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PreFooterBannerProps {
  onCtaClick: () => void;
}

export const PreFooterBanner: React.FC<PreFooterBannerProps> = ({ onCtaClick }) => {
  return (
    <section className="relative w-full bg-[#080E1C] overflow-hidden py-14 sm:py-16 lg:py-20 border-t border-stone-800">
      
      {/* Background Solar Dusk Texture */}
      <img
        src="/images/solar-villa-sunset.jpg"
        alt="Solar rooftop dusk"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-25"
      />
      
      {/* Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080E1C] via-[#080E1C]/80 to-[#080E1C]/90" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
          
          {/* Left / Center: Headline & Subtitle */}
          <div className="space-y-3 max-w-xl">
            <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              Let's Build a Brighter Tomorrow
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Your roof could do more.
            </h2>
            <p className="text-stone-300 text-sm sm:text-base font-normal">
              Get a professional 3D site survey and custom solar feasibility assessment.
            </p>
          </div>

          {/* Center-Right Action */}
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={onCtaClick}
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#8B1E1E] hover:bg-[#A82424] text-white font-heading font-semibold text-sm sm:text-base tracking-wide transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Editorial Script Tagline */}
            <div className="hidden sm:block text-right pr-4">
              <span className="font-serif italic text-lg sm:text-xl lg:text-2xl text-stone-300 tracking-wide block">
                Energy for what comes next.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
