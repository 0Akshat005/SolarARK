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
    <section className={`w-full bg-[#FAF8F5] py-10 sm:py-14 lg:py-16 overflow-hidden border-y border-stone-200/70 ${className}`}>
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* ── LEFT: AUTHENTIC REAL LEADER PORTRAIT (≈45%) ── */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Soft Warm Halo Atmosphere */}
            <div 
              className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full bg-[#F3ECE1] -z-0 opacity-80 blur-2xs"
              aria-hidden="true"
            />
            
            {/* Integrated Real Portrait Card */}
            <div className="relative z-10 w-full max-w-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-100 group">
              <img
                src="/images/earnwithus/director-shrikant-editorial.jpg"
                alt="Shrikant Tikhile, Director, SolarARK Projects Pvt. Ltd."
                className="w-full h-[300px] sm:h-[380px] lg:h-[420px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/official-founder-desk-clean.png';
                }}
              />
            </div>
          </div>

          {/* ── RIGHT: EDITORIAL STATEMENT & ATTRIBUTION (≈55%) ── */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 lg:pl-4 xl:pl-8 text-left">
            
            {/* Quote Icon Badge with Extending Maroon Horizon Accent Line */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#741616] text-white flex items-center justify-center shrink-0 shadow-md">
                <Quote className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white rotate-180" />
              </div>
              <div className="flex-1 max-w-[120px] sm:max-w-[180px] h-[1.5px] bg-[#8B1E1E]/30" />
            </div>

            {/* Dominant Editorial Quote Message */}
            <blockquote className="font-heading text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] font-bold text-[#0B1730] tracking-tight leading-[1.3] text-left m-0">
              “ Join us in illuminating Maharashtra with clean solar energy. Together, we empower homes and create lasting entrepreneurial livelihoods.”
            </blockquote>

            {/* Small Maroon Accent Divider */}
            <div className="w-10 h-1 bg-[#8B1E1E] rounded-full" />

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
