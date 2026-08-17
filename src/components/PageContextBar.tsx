/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft, Home as HomeIcon } from 'lucide-react';

export interface PageContextBarProps {
  currentPage: string;
  parentName?: string;
  parentPath?: string;
  backText?: string;
  backPath?: string;
  onNavigate: (path: string) => void;
  className?: string;
}

/**
 * Reusable Inner-Page Top Context Bar:
 * - Minimal, non-bulky breadcrumb (no borders, cards, or background boxes)
 * - Clean inline "← Back to Home" action that dissolves seamlessly into the page
 * - Standardized across About, Services, Projects, Careers, Gallery, Contact, etc.
 */
export const PageContextBar: React.FC<PageContextBarProps> = ({
  currentPage,
  parentName = 'Home',
  parentPath = '/',
  backText = 'Back to Home',
  backPath = '/',
  onNavigate,
  className = '',
}) => {
  return (
    <div className={`w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 pt-2 pb-2 ${className}`}>
      <div className="flex items-center justify-between gap-4 py-1">
        {/* ── Left: Compact Page Context (No Box, No Background) ── */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-[13px]">
          <button
            onClick={() => onNavigate(parentPath)}
            className="flex items-center gap-1 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer group"
          >
            <HomeIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" />
            <span className="font-normal">{parentName}</span>
          </button>

          <span className="text-slate-300 select-none font-light">/</span>

          <span className="font-semibold text-[#0B1730] tracking-tight">
            {currentPage}
          </span>
        </nav>

        {/* ── Right: Simple Inline Back Action (No Card, No Container) ── */}
        <button
          onClick={() => onNavigate(backPath)}
          className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-slate-500 hover:text-[#0B1730] transition-all cursor-pointer select-none"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0B1730] group-hover:-translate-x-0.5 transition-all" />
          <span>{backText}</span>
        </button>
      </div>
    </div>
  );
};
