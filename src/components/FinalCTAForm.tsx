/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LeadFormData } from '../types';
import { ArrowRight, CheckCircle2, ShieldCheck, Phone, Calendar, Sparkles } from 'lucide-react';
import { formatINR } from '../utils/calculator';

interface FinalCTAFormProps {
  prefilledPincode?: string;
  prefilledBill?: number;
}

export const FinalCTAForm: React.FC<FinalCTAFormProps> = ({ prefilledPincode, prefilledBill }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<LeadFormData>({
    pincode: prefilledPincode || '560034',
    monthlyBill: prefilledBill || 8500,
    fullName: '',
    whatsappNumber: '',
    roofType: 'Concrete Slab (RCC)',
    preferredSurveyTime: 'Morning (10 AM - 1 PM)',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (prefilledPincode) {
      setFormData((prev) => ({ ...prev, pincode: prefilledPincode }));
    }
    if (prefilledBill) {
      setFormData((prev) => ({ ...prev, monthlyBill: prefilledBill }));
    }
  }, [prefilledPincode, prefilledBill]);

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.pincode || formData.pincode.length !== 6 || !/^\d+$/.test(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid 6-digit Indian pincode';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (
      !formData.whatsappNumber ||
      formData.whatsappNumber.length !== 10 ||
      !/^\d+$/.test(formData.whatsappNumber)
    ) {
      newErrors.whatsappNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep(3); // Confirmation
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1D5FE0] text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-[#FFB020]" />
            <span>Zero Upfront Obligation</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Claim Your Free Solar Savings Estimate & 3D Roof Design
          </h2>

          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Our certified engineers will prepare an exact 3D solar proposal and DISCOM subsidy eligibility report for your roof.
          </p>
        </div>

        {/* Multi-Step Lead Box */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-elevation-2 space-y-8">
          
          {/* Progress Indicators */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-6 text-xs font-bold font-heading">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#1D5FE0]' : 'text-slate-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-[#1D5FE0] text-white' : 'bg-slate-200'}`}>
                1
              </span>
              <span>1. Roof Location</span>
            </div>

            <div className="w-12 h-0.5 bg-slate-200 hidden sm:block" />

            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#1D5FE0]' : 'text-slate-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-[#1D5FE0] text-white' : 'bg-slate-200'}`}>
                2
              </span>
              <span>2. Contact Details</span>
            </div>

            <div className="w-12 h-0.5 bg-slate-200 hidden sm:block" />

            <div className={`flex items-center gap-2 ${step === 3 ? 'text-[#10B981]' : 'text-slate-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 3 ? 'bg-[#10B981] text-white' : 'bg-slate-200'}`}>
                3
              </span>
              <span>3. Confirmed</span>
            </div>
          </div>

          {/* STEP 1: Pincode & Bill Input */}
          {step === 1 && (
            <form onSubmit={handleStep1Submit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Pincode */}
                <div className="space-y-2">
                  <label htmlFor="form-pincode" className="block text-xs font-bold text-slate-800">
                    6-Digit Pincode <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-pincode"
                    type="text"
                    maxLength={6}
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value.replace(/\D/g, '') })}
                    placeholder="e.g. 560034"
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#1D5FE0] text-slate-900 text-sm font-medium px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1D5FE0]/40 transition-all"
                  />
                  {errors.pincode && <p className="text-xs text-red-600">{errors.pincode}</p>}
                </div>

                {/* Monthly Bill */}
                <div className="space-y-2">
                  <label htmlFor="form-bill" className="block text-xs font-bold text-slate-800">
                    Average Monthly Power Bill (₹)
                  </label>
                  <select
                    id="form-bill"
                    value={formData.monthlyBill}
                    onChange={(e) => setFormData({ ...formData, monthlyBill: Number(e.target.value) })}
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#1D5FE0] text-slate-900 text-sm font-medium px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1D5FE0]/40 transition-all"
                  >
                    <option value={3000}>₹3,000 / month (Small Home)</option>
                    <option value={6000}>₹6,000 / month (2-3 BHK)</option>
                    <option value={8500}>₹8,500 / month (3-4 BHK)</option>
                    <option value={15000}>₹15,000 / month (Villa/Heavy AC)</option>
                    <option value={25000}>₹25,000+ / month (Commercial/Villa)</option>
                  </select>
                </div>

              </div>

              {/* Roof Type Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-800">
                  Rooftop Structure Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['Concrete Slab (RCC)', 'Tin / Metal Sheet', 'Tiled / Slanted Roof'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, roofType: type })}
                      className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                        formData.roofType === type
                          ? 'bg-blue-50 border-[#1D5FE0] text-[#1D5FE0] shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1D5FE0] hover:bg-[#0F2E6E] text-white text-base font-bold py-4 rounded-xl shadow-lg shadow-[#1D5FE0]/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Continue to Step 2</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          )}

          {/* STEP 2: Name & WhatsApp Mobile */}
          {step === 2 && (
            <form onSubmit={handleStep2Submit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="form-name" className="block text-xs font-bold text-slate-800">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full bg-slate-50 border border-slate-300 focus:border-[#1D5FE0] text-slate-900 text-sm font-medium px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1D5FE0]/40 transition-all"
                  />
                  {errors.fullName && <p className="text-xs text-red-600">{errors.fullName}</p>}
                </div>

                {/* WhatsApp Phone */}
                <div className="space-y-2">
                  <label htmlFor="form-phone" className="block text-xs font-bold text-slate-800">
                    WhatsApp Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center">
                    <span className="bg-slate-200 border border-r-0 border-slate-300 text-slate-700 font-bold text-xs px-3 py-3 rounded-l-xl">
                      +91
                    </span>
                    <input
                      id="form-phone"
                      type="text"
                      maxLength={10}
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value.replace(/\D/g, '') })}
                      placeholder="9876543210"
                      className="w-full bg-slate-50 border border-slate-300 focus:border-[#1D5FE0] text-slate-900 text-sm font-medium px-4 py-3 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-[#1D5FE0]/40 transition-all"
                    />
                  </div>
                  {errors.whatsappNumber && <p className="text-xs text-red-600">{errors.whatsappNumber}</p>}
                </div>

              </div>

              {/* Preferred Time */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-800">
                  Preferred Time for Site Survey Call
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Morning (10 AM - 1 PM)', 'Evening (4 PM - 7 PM)'].map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredSurveyTime: time })}
                      className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                        formData.preferredSurveyTime === time
                          ? 'bg-blue-50 border-[#1D5FE0] text-[#1D5FE0]'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Explicit Verbatim Primary CTA */}
              <div className="space-y-3">
                <button
                  type="submit"
                  className="w-full bg-[#1D5FE0] hover:bg-[#0F2E6E] text-white text-base font-bold py-4 rounded-xl shadow-lg shadow-[#1D5FE0]/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Get My Free Savings Estimate</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  🔒 We respect your privacy. Zero spam or aggressive sales calls.
                </p>
              </div>
            </form>
          )}

          {/* STEP 3: Confirmation & Next Steps Timeline */}
          {step === 3 && (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#10B981] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold font-heading text-slate-900">
                  Estimate Request Confirmed!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your customized solar savings report and DISCOM subsidy assessment for pincode <strong className="text-slate-900">{formData.pincode}</strong> is being prepared.
                </p>
              </div>

              {/* What Happens Next Timeline */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-left space-y-4">
                <span className="text-xs font-bold text-slate-900 uppercase font-heading">
                  What Happens Next:
                </span>

                <div className="space-y-3 text-xs text-slate-700">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#1D5FE0] text-white flex items-center justify-center font-bold text-[10px] mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-slate-900">WhatsApp Proposal (Within 1 Hour):</strong> <br />
                      We will send your initial 3D solar layout and cost breakdown to +91 {formData.whatsappNumber}.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#1D5FE0] text-white flex items-center justify-center font-bold text-[10px] mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-slate-900">Free Site Survey ({formData.preferredSurveyTime}):</strong> <br />
                      Our certified engineer will conduct a 3D LiDAR shade scan of your {formData.roofType}.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#10B981] text-white flex items-center justify-center font-bold text-[10px] mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-slate-900">Subsidy Claim Filing:</strong> <br />
                      We lock in your PM Surya Ghar central subsidy reservation on the national portal.
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setStep(1)}
                className="text-xs font-bold text-[#1D5FE0] hover:underline"
              >
                Submit another calculation
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
