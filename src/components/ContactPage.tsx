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
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Send,
  ShieldCheck,
  Building2,
  ChevronDown
} from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';

interface ContactPageProps {
  onNavigate: (path: string) => void;
  onCtaClick?: () => void;
}

// Vector silhouette path extracted and smoothed from authentic Maharashtra geometry
const MAHARASHTRA_PATH =
  'M 48.0,128.2 L 45.7,124.8 L 41.2,127.1 L 37.9,121.5 L 31.8,119.8 L 27.3,110.9 ' +
  'L 27.3,103.0 L 23.9,98.6 L 18.4,76.2 L 16.1,75.1 L 17.2,68.4 L 15.0,65.1 ' +
  'L 18.4,57.2 L 21.1,56.7 L 25.6,58.9 L 28.4,57.2 L 27.3,51.7 L 33.4,51.1 ' +
  'L 35.1,49.4 L 34.0,41.6 L 36.2,39.4 L 30.6,36.0 L 30.6,32.7 L 40.7,26.0 ' +
  'L 34.0,23.7 L 34.0,19.3 L 31.8,20.4 L 32.3,16.5 L 33.4,17.6 L 40.1,13.1 ' +
  'L 48.0,12.0 L 50.7,13.7 L 49.6,15.9 L 53.0,18.1 L 50.7,19.3 L 53.5,22.1 ' +
  'L 60.2,23.2 L 62.5,27.6 L 68.1,26.5 L 71.4,29.9 L 75.9,29.9 L 78.1,32.1 ' +
  'L 85.9,32.1 L 89.3,33.2 L 90.4,36.6 L 91.5,32.1 L 96.5,32.7 L 92.1,27.1 ' +
  'L 94.3,26.0 L 93.2,24.8 L 94.3,22.6 L 96.0,23.2 L 97.1,20.9 L 102.1,22.6 ' +
  'L 106.0,29.9 L 106.6,27.1 L 114.4,21.5 L 112.2,18.1 L 115.0,17.6 L 122.2,20.4 ' +
  'L 122.2,22.6 L 125.6,26.0 L 125.6,30.4 L 127.3,31.0 L 127.8,23.7 L 133.4,20.4 ' +
  'L 131.2,19.3 L 131.7,16.5 L 136.8,18.1 L 137.9,21.5 L 136.2,23.2 L 159.7,23.2 ' +
  'L 166.4,20.9 L 168.0,22.6 L 168.6,29.9 L 171.9,28.8 L 173.6,27.1 L 173.1,25.4 ' +
  'L 175.3,26.5 L 180.9,25.4 L 188.7,29.9 L 192.0,29.9 L 192.0,27.6 L 194.3,29.9 ' +
  'L 197.6,29.9 L 201.0,26.5 L 203.2,26.5 L 206.6,29.9 L 211.0,29.9 L 212.7,33.8 ' +
  'L 218.3,38.2 L 218.3,40.5 L 213.8,43.8 L 214.9,46.1 L 213.8,51.7 L 217.2,57.2 ' +
  'L 217.2,63.9 L 214.9,67.3 L 217.2,76.2 L 211.6,82.9 L 216.1,86.3 L 216.1,91.9 ' +
  'L 217.7,93.5 L 221.1,93.5 L 225.0,97.5 L 225.0,100.8 L 222.2,104.7 L 213.8,104.2 ' +
  'L 207.1,115.3 L 208.2,120.9 L 203.2,125.9 L 199.9,127.1 L 197.1,125.4 L 198.2,119.8 ' +
  'L 194.8,116.4 L 194.8,112.0 L 198.2,104.2 L 194.3,99.1 L 192.0,99.1 L 188.7,95.8 ' +
  'L 184.2,98.0 L 182.0,96.9 L 173.1,98.0 L 171.9,96.9 L 167.5,99.1 L 164.1,94.7 ' +
  'L 155.2,90.2 L 148.5,90.2 L 146.8,91.9 L 147.9,94.1 L 146.8,100.8 L 142.3,109.7 ' +
  'L 140.7,109.2 L 136.8,112.0 L 137.9,122.0 L 135.1,124.8 L 128.4,121.5 L 127.3,122.6 ' +
  'L 118.9,114.2 L 118.9,110.9 L 116.1,109.2 L 109.4,115.9 L 101.6,110.3 L 94.9,109.2 ' +
  'L 94.3,114.2 L 87.0,121.5 L 83.7,121.5 L 81.5,118.1 L 72.5,118.1 L 69.2,114.8 ' +
  'L 65.8,114.8 L 62.5,110.3 L 58.0,113.6 L 53.5,112.5 L 50.7,114.2 L 53.0,120.9 Z';

interface OfficeLocation {
  id: string;
  name: string;
  type: string;
  badge: string;
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
  dot: { cx: number; cy: number };
  label: { x: number; y: number; anchor: 'start' | 'end' | 'middle' };
}

const OFFICES: OfficeLocation[] = [
  {
    id: 'amravati',
    name: 'Amravati (HQ)',
    type: 'Head Office & Engineering Center',
    badge: 'Central HQ',
    address: 'Mira Sadan, House No. 27 A, Krushnarpan Colony, Amravati, Maharashtra 444605',
    phone: '+91 7080909590',
    email: 'info@thesolarark.com',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=20.916927,77.749208',
    dot: { cx: 135, cy: 36 },
    label: { x: 144, y: 38, anchor: 'start' },
  },
  {
    id: 'akola',
    name: 'Akola',
    type: 'Regional Operations Center',
    badge: 'Operations Hub',
    address: 'Regional Operations & Engineering Service Desk, Akola, Maharashtra',
    phone: '+91 7080909590',
    email: 'info@thesolarark.com',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=20.705900,77.021900',
    dot: { cx: 108, cy: 52 },
    label: { x: 99, y: 54, anchor: 'end' },
  },
  {
    id: 'wardha',
    name: 'Wardha',
    type: 'Vidarbha Regional Branch',
    badge: 'Vidarbha Hub',
    address: 'C/o Kishore Surkar, Infront Of Amit Tailors, Near Dr. Mehre Clinic, Arts College Road, Arvi Naka, Wardha',
    phone: '+91 7080909590',
    email: 'info@thesolarark.com',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=20.754335,78.601618',
    dot: { cx: 148, cy: 62 },
    label: { x: 157, y: 64, anchor: 'start' },
  },
  {
    id: 'sambhajinagar',
    name: 'Sambhajinagar',
    type: 'Marathwada Regional Office',
    badge: 'Marathwada Hub',
    address: 'Near Saptapadi Mangal Karyalaya Road, H.No. 49R.-29, Baliram Patil School Road, Chh. Sambhajinagar',
    phone: '+91 7080909590',
    email: 'info@thesolarark.com',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=19.896246,75.358003',
    dot: { cx: 82, cy: 92 },
    label: { x: 73, y: 94, anchor: 'end' },
  },
];

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onCtaClick,
}) => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    propertyType: 'Select property type',
    monthlyBill: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeOfficeId, setActiveOfficeId] = useState<string>('amravati');
  const [hoveredOfficeId, setHoveredOfficeId] = useState<string | null>(null);

  const activeOffice = OFFICES.find((o) => o.id === activeOfficeId) || OFFICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Hello SolarArk Team! ☀️\n\nI would like to request a Free Solar Assessment.\n\n📌 *Enquiry Details:*\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *Email:* ${formData.email || 'N/A'}\n• *City / Location:* ${formData.city || 'Maharashtra'}\n• *Property Type:* ${formData.propertyType !== 'Select property type' ? formData.propertyType : 'Not Specified'}\n• *Monthly Bill:* ${formData.monthlyBill || 'Not Specified'}\n• *Message:* ${formData.message || 'None'}`;
    const whatsappUrl = `https://wa.me/917080909590?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="pt-[68px] min-h-screen bg-[#F7F5F0] text-[#151817] selection:bg-[#7A211D] selection:text-white font-body"
      itemScope
      itemType="https://schema.org/SolarEnergyContractor"
    >
      {/* ── Hidden Structured Data Microdata for SEO ── */}
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

      {/* ════════════════════════════════════════════════════════════════════════
          1. HERO BAND — "Let's talk about your space."
             (Compact, structured header matching reference crop — NO unnecessary dead space)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#F7F5F0] pt-6 sm:pt-8 lg:pt-9 pb-6 sm:pb-8 lg:pb-9">
        {/* Right-Side Environmental Photographic Scene — Seamless PNG Blend (Desktop) */}
        <div className="absolute right-0 top-0 bottom-0 pointer-events-none select-none overflow-hidden hidden lg:block z-0">
          <img
            src="/images/contact-hero-villa-crop.png"
            alt="Modern architectural villa with rooftop solar canopy catching warm sunlight"
            className="h-full w-auto object-contain object-[right_top]"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-xl lg:max-w-md space-y-3 sm:space-y-3.5">
            <span className="text-[11px] sm:text-xs font-medium tracking-[0.18em] text-[#6C6C68] uppercase font-body block">
              CONTACT
            </span>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-medium text-[#151817] tracking-tight leading-[1.08] m-0">
              Let’s talk <br />
              about <span className="word-accent-subtle font-medium">your space.</span>
            </h1>

            {/* Subhead with Subtle Editorial Hairline */}
            <div className="flex items-start gap-3 pt-1">
              <span className="w-6 h-[1.5px] bg-[#E6E3DD] mt-2 shrink-0" />
              <p className="text-xs sm:text-sm lg:text-[14.5px] text-[#6C6C68] font-normal leading-relaxed m-0 max-w-[340px] font-body">
                Tell us what you're planning and our team will help you understand the right solar solution.
              </p>
            </div>
          </div>

          {/* Mobile Image Display (Clean and Card-Free) */}
          <div className="lg:hidden mt-6 relative w-full aspect-[16/9] overflow-hidden rounded-xl">
            <img
              src="/images/contact-hero-villa-crop.png"
              alt="Modern architectural villa with rooftop solar canopy catching warm sunlight"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          2. TWO-COLUMN INTERACTION SYSTEM: GET IN TOUCH (LEFT) + ENQUIRY FORM (RIGHT)
             (Strictly open layout sitting directly on the section — NO card box enclosure)
      ════════════════════════════════════════════════════════════════════════ */}
      <section id="enquiry-form" className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-10 lg:pt-12 pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* ── Left Column: "Get in Touch" (~5 cols) ── */}
          <div className="lg:col-span-5 space-y-7">
            <div className="space-y-2">
              <h2 className="font-heading text-2xl sm:text-3xl font-medium text-[#151817] tracking-tight leading-tight m-0">
                Get in Touch
              </h2>
              <p className="text-sm sm:text-base text-[#6C6C68] leading-relaxed m-0 font-body">
                We're here to answer your questions and discuss your solar needs.
              </p>
            </div>

            {/* 4 Clean Contact Method Rows */}
            <div className="space-y-6 pt-1">
              
              {/* Call Us */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E6E3DD] text-[#7A211D] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <Phone className="w-4.5 h-4.5 stroke-[1.75]" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider text-[#6C6C68] uppercase font-body m-0">
                    Call Us
                  </p>
                  <a
                    href="tel:+917080909590"
                    itemProp="telephone"
                    className="text-base sm:text-[17px] font-medium text-[#151817] hover:text-[#7A211D] transition-colors tabular-nums mt-0.5 block font-body"
                  >
                    +91 7080909590
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E6E3DD] text-[#7A211D] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <Mail className="w-4.5 h-4.5 stroke-[1.75]" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider text-[#6C6C68] uppercase font-body m-0">
                    Email
                  </p>
                  <a
                    href="mailto:info@thesolarark.com"
                    itemProp="email"
                    className="text-base sm:text-[17px] font-medium text-[#151817] hover:text-[#7A211D] transition-colors mt-0.5 block font-body"
                  >
                    info@thesolarark.com
                  </a>
                </div>
              </div>

              {/* Visit Us */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E6E3DD] text-[#7A211D] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <MapPin className="w-4.5 h-4.5 stroke-[1.75]" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider text-[#6C6C68] uppercase font-body m-0">
                    Visit Us
                  </p>
                  <p className="text-base sm:text-[17px] font-medium text-[#151817] mt-0.5 m-0 font-body">
                    Amravati (HQ)
                  </p>
                  <p className="text-xs sm:text-sm text-[#6C6C68] font-normal m-0 mt-0.5 font-body">
                    Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E6E3DD] text-[#7A211D] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <Clock className="w-4.5 h-4.5 stroke-[1.75]" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider text-[#6C6C68] uppercase font-body m-0">
                    Business Hours
                  </p>
                  <p className="text-base sm:text-[17px] font-medium text-[#151817] mt-0.5 m-0 font-body">
                    Mon – Sat
                  </p>
                  <p className="text-xs sm:text-sm text-[#6C6C68] font-normal m-0 mt-0.5 font-body">
                    10:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

            </div>

            {/* Chat on WhatsApp Red Button — Full Width inside Left Panel */}
            <div className="pt-2">
              <a
                href="https://wa.me/917080909590?text=Hello%20SolarArk%20Team!%20I%20would%20like%20to%20discuss%20solar%20solutions%20for%20my%20property."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#7A211D] hover:bg-[#631B18] text-white font-medium font-body text-sm sm:text-base transition-all shadow-sm cursor-pointer min-h-[44px]"
              >
                <MessageSquare className="w-4.5 h-4.5 fill-white/20" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </a>
            </div>
          </div>

          {/* ── Right Column: "Send Us an Enquiry" (Sitting cleanly on the section — NO card enclosure) ── */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2 mb-6">
              <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#151817] tracking-tight leading-tight m-0">
                Send Us an Enquiry
              </h3>
              <p className="text-sm text-[#6C6C68] leading-relaxed m-0 font-body">
                Fill in a few details and our team will get in touch with you.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 my-6" aria-live="polite">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center font-medium">
                  <CheckCircle2 className="w-7 h-7 stroke-[2]" />
                </div>
                <h4 className="font-heading text-2xl font-medium text-emerald-900 m-0">
                  Enquiry Received!
                </h4>
                <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto m-0 font-body">
                  Thank you, <strong>{formData.name}</strong>. A certified SolarArk engineer is reviewing your details and will connect with you at <strong>{formData.phone}</strong>.
                </p>
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/917080909590?text=${encodeURIComponent(`Hello SolarArk Team! ☀️\n\nI just submitted an enquiry for a solar assessment.\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *City:* ${formData.city || 'Maharashtra'}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-700 px-5 py-3 rounded-xl cursor-pointer transition-colors shadow-xs font-body"
                  >
                    <span>Open in WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-medium text-emerald-800 underline cursor-pointer hover:text-emerald-950 p-2 font-body"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-lg border border-[#E6E3DD] text-sm text-[#151817] placeholder:text-[#6C6C68]/60 focus:outline-none focus:ring-2 focus:ring-[#7A211D]/20 focus:border-[#7A211D] transition-all bg-white font-body"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-lg border border-[#E6E3DD] text-sm text-[#151817] placeholder:text-[#6C6C68]/60 focus:outline-none focus:ring-2 focus:ring-[#7A211D]/20 focus:border-[#7A211D] transition-all bg-white font-body"
                    />
                  </div>
                </div>

                {/* Row 2: Email & City / Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-lg border border-[#E6E3DD] text-sm text-[#151817] placeholder:text-[#6C6C68]/60 focus:outline-none focus:ring-2 focus:ring-[#7A211D]/20 focus:border-[#7A211D] transition-all bg-white font-body"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="City / Location *"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-lg border border-[#E6E3DD] text-sm text-[#151817] placeholder:text-[#6C6C68]/60 focus:outline-none focus:ring-2 focus:ring-[#7A211D]/20 focus:border-[#7A211D] transition-all bg-white font-body"
                    />
                  </div>
                </div>

                {/* Row 3: Property Type & Monthly Bill */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-lg border border-[#E6E3DD] text-sm focus:outline-none focus:ring-2 focus:ring-[#7A211D]/20 focus:border-[#7A211D] transition-all bg-white cursor-pointer font-body ${
                        formData.propertyType === 'Select property type' ? 'text-[#6C6C68]/60' : 'text-[#151817]'
                      }`}
                    >
                      <option value="Select property type" disabled>
                        Select property type *
                      </option>
                      <option value="Individual Home / Villa">Individual Home / Villa</option>
                      <option value="Housing Society / Apartment">Housing Society / Apartment</option>
                      <option value="Commercial / Office Building">Commercial / Office Building</option>
                      <option value="Industrial Factory / Warehouse">Industrial Factory / Warehouse</option>
                    </select>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Monthly Electricity Bill / Requirement (e.g. 5000)"
                      value={formData.monthlyBill}
                      onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-lg border border-[#E6E3DD] text-sm text-[#151817] placeholder:text-[#6C6C68]/60 focus:outline-none focus:ring-2 focus:ring-[#7A211D]/20 focus:border-[#7A211D] transition-all bg-white font-body"
                    />
                  </div>
                </div>

                {/* Row 4: Your Message */}
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message (Tell us a bit about your requirement...)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-lg border border-[#E6E3DD] text-sm text-[#151817] placeholder:text-[#6C6C68]/60 focus:outline-none focus:ring-2 focus:ring-[#7A211D]/20 focus:border-[#7A211D] transition-all resize-none bg-white font-body"
                  />
                </div>

                {/* Submit Button (Full Width Maroon Rounded Rectangle Matching Reference) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-lg bg-[#7A211D] hover:bg-[#631B18] text-white font-medium font-body text-base flex items-center justify-center gap-2.5 transition-all shadow-sm cursor-pointer disabled:opacity-75"
                  >
                    <span>{isSubmitting ? 'Submitting Enquiry...' : 'Request a Solar Assessment'}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2]" />
                  </button>

                  <p className="text-[11.5px] sm:text-xs text-[#6C6C68] text-left pt-2.5 m-0 leading-normal font-body">
                    * By submitting this form, you agree to be contacted by the Solar Ark team.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          3. OUR PRESENCE IN MAHARASHTRA STRIP (STRUCTURED MAP + LIST PATTERN)
             (Unified 2-Column Architectural Panel — Proper Maharashtra Vector Map & Zero Dead Space)
      ════════════════════════════════════════════════════════════════════════ */}
      <section id="our-presence" className="w-full bg-[#F7F5F0] border-y border-[#E6E3DD] py-10 sm:py-12 lg:py-14">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Unified Architectural Shell — Zero Dead Space, Sharp Corners */}
          <div className="bg-white border border-[#E6E3DD] rounded-[4px] shadow-2xs overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch divide-y lg:divide-y-0 lg:divide-x divide-[#E6E3DD]">
              
              {/* ── LEFT PANEL (5 cols): Section Header & Office Directory ── */}
              <div className="lg:col-span-5 p-6 sm:p-7 lg:p-8 flex flex-col justify-between space-y-6">
                
                {/* Header Text */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#7A211D]" />
                    <span className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A211D]">
                      REGIONAL FOOTPRINT
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-[28px] font-medium text-[#151817] tracking-tight leading-tight m-0">
                    Our Presence in Maharashtra
                  </h2>
                  <p className="text-xs sm:text-[13.5px] text-[#6C6C68] font-normal leading-relaxed m-0 font-body">
                    Click an office below or tap a map marker to inspect local engineering support, direct contacts, and directions.
                  </p>
                </div>

                {/* Office Cards Directory (Sharp rounded-[4px] corners) */}
                <div className="space-y-2.5" role="tablist" aria-label="Office locations">
                  {OFFICES.map((office) => {
                    const isActive = activeOfficeId === office.id;
                    const isHovered = hoveredOfficeId === office.id;
                    return (
                      <div
                        key={office.id}
                        onMouseEnter={() => setHoveredOfficeId(office.id)}
                        onMouseLeave={() => setHoveredOfficeId(null)}
                        className={`rounded-[4px] transition-all duration-200 border ${
                          isActive
                            ? 'bg-[#FAF9F6] border-[#7A211D]/40 border-l-[3px] border-l-[#7A211D] shadow-2xs'
                            : isHovered
                            ? 'bg-stone-50/80 border-[#E6E3DD]'
                            : 'bg-white border-[#E6E3DD]/80 hover:border-[#E6E3DD]'
                        }`}
                      >
                        <button
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          onClick={() => setActiveOfficeId(office.id)}
                          className="w-full flex items-center justify-between p-3.5 text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7A211D] rounded-[4px]"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span
                              className={`w-2 h-2 rounded-full transition-all shrink-0 ${
                                isActive
                                  ? 'bg-[#7A211D] ring-4 ring-[#7A211D]/20'
                                  : 'bg-[#6C6C68]/30 group-hover:bg-[#7A211D]'
                              }`}
                            />
                            <div className="min-w-0">
                              <span
                                className={`text-sm sm:text-[14.5px] transition-colors block truncate font-body ${
                                  isActive
                                    ? 'font-semibold text-[#151817]'
                                    : 'font-medium text-[#151817] group-hover:text-[#7A211D]'
                                }`}
                              >
                                {office.name}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0 pl-2">
                            <span
                              className={`text-[9px] font-medium uppercase tracking-[0.14em] px-2 py-0.5 rounded-[3px] border transition-colors font-body ${
                                isActive
                                  ? 'bg-red-50 text-[#7A211D] border-red-200'
                                  : 'bg-[#F7F5F0] text-[#6C6C68] border-[#E6E3DD]'
                              }`}
                            >
                              {office.badge}
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isActive ? 'rotate-180 text-[#7A211D]' : 'text-stone-400 group-hover:text-stone-600'
                              }`}
                            />
                          </div>
                        </button>

                        {/* Expanded Details on Active */}
                        {isActive && (
                          <div className="px-4 pb-4 pt-1 text-xs text-[#6C6C68] space-y-3 border-t border-[#E6E3DD]/70 font-body">
                            <div className="flex items-start gap-2 pt-2">
                              <MapPin className="w-3.5 h-3.5 text-[#7A211D] shrink-0 mt-0.5" />
                              <p className="m-0 leading-relaxed font-normal text-stone-700">{office.address}</p>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#E6E3DD]/60">
                              <a
                                href={`tel:${office.phone.replace(/\s+/g, '')}`}
                                className="font-medium text-[#151817] hover:text-[#7A211D] transition-colors font-body flex items-center gap-1.5"
                              >
                                <Phone className="w-3 h-3 text-[#7A211D]" />
                                <span>{office.phone}</span>
                              </a>

                              <a
                                href={office.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11.5px] font-medium text-[#7A211D] hover:underline inline-flex items-center gap-1 font-body"
                              >
                                <span>Directions</span>
                                <ArrowRight className="w-3 h-3 stroke-[2]" />
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Quick Contact Strip inside Left Panel */}
                <div className="pt-2 border-t border-[#E6E3DD] flex items-center justify-between text-xs text-[#6C6C68]">
                  <span>Direct Customer Care:</span>
                  <a href="tel:+917080909590" className="font-medium text-[#7A211D] hover:underline font-body">
                    +91 7080909590
                  </a>
                </div>

              </div>

              {/* ── RIGHT PANEL (7 cols): Generous, Proper Maharashtra Map ── */}
              <div className="lg:col-span-7 bg-[#FAF9F6] p-6 sm:p-8 flex flex-col justify-between relative min-h-[380px] lg:min-h-[460px]">
                
                {/* Top Status Header */}
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#E6E3DD]/60 select-none">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#151817] font-body">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Active Hub: <strong className="text-[#7A211D]">{activeOffice.name}</strong></span>
                  </div>
                  <span className="text-[11px] font-body text-[#6C6C68]">
                    Tap marker on map to switch
                  </span>
                </div>

                {/* Generously Scaled SVG Maharashtra Canvas */}
                <div className="w-full flex-1 flex items-center justify-center py-4 sm:py-6">
                  <div className="w-full max-w-[500px] aspect-[240/150] relative select-none">
                    <svg
                      viewBox="0 0 240 150"
                      className="w-full h-full drop-shadow-xs"
                      aria-label="Proper Map of Maharashtra with SolarARK office locations"
                    >
                      {/* Authentic Maharashtra State Outline */}
                      <path
                        d={MAHARASHTRA_PATH}
                        className="fill-[#E5E5E2] stroke-[#D0CCC3] stroke-[1] transition-colors"
                      />

                      {/* Cartographic District Internal Traces */}
                      <path
                        d="M 46,36 Q 44,70 42,95 T 38,125"
                        fill="none"
                        stroke="#F4F1EB"
                        strokeWidth="0.85"
                        strokeLinecap="round"
                        strokeOpacity="0.85"
                      />
                      <path
                        d="M 95,32 Q 92,60 100,85 Q 106,105 110,128"
                        fill="none"
                        stroke="#F4F1EB"
                        strokeWidth="0.85"
                        strokeLinecap="round"
                        strokeOpacity="0.85"
                      />
                      <path
                        d="M 125,26 Q 120,55 130,78 Q 140,95 155,108"
                        fill="none"
                        stroke="#F4F1EB"
                        strokeWidth="0.85"
                        strokeLinecap="round"
                        strokeOpacity="0.85"
                      />
                      <path
                        d="M 160,34 Q 170,62 178,85"
                        fill="none"
                        stroke="#F4F1EB"
                        strokeWidth="0.85"
                        strokeLinecap="round"
                        strokeOpacity="0.85"
                      />
                      <path
                        d="M 45,72 Q 85,76 122,70"
                        fill="none"
                        stroke="#F4F1EB"
                        strokeWidth="0.85"
                        strokeLinecap="round"
                        strokeOpacity="0.85"
                      />

                      {/* Connected Statewide Network Lines from Amravati HQ */}
                      <path
                        d="M 135,36 L 108,52 M 135,36 L 148,62 M 108,52 L 82,92"
                        className="stroke-[#7A211D]/30 stroke-[0.85] stroke-dasharray-[2.5,2.5] fill-none"
                      />

                      {/* State Watermark */}
                      <text
                        x="50"
                        y="112"
                        className="font-body text-[7px] tracking-[0.24em] fill-stone-400 font-bold uppercase select-none pointer-events-none"
                      >
                        MAHARASHTRA
                      </text>

                      {/* Accurate Office Markers & Labels */}
                      {OFFICES.map((office) => {
                        const isSelected = activeOfficeId === office.id;
                        const isHovered = hoveredOfficeId === office.id;
                        const isHighlighted = isSelected || isHovered;

                        return (
                          <g
                            key={office.id}
                            className="cursor-pointer transition-all duration-200"
                            onClick={() => setActiveOfficeId(office.id)}
                            onMouseEnter={() => setHoveredOfficeId(office.id)}
                            onMouseLeave={() => setHoveredOfficeId(null)}
                            role="button"
                            tabIndex={0}
                            aria-label={`Select ${office.name}`}
                          >
                            {/* Broad touch/click hit area */}
                            <circle cx={office.dot.cx} cy={office.dot.cy} r="14" className="fill-transparent" />

                            {/* Outer Ping Glow on Active/Hover */}
                            {isHighlighted && (
                              <circle
                                cx={office.dot.cx}
                                cy={office.dot.cy}
                                r="8.5"
                                className="fill-[#7A211D]/25 animate-ping origin-center"
                              />
                            )}

                            {/* Outer Marker Ring */}
                            <circle
                              cx={office.dot.cx}
                              cy={office.dot.cy}
                              r={isHighlighted ? '5.5' : '4'}
                              className={`${
                                isHighlighted ? 'fill-[#7A211D]' : 'fill-[#7A211D]/90'
                              } stroke-white stroke-[1.5] transition-all`}
                            />

                            {/* Inner Dot for HQ */}
                            {office.id === 'amravati' && (
                              <circle
                                cx={office.dot.cx}
                                cy={office.dot.cy}
                                r="1.8"
                                className="fill-white pointer-events-none"
                              />
                            )}

                            {/* City Typography Label */}
                            <text
                              x={office.label.x}
                              y={office.label.y}
                              textAnchor={office.label.anchor}
                              className={`font-body transition-all select-none pointer-events-none ${
                                isHighlighted
                                  ? 'font-bold text-[9px] fill-[#7A211D]'
                                  : 'font-semibold text-[8px] fill-[#151817]'
                              }`}
                            >
                              {office.name.replace(' (HQ)', '')}
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                </div>

                {/* Bottom Trust & Operational Coverage Bar */}
                <div className="pt-3 border-t border-[#E6E3DD]/60 flex flex-wrap items-center justify-between gap-3 text-[11.5px] text-[#6C6C68] font-body select-none">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#7A211D]" />
                    <span>Statewide MSEDCL Net-Metering Liaison</span>
                  </div>
                  <span className="hidden sm:inline text-stone-300">•</span>
                  <span>Turnkey EPC &amp; 25-Year Performance Guarantee</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          4. CLOSING PRE-FOOTER CTA BAND — "Ready to explore solar for your property?"
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#151817] select-none">
        {/* Full-Bleed Golden Sunset Rooftop Panoramic Photography */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/contact-bottom-cta-bg.jpg"
            alt="Panoramic solar rooftop installation catching golden sunset rays"
            className="w-full h-full object-cover object-center opacity-75"
          />
          {/* Deep Linear Gradient Ensuring WCAG AAA Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#151817]/95 via-[#151817]/80 to-[#151817]/55" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-18 lg:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-[38px] font-medium text-white tracking-tight leading-tight m-0 drop-shadow-sm">
              Ready to explore solar <br className="hidden sm:inline" />for your property?
            </h3>
            <p className="text-sm sm:text-base text-stone-200 font-normal leading-relaxed m-0 font-body">
              Our team is here to help you take the next step.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => {
                const el = document.getElementById('enquiry-form');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else if (onCtaClick) {
                  onCtaClick();
                }
              }}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#7A211D] hover:bg-[#631B18] text-white font-medium font-body text-base transition-all shadow-lg hover:shadow-xl hover:translate-x-0.5 cursor-pointer border border-white/10"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
