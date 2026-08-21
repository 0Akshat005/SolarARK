/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Quote } from 'lucide-react';

interface LeadershipQuoteProps {
  className?: string;
}

export const LeadershipQuote: React.FC<LeadershipQuoteProps> = ({ className = '' }) => {
  return (
    <section 
      className={`w-full bg-[#F7F4ED] py-12 sm:py-16 lg:py-20 overflow-hidden border-y border-stone-200/70 relative ${className}`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* ── LEFT: SEAMLESSLY INTEGRATED ART-DIRECTED PORTRAIT (≈45%) ── */}
          {/* Critical: No card border, no card shadow, no rectangular box */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-[480px] flex items-center justify-center">
              <img
                src="/images/earnwithus/director-shrikant-editorial.jpg"
                alt="Shrikant Tikhile, Director, SolarARK Projects Pvt. Ltd."
                className="w-full h-auto max-h-[440px] object-contain object-bottom pointer-events-none select-none mix-blend-multiply"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/official-founder-desk-clean.png';
                }}
              />
            </div>
          </div>

          {/* ── RIGHT: EDITORIAL STATEMENT & ATTRIBUTION (≈55%) ── */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 lg:pl-2 xl:pl-6 text-left">
            
            {/* Quote Icon Badge with Extending Maroon Horizon Accent Line */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#6B1414] text-white flex items-center justify-center shrink-0 shadow-md">
                <Quote className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white rotate-180" />
              </div>
              <div className="flex-1 max-w-[140px] sm:max-w-[200px] h-[1.5px] bg-[#8B1E1E]/35" />
            </div>

            {/* Dominant Editorial Quote Message (2–3 lines on desktop) */}
            <blockquote className="font-heading text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] font-bold text-[#0B1730] tracking-tight leading-[1.25] text-left m-0 max-w-2xl">
              “ Join us in illuminating Maharashtra with clean solar energy. Together, we empower homes and create lasting entrepreneurial livelihoods.”
            </blockquote>

            {/* Small Maroon Accent Divider */}
            <div className="w-12 h-[2px] bg-[#8B1E1E] rounded-full" />

            {/* Credible Attribution Hierarchy */}
            <div className="space-y-1 pt-0.5">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#8B1E1E] tracking-tight m-0">
                Shrikant Tikhile
              </h3>
              <p className="text-xs sm:text-sm font-bold text-slate-800 font-heading m-0">
                Director, SolarARK Projects Pvt. Ltd.
              </p>
              <p className="text-xs sm:text-sm text-stone-500 font-normal m-0">
                Amravati &amp; Nagpur Regional Solar Operations
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
