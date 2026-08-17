/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  Sparkles,
  ClipboardList,
  Cpu,
  FileCheck2,
  ShieldCheck,
  Wifi,
  Users,
  Zap,
  Award
} from 'lucide-react';

export interface ProcessStage {
  number: string;
  accent: 'orange' | 'blue' | 'green' | 'purple';
  accentColor: string;
  iconBg: string;
  iconColor: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  badge: string;
  image: string;
  imageAlt: string;
}

const PROCESS_STAGES: ProcessStage[] = [
  {
    number: '01',
    accent: 'orange',
    accentColor: '#E27D16',
    iconBg: 'bg-amber-50 border-amber-200/60',
    iconColor: 'text-[#E27D16]',
    icon: ClipboardList,
    title: 'Consultation & Site Survey',
    description:
      'Our certified engineers conduct a physical rooftop inspection, measuring usable shadow-free areas and analyzing historical DISCOM electricity consumption.',
    badge: 'Free 3D Shadow Analysis',
    image: '/images/process/stage-01-consultation.jpg',
    imageAlt: 'SolarArk engineer conducting digital rooftop site survey with homeowner',
  },
  {
    number: '02',
    accent: 'maroon',
    accentColor: '#8B1E1E',
    iconBg: 'bg-[#8B1E1E]/10 border-[#8B1E1E]/20',
    iconColor: 'text-[#8B1E1E]',
    icon: Cpu,
    title: 'Custom Engineering & CAD Design',
    description:
      'We prepare an optimized 3D layout specifying every panel tilt angle, elevated structure, mounts, and string inverter sizing for maximum yearly (kWh) yield.',
    badge: 'Zero Slab Penetration',
    image: '/images/process/stage-02-cad-design.jpg',
    imageAlt: '3D CAD solar layout design on engineer workstation',
  },
  {
    number: '03',
    accent: 'orange',
    accentColor: '#E27D16',
    iconBg: 'bg-amber-50 border-amber-200/60',
    iconColor: 'text-[#E27D16]',
    icon: FileCheck2,
    title: 'Paperless DISCOM & Subsidy Filing',
    description:
      'SolarArk handles 100% of the documentation for PM Surya Ghar national portal subsidy (up to ₹78,000) and state DISCOM net-metering approvals.',
    badge: 'Direct Bank Subsidy Credit',
    image: '/images/process/stage-03-discom-filing.jpg',
    imageAlt: 'Approved DISCOM net-metering and government subsidy paperwork',
  },
  {
    number: '04',
    accent: 'green',
    accentColor: '#10B981',
    iconBg: 'bg-emerald-50 border-emerald-200/60',
    iconColor: 'text-[#10B981]',
    icon: ShieldCheck,
    title: 'Certified Master Installation',
    description:
      'In-house certified electrical teams execute mounting structure erection, Tier-1 module placement, chemical earthing, DC/AC wiring in 48 hours.',
    badge: 'Cyclone-Tested 160 km/h Mounts',
    image: '/images/process/stage-04-installation.jpg',
    imageAlt: 'Certified solar technicians mounting rooftop solar panel array',
  },
  {
    number: '05',
    accent: 'purple',
    accentColor: '#8B5CF6',
    iconBg: 'bg-purple-50 border-purple-200/60',
    iconColor: 'text-[#8B5CF6]',
    icon: Wifi,
    title: 'Net-Metering & 24/7 Telemetry',
    description:
      'We coordinate bi-directional meter testing with DISCOM officials, commission your plant, and connect real-time IoT cloud monitoring to your smartphone.',
    badge: 'Instant Power Tracking',
    image: '/images/process/stage-05-telemetry.jpg',
    imageAlt: 'Smartphone displaying live SolarView cloud generation telemetry',
  },
];

const TRUST_ROW = [
  { icon: ShieldCheck, label: '100% Compliance & Safety' },
  { icon: Users, label: 'Expert Engineers, In-house Team' },
  { icon: Zap, label: 'On-time Delivery, Every Time' },
  { icon: Award, label: 'Premium Quality, Long-term Value' },
];

export const TurnkeyExecutionJourney: React.FC = () => {
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
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      aria-label="Turnkey execution journey"
      className="relative w-full overflow-hidden bg-[#FCFAF7] pt-16 sm:pt-20 pb-16 my-12"
    >
      {/* ── 1. HERO HEADER BAND (WITH FADING FLANKING PHOTOGRAPHS) ── */}
      <div className="relative w-full max-w-[1440px] mx-auto min-h-[220px] flex items-center justify-center px-4 sm:px-6 lg:px-12 mb-14 sm:mb-18">
        
        {/* Left Flanking Photograph (Golden sunset solar rooftop) - Desktop only */}
        <div
          className="hidden md:block absolute left-0 top-0 bottom-0 w-[34%] xl:w-[38%] pointer-events-none z-0 overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, black 0%, black 45%, transparent 100%)',
            maskImage: 'linear-gradient(to right, black 0%, black 45%, transparent 100%)',
          }}
        >
          <img
            src="/images/target-env-sunset-roof.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-left opacity-90"
          />
        </div>

        {/* Right Flanking Photograph (Solar technician inspecting array) - Desktop only */}
        <div
          className="hidden md:block absolute right-0 top-0 bottom-0 w-[34%] xl:w-[38%] pointer-events-none z-0 overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to left, black 0%, black 45%, transparent 100%)',
            maskImage: 'linear-gradient(to left, black 0%, black 45%, transparent 100%)',
          }}
        >
          <img
            src="/images/hero-flank-technician.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-right opacity-90"
          />
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto space-y-3.5 py-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F7EFE9] border border-[#8B1E1E]/15 shadow-2xs text-[11px] font-bold text-[#8B1E1E] tracking-widest uppercase font-heading">
            <Sparkles className="w-3.5 h-3.5 text-[#8B1E1E]" />
            <span>Turnkey Execution Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B1730] font-heading tracking-tight leading-[1.12] m-0">
            How SolarArk Delivers <br className="hidden sm:inline" />
            Your Solar System
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto m-0 pt-1">
            A transparent, engineered 5-stage installation process designed to ensure zero hassle, full subsidy release, and rapid commissioning.
          </p>
        </div>

      </div>

      {/* ── 2. THE FIVE-STAGE CARDS ROW ── */}
      <div className="relative w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* DESKTOP 5-COLUMN ROW (≥ 1024px) */}
        <div className="hidden lg:grid grid-cols-5 gap-5 relative items-stretch">
          
          {/* Continuous Connecting Line Behind Numbered Rings */}
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-[188px] h-[2px] border-t-2 border-dashed border-stone-300 z-0"
          />

          {PROCESS_STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.number}
                className={`relative z-10 flex flex-col justify-between bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 overflow-hidden group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: `${0.1 + idx * 0.12}s`,
                  transitionDuration: '0.6s',
                }}
              >
                {/* 1. Sharp Card Photo */}
                <div className="relative h-[165px] w-full overflow-hidden bg-stone-100">
                  <img
                    src={stage.image}
                    alt={stage.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* 2. Numbered Ring Badge (Straddling boundary) */}
                <div className="relative flex justify-center -mt-5 z-20">
                  <div
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-heading font-extrabold text-xs shadow-xs transition-transform duration-300 group-hover:scale-110"
                    style={{
                      border: `2px solid ${stage.accentColor}`,
                      color: stage.accentColor,
                    }}
                  >
                    {stage.number}
                  </div>
                </div>

                {/* 3. Card Content (Icon + Title + Description) */}
                <div className="p-5 pt-3 flex-1 flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-3">
                    {/* Icon + Title Row */}
                    <div className="flex items-start gap-2.5">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border ${stage.iconBg} ${stage.iconColor}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-heading text-[15px] font-bold text-[#0B1730] leading-snug tracking-tight">
                        {stage.title}
                      </h3>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {stage.description}
                    </p>
                  </div>

                  {/* 4. Verified Micro-Badge at Bottom */}
                  <div className="pt-2">
                    <div className="inline-flex items-center justify-center gap-1.5 w-full bg-emerald-50/90 border border-emerald-200/70 text-emerald-700 font-bold text-[11px] py-1.5 px-2 rounded-xl text-center">
                      <span className="text-emerald-600">✓</span>
                      <span>{stage.badge}</span>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* TABLET / MOBILE STACKED / HORIZONTAL SNAP ROW (< 1024px) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-5">
          {PROCESS_STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.number}
                className="flex flex-col justify-between bg-white rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden"
              >
                {/* Photo */}
                <div className="relative h-[180px] w-full overflow-hidden bg-stone-100">
                  <img
                    src={stage.image}
                    alt={stage.imageAlt}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center font-heading font-extrabold text-xs shadow-md"
                    style={{
                      border: `2px solid ${stage.accentColor}`,
                      color: stage.accentColor,
                    }}
                  >
                    {stage.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border ${stage.iconBg} ${stage.iconColor}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-heading text-base font-bold text-[#0B1730]">
                        {stage.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="inline-flex items-center justify-center gap-1.5 w-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 font-bold text-xs py-2 px-3 rounded-xl">
                      <span>✓</span>
                      <span>{stage.badge}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── 3. BOTTOM TRUST ROW ── */}
        <div className="mt-14 pt-8 border-t border-stone-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {TRUST_ROW.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-2 text-xs sm:text-[13px] font-semibold text-slate-700"
                >
                  <Icon className="w-4 h-4 text-[#8B1E1E] shrink-0" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
};
