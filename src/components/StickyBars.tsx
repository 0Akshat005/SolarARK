/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

interface StickyBarsProps {
  onCtaClick: () => void;
  onCalculatorClick: () => void;
}

export const StickyBars: React.FC<StickyBarsProps> = ({ onCtaClick }) => {
  return (
    <>
      {/* ── Ergonomic Mobile Thumb-Zone Action Bar (Psychological Conversion Hub) ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-stone-200/90 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] px-3.5 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] flex items-center justify-between gap-2.5">
        
        {/* 1. Direct Instant Dial (Top Conversion Driver for Mobile Users) */}
        <a
          href="tel:7080909590"
          className="flex-1 bg-emerald-50/90 hover:bg-emerald-100/90 active:scale-[0.98] border border-emerald-200/80 text-emerald-800 font-heading font-bold text-xs py-2.5 px-2 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs"
          title="Call Helpline: 7080909590"
          aria-label="Call SolarARK Advisor"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 border border-white" />
          </span>
          <Phone className="w-3.5 h-3.5 text-emerald-700" />
          <span>Call Advisor</span>
        </a>

        {/* 2. Primary High-Conversion CTA Button */}
        <button
          type="button"
          onClick={onCtaClick}
          className="flex-1 bg-[#8B1E1E] hover:bg-[#5E1212] active:scale-[0.98] text-white font-heading font-bold text-xs py-2.5 px-2 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-[#8B1E1E]/25 transition-all ring-1 ring-white/20 cursor-pointer"
        >
          <span>Get Free Estimate</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </>
  );
};
