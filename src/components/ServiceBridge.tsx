/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import {
  Compass,
  BarChart3,
  FileCheck,
  Headphones,
  ArrowRight,
} from 'lucide-react';

interface ServiceBridgeProps {
  onCalculatorClick: () => void;
}

const pillars = [
  {
    num: '01',
    code: 'ENGINEER',
    title: 'Engineered for your roof',
    description:
      'Site assessment, roof conditions and system design are considered before your system is sized.',
    label: 'SITE + DESIGN',
    Icon: Compass,
  },
  {
    num: '02',
    code: 'SIZE',
    title: 'Sized around your bill',
    description:
      'Your electricity use guides the recommendation — not a one-size-fits-all package.',
    label: 'RIGHT SYSTEM',
    Icon: BarChart3,
  },
  {
    num: '03',
    code: 'APPROVALS',
    title: 'Paperwork, taken care of',
    description:
      'Support with PM Surya Ghar, DISCOM approvals and net-metering through the process.',
    label: 'SUBSIDY + APPROVALS',
    Icon: FileCheck,
  },
  {
    num: '04',
    code: 'SUPPORT',
    title: 'Supported after installation',
    description:
      'From monitoring to post-installation assistance, SolarARK stays involved beyond commissioning.',
    label: 'LONG-TERM SUPPORT',
    Icon: Headphones,
  },
] as const;

export const ServiceBridge: React.FC<ServiceBridgeProps> = ({
  onCalculatorClick,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeHovered, setActiveHovered] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="service-bridge-heading"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F2EFE9] via-[#FAF8F5] to-[#F5F4F0] border-t border-stone-300/40"
    >
      {/* Restrained architectural ambient glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: 'radial-gradient(ellipse 70% 45% at 50% 0%, rgba(226, 125, 22, 0.05), transparent 75%)'
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* ── ASYMMETRICAL EDITORIAL HEADER ── */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 sm:mb-14 lg:mb-16 transition-all duration-700 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Left Anchor: Eyebrow + Headline + Subline */}
          <div className="lg:col-span-8 space-y-3.5">
            <div className="eyebrow inline-flex items-center gap-2 text-[10.5px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-stone-500 font-heading">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
              <span>WHAT WE HANDLE</span>
            </div>

            <h2
              id="service-bridge-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0B1730] tracking-tight leading-[1.12] m-0"
            >
              SolarARK handles the hard parts.
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal m-0">
              From checking your rooftop to sizing the right system, navigating
              approvals and supporting you after installation — we take care of
              the solar journey end to end.
            </p>
          </div>

          {/* Right Anchor: Refined Continuity Stepper Indicator */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
            <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-stone-400 font-heading mb-2.5">
              Continuity Rail
            </div>
            
            <nav 
              aria-label="Solar journey progression"
              className="inline-flex items-center flex-wrap gap-1 p-1 rounded-full bg-stone-200/60 border border-stone-300/60 backdrop-blur-xs"
            >
              {pillars.map((pillar, idx) => {
                const isActive = activeHovered === idx;
                return (
                  <button
                    key={pillar.code}
                    type="button"
                    onClick={() => setActiveHovered(idx)}
                    onMouseEnter={() => setActiveHovered(idx)}
                    className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[10.5px] font-bold font-heading tracking-wide transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-[#0B1730] text-white shadow-xs'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/50'
                    }`}
                  >
                    <span>{pillar.code}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* ── EDITORIAL INFORMATION RAIL (NO EQUAL WHITE CARDS) ── */}
        <div
          onMouseLeave={() => setActiveHovered(null)}
          className={`border-y border-stone-300/80 bg-white/40 backdrop-blur-xs transition-all duration-700 delay-150 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-stone-200/80">
            {pillars.map((pillar, idx) => {
              const isItemActive = activeHovered === idx;
              const isAnyActive = activeHovered !== null;
              const isMuted = isAnyActive && !isItemActive;

              return (
                <div
                  key={pillar.num}
                  onMouseEnter={() => setActiveHovered(idx)}
                  onFocus={() => setActiveHovered(idx)}
                  tabIndex={0}
                  className={`group relative p-6 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-500 ease-out outline-none focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-amber-500/50 ${
                    isItemActive
                      ? 'bg-white/95 shadow-sm z-10'
                      : 'hover:bg-white/60'
                  } ${isMuted ? 'opacity-40' : 'opacity-100'}`}
                >
                  {/* Subtle top active hairline indicator */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-transparent overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-amber-500 via-[#E27D16] to-amber-600 transition-all duration-500 ease-out ${
                        isItemActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>

                  <div>
                    {/* Step Numeral + Micro-label */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-heading font-bold text-xs sm:text-[13px] tracking-wider text-stone-400 transition-colors duration-300 group-hover:text-stone-700">
                        {pillar.num}
                      </span>
                      <span className="text-[9px] sm:text-[9.5px] font-bold tracking-[0.14em] uppercase text-stone-400 font-heading transition-colors duration-300 group-hover:text-amber-700">
                        {pillar.label}
                      </span>
                    </div>

                    {/* Restrained Minimalist Icon */}
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/70 text-amber-700 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-100/70 group-hover:border-amber-300">
                      <pillar.Icon className="w-5 h-5 transition-colors duration-300 text-amber-700" />
                    </div>

                    {/* Pillar Title */}
                    <h3 className="font-heading text-base sm:text-lg font-bold text-[#0B1730] leading-snug tracking-tight mb-2.5 transition-colors duration-300 group-hover:text-[#8B1E1E]">
                      {pillar.title}
                    </h3>

                    {/* Pillar Description */}
                    <p className="text-xs sm:text-[13.5px] text-stone-600 leading-relaxed font-normal m-0">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom continuity micro-progress indicator */}
                  <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-[10px] font-heading font-bold uppercase tracking-wider text-stone-400">
                    <span className="transition-colors duration-300 group-hover:text-stone-700">
                      Step {pillar.num}
                    </span>
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        isItemActive
                          ? 'bg-amber-500 scale-125'
                          : 'bg-stone-300'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── INTEGRATED EDITORIAL CONCLUSION & TRANSITION CTA ── */}
        <div
          className={`mt-8 sm:mt-10 pt-6 sm:pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-500 delay-300 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-3'
          }`}
        >
          {/* Trust Conclusion Text */}
          <div className="flex items-center gap-2.5 text-stone-600 text-xs sm:text-[13.5px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-2xs" />
            <p className="m-0 font-medium text-stone-700">
              Clear engineering and zero paperwork hurdles before you invest.
            </p>
          </div>

          {/* Natural Transition CTA */}
          <button
            onClick={onCalculatorClick}
            className="inline-flex items-center gap-2 text-[#8B1E1E] font-heading font-bold text-sm sm:text-base hover:gap-3 transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/40 focus-visible:ring-offset-2 rounded-lg px-2 py-1 shrink-0"
            aria-label="Scroll down to calculate solar savings"
          >
            <span>See what solar could save you</span>
            <ArrowRight className="w-4 h-4 text-[#8B1E1E] group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
