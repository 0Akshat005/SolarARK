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
import { SOLARARK_OFFICES as OFFICES, OfficeLocation, MAHARASHTRA_PATH } from '../data/officeLocations';
import { OfficeLocationInteractiveMap } from './OfficeLocationInteractiveMap';

interface ContactPageProps {
  onNavigate: (path: string) => void;
  onCtaClick?: () => void;
  prefilledPincode?: string;
  prefilledBill?: number;
}

// Single source of truth for all 4 office locations is imported from ../data/officeLocations

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onCtaClick,
  prefilledPincode,
  prefilledBill,
}) => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    propertyType: 'Select property type',
    monthlyBill: prefilledBill ? `₹${prefilledBill.toLocaleString('en-IN')}` : '',
    message: prefilledPincode ? `Pincode: ${prefilledPincode}` : '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  React.useEffect(() => {
    if (prefilledBill || prefilledPincode) {
      setFormData((prev) => ({
        ...prev,
        monthlyBill: prefilledBill ? `₹${prefilledBill.toLocaleString('en-IN')}` : prev.monthlyBill,
        message: prefilledPincode
          ? prev.message && !prev.message.includes(prefilledPincode)
            ? `${prev.message} | Pincode: ${prefilledPincode}`
            : `Pincode: ${prefilledPincode}`
          : prev.message,
      }));
    }
  }, [prefilledBill, prefilledPincode]);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeOfficeId, setActiveOfficeId] = useState<string>('amravati');
  const [hoveredOfficeId, setHoveredOfficeId] = useState<string | null>(null);

  const activeOffice = OFFICES.find((o) => o.id === activeOfficeId) || OFFICES[0];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name.';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    const isValidPhone =
      cleanPhone.length === 10 ||
      (cleanPhone.length === 11 && cleanPhone.startsWith('0')) ||
      (cleanPhone.length === 12 && cleanPhone.startsWith('91'));
    if (!isValidPhone) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

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
      className="pt-[68px] min-h-screen bg-[#F7F5F0] text-[#151817] selection:bg-[#7A211D] selection:text-white font-body overflow-x-hidden"
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
             (Mobile-first, single-column stack on phones with lightweight integrated image)
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

            <h1 className="font-heading text-2xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-medium text-[#151817] tracking-tight leading-[1.12] sm:leading-[1.08] m-0">
              Let’s talk <br className="hidden sm:inline" />
              about <span className="word-accent-subtle font-medium">your space.</span>
            </h1>

            {/* Subhead with Subtle Editorial Hairline */}
            <div className="flex items-start gap-3 pt-1">
              <span className="w-6 h-[1.5px] bg-[#E6E3DD] mt-2 shrink-0" />
              <p className="text-xs sm:text-sm lg:text-[14.5px] text-[#6C6C68] font-normal leading-relaxed m-0 max-w-[340px] font-body">
                Tell us what you're planning and our team will help you understand the right solar solution.
              </p>
            </div>

            {/* Obvious Call-to-Scroll for Mobile Thumbs */}
            <div className="pt-2 lg:hidden">
              <button
                type="button"
                onClick={scrollToEnquiry}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#7A211D] hover:text-[#631B18] font-body transition-colors cursor-pointer py-1.5 min-h-[44px]"
              >
                <span>Jump directly to Enquiry Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Mobile Image Display (Integrated, lightweight, full-width with subtle border) */}
          <div className="lg:hidden mt-5 sm:mt-6 relative w-full aspect-[16/9] overflow-hidden rounded-[4px] border border-[#E6E3DD]">
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
             (Single-column stack on phones: Get in Touch first, Enquiry Form next)
      ════════════════════════════════════════════════════════════════════════ */}
      <section id="enquiry-form" className="scroll-mt-24 sm:scroll-mt-28 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-10 lg:pt-12 pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* ── Left Column: "Get in Touch" (~5 cols on desktop, full-width first on mobile) ── */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7">
            <div className="space-y-2">
              <h2 className="font-heading text-2xl sm:text-3xl font-medium text-[#151817] tracking-tight leading-tight m-0">
                Get in Touch
              </h2>
              <p className="text-sm sm:text-base text-[#6C6C68] leading-relaxed m-0 font-body">
                We're here to answer your questions and discuss your solar needs.
              </p>
            </div>

            {/* 4 Clean Contact Method Rows (Touch-friendly tap targets on mobile) */}
            <div className="space-y-4 sm:space-y-6 pt-1">
              
              {/* Call Us */}
              <a
                href="tel:+917080909590"
                itemProp="telephone"
                className="group flex items-start gap-4 min-h-[44px] py-1 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E6E3DD] text-[#7A211D] flex items-center justify-center shrink-0 shadow-2xs mt-0.5 group-hover:border-[#7A211D]/40 transition-colors">
                  <Phone className="w-4.5 h-4.5 stroke-[1.75]" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider text-[#6C6C68] uppercase font-body m-0">
                    Call Us
                  </p>
                  <span className="text-base sm:text-[17px] font-medium text-[#151817] group-hover:text-[#7A211D] transition-colors tabular-nums mt-0.5 block font-body">
                    +91 7080909590
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@thesolarark.com"
                itemProp="email"
                className="group flex items-start gap-4 min-h-[44px] py-1 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E6E3DD] text-[#7A211D] flex items-center justify-center shrink-0 shadow-2xs mt-0.5 group-hover:border-[#7A211D]/40 transition-colors">
                  <Mail className="w-4.5 h-4.5 stroke-[1.75]" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider text-[#6C6C68] uppercase font-body m-0">
                    Email
                  </p>
                  <span className="text-base sm:text-[17px] font-medium text-[#151817] group-hover:text-[#7A211D] transition-colors mt-0.5 block font-body">
                    info@thesolarark.com
                  </span>
                </div>
              </a>

              {/* Visit Us */}
              <div className="flex items-start gap-4 min-h-[44px] py-1">
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
              <div className="flex items-start gap-4 min-h-[44px] py-1">
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
            <div className="pt-1 sm:pt-2">
              <a
                href="https://wa.me/917080909590?text=Hello%20SolarArk%20Team!%20I%20would%20like%20to%20discuss%20solar%20solutions%20for%20my%20property."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#7A211D] hover:bg-[#631B18] text-white font-medium font-body text-sm sm:text-base transition-all shadow-sm cursor-pointer min-h-[48px] active:scale-[0.99]"
              >
                <MessageSquare className="w-4.5 h-4.5 fill-white/20 shrink-0" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4 stroke-[2] shrink-0" />
              </a>
            </div>
          </div>

          {/* ── Right Column: "Send Us an Enquiry" (Full-width on mobile, 7 cols on desktop) ── */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 w-full">
            <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
              <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#151817] tracking-tight leading-tight m-0">
                Send Us an Enquiry
              </h3>
              <p className="text-sm text-[#6C6C68] leading-relaxed m-0 font-body">
                Fill in a few details and our team will get in touch with you.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 my-4 sm:my-6" aria-live="polite">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center font-medium">
                  <CheckCircle2 className="w-7 h-7 stroke-[2]" />
                </div>
                <h4 className="font-heading text-xl sm:text-2xl font-medium text-emerald-900 m-0">
                  Enquiry Received!
                </h4>
                <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto m-0 font-body">
                  Thank you, <strong>{formData.name}</strong>. A certified SolarArk engineer is reviewing your details and will connect with you at <strong>{formData.phone}</strong>.
                </p>
                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/917080909590?text=${encodeURIComponent(`Hello SolarArk Team! ☀️\n\nI just submitted an enquiry for a solar assessment.\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *City:* ${formData.city || 'Maharashtra'}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 px-6 py-3.5 rounded-xl cursor-pointer transition-colors shadow-xs font-body min-h-[44px]"
                  >
                    <span>Open in WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto inline-flex items-center justify-center text-xs sm:text-sm font-medium text-emerald-800 underline cursor-pointer hover:text-emerald-950 p-2 font-body min-h-[44px]"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Row 1: Full Name & Phone (Single-column on mobile, 2-column on sm+) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contactName" className="text-xs font-medium text-slate-700 font-body block">
                      Full Name *
                    </label>
                    <input
                      id="contactName"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-4 py-3.5 rounded-lg border text-base sm:text-sm text-[#151817] placeholder:text-[#6C6C68]/60 focus:outline-none focus:ring-2 focus:ring-[#7A211D]/20 focus:border-[#7A211D] transition-all bg-white font-body min-h-[44px] ${
                        errors.name ? 'border-red-400 focus:ring-red-200' : 'border-[#E6E3DD]'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-600 font-medium font-body pt-0.5">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contactPhone" className="text-xs font-medium text-slate-700 font-body block">
                      Phone Number *
                    </label>
                    <input
                      id="contactPhone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full px-4 py-3.5 rounded-lg border text-base sm:text-sm text-[#151817] placeholder:text-[#6C6C68]/60 focus:outline-none focus:ring-2 focus:ring-[#7A211D]/20 focus:border-[#7A211D] transition-all bg-white font-body min-h-[44px] ${
                        errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-[#E6E3DD]'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-600 font-medium font-body pt-0.5">{errors.phone}</p>}
                  </div>
                </div>

                {/* Row 2: Email & City / Location (Single-column on mobile, 2-column on sm+) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contactEmail" className="text-xs font-medium text-slate-700 font-body block">
                      Email Address <span className="text-stone-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="contactEmail"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3.5 rounded-lg border text-base sm:text-sm text-[#151817] placeholder:text-[#6C6C68]/60 focus:outline-none focus:ring-2 focus:ring-[#7A211D]/20 focus:border-[#7A211D] transition-all bg-white font-body min-h-[44px] ${
                        errors.email ? 'border-red-400 focus:ring-red-200' : 'border-[#E6E3DD]'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-600 font-medium font-body pt-0.5">{errors.email}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contactCity" className="text-xs font-medium text-slate-700 font-body block">
                      City / Location
                    </label>
                    <input
                      id="contactCity"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      placeholder="e.g. Amravati, Nagpur, Pune"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full px-4 py-3.5 rounded-lg border border-[#E6E3DD] text-base sm:text-sm text-[#151817] placeholder:text-[#6C6C68]/60 focus:outline-none focus:ring-2 focus:ring-[#7A211D]/20 focus:border-[#7A211D] transition-all bg-white font-body min-h-[44px]"
                    />
                  </div>
                </div>

                {/* Row 3: Property Type & Monthly Bill (Single-column on mobile, 2-column on sm+) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contactPropertyType" className="text-xs font-medium text-slate-700 font-body block">
                      Property Type
                    </label>
                    <select
                      id="contactPropertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={(e) => handleInputChange('propertyType', e.target.value)}
                      className={`w-full px-4 py-3.5 rounded-lg border border-[#E6E3DD] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#7A211D]/20 focus:border-[#7A211D] transition-all bg-white cursor-pointer font-body min-h-[44px] ${
                        formData.propertyType === 'Select property type' ? 'text-[#6C6C68]/60' : 'text-[#151817]'
                      }`}
                    >
                      <option value="Select property type" disabled>
                        Select property type
                      </option>
                      <option value="Individual Home / Villa">Individual Home / Villa</option>
                      <option value="Housing Society / Apartment">Housing Society / Apartment</option>
                      <option value="Commercial / Office Building">Commercial / Office Building</option>
                      <option value="Industrial Factory / Warehouse">Industrial Factory / Warehouse</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contactMonthlyBill" className="text-xs font-medium text-slate-700 font-body block">
                      Monthly Electricity Bill
                    </label>
                    <input
                      id="contactMonthlyBill"
                      name="monthlyBill"
                      type="text"
                      inputMode="numeric"
                      placeholder="e.g. ₹5,000 / month"
                      value={formData.monthlyBill}
                      onChange={(e) => handleInputChange('monthlyBill', e.target.value)}
                      className="w-full px-4 py-3.5 rounded-lg border border-[#E6E3DD] text-base sm:text-sm text-[#151817] placeholder:text-[#6C6C68]/60 focus:outline-none focus:ring-2 focus:ring-[#7A211D]/20 focus:border-[#7A211D] transition-all bg-white font-body min-h-[44px]"
                    />
                  </div>
                </div>

                {/* Row 4: Your Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contactMessage" className="text-xs font-medium text-slate-700 font-body block">
                    Message / Special Requirement
                  </label>
                  <textarea
                    id="contactMessage"
                    name="message"
                    rows={3}
                    placeholder="Tell us a bit about your requirement or roof type..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-4 py-3.5 rounded-lg border border-[#E6E3DD] text-base sm:text-sm text-[#151817] placeholder:text-[#6C6C68]/60 focus:outline-none focus:ring-2 focus:ring-[#7A211D]/20 focus:border-[#7A211D] transition-all resize-none bg-white font-body min-h-[72px]"
                  />
                </div>

                {/* Submit Button (Full Width Maroon Rounded Rectangle Matching Reference) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-lg bg-[#7A211D] hover:bg-[#631B18] text-white font-medium font-body text-base flex items-center justify-center gap-2.5 transition-all shadow-sm cursor-pointer disabled:opacity-75 min-h-[48px] active:scale-[0.99]"
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
          2.5. REAL RECTANGULAR GOOGLE MAP (ABOVE OUR PRESENCE)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-[#F7F5F0] border-t border-[#E6E3DD] pt-8 sm:pt-10 lg:pt-12 pb-2">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <OfficeLocationInteractiveMap
            selectedOfficeId={activeOfficeId}
            onSelectOffice={(id) => setActiveOfficeId(id)}
          />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          3. OUR PRESENCE IN MAHARASHTRA STRIP (ACCORDION + VECTOR MAP + SCENE)
             (Clean single-column sequence on mobile: Title & List -> Map Graphic)
      ════════════════════════════════════════════════════════════════════════ */}
      <section id="our-presence" className="w-full bg-[#F7F5F0] border-y border-[#E6E3DD] py-10 sm:py-12 lg:py-14 relative overflow-hidden">
        {/* Right-Side Atmospheric Photographic Scene (Desktop only) */}
        <div className="hidden lg:block absolute right-0 bottom-0 top-0 w-[45%] max-w-[620px] pointer-events-none select-none overflow-hidden z-0">
          <img
            src="/images/contact-presence-corner.png"
            alt="Architectural villa and greenery in Maharashtra"
            className="w-full h-full object-cover object-right-bottom"
          />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* ── Left Column: Heading & Clean Location List (lg:col-span-5) ── */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-3">
                  <h2 className="font-heading text-2xl sm:text-3xl font-medium text-[#151817] tracking-tight m-0">
                    Our Presence
                  </h2>
                  <span className="w-7 h-[1.5px] bg-[#E6E3DD] mt-1 shrink-0" />
                </div>
                <p className="text-xs sm:text-sm text-[#6C6C68] font-normal leading-relaxed m-0 font-body max-w-md">
                  Click on an office location below or pinpoint on the map to view complete regional contact details.
                </p>
              </div>

              {/* Minimal Clean Accordion List with Sharp rounded-[4px] Corners */}
              <div className="space-y-2 max-w-md w-full" role="tablist" aria-label="Office locations list">
                {OFFICES.map((office) => {
                  const isActive = activeOfficeId === office.id;
                  const isHovered = hoveredOfficeId === office.id;
                  return (
                    <div
                      key={office.id}
                      className={`rounded-[4px] transition-all duration-200 border ${
                        isActive
                          ? 'bg-white border-[#7A211D]/40 border-l-[3px] border-l-[#7A211D] shadow-xs'
                          : isHovered
                          ? 'bg-white/90 border-[#E6E3DD]'
                          : 'bg-white/60 border-[#E6E3DD]/80 hover:border-[#E6E3DD]'
                      }`}
                    >
                      <button
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveOfficeId(office.id)}
                        onMouseEnter={() => setHoveredOfficeId(office.id)}
                        onMouseLeave={() => setHoveredOfficeId(null)}
                        className="w-full flex items-center justify-between p-3 sm:p-3.5 text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7A211D] rounded-[4px] min-h-[44px]"
                        aria-expanded={isActive}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`w-2 h-2 rounded-full transition-all shrink-0 ${
                              isActive
                                ? 'bg-[#7A211D] ring-4 ring-[#7A211D]/20'
                                : 'bg-[#6C6C68]/40 group-hover:bg-[#7A211D]'
                            }`}
                          />
                          <span
                            className={`text-sm sm:text-[14.5px] transition-colors truncate font-body ${
                              isActive
                                ? 'font-semibold text-[#151817]'
                                : 'font-medium text-[#151817] group-hover:text-[#7A211D]'
                            }`}
                          >
                            {office.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 pl-2">
                          <span
                            className={`text-[9px] font-medium uppercase tracking-[0.14em] px-2 py-0.5 rounded-[3px] border transition-colors font-body ${
                              isActive
                                ? 'bg-red-50 text-[#7A211D] border-red-200'
                                : 'bg-stone-100 text-[#6C6C68] border-[#E6E3DD]'
                            }`}
                          >
                            {office.badge}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isActive ? 'rotate-180 text-[#7A211D]' : 'text-[#6C6C68] group-hover:text-stone-700'
                            }`}
                          />
                        </div>
                      </button>

                      {/* Dropdown Content */}
                      {isActive && (
                        <div className="px-3.5 pb-3.5 pt-1 text-xs text-[#6C6C68] space-y-2 border-t border-[#E6E3DD] font-body">
                          <div className="flex items-start gap-2 pt-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#7A211D] shrink-0 mt-0.5" />
                            <p className="m-0 leading-relaxed font-normal text-stone-700">{office.address}</p>
                          </div>
                          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-[#E6E3DD]/60">
                            <a
                              href={`tel:${office.phone.replace(/\s+/g, '')}`}
                              className="font-medium text-[#151817] hover:text-[#7A211D] transition-colors font-body flex items-center gap-1.5 py-1 min-h-[36px]"
                            >
                              <Phone className="w-3 h-3 text-[#7A211D]" />
                              <span>{office.phone}</span>
                            </a>
                            <a
                              href={office.directionsUrl || office.mapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] font-medium text-[#7A211D] hover:underline inline-flex items-center gap-1 font-body py-1 min-h-[36px]"
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
            </div>

            {/* ── Middle Column: Vector Maharashtra Map (Full-width responsive SVG on mobile) ── */}
            <div className="lg:col-span-4 xl:col-span-4 flex justify-center items-center py-2 lg:py-0 w-full">
              <div className="w-full max-w-[420px] lg:max-w-[440px] xl:max-w-[460px] relative aspect-[240/150] flex items-center justify-center select-none">
                <svg
                  viewBox="0 0 240 150"
                  className="w-full h-full drop-shadow-xs select-none"
                  aria-label="Map of Maharashtra highlighting SolarArk office locations"
                >
                  {/* Authentic Maharashtra State Outline */}
                  <path
                    d={MAHARASHTRA_PATH}
                    className="fill-[#EBE5DB] stroke-[#D5CBBF] stroke-[1] transition-colors"
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
                    className="stroke-[#7A211D]/35 stroke-[0.85] stroke-dasharray-[2.5,2.5] fill-none"
                  />

                  {/* Office Markers */}
                  {OFFICES.map((office) => {
                    const isHighlighted = activeOfficeId === office.id || hoveredOfficeId === office.id;
                    const isSelected = activeOfficeId === office.id;
                    return (
                      <g
                        key={office.id}
                        className="cursor-pointer transition-transform"
                        onClick={() => setActiveOfficeId(office.id)}
                        onMouseEnter={() => setHoveredOfficeId(office.id)}
                        onMouseLeave={() => setHoveredOfficeId(null)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Select ${office.name}`}
                      >
                        <circle cx={office.dot.cx} cy={office.dot.cy} r="14" className="fill-transparent" />

                        <circle
                          cx={office.dot.cx}
                          cy={office.dot.cy}
                          r={isHighlighted ? '5.2' : '3.8'}
                          className={`${
                            isHighlighted ? 'fill-[#7A211D]' : 'fill-[#7A211D]/90'
                          } stroke-white stroke-[1.5] transition-all`}
                        />

                        {(isSelected || office.id === 'amravati') && (
                          <circle
                            cx={office.dot.cx}
                            cy={office.dot.cy}
                            r="1.6"
                            className="fill-white pointer-events-none"
                          />
                        )}

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

                  {/* State Label in Lower Left curve of Maharashtra */}
                  <text
                    x="46"
                    y="118"
                    className="font-body text-[6.5px] tracking-[0.26em] fill-[#A8A095] font-bold uppercase select-none pointer-events-none"
                  >
                    M A H A R A S H T R A
                  </text>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          4. CLOSING PRE-FOOTER CTA BAND — "Ready to explore solar for your property?"
             (Full-width band on mobile, stacked button with min 48px touch target)
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

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-[38px] font-medium text-white tracking-tight leading-tight m-0 drop-shadow-sm">
              Ready to explore solar <br className="hidden sm:inline" />for your property?
            </h3>
            <p className="text-sm sm:text-base text-stone-200 font-normal leading-relaxed m-0 font-body">
              Our team is here to help you take the next step.
            </p>
          </div>

          <div className="w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('enquiry-form');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else if (onCtaClick) {
                  onCtaClick();
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#7A211D] hover:bg-[#631B18] text-white font-medium font-body text-base transition-all shadow-lg hover:shadow-xl hover:translate-x-0.5 cursor-pointer border border-white/10 min-h-[48px] active:scale-[0.99]"
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

export default ContactPage;
