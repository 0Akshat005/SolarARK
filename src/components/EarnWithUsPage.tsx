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
  Users,
  Award,
  Wallet,
  BookOpen,
  Send,
  Sparkles,
  PhoneCall,
  ShieldCheck,
  Building,
  Wrench,
  ShoppingBag,
  GraduationCap,
  Briefcase,
  TrendingUp,
  FileText,
  BadgeCheck,
  CreditCard,
  MessageCircle,
  HelpCircle
} from 'lucide-react';

import { PageContextBar } from './PageContextBar';

interface EarnWithUsPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
}

export const EarnWithUsPage: React.FC<EarnWithUsPageProps> = ({
  onNavigate,
  onCtaClick,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    occupation: 'Electrician / Contractor',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedKw, setSelectedKw] = useState<number>(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const partnerPerks = [
    {
      icon: Wallet,
      color: 'bg-emerald-50 text-emerald-600',
      title: 'Lucrative Commission Per kW',
      description:
        'Earn substantial payouts on every successful residential, commercial, or housing society solar lead referred to SolarArk.',
      highlight: 'Direct Bank NEFT / UPI Transfer',
    },
    {
      icon: Award,
      color: 'bg-blue-50 text-[#1D5FE0]',
      title: 'Official Welcome Kit & Partner ID',
      description:
        'Receive your official SolarArk Surya Mitra ID Card, personalized branded visiting cards, printed marketing brochures, and presentation flyers.',
      highlight: 'Full Credibility Kit Included',
    },
    {
      icon: BookOpen,
      color: 'bg-amber-50 text-amber-600',
      title: 'Regular Training Webinars',
      description:
        'Access exclusive masterclasses on PM Surya Ghar guidelines, DISCOM net-metering policies, objection handling, and customer pitch techniques.',
      highlight: 'Weekly Expert Sessions',
    },
    {
      icon: ShieldCheck,
      color: 'bg-purple-50 text-purple-600',
      title: 'Zero Upfront Investment',
      description:
        'Join 100% free with no joining fees or inventory holding. SolarArk manages site surveys, engineering, installation, and after-sales support.',
      highlight: 'Zero Financial Risk',
    },
  ];

  const whoCanJoin = [
    {
      icon: Wrench,
      role: 'Electricians & Technicians',
      desc: 'Monetize your daily site visits and electrical repair interactions with homeowners.',
    },
    {
      icon: ShoppingBag,
      role: 'Shopkeepers & Retailers',
      desc: 'Hardware, electrical, and kirana store owners can recommend solar to regular walk-in customers.',
    },
    {
      icon: Building,
      role: 'Real Estate & Society Members',
      desc: 'Connect housing society committees and new home buyers with turnkey rooftop solar EPC.',
    },
    {
      icon: Briefcase,
      role: 'Financial & Insurance Advisors',
      desc: 'Offer solar energy ROI and 40% accelerated tax depreciation advice to business clients.',
    },
    {
      icon: GraduationCap,
      role: 'Students & Sustainability Champions',
      desc: 'Earn flexible, high-income rewards while driving green renewable energy in your community.',
    },
    {
      icon: Users,
      role: 'Entrepreneurs & Freelancers',
      desc: 'Build a rewarding clean-tech consulting side-business with full backend EPC support.',
    },
  ];

  const kitItems = [
    'Official Surya Mitra ID Card & Certificate',
    'Personalized Branded Visiting Cards',
    'High-Quality Printed PM Surya Ghar Subsidy Flyers',
    'SolarArk Executive Diary, Pen & Presentation Folder',
    'Digital Pitch Decks & WhatsApp Shareable Creatives',
    'Direct Access to Dedicated Partner Relations Manager',
  ];

  // Calculate estimated commission based on kW selection
  const estimatedEarnings = selectedKw * 1500;

  return (
    <div className="pt-20 lg:pt-24 pb-20 min-h-screen bg-[#FCFAF7] text-slate-900 selection:bg-[#1D5FE0] selection:text-white">
      
      {/* ── REUSABLE INNER-PAGE TOP CONTEXT BAR ── */}
      <PageContextBar
        currentPage="Surya Mitra (Earn With Us)"
        onNavigate={onNavigate}
      />

      {/* ── SECTION 01: EDITORIAL SURYA MITRA HERO ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 lg:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7EFE9] border border-[#8B1E1E]/15 text-[11px] font-bold text-[#8B1E1E] tracking-widest uppercase font-heading">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B1E1E]" />
              <span>Official SolarArk Partnership Initiative</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Become a SolarArk Surya Mitra.<br />
              <span className="text-[#1D5FE0]">Earn with Clean Energy.</span>
            </h1>

            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl">
              Empowering individuals, electrifying communities. Join Maharashtra’s fast-growing network of Solar Ambassadors. Introduce homeowners, housing societies, and businesses to rooftop solar and earn attractive monetary rewards on every successful installation — with zero upfront capital.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#partner-form"
                className="bg-[#1D5FE0] hover:bg-[#1753C8] text-white font-bold px-7 py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>Join Surya Mitra Network</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+917080909590"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 hover:text-[#1D5FE0] bg-white border border-stone-200 px-5 py-3.5 rounded-xl transition-colors shadow-xs"
              >
                <PhoneCall className="w-4 h-4 text-[#1D5FE0]" />
                <span>Partner Helpline (7080909590)</span>
              </a>
            </div>

            {/* Quick Reassurance Pill Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-stone-200/80">
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-emerald-700 block font-heading">₹0 Joining Fee</span>
                <span className="text-[11px] text-stone-500">100% Free Signup</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-[#1D5FE0] block font-heading">Commission / kW</span>
                <span className="text-[11px] text-stone-500">Lucrative Payouts</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-[#8B1E1E] block font-heading">Welcome Kit</span>
                <span className="text-[11px] text-stone-500">ID &amp; Visiting Cards</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-slate-800 block font-heading">Direct Bank Transfer</span>
                <span className="text-[11px] text-stone-500">Fast Milestone Payout</span>
              </div>
            </div>
          </div>

          {/* Right Hero Photographic Frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-tl-[90px] sm:rounded-tl-[120px] rounded-br-3xl rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl border border-stone-200 bg-stone-100 group">
              <img
                src="/images/official-founder-desk-clean.png"
                alt="SolarArk Surya Mitra Program Leadership & Support"
                className="w-full h-[360px] sm:h-[460px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/homeowner-family-stories.jpg';
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#8B1E1E]/80 backdrop-blur-md border border-red-300/30 text-[10px] font-bold text-amber-200 uppercase tracking-wider font-heading">
                  <BadgeCheck className="w-3 h-3" />
                  <span>Certified Partner Ecosystem</span>
                </div>
                <div className="text-base sm:text-lg font-bold leading-snug">
                  Earn While Championing Maharashtra's Solar Future
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  SolarArk provides full technical, engineering, and DISCOM paperwork support so you can focus on building trust.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 02: 4 CORE PARTNER PERKS ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider font-heading block">
            Why Partner With SolarArk
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Built to Reward Your Network &amp; Effort
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerPerks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#1D5FE0] transition-all group"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-xl ${perk.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 leading-snug">
                    {perk.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {perk.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md block text-center">
                    ✓ {perk.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── SECTION 03: INTERACTIVE EARNINGS ESTIMATOR WIDGET ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 lg:mb-28">
        <div className="bg-[#0B1730] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1D5FE0]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-bold font-heading">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Partner Commission Calculator</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                How Much Can You Earn as a Surya Mitra?
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Select an average rooftop solar installation size to calculate your estimated payout on every successful client conversion.
              </p>

              {/* System Size Selector Chips */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Select Project Size:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { kw: 3, label: '3 kW (Small Home)' },
                    { kw: 5, label: '5 kW (Bungalow)' },
                    { kw: 10, label: '10 kW (Large Villa)' },
                    { kw: 25, label: '25 kW (Housing Society)' },
                    { kw: 50, label: '50 kW (Commercial Plant)' },
                  ].map((item) => (
                    <button
                      key={item.kw}
                      type="button"
                      onClick={() => setSelectedKw(item.kw)}
                      className={`text-xs px-3.5 py-2 rounded-xl font-bold border transition-all cursor-pointer ${
                        selectedKw === item.kw
                          ? 'bg-[#1D5FE0] text-white border-[#1D5FE0] shadow-md'
                          : 'bg-white/10 text-slate-200 border-white/15 hover:bg-white/20'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Earnings Output Box */}
            <div className="lg:col-span-6 bg-white/10 border border-white/15 rounded-2xl p-6 sm:p-8 backdrop-blur-md text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block font-heading">
                Estimated Partner Commission for {selectedKw} kW System
              </span>

              <div className="text-4xl sm:text-5xl font-black font-heading text-white tracking-tight">
                ₹{estimatedEarnings.toLocaleString('en-IN')}*
              </div>

              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                *Payout transferred directly to your bank account upon plant commissioning. Multiple referrals unlock quarterly milestone bonuses and higher commission slabs!
              </p>

              <div className="pt-2">
                <a
                  href="#partner-form"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg transition-all"
                >
                  <span>Register to Start Earning</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 04: WHO CAN JOIN (SECTOR MATRIX) ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 lg:mb-28">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider font-heading block">
            Who Can Join
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Ideal for Professionals, Trades &amp; Connectors
          </h2>
          <p className="text-sm text-stone-600">
            No prior solar experience required. We provide complete technical guidance and client presentation tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoCanJoin.map((profile, idx) => {
            const Icon = profile.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs flex items-start gap-4 hover:border-stone-400 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FCFAF7] border border-stone-200 text-[#1D5FE0] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900">
                    {profile.role}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {profile.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── SECTION 05: OFFICIAL WELCOME KIT BREAKDOWN ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 lg:mb-28">
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Kit Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[11px] font-bold text-amber-800 uppercase tracking-wider font-heading">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Full Professional Toolkit</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-snug">
              What You Receive in the Official Surya Mitra Welcome Kit
            </h2>

            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
              We equip every registered partner with professional marketing collateral and credentials to represent SolarArk with total confidence in your local community.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {kitItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-[#FCFAF7] border border-stone-200/80 rounded-xl p-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Photographic Representation */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-100">
              <img
                src="/images/official-founder-office-clean.png"
                alt="SolarArk Surya Mitra Welcome Kit and Materials"
                className="w-full h-[320px] sm:h-[380px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/homeowner-family-stories.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block font-heading">
                  Free Onboarding
                </span>
                <span className="text-sm font-bold block">
                  Dispatched Post Online Verification
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 06: SIMPLE 3-STEP EARNING ROADMAP ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 lg:mb-28">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider font-heading block">
            How It Works
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            3 Simple Steps to Start Earning
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-stone-200/90 rounded-2xl p-7 shadow-xs space-y-4 relative">
            <div className="w-10 h-10 rounded-full bg-[#1D5FE0] text-white font-heading font-extrabold text-sm flex items-center justify-center shadow-xs">
              01
            </div>
            <h3 className="font-heading text-lg font-bold text-slate-900">
              Register as a Partner
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              Fill out the quick online form below. Our regional team activates your Surya Mitra partner account and provides your welcome kit.
            </p>
          </div>

          <div className="bg-white border border-stone-200/90 rounded-2xl p-7 shadow-xs space-y-4 relative">
            <div className="w-10 h-10 rounded-full bg-[#1D5FE0] text-white font-heading font-extrabold text-sm flex items-center justify-center shadow-xs">
              02
            </div>
            <h3 className="font-heading text-lg font-bold text-slate-900">
              Share Solar Inquiries
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              Connect homeowners, residential societies, or business owners looking to reduce electricity bills with SolarArk via WhatsApp or call.
            </p>
          </div>

          <div className="bg-white border border-stone-200/90 rounded-2xl p-7 shadow-xs space-y-4 relative">
            <div className="w-10 h-10 rounded-full bg-[#8B1E1E] text-white font-heading font-extrabold text-sm flex items-center justify-center shadow-xs">
              03
            </div>
            <h3 className="font-heading text-lg font-bold text-slate-900">
              We Install — You Get Paid
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              Our engineering team conducts the survey, design, DISCOM paperwork, and installation. You receive your commission upon commissioning!
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 07: ONBOARDING REGISTRATION FORM ── */}
      <section id="partner-form" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 scroll-mt-28">
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 font-heading">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Instant Digital Onboarding</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Join the SolarArk Surya Mitra Network Today
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Fill out your contact details. Our regional partner coordinator in Amravati, Sambhajinagar, Wardha, or Akola will reach out within 24 hours to onboard you.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-slate-700">
                <FileText className="w-4 h-4 text-[#1D5FE0]" />
                <span>Documents Needed Later: Aadhaar / PAN + Bank Details</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700">
                <PhoneCall className="w-4 h-4 text-[#1D5FE0]" />
                <span>Direct Partner Helpline: <strong>+91 7080909590</strong></span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero registration charges or hidden fees</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#FAF9F6] p-6 sm:p-8 rounded-2xl border border-stone-200">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-xl font-extrabold text-slate-900">
                  Application Received!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                  Thank you for applying to become a SolarArk Surya Mitra! Our Partner Relations Manager will call you at <strong>{formData.phone}</strong> within 24 hours with your onboarding package.
                </p>
                <div className="pt-3">
                  <a
                    href="https://wa.me/917080909590"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat with Partner Manager on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patil"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-stone-200 text-xs font-semibold px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1D5FE0]/20"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">Mobile Number (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-stone-200 text-xs font-semibold px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1D5FE0]/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">City / District *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amravati / Sambhajinagar"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white border border-stone-200 text-xs font-semibold px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1D5FE0]/20"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">Current Profession *</label>
                    <select
                      value={formData.occupation}
                      onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                      className="w-full bg-white border border-stone-200 text-xs font-semibold px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1D5FE0]/20"
                    >
                      <option value="Electrician / Electrical Contractor">Electrician / Electrical Contractor</option>
                      <option value="Plumber / AC Technician">Plumber / AC Technician</option>
                      <option value="Shopkeeper / Retail Store Owner">Shopkeeper / Retail Store Owner</option>
                      <option value="Real Estate / Society Committee Member">Real Estate / Society Committee Member</option>
                      <option value="Financial / Insurance Advisor">Financial / Insurance Advisor</option>
                      <option value="Student / Homemaker / Freelancer">Student / Homemaker / Freelancer</option>
                      <option value="Other">Other Profession</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">Additional Notes / Experience (Optional)</label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your reach in your locality or any upcoming solar inquiries..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-white border border-stone-200 text-xs font-semibold px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1D5FE0]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1D5FE0] hover:bg-[#1753C8] text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Surya Mitra Registration</span>
                </button>

                <p className="text-[11px] text-center text-stone-500 font-medium">
                  🔒 100% Free &amp; Confidential. We will never share your personal information.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
