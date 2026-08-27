/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { Rocket, Home as HomeIcon, Users, Heart, MapPin } from 'lucide-react';

export interface JourneyMilestone {
  year: string;
  badgeColor: string;
  inkColor: string;
  glowColor: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}

// Exact milestone copy & color mapping matching the reference design
const MILESTONES: JourneyMilestone[] = [
  {
    year: '2020',
    badgeColor: '#A82424',
    inkColor: '#8B1E1E',
    glowColor: 'rgba(168, 36, 36, 0.45)',
    icon: Rocket,
    title: 'SolarARK Projects',
    description: 'The beginning of our solar journey in Nagpur with initial rooftop designs.',
  },
  {
    year: '2021',
    badgeColor: '#8B1E1E',
    inkColor: '#8B1E1E',
    glowColor: 'rgba(139, 30, 30, 0.45)',
    icon: HomeIcon,
    title: '575 Homes',
    description: 'Our residential footprint expanded across cities in Maharashtra.',
  },
  {
    year: '2022',
    badgeColor: '#C53030',
    inkColor: '#A82424',
    glowColor: 'rgba(197, 48, 48, 0.45)',
    icon: Users,
    title: '2230+ Solarised',
    description: 'Major scale-up across residential clusters, commercial businesses, and 50+ housing societies.',
  },
  {
    year: '2023',
    badgeColor: '#10B981',
    inkColor: '#059669',
    glowColor: 'rgba(16, 185, 129, 0.45)',
    icon: Heart,
    title: '5000+ Customers',
    description: 'Reached milestone of 5,000+ happy homeowners on reliable, long-term solar solutions.',
  },
  {
    year: '2024',
    badgeColor: '#8B5CF6',
    inkColor: '#7C3AED',
    glowColor: 'rgba(139, 92, 246, 0.45)',
    icon: MapPin,
    title: 'New Branches',
    description: 'Established dedicated regional branch offices in Akola, Chh. Sambhaji Nagar & Wardha.',
  },
];

export const OurJourney: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Our journey timeline"
      className={`journey-section relative overflow-hidden rounded-3xl border border-stone-200/80 shadow-xs py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 my-6 ${
        isVisible ? 'is-visible' : ''
      }`}
      style={{
        background: `
          radial-gradient(ellipse 900px 480px at 15% -10%, rgba(226,125,22, 0.14), transparent 60%),
          radial-gradient(ellipse 800px 460px at 100% 10%, rgba(139,30,30, 0.08), transparent 60%),
          linear-gradient(180deg, #fffbf6 0%, #fdf5ec 28%, #fbf4f4 68%, #f8efef 100%)
        `,
      }}
    >
      {/* Delicate Curved Ambient Wave Lines in Corners (Visual Accent) */}
      <svg
        className="absolute -bottom-24 -left-24 w-[500px] h-[500px] text-amber-500/10 pointer-events-none z-0"
        viewBox="0 0 500 500"
        fill="none"
      >
        <circle cx="100" cy="400" r="160" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="100" cy="400" r="240" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="400" r="320" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="100" cy="400" r="400" stroke="currentColor" strokeWidth="1" />
      </svg>

      <svg
        className="absolute -top-24 -right-24 w-[500px] h-[500px] text-[#8B1E1E]/10 pointer-events-none z-0"
        viewBox="0 0 500 500"
        fill="none"
      >
        <circle cx="400" cy="100" r="160" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="400" cy="100" r="240" stroke="currentColor" strokeWidth="1" />
        <circle cx="400" cy="100" r="320" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="400" cy="100" r="400" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* CSS Diagonal Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0 1px, transparent 1px 44px),
            repeating-linear-gradient(45deg, rgba(15, 23, 42, 0.8) 0 1px, transparent 1px 44px)
          `,
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        }}
      />

      <style>{`
        /* Header entrance */
        .journey-header {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.2, 0.7, 0.3, 1);
        }
        .journey-section.is-visible .journey-header {
          opacity: 1;
          transform: translateY(0);
        }

        /* Node Top entrance */
        .journey-node-top {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.2, 0.7, 0.3, 1.3);
        }
        .journey-section.is-visible .journey-node-top {
          opacity: 1;
          transform: translateY(0);
        }

        /* Connecting line draw */
        .journey-timeline-line {
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 1.3s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
        }
        .journey-section.is-visible .journey-timeline-line {
          transform: scaleX(1);
        }

        /* Arrowhead entrance */
        .journey-timeline-arrow {
          opacity: 0;
          transition: opacity 0.5s ease 1.5s;
        }
        .journey-section.is-visible .journey-timeline-arrow {
          opacity: 1;
        }

        /* Node Bottom entrance */
        .journey-node-bottom {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.2, 0.7, 0.3, 1);
        }
        .journey-section.is-visible .journey-node-bottom {
          opacity: 1;
          transform: translateY(0);
        }

        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          .journey-section * {
            animation: none !important;
            transition: opacity 0.35s ease !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* ── SECTION HEADER (EXACT REFERENCE DESIGN) ── */}
      <div className="journey-header relative z-10 text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3">
        {/* Eyebrow: — OUR STORY — */}
        <div className="flex items-center justify-center gap-2">
          <span className="w-4 h-[1.5px] bg-stone-400" />
          <p className="text-xs sm:text-[13px] font-bold text-stone-600 uppercase tracking-[0.2em] font-heading m-0">
            Our Story
          </p>
          <span className="w-4 h-[1.5px] bg-stone-400" />
        </div>

        {/* Display Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#0B1730] font-heading tracking-tight leading-[1.12] m-0">
          How SolarARK grew, year by year
        </h2>

        {/* Multi-Color Gradient Accent Line Under Headline */}
        <div
          className="w-44 h-[2.5px] rounded-full mx-auto my-2.5"
          style={{
            background: 'linear-gradient(90deg, transparent, #8B1E1E 30%, #A82424 50%, #10B981 75%, transparent)',
          }}
        />

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto m-0 pt-1">
          From a small beginning in Nagpur to thousands of happy customers and new horizons across Maharashtra.
        </p>
      </div>

      {/* ── TIMELINE CONTAINER ── */}
      <div className="relative z-10 max-w-[1200px] mx-auto">
        
        {/* DESKTOP TIMELINE (≥ 1024px) */}
        <div className="hidden lg:block">
          
          {/* Row 1: Years + Transparent Glowing Rings + Stems + Anchor Dots */}
          <div className="grid grid-cols-5 gap-3 relative pb-6">
            
            {MILESTONES.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.year}
                  className="journey-node-top flex flex-col items-center group cursor-default"
                  style={{ transitionDelay: `${0.10 + idx * 0.16}s` }}
                >
                  {/* Year Number in exact era color */}
                  <span
                    className="text-2xl xl:text-[28px] font-bold font-heading mb-4 select-none tracking-tight"
                    style={{ color: m.inkColor }}
                  >
                    {m.year}
                  </span>

                  {/* Transparent Circle with Thin Colored Neon Ring & Soft Diffused Glow */}
                  <div
                    className="w-[78px] h-[78px] rounded-full flex items-center justify-center bg-transparent transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105"
                    style={{
                      border: `2px solid ${m.badgeColor}`,
                      boxShadow: `0 0 16px 2px ${m.glowColor}, inset 0 0 8px ${m.glowColor}`,
                    }}
                  >
                    {/* Matching Colored Icon with Matching Glow */}
                    <Icon
                      className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={2}
                      style={{
                        color: m.badgeColor,
                        filter: `drop-shadow(0 0 6px ${m.glowColor})`,
                      }}
                    />
                  </div>

                  {/* Vertical stem connecting to timeline line */}
                  <div
                    className="w-[2px] h-6 mt-3.5 transition-opacity duration-300"
                    style={{ backgroundColor: m.badgeColor, opacity: 0.65 }}
                  />

                  {/* Small Anchor Dot sitting on the timeline line */}
                  <div
                    className="w-2.5 h-2.5 rounded-full z-10 mt-[-1px] transition-transform duration-300 group-hover:scale-125"
                    style={{
                      backgroundColor: m.badgeColor,
                      boxShadow: `0 0 8px ${m.glowColor}`,
                    }}
                  />
                </div>
              );
            })}

            {/* Continuous Horizontal Gradient Timeline Line */}
            <div
              className="journey-timeline-line absolute left-6 right-8 bottom-[28px] h-[2px] z-0"
              style={{
                background: 'linear-gradient(90deg, #A82424, #8B1E1E, #C53030, #10B981, #8B5CF6)',
              }}
            />

            {/* Trailing Arrowhead at the right end */}
            <svg
              className="journey-timeline-arrow absolute right-0 bottom-[22px] text-[#8B5CF6] z-10"
              width="26"
              height="14"
              viewBox="0 0 26 14"
            >
              <path
                d="M0 7h22M16 1l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Row 2: Titles + Descriptions */}
          <div className="grid grid-cols-5 gap-4 pt-4">
            {MILESTONES.map((m, idx) => (
              <div
                key={m.year}
                className="journey-node-bottom text-center px-2"
                style={{ transitionDelay: `${0.20 + idx * 0.16}s` }}
              >
                <h3 className="font-heading text-[#0B1730] font-bold text-base sm:text-[17px] m-0 mb-2 leading-snug tracking-tight">
                  {m.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed m-0 font-normal">
                  {m.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* MOBILE / TABLET TIMELINE (< 1024px) */}
        <div className="block lg:hidden space-y-4">
          {MILESTONES.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={m.year}
                className="journey-node-top bg-white/85 backdrop-blur-xs border border-stone-200/80 rounded-2xl p-5 shadow-xs flex items-start gap-4 transition-all duration-300"
                style={{ transitionDelay: `${0.1 + idx * 0.12}s` }}
              >
                {/* Transparent Circle with Thin Colored Neon Ring & Soft Diffused Glow */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-transparent shrink-0"
                  style={{
                    border: `2px solid ${m.badgeColor}`,
                    boxShadow: `0 0 10px 1px ${m.glowColor}, inset 0 0 6px ${m.glowColor}`,
                  }}
                >
                  <Icon
                    className="w-5 h-5"
                    strokeWidth={2}
                    style={{
                      color: m.badgeColor,
                      filter: `drop-shadow(0 0 4px ${m.glowColor})`,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="text-base sm:text-lg font-bold font-heading"
                      style={{ color: m.inkColor }}
                    >
                      {m.year}
                    </span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: m.badgeColor }}
                    />
                  </div>

                  <h3 className="font-heading text-[#0B1730] font-bold text-sm sm:text-base leading-snug">
                    {m.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {m.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
