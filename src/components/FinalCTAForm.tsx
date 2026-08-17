/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ShieldCheck,
  Lock,
  Users,
  MapPin,
  FileText,
  Building2,
  Warehouse,
  Grid3X3,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ReceiptText,
  Info,
  IndianRupee,
  TrendingUp,
  Wrench,
  Star,
  PhoneCall,
  Calendar
} from 'lucide-react';

export interface FinalCTAFormProps {
  prefilledPincode?: string;
  prefilledBill?: number;
  className?: string;
}

export const FinalCTAForm: React.FC<FinalCTAFormProps> = ({
  prefilledPincode = '560034',
  prefilledBill = 8500,
  className = '',
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [pincode, setPincode] = useState<string>(prefilledPincode || '560034');
  const [monthlyBill, setMonthlyBill] = useState<string>(
    prefilledBill ? `₹${prefilledBill.toLocaleString('en-IN')} / month` : '₹8,500 / month (3–4 BHK)'
  );
  const [roofType, setRoofType] = useState<'concrete' | 'tin' | 'tiled'>('concrete');
  
  // Step 2 Fields
  const [fullName, setFullName] = useState<string>('');
  const [whatsappNumber, setWhatsappNumber] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('Morning (10 AM - 1 PM)');
  
  // Validation errors
  const [pincodeError, setPincodeError] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

  useEffect(() => {
    if (prefilledPincode) setPincode(prefilledPincode);
  }, [prefilledPincode]);

  const handleStep1Continue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode || pincode.length !== 6 || !/^\d{6}$/.test(pincode)) {
      setPincodeError('Please enter a valid 6-digit Indian pincode');
      return;
    }
    setPincodeError('');
    setStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (!fullName.trim()) {
      setNameError('Please enter your full name');
      hasError = true;
    } else {
      setNameError('');
    }

    if (!whatsappNumber || !/^\d{10}$/.test(whatsappNumber.replace(/\D/g, ''))) {
      setPhoneError('Please enter a valid 10-digit WhatsApp number');
      hasError = true;
    } else {
      setPhoneError('');
    }

    if (hasError) return;
    setStep(3);
  };

  return (
    <section
      id="contact-form"
      className={`relative w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 py-12 overflow-hidden ${className}`}
    >
      {/* ── ATMOSPHERIC SOLAR-HOME VISUAL LAYER (EMERGING FROM BACKGROUND & DISSOLVING TOWARD FORM) ── */}
      <div
        aria-hidden="true"
        className="absolute left-0 bottom-[130px] lg:bottom-[90px] w-full lg:w-[65%] h-[380px] sm:h-[440px] lg:h-[500px] pointer-events-none z-0 select-none overflow-visible"
      >
        {/* Soft Ambient Golden Atmospheric Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/15 via-amber-200/8 to-transparent rounded-full blur-3xl" />

        {/* Real Seamless Multi-Gradient Masked Photographic Scene */}
        <div
          className="relative w-full h-full"
          style={{
            WebkitMaskImage:
              'radial-gradient(ellipse 95% 85% at 38% 50%, black 35%, rgba(0,0,0,0.85) 58%, rgba(0,0,0,0.3) 78%, transparent 98%), linear-gradient(to right, black 0%, black 36%, rgba(0,0,0,0.75) 62%, rgba(0,0,0,0.2) 82%, transparent 96%), linear-gradient(to bottom, transparent 0%, black 12%, black 76%, transparent 100%)',
            maskImage:
              'radial-gradient(ellipse 95% 85% at 38% 50%, black 35%, rgba(0,0,0,0.85) 58%, rgba(0,0,0,0.3) 78%, transparent 98%), linear-gradient(to right, black 0%, black 36%, rgba(0,0,0,0.75) 62%, rgba(0,0,0,0.2) 82%, transparent 96%), linear-gradient(to bottom, transparent 0%, black 12%, black 76%, transparent 100%)',
            WebkitMaskComposite: 'source-in',
            maskComposite: 'intersect',
          }}
        >
          <img
            src="/images/solar-villa-sunset.jpg"
            alt=""
            className="w-full h-full object-cover object-left-center"
          />
        </div>
      </div>

      {/* ── TWO-COLUMN FOREGROUND CONTAINER ── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* ── LEFT COLUMN: VISUAL & TRUST PANEL (~48%) ── */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          
          <div className="space-y-4">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50/95 border border-amber-200/80 text-amber-700 text-xs font-bold font-heading shadow-2xs backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#E27D16]" />
              <span>Zero Upfront Obligation</span>
            </div>

            {/* Display Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B1730] font-heading tracking-tight leading-[1.15] m-0">
              Claim Your Free <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(100deg, #5E1212 0%, #8B1E1E 45%, #E27D16 100%)',
                }}
              >
                Solar Savings Estimate
              </span> <br />
              &amp; 3D Roof Design
            </h2>

            {/* Subhead with maroon bold highlights */}
            <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed max-w-lg m-0">
              Our certified engineers will prepare an exact{' '}
              <strong className="text-[#8B1E1E] font-semibold">3D solar proposal</strong>{' '}
              and{' '}
              <strong className="text-[#8B1E1E] font-semibold">
                DISCOM subsidy eligibility report
              </strong>{' '}
              for your roof.
            </p>

            {/* Trust Row (3 Items Horizontal) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              {/* 100% Free */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[#8B1E1E]/10 border border-[#8B1E1E]/20 flex items-center justify-center text-[#8B1E1E] shadow-2xs backdrop-blur-xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-800 leading-tight">
                  100% Free <br />
                  <span className="text-[11px] font-normal text-slate-500">&amp; No Obligation</span>
                </div>
              </div>

              {/* Secure */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shadow-2xs backdrop-blur-xs">
                  <Lock className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-800 leading-tight">
                  Your Data <br />
                  <span className="text-[11px] font-normal text-slate-500">is Secure</span>
                </div>
              </div>

              {/* Certified Engineers */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[#8B1E1E]/10 border border-[#8B1E1E]/20 flex items-center justify-center text-[#8B1E1E] shadow-2xs backdrop-blur-xs">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-800 leading-tight">
                  Certified <br />
                  <span className="text-[11px] font-normal text-slate-500">Engineers</span>
                </div>
              </div>
            </div>

          </div>

          {/* Spacer & Overlaid 3D Estimate Caption Card with Independent Floating Curved Arrow */}
          <div className="pt-20 sm:pt-28 lg:pt-32 relative">
            <div className="relative inline-flex items-center gap-3.5 bg-slate-950/85 backdrop-blur-md text-white border border-white/15 rounded-2xl p-3 sm:p-3.5 shadow-2xl max-w-md z-10">
              {/* Clean borderless 3D Model Thumbnail Blend */}
              <div className="w-11 h-11 shrink-0 overflow-hidden flex items-center justify-center filter drop-shadow-md">
                <img
                  src="/images/thumb-3d-solar-house.png"
                  alt="3D Solar house model"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-xs sm:text-[13px] leading-snug flex-1">
                <span>Get a 3D model, savings estimate &amp; subsidy report in </span>
                <strong className="text-amber-400 font-extrabold">24–48 hours</strong>
              </div>
            </div>

            {/* Creative Independent Floating Curved Arrow (Pointing dynamically toward the form) */}
            <div className="hidden lg:block absolute left-[370px] -bottom-2 pointer-events-none z-20">
              <svg width="110" height="60" viewBox="0 0 110 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-xs">
                {/* Dynamic Arcing Path */}
                <path
                  d="M4 46C35 46 65 38 96 10"
                  stroke="#E27D16"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="5 3"
                />
                {/* Arrowhead Pointing Up-Right into the Form */}
                <path
                  d="M80 8L98 9L95 27"
                  stroke="#E27D16"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

        </div>

        {/* ── RIGHT COLUMN: FORM PANEL (~52%) ── */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-stone-200/90 shadow-xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          
          {/* STEPPER HEADER */}
          <div className="relative mb-8 pb-6 border-b border-stone-100">
            {/* Connecting Track */}
            <div className="absolute top-4 left-[15%] right-[15%] h-[2px] bg-stone-200 z-0" />
            <div
              className="absolute top-4 left-[15%] h-[2px] bg-[#8B1E1E] transition-all duration-500 z-0"
              style={{
                width: step === 1 ? '0%' : step === 2 ? '50%' : '100%',
              }}
            />

            <div className="relative z-10 flex items-center justify-between">
              {/* Step 1 */}
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-heading font-extrabold text-xs transition-colors ${
                    step >= 1
                      ? 'bg-[#8B1E1E] text-white shadow-xs ring-4 ring-[#8B1E1E]/15'
                      : 'bg-stone-100 text-stone-400'
                  }`}
                  aria-current={step === 1 ? 'step' : undefined}
                >
                  1
                </div>
                <span className={`text-[11px] font-bold ${step >= 1 ? 'text-[#8B1E1E]' : 'text-stone-400'}`}>
                  Roof Location
                </span>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-heading font-extrabold text-xs transition-colors ${
                    step >= 2
                      ? 'bg-[#8B1E1E] text-white shadow-xs ring-4 ring-[#8B1E1E]/15'
                      : 'bg-stone-100 text-stone-400'
                  }`}
                  aria-current={step === 2 ? 'step' : undefined}
                >
                  2
                </div>
                <span className={`text-[11px] font-bold ${step >= 2 ? 'text-[#8B1E1E]' : 'text-stone-400'}`}>
                  Contact Details
                </span>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-heading font-extrabold text-xs transition-colors ${
                    step === 3
                      ? 'bg-emerald-600 text-white shadow-xs ring-4 ring-emerald-500/15'
                      : 'bg-stone-100 text-stone-400'
                  }`}
                  aria-current={step === 3 ? 'step' : undefined}
                >
                  3
                </div>
                <span className={`text-[11px] font-bold ${step === 3 ? 'text-emerald-700' : 'text-stone-400'}`}>
                  Confirm &amp; Submit
                </span>
              </div>
            </div>
          </div>

          {/* ── STEP 1: ROOF LOCATION & BILL ── */}
          {step === 1 && (
            <form onSubmit={handleStep1Continue} className="space-y-6 flex-1 flex flex-col justify-between">
              
              <div className="space-y-5">
                
                {/* Section Title */}
                <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-base">
                  <MapPin className="w-4 h-4 text-[#8B1E1E]" />
                  <span>Tell us about your roof</span>
                </div>

                {/* 2-Column Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Field 1: 6-Digit Pincode */}
                  <div className="space-y-1.5">
                    <label htmlFor="pincode-input" className="block text-xs font-bold text-slate-800">
                      6-Digit Pincode <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <MapPin className="w-4 h-4 text-[#8B1E1E]" />
                      </div>
                      <input
                        id="pincode-input"
                        type="text"
                        maxLength={6}
                        value={pincode}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          setPincode(val);
                          if (val.length === 6) setPincodeError('');
                        }}
                        placeholder="e.g. 560034"
                        className="w-full pl-10 pr-4 py-3 bg-stone-50/80 border border-stone-300 focus:border-[#8B1E1E] focus:bg-white text-slate-900 text-sm font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 transition-all font-mono"
                      />
                    </div>
                    {pincodeError && <p className="text-[11px] text-red-600 font-medium">{pincodeError}</p>}
                  </div>

                  {/* Field 2: Average Monthly Power Bill */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="bill-select" className="block text-xs font-bold text-slate-800">
                        Average Monthly Power Bill (₹)
                      </label>
                      <Info className="w-3.5 h-3.5 text-slate-400 cursor-help" title="Used to calculate required solar kW capacity" />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <ReceiptText className="w-4 h-4 text-[#8B1E1E]" />
                      </div>
                      <select
                        id="bill-select"
                        value={monthlyBill}
                        onChange={(e) => setMonthlyBill(e.target.value)}
                        className="w-full pl-10 pr-8 py-3 bg-stone-50/80 border border-stone-300 focus:border-[#8B1E1E] focus:bg-white text-slate-900 text-sm font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 transition-all appearance-none cursor-pointer"
                      >
                        <option value="₹2,500 / month (1–2 BHK)">₹2,500 / month (1–2 BHK)</option>
                        <option value="₹5,000 / month (2–3 BHK)">₹5,000 / month (2–3 BHK)</option>
                        <option value="₹8,500 / month (3–4 BHK)">₹8,500 / month (3–4 BHK)</option>
                        <option value="₹12,000 / month (4+ BHK / Villa)">₹12,000 / month (4+ BHK / Villa)</option>
                        <option value="₹20,000+ / month (Commercial / Estate)">₹20,000+ / month (Commercial / Estate)</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                        ▼
                      </div>
                    </div>
                  </div>

                </div>

                {/* Section: Rooftop Structure Type */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                    <span>Rooftop Structure Type</span>
                    <span className="text-red-500">*</span>
                    <Info className="w-3 h-3 text-slate-400" />
                  </div>

                  {/* 3 Selectable Radio Cards */}
                  <div
                    role="radiogroup"
                    aria-label="Rooftop Structure Type"
                    className="grid grid-cols-3 gap-3"
                  >
                    {/* 1. Concrete Slab */}
                    <button
                      type="button"
                      role="radio"
                      aria-checked={roofType === 'concrete'}
                      onClick={() => setRoofType('concrete')}
                      className={`relative flex flex-col items-center text-center p-3.5 rounded-2xl border-2 transition-all cursor-pointer ${
                        roofType === 'concrete'
                          ? 'border-[#8B1E1E] bg-[#8B1E1E]/5 text-[#8B1E1E] shadow-2xs'
                          : 'border-stone-200/90 bg-white hover:border-stone-300 text-slate-700'
                      }`}
                    >
                      <Building2 className="w-6 h-6 mb-2 stroke-[1.8]" />
                      <span className="text-xs font-bold leading-tight">
                        Concrete Slab <br />
                        <span className="text-[10px] font-medium text-slate-500">(RCC)</span>
                      </span>
                      {roofType === 'concrete' && (
                        <div className="w-4 h-4 rounded-full bg-[#8B1E1E] text-white flex items-center justify-center text-[10px] mt-1.5 shadow-xs">
                          ✓
                        </div>
                      )}
                    </button>

                    {/* 2. Tin / Metal Sheet */}
                    <button
                      type="button"
                      role="radio"
                      aria-checked={roofType === 'tin'}
                      onClick={() => setRoofType('tin')}
                      className={`relative flex flex-col items-center text-center p-3.5 rounded-2xl border-2 transition-all cursor-pointer ${
                        roofType === 'tin'
                          ? 'border-[#8B1E1E] bg-[#8B1E1E]/5 text-[#8B1E1E] shadow-2xs'
                          : 'border-stone-200/90 bg-white hover:border-stone-300 text-slate-700'
                      }`}
                    >
                      <Warehouse className="w-6 h-6 mb-2 stroke-[1.8]" />
                      <span className="text-xs font-bold leading-tight">
                        Tin / <br />
                        <span className="text-[10px] font-medium text-slate-500">Metal Sheet</span>
                      </span>
                      {roofType === 'tin' && (
                        <div className="w-4 h-4 rounded-full bg-[#8B1E1E] text-white flex items-center justify-center text-[10px] mt-1.5 shadow-xs">
                          ✓
                        </div>
                      )}
                    </button>

                    {/* 3. Tiled / Slanted Roof */}
                    <button
                      type="button"
                      role="radio"
                      aria-checked={roofType === 'tiled'}
                      onClick={() => setRoofType('tiled')}
                      className={`relative flex flex-col items-center text-center p-3.5 rounded-2xl border-2 transition-all cursor-pointer ${
                        roofType === 'tiled'
                          ? 'border-[#8B1E1E] bg-[#8B1E1E]/5 text-[#8B1E1E] shadow-2xs'
                          : 'border-stone-200/90 bg-white hover:border-stone-300 text-slate-700'
                      }`}
                    >
                      <Grid3X3 className="w-6 h-6 mb-2 stroke-[1.8]" />
                      <span className="text-xs font-bold leading-tight">
                        Tiled / <br />
                        <span className="text-[10px] font-medium text-slate-500">Slanted Roof</span>
                      </span>
                      {roofType === 'tiled' && (
                        <div className="w-4 h-4 rounded-full bg-[#8B1E1E] text-white flex items-center justify-center text-[10px] mt-1.5 shadow-xs">
                          ✓
                        </div>
                      )}
                    </button>
                  </div>
                </div>

              </div>

              {/* Bottom CTA & Micro-Trust */}
              <div className="space-y-3 pt-4">
                <button
                  type="submit"
                  className="w-full text-white font-bold py-3.5 sm:py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:opacity-95 active:scale-[0.99]"
                  style={{
                    backgroundImage:
                      'linear-gradient(100deg, #5E1212 0%, #8B1E1E 55%, #E27D16 100%)',
                  }}
                >
                  <span>Continue to Step 2</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 text-center">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>We never share your information with anyone.</span>
                </div>
              </div>

            </form>
          )}

          {/* ── STEP 2: CONTACT DETAILS & APPOINTMENT ── */}
          {step === 2 && (
            <form onSubmit={handleStep2Submit} className="space-y-5 flex-1 flex flex-col justify-between animate-fadeIn">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-base">
                    <Users className="w-4 h-4 text-[#8B1E1E]" />
                    <span>Your Contact Details</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-stone-500 hover:text-[#8B1E1E] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                </div>

                {/* Full Name */}
                <div className="space-y-1">
                  <label htmlFor="fullname-input" className="block text-xs font-bold text-slate-800">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullname-input"
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (e.target.value.trim()) setNameError('');
                    }}
                    placeholder="e.g. Rajesh Patil"
                    className="w-full px-4 py-3 bg-stone-50/80 border border-stone-300 focus:border-[#8B1E1E] focus:bg-white text-slate-900 text-sm font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 transition-all"
                  />
                  {nameError && <p className="text-[11px] text-red-600">{nameError}</p>}
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-1">
                  <label htmlFor="whatsapp-input" className="block text-xs font-bold text-slate-800">
                    WhatsApp Number (for 3D Layout PDF) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-xs font-bold text-slate-500">
                      +91
                    </span>
                    <input
                      id="whatsapp-input"
                      type="tel"
                      maxLength={10}
                      value={whatsappNumber}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        setWhatsappNumber(val);
                        if (val.length === 10) setPhoneError('');
                      }}
                      placeholder="9876543210"
                      className="w-full pl-12 pr-4 py-3 bg-stone-50/80 border border-stone-300 focus:border-[#8B1E1E] focus:bg-white text-slate-900 text-sm font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 transition-all font-mono"
                    />
                  </div>
                  {phoneError && <p className="text-[11px] text-red-600">{phoneError}</p>}
                </div>

                {/* Preferred Survey Slot */}
                <div className="space-y-1">
                  <label htmlFor="time-select" className="block text-xs font-bold text-slate-800">
                    Preferred Site Survey Time Window
                  </label>
                  <div className="relative">
                    <select
                      id="time-select"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-4 py-3 bg-stone-50/80 border border-stone-300 focus:border-[#8B1E1E] focus:bg-white text-slate-900 text-sm font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 transition-all cursor-pointer"
                    >
                      <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                      <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                      <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                      <option value="Weekend Special Slot">Weekend Special Slot</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Submit CTA */}
              <div className="space-y-3 pt-3">
                <button
                  type="submit"
                  className="w-full text-white font-bold py-3.5 sm:py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:opacity-95 active:scale-[0.99]"
                  style={{
                    backgroundImage:
                      'linear-gradient(100deg, #5E1212 0%, #8B1E1E 55%, #E27D16 100%)',
                  }}
                >
                  <span>Submit &amp; Generate 3D Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 text-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Free DISCOM Subsidy Eligibility Check Included</span>
                </div>
              </div>

            </form>
          )}

          {/* ── STEP 3: CONFIRMATION & SUCCESS ── */}
          {step === 3 && (
            <div className="text-center py-8 space-y-6 flex-1 flex flex-col items-center justify-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-sm">
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900">
                  Request Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Thank you, <strong className="text-slate-900">{fullName || 'Valued Customer'}</strong>! Our certified solar engineer is preparing your personalized 3D proposal for pincode{' '}
                  <strong className="text-[#8B1E1E] font-mono">{pincode}</strong>.
                </p>
              </div>

              <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-4 text-left w-full max-w-sm space-y-2 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Structure:</span>
                  <span className="font-bold capitalize">{roofType} Slab</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Bill Tier:</span>
                  <span className="font-bold">{monthlyBill}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">WhatsApp Delivery:</span>
                  <span className="font-bold font-mono">+91 {whatsappNumber}</span>
                </div>
              </div>

              <a
                href="tel:+917080909590"
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#8B1E1E] hover:bg-[#6E1616] px-5 py-3 rounded-xl shadow-md transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call SolarArk Desk (7080909590)</span>
              </a>
            </div>
          )}

        </div>

      </div>

      {/* ── 3. BOTTOM BENEFITS STRIP (4 ITEMS FULL-WIDTH - PREMIUM GLASSMORPHISM) ── */}
      <div className="relative z-20 mt-10 bg-white/45 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(15,23,42,0.05)] rounded-3xl p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Benefit 1: Accurate 3D Roof Design */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-xs flex items-center justify-center text-[#8B1E1E] shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4 className="font-heading text-sm font-bold text-slate-900 leading-tight">
                Accurate 3D Roof Design
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                High precision proposal for your roof
              </p>
            </div>
          </div>

          {/* Benefit 2: Max Subsidy Benefit */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-xs flex items-center justify-center text-emerald-600 shrink-0">
              <IndianRupee className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4 className="font-heading text-sm font-bold text-slate-900 leading-tight">
                Max Subsidy Benefit
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                We help you get maximum DISCOM subsidy
              </p>
            </div>
          </div>

          {/* Benefit 3: Save Up to 90% */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-xs flex items-center justify-center text-[#8B1E1E] shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4 className="font-heading text-sm font-bold text-slate-900 leading-tight">
                Save Up to 90%
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                Slash your electricity bills for 25+ years
              </p>
            </div>
          </div>

          {/* Benefit 4: End-to-End Support */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-xs flex items-center justify-center text-amber-600 shrink-0">
              <Wrench className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4 className="font-heading text-sm font-bold text-slate-900 leading-tight">
                End-to-End Support
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                From paperwork to installation &amp; beyond
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── 4. BOTTOM SOCIAL-PROOF LINE ── */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-slate-700 text-center">
        <span className="text-amber-500 text-base">🌿</span>
        <span className="text-slate-900 font-extrabold">5000+ Happy Customers</span>
        
        <div className="flex items-center gap-0.5 text-amber-400 px-1">
          <Star className="w-4 h-4 fill-amber-400" />
          <Star className="w-4 h-4 fill-amber-400" />
          <Star className="w-4 h-4 fill-amber-400" />
          <Star className="w-4 h-4 fill-amber-400" />
          <Star className="w-4 h-4 fill-amber-400" />
        </div>

        <span className="text-slate-900 font-extrabold">4.8/5 (Google Reviews)</span>
        <span className="text-amber-500 text-base">🌿</span>
      </div>

    </section>
  );
};
