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

import { PageContextBar } from './PageContextBar';

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
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const offices = [
    {
      type: 'Head Office',
      city: 'Amravati (Headquarters)',
      address: 'Mira Sadan, House No. 27 A, Krushnarpan Colony, Amravati, Maharashtra 444605',
      phone: '+91 7080909590',
      email: 'info@thesolarark.com',
      badge: 'Central HQ',
      mapUrl: 'https://maps.google.com/?q=Mira+Sadan+Krushnarpan+Colony+Amravati+Maharashtra+444605',
    },
    {
      type: 'Branch Office',
      city: 'Chh. Sambhajinagar (Aurangabad)',
      address: 'Near Saptapadi Mangal Karyalaya Road, H.No. 49R.-29, Baliram Patil School Road, Chh. Sambhajinagar',
      phone: '+91 7080909590',
      email: 'info@thesolarark.com',
      badge: 'Marathwada Hub',
      mapUrl: 'https://maps.google.com/?q=Baliram+Patil+School+Road+Chhatrapati+Sambhajinagar',
    },
    {
      type: 'Branch Office',
      city: 'Wardha',
      address: 'C/o Kishore Surkar, Infront Of Amit Tailors, Near Dr. Mehre Clinic, Arts College Road, Arvi Naka, Wardha',
      phone: '+91 7080909590',
      email: 'info@thesolarark.com',
      badge: 'Vidarbha Hub',
      mapUrl: 'https://maps.google.com/?q=Arvi+Naka+Wardha+Maharashtra',
    },
    {
      type: 'Regional Center',
      city: 'Akola',
      address: 'Regional Operations & Engineering Service Desk, Akola, Maharashtra',
      phone: '+91 7080909590',
      email: 'info@thesolarark.com',
      badge: 'Operations Hub',
      mapUrl: 'https://maps.google.com/?q=Akola+Maharashtra',
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

      {/* ── 1. REUSABLE TOP BREADCRUMB / CONTEXT BAR ── */}
      <PageContextBar
        currentPage="Contact Us"
        onNavigate={onNavigate}
      />

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
                <span className="text-[#8B1E1E]">Solar Rooftop EPC Experts in Maharashtra</span>
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

      {/* ── 3. THREE DIRECT CONTACT CARDS DOCK ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          
          {/* Phone Card */}
          <a
            href="tel:+917080909590"
            className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-2xs hover:border-[#8B1E1E]/50 hover:shadow-md transition-all space-y-3 group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#8B1E1E] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-red-50 text-[#8B1E1E] px-2.5 py-1 rounded-md font-heading">
                Instant Call
              </span>
            </div>
            <div>
              <div className="text-xs font-bold text-stone-400 uppercase tracking-wider font-heading">
                Direct Call / Helpline
              </div>
              <div className="font-heading text-xl font-bold text-slate-900 mt-1">
                +91 7080909590
              </div>
            </div>
            <p className="text-xs text-stone-500 font-normal">
              Monday to Saturday, 9:30 AM to 7:00 PM IST
            </p>
          </a>

          {/* Email Card */}
          <a
            href="mailto:info@thesolarark.com"
            className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-2xs hover:border-[#8B1E1E]/50 hover:shadow-md transition-all space-y-3 group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md font-heading">
                Official Email
              </span>
            </div>
            <div>
              <div className="text-xs font-bold text-stone-400 uppercase tracking-wider font-heading">
                Written Inquiries &amp; Proposals
              </div>
              <div className="font-heading text-xl font-bold text-slate-900 mt-1">
                info@thesolarark.com
              </div>
            </div>
            <p className="text-xs text-stone-500 font-normal">
              Guaranteed response within 4 business hours
            </p>
          </a>

          {/* Working Hours Card */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 px-2.5 py-1 rounded-md font-heading">
                Open 6 Days
              </span>
            </div>
            <div>
              <div className="text-xs font-bold text-stone-400 uppercase tracking-wider font-heading">
                Engineering Desk Hours
              </div>
              <div className="font-heading text-xl font-bold text-slate-900 mt-1">
                Mon – Sat: 9:30 AM – 7:00 PM
              </div>
            </div>
            <p className="text-xs text-stone-500 font-normal">
              Sunday emergency net-metering on-call support
            </p>
          </div>

        </div>
      </section>

      {/* ── 4. CONSULTATION FORM & REGISTERED OFFICES DIRECTORY ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Consultation Form */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E1E]/10 text-xs font-bold text-[#8B1E1E] font-heading mb-2">
                  <FileCheck className="w-3.5 h-3.5 text-[#8B1E1E]" />
                  <span>Free 3D Rooftop Survey</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Request a Free Solar Site Assessment
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 mt-1 leading-relaxed">
                  Our certified engineer will inspect your roof structure, evaluate shadow conditions, and calculate exact monthly savings with zero obligation.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-emerald-900">
                    Site Visit Request Confirmed!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    Thank you <strong>{formData.name}</strong>. A dedicated SolarArk field engineer will contact you at <strong>{formData.phone}</strong> to confirm your appointment time in <strong>{formData.city}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-emerald-700 underline mt-2 cursor-pointer hover:text-emerald-900"
                  >
                    Submit another site assessment request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 font-heading mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 focus:border-[#8B1E1E] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 font-heading mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 focus:border-[#8B1E1E] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 font-heading mb-1.5">
                        City / District *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Amravati, Nagpur, Sambhajinagar"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 focus:border-[#8B1E1E] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 font-heading mb-1.5">
                        Property Category
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 focus:border-[#8B1E1E] bg-white transition-all"
                      >
                        <option>Individual Home / Villa</option>
                        <option>Housing Society / Apartment</option>
                        <option>Commercial / Office Building</option>
                        <option>Industrial Factory / Warehouse</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 font-heading mb-1.5">
                      Average Monthly Electricity Bill
                    </label>
                    <select
                      value={formData.monthlyBill}
                      onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 focus:border-[#8B1E1E] bg-white transition-all"
                    >
                      <option>Under ₹3,000 / month</option>
                      <option>₹3,000 - ₹5,000 / month</option>
                      <option>₹5,000 - ₹10,000 / month</option>
                      <option>₹10,000 - ₹25,000 / month</option>
                      <option>Above ₹25,000 / month (Commercial/Society)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 font-heading mb-1.5">
                      Message / Special Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify your roof type (RCC slab, tin shade), shadow conditions, or preferred time for survey..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]/20 focus:border-[#8B1E1E] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#8B1E1E] hover:bg-[#5E1212] active:scale-[0.98] text-white font-heading font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md shadow-[#8B1E1E]/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
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

                  <p className="text-[11px] text-stone-500 text-center pt-1">
                    🔒 Privacy Assured: We only contact you regarding your solar rooftop assessment.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Right Offices Directory */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E1E]/10 text-xs font-bold text-[#8B1E1E] font-heading">
                <Building2 className="w-3.5 h-3.5" />
                <span>Regional Footprint</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                SolarArk Registered Offices
              </h2>
              <p className="text-xs sm:text-sm text-stone-500">
                Visit our regional headquarters and engineering centers across Maharashtra.
              </p>
            </div>

            <div className="space-y-4">
              {offices.map((off, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-2xs space-y-3 hover:border-[#8B1E1E]/50 hover:shadow-xs transition-all"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-slate-900 font-heading">
                      {off.city}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-red-50 text-[#8B1E1E] px-2.5 py-0.5 rounded-full font-heading border border-red-200">
                      {off.badge}
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600">
                    <MapPin className="w-4 h-4 text-[#8B1E1E] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{off.address}</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600 pt-2.5 border-t border-stone-100">
                    <div className="flex items-center gap-3">
                      <a href={`tel:${off.phone}`} className="hover:text-[#8B1E1E] font-semibold flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-stone-400" />
                        <span>{off.phone}</span>
                      </a>
                      <span className="text-stone-300">•</span>
                      <a href={`mailto:${off.email}`} className="hover:text-[#8B1E1E] font-medium flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-stone-400" />
                        <span>{off.email}</span>
                      </a>
                    </div>

                    <a
                      href={off.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#8B1E1E] hover:underline cursor-pointer"
                    >
                      <span>Get Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
