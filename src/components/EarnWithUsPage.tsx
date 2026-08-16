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
  ShieldCheck
} from 'lucide-react';

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
    occupation: 'Professional / Consultant',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

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
        'Earn attractive payouts on every successful residential, commercial, or society solar lead referred to SolarArk.',
    },
    {
      icon: Award,
      color: 'bg-blue-50 text-[#1D5FE0]',
      title: 'Welcome Kit & Partner ID',
      description:
        'Get official digital marketing flyers, branded visiting cards, and promotional presentation materials.',
    },
    {
      icon: BookOpen,
      color: 'bg-amber-50 text-amber-600',
      title: 'Regular Training Webinars',
      description:
        'Learn about PM Surya Ghar subsidies, solar technology, DISCOM net-metering rules, and client pitch techniques.',
    },
    {
      icon: ShieldCheck,
      color: 'bg-purple-50 text-purple-600',
      title: 'Zero Upfront Investment',
      description:
        'Join 100% free with no joining fees. SolarArk manages site surveys, engineering, installation, and after-sales.',
    },
  ];

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
            <span className="text-stone-900 font-semibold">Surya Mitra (Earn With Us)</span>
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800 font-heading">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Surya Mitra Partnership Program</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.14]">
            Become a SolarArk Surya Mitra &amp; Earn with Clean Energy
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Join our growing network of solar partners across Maharashtra. Introduce homeowners, societies, and businesses to rooftop solar and earn verified commissions on every successful installation.
          </p>
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
        
        {/* ── PROGRAM PERKS GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerPerks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-xs space-y-3 hover:border-[#1D5FE0] transition-all"
              >
                <div className={`w-11 h-11 rounded-xl ${perk.color} flex items-center justify-center font-bold`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-base font-bold text-slate-900 leading-snug">
                  {perk.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  {perk.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── HOW THE SURYA MITRA PROGRAM WORKS & REGISTRATION FORM ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Explainer Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold text-[#1D5FE0] tracking-widest uppercase font-heading">
              3 Simple Steps to Start
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How You Earn with SolarArk
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#1D5FE0] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-slate-900">Register as a Partner</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Fill out the quick partner form below. Our regional team will activate your Surya Mitra partner account and share your welcome kit.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#1D5FE0] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-slate-900">Share Interested Leads</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Connect interested homeowners, housing society committees, or business owners who want to cut electricity bills.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#1D5FE0] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-slate-900">We Install, You Get Paid</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Our master engineering team handles 3D design, DISCOM paperwork, and installation. You receive your commission directly into your bank account.
                  </p>
                </div>
              </div>
            </div>

            {/* Helpline banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 text-white space-y-2">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-heading">
                Direct Surya Mitra Helpline
              </div>
              <div className="text-base font-bold flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#1D5FE0]" />
                <span>Call or WhatsApp: +91 7080909590</span>
              </div>
              <p className="text-xs text-slate-300">
                Speak directly with our partner coordinator for onboarding assistance and bulk commercial inquiries.
              </p>
            </div>
          </div>

          {/* Right Registration Form */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-bold text-emerald-700 font-heading mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Free Instant Onboarding</span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900">
                  Join Surya Mitra Network
                </h3>
                <p className="text-xs text-stone-600">
                  Enter your details below and our team will get in touch within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-emerald-900">
                    Application Received!
                  </h4>
                  <p className="text-xs text-emerald-800">
                    Thank you for applying to the Surya Mitra Program. Our partner coordinator will call you at <strong>{formData.phone}</strong> with your onboarding kit.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-emerald-700 underline mt-2"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Deshmukh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-[#1D5FE0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-[#1D5FE0]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        City / District *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Amravati / Pune"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-[#1D5FE0]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Current Occupation *
                      </label>
                      <select
                        value={formData.occupation}
                        onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-[#1D5FE0] bg-white"
                      >
                        <option>Electrician / Technician</option>
                        <option>Real Estate / Property Consultant</option>
                        <option>Shopkeeper / Business Owner</option>
                        <option>Student / Young Professional</option>
                        <option>Civil / Electrical Contractor</option>
                        <option>Other Professional</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Additional Notes / Expected Leads (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us about the areas you cover or clients you work with..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-[#1D5FE0]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1D5FE0] hover:bg-[#1753C8] text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    <span>Submit Partner Application</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-stone-500 text-center">
                    🔒 Zero joining fee. Your details are safe with SolarArk Projects Pvt. Ltd.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
