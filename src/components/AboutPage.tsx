/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft, ArrowRight, Home as HomeIcon, CheckCircle2, Shield, Sparkles, Building2, Users, Award, MapPin } from 'lucide-react';
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

  const journeyMilestones = [
    {
      year: '2020',
      badge: 'SolarARK',
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
      badge: '2230+ Homes',
      title: '2230 Home Solarised, 100+ Commercial Businesses, 50+ Housing Societies',
      description: 'Major scale-up across residential clusters, commercial establishments, and housing societies.',
    },
    {
      year: '2023',
      badge: '5000+ Happy',
      title: '5000+ Happy Customers',
      description: 'Reached the milestone of 5,000+ delighted customers with verified electricity bill reduction.',
    },
    {
      year: '2024',
      badge: 'Expansion',
      title: 'Established Branches at Akola, Chh. Sambhaji Nagar & Wardha',
      description: 'Opened dedicated regional offices across Maharashtra to deliver local support and rapid installation.',
    },
  ];

  return (
    <div className="pt-24 lg:pt-28 pb-20 min-h-screen bg-[#FCFAF7] text-slate-900 selection:bg-[#8B1E1E] selection:text-white">
      
      {/* ── TOP BREADCRUMB & CONCISE HEADER ── */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-8">
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-stone-200 mb-6">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <button
              onClick={() => onNavigate('/')}
              className="flex items-center gap-1 hover:text-[#8B1E1E] transition-colors"
            >
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">About Us</span>
          </div>

          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-[#8B1E1E] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 space-y-20 sm:space-y-28">

        {/* ── SECTION 1: WHO ARE WE? ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Who Are <span className="text-[#8B1E1E]">We?</span>
            </h1>

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

        {/* ── SECTION 2: EXCEPTIONAL QUALITY HEADLINE ── */}
        <section className="text-center max-w-4xl mx-auto space-y-3 pt-4">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight">
            Exceptional quality. End-to-end service. Delighted customers
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-normal">
            Proven residential, commercial, and industrial rooftop solar solutions across Maharashtra.
          </p>
        </section>

        {/* ── SECTION 3: ENVIRONMENTAL RESPONSIBILITY BANNER ── */}
        <section className="bg-[#8B1E1E] text-white rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Sunset Rooftop Photo */}
          <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[300px]">
            <img
              src="/images/official-env-sunset-roof.png"
              alt="Environmental Responsibility Solar Sunset"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-4">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">
              Environmental Responsibility
            </h3>
            <p className="text-sm sm:text-base text-stone-100 font-normal leading-relaxed">
              At SolarArk, we are pioneers in the solar energy revolution, dedicated to providing innovative, cost-effective and sustainable solar solutions to homes, businesses and industries across the globe. We believe that renewable energy is the key to building a brighter, more sustainable future, and we are committed to delivering clean, reliable energy solutions that reduce carbon footprints and promote environmental stewardship.
            </p>
          </div>
        </section>

        {/* ── SECTION 4: POWERING A SUSTAINABLE FUTURE (FOUNDER PORTRAIT + MISSION/VISION) ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white border border-stone-200/80 rounded-3xl p-8 sm:p-12 shadow-xs">
          
          {/* Left Founder Portrait (Blue Blazer + Certificate) */}
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
                At Solar Ark, we envision a future where every corner of India is bathed in the glow of sustainable energy, where communities thrive in harmony with nature, and where innovation and tradition converge to create a brighter tomorrow. Our vision is to lead the charge towards a renewable energy revolution, empowering communities across India to harness the abundant power of the sun and other sustainable resources. We see a nation where clean energy is not just a choice, but a way of life ingrained in the fabric of society.
              </p>
            </div>
          </div>

        </section>

        {/* ── SECTION 5: SOLAR SYSTEMS BANNER ── */}
        <section className="bg-[#8B1E1E] text-white rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Solar Systems Rooftop Photo */}
          <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[300px]">
            <img
              src="/images/official-solar-systems-roof.png"
              alt="SolarArk Solar Systems Commercial Rooftop"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-4">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">
              Solar Systems
            </h3>
            <p className="text-sm sm:text-base text-stone-100 font-normal leading-relaxed">
              With a focus on quality, efficiency, and customer satisfaction, we ensure that each solar solution is tailored to the unique needs of our clients. Whether you're looking to reduce your home's energy costs, transition your business to renewable power or implement large-scale solar systems in industrial facilities, SolarArk is here to guide you every step of the way. With cutting-edge technology and a commitment to sustainability.
            </p>
          </div>
        </section>

        {/* ── SECTION 6: OUR JOURNEY (OFFICIAL MILESTONES) ── */}
        <section className="space-y-12 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Journey
            </h2>
            <p className="text-sm text-stone-600 font-normal">
              Continuous track record of growth, happy homeowners, and regional branch expansion.
            </p>
          </div>

          {/* Desktop Curved Track / Grid */}
          <div className="hidden lg:grid grid-cols-5 gap-5 relative">
            <div className="absolute top-7 left-10 right-10 h-0.5 border-t-2 border-dashed border-stone-300 z-0" />

            {journeyMilestones.map((m, idx) => (
              <div
                key={idx}
                className="relative z-10 bg-white border border-stone-200/90 rounded-2xl p-5 shadow-xs flex flex-col justify-between space-y-3 hover:border-[#8B1E1E] transition-all group"
              >
                <div>
                  <div className="w-11 h-11 rounded-full bg-[#FCFAF7] border-2 border-stone-200 group-hover:border-[#8B1E1E] text-[#8B1E1E] font-heading font-extrabold text-xs flex items-center justify-center shadow-xs mb-3 transition-colors">
                    {m.year}
                  </div>
                  <div className="text-[11px] font-bold text-[#8B1E1E] font-heading uppercase tracking-wider">
                    {m.badge}
                  </div>
                  <h4 className="font-heading text-sm font-bold text-slate-900 leading-snug mt-1">
                    {m.title}
                  </h4>
                  <p className="text-xs text-stone-600 font-normal leading-relaxed mt-2">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="flex lg:hidden flex-col space-y-6 relative border-l-2 border-dashed border-stone-300 pl-6 ml-4">
            {journeyMilestones.map((m, idx) => (
              <div key={idx} className="relative bg-white border border-stone-200 rounded-2xl p-5 shadow-xs space-y-1.5">
                <div className="absolute -left-[35px] top-5 w-4 h-4 rounded-full bg-[#8B1E1E] border-4 border-[#FCFAF7]" />
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-[#8B1E1E] font-heading">{m.year}</span>
                  <span className="text-[10px] font-bold text-stone-500 uppercase bg-stone-100 px-2 py-0.5 rounded-md">
                    {m.badge}
                  </span>
                </div>
                <h4 className="font-heading text-sm font-bold text-slate-900">
                  {m.title}
                </h4>
                <p className="text-xs text-stone-600 font-normal leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── SECTION 7: LEAD ESTIMATE FORM ── */}
      <div className="mt-20">
        <FinalCTAForm
          prefilledPincode={prefilledPincode}
          prefilledBill={prefilledBill}
        />
      </div>

    </div>
  );
};
