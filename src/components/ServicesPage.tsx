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
  PhoneCall,
  Clock,
  Activity,
  MapPin,
  TrendingDown,
  Layers,
  BarChart3,
  Sun
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
  const [activeCategory, setActiveCategory] = useState<'all' | 'residential' | 'society' | 'commercial' | 'maintenance'>('all');

  const processSteps = [
    {
      step: '01',
      title: 'Consultation & Site Survey',
      description: 'Our certified engineers conduct a physical rooftop inspection, measuring usable shadow-free area and analyzing historical DISCOM electricity consumption.',
      highlight: 'Free 3D Shadow Analysis',
    },
    {
      step: '02',
      title: 'Custom Engineering & CAD Design',
      description: 'We prepare an optimized 3D layout specifying exact panel tilt angles, elevated structural mounts, and string inverter sizing for maximum yearly kWh yield.',
      highlight: 'Zero Slab Penetration',
    },
    {
      step: '03',
      title: 'Paperless DISCOM & Subsidy Filing',
      description: 'SolarArk handles 100% of the documentation for PM Surya Ghar national portal subsidy (up to ₹78,000) and state DISCOM net-metering approvals.',
      highlight: 'Direct Bank Subsidy Credit',
    },
    {
      step: '04',
      title: 'Certified Master Installation',
      description: 'In-house certified electrical teams execute mounting structure erection, Tier-1 module placement, chemical earthing pits, and AC/DC wiring in 48 hours.',
      highlight: 'Cyclone-Tested 160 km/h Mounts',
    },
    {
      step: '05',
      title: 'Net-Metering & 24/7 Telemetry',
      description: 'We coordinate bi-directional meter testing with DISCOM officials, commission your plant, and connect real-time IoT cloud monitoring to your smartphone.',
      highlight: 'Instant Power Tracking',
    },
  ];

  const proofMetrics = [
    { value: '5,000+', label: 'Happy Customers Solarised', subtext: 'Across Maharashtra & Central India' },
    { value: '₹78,000', label: 'Max Govt. Subsidy Claimed', subtext: 'Direct PM Surya Ghar Bank Credit' },
    { value: '25 Years', label: 'Linear Performance Warranty', subtext: 'Tier-1 N-Type TOPCon Cell Architecture' },
    { value: 'Up to 90%', label: 'Electricity Bill Reduction', subtext: 'Verified on MSEDCL & State DISCOM Bills' },
  ];

  return (
    <div className="pt-24 lg:pt-28 pb-20 min-h-screen bg-[#FCFAF7] text-slate-900 selection:bg-[#1D5FE0] selection:text-white">
      
      {/* ── TOP BREADCRUMB & QUICK NAV ── */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-6">
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-stone-200 mb-6">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <button
              onClick={() => onNavigate('/')}
              className="flex items-center gap-1 hover:text-[#1D5FE0] transition-colors cursor-pointer"
            >
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">Solar Services</span>
          </div>

          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-[#1D5FE0] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      {/* ── SECTION 01: EDITORIAL SERVICES HERO ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 lg:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7EFE9] border border-[#8B1E1E]/15 text-[11px] font-bold text-[#8B1E1E] tracking-widest uppercase font-heading">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B1E1E]" />
              <span>Complete Solar EPC Services</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Engineered for Maximum Solar Yield.<br />
              <span className="text-[#1D5FE0]">Tailored for Every Rooftop.</span>
            </h1>

            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl">
              SolarArk delivers certified turnkey solar solutions for Indian homes, housing societies, commercial businesses, and industrial facilities. From precision 3D CAD engineering and PM Surya Ghar subsidy claims to 25-year generation reliability.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onCtaClick}
                className="bg-[#1D5FE0] hover:bg-[#1753C8] text-white font-bold px-7 py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>Book Free Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+917080909590"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 hover:text-[#1D5FE0] bg-white border border-stone-200 px-5 py-3.5 rounded-xl transition-colors shadow-xs"
              >
                <PhoneCall className="w-4 h-4 text-[#1D5FE0]" />
                <span>Call Solar Advisor (7080909590)</span>
              </a>
            </div>

            {/* Quick Reassurance Pill Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-stone-200/80">
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-[#1D5FE0] block font-heading">⚡ Up to 90%</span>
                <span className="text-[11px] text-stone-500">Bill Reduction</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-[#8B1E1E] block font-heading">₹78,000 Subsidy</span>
                <span className="text-[11px] text-stone-500">PM Surya Ghar</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-emerald-700 block font-heading">25-Yr Warranty</span>
                <span className="text-[11px] text-stone-500">Performance Guarantee</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-slate-800 block font-heading">5,000+ Roofs</span>
                <span className="text-[11px] text-stone-500">Maharashtra Track Record</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Art Direction */}
          <div className="lg:col-span-5">
            <div className="relative rounded-tl-[90px] sm:rounded-tl-[120px] rounded-br-3xl rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl border border-stone-200 bg-stone-100 group">
              <img
                src="/images/completed-projects-home.jpg"
                alt="SolarArk Engineered Rooftop Solar Installation"
                className="w-full h-[360px] sm:h-[460px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/hero-solar-home.png';
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-500/30 backdrop-blur-md border border-emerald-400/40 text-[10px] font-bold text-emerald-300 uppercase tracking-wider font-heading">
                  <Sparkles className="w-3 h-3" />
                  <span>Precision Engineering</span>
                </div>
                <div className="text-base sm:text-lg font-bold leading-snug">
                  High-Yield N-Type Bifacial Solar Systems
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Elevated structural clearance preserving complete usable rooftop walking and terrace leisure space.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 02: EDITORIAL SERVICE DISCOVERY NAVIGATOR ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
          <div>
            <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider font-heading block">
              Explore By Sector
            </span>
            <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
              Select Your Energy Requirement
            </h2>
          </div>

          {/* Segment Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'all', label: 'All Services', icon: Layers },
              { id: 'residential', label: 'Homes (Residential)', icon: HomeIcon },
              { id: 'society', label: 'Housing Societies', icon: Building },
              { id: 'commercial', label: 'Commercial & Industrial', icon: Factory },
              { id: 'maintenance', label: 'O&M / Cleaning', icon: Wrench },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#1D5FE0] text-white shadow-md shadow-[#1D5FE0]/20'
                      : 'bg-white text-stone-700 hover:text-slate-900 border border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 03: VARIABLE LAYOUT PRIMARY SERVICES SHOWCASE ── */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 space-y-20 lg:space-y-28">

        {/* SERVICE 01: RESIDENTIAL ROOFTOP SOLAR (HOMES) */}
        {(activeCategory === 'all' || activeCategory === 'residential') && (
          <section id="service-homes" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs">
            
            {/* Left Photographic Arched Container */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-tl-[80px] sm:rounded-tl-[100px] rounded-br-2xl rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-100">
                <img
                  src="/images/completed-projects-home.jpg"
                  alt="SolarArk Residential Rooftop Solar Installation"
                  className="w-full h-[300px] sm:h-[380px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Subsidy Badge */}
              <div className="absolute -bottom-4 right-4 sm:-right-4 bg-[#8B1E1E] text-white px-4 py-2.5 rounded-2xl shadow-xl border-2 border-white flex items-center gap-2">
                <BadgePercent className="w-4 h-4 text-amber-300 shrink-0" />
                <div className="text-left leading-tight">
                  <span className="text-[10px] font-bold uppercase tracking-wider block text-stone-200">Govt. Subsidy</span>
                  <span className="text-xs sm:text-sm font-extrabold font-heading">Up to ₹78,000 Direct Credit</span>
                </div>
              </div>
            </div>

            {/* Right Service Content */}
            <div className="lg:col-span-7 space-y-5 lg:pl-4">
              <div className="flex items-center gap-2 text-stone-400 font-heading text-xs font-semibold">
                <span className="text-[#1D5FE0] font-bold">01 — RESIDENTIAL EPC</span>
                <div className="w-12 h-[1px] bg-stone-300" />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-snug">
                Residential Rooftop Solar for Indian Homes
              </h2>

              <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
                At SolarArk, we are dedicated to providing innovative, cost-effective and sustainable solar solutions to homeowners across Maharashtra. We custom design rooftop systems that eliminate high monthly electricity tariffs, protect terrace waterproofing, and guarantee clean renewable energy generation for 25+ years.
              </p>

              {/* Verified Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-2.5 bg-[#FCFAF7] border border-stone-200/80 rounded-xl p-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Tier-1 N-Type TOPCon 580Wp Bifacial Panels
                  </span>
                </div>
                <div className="flex items-start gap-2.5 bg-[#FCFAF7] border border-stone-200/80 rounded-xl p-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    100% PM Surya Ghar Portal Subsidy Filing
                  </span>
                </div>
                <div className="flex items-start gap-2.5 bg-[#FCFAF7] border border-stone-200/80 rounded-xl p-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Zero-Penetration Elevated Terrace Mounts
                  </span>
                </div>
                <div className="flex items-start gap-2.5 bg-[#FCFAF7] border border-stone-200/80 rounded-xl p-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    MSEDCL Net-Metering Synchronization
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onCtaClick}
                  className="bg-[#1D5FE0] hover:bg-[#1753C8] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Get Home Solar Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('/contact')}
                  className="text-xs sm:text-sm font-bold text-stone-700 hover:text-[#1D5FE0] bg-stone-100 hover:bg-stone-200 px-5 py-3 rounded-xl transition-colors cursor-pointer"
                >
                  Request Terrace Inspection
                </button>
              </div>
            </div>

          </section>
        )}

        {/* SERVICE 02: HOUSING SOCIETIES & APARTMENT COMMUNITIES (REVERSED LAYOUT) */}
        {(activeCategory === 'all' || activeCategory === 'society') && (
          <section id="service-society" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 lg:pr-4 order-2 lg:order-1">
              <div className="flex items-center gap-2 text-stone-400 font-heading text-xs font-semibold">
                <span className="text-[#1D5FE0] font-bold">02 — COMMUNITY SOLAR</span>
                <div className="w-12 h-[1px] bg-stone-300" />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-snug">
                Solar Solutions for Housing Societies &amp; Apartments
              </h2>

              <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
                Cooperative housing societies face exorbitant common-area electricity bills every month for elevators, water booster pumps, security floodlighting, and clubhouses. SolarArk designs custom community solar arrays that drastically lower maintenance charges for all apartment residents.
              </p>

              {/* Society Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-2.5 bg-[#FCFAF7] border border-stone-200/80 rounded-xl p-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Powers Common Lifts &amp; Water Pumps
                  </span>
                </div>
                <div className="flex items-start gap-2.5 bg-[#FCFAF7] border border-stone-200/80 rounded-xl p-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    High-Rise High-Wind CAD Structural Design
                  </span>
                </div>
                <div className="flex items-start gap-2.5 bg-[#FCFAF7] border border-stone-200/80 rounded-xl p-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Committee Presentation &amp; ROI Reports
                  </span>
                </div>
                <div className="flex items-start gap-2.5 bg-[#FCFAF7] border border-stone-200/80 rounded-xl p-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Zero Out-Of-Pocket Society Financing
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onCtaClick}
                  className="bg-[#1D5FE0] hover:bg-[#1753C8] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Society Presentation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+917080909590"
                  className="text-xs sm:text-sm font-bold text-stone-700 hover:text-[#1D5FE0] bg-stone-100 hover:bg-stone-200 px-5 py-3 rounded-xl transition-colors inline-flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#1D5FE0]" />
                  <span>Call Society Specialist</span>
                </a>
              </div>
            </div>

            {/* Right Photographic Arched Container */}
            <div className="lg:col-span-5 relative group order-1 lg:order-2">
              <div className="relative rounded-tl-[80px] sm:rounded-tl-[100px] rounded-br-2xl rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-100">
                <img
                  src="/images/target-solar-systems-roof.jpg"
                  alt="Housing Society Rooftop Solar Array"
                  className="w-full h-[300px] sm:h-[380px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>

              <div className="absolute -bottom-4 left-4 sm:-left-4 bg-[#0B1730] text-white px-4 py-2.5 rounded-2xl shadow-xl border-2 border-white flex items-center gap-2">
                <Building className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="text-left leading-tight">
                  <span className="text-[10px] font-bold uppercase tracking-wider block text-slate-300">50+ Societies Solarised</span>
                  <span className="text-xs sm:text-sm font-extrabold font-heading">Pune &amp; Chh. Sambhajinagar</span>
                </div>
              </div>
            </div>

          </section>
        )}

        {/* SERVICE 03: COMMERCIAL & INDUSTRIAL HIGH-YIELD EPC */}
        {(activeCategory === 'all' || activeCategory === 'commercial') && (
          <section id="service-commercial" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs">
            
            {/* Left Photographic Arched Container */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-tl-[80px] sm:rounded-tl-[100px] rounded-br-2xl rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-100">
                <img
                  src="/images/official-solar-systems-roof.png"
                  alt="Commercial & Industrial Solar Plant EPC"
                  className="w-full h-[300px] sm:h-[380px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>

              <div className="absolute -bottom-4 right-4 sm:-right-4 bg-emerald-800 text-white px-4 py-2.5 rounded-2xl shadow-xl border-2 border-white flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-emerald-300 shrink-0" />
                <div className="text-left leading-tight">
                  <span className="text-[10px] font-bold uppercase tracking-wider block text-emerald-200">High ROI</span>
                  <span className="text-xs sm:text-sm font-extrabold font-heading">40% Accelerated Tax Depreciation</span>
                </div>
              </div>
            </div>

            {/* Right Service Content */}
            <div className="lg:col-span-7 space-y-5 lg:pl-4">
              <div className="flex items-center gap-2 text-stone-400 font-heading text-xs font-semibold">
                <span className="text-[#1D5FE0] font-bold">03 — COMMERCIAL &amp; INDUSTRIAL</span>
                <div className="w-12 h-[1px] bg-stone-300" />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-snug">
                Commercial &amp; Industrial Solar Plants
              </h2>

              <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
                Whether you operate a manufacturing facility, warehouse, cold storage, private hospital, or educational campus, electricity represents one of your highest controllable operational expenses. SolarArk delivers heavy-duty megawatt and kilowatt installations with rapid payback and long-term tariff hedging.
              </p>

              {/* Commercial Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-2.5 bg-[#FCFAF7] border border-stone-200/80 rounded-xl p-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    HT Net-Metering &amp; Transformer Sync
                  </span>
                </div>
                <div className="flex items-start gap-2.5 bg-[#FCFAF7] border border-stone-200/80 rounded-xl p-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Flexible Capex / OPEX Financing Models
                  </span>
                </div>
                <div className="flex items-start gap-2.5 bg-[#FCFAF7] border border-stone-200/80 rounded-xl p-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Maximum Demand (MD) Tariff Shaving
                  </span>
                </div>
                <div className="flex items-start gap-2.5 bg-[#FCFAF7] border border-stone-200/80 rounded-xl p-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Robust Galvanized Shed &amp; Ground Mounts
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onCtaClick}
                  className="bg-[#1D5FE0] hover:bg-[#1753C8] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Industrial Feasibility Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="mailto:info@thesolarark.com"
                  className="text-xs sm:text-sm font-bold text-stone-700 hover:text-[#1D5FE0] bg-stone-100 hover:bg-stone-200 px-5 py-3 rounded-xl transition-colors"
                >
                  Email RFP / Tender Docs
                </a>
              </div>
            </div>

          </section>
        )}

        {/* SERVICE 04: PROACTIVE MAINTENANCE, CLEANING & IOT MONITORING */}
        {(activeCategory === 'all' || activeCategory === 'maintenance') && (
          <section id="service-maintenance" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 lg:pr-4 order-2 lg:order-1">
              <div className="flex items-center gap-2 text-stone-400 font-heading text-xs font-semibold">
                <span className="text-[#1D5FE0] font-bold">04 — OPERATIONS &amp; MAINTENANCE</span>
                <div className="w-12 h-[1px] bg-stone-300" />
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-snug">
                Proactive Solar Cleaning &amp; Annual Maintenance (AMC)
              </h2>

              <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
                Dust, bird droppings, and environmental soiling can reduce solar generation yield by up to 25%. SolarArk offers professional panel washing, electrical safety testing, inverter telemetry maintenance, and rapid 24-hour technician dispatch across all regional branches.
              </p>

              {/* Maintenance Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-2.5 bg-[#FCFAF7] border border-stone-200/80 rounded-xl p-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Deionized Water Washing &amp; Soiling Removal
                  </span>
                </div>
                <div className="flex items-start gap-2.5 bg-[#FCFAF7] border border-stone-200/80 rounded-xl p-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Drone Thermal Scans for Hotspot Detection
                  </span>
                </div>
                <div className="flex items-start gap-2.5 bg-[#FCFAF7] border border-stone-200/80 rounded-xl p-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    24/7 Smart Telemetry Generation Alerts
                  </span>
                </div>
                <div className="flex items-start gap-2.5 bg-[#FCFAF7] border border-stone-200/80 rounded-xl p-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    24-Hour Rapid Field Technician Dispatch
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onCtaClick}
                  className="bg-[#1D5FE0] hover:bg-[#1753C8] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Inquire About Solar AMC</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+917080909590"
                  className="text-xs sm:text-sm font-bold text-stone-700 hover:text-[#1D5FE0] bg-stone-100 hover:bg-stone-200 px-5 py-3 rounded-xl transition-colors inline-flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#1D5FE0]" />
                  <span>Helpline (7080909590)</span>
                </a>
              </div>
            </div>

            {/* Right Photographic Arched Container */}
            <div className="lg:col-span-5 relative group order-1 lg:order-2">
              <div className="relative rounded-tl-[80px] sm:rounded-tl-[100px] rounded-br-2xl rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-100">
                <img
                  src="/images/target-env-sunset-roof.jpg"
                  alt="SolarArk Solar Panel Cleaning and Maintenance Service"
                  className="w-full h-[300px] sm:h-[380px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>

              <div className="absolute -bottom-4 left-4 sm:-left-4 bg-[#8B1E1E] text-white px-4 py-2.5 rounded-2xl shadow-xl border-2 border-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-amber-300 shrink-0" />
                <div className="text-left leading-tight">
                  <span className="text-[10px] font-bold uppercase tracking-wider block text-stone-200">Peak Performance</span>
                  <span className="text-xs sm:text-sm font-extrabold font-heading">24/7 Remote Diagnostics</span>
                </div>
              </div>
            </div>

          </section>
        )}

      </div>

      {/* ── SECTION 04: THE SOLARARK CUSTOMER JOURNEY (5-STEP PROCESS) ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mt-24 lg:mt-32 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1D5FE0] text-xs font-bold font-heading">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turnkey Execution Journey</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight">
            How SolarArk Delivers Your Solar System
          </h2>

          <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto">
            A transparent, engineered 5-stage installation process designed to ensure zero hassle, full subsidy release, and rapid commissioning.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#1D5FE0] transition-all group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#FCFAF7] border-2 border-stone-200 group-hover:border-[#1D5FE0] text-[#1D5FE0] font-heading font-extrabold text-sm flex items-center justify-center shadow-xs transition-colors">
                  {step.step}
                </div>
                <h3 className="font-heading text-base font-bold text-slate-900 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md block text-center">
                  ✓ {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 05: VERIFIED PROOF & REGIONAL CREDIBILITY ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mt-20 lg:mt-28">
        <div className="bg-[#0B1730] text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl space-y-10 relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1D5FE0]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-bold font-heading">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Maharashtra Track Record</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Backed by Experience, Loved by Homeowners
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Headquartered in Amravati with regional offices in Chh. Sambhajinagar, Wardha, and Akola, SolarArk is committed to empowering communities with Assured Renewable Komfort.
            </p>
          </div>

          {/* 4 Proof Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {proofMetrics.map((metric, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center space-y-2 backdrop-blur-xs">
                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-200">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-400">
                  {metric.subtext}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Strip */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-[#1D5FE0]" />
              <span>Head Office: Mira Sadan, Krushnarpan Colony, Amravati, Maharashtra 444605</span>
            </div>

            <button
              onClick={onCtaClick}
              className="bg-[#1D5FE0] hover:bg-white hover:text-slate-950 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Get Free Solar Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ── SECTION 06: FINAL CONVERSION LEAD FORM ── */}
      <div className="mt-20 lg:mt-28">
        <FinalCTAForm
          prefilledPincode={prefilledPincode}
          prefilledBill={prefilledBill}
        />
      </div>

    </div>
  );
};
