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
        'Smart, high-efficiency grid-tied & hybrid inverters tailored for seamless residential and commercial performance.',
    },
    {
      icon: BatteryCharging,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      title: 'Battery Storage Solutions',
      description:
        'Advanced energy storage engineered for 24/7 power backup during DISCOM grid cuts and peak tariff hours.',
    },
    {
      icon: BadgePercent,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
      title: 'Solar Material Financing',
      description:
        'Flexible, transparent low-EMI paperless financing plans tailored specifically for Indian homeowners.',
    },
    {
      icon: Headphones,
      color: 'text-purple-600 bg-purple-50 border-purple-100',
      title: '24 X 7 Call & Chat Support',
      description:
        'Dedicated customer care and remote telemetry health monitoring around the clock for total peace of mind.',
    },
  ];

  const officialJourney = [
    {
      year: '2020',
      badge: 'Inception',
      title: 'SolarARK Projects',
      description: 'Inception of SolarARK with initial rooftop solar project execution and engineering setup.',
    },
    {
      year: '2021',
      badge: '575 Roofs',
      title: '575 Home Solarised',
      description: 'Expanded residential footprint, empowering 575 Indian homes with clean rooftop solar power.',
    },
    {
      year: '2022',
      badge: 'Rapid Scale',
      title: '2230 Homes & 100+ Businesses',
      description: '2,230 Homes Solarised, 100+ Commercial Businesses, and 50+ Housing Societies transformed.',
    },
    {
      year: '2023',
      badge: '5,000+ Milestone',
      title: '5000+ Happy Customers',
      description: 'Crossed 5,000+ satisfied homeowners with verified monthly electricity bill savings.',
    },
    {
      year: '2024',
      badge: 'Regional Expansion',
      title: 'Branch Network Expansion',
      description: 'Established dedicated regional branches at Akola, Chhatrapati Sambhaji Nagar & Wardha.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-slate-200/60 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-16 sm:space-y-24">
        
        {/* ── CHAPTER 1: WHO ARE WE? ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#1D5FE0]">
              <Info className="w-3.5 h-3.5" />
              <span>Official About SolarArk</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.14]">
              Who Are <span className="text-[#1D5FE0]">We?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              We believe in building strong, lasting relationships with our clients, providing them with tailored solutions that align with their specific energy needs. Whether you're a homeowner, a business, or part of an industrial facility, Solar Ark is here to help you make the smart, eco-friendly choice for your energy needs.
            </p>

            {/* 4 Feature Bullet Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {capabilities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white border border-slate-200/80 rounded-2xl p-3.5 shadow-xs">
                  <div className="w-7 h-7 rounded-full bg-blue-50 text-[#1D5FE0] flex items-center justify-center shrink-0 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 font-heading">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Authentic Founder Photo Block */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-[#EFECE6] group">
              <img
                src="/images/completed-projects-home.jpg"
                alt="SolarArk Leadership & Turnkey Solar Engineering Team"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-heading">
                  Verified Leadership &amp; Engineering
                </div>
                <div className="text-lg font-bold">
                  SolarArk Management &amp; Support
                </div>
                <div className="text-xs text-slate-200 font-normal">
                  Dedicated leadership ensuring quality installation across Maharashtra &amp; Pan-India.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── CHAPTER 2: POWERING A SUSTAINABLE FUTURE & MISSION/VISION ── */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-xs space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider font-heading">
              Our Core Philosophy
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Powering a <span className="text-[#1D5FE0]">Sustainable Future</span> with <span className="text-[#1D5FE0]">Solar Ark India</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Mission & Vision Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Mission */}
              <div className="space-y-2 border-l-4 border-[#1D5FE0] pl-5 py-1">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#1D5FE0]" />
                  <h4 className="font-heading text-xl font-bold text-slate-900">Mission</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Solar Ark's mission extends beyond projects. Our efforts revolve around nurturing awareness about sustainable living practices, inspiring individuals to make eco-conscious choices.
                </p>
              </div>

              {/* Vision */}
              <div className="space-y-2 border-l-4 border-emerald-500 pl-5 py-1">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-heading text-xl font-bold text-slate-900">Vision</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed italic">
                  "Empowering Communities, Illuminating Futures: Solar Ark's Vision for a Sustainable India"
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  At Solar Ark, we envision a future where every corner of India is bathed in the glow of sustainable energy, where communities thrive in harmony with nature, and where innovation and tradition converge to create a brighter tomorrow. Our vision is to lead the charge towards a renewable energy revolution, empowering communities across India to harness the abundant power of the sun and other sustainable resources. We see a nation where clean energy is not just a choice, but a way of life ingrained in the fabric of society.
                </p>
              </div>
            </div>

            {/* Founder Office Desk Photo Block */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-900">
                <img
                  src="/images/official-founder-office.png"
                  alt="SolarArk Office & Founder Desk"
                  className="w-full h-[340px] sm:h-[400px] object-cover object-[24%_65%]"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── CHAPTER 3: EXCEPTIONAL QUALITY, ENVIRONMENTAL RESPONSIBILITY & SOLAR SYSTEMS ── */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Exceptional quality. End-to-end service. Delighted customers
            </h3>
            <p className="text-sm text-slate-600 font-normal">
              Tailored solar engineering designed for homes, businesses, and industrial facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Environmental Responsibility */}
            <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-4 border border-emerald-900/40 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-2xl font-bold">
                Environmental Responsibility
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                At SolarArk, we are pioneers in the solar energy revolution, dedicated to providing innovative, cost-effective and sustainable solar solutions to homes, businesses and industries across the globe. We believe that renewable energy is the key to building a brighter, more sustainable future, and we are committed to delivering clean, reliable energy solutions that reduce carbon footprints and promote environmental stewardship.
              </p>
            </div>

            {/* Solar Systems */}
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-4 border border-blue-900/40 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-400/30 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-2xl font-bold">
                Solar Systems
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                With a focus on quality, efficiency, and customer satisfaction, we ensure that each solar solution is tailored to the unique needs of our clients. Whether you're looking to reduce your home's energy costs, transition your business to renewable power or implement large-scale solar systems in industrial facilities, SolarArk is here to guide you every step of the way. With cutting-edge technology and a commitment to sustainability.
              </p>
            </div>
          </div>
        </div>

        {/* ── CHAPTER 4: OUR JOURNEY (OFFICIAL MILESTONES TIMELINE) ── */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-100 text-xs font-bold text-amber-700 font-heading">
              <Calendar className="w-3.5 h-3.5" />
              <span>Official Company History</span>
            </div>
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Journey
            </h3>
            <p className="text-sm text-slate-600 font-normal">
              Official milestones and track record of growth across India.
            </p>
          </div>

          {/* Desktop Responsive Modern Timeline (5 Cards Grid) */}
          <div className="hidden lg:grid grid-cols-5 gap-4 relative">
            {/* Timeline Connecting Line */}
            <div className="absolute top-6 left-8 right-8 h-0.5 bg-slate-200 z-0" />

            {officialJourney.map((m, idx) => (
              <div
                key={idx}
                className="relative z-10 bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-2.5 hover:border-[#1D5FE0]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#1D5FE0] text-white font-heading font-extrabold text-xs flex items-center justify-center shadow-md mb-2">
                    {m.year}
                  </div>
                  <div className="text-[11px] font-bold text-[#1D5FE0] font-heading uppercase tracking-wider">
                    {m.badge}
                  </div>
                  <h4 className="font-heading text-sm font-bold text-slate-900 leading-snug mt-1">
                    {m.title}
                  </h4>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed mt-1.5">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet/Mobile Vertical Stack Timeline */}
          <div className="flex lg:hidden flex-col space-y-4 relative border-l-2 border-slate-200 pl-6 ml-4">
            {officialJourney.map((m, idx) => (
              <div key={idx} className="relative bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-1.5">
                <div className="absolute -left-[35px] top-5 w-5 h-5 rounded-full bg-[#1D5FE0] border-4 border-[#FAF9F6]" />
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-[#1D5FE0] font-heading">{m.year}</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase bg-slate-100 px-2 py-0.5 rounded-md">
                    {m.badge}
                  </span>
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
