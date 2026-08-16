/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Home as HomeIcon,
  CheckCircle2,
  Zap,
  Building,
  Factory,
  Wrench,
  ShieldCheck,
  BadgePercent,
  Calendar,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { FinalCTAForm } from './FinalCTAForm';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
  prefilledPincode?: string;
  prefilledBill?: number;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onCtaClick,
  prefilledPincode = '560034',
  prefilledBill = 8500,
}) => {
  const [activeTab, setActiveTab] = useState<'residential' | 'society' | 'commercial' | 'maintenance'>('residential');

  const serviceTabs = [
    { id: 'residential', label: 'Homes (Residential)', icon: HomeIcon },
    { id: 'society', label: 'Housing Societies', icon: Building },
    { id: 'commercial', label: 'Commercial & Industrial', icon: Factory },
    { id: 'maintenance', label: 'Maintenance & Monitoring', icon: Wrench },
  ];

  const servicesData = {
    residential: {
      badge: 'Most Popular',
      title: 'Residential Rooftop Solar for Indian Homes',
      subtitle: 'Transform your unutilized rooftop into a powerhouse that cuts monthly electricity bills by up to 90%.',
      image: '/images/completed-projects-home.jpg',
      benefits: [
        'Eligible for up to ₹78,000 direct PM Surya Ghar government subsidy',
        'Tier-1 Monocrystalline & N-Type TOPCon panels for maximum sunny & cloudy yield',
        'Zero-penetration elevated structure protecting terrace waterproofing and usable space',
        'Turnkey DISCOM net-metering paperwork and grid synchronization handled end-to-end',
        '25-year performance warranty with guaranteed generation promise',
      ],
      idealFor: 'Independent bungalows, row houses, and residential villas with 200+ sq.ft shadow-free roof area.',
    },
    society: {
      badge: 'Community Savings',
      title: 'Solar Solutions for Housing Societies & Apartments',
      subtitle: 'Eliminate heavy common-area electricity bills for elevators, water booster pumps, security lighting, and clubhouses.',
      image: '/images/target-solar-systems-roof.jpg',
      benefits: [
        'Dramatically reduces maintenance fees for apartment owners and resident associations',
        'Custom CAD structural engineering for high-rise wind loads and concrete parapets',
        'Special society subsidy and bulk metering consultation for multi-tower complexes',
        'Dual-meter telemetry with transparent monthly generation analytics for society committees',
        'Dedicated annual maintenance contract (AMC) with quarterly cleaning visits',
      ],
      idealFor: 'Apartment complexes, residential welfare associations (RWAs), and gated cooperative societies.',
    },
    commercial: {
      badge: 'High ROI',
      title: 'Commercial & Industrial Solar Plants',
      subtitle: 'Substantially reduce operating power expenses for manufacturing units, warehouses, hospitals, and schools.',
      image: '/images/official-solar-systems-roof.png',
      benefits: [
        'Significant operational overhead reduction with accelerated depreciation tax benefits',
        'Custom high-voltage grid integration, HT net-metering, and transformer synchronization',
        'Flexible Capex and low-EMI financing models tailored for Indian business cash flows',
        'Heavy-duty industrial mounting structures built for rugged environmental conditions',
        'Active remote telemetry tracking inverter efficiency and power factor correction',
      ],
      idealFor: 'Factories, cold storage, hospitals, private colleges, automobile workshops, and corporate buildings.',
    },
    maintenance: {
      badge: 'Lifetime Reliability',
      title: 'Proactive Solar Cleaning & Comprehensive AMC',
      subtitle: 'Maintain peak energy harvest with professional panel washing, electrical health checks, and 24/7 telemetry monitoring.',
      image: '/images/target-env-sunset-roof.jpg',
      benefits: [
        'Regular deionized water washing preventing dust, pollen, and bird-drop soiling losses',
        'Thermal imaging drone scans to detect micro-cracks and hot spots before power dips',
        'Real-time IoT cloud monitoring alerting technicians within 15 minutes of any grid drop',
        'Inverter firmware upgrades, DC string testing, and earthing pit resistance measurement',
        '24-hour rapid technician dispatch across Amravati, Sambhajinagar, Wardha, and Akola',
      ],
      idealFor: 'All residential and commercial solar owners seeking maximized 25-year generation output.',
    },
  };

  const currentService = servicesData[activeTab];

  return (
    <div className="pt-24 lg:pt-28 pb-20 min-h-screen bg-[#FCFAF7] text-slate-900 selection:bg-[#1D5FE0] selection:text-white">
      
      {/* ── TOP BREADCRUMB & HEADER ── */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-8">
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-stone-200 mb-8">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <button
              onClick={() => onNavigate('/')}
              className="flex items-center gap-1 hover:text-[#1D5FE0] transition-colors"
            >
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">Solar Services</span>
          </div>

          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-[#1D5FE0] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Page Hero Headline */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#1D5FE0] font-heading">
            <Zap className="w-3.5 h-3.5" />
            <span>Comprehensive Solar EPC Solutions</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.14]">
            End-to-End Solar Solutions for Every Rooftop
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            From customized residential bungalows to large housing societies and industrial factories, SolarArk delivers certified engineering, subsidy processing, and 25-year generation reliability.
          </p>
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
        
        {/* ── SERVICE SELECTOR TABS ── */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none border-b border-stone-200">
          {serviceTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#1D5FE0] text-white shadow-md shadow-[#1D5FE0]/25'
                    : 'bg-white text-stone-700 hover:text-slate-900 border border-stone-200/80 hover:border-stone-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ── ACTIVE SERVICE DEEP DIVE ── */}
        <section className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-bold text-emerald-700 font-heading">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentService.badge}</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {currentService.title}
            </h2>

            <p className="text-base text-stone-600 font-normal leading-relaxed">
              {currentService.subtitle}
            </p>

            <div className="space-y-3 pt-2">
              {currentService.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm font-medium text-stone-800 leading-relaxed">
                    {b}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#FCFAF7] border border-stone-200/70 text-xs text-stone-700">
              <strong className="text-slate-900 block mb-0.5">Ideal For:</strong>
              {currentService.idealFor}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onCtaClick}
                className="bg-[#1D5FE0] hover:bg-[#1753C8] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Book Free Site Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+917080909590"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-stone-700 hover:text-[#1D5FE0] bg-white border border-stone-200 px-5 py-3 rounded-xl transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#1D5FE0]" />
                <span>Call Solar Advisor (7080909590)</span>
              </a>
            </div>
          </div>

          {/* Right Photographic Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-stone-100 group">
              <img
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-[320px] sm:h-[420px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/completed-projects-home.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-heading">
                  Verified Engineering
                </div>
                <div className="text-sm sm:text-base font-bold">
                  Zero Slab Penetration Mounting
                </div>
                <div className="text-[11px] text-slate-200">
                  Custom engineered CAD layout for maximum daily sunlight exposure.
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* ── 4 PROMISE PILLARS ── */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D5FE0] flex items-center justify-center font-bold">
              <BadgePercent className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-slate-900">
              100% Subsidy Help
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Complete assistance for direct PM Surya Ghar government bank credit up to ₹78,000.
            </p>
          </div>

          <div className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-slate-900">
              25-Year Warranty
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Tier-1 cell architecture with guaranteed linear power output performance for 25 years.
            </p>
          </div>

          <div className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-slate-900">
              DISCOM Net-Metering
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Paperless filing and bidirectional meter setup with MSEDCL / local electricity board.
            </p>
          </div>

          <div className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-slate-900">
              Fast 7–14 Day Setup
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Trained in-house master electricians ensuring rapid, clean, and safe installation.
            </p>
          </div>
        </section>

      </div>

      {/* ── EMBEDDED ESTIMATE FORM ── */}
      <div className="mt-20">
        <FinalCTAForm
          prefilledPincode={prefilledPincode}
          prefilledBill={prefilledBill}
        />
      </div>

    </div>
  );
};
