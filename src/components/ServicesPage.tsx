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
  Sun,
  Award,
  Check,
  Compass,
  FileCheck,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Droplets,
  Radio
} from 'lucide-react';
import { PageContextBar } from './PageContextBar';

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
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'society' | 'commercial' | 'maintenance'>('all');
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      id: 'residential',
      sector: '01 — RESIDENTIAL EPC',
      title: 'Residential Rooftop Solar for Indian Homes',
      subtitle: 'Eliminate high monthly electricity bills and preserve complete terrace usable space.',
      description:
        'At SolarArk, we custom design rooftop solar systems for individual bungalows, row houses, and independent homes across Maharashtra. Our turnkey installation ensures zero slab leakage, high annual solar generation, and full assistance with the PM Surya Ghar ₹78,000 direct bank subsidy credit.',
      image: '/images/projects/project1.jpg',
      badge: 'Up to ₹78,000 Govt. Subsidy',
      stats: [
        { label: 'Bill Reduction', val: 'Up to 90%' },
        { label: 'Typical Payback', val: '3.2 – 3.8 Years' },
        { label: 'System Sizing', val: '3 kW – 10 kW' },
        { label: 'Warranty', val: '25-Year Linear' },
      ],
      highlights: [
        'Tier-1 N-Type TOPCon 580Wp high-efficiency bifacial panels.',
        'Elevated WindPro GI structure (6–8 ft clearance) maintaining full terrace recreational usability.',
        '100% PM Surya Ghar National Portal filing & DISCOM net-metering handled.',
        'Zero slab penetration with heavy-duty concrete counterweight anchoring.',
      ],
      ctaText: 'Get Home Solar Proposal',
    },
    {
      id: 'society',
      sector: '02 — COMMUNITY & APARTMENTS',
      title: 'Solar Solutions for Housing Societies & High-Rises',
      subtitle: 'Drastically cut common maintenance charges for elevators, water pumps & clubhouse.',
      description:
        'Cooperative housing societies face exorbitant common electricity bills every single month. SolarArk engineers custom high-rise rooftop arrays designed to power lifts, water booster pumps, and security floodlights, reducing maintenance costs for every flat owner.',
      image: '/images/projects/project7.jpg',
      badge: '60–80% Maintenance Cut',
      stats: [
        { label: 'Common Area Savings', val: '₹40K – ₹2L / mo' },
        { label: 'Typical Payback', val: '3.0 – 3.5 Years' },
        { label: 'System Sizing', val: '10 kW – 100+ kW' },
        { label: 'Structure', val: 'High-Rise Certified' },
      ],
      highlights: [
        'Dedicated array sizing for water pumping, elevator traction, and common lights.',
        'Free General Body Meeting (AGM) committee presentations and ROI documentation.',
        'High-wind resistance certified up to 170 km/h with cyclone-proof anchoring.',
        'Zero out-of-pocket society CAPEX/OPEX financing options available.',
      ],
      ctaText: 'Book Society Presentation',
    },
    {
      id: 'commercial',
      sector: '03 — COMMERCIAL & INDUSTRIAL',
      title: 'Commercial & Industrial Solar EPC Solutions',
      subtitle: '40% Accelerated Tax Depreciation and major reduction in peak operating costs.',
      description:
        'Engineered specifically for factories, warehouses, schools, hospitals, cold storages, and commercial offices. Harness unused rooftop shed or RCC space to offset heavy commercial tariffs (₹12–14/unit) and claim 40% accelerated depreciation in Year 1.',
      image: '/images/projects/project5.jpg',
      badge: '40% Tax Depreciation (Sec 32)',
      stats: [
        { label: 'Tariff Offset', val: '₹12–14 / unit saved' },
        { label: 'Typical Payback', val: '2.8 – 3.2 Years' },
        { label: 'System Sizing', val: '25 kW – 500+ kW' },
        { label: 'CEIG Clearances', val: '100% Handled' },
      ],
      highlights: [
        'Massive reduction in monthly commercial power bills with guaranteed generation.',
        'Section 32 of Income Tax Act 40% accelerated tax depreciation write-off.',
        'Smart 3-phase multi-MPPT inverters with zero-export protection devices.',
        'Complete CEIG inspections, transformer synchronization, and DISCOM HT metering.',
      ],
      ctaText: 'Request Commercial Audit',
    },
    {
      id: 'maintenance',
      sector: '04 — OPERATIONS & MAINTENANCE',
      title: 'Comprehensive Solar O&M, Cleaning & IoT Telemetry',
      subtitle: 'Protect your 25-year solar investment with professional cleaning & live monitoring.',
      description:
        'Dust, bird droppings, and thermal micro-cracks can degrade solar generation by up to 25%. SolarArk offers end-to-end Annual Maintenance Contracts (AMC), demineralized water cleaning, thermal drone imaging, and 24/7 smartphone telemetry.',
      image: '/images/gallery/credai.jpeg',
      badge: '99.2% Uptime SLA',
      stats: [
        { label: 'Yield Restoration', val: '+15% to 25%' },
        { label: 'Cleaning Cycle', val: 'Bi-Weekly / Monthly' },
        { label: 'Telemetry', val: '24/7 Mobile App' },
        { label: 'Response Time', val: '< 24 Hours' },
      ],
      highlights: [
        'High-pressure demineralized water washing preventing chemical calcification on glass.',
        'Thermal drone infrared scanning to detect bypassed diodes and hotspot micro-cracks.',
        'Live smartphone telemetry tracking daily generation, battery health, and grid export.',
        'Rapid technician dispatch across Maharashtra with original manufacturer spare parts.',
      ],
      ctaText: 'Schedule Solar Health Check',
    },
  ];

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter((s) => s.id === activeTab);

  const serviceFaqs = [
    {
      q: 'How much government subsidy will I receive under PM Surya Ghar Muft Bijli Yojana?',
      a: 'Under the PM Surya Ghar scheme, residential homeowners receive ₹30,000 for a 1 kW system, ₹60,000 for a 2 kW system, and a maximum of ₹78,000 for systems 3 kW and above. SolarArk manages 100% of the portal registration, DISCOM meter testing, and subsidy release directly to your bank account.',
    },
    {
      q: 'Will rooftop solar damage my terrace waterproofing or block usable space?',
      a: 'Not at all. SolarArk specializes in elevated WindPro structures (6 to 8 feet terrace clearance) using heavy-duty pre-cast concrete counterweight blocks. This guarantees zero slab penetration, zero roof leakage risk, and allows you to use your entire terrace for walking, leisure, or gardening.',
    },
    {
      q: 'How long does the turnkey installation and net-metering process take?',
      a: 'The physical rooftop installation is typically completed in 2 to 3 business days. The DISCOM net-meter inspection and bi-directional meter synchronization generally take between 10 to 20 working days depending on the local subdivision.',
    },
    {
      q: 'How does SolarArk guarantee solar generation for 25 years?',
      a: 'We use Tier-1 N-Type TOPCon bifacial modules backed by a 25-year 84.8% linear performance warranty. Our SunSure Promise™ includes live smartphone generation tracking and rapid in-house service response across all districts of Maharashtra.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 selection:bg-[#8B1E1E] selection:text-white pt-24 pb-24">
      
      {/* ── TOP CONTEXT BREADCRUMB ── */}
      <PageContextBar
        currentPage="Solar EPC Services"
        onNavigate={onNavigate}
      />

      {/* ── SECTION 01: HERO SHOWCASE (EDITORIAL & AUTHORITATIVE) ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E1E]/10 border border-[#8B1E1E]/20 text-[11px] font-extrabold text-[#8B1E1E] tracking-wider uppercase font-heading">
              <Sparkles className="w-3.5 h-3.5" />
              <span>END-TO-END SOLAR EPC SERVICES</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold tracking-tight leading-[1.10] text-[#0B1730] font-heading m-0">
                Engineered for Maximum Solar Yield.{' '}
                <span className="text-[#8B1E1E]">Tailored for Every Rooftop.</span>
              </h1>
              <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl">
                SolarArk delivers certified turnkey solar solutions for Indian homes, housing societies, commercial complexes, and industrial plants across Maharashtra.
              </p>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onCtaClick}
                className="bg-[#8B1E1E] hover:bg-[#5E1212] active:scale-[0.98] text-white font-heading font-bold px-7 py-3.5 rounded-xl shadow-md shadow-[#8B1E1E]/20 text-sm transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Book Free Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+917080909590"
                className="bg-white hover:bg-stone-50 border border-stone-200 text-slate-800 font-semibold px-5 py-3.5 rounded-xl shadow-xs transition-all inline-flex items-center gap-2 text-sm"
              >
                <PhoneCall className="w-4 h-4 text-[#8B1E1E]" />
                <span>Helpline: +91 7080909590</span>
              </a>
            </div>

            {/* Factual Proof Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-stone-200/80">
              <div className="space-y-0.5">
                <span className="text-sm font-extrabold text-[#8B1E1E] block font-heading">⚡ Up to 90%</span>
                <span className="text-xs text-stone-500">Bill Reduction</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-sm font-extrabold text-amber-600 block font-heading">₹78,000</span>
                <span className="text-xs text-stone-500">PM Surya Ghar Subsidy</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-sm font-extrabold text-emerald-600 block font-heading">25 Years</span>
                <span className="text-xs text-stone-500">Linear Power Warranty</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-sm font-extrabold text-slate-900 block font-heading">35+ MW</span>
                <span className="text-xs text-stone-500">Central India Installed</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Art Direction */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200 bg-stone-100">
              <img
                src="/images/projects/project1.jpg"
                alt="SolarArk Engineered Rooftop Solar Installation"
                className="w-full h-[360px] sm:h-[440px] object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/30 backdrop-blur-md border border-emerald-400/40 text-[10px] font-bold text-emerald-300 uppercase tracking-wider font-heading">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ISO 9001:2015 Certified EPC</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold leading-snug font-heading">
                  High-Yield N-Type Bifacial Solar Systems
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed font-normal">
                  Elevated structural clearance preserving complete usable rooftop walking and terrace leisure space.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 02: INTERACTIVE CATEGORY SELECTOR DOCK ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-12">
        <div className="bg-white rounded-2xl border border-stone-200/90 p-3 sm:p-4 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          <div className="px-2">
            <span className="text-[10px] font-extrabold text-[#8B1E1E] uppercase tracking-wider font-heading block">
              Filter Solutions
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
              Select Solar Sector
            </h2>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All Services', icon: Layers },
              { id: 'residential', label: 'Residential Homes', icon: HomeIcon },
              { id: 'society', label: 'Housing Societies', icon: Building },
              { id: 'commercial', label: 'Commercial & Industrial', icon: Factory },
              { id: 'maintenance', label: 'O&M & Telemetry', icon: Wrench },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold font-heading transition-all shrink-0 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#8B1E1E] text-white shadow-md shadow-[#8B1E1E]/20'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
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

      {/* ── SECTION 03: ELEGANT VARIABLE SERVICE SHOWCASES ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16 lg:space-y-24 mb-24">
        {filteredServices.map((srv, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div
              key={srv.id}
              id={`service-${srv.id}`}
              className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-10 lg:p-12 shadow-sm hover:border-[#8B1E1E]/30 transition-all space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Photo Side */}
                <div className={`lg:col-span-5 relative group ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-stone-100">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-[280px] sm:h-[360px] object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-3 right-4 bg-[#8B1E1E] text-white px-3.5 py-2 rounded-xl shadow-lg border-2 border-white flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                    <span className="text-xs font-bold font-heading">{srv.badge}</span>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  <div className="space-y-1.5">
                    <span className="text-xs font-extrabold text-[#8B1E1E] uppercase tracking-wider font-heading block">
                      {srv.sector}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                      {srv.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-500 font-medium">
                      {srv.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {srv.description}
                  </p>

                  {/* 4 Technical Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {srv.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 bg-[#FAF9F6] border border-stone-200/70 rounded-xl p-2.5 text-xs text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-stone-100">
                    {srv.stats.map((st, stIdx) => (
                      <div key={stIdx} className="bg-stone-50 p-2.5 rounded-xl border border-stone-200/60">
                        <div className="text-[10px] text-stone-500 font-medium">{st.label}</div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading">{st.val}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Action */}
                  <div className="pt-2 flex flex-wrap items-center gap-3.5">
                    <button
                      onClick={onCtaClick}
                      className="bg-[#8B1E1E] hover:bg-[#5E1212] text-white font-heading font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs transition-all inline-flex items-center gap-2 cursor-pointer active:scale-[0.98]"
                    >
                      <span>{srv.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href="tel:+917080909590"
                      className="text-xs sm:text-sm font-bold text-stone-700 hover:text-[#8B1E1E] bg-stone-100 hover:bg-stone-200 px-4 py-3 rounded-xl transition-colors inline-flex items-center gap-1.5"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-[#8B1E1E]" />
                      <span>Speak to Expert</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* ── SECTION 04: 4-STEP TURNKEY EXECUTION ROADMAP ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-24">
        <div className="bg-[#FCFAF7] border border-stone-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 font-heading">
              <Compass className="w-3.5 h-3.5" />
              <span>Turnkey Execution</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Zero-Friction 4-Step EPC Process
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              From site inspection to grid synchronization, our in-house engineers manage 100% of the workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#8B1E1E] font-heading font-extrabold flex items-center justify-center">
                01
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900">
                Precision 3D Site Survey
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                LiDAR laser rooftop topography scan and DISCOM feeder capacity evaluation within 30 minutes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#8B1E1E] font-heading font-extrabold flex items-center justify-center">
                02
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900">
                Custom CAD 3D Blueprint
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Shadow loss simulation and elevated structure design preserving full terrace usability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#8B1E1E] font-heading font-extrabold flex items-center justify-center">
                03
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900">
                Rapid 48-Hour Installation
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Master installers mount Tier-1 panels with zero slab penetration and concealed cabling.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 font-heading font-extrabold flex items-center justify-center">
                04
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900">
                Net-Metering &amp; Subsidy
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                DISCOM bi-directional meter activation and direct credit of ₹78,000 PM Surya Ghar subsidy.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 05: SERVICES FAQ ACCORDION ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-16">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E1E]/10 text-xs font-bold text-[#8B1E1E] font-heading">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Solar EPC Services FAQ
            </h2>
          </div>

          <div className="space-y-3">
            {serviceFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-heading text-sm sm:text-base font-bold text-slate-900 hover:text-[#8B1E1E] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#8B1E1E] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
