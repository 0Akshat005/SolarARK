/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  MessageSquare,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Headphones,
  FileCheck
} from 'lucide-react';
import { OfficeLocationMap } from './OfficeLocationMap';

interface ContactPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onCtaClick,
}) => {
  // Form State
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Hello SolarArk Team! ☀️\n\nI would like to request a Free 3D Solar Site Assessment.\n\n📌 *Assessment Details:*\n• *Name:* ${formData.name}\n• *Mobile:* ${formData.phone}\n• *Email:* ${formData.email || 'N/A'}\n• *City / District:* ${formData.city}\n• *Property Type:* ${formData.propertyType}\n• *Monthly Bill:* ${formData.monthlyBill}\n• *Notes / Requirements:* ${formData.message || 'None'}`;
    const whatsappUrl = `https://wa.me/917080909590?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  const offices = [
    {
      type: 'Head Office',
      city: 'Amravati (Headquarters)',
      address: 'Mira Sadan, House No. 27 A, Krushnarpan Colony, Amravati, Maharashtra 444605',
      latitude: 20.916927,
      longitude: 77.749208,
      phone: '+91 7080909590',
      email: 'info@thesolarark.com',
      badge: 'Central HQ',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=20.916927,77.749208',
    },
    {
      type: 'Branch Office',
      city: 'Chh. Sambhajinagar (Aurangabad)',
      address: 'Near Saptapadi Mangal Karyalaya Road, H.No. 49R.-29, Baliram Patil School Road, Chh. Sambhajinagar',
      latitude: 19.896246,
      longitude: 75.358003,
      phone: '+91 7080909590',
      email: 'info@thesolarark.com',
      badge: 'Marathwada Hub',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=19.896246,75.358003',
    },
    {
      type: 'Branch Office',
      city: 'Wardha',
      address: 'C/o Kishore Surkar, Infront Of Amit Tailors, Near Dr. Mehre Clinic, Arts College Road, Arvi Naka, Wardha',
      latitude: 20.754335,
      longitude: 78.601618,
      phone: '+91 7080909590',
      email: 'info@thesolarark.com',
      badge: 'Vidarbha Hub',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=20.754335,78.601618',
    },
    {
      type: 'Regional Center',
      city: 'Akola',
      address: 'Regional Operations & Engineering Service Desk, Akola, Maharashtra',
      latitude: 20.705900,
      longitude: 77.021900,
      phone: '+91 7080909590',
      email: 'info@thesolarark.com',
      badge: 'Operations Hub',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=20.705900,77.021900',
    },
  ];

  return (
    <div 
      className="pt-20 lg:pt-24 pb-8 min-h-screen bg-[#FAF9F6] text-slate-900 selection:bg-[#8B1E1E] selection:text-white"
      itemScope 
      itemType="https://schema.org/SolarEnergyContractor"
    >
      {/* Hidden Structured Data Micro-Metadata for Search Crawlers */}
      <meta itemProp="name" content="SolarArk Projects Pvt. Ltd." />
      <meta itemProp="url" content="https://www.thesolarark.com/contact" />
      <meta itemProp="logo" content="https://www.thesolarark.com/images/solarlogo.png" />
      <meta itemProp="priceRange" content="₹₹" />
      <meta itemProp="telephone" content="+917080909590" />
      <meta itemProp="email" content="info@thesolarark.com" />
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
        <span itemProp="streetAddress">Mira Sadan, House No. 27 A, Krushnarpan Colony</span>
        <span itemProp="addressLocality">Amravati</span>
        <span itemProp="addressRegion">Maharashtra</span>
        <span itemProp="postalCode">444605</span>
        <span itemProp="addressCountry">IN</span>
      </div>

      {/* ── 2. EXECUTIVE HERO SHOWCASE BANNER ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-10">
        <div className="relative bg-gradient-to-br from-white via-[#FCFAF7] to-amber-50/30 rounded-3xl p-6 sm:p-10 lg:p-12 text-slate-900 shadow-md border border-stone-200/90 overflow-hidden">
          
          {/* Subtle Ambient Light Glows */}
          <div className="absolute -top-28 -right-28 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-28 -left-28 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E1E] shadow-sm text-[11px] font-bold text-white tracking-wider uppercase font-heading border border-red-500/30">
                <MessageSquare className="w-3.5 h-3.5 text-amber-300" />
                <span>OFFICIAL SOLARARK CUSTOMER &amp; PARTNER DESK</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-heading tracking-tight leading-[1.12] text-[#0B1730]">
                Connect with Our Certified <br />
                <span className="text-[#0B1730]">Solar Rooftop EPC Experts in Maharashtra</span>
              </h1>

              <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl">
                Have questions about 3kW–25kW rooftop solar sizing, ₹78,000 PM Surya Ghar government subsidy claims, or MSEDCL DISCOM net-metering approvals? Visit our registered offices in Amravati, Nagpur, Sambhajinagar, Wardha &amp; Akola or book a free 3D site survey.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-stone-600 border-t border-stone-200">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Free 3D Laser Site Survey
                </span>
                <span className="hidden sm:inline text-stone-300">•</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Award className="w-4 h-4 text-amber-600" /> PM Surya Ghar Authorized Partner
                </span>
                <span className="hidden sm:inline text-stone-300">•</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-blue-600" /> 4-Hour Engineer Response
                </span>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="lg:col-span-4 bg-white border border-stone-200/90 rounded-2xl p-6 shadow-sm space-y-4 text-center lg:text-left">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#8B1E1E] flex items-center justify-center font-bold shrink-0">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-medium">Direct Customer &amp; Field Desk</div>
                  <a href="tel:+917080909590" itemProp="telephone" className="text-lg font-bold text-slate-900 font-heading hover:text-[#8B1E1E] transition-colors">
                    +91 7080909590
                  </a>
                </div>
              </div>

              <a
                href="https://wa.me/917080909590?text=Hi%20SolarArk%20Team%2C%20I%20would%20like%20to%20get%20a%20free%20solar%20rooftop%20estimate."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with SolarArk engineer on WhatsApp"
                className="w-full bg-[#8B1E1E] hover:bg-[#5E1212] active:scale-[0.98] text-white font-heading font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-md shadow-[#8B1E1E]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Chat on WhatsApp Instantly</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. EDITORIAL CONTACT UTILITY RAIL (NO LARGE BOX CARDS) ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-10 sm:mb-12">
        <div className="border-y border-[#EBE6DF]/90 py-5 sm:py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#EBE6DF]/90">
            
            {/* 1. Direct Helpline (Call SolarArk) ~36% */}
            <div className="w-full md:w-[36%] md:pr-8 space-y-1 pt-2 md:pt-0">
              <div className="flex items-center gap-1.5 text-stone-500">
                <Phone className="w-3.5 h-3.5 text-[#8B1E1E]" />
                <span className="text-[11px] font-semibold tracking-wider uppercase font-heading text-stone-500">
                  Call SolarArk
                </span>
              </div>
              <div>
                <a
                  href="tel:+917080909590"
                  className="font-heading text-xl sm:text-[22px] font-bold text-[#8B1E1E] hover:text-[#5E1212] transition-colors tabular-nums focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/30 focus-visible:outline-none rounded inline-block"
                >
                  +91 7080909590
                </a>
              </div>
              <p className="text-xs text-stone-500 font-normal m-0">
                Speak directly with our team.
              </p>
            </div>

            {/* 2. Written Inquiries (Email Us) ~36% */}
            <div className="w-full md:w-[36%] md:px-8 space-y-1 pt-4 md:pt-0">
              <div className="flex items-center gap-1.5 text-stone-500">
                <Mail className="w-3.5 h-3.5 text-stone-400" />
                <span className="text-[11px] font-semibold tracking-wider uppercase font-heading text-stone-500">
                  Email Us
                </span>
              </div>
              <div>
                <a
                  href="mailto:info@thesolarark.com"
                  className="font-heading text-lg sm:text-[20px] font-bold text-slate-900 hover:text-[#8B1E1E] transition-colors focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/30 focus-visible:outline-none rounded inline-block"
                >
                  info@thesolarark.com
                </a>
              </div>
              <p className="text-xs text-stone-500 font-normal m-0">
                For enquiries, proposals &amp; documents.
              </p>
            </div>

            {/* 3. Engineering Desk Hours ~28% */}
            <div className="w-full md:w-[28%] md:pl-8 space-y-1 pt-4 md:pt-0">
              <div className="flex items-center gap-1.5 text-stone-500">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                <span className="text-[11px] font-semibold tracking-wider uppercase font-heading text-stone-500">
                  Desk Hours
                </span>
              </div>
              <div className="font-heading text-base sm:text-[17px] font-bold text-slate-900">
                Mon – Sat · 9:30 AM – 7:00 PM
              </div>
              <p className="text-xs text-stone-500 font-normal m-0">
                Sunday: emergency net-metering support
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. TWO-COLUMN COHESIVE SYSTEM: FORM (LEFT) + OFFICES/MAP (RIGHT) ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Consultation Form Column (lg:col-span-6) */}
          <div className="lg:col-span-6 bg-white border border-[#EBE6DF] rounded-[20px] p-6 sm:p-8 shadow-[0_10px_28px_rgba(28,35,46,0.07)] flex flex-col justify-between space-y-6 h-full">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-xs font-semibold text-[#8B1E1E] border border-red-100 font-heading">
                <FileCheck className="w-3.5 h-3.5 text-[#8B1E1E]" />
                <span>Free 3D Rooftop Survey</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-[#0B1730] tracking-tight leading-[1.18] m-0">
                Request a Free Solar Site Assessment
              </h2>
              <p className="text-xs sm:text-[13px] text-stone-500 leading-relaxed m-0">
                Our certified engineer will inspect your roof structure, evaluate shadow conditions, and calculate exact monthly savings with zero obligation.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 my-auto" aria-live="polite">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-emerald-900">
                  Site Visit Request Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                  Thank you <strong>{formData.name}</strong>. A dedicated SolarArk field engineer will contact you at <strong>{formData.phone}</strong> to confirm your appointment time in <strong>{formData.city}</strong>.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/917080909590?text=${encodeURIComponent(`Hello SolarArk Team! ☀️\n\nI would like to request a Free 3D Solar Site Assessment.\n\n📌 *Assessment Details:*\n• *Name:* ${formData.name}\n• *Mobile:* ${formData.phone}\n• *Email:* ${formData.email || 'N/A'}\n• *City / District:* ${formData.city}\n• *Property Type:* ${formData.propertyType}\n• *Monthly Bill:* ${formData.monthlyBill}\n• *Notes / Requirements:* ${formData.message || 'None'}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-5 py-2.5 rounded-xl cursor-pointer transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-emerald-600/30 focus-visible:outline-none"
                  >
                    <span>Open in WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-emerald-700 underline cursor-pointer hover:text-emerald-900 focus-visible:ring-2 focus-visible:ring-emerald-600/30 focus-visible:outline-none rounded"
                  >
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 font-heading mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 focus:border-[#8B1E1E] transition-all bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 font-heading mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 focus:border-[#8B1E1E] transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 font-heading mb-1.5">
                        City / District *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Amravati, Nagpur, Sambhajinagar"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 focus:border-[#8B1E1E] transition-all bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 font-heading mb-1.5">
                        Property Category
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 focus:border-[#8B1E1E] bg-white transition-all cursor-pointer"
                      >
                        <option>Individual Home / Villa</option>
                        <option>Housing Society / Apartment</option>
                        <option>Commercial / Office Building</option>
                        <option>Industrial Factory / Warehouse</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 font-heading mb-1.5">
                      Average Monthly Electricity Bill
                    </label>
                    <select
                      value={formData.monthlyBill}
                      onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 focus:border-[#8B1E1E] bg-white transition-all cursor-pointer"
                    >
                      <option>Under ₹3,000 / month</option>
                      <option>₹3,000 - ₹5,000 / month</option>
                      <option>₹5,000 - ₹10,000 / month</option>
                      <option>₹10,000 - ₹25,000 / month</option>
                      <option>Above ₹25,000 / month (Commercial/Society)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 font-heading mb-1.5">
                      Message / Special Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify your roof type (RCC slab, tin shade), shadow conditions, or preferred time for survey..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 focus:border-[#8B1E1E] transition-all resize-none bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary-maroon font-heading font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/30 focus-visible:outline-none"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <span>Confirm Free Site Survey Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-stone-500 text-center pt-1 m-0">
                    🔒 Privacy Assured: We only contact you regarding your solar rooftop assessment.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Offices & Map Column (lg:col-span-6) */}
          <div className="lg:col-span-6 h-full">
            <OfficeLocationMap offices={offices} />
          </div>

        </div>
      </section>

    </div>
  );
};
