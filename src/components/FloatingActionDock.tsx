/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Calculator, MapPin, ArrowRight } from 'lucide-react';

interface FloatingActionDockProps {
  onCalculatorClick: () => void;
  onLocateClick: () => void;
}

export const FloatingActionDock: React.FC<FloatingActionDockProps> = ({
  onCalculatorClick,
  onLocateClick,
}) => {
  return (
    <aside
      aria-label="Quick Actions Dock"
      className="hidden lg:flex fixed bottom-24 right-0 z-40 flex-col items-end gap-2.5 select-none pointer-events-auto"
    >
      {/* ── 1. Call Us / Advisor ── */}
      <a
        href="tel:+917080909590"
        aria-label="Call SolarArk Advisor at +91 7080909590"
        className="action-dock-tab group flex items-center justify-start bg-[#8B1E1E] hover:bg-[#731616] active:bg-[#5E1212] text-white rounded-l-full border-l border-t border-b border-white/20 shadow-[-4px_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[-6px_6px_22px_rgba(139,30,30,0.35)] outline-none focus-visible:ring-2 focus-visible:ring-amber-300 h-11 pl-3.5 pr-5 cursor-pointer"
      >
        <div className="w-5 h-5 flex items-center justify-center shrink-0">
          <Phone className="w-4 h-4 fill-white stroke-white stroke-[1.5]" />
        </div>
        <div className="flex items-center gap-2 pl-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          <span className="text-xs font-semibold tracking-wide font-sans">
            Call Us
          </span>
          <span className="text-[11px] text-amber-200/80 font-mono tracking-tight">
            +91 7080909590
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-white/70 stroke-[2] ml-0.5" />
        </div>
      </a>

      {/* ── 2. WhatsApp Us ── */}
      <a
        href="https://wa.me/917080909590?text=Hi%20SolarARK%2C%20I%20would%20like%20to%20know%20more%20about%20rooftop%20solar%20solutions."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SolarArk on WhatsApp"
        className="action-dock-tab group flex items-center justify-start bg-[#8B1E1E] hover:bg-[#731616] active:bg-[#5E1212] text-white rounded-l-full border-l border-t border-b border-white/20 shadow-[-4px_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[-6px_6px_22px_rgba(139,30,30,0.35)] outline-none focus-visible:ring-2 focus-visible:ring-amber-300 h-11 pl-3.5 pr-5 cursor-pointer"
      >
        <div className="w-5 h-5 flex items-center justify-center shrink-0">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4.5 h-4.5"
            aria-hidden="true"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.312l-.744 2.716 2.784-.73c.995.543 1.956.837 2.702.837h.002c3.18 0 5.767-2.586 5.768-5.766 0-1.542-.601-2.992-1.691-4.083-1.09-1.091-2.54-1.692-4.076-1.692zm6.985 5.767c0 3.847-3.13 6.977-6.983 6.977-.942 0-2.128-.31-3.238-.91l-3.593.942.96-3.504c-.687-1.196-1.095-2.222-1.095-3.505 0-3.848 3.13-6.978 6.983-6.978 1.865 0 3.619.726 4.938 2.046 1.319 1.32 2.028 3.072 2.028 4.932zm-2.977 2.193c-.164-.082-.969-.478-1.119-.533-.15-.055-.26-.082-.369.082-.11.165-.424.534-.52.643-.096.11-.192.123-.356.041-.164-.082-.693-.255-1.32-.814-.488-.435-.818-.973-.914-1.137-.096-.165-.01-.254.072-.336.074-.074.164-.192.246-.288.082-.096.11-.164.164-.274.055-.11.027-.205-.014-.288-.041-.082-.369-.89-.506-1.22-.133-.32-.269-.277-.369-.282-.096-.005-.206-.006-.315-.006s-.287.041-.438.205c-.15.164-.575.561-.575 1.368 0 .807.588 1.587.67 1.696.082.11 1.157 1.767 2.803 2.477.392.169.697.27.935.346.393.125.751.108 1.034.065.315-.047.969-.396 1.106-.778.137-.383.137-.711.096-.779-.041-.069-.151-.11-.315-.192z" />
          </svg>
        </div>
        <div className="flex items-center gap-2 pl-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          <span className="text-xs font-semibold tracking-wide font-sans">
            WhatsApp Us
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-white/70 stroke-[2]" />
        </div>
      </a>

      {/* ── 3. Solar Calculator ── */}
      <button
        type="button"
        onClick={onCalculatorClick}
        aria-label="Calculate your solar savings"
        className="action-dock-tab group flex items-center justify-start bg-[#8B1E1E] hover:bg-[#731616] active:bg-[#5E1212] text-white rounded-l-full border-l border-t border-b border-white/20 shadow-[-4px_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[-6px_6px_22px_rgba(139,30,30,0.35)] outline-none focus-visible:ring-2 focus-visible:ring-amber-300 h-11 pl-3.5 pr-5 cursor-pointer"
      >
        <div className="w-5 h-5 flex items-center justify-center shrink-0">
          <Calculator className="w-4 h-4 stroke-white stroke-[1.75]" />
        </div>
        <div className="flex items-center gap-2 pl-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          <span className="text-xs font-semibold tracking-wide font-sans">
            Solar Calculator
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-white/70 stroke-[2]" />
        </div>
      </button>

      {/* ── 4. Locate Offices ── */}
      <button
        type="button"
        onClick={onLocateClick}
        aria-label="Locate SolarArk offices in Maharashtra"
        className="action-dock-tab group flex items-center justify-start bg-[#8B1E1E] hover:bg-[#731616] active:bg-[#5E1212] text-white rounded-l-full border-l border-t border-b border-white/20 shadow-[-4px_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[-6px_6px_22px_rgba(139,30,30,0.35)] outline-none focus-visible:ring-2 focus-visible:ring-amber-300 h-11 pl-3.5 pr-5 cursor-pointer"
      >
        <div className="w-5 h-5 flex items-center justify-center shrink-0">
          <MapPin className="w-4 h-4 stroke-white stroke-[1.75]" />
        </div>
        <div className="flex items-center gap-2 pl-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          <span className="text-xs font-semibold tracking-wide font-sans">
            Locate Us
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-white/70 stroke-[2]" />
        </div>
      </button>
    </aside>
  );
};
