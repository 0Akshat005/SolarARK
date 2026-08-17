/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  ArrowLeft,
  Home as HomeIcon,
  CheckCircle2,
  Sun,
  Globe,
  SunMedium
} from 'lucide-react';
import { OurJourney } from './OurJourney';
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
  const capabilities = [
    'Solar Inverter Setup',
    'Battery Storage Solutions',
    'Solar Material Financing',
    '24 X 7 Call & Chat Support',
  ];

  return (
    <div className="pt-24 lg:pt-28 pb-20 min-h-screen bg-[#FCFAF7] text-slate-900 selection:bg-[#8B1E1E] selection:text-white">
      
      {/* ── TOP BREADCRUMB & CONCISE HEADER ── */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-4">
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-stone-200 mb-4">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <button
              onClick={() => onNavigate('/')}
              className="flex items-center gap-1 hover:text-[#8B1E1E] transition-colors cursor-pointer"
            >
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">About Us</span>
          </div>

          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-[#8B1E1E] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 space-y-20 sm:space-y-28">

        {/* ── SECTION 1 (TOP): OUR JOURNEY (LIGHT GRADIENT TIMELINE) ── */}
        <OurJourney />

        {/* ── SECTION 2: WHO ARE WE? ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7EFE9] border border-[#8B1E1E]/15 text-[11px] font-bold text-[#8B1E1E] tracking-widest uppercase font-heading">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B1E1E]" />
              <span>Company Background</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Who Are <span className="text-[#8B1E1E]">We?</span>
            </h2>

            <p className="text-base sm:text-lg text-stone-700 font-normal leading-relaxed">
              We believe in building strong, lasting relationships with our clients, providing them with tailored solutions that align with their specific energy needs. Whether you're a homeowner, a business, or part of an industrial facility, Solar Ark is here to help you make the smart, eco-friendly choice for your energy needs.
            </p>

            {/* 4 Feature Points Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white border border-stone-200/80 rounded-xl p-3 shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-red-50 text-[#8B1E1E] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 font-heading">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Official Founder Desk Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200/90 bg-stone-100 group">
              <img
                src="/images/official-founder-desk-clean.png"
                alt="SolarArk Official Management & Desk"
                className="w-full h-[320px] sm:h-[380px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </div>

        </section>

        {/* ── SECTION 3: OUR COMMITMENT / EXCEPTIONAL QUALITY ── */}
        <section className="space-y-16 sm:space-y-24 pt-4 pb-4 relative">
          
          {/* Centered Intro Statement */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F7EFE9] border border-[#8B1E1E]/15 text-[11px] font-bold text-[#8B1E1E] tracking-widest uppercase font-heading">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B1E1E]" />
              <span>Our Commitment</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.18]">
              Exceptional quality. End-to-end service.<br className="hidden sm:inline" />{' '}
              <span className="text-[#8B1E1E]">Delighted</span> customers.
            </h2>

            {/* Subtle Sun Ornament Divider */}
            <div className="flex items-center justify-center gap-3 pt-1 text-[#8B1E1E]/40">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#8B1E1E]/30" />
              <Sun className="w-4 h-4 text-[#8B1E1E]/70" />
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#8B1E1E]/30" />
            </div>
          </div>

          {/* Block 01: Environmental Responsibility (Image Left, Content Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative">
            
            {/* Left Image with curved top-left arch and round badge */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-tl-[80px] sm:rounded-tl-[100px] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-100">
                <img
                  src="/images/target-env-sunset-roof.jpg"
                  alt="Environmental Responsibility Solar Sunset Installation"
                  className="w-full h-[280px] sm:h-[360px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/official-env-sunset-roof.png';
                  }}
                />
              </div>

              {/* Overlapping Maroon Globe Badge */}
              <div className="hidden sm:flex absolute -right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#8B1E1E] text-white rounded-full border-4 border-[#FCFAF7] shadow-xl items-center justify-center z-10">
                <Globe className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-4 sm:pl-4 relative">
              <div className="flex items-center gap-3 text-stone-400 font-heading text-base font-semibold">
                <span className="text-stone-500 font-bold">01</span>
                <div className="w-14 h-[1px] bg-stone-300" />
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Environmental <span className="text-[#8B1E1E]">Responsibility</span>
              </h3>

              <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
                At SolarArk, we are pioneers in the solar energy revolution, dedicated to providing innovative, cost-effective and sustainable solar solutions to homes, businesses and industries across the globe. We believe that renewable energy is the key to building a brighter, more sustainable future, and we are committed to delivering clean, reliable energy solutions that reduce carbon footprints and promote environmental responsibility.
              </p>
            </div>
          </div>

          {/* Block 02: Solar Systems (Content Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative pt-4">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:pr-4 order-2 lg:order-1 relative">
              <div className="flex items-center gap-3 text-stone-400 font-heading text-base font-semibold">
                <span className="text-stone-500 font-bold">02</span>
                <div className="w-14 h-[1px] bg-stone-300" />
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Solar <span className="text-[#8B1E1E]">Systems</span>
              </h3>

              <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
                With a focus on quality, efficiency, and customer satisfaction, we ensure that each solar solution is tailored to the unique needs of our clients. Whether you're looking to reduce your home's energy costs, transition your business to renewable power or implement large-scale solar systems in industrial facilities, SolarArk is here to guide you every step of the way.
              </p>
            </div>

            {/* Right Image with curved top-left arch and round badge */}
            <div className="lg:col-span-5 relative group order-1 lg:order-2">
              <div className="hidden sm:flex absolute -left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#8B1E1E] text-white rounded-full border-4 border-[#FCFAF7] shadow-xl items-center justify-center z-10">
                <SunMedium className="w-6 h-6 text-white" />
              </div>

              <div className="relative rounded-tl-[80px] sm:rounded-tl-[100px] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-100">
                <img
                  src="/images/target-solar-systems-roof.jpg"
                  alt="Solar Systems Commercial Rooftop Installation"
                  className="w-full h-[280px] sm:h-[360px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/official-solar-systems-roof.png';
                  }}
                />
              </div>
            </div>

          </div>

        </section>

        {/* ── SECTION 4: POWERING A SUSTAINABLE FUTURE (FOUNDER PORTRAIT + MISSION/VISION) ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white border border-stone-200/80 rounded-3xl p-8 sm:p-12 shadow-xs">
          
          {/* Left Founder Portrait */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-stone-100">
              <img
                src="/images/official-founder-office-clean.png"
                alt="SolarArk Founder & Managing Leadership"
                className="w-full h-[320px] sm:h-[400px] object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Right Mission & Vision Content */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-snug">
              Powering a <span className="text-[#8B1E1E]">Sustainable Future</span> with <span className="text-[#8B1E1E]">Solar Ark</span> India
            </h2>

            {/* Mission */}
            <div className="space-y-2 border-l-4 border-[#8B1E1E] pl-5">
              <h3 className="font-heading text-xl font-bold text-slate-900">
                Mission
              </h3>
              <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
                Solar Ark's mission extends beyond projects. Our efforts revolve around nurturing awareness about sustainable living practices, inspiring individuals to make eco-conscious choices.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-2 border-l-4 border-stone-300 pl-5">
              <h3 className="font-heading text-xl font-bold text-slate-900">
                Vision
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 font-semibold italic">
                "Empowering Communities, Illuminating Futures: Solar Ark's Vision for a Sustainable India"
              </p>
              <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                At Solar Ark, we envision a future where every corner of India is bathed in the glow of sustainable energy, where communities thrive in harmony with nature, and where innovation and tradition converge to create a brighter tomorrow. Our vision is to lead the charge towards a renewable energy revolution.
              </p>
            </div>
          </div>

        </section>

      </div>

      {/* ── SECTION 5: LEAD ESTIMATE FORM ── */}
      <div className="mt-20">
        <FinalCTAForm
          prefilledPincode={prefilledPincode}
          prefilledBill={prefilledBill}
        />
      </div>

    </div>
  );
};
