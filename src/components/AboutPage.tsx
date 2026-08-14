/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft, ArrowRight, Home as HomeIcon, CheckCircle2 } from 'lucide-react';
import { FinalCTAForm } from './FinalCTAForm';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
  prefilledPincode?: string;
  prefilledBill?: number;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onCtaClick,
  prefilledPincode = '560034',
  prefilledBill = 8500,
}) => {
  const proofItems = [
    '5,000+ residential rooftops solarised',
    'Turnkey DISCOM net-metering & PM Surya Ghar subsidy processing',
    'Tier-1 N-Type TOPCon panels with 25-year performance warranty',
  ];

  const capabilities = [
    {
      number: '01',
      title: 'Residential Solar',
      description:
        'Custom rooftop arrays engineered specifically for Indian home architectures, terrace usability, and weather durability.',
    },
    {
      number: '02',
      title: 'End-to-End Installation',
      description:
        'Zero slab penetration mounting, certified in-house master installers, and paperless DISCOM net-metering approvals.',
    },
    {
      number: '03',
      title: 'Ongoing Support',
      description:
        'Real-time generation telemetry monitoring, preventive maintenance, and dedicated homeowner support.',
    },
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Inception',
      description: 'SolarARK founded to simplify residential rooftop solar installations.',
    },
    {
      year: '2021',
      title: '575 Roofs',
      description: '575 homes solarised across Maharashtra and Karnataka.',
    },
    {
      year: '2022',
      title: 'Rapid Scale',
      description: '2,230+ homes, 100+ commercial rooftops, and 50+ societies.',
    },
    {
      year: '2023',
      title: '5,000+ Homes',
      description: 'Crossed 5,000+ satisfied homeowners with verified bill savings.',
    },
    {
      year: '2024',
      title: 'Regional Network',
      description: 'Expanded branch presence in Akola, Chh. Sambhaji Nagar & Wardha.',
    },
  ];

  return (
    <div className="pt-24 lg:pt-28 pb-20 min-h-screen bg-[#FAF9F6] text-slate-900">
      
      {/* ── 1. PAGE INTRO (SUBTLE BREADCRUMB & CONCISE EDITORIAL HEADING) ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-12">
        {/* Subtle Top Navigation Row */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-200/60 mb-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button
              onClick={() => onNavigate('/')}
              className="flex items-center gap-1 hover:text-[#1D5FE0] transition-colors"
            >
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">About Us</span>
          </div>

          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#1D5FE0] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Editorial Heading */}
        <div className="max-w-3xl space-y-3">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Powering homes with <span className="text-[#1D5FE0]">smarter solar.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Designed, engineered, and installed for long-term generation across Indian residential rooftops.
          </p>
        </div>
      </div>

      {/* ── 2. MAIN ABOUT STORY (ASYMMETRIC EDITORIAL COMPOSITION) ── */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Short Story & Proof Points */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-bold text-[#1D5FE0] tracking-widest uppercase font-heading">
              Who We Are
            </div>

            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              SolarArk is dedicated to making clean residential rooftop solar dependable, accessible, and transparent for Indian families. We combine world-class engineering, Tier-1 hardware, and complete PM Surya Ghar subsidy management so homeowners can generate their own clean power with complete peace of mind.
            </p>

            {/* 2-3 Short Proof Points */}
            <div className="space-y-3 pt-2">
              {proofItems.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1D5FE0] shrink-0 mt-1" />
                  <span className="text-sm font-medium text-slate-800 leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Large Immersive Photograph */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-[#EFECE6] border border-slate-200/70 shadow-lg shadow-slate-900/5 group">
              <img
                src="/images/completed-projects-home.jpg"
                alt="SolarArk Residential Rooftop Solar Home"
                className="w-full h-[380px] sm:h-[480px] object-cover object-[65%_45%] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-heading">
                  Verified Real Installation
                </div>
                <div className="text-lg font-bold">
                  Residential Rooftop Solar System
                </div>
                <div className="text-xs text-slate-200 font-normal">
                  Turnkey engineering, zero-penetration mounting, and DISCOM net-metering.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. MINIMAL EDITORIAL PROOF ROW (01–03 REPLACING 4-CARD GRID) ── */}
      <section className="bg-white border-y border-slate-200/70 py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
          <div className="text-xs font-bold text-[#1D5FE0] tracking-widest uppercase font-heading">
            What We Do
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {capabilities.map((cap) => (
              <div key={cap.number} className="space-y-3">
                <div className="font-heading font-extrabold text-2xl text-[#1D5FE0]">
                  {cap.number}
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. BRAND STORY: WHAT WE BELIEVE (TYPOGRAPHY-LED) ── */}
      <section className="py-20 sm:py-28 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="text-xs font-bold text-[#1D5FE0] tracking-widest uppercase font-heading">
          What We Believe
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
          "Clean energy shouldn't be complicated or unpredictable."
        </h2>

        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
          We believe every Indian homeowner deserves transparent pricing, honest engineering, and zero-friction execution. Our goal is simple: transform unutilized residential terraces into reliable power generators that cut monthly bills by up to 90% and deliver lasting energy independence for the next 25 years.
        </p>
      </section>

      {/* ── 5. OUR JOURNEY (RESTRAINED MODERN TIMELINE) ── */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pb-20 space-y-10">
        <div className="space-y-2">
          <div className="text-xs font-bold text-[#1D5FE0] tracking-widest uppercase font-heading">
            Our Journey
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Milestones of verified progress
          </h3>
        </div>

        {/* Desktop Horizontal 5-Column Timeline */}
        <div className="hidden lg:grid grid-cols-5 gap-6 relative">
          <div className="absolute top-5 left-6 right-6 h-0.5 bg-slate-200 z-0" />

          {milestones.map((m, idx) => (
            <div key={idx} className="relative z-10 space-y-3 pt-2">
              <div className="w-7 h-7 rounded-full bg-[#1D5FE0] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                {idx + 1}
              </div>
              <div className="font-heading text-sm font-extrabold text-[#1D5FE0]">
                {m.year}
              </div>
              <h4 className="font-heading text-base font-bold text-slate-900">
                {m.title}
              </h4>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="flex lg:hidden flex-col space-y-6 relative border-l-2 border-slate-200 pl-6 ml-3">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative space-y-1">
              <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#1D5FE0] border-2 border-[#FAF9F6]" />
              <div className="font-heading text-xs font-extrabold text-[#1D5FE0]">
                {m.year} — {m.title}
              </div>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. LEAD CAPTURE FORM ── */}
      <div className="mt-8">
        <FinalCTAForm
          prefilledPincode={prefilledPincode}
          prefilledBill={prefilledBill}
        />
      </div>

    </div>
  );
};
