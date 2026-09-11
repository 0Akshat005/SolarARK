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
    <section className="relative w-full bg-[#151817] overflow-hidden py-8 sm:py-10 lg:py-12 border-t border-[#232826]">
      
      {/* Background Solar Dusk Texture */}
      <img
        src="/images/solar-villa-sunset.jpg"
        alt="Solar rooftop dusk"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-25"
      />
      
      {/* Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#151817] via-[#151817]/80 to-[#151817]/90" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
          
          {/* Left / Center: Headline & Subtitle */}
          <div className="space-y-3 max-w-xl">
            <span className="font-body text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-[#B24635]">
              Let's Build a Brighter Tomorrow
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight">
              Your roof could do more.
            </h2>
            <p className="text-stone-300 text-sm sm:text-base font-body font-normal">
              Get a professional 3D site survey and custom solar feasibility assessment.
            </p>
          </div>

          {/* Center-Right Action */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 w-full lg:w-auto">
            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto justify-center group inline-flex items-center gap-3 px-7 py-3.5 min-h-[44px] rounded-[4px] bg-[#7A211D] hover:bg-[#631B18] text-white font-body font-medium text-sm sm:text-base tracking-wide transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Editorial Tagline */}
            <div className="hidden sm:block text-right pr-4">
              <span className="font-heading font-normal text-base sm:text-lg text-stone-300 tracking-normal block">
                Energy for what comes next.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
