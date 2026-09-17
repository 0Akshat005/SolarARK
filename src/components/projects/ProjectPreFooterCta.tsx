/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Band 6: PRE-FOOTER CTA STRIP
 * Directly mirrors the inspiration layout:
 * - Headline: "Planning your own solar project?"
 * - Subtitle: "Let's build a solution that works for your space."
 * - Primary Action: Maroon button "Request Consultation →"
 * - Sharp architectural corners (rounded-none), on-brand warm neutrals and hairline borders.
 */

import React from 'react';
import { PrimaryButton } from '../PrimaryButton';

interface ProjectPreFooterCtaProps {
  onCtaClick?: () => void;
  onNavigate?: (path: string) => void;
}

export const ProjectPreFooterCta: React.FC<ProjectPreFooterCtaProps> = ({
  onCtaClick,
  onNavigate,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/contact');
    } else if (onCtaClick) {
      onCtaClick();
    }
  };

  return (
    <section className="bg-white py-6 sm:py-7 lg:py-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-8">
          
          {/* Left & Center: Eyebrow Stack + Vertical Divider + Headline/Subtext */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 lg:gap-10">
            
            {/* 1. Regional Eyebrow Stack: A CLEANER / BRIGHTER / MAHARASHTRA */}
            <div className="flex flex-col select-none shrink-0">
              <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-[#6C6C68] font-body leading-tight">
                A CLEANER
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-[#6C6C68] font-body leading-tight mt-0.5">
                BRIGHTER
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-[#6C6C68] font-body leading-tight mt-0.5">
                MAHARASHTRA
              </span>
              <div className="w-7 h-[1.5px] bg-[#E6E3DD] mt-2.5" />
            </div>

            {/* Vertical Architectural Divider */}
            <div className="hidden sm:block w-[1px] h-12 lg:h-14 bg-[#E6E3DD] shrink-0" />

            {/* 2. Headline & Subtext */}
            <div className="space-y-1 text-left">
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-medium text-[#151817] tracking-tight leading-tight">
                Tell us about your property.
              </h3>
              <p className="text-xs sm:text-sm lg:text-[15px] text-[#6C6C68] font-normal leading-normal font-body">
                We'll help assess the right solar solution for your space.
              </p>
            </div>

          </div>

          {/* 3. Right Action Button */}
          <div className="shrink-0 flex items-center">
            <PrimaryButton
              as="a"
              href="/contact"
              onClick={handleClick}
              size="md"
              className="w-full sm:w-auto justify-center whitespace-nowrap"
            >
              Get a Solar Assessment
            </PrimaryButton>
          </div>

        </div>
      </div>
    </section>
  );
};
