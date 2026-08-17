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
  Calendar,
  Check
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

    if (!fullName.trim() || fullName.trim().length < 3) {
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
      className={`relative w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20 overflow-hidden ${className}`}
    >
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* ── LEFT COLUMN: REFINED EDITORIAL VALUE PROPOSITION ── */}
        <div className="lg:col-span-6 space-y-7">
          
          <div className="space-y-4">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E1E]/10 border border-[#8B1E1E]/15 text-xs font-bold text-[#8B1E1E] tracking-wider uppercase font-heading">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Zero Upfront Obligation</span>
            </div>

            {/* Display Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B1730] font-heading tracking-tight leading-[1.12] m-0">
              Claim Your Free <br />
              <span className="text-[#8B1E1E]">Solar Savings Estimate</span> <br />
              &amp; 3D Roof Design
            </h2>

            {/* Clean, Readable Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-lg m-0">
              Our certified solar engineers will prepare a customized 3D solar layout proposal and official DISCOM subsidy eligibility report for your roof.
            </p>
          </div>

          {/* Clean Unified Trust Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3.5 pt-1">
            <div className="bg-white border border-stone-200/90 rounded-2xl p-3.5 shadow-2xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 text-[#8B1E1E] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="leading-tight">
                <div className="text-xs font-bold text-slate-900 font-heading">100% Free</div>
                <div className="text-[11px] text-stone-500 font-medium">No obligation</div>
              </div>
            </div>

            <div className="bg-white border border-stone-200/90 rounded-2xl p-3.5 shadow-2xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <div className="text-xs font-bold text-slate-900 font-heading">Data Privacy</div>
                <div className="text-[11px] text-stone-500 font-medium">100% confidential</div>
              </div>
            </div>

            <div className="bg-white border border-stone-200/90 rounded-2xl p-3.5 shadow-2xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <div className="text-xs font-bold text-slate-900 font-heading">24–48 Hours</div>
                <div className="text-[11px] text-stone-500 font-medium">Report delivery</div>
              </div>
            </div>

            <div className="bg-white border border-stone-200/90 rounded-2xl p-3.5 shadow-2xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <div className="text-xs font-bold text-slate-900 font-heading">Certified Team</div>
                <div className="text-[11px] text-stone-500 font-medium">SolarArk engineers</div>
              </div>
            </div>
          </div>

          {/* Clean 3D Proposal Deliverable Card */}
          <div className="bg-gradient-to-r from-stone-900 via-slate-900 to-slate-950 text-white rounded-2xl p-4 sm:p-5 shadow-lg border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
              <img
                src="/images/thumb-3d-solar-house.png"
                alt="3D Solar house model"
                className="w-9 h-9 object-contain filter drop-shadow-md"
              />
            </div>
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-amber-400 font-heading uppercase tracking-wide">
                Includes PM Surya Ghar Subsidy Filing
              </div>
              <p className="text-xs sm:text-[13px] text-slate-200 leading-snug">
                Receive your 3D CAD design, payback ROI calculations, and ₹78,000 subsidy claim assistance.
              </p>
            </div>
          </div>

        </div>

        {/* ── RIGHT COLUMN: HIGH-CONVERTING STEPPER FORM ── */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-stone-200/90 shadow-xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          
          {/* STEPPER HEADER */}
          <div className="relative mb-8 pb-6 border-b border-stone-100">
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
                <span className={`text-[11px] font-bold font-heading ${step >= 1 ? 'text-[#8B1E1E]' : 'text-stone-400'}`}>
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
                <span className={`text-[11px] font-bold font-heading ${step >= 2 ? 'text-[#8B1E1E]' : 'text-stone-400'}`}>
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
                <span className={`text-[11px] font-bold font-heading ${step === 3 ? 'text-emerald-700' : 'text-stone-400'}`}>
                  Confirmation
                </span>
              </div>
            </div>
          </div>

          {/* ── STEP 1: ROOF LOCATION & BILL ── */}
          {step === 1 && (
            <form onSubmit={handleStep1Continue} className="space-y-6 flex-1 flex flex-col justify-between">
              
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-base">
                  <MapPin className="w-4 h-4 text-[#8B1E1E]" />
                  <span>Tell us about your rooftop</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Field 1: 6-Digit Pincode */}
                  <div className="space-y-1.5">
                    <label htmlFor="pincode-input" className="block text-xs font-bold text-slate-800 font-heading">
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
                        placeholder="e.g. 444605"
                        className="w-full pl-10 pr-4 py-3 bg-stone-50/80 border border-stone-300 focus:border-[#8B1E1E] focus:bg-white text-slate-900 text-sm font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 transition-all font-mono"
                      />
                    </div>
                    {pincodeError && <p className="text-[11px] text-red-600 font-medium">{pincodeError}</p>}
                  </div>

                  {/* Field 2: Average Monthly Power Bill */}
                  <div className="space-y-1.5">
                    <label htmlFor="bill-select" className="block text-xs font-bold text-slate-800 font-heading">
                      Average Monthly Electricity Bill (₹)
                    </label>
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
                        <option value="₹20,000+ / month (Commercial / Society)">₹20,000+ / month (Commercial / Society)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section: Rooftop Structure Type */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 font-heading">
                    <span>Rooftop Structure Type</span>
                    <span className="text-red-500">*</span>
                  </div>

                  <div role="radiogroup" aria-label="Rooftop Structure Type" className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      role="radio"
                      aria-checked={roofType === 'concrete'}
                      onClick={() => setRoofType('concrete')}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                        roofType === 'concrete'
                          ? 'border-[#8B1E1E] bg-[#8B1E1E]/5 text-[#8B1E1E] shadow-2xs font-bold'
                          : 'border-stone-200 bg-stone-50/50 hover:bg-stone-50 text-slate-700 font-medium'
                      }`}
                    >
                      <Building2 className="w-5 h-5" />
                      <span className="text-xs font-heading">Flat RCC Roof</span>
                    </button>

                    <button
                      type="button"
                      role="radio"
                      aria-checked={roofType === 'tin'}
                      onClick={() => setRoofType('tin')}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                        roofType === 'tin'
                          ? 'border-[#8B1E1E] bg-[#8B1E1E]/5 text-[#8B1E1E] shadow-2xs font-bold'
                          : 'border-stone-200 bg-stone-50/50 hover:bg-stone-50 text-slate-700 font-medium'
                      }`}
                    >
                      <Warehouse className="w-5 h-5" />
                      <span className="text-xs font-heading">Metal Shed</span>
                    </button>

                    <button
                      type="button"
                      role="radio"
                      aria-checked={roofType === 'tiled'}
                      onClick={() => setRoofType('tiled')}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                        roofType === 'tiled'
                          ? 'border-[#8B1E1E] bg-[#8B1E1E]/5 text-[#8B1E1E] shadow-2xs font-bold'
                          : 'border-stone-200 bg-stone-50/50 hover:bg-stone-50 text-slate-700 font-medium'
                      }`}
                    >
                      <Grid3X3 className="w-5 h-5" />
                      <span className="text-xs font-heading">Tiled Slope</span>
                    </button>
                  </div>
                </div>

              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-stone-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>PM Surya Ghar Eligible</span>
                </div>

                <button
                  type="submit"
                  className="bg-[#8B1E1E] hover:bg-[#5E1212] active:scale-[0.98] text-white font-heading font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md shadow-[#8B1E1E]/20 transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Continue to Step 2</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

          {/* ── STEP 2: CONTACT DETAILS ── */}
          {step === 2 && (
            <form onSubmit={handleStep2Submit} className="space-y-6 flex-1 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-base">
                    <PhoneCall className="w-4 h-4 text-[#8B1E1E]" />
                    <span>Where should we send your report?</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-bold text-stone-500 hover:text-[#8B1E1E] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                </div>

                {/* Full Name */}
                <div className="space-y-1">
                  <label htmlFor="fullname-input" className="block text-xs font-bold text-slate-800 font-heading">
                    Full Name *
                  </label>
                  <input
                    id="fullname-input"
                    type="text"
                    placeholder="e.g. Anand Kulkarni"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (nameError) setNameError('');
                    }}
                    className="w-full px-4 py-3 bg-stone-50/80 border border-stone-300 focus:border-[#8B1E1E] focus:bg-white text-slate-900 text-sm font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 transition-all"
                  />
                  {nameError && <p className="text-xs text-red-600 font-medium">{nameError}</p>}
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-1">
                  <label htmlFor="phone-input" className="block text-xs font-bold text-slate-800 font-heading">
                    WhatsApp Number *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-500">
                      +91
                    </span>
                    <input
                      id="phone-input"
                      type="tel"
                      maxLength={10}
                      placeholder="9876543210"
                      value={whatsappNumber}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        setWhatsappNumber(val);
                        if (phoneError) setPhoneError('');
                      }}
                      className="w-full pl-12 pr-4 py-3 bg-stone-50/80 border border-stone-300 focus:border-[#8B1E1E] focus:bg-white text-slate-900 text-sm font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 transition-all"
                    />
                  </div>
                  {phoneError && <p className="text-xs text-red-600 font-medium">{phoneError}</p>}
                </div>

                {/* Preferred Consultation Time */}
                <div className="space-y-1">
                  <label htmlFor="time-select" className="block text-xs font-bold text-slate-800 font-heading">
                    Preferred Callback Window
                  </label>
                  <select
                    id="time-select"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 bg-stone-50/80 border border-stone-300 focus:border-[#8B1E1E] focus:bg-white text-slate-900 text-sm font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 transition-all cursor-pointer"
                  >
                    <option>Morning (10 AM – 1 PM)</option>
                    <option>Afternoon (1 PM – 5 PM)</option>
                    <option>Evening (5 PM – 8 PM)</option>
                  </select>
                </div>

              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-bold text-stone-600 hover:text-slate-900"
                >
                  ← Edit Rooftop Details
                </button>

                <button
                  type="submit"
                  className="bg-[#8B1E1E] hover:bg-[#5E1212] active:scale-[0.98] text-white font-heading font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-md shadow-[#8B1E1E]/20 transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Submit &amp; Get 3D Design</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

          {/* ── STEP 3: INSTANT CONFIRMATION ── */}
          {step === 3 && (
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1.5 max-w-md mx-auto">
                <h3 className="font-heading text-2xl font-bold text-slate-900">
                  Solar Proposal Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Thank you <strong>{fullName}</strong>. Our certified solar engineering desk for pincode <strong>{pincode}</strong> will generate your custom 3D rooftop CAD layout and send it to <strong>+91 {whatsappNumber}</strong> within 24–48 hours.
                </p>
              </div>

              <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-4 text-xs text-stone-600 space-y-1 max-w-sm mx-auto">
                <div className="font-bold text-slate-800">Your Booking Reference:</div>
                <div className="font-mono text-sm font-bold text-[#8B1E1E]">
                  SLR-ARK-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-bold text-[#8B1E1E] hover:underline pt-2 cursor-pointer"
              >
                Submit another request
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
