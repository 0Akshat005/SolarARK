/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { Rocket, Home as HomeIcon, Users, Heart, MapPin } from 'lucide-react';

export interface JourneyMilestone {
  year: string;
  accent: 'amber' | 'blue' | 'green' | 'violet';
  badgeColor: string;
  inkColor: string;
  glowColor: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}

// Verified SolarARK milestone data mapping 2020–2024
const MILESTONES: JourneyMilestone[] = [
  {
    year: '2020',
    accent: 'amber',
    badgeColor: '#f2a340',
    inkColor: '#b5650e',
    glowColor: 'rgba(242, 163, 64, 0.45)',
    icon: Rocket,
    title: 'SolarARK projects',
    description: 'Inception of SolarARK with initial rooftop solar engineering setup & project designs.',
  },
  {
    year: '2021',
    accent: 'blue',
    badgeColor: '#4f8ef7',
    inkColor: '#1d4ed8',
    glowColor: 'rgba(79, 142, 247, 0.45)',
    icon: HomeIcon,
    title: '575 homes',
    description: 'Expanded residential footprint, empowering 575 Indian homes with clean rooftop solar power.',
  },
  {
    year: '2022',
    accent: 'amber',
    badgeColor: '#f2a340',
    inkColor: '#b5650e',
    glowColor: 'rgba(242, 163, 64, 0.45)',
    icon: Users,
    title: '2230+ solarised',
    description: 'Major scale-up across residential clusters, 100+ commercial businesses, and 50+ housing societies.',
  },
  {
    year: '2023',
    accent: 'green',
    badgeColor: '#22c39c',
    inkColor: '#0e8f6f',
    glowColor: 'rgba(34, 195, 156, 0.45)',
    icon: Heart,
    title: '5000+ customers',
    description: 'Reached milestone of 5,000+ happy homeowners on reliable, long-term generation setups.',
  },
  {
    year: '2024',
    accent: 'violet',
    badgeColor: '#8f7cf6',
    inkColor: '#6b4cd6',
    glowColor: 'rgba(143, 124, 246, 0.45)',
    icon: MapPin,
    title: 'New branches',
    description: 'Established dedicated regional branch offices in Akola, Chh. Sambhaji Nagar & Wardha.',
  },
];

export const OurJourney: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Trigger one-time entrance animation
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
      className={`journey-section relative overflow-hidden rounded-3xl border border-stone-200/90 shadow-sm py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 my-6 ${
        isVisible ? 'is-visible' : ''
      }`}
      style={{
        background: `
          radial-gradient(ellipse 900px 480px at 16% -12%, rgba(242,163,64,.18), transparent 60%),
          radial-gradient(ellipse 800px 460px at 104% 8%, rgba(79,142,247,.12), transparent 60%),
          linear-gradient(180deg, #fffbf6 0%, #fdf1e3 32%, #f3f7fb 68%, #eef3f8 100%)
        `,
      }}
    >
      {/* CSS Grid Pattern Overlay for clean solar-grid texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0 1px, transparent 1px 44px),
            repeating-linear-gradient(45deg, rgba(15, 23, 42, 0.8) 0 1px, transparent 1px 44px)
          `,
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
        }}
      />

      <style>{`
        /* Header animation */
        .journey-header {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.2, 0.7, 0.3, 1);
        }
        .journey-section.is-visible .journey-header {
          opacity: 1;
          transform: translateY(0);
        }

        /* Node Top animation */
        .journey-node-top {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.2, 0.7, 0.3, 1.3);
        }
        .journey-section.is-visible .journey-node-top {
          opacity: 1;
          transform: translateY(0);
        }

        /* Connecting line animation */
        .journey-timeline-line {
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 1.3s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
        }
        .journey-section.is-visible .journey-timeline-line {
          transform: scaleX(1);
        }

        /* Arrowhead animation */
        .journey-timeline-arrow {
          opacity: 0;
          transition: opacity 0.5s ease 1.5s;
        }
        .journey-section.is-visible .journey-timeline-arrow {
          opacity: 1;
        }

        /* Node Bottom animation */
        .journey-node-bottom {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.2, 0.7, 0.3, 1);
        }
        .journey-section.is-visible .journey-node-bottom {
          opacity: 1;
          transform: translateY(0);
        }

        /* Subtitle animation */
        .journey-subtitle {
          opacity: 0;
          transition: opacity 0.8s ease 1.8s;
        }
        .journey-section.is-visible .journey-subtitle {
          opacity: 1;
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

      {/* ── SECTION HEADER ── */}
      <div className="journey-header relative z-10 text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
        <p className="text-xs sm:text-sm font-extrabold text-[#b5650e] uppercase tracking-[0.18em] font-heading m-0">
          About Us
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#16233a] font-heading tracking-tight m-0">
          Our Journey
        </h2>
      </div>

      {/* ── TIMELINE CONTAINER ── */}
      <div className="relative z-10 max-w-[1180px] mx-auto">
        
        {/* DESKTOP TIMELINE (≥ 1024px) */}
        <div className="hidden lg:block">
          
          {/* Row 1: Years + Transparent Glowing Rings + Stems + Dots */}
          <div className="grid grid-cols-5 gap-3 relative pb-6">
            
            {MILESTONES.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.year}
                  className="journey-node-top flex flex-col items-center group cursor-default"
                  style={{ transitionDelay: `${0.10 + idx * 0.16}s` }}
                >
                  {/* Year Number with darker WCAG AA ink color */}
                  <span
                    className="text-2xl xl:text-[28px] font-extrabold font-heading mb-4 select-none"
                    style={{ color: m.inkColor }}
                  >
                    {m.year}
                  </span>

                  {/* Transparent Circle with Thin Colored Neon Ring & Soft Diffused Glow */}
                  <div
                    className="w-[76px] h-[76px] rounded-full flex items-center justify-center bg-transparent transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105"
                    style={{
                      border: `2px solid ${m.badgeColor}`,
                      boxShadow: `0 0 14px 1px ${m.glowColor}, inset 0 0 8px ${m.glowColor}`,
                    }}
                  >
                    {/* Matching colored neon icon with subtle diffused glow */}
                    <Icon
                      className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={2}
                      style={{
                        color: m.badgeColor,
                        filter: `drop-shadow(0 0 5px ${m.glowColor})`,
                      }}
                    />
                  </div>

                  {/* Vertical stem */}
                  <div
                    className="w-[2px] h-6 mt-3 transition-opacity duration-300"
                    style={{ backgroundColor: m.badgeColor, opacity: 0.6 }}
                  />

                  {/* Small Anchor Dot on the timeline */}
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
                background: 'linear-gradient(90deg, #f2a340, #4f8ef7, #f2a340, #22c39c, #8f7cf6)',
              }}
            />

            {/* Trailing Arrowhead */}
            <svg
              className="journey-timeline-arrow absolute right-0 bottom-[22px] text-[#8f7cf6] z-10"
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

          {/* Row 2: Titles + Color Dividers + Descriptions */}
          <div className="grid grid-cols-5 gap-4 pt-4">
            {MILESTONES.map((m, idx) => (
              <div
                key={m.year}
                className="journey-node-bottom text-center px-2"
                style={{ transitionDelay: `${0.20 + idx * 0.16}s` }}
              >
                <h3 className="font-heading text-[#16233a] font-bold text-[15px] sm:text-base m-0 mb-2 leading-snug">
                  {m.title}
                </h3>
                
                {/* Short Era Color Divider Bar */}
                <div
                  className="w-7 h-[2px] rounded-full mx-auto mb-2.5"
                  style={{ backgroundColor: m.badgeColor }}
                />

                <p className="text-[#4a5567] text-xs sm:text-[13px] leading-relaxed m-0 font-normal">
                  {m.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* MOBILE / TABLET TIMELINE (< 1024px) */}
        <div className="block lg:hidden space-y-6">
          {MILESTONES.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={m.year}
                className="journey-node-top bg-white/80 backdrop-blur-xs border border-stone-200/80 rounded-2xl p-5 shadow-xs flex items-start gap-4 transition-all duration-300"
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
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="text-base sm:text-lg font-extrabold font-heading"
                      style={{ color: m.inkColor }}
                    >
                      {m.year}
                    </span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: m.badgeColor }}
                    />
                  </div>

                  <h3 className="font-heading text-[#16233a] font-bold text-sm sm:text-base leading-snug">
                    {m.title}
                  </h3>

                  <p className="text-[#4a5567] text-xs sm:text-sm leading-relaxed font-normal">
                    {m.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ── CLOSING SUBTITLE ── */}
      <p className="journey-subtitle relative z-10 text-center text-[#4a5567] font-medium text-xs sm:text-sm max-w-xl mx-auto mt-12 sm:mt-16 leading-relaxed">
        Tracing our growth from inception in 2020 to empowering thousands of homes and multi-city operations across Maharashtra.
      </p>

    </section>
  );
};
