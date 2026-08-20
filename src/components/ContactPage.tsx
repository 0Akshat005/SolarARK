/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ArrowLeft,
  Home as HomeIcon,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

import { PageContextBar } from './PageContextBar';

interface ContactPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onCtaClick,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Amravati',
    propertyType: 'Individual Home / Villa',
    monthlyBill: '₹5,000 - ₹10,000',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const offices = [
    {
      type: 'Head Office',
      city: 'Amravati, Maharashtra',
      address: 'Mira Sadan, House No. 27 A, Krushnarpan Colony, Amravati, Maharashtra 444605',
      phone: '+91 7080909590',
      email: 'info@thesolarark.com',
      badge: 'Headquarters',
    },
    {
      type: 'Branch Office',
      city: 'Chh. Sambhajinagar (Aurangabad)',
      address: 'Near Saptapadi Mangal Karyalaya Road, H.No. 49R.-29, Baliram Patil School Road',
      phone: '+91 7080909590',
      email: 'info@thesolarark.com',
      badge: 'Marathwada Hub',
    },
    {
      type: 'Branch Office',
      city: 'Wardha',
      address: 'C/o Kishore Surkar, Infront Of Amit Tailors, Near Dr. Mehre Clinic, Arts College Road, Arvi Naka',
      phone: '+91 7080909590',
      email: 'info@thesolarark.com',
      badge: 'Vidarbha Hub',
    },
    {
      type: 'Regional Center',
      city: 'Akola',
      address: 'Regional Operations & Installation Service Hub, Akola, Maharashtra',
      phone: '+91 7080909590',
      email: 'info@thesolarark.com',
      badge: 'Operations Hub',
    },
  ];

  return (
    <div className="pt-20 lg:pt-24 pb-20 min-h-screen bg-[#FCFAF7] text-slate-900 selection:bg-[#8B1E1E] selection:text-white">
      
      {/* ── REUSABLE INNER-PAGE TOP CONTEXT BAR ── */}
      <PageContextBar
        currentPage="Contact Us"
        onNavigate={onNavigate}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-8">

        {/* Page Hero Headline */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7EFE9] border border-[#8B1E1E]/15 text-xs font-bold text-[#8B1E1E] font-heading">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch with SolarArk</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.14]">
            Connect with Our Solar Energy Experts
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Have questions about rooftop solar sizing, PM Surya Ghar subsidy claims, or net-metering approvals? Visit our offices or schedule an instant consultation.
          </p>
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
        
        {/* ── FAST DIRECT CONTACT CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a
            href="tel:+917080909590"
            className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs hover:border-[#8B1E1E] transition-all space-y-3 group"
          >
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#8B1E1E] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider font-heading">
                Direct Call / WhatsApp
              </div>
              <div className="font-heading text-lg font-bold text-slate-900 mt-0.5">
                +91 7080909590
              </div>
            </div>
            <p className="text-xs text-stone-600">
              Monday to Saturday, 9:30 AM to 7:00 PM
            </p>
          </a>

          <a
            href="mailto:info@thesolarark.com"
            className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs hover:border-[#8B1E1E] transition-all space-y-3 group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider font-heading">
                Official Email
              </div>
              <div className="font-heading text-lg font-bold text-slate-900 mt-0.5">
                info@thesolarark.com
              </div>
            </div>
            <p className="text-xs text-stone-600">
              Response within 4 business hours
            </p>
          </a>

          <div className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider font-heading">
                Working Hours
              </div>
              <div className="font-heading text-lg font-bold text-slate-900 mt-0.5">
                Mon - Sat: 9:30 AM - 7:00 PM
              </div>
            </div>
            <p className="text-xs text-stone-600">
              Sunday emergency on-call support
            </p>
          </div>
        </div>

        {/* ── CONSULTATION FORM & OFFICES DIRECTORY ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Consultation Form */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7EFE9] border border-[#8B1E1E]/15 text-xs font-bold text-[#8B1E1E] font-heading mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Free &amp; Zero Obligation</span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  Request a Free Solar Site Survey
                </h3>
                <p className="text-xs text-stone-600 mt-0.5">
                  Our certified engineer will inspect your roof and prepare a customized 3D solar layout.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-emerald-900">
                    Request Confirmed!
                  </h4>
                  <p className="text-xs text-emerald-800">
                    Thank you <strong>{formData.name}</strong>. A dedicated SolarArk engineer will contact you at <strong>{formData.phone}</strong> to confirm your site assessment appointment.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-emerald-700 underline mt-2"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-[#8B1E1E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-[#8B1E1E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        City / Location *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Amravati"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-[#8B1E1E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Property Type
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-[#8B1E1E] bg-white"
                      >
                        <option>Individual Home / Villa</option>
                        <option>Housing Society / Apartment</option>
                        <option>Commercial / Office Building</option>
                        <option>Industrial Factory / Warehouse</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Monthly Electricity Bill Range
                    </label>
                    <select
                      value={formData.monthlyBill}
                      onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-[#8B1E1E] bg-white"
                    >
                      <option>Under ₹3,000 / month</option>
                      <option>₹3,000 - ₹5,000 / month</option>
                      <option>₹5,000 - ₹10,000 / month</option>
                      <option>₹10,000 - ₹25,000 / month</option>
                      <option>Above ₹25,000 / month (Commercial/Society)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Message / Special Requirements (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Specify your terrace type, shadow conditions, or preferred appointment time..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-[#8B1E1E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#8B1E1E] hover:bg-[#5E1212] text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    <span>Confirm Free Site Survey Request</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-stone-500 text-center">
                    🔒 No spam. We only contact you regarding your solar inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Right Office Directory */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-heading text-2xl font-bold text-slate-900 tracking-tight">
              Our Registered Offices
            </h3>

            <div className="space-y-4">
              {offices.map((off, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-xs space-y-2 hover:border-[#8B1E1E] transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-900 font-heading">
                      {off.city}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-red-50 text-[#8B1E1E] px-2.5 py-0.5 rounded-full">
                      {off.badge}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-stone-600 pt-1">
                    <MapPin className="w-4 h-4 text-[#8B1E1E] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{off.address}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-stone-600 pt-2 border-t border-stone-100">
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-stone-400" />
                      <a href={`tel:${off.phone}`} className="hover:text-[#8B1E1E] font-medium">
                        {off.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-stone-400" />
                      <a href={`mailto:${off.email}`} className="hover:text-[#8B1E1E] font-medium">
                        {off.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
