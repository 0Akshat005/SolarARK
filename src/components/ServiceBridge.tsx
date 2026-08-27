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
    title: 'Engineered for your roof',
    description:
      'Site assessment, roof conditions and system design are considered before your system is sized.',
    label: 'SITE + DESIGN',
    Icon: Compass,
  },
  {
    num: '02',
    title: 'Sized around your bill',
    description:
      'Your electricity use guides the recommendation — not a one-size-fits-all package.',
    label: 'RIGHT SYSTEM',
    Icon: BarChart3,
  },
  {
    num: '03',
    title: 'Paperwork, taken care of',
    description:
      'Support with PM Surya Ghar, DISCOM approvals and net-metering through the process.',
    label: 'SUBSIDY + APPROVALS',
    Icon: FileCheck,
  },
  {
    num: '04',
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
  // ── Scroll-triggered entrance animation ──
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

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
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-14 sm:py-18 lg:py-22 bg-gradient-to-b from-[#E8E4DE] via-[#F2F0EC] to-[#F5F4F0]"
    >
      {/* Subtle warm glow — restrained */}
      <div className="absolute top-[15%] left-[20%] w-[30%] h-[200px] bg-amber-400/[0.06] blur-[100px] rounded-full pointer-events-none" />

      {/* ── Content Container ── */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* ── Header Block ── */}
        <div
          className={`max-w-2xl mx-auto text-center space-y-3 mb-10 sm:mb-12 lg:mb-14 transition-all duration-700 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-3'
          }`}
        >
          {/* Eyebrow */}
          <div className="eyebrow inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200/80 text-stone-600 shadow-2xs text-[10px] sm:text-[10.5px] font-bold tracking-wide font-heading">
            WHAT WE HANDLE
          </div>

          {/* Headline */}
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#0B1730] tracking-tight leading-[1.15]">
            SolarARK handles the hard parts.
          </h2>

          {/* Supporting copy */}
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl mx-auto">
            From checking your rooftop to sizing the right system, navigating
            approvals and supporting you after installation — we take care of
            the solar journey end to end.
          </p>
        </div>

        {/* ── Connected Editorial Rail Panel ── */}
        <div
          className={`bg-white/80 backdrop-blur-sm border border-stone-200/80 rounded-2xl shadow-lg shadow-black/[0.04] overflow-hidden transition-all duration-700 delay-200 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Subtle progression connector — desktop only */}
          <div className="hidden lg:block relative h-px mx-8 mt-0">
            <div className="absolute inset-x-0 top-0 border-t border-dashed border-stone-200/70" />
          </div>

          {/* 4-Pillar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.num}
                className={`group relative p-5 sm:p-6 lg:p-7 transition-all duration-600 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                } ${
                  // Vertical separators — right border on all but last in row
                  i < 3
                    ? 'lg:border-r lg:border-stone-200/60'
                    : ''
                } ${
                  // Tablet: right border on odd-indexed (0, 2)
                  i % 2 === 0
                    ? 'md:border-r md:border-stone-200/60 lg:border-r'
                    : 'md:border-r-0'
                } ${
                  // Horizontal separator below top row on tablet
                  i < 2
                    ? 'md:border-b md:border-stone-200/60 lg:border-b-0'
                    : ''
                } ${
                  // Mobile: all but last get bottom border
                  i < 3 ? 'border-b border-stone-200/60 md:border-b-0' : ''
                } ${
                  // Fix: last column on lg should have no right border
                  i === 3 ? 'lg:border-r-0' : ''
                } hover:bg-stone-50/80`}
                style={{
                  transitionDelay: isVisible ? `${150 + i * 100}ms` : '0ms',
                }}
              >
                {/* Step Number */}
                <span className="text-[10px] font-bold tracking-wider text-stone-300 font-heading block mb-3">
                  {pillar.num}
                </span>

                {/* Icon Container */}
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200/60 flex items-center justify-center mb-3.5 group-hover:bg-amber-100/70 group-hover:border-amber-300/50 transition-colors duration-300">
                  <pillar.Icon className="w-[18px] h-[18px] text-amber-700 group-hover:text-amber-800 transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-sm sm:text-[15px] font-bold text-slate-900 leading-snug mb-2 group-hover:text-[#8B1E1E] transition-colors duration-300">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed mb-3">
                  {pillar.description}
                </p>

                {/* Micro-Label */}
                <span className="text-[9px] font-bold tracking-[0.1em] uppercase text-stone-400 font-heading">
                  {pillar.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Transition CTA ── */}
        <div
          className={`text-center mt-8 sm:mt-10 transition-all duration-500 delay-500 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={onCalculatorClick}
            className="inline-flex items-center gap-2 text-[#8B1E1E] font-heading font-bold text-sm sm:text-[15px] hover:gap-3 transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/40 focus-visible:ring-offset-2 rounded-lg px-1 py-0.5"
            aria-label="Scroll to solar savings calculator"
          >
            <span>See what solar could save you</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
