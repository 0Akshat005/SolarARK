/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

interface StickyBarsProps {
  onCtaClick: () => void;
  onCalculatorClick: () => void;
}

export const StickyBars: React.FC<StickyBarsProps> = ({ onCtaClick, onCalculatorClick }) => {
  return (
    <>
      {/* Persistent Mobile Bottom Action Bar Only */}
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
          className="flex-1 bg-[#8B1E1E] hover:bg-[#5E1212] text-white font-semibold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-colors"
        >
          <span>Get Free Estimate</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </>
  );
};

