/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Info,
  Target,
  Compass,
  Zap,
  BatteryCharging,
  BadgePercent,
  Headphones,
  ShieldCheck,
  Leaf,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Building,
  Award,
  Users
} from 'lucide-react';

interface AboutSectionProps {
  onCtaClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onCtaClick }) => {
  const capabilities = [
    {
      icon: Zap,
      color: 'text-blue-600 bg-blue-50 border-blue-100',
      title: 'Solar Inverter Setup',
      description:
        'Smart, high-efficiency grid-tied & hybrid inverters with real-time MPPT tracking for maximum power yield.',
    },
    {
      icon: BatteryCharging,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      title: 'Battery Storage Solutions',
      description:
        'Advanced lithium-iron-phosphate (LFP) energy storage engineered for 24/7 backup during DISCOM grid cuts.',
    },
    {
      icon: BadgePercent,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
      title: 'Solar Material Financing',
      description:
        'Flexible, zero-headache low-EMI paperless financing plans tailored specifically for Indian homeowners.',
    },
    {
      icon: Headphones,
      color: 'text-purple-600 bg-purple-50 border-purple-100',
      title: '24 X 7 Call & Chat Support',
      description:
        'Dedicated customer care and remote telemetry health monitoring around the clock for seamless operation.',
    },
  ];

  const milestones = [
    {
      year: '2021',
      title: 'Inception of SolarArk',
      description:
        'Founded with a mission to simplify residential rooftop solar and eliminate rising electricity costs.',
    },
    {
      year: '2022',
      title: 'Metro Expansion',
      description:
        'Expanded operations across Karnataka & Maharashtra, reaching 500+ successful rooftop installations.',
    },
    {
      year: '2023',
      title: 'Tier-1 Hardware & DISCOM Integration',
      description:
        'Partnered with world-class manufacturers and automated DISCOM net-metering paperless approvals.',
    },
    {
      year: '2024+',
      title: 'PM Surya Ghar & 15,000+ Homes',
      description:
        'Integrated national solar subsidy filings, empowering 15,000+ homeowners across 15+ Indian cities.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF9F6] border-b border-slate-200/60 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-16 sm:space-y-24">
        
        {/* ── CHAPTER 1: WHO WE ARE (HERO INTRO) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#1D5FE0]">
              <Info className="w-3.5 h-3.5" />
              <span>Who We Are</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.14]">
              Powering a Sustainable Future with <span className="text-[#1D5FE0]">SolarArk India</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              SolarArk is India's premier residential rooftop solar platform. We design, install, and maintain high-performance solar systems with transparent PM Surya Ghar government subsidy claims, zero-headache DISCOM net-metering, and guaranteed 25-year generation. <span className="font-semibold text-slate-900">Assured Renewable Komfort.</span>
            </p>

            {/* Quick Proof Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs text-center space-y-1">
                <Users className="w-5 h-5 text-[#1D5FE0] mx-auto" />
                <div className="font-heading text-xl sm:text-2xl font-bold text-slate-900">15,000+</div>
                <div className="text-xs text-slate-500 font-medium">Homeowners</div>
              </div>
              <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs text-center space-y-1">
                <Building className="w-5 h-5 text-emerald-600 mx-auto" />
                <div className="font-heading text-xl sm:text-2xl font-bold text-slate-900">15+</div>
                <div className="text-xs text-slate-500 font-medium">Indian Cities</div>
              </div>
              <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs text-center space-y-1">
                <Award className="w-5 h-5 text-amber-600 mx-auto" />
                <div className="font-heading text-xl sm:text-2xl font-bold text-slate-900">25-Year</div>
                <div className="text-xs text-slate-500 font-medium">Warranty</div>
              </div>
              <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs text-center space-y-1">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mx-auto" />
                <div className="font-heading text-xl sm:text-2xl font-bold text-slate-900">100%</div>
                <div className="text-xs text-slate-500 font-medium">Subsidy Help</div>
              </div>
            </div>
          </div>

          {/* Right Image Block */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-[#EFECE6] group">
              <img
                src="/images/completed-projects-home.jpg"
                alt="SolarArk Modern Residential Rooftop Solar Home"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-heading">
                  Verified Real Installation
                </div>
                <div className="text-lg font-bold">
                  High-Performance Residential Array
                </div>
                <div className="text-xs text-slate-200 font-normal">
                  Turnkey engineering, zero-penetration mounting, and DISCOM net-metering.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── CHAPTER 2: MISSION & VISION ── */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Driven by Purpose &amp; Engineering Excellence
            </h3>
            <p className="text-sm text-slate-600 font-normal">
              Our core values guide every rooftop design, DISCOM filing, and customer interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Mission Card */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xs space-y-4 relative overflow-hidden group hover:border-[#1D5FE0]/40 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D5FE0]">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="font-heading text-xl font-bold text-slate-900">Our Mission</h4>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                Powering a sustainable future for Indian homeowners by delivering high-efficiency rooftop solar systems, transparent PM Surya Ghar government subsidy processing, and lifetime energy independence.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xs space-y-4 relative overflow-hidden group hover:border-emerald-500/40 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="font-heading text-xl font-bold text-slate-900">Our Vision</h4>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                To make clean solar energy accessible, affordable, and reliable for every household across India through world-class engineering, transparent financing, and zero-headache execution.
              </p>
            </div>
          </div>
        </div>

        {/* ── CHAPTER 3: END-TO-END SOLAR SYSTEMS & CAPABILITIES ── */}
        <div className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider font-heading">
              Solar Systems &amp; Offerings
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Solar Solutions Under One Roof
            </h3>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              From advanced inverter setups to 24/7 telemetry monitoring, we handle every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xs space-y-3.5 hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3.5">
                    <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center ${cap.color}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading text-lg font-bold text-slate-900">
                      {cap.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── CHAPTER 4: QUALITY & ENVIRONMENTAL RESPONSIBILITY ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Quality Card */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-400/30 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-heading text-2xl font-bold">
              Exceptional Quality. End-to-End Service.
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              We deploy only Tier-1 cell architecture and N-Type TOPCon panels built for 25+ years of reliable performance. Our master installers handle DISCOM net-metering paperwork, structural strength testing, and custom CAD layouts with zero slab penetration.
            </p>
          </div>

          {/* Environmental Responsibility Card */}
          <div className="bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-400/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center">
              <Leaf className="w-5 h-5" />
            </div>
            <h4 className="font-heading text-2xl font-bold">
              Environmental Responsibility
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
              Every 3kW rooftop system commissioned by SolarArk avoids over 3.5 metric tons of CO2 emissions annually—equivalent to planting 160 mature trees every year. We are committed to accelerating India's transition to clean, decentralized solar power.
            </p>
          </div>
        </div>

        {/* ── CHAPTER 5: OUR JOURNEY (MODERN TIMELINE) ── */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-xs font-bold text-amber-700">
              <Calendar className="w-3.5 h-3.5" />
              <span>Our Journey</span>
            </div>
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Milestones That Define SolarArk
            </h3>
            <p className="text-sm text-slate-600 font-normal">
              A track record of continuous growth, engineering trust, and homeowner satisfaction.
            </p>
          </div>

          {/* Desktop Timeline (Horizontal 4 Columns) */}
          <div className="hidden md:grid grid-cols-4 gap-6 relative">
            {/* Horizontal Line Accent */}
            <div className="absolute top-6 left-12 right-12 h-0.5 bg-slate-200 z-0" />

            {milestones.map((m, idx) => (
              <div key={idx} className="relative z-10 bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xs space-y-3 hover:border-[#1D5FE0]/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#1D5FE0] text-white font-heading font-extrabold text-sm flex items-center justify-center shadow-md">
                  {m.year.replace('+', '')}
                </div>
                <div className="text-xs font-bold text-[#1D5FE0] font-heading">{m.year}</div>
                <h4 className="font-heading text-base font-bold text-slate-900 leading-snug">
                  {m.title}
                </h4>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Timeline (Vertical Stack) */}
          <div className="flex md:hidden flex-col space-y-4 relative border-l-2 border-slate-200 pl-6 ml-4">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-2">
                <div className="absolute -left-[35px] top-5 w-5 h-5 rounded-full bg-[#1D5FE0] border-4 border-[#FAF9F6]" />
                <div className="text-xs font-bold text-[#1D5FE0] font-heading">{m.year}</div>
                <h4 className="font-heading text-base font-bold text-slate-900">
                  {m.title}
                </h4>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Trigger */}
          {onCtaClick && (
            <div className="pt-4 text-center">
              <button
                onClick={onCtaClick}
                className="bg-[#1D5FE0] hover:bg-[#1753C8] text-white text-sm font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-[#1D5FE0]/25 transition-all inline-flex items-center gap-2 active:scale-[0.98]"
              >
                <span>Get Your Free Solar Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
