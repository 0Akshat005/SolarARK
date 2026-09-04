/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  CheckCircle2,
  Sun,
  Globe,
  SunMedium,
  Target,
  Eye,
  Award,
  Users,
  Zap,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Sparkles
} from 'lucide-react';

import { OurJourney } from './OurJourney';
import { PrimaryButton } from './PrimaryButton';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
  prefilledPincode?: string;
  prefilledBill?: number;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onCtaClick,
  prefilledPincode = '444601',
  prefilledBill = 8500,
}) => {

  const impactStats = [
    { value: '5,000+', label: 'Rooftops Powered', icon: Zap },
    { value: '12+', label: 'Districts Covered', icon: MapPin },
    { value: '25 Yr', label: 'SunSure Warranty', icon: ShieldCheck },
    { value: '₹78K', label: 'Max Govt. Subsidy', icon: Award },
  ];

  return (
    <div
      className="pt-20 lg:pt-24 pb-8 min-h-screen bg-[#FAF9F6] text-slate-900 selection:bg-[#8B1E1E] selection:text-white"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Schema.org microdata */}
      <meta itemProp="name" content="SolarArk Projects Pvt. Ltd." />
      <meta itemProp="url" content="https://www.thesolarark.com/about" />



      {/* ── 1. HERO ABOUT BANNER ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-12">
        <div className="relative bg-gradient-to-br from-white via-[#FCFAF7] to-amber-50/40 rounded-3xl p-8 sm:p-12 lg:p-16 text-slate-900 shadow-md border border-stone-200/90 overflow-hidden">
          {/* Ambient glows */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#8B1E1E]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200/80 text-stone-700 text-[11px] font-bold font-heading tracking-wider uppercase shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-stone-600" />
                <span>Since 2020 • Central India's Solar EPC Leader</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold font-heading tracking-tight leading-[1.1]">
                Building India's Solar Future,{' '}
                <span className="text-accent-light">One Rooftop at a Time</span>
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
                SolarArk Projects Pvt. Ltd. is Maharashtra's fastest-growing residential &amp; commercial rooftop solar EPC company. Founded by <strong className="text-slate-900">Shrikant Tikhile</strong>, we have powered 5,000+ rooftops across 12 districts with Tier-1 bifacial modules, end-to-end turnkey engineering, and the 25-year SunSure Promise.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <PrimaryButton
                  onClick={onCtaClick}
                  size="md"
                >
                  Request Free Site Survey
                </PrimaryButton>
                <button
                  onClick={() => onNavigate('/projects')}
                  className="bg-stone-100 hover:bg-stone-200 text-slate-900 font-heading font-bold text-xs sm:text-sm px-6 py-3 rounded-xl border border-stone-200 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>View Our 5,000+ Projects</span>
                </button>
              </div>
            </div>

            {/* Founder Portrait */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200/90 bg-stone-100">
                <img
                  src="/images/official-founder-office-clean.png"
                  alt="SolarArk Founder Shrikant Tikhile at Company Headquarters"
                  className="w-full h-[300px] sm:h-[380px] object-cover object-center"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs font-bold text-amber-300 font-heading tracking-wider uppercase">Founder & Managing Director</div>
                  <div className="text-lg font-bold text-white font-heading mt-0.5">Shrikant Tikhile</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. IMPACT STATS STRIP ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {impactStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-2xs text-center space-y-2 hover:border-[#8B1E1E]/40 hover:shadow-xs transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#8B1E1E] flex items-center justify-center mx-auto">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-stone-500 uppercase tracking-wider font-heading">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 space-y-14">

        {/* ── 3. OUR JOURNEY TIMELINE ── */}
        <OurJourney />

        {/* ── 4. WHO WE ARE ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200/80 text-xs font-bold text-stone-700 font-heading shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Company Profile</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-[1.12]">
              Who Are <span className="text-accent-light">We?</span>
            </h2>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              We build strong, lasting partnerships with our clients — delivering customized solar rooftop systems that align with their unique energy needs, roof structures, and financial goals. Whether you are a homeowner reducing your electricity bill, a housing society going green, or an industrial unit cutting operational costs, SolarArk is your end-to-end turnkey EPC partner.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Tier-1 Bifacial Solar Modules',
                'Battery & Hybrid Storage',
                'Solar Financing & EMI Options',
                '24×7 Monitoring & Support',
              ].map((cap, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white border border-stone-200/80 rounded-xl p-3.5 shadow-2xs hover:border-[#8B1E1E]/30 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-red-50 text-[#8B1E1E] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 font-heading">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200/90 bg-stone-100 group">
              <img
                src="/images/official-founder-desk-clean.png"
                alt="SolarArk Management Office & Operations Desk"
                className="w-full h-[320px] sm:h-[400px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </section>

        {/* ── 5. OUR COMMITMENT BLOCKS ── */}
        <section className="space-y-12 pt-4">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200/80 text-xs font-bold text-stone-700 font-heading shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Our Commitment</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-[1.14]">
              Exceptional Quality. End-to-End Service.{' '}
              <span className="text-accent-light">Delighted Customers.</span>
            </h2>
            <div className="flex items-center justify-center gap-3 text-[#8B1E1E]/40">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#8B1E1E]/30" />
              <Sun className="w-4 h-4 text-[#8B1E1E]/60" />
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#8B1E1E]/30" />
            </div>
          </div>

          {/* Block 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-100">
                <img
                  src="/images/target-env-sunset-roof.jpg"
                  alt="Environmental Responsibility — Solar Rooftop at Sunset"
                  className="w-full h-[280px] sm:h-[360px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/official-env-sunset-roof.png';
                  }}
                />
              </div>
              <div className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#8B1E1E] text-white rounded-full border-4 border-[#FAF9F6] shadow-xl items-center justify-center z-10">
                <Globe className="w-5 h-5" />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 sm:pl-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-stone-400 font-heading">01</span>
                <div className="w-12 h-[1px] bg-stone-300" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Environmental Responsibility
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                At SolarArk, we are pioneers in the solar energy revolution — dedicated to providing innovative, cost-effective, and sustainable solar solutions to homes, businesses, and industries across Maharashtra. We believe renewable energy is the key to building a brighter, more sustainable future, and every rooftop we power reduces carbon footprints and promotes environmental stewardship.
              </p>
            </div>
          </div>

          {/* Block 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-4 sm:pr-4 order-2 lg:order-1">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-stone-400 font-heading">02</span>
                <div className="w-12 h-[1px] bg-stone-300" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Engineered Solar Systems
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                With a focus on quality, efficiency, and customer satisfaction, we ensure that each solar solution is structurally engineered and tailored to the unique needs of our clients. Whether you're looking to reduce your home's energy costs, transition your business to renewable power, or implement large-scale solar systems in industrial facilities, SolarArk guides you every step of the way — from 3D roof survey to net-metering commissioning.
              </p>
            </div>

            <div className="lg:col-span-5 relative group order-1 lg:order-2">
              <div className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#8B1E1E] text-white rounded-full border-4 border-[#FAF9F6] shadow-xl items-center justify-center z-10">
                <SunMedium className="w-5 h-5" />
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-100">
                <img
                  src="/images/target-solar-systems-roof.jpg"
                  alt="SolarArk Engineered Commercial Rooftop Installation"
                  className="w-full h-[280px] sm:h-[360px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/official-solar-systems-roof.png';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. MISSION & VISION ── */}
        <section className="bg-gradient-to-br from-white via-[#FCFAF7] to-amber-50/30 border border-stone-200/90 rounded-3xl p-8 sm:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Mission */}
            <div className="space-y-4 relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#8B1E1E] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <div className="border-l-4 border-[#8B1E1E] pl-5 space-y-2">
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  SolarArk's mission extends beyond projects. We nurture awareness about sustainable living practices, inspire individuals to make eco-conscious choices, and deliver complete turnkey solar rooftop installations — from subsidy filing to net-metering commissioning — so homeowners never need to visit a government office.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="space-y-4 relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-slate-900">Our Vision</h3>
              </div>
              <div className="border-l-4 border-amber-400 pl-5 space-y-2">
                <p className="text-xs sm:text-sm text-stone-700 font-semibold italic leading-relaxed">
                  "Empowering Communities, Illuminating Futures: SolarArk's Vision for a Sustainable India"
                </p>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  We envision a future where every corner of India is powered by clean, sustainable energy — where communities thrive in harmony with nature, and where innovation and tradition converge to create a brighter tomorrow. Our vision is to lead India's rooftop solar revolution from the heartland of Maharashtra.
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>

    </div>
  );
};
