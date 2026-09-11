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
      <section id="enquiry-form" className="scroll-mt-24 sm:scroll-mt-28 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-10 lg:pt-12 pb-12 lg:pb-16">
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
          2.5. REAL RECTANGULAR GOOGLE MAP (ABOVE OUR PRESENCE)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-[#F7F5F0] border-t border-[#E6E3DD] pt-10 sm:pt-12 pb-2">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <OfficeLocationInteractiveMap
            selectedOfficeId={activeOfficeId}
            onSelectOffice={(id) => setActiveOfficeId(id)}
          />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          3. OUR PRESENCE IN MAHARASHTRA STRIP (ACCORDION + VECTOR MAP + SCENE)
             (Exact previous design, isolated height, and authentic corner scene)
      ════════════════════════════════════════════════════════════════════════ */}
      <section id="our-presence" className="w-full bg-[#F7F5F0] border-y border-[#E6E3DD] py-10 sm:py-12 lg:py-14 relative overflow-hidden">
        {/* Right-Side Atmospheric Photographic Scene (Fading smoothly into section background) */}
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
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
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
              <div className="space-y-2 max-w-md" role="tablist" aria-label="Office locations list">
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
                              className="font-medium text-[#151817] hover:text-[#7A211D] transition-colors font-body flex items-center gap-1.5"
                            >
                              <Phone className="w-3 h-3 text-[#7A211D]" />
                              <span>{office.phone}</span>
                            </a>
                            <a
                              href={office.directionsUrl || office.mapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] font-medium text-[#7A211D] hover:underline inline-flex items-center gap-1 font-body"
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

            {/* ── Middle Column: Vector Maharashtra Map (lg:col-span-4 xl:col-span-4) ── */}
            <div className="lg:col-span-4 xl:col-span-4 flex justify-center items-center py-2 lg:py-0">
              <div className="w-full max-w-[440px] xl:max-w-[460px] relative aspect-[240/150] flex items-center justify-center select-none">
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

                        {isHighlighted && (
                          <circle
                            cx={office.dot.cx}
                            cy={office.dot.cy}
                            r="8.5"
                            className="fill-[#7A211D]/25 animate-ping origin-center"
                          />
                        )}

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

            {/* ── Right Column: Architectural Text Stamp Matching Reference Mockup (lg:col-span-3 xl:col-span-3) ── */}
            <div className="lg:col-span-3 xl:col-span-3 flex justify-start lg:justify-end items-center select-none pt-2 lg:pt-0">
              <div className="flex items-start gap-3 text-left bg-[#F7F5F0]/80 lg:bg-transparent backdrop-blur-xs lg:backdrop-blur-none p-3 lg:p-0 rounded-[4px]">
                <div className="w-[1px] h-12 bg-[#8C827A]/50 mt-0.5 shrink-0" />
                <div className="space-y-1.5">
                  <p className="text-[10.5px] sm:text-[11px] font-medium tracking-[0.20em] text-[#5A524C] uppercase font-body leading-[1.35] m-0">
                    SOLAR<br />
                    FOR A STRONGER<br />
                    MAHARASHTRA
                  </p>
                  <span className="inline-block w-8 h-[1px] bg-[#8C827A]/40 mt-1" />
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
