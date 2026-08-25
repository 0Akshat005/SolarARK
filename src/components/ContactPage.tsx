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
  FileCheck,
  ExternalLink,
  Lock
} from 'lucide-react';

interface ContactPageProps {
  onNavigate?: (path: string) => void;
  onCtaClick?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Amravati',
    propertyType: 'Individual Home / Villa',
    monthlyBill: 'Under ₹3,000 / month',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Hello SolarArk Team! ☀️\n\nI would like to request a Free 3D Solar Site Assessment.\n\n📌 *Assessment Details:*\n• *Name:* ${formData.name}\n• *Mobile:* ${formData.phone}\n• *City / District:* ${formData.city}\n• *Property Type:* ${formData.propertyType}\n• *Monthly Bill:* ${formData.monthlyBill}\n• *Notes / Requirements:* ${formData.message || 'None'}`;
    const whatsappUrl = `https://wa.me/917080909590?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  const offices = [
    {
      city: 'Amravati (Headquarters)',
      badge: 'CENTRAL HQ',
      address: 'Mira Sadan, House No. 27 A, Krushnarpan Colony, Amravati, Maharashtra 444605',
      phone: '+91 7080909590',
      email: 'info@thesolarark.com',
      mapUrl: 'https://maps.google.com/?q=Mira+Sadan+Krushnarpan+Colony+Amravati+Maharashtra+444605',
    },
    {
      city: 'Chh. Sambhajinagar (Aurangabad)',
      badge: 'MARATHWADA HUB',
      address: 'Near Saptapadi Mangal Karyalaya Road, H.No. 49R.-29, Baliram Patil School Road, Chh. Sambhajinagar',
      phone: '+91 7080909590',
      email: 'info@thesolarark.com',
      mapUrl: 'https://maps.google.com/?q=Baliram+Patil+School+Road+Chhatrapati+Sambhajinagar',
    },
    {
      city: 'Wardha',
      badge: 'VIDARBHA HUB',
      address: 'C/o Kishore Surkar, Infront Of Amit Tailors, Near Dr. Mehre Clinic, Arts College Road, Arvi Naka, Wardha',
      phone: '+91 7080909590',
      email: 'info@thesolarark.com',
      mapUrl: 'https://maps.google.com/?q=Arvi+Naka+Wardha+Maharashtra',
    },
    {
      city: 'Akola',
      badge: 'OPERATIONS HUB',
      address: 'Regional Operations & Engineering Service Desk, Akola, Maharashtra',
      phone: '+91 7080909590',
      email: 'info@thesolarark.com',
      mapUrl: 'https://maps.google.com/?q=Akola+Maharashtra',
    },
  ];

  return (
    <div 
      className="pt-24 lg:pt-28 pb-16 min-h-screen bg-[#FAF8F4] text-slate-900 selection:bg-[#8B1E1E] selection:text-white"
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

      <div className="w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)] mx-auto space-y-8 lg:space-y-10">
        
        {/* ── 1. TOP THREE COMPACT CONTACT INFORMATION CARDS ── */}
        <section aria-label="Direct Contact Channels" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          
          {/* Card 1: Direct Call / Helpline */}
          <div className="bg-white border border-[#EBE6DF] rounded-2xl p-5 shadow-[0_2px_8px_rgba(26,31,44,0.04)] flex flex-col justify-between space-y-3 transition-all hover:border-[#8B1E1E]/40 hover:shadow-sm">
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#8B1E1E] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider bg-red-50 text-[#8B1E1E] px-2.5 py-0.5 rounded-full font-heading">
                Instant Call
              </span>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider font-heading">
                Direct Call / Helpline
              </div>
              <a 
                href="tel:+917080909590" 
                itemProp="telephone" 
                className="font-heading text-lg sm:text-xl font-bold text-slate-900 mt-0.5 block hover:text-[#8B1E1E] transition-colors tabular-nums"
              >
                +91 7080909590
              </a>
            </div>
            <p className="text-xs text-stone-500 font-normal m-0">
              Monday to Saturday, 9:30 AM to 7:00 PM IST
            </p>
          </div>

          {/* Card 2: Written Inquiries & Proposals */}
          <div className="bg-white border border-[#EBE6DF] rounded-2xl p-5 shadow-[0_2px_8px_rgba(26,31,44,0.04)] flex flex-col justify-between space-y-3 transition-all hover:border-[#8B1E1E]/40 hover:shadow-sm">
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full font-heading">
                Official Email
              </span>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider font-heading">
                Written Inquiries &amp; Proposals
              </div>
              <a 
                href="mailto:info@thesolarark.com" 
                itemProp="email" 
                className="font-heading text-lg sm:text-xl font-bold text-slate-900 mt-0.5 block hover:text-[#8B1E1E] transition-colors"
              >
                info@thesolarark.com
              </a>
            </div>
            <p className="text-xs text-stone-500 font-normal m-0">
              Guaranteed response within 4 business hours
            </p>
          </div>

          {/* Card 3: Engineering Desk Hours */}
          <div className="bg-white border border-[#EBE6DF] rounded-2xl p-5 shadow-[0_2px_8px_rgba(26,31,44,0.04)] flex flex-col justify-between space-y-3 transition-all hover:border-[#8B1E1E]/40 hover:shadow-sm sm:col-span-2 lg:col-span-1">
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded-full font-heading">
                Open 6 Days
              </span>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider font-heading">
                Engineering Desk Hours
              </div>
              <div className="font-heading text-lg sm:text-xl font-bold text-slate-900 mt-0.5 tabular-nums">
                Mon – Sat: 9:30 AM – 7:00 PM
              </div>
            </div>
            <p className="text-xs text-stone-500 font-normal m-0">
              Sunday emergency net-metering on-call support
            </p>
          </div>

        </section>

        {/* ── 2. MAIN TWO-COLUMN SECTION: FORM (LEFT) & OFFICE DIRECTORY (RIGHT) ── */}
        <section aria-label="Assessment Form & Regional Offices" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ═══════════════════════════════════════════════════════════════
              LEFT COLUMN: ASSESSMENT REQUEST FORM CARD (~50%)
             ═══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 bg-white border border-[#EBE6DF] rounded-[20px] p-6 sm:p-8 shadow-[0_10px_28px_rgba(28,35,46,0.07)] space-y-6">
            
            {/* Form Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-xs font-semibold text-[#8B1E1E] border border-red-100 font-heading">
                <FileCheck className="w-3.5 h-3.5 text-[#8B1E1E]" />
                <span>Free 3D Rooftop Survey</span>
              </div>
              
              <h1 className="font-heading text-2xl sm:text-[28px] font-bold text-[#0B1730] tracking-tight leading-[1.18] m-0">
                Request a Free Solar Site Assessment
              </h1>
              
              <p className="text-xs sm:text-[13px] text-stone-500 leading-relaxed m-0 pt-0.5">
                Our certified engineer will inspect your roof structure, evaluate shadow conditions, and calculate exact monthly savings with zero obligation.
              </p>
            </div>

            {/* Form Content / Confirmation State */}
            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h2 className="font-heading text-xl font-bold text-emerald-900">
                  Site Visit Request Confirmed!
                </h2>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>! A dedicated SolarArk field engineer will contact you at <strong>{formData.phone}</strong> to confirm your survey slot in <strong>{formData.city}</strong>.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/917080909590?text=${encodeURIComponent(`Hello SolarArk Team! ☀️\n\nI would like to request a Free 3D Solar Site Assessment.\n\n📌 *Assessment Details:*\n• *Name:* ${formData.name}\n• *Mobile:* ${formData.phone}\n• *City / District:* ${formData.city}\n• *Property Type:* ${formData.propertyType}\n• *Monthly Bill:* ${formData.monthlyBill}\n• *Notes / Requirements:* ${formData.message || 'None'}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-5 py-2.5 rounded-xl cursor-pointer transition-colors shadow-xs"
                  >
                    <span>Open in WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-emerald-700 underline cursor-pointer hover:text-emerald-900"
                  >
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Full Name | Mobile Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-800 font-heading mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-[13px] text-slate-900 bg-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 focus:border-[#8B1E1E] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-800 font-heading mb-1.5">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                      className="w-full h-11 px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-[13px] text-slate-900 bg-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 focus:border-[#8B1E1E] transition-all tabular-nums"
                    />
                  </div>
                </div>

                {/* Row 2: City / District | Property Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="contact-city" className="block text-xs font-semibold text-slate-800 font-heading mb-1.5">
                      City / District <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-city"
                      type="text"
                      required
                      placeholder="Amravati"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full h-11 px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-[13px] text-slate-900 bg-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 focus:border-[#8B1E1E] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-property-type" className="block text-xs font-semibold text-slate-800 font-heading mb-1.5">
                      Property Category
                    </label>
                    <select
                      id="contact-property-type"
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full h-11 px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-[13px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 focus:border-[#8B1E1E] bg-white transition-all cursor-pointer"
                    >
                      <option value="Individual Home / Villa">Individual Home / Villa</option>
                      <option value="Housing Society / Apartment">Housing Society / Apartment</option>
                      <option value="Commercial / Office Building">Commercial / Office Building</option>
                      <option value="Industrial Factory / Warehouse">Industrial Factory / Warehouse</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Average Monthly Electricity Bill */}
                <div>
                  <label htmlFor="contact-bill" className="block text-xs font-semibold text-slate-800 font-heading mb-1.5">
                    Average Monthly Electricity Bill
                  </label>
                  <select
                    id="contact-bill"
                    value={formData.monthlyBill}
                    onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                    className="w-full h-11 px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-[13px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 focus:border-[#8B1E1E] bg-white transition-all cursor-pointer"
                  >
                    <option value="Under ₹3,000 / month">Under ₹3,000 / month</option>
                    <option value="₹3,000 - ₹5,000 / month">₹3,000 - ₹5,000 / month</option>
                    <option value="₹5,000 - ₹10,000 / month">₹5,000 - ₹10,000 / month</option>
                    <option value="₹10,000 - ₹25,000 / month">₹10,000 - ₹25,000 / month</option>
                    <option value="Above ₹25,000 / month (Commercial/Society)">Above ₹25,000 / month (Commercial/Society)</option>
                  </select>
                </div>

                {/* Row 4: Message / Special Requirements */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-800 font-heading mb-1.5">
                    Message / Special Requirements (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Specify your roof type (RCC slab, tin shade), shadow conditions, or preferred time for survey..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3.5 rounded-xl border border-stone-300 text-xs sm:text-[13px] text-slate-900 bg-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 focus:border-[#8B1E1E] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 space-y-2.5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary-maroon font-heading font-semibold text-sm h-12 sm:h-[50px] rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75"
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

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500 text-center">
                    <Lock className="w-3.5 h-3.5 text-amber-700/80 shrink-0" />
                    <span>Privacy Assured: We only contact you regarding your solar rooftop assessment.</span>
                  </div>
                </div>

              </form>
            )}

          </div>

          {/* ═══════════════════════════════════════════════════════════════
              RIGHT COLUMN: REGISTERED OFFICES DIRECTORY (~50%)
             ═══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Directory Header */}
            <div className="space-y-1.5 pb-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-xs font-semibold text-[#8B1E1E] border border-red-100 font-heading">
                <Building2 className="w-3.5 h-3.5 text-[#8B1E1E]" />
                <span>Regional Footprint</span>
              </div>
              
              <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-[#0B1730] tracking-tight leading-[1.18] m-0">
                SolarArk Registered Offices
              </h2>
              
              <p className="text-xs sm:text-[13px] text-stone-500 leading-relaxed m-0">
                Visit our regional headquarters and engineering centers across Maharashtra.
              </p>
            </div>

            {/* Vertical Stack of Office Cards */}
            <div className="space-y-3.5">
              {offices.map((off, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#EBE6DF] rounded-[14px] p-4 sm:p-4.5 shadow-[0_2px_7px_rgba(26,31,44,0.035)] space-y-2.5 transition-all hover:border-[#8B1E1E]/40 hover:shadow-xs"
                >
                  {/* Top Row: Title + Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 font-heading m-0">
                      {off.city}
                    </h3>
                    <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider bg-red-50 text-[#8B1E1E] px-2.5 py-0.5 rounded-full font-heading border border-red-200/80 shrink-0">
                      {off.badge}
                    </span>
                  </div>

                  {/* Address Row */}
                  <div className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed">
                    <MapPin className="w-3.5 h-3.5 text-[#8B1E1E] shrink-0 mt-0.5" />
                    <span>{off.address}</span>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 pt-2 border-t border-stone-100">
                    <div className="flex items-center gap-3">
                      <a 
                        href={`tel:${off.phone}`} 
                        className="hover:text-[#8B1E1E] font-medium flex items-center gap-1 transition-colors tabular-nums"
                      >
                        <Phone className="w-3 h-3 text-stone-400" />
                        <span>{off.phone}</span>
                      </a>
                      <span className="text-stone-300">•</span>
                      <a 
                        href={`mailto:${off.email}`} 
                        className="hover:text-[#8B1E1E] font-medium flex items-center gap-1 transition-colors"
                      >
                        <Mail className="w-3 h-3 text-stone-400" />
                        <span>{off.email}</span>
                      </a>
                    </div>

                    <a
                      href={off.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#8B1E1E] hover:underline cursor-pointer ml-auto"
                    >
                      <span>Get Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </section>

      </div>
    </div>
  );
};
