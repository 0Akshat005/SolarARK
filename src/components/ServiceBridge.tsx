/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ServiceBridgeProps {
  onCalculatorClick?: () => void;
  onNavigate?: (path: string) => void;
}

const journeyStages = [
  {
    num: '01',
    label: 'ROOF',
    descLine1: 'Right system',
    descLine2: 'for your site',
    renderIcon: () => (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 text-[#982522] transition-transform duration-300 group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m2 13 10-8 10 8" />
        <path d="M5 10.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8.5" />
      </svg>
    ),
  },
  {
    num: '02',
    label: 'SYSTEM',
    descLine1: 'Sized to your',
    descLine2: 'actual usage',
    renderIcon: () => (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 text-[#982522] transition-transform duration-300 group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="13" rx="1.5" />
        <line x1="3" y1="9.5" x2="21" y2="9.5" />
        <line x1="9" y1="3" x2="9" y2="16" />
        <line x1="15" y1="3" x2="15" y2="16" />
        <path d="M7 21h10" />
        <path d="M12 16v5" />
      </svg>
    ),
  },
  {
    num: '03',
    label: 'APPROVAL',
    descLine1: 'Subsidy & DISCOM',
    descLine2: 'coordination',
    renderIcon: () => (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 text-[#982522] transition-transform duration-300 group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    num: '04',
    label: 'SUPPORT',
    descLine1: 'Support beyond',
    descLine2: 'installation',
    renderIcon: () => (
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 text-[#982522] transition-transform duration-300 group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
      </svg>
    ),
  },
] as const;

export const ServiceBridge: React.FC<ServiceBridgeProps> = ({
  onCalculatorClick,
  onNavigate,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeStage, setActiveStage] = useState<number | null>(null);

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
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/services');
    } else {
      window.location.href = '/services';
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="rooftop-system-heading"
      className="relative overflow-hidden bg-[#FAF6F0] pt-14 sm:pt-18 pb-12 sm:pb-16 border-t border-stone-200/50"
    >
      {/* ── BACKGROUND ARCHITECTURAL ILLUSTRATION (RIGHT HALF) ── */}
      <div className="absolute top-0 right-0 w-full lg:w-[64%] xl:w-[60%] h-full pointer-events-none select-none z-0 overflow-hidden flex items-center justify-end">
        <img
          src="/solar-architectural-villa.png"
          alt="Solar Architectural Residence"
          className="w-auto h-[95%] max-w-none object-contain object-right-bottom opacity-85 mix-blend-multiply transition-opacity duration-1000 translate-x-4 lg:translate-x-0"
        />
        {/* Soft Ambient Left Edge Blend */}
        <div className="absolute inset-y-0 left-0 w-32 sm:w-48 bg-gradient-to-r from-[#FAF6F0] to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* ── TOP EDITORIAL ROW ── */}
        <div
          className={`flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-12 sm:mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Left Column: Eyebrow, Heading, Paragraph */}
          <div className="space-y-3.5 max-w-2xl">
            {/* Eyebrow */}
            <div className="text-[#C0392B] text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase font-heading">
              FROM ROOFTOP TO RUNNING SYSTEM
            </div>

            {/* Main Headline */}
            <h2
              id="rooftop-system-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] font-bold text-[#10233F] tracking-tight leading-[1.08] m-0"
            >
              Solar, properly planned. <br />
              Properly <span className="text-[#982522]">supported.</span>
            </h2>

            {/* Supporting Subtitle */}
            <p className="text-stone-600 text-sm sm:text-[15.5px] leading-relaxed max-w-xl font-normal pt-1 m-0">
              We assess, size, coordinate and support your system—
              <br className="hidden sm:inline" />
              so the move to solar feels straightforward from day one.
            </p>
          </div>

          {/* Right Action: Explore our services ↗ */}
          <div className="shrink-0 pt-2 lg:pt-4">
            <button
              onClick={handleServicesClick}
              className="group inline-flex items-center gap-3 text-sm sm:text-[15.5px] font-bold font-heading text-[#10233F] hover:text-[#982522] transition-colors cursor-pointer"
            >
              <span>Explore our services</span>
              <div className="w-8 h-8 rounded-full bg-white/90 border border-[#E0D7CC] shadow-2xs flex items-center justify-center group-hover:border-[#982522] group-hover:bg-[#982522] transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 text-[#982522] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
            </button>
          </div>
        </div>

        {/* ── 4-STAGE CONNECTED PROCESS LINE (DESKTOP / TABLET) ── */}
        <div
          className={`relative pt-4 pb-2 transition-all duration-700 delay-150 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Continuous Arched Glowing Track Line (Desktop / Tablet) */}
          <div className="hidden md:block relative w-full h-14 mb-4">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1000 50"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Glow Filter */}
                <filter id="trackGlow" x="-10%" y="-100%" width="120%" height="300%">
                  <feGaussianBlur stdDeviation="3" result="glow" />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E27D16" stopOpacity="0.45" />
                  <stop offset="20%" stopColor="#D96B3C" stopOpacity="0.95" />
                  <stop offset="80%" stopColor="#C0392B" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#E27D16" stopOpacity="0.45" />
                </linearGradient>
              </defs>

              {/* Left Arch Terminal */}
              <path
                d="M 20 48 C 20 25, 45 22, 90 22"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                filter="url(#trackGlow)"
              />
              <circle cx="20" cy="48" r="3.5" fill="#D96B3C" />
              <circle cx="20" cy="48" r="7" fill="#D96B3C" opacity="0.25" />

              {/* Main Horizontal Connecting Spine */}
              <line
                x1="90"
                y1="22"
                x2="910"
                y2="22"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                filter="url(#trackGlow)"
              />

              {/* Right Arch Terminal */}
              <path
                d="M 910 22 C 955 22, 980 25, 980 48"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                filter="url(#trackGlow)"
              />
              <circle cx="980" cy="48" r="3.5" fill="#C0392B" />
              <circle cx="980" cy="48" r="7" fill="#C0392B" opacity="0.25" />
            </svg>
          </div>

          {/* 4 Connected Stages Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 lg:gap-8 relative z-10 md:-mt-18">
            {journeyStages.map((stage, idx) => {
              const isHovered = activeStage === idx;

              return (
                <div
                  key={stage.num}
                  onMouseEnter={() => setActiveStage(idx)}
                  onMouseLeave={() => setActiveStage(null)}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Circular Node */}
                  <div className="relative mb-3 flex flex-col items-center">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFFDF9] border-2 transition-all duration-300 flex items-center justify-center ${
                        isHovered
                          ? 'border-[#982522] shadow-[0_0_20px_rgba(217,107,60,0.45)] scale-105'
                          : 'border-[#D96B3C]/80 shadow-[0_0_14px_rgba(217,107,60,0.22)]'
                      }`}
                    >
                      <span className="font-heading font-bold text-sm sm:text-base text-[#10233F]">
                        {stage.num}
                      </span>
                    </div>

                    {/* Stem Drop Line */}
                    <div className="w-[1.5px] h-4 sm:h-5 bg-[#D96B3C]/70 my-1" />
                  </div>

                  {/* Stage Icon */}
                  <div className="mb-2.5 flex items-center justify-center h-8">
                    {stage.renderIcon()}
                  </div>

                  {/* Stage Label */}
                  <h3 className="font-heading font-bold text-xs sm:text-sm tracking-[0.12em] uppercase text-[#10233F] mb-1 transition-colors duration-300 group-hover:text-[#982522]">
                    {stage.label}
                  </h3>

                  {/* Stage Description */}
                  <p className="text-xs sm:text-[13.5px] text-stone-600 leading-snug font-normal m-0 italic">
                    <span>{stage.descLine1}</span>
                    <br />
                    <span>{stage.descLine2}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── BOTTOM STATEMENT & METADATA BAR ── */}
        <div
          className={`mt-14 sm:mt-18 text-center space-y-4 transition-all duration-700 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {/* Closing Statement */}
          <h3 className="font-heading text-xl sm:text-2xl lg:text-[26px] font-bold text-[#10233F] tracking-tight m-0">
            One team. Every step of your <span className="text-[#982522]">solar</span> journey.
          </h3>

          {/* Metadata Track Line */}
          <div className="max-w-3xl mx-auto flex items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-[11.5px] font-bold tracking-[0.18em] uppercase text-stone-500 font-heading pt-1">
            {/* Left Terminal Ring */}
            <span className="hidden md:inline-block w-2.5 h-2.5 rounded-full border border-[#D96B3C]/60 bg-[#FAF6F0]" />
            <span className="hidden md:inline-block w-8 sm:w-16 h-px bg-gradient-to-r from-[#D96B3C]/40 to-stone-300" />

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-stone-700 whitespace-nowrap">
              <span>ASSESSMENT</span>
              <span className="text-[#D96B3C] font-bold">•</span>
              <span>DESIGN</span>
              <span className="text-[#D96B3C] font-bold">•</span>
              <span>APPROVALS</span>
              <span className="text-[#D96B3C] font-bold">•</span>
              <span>INSTALLATION</span>
              <span className="text-[#D96B3C] font-bold">•</span>
              <span>SUPPORT</span>
            </div>

            {/* Right Terminal Ring */}
            <span className="hidden md:inline-block w-8 sm:w-16 h-px bg-gradient-to-l from-[#D96B3C]/40 to-stone-300" />
            <span className="hidden md:inline-block w-2.5 h-2.5 rounded-full border border-[#D96B3C]/60 bg-[#FAF6F0]" />
          </div>
        </div>
      </div>
    </section>
  );
};
