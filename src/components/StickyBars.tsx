/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

interface StickyBarsProps {
  onCtaClick: () => void;
  onCalculatorClick: () => void;
}

export const StickyBars: React.FC<StickyBarsProps> = ({ onCtaClick, onCalculatorClick }) => {
  const [showDesktopSticky, setShowDesktopSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show desktop sticky bar after scrolling past 500px
      setShowDesktopSticky(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Light, Quiet Desktop Top Sticky Bar (Subtle contextual notification) */}
      {showDesktopSticky && (
        <div className="hidden lg:flex fixed top-16 left-0 right-0 z-40 bg-white/90 text-slate-700 backdrop-blur-md border-b border-slate-200/80 py-2 px-8 justify-between items-center shadow-sm transition-all duration-300">
          <div className="flex items-center gap-3 text-xs">
            <span className="font-semibold text-slate-800 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#1D5FE0]" />
              PM Surya Ghar Subsidy Support Available
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500">Reduce monthly power costs with rooftop solar</span>
          </div>

          <button
            onClick={onCtaClick}
            className="bg-[#1D5FE0] hover:bg-[#174AB8] active:scale-[0.97] text-white font-semibold text-xs px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 shadow-xs"
          >
            <span>Get My Free Savings Estimate</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Persistent Mobile Bottom Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200/80 shadow-lg p-3 pb-safe flex items-center justify-between gap-3">
        <button
          onClick={onCalculatorClick}
          className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
        >
          <Zap className="w-3.5 h-3.5 text-[#FFB020]" />
          <span>Calculate Savings</span>
        </button>

        <button
          onClick={onCtaClick}
          className="flex-1 bg-[#1D5FE0] hover:bg-[#174AB8] text-white font-semibold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-colors"
        >
          <span>Get Free Estimate</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </>
  );
};
