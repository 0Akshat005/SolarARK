/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Send,
  Mail,
  PhoneCall,
  Award,
  Link as LinkIcon,
  UserCheck,
  FileText,
  ShieldCheck,
  Briefcase,
  Check,
} from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';

interface CareersPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
}

interface CareerTrack {
  title: string;
  department: string;
  description: string;
}

export const CareersPage: React.FC<CareersPageProps> = ({
  onNavigate,
  onCtaClick,
}) => {
  const [selectedRoleForForm, setSelectedRoleForForm] = useState<string>('Solar Sales & Business Development');

  // Application Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    city: 'Nagpur',
    experience: '1-3 Years',
    noticePeriod: 'Immediate / < 15 Days',
    resumeUrl: '',
    coverNote: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const careerTracks: CareerTrack[] = [
    {
      title: 'Solar Sales & Business Development',
      department: 'Growth & Advisory',
      description: 'Advise homeowners and businesses across Maharashtra on solar economics, savings, and subsidies.',
    },
    {
      title: 'Solar Electrical Engineering & EPC',
      department: 'EPC & Commissioning',
      description: 'Supervise rooftop mounting, wiring, inverter synchronization, earthing, and safety protocols.',
    },
    {
      title: '3D CAD & Shadow Analysis Design',
      department: 'Engineering & Simulation',
      description: 'Model PVsyst shadow simulations, 3D architectural layouts, SLDs, and optimum generation designs.',
    },
    {
      title: 'DISCOM Documentation & Net-Metering',
      department: 'Utility Liaison',
      description: 'Drive end-to-end MSEDCL approvals, meter sanctions, testing, and subsidy disbursements.',
    },
    {
      title: 'Customer Success & Operations',
      department: 'Client Experience',
      description: 'Deliver 25-year lifecycle customer delight, system performance monitoring, and rapid support.',
    },
    {
      title: 'Quality & Safety Assurance',
      department: 'QA/QC & Standards',
      description: 'Enforce structural resilience guidelines, electrical safety standards, and project audits.',
    },
    {
      title: 'General Open Application / Other',
      department: 'All Disciplines',
      description: 'Passionate about accelerating India’s clean energy transition? Connect with our talent team.',
    },
  ];

  const handleSelectTrack = (trackTitle: string) => {
    setSelectedRoleForForm(trackTitle);
    const formElement = document.getElementById('application-studio');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full Name must be at least 3 characters.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    const cleanPhone = formData.phoneNumber.replace(/\D/g, '');
    const isValidPhone =
      cleanPhone.length === 10 ||
      (cleanPhone.length === 11 && cleanPhone.startsWith('0')) ||
      (cleanPhone.length === 12 && cleanPhone.startsWith('91'));
    if (!isValidPhone) {
      newErrors.phoneNumber = 'Enter a valid 10-digit mobile number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const message = `Hello SolarArk HR Team! 💼\n\nI am applying for a job position at SolarArk Projects.\n\n📌 *Applicant Details:*\n• *Role:* ${selectedRoleForForm}\n• *Full Name:* ${formData.fullName}\n• *Mobile:* ${formData.phoneNumber}\n• *Email:* ${formData.email}\n• *Experience:* ${formData.experience}\n• *City:* ${formData.city}\n• *Resume / Portfolio URL:* ${formData.resumeUrl || 'N/A'}\n• *Cover Note:* ${formData.coverNote || 'N/A'}`;
    const whatsappUrl = `https://wa.me/917080909590?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#151817] selection:bg-[#7A211D] selection:text-white pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-x-hidden font-body">

      {/* ── 1. HERO SHOWCASE: RESPONSIVE LUXURY STUDIO LAYOUT ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-10 sm:mb-12">
        <div className="relative bg-gradient-to-br from-white via-[#FCFAF7] to-amber-50/30 rounded-[4px] p-5 sm:p-8 lg:p-10 text-[#151817] shadow-sm overflow-hidden border border-[#E6E3DD]">
          
          {/* Subtle Warmth Accents - constrained to prevent mobile overflow */}
          <div className="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-[#7A211D]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column (Enforces single-column on mobile) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-4xl lg:text-[46px] font-semibold font-heading tracking-tight leading-[1.15] sm:leading-[1.12] text-[#151817]">
                  Empower Your Career with{' '}
                  <span className="block sm:inline text-accent-light">
                    SolarArk Projects
                  </span>
                </h1>
                <p className="text-sm sm:text-base lg:text-lg font-normal text-stone-600 font-body leading-relaxed">
                  Shaping the Future of Renewable Energy with Innovation &amp; Excellence
                </p>
              </div>

              {/* Official Mission Description */}
              <div className="space-y-2.5 sm:space-y-3 text-stone-600 text-xs sm:text-sm leading-relaxed max-w-xl font-normal font-body">
                <p>
                  At <strong className="text-[#151817]">SolarArk Projects Pvt. Ltd.</strong>, we are accelerating India's transition to rooftop clean energy. Join a high-velocity team committed to technical mastery, sustainable engineering, and exceptional customer trust.
                </p>
                <p className="text-stone-500 text-xs font-body">
                  Exciting opportunities across <strong className="text-stone-800">Sales, Engineering, CAD Design, Government DISCOM Liaison, and Project Operations</strong> across Maharashtra.
                </p>
              </div>

              {/* Quick Action CTA Buttons (Full-width stacked for thumb reach on mobile, inline on desktop) */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#application-studio"
                  className="bg-[#7A211D] hover:bg-[#631B18] text-white font-body font-medium text-xs sm:text-sm px-6 py-3.5 rounded-[4px] transition-all inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] min-h-[44px] shadow-xs text-center"
                >
                  <FileText className="w-4 h-4 text-white/90 shrink-0" />
                  <span>Apply Now · Instant Application Form</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>

                <a
                  href="mailto:hr@thesolarark.com"
                  className="bg-white hover:bg-stone-50 border border-[#E6E3DD] text-[#151817] font-body font-medium px-5 py-3.5 rounded-[4px] transition-all inline-flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer shadow-2xs min-h-[44px] text-center"
                >
                  <Mail className="w-4 h-4 text-[#7A211D] shrink-0" />
                  <span>Email CV Directly</span>
                </a>
              </div>

              {/* Trust Indicators (Stacked vertically on mobile, row on desktop without orphan bullets) */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 pt-3 text-xs sm:text-[11px] text-stone-600 sm:text-stone-500 border-t border-[#E6E3DD] font-body">
                <span className="flex items-center gap-1.5 font-medium">
                  <UserCheck className="w-3.5 h-3.5 text-[#7A211D] shrink-0" /> Merit-Based Growth
                </span>
                <span className="hidden sm:inline text-stone-300">•</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Award className="w-3.5 h-3.5 text-[#7A211D] shrink-0" /> Fast 48h HR Feedback
                </span>
                <span className="hidden sm:inline text-stone-300">•</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7A211D] shrink-0" /> Equal Opportunity Employer
                </span>
              </div>

            </div>

            {/* Right Visual Culture & Video Spotlight Showcase */}
            <div className="lg:col-span-5 w-full">
              <div className="relative rounded-[4px] overflow-hidden bg-stone-50 border border-[#E6E3DD] p-3 sm:p-4 shadow-xs space-y-3">
                
                {/* Orientation Video */}
                <div className="relative rounded-[4px] overflow-hidden aspect-video bg-black border border-[#E6E3DD] w-full">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster="/images/gallery/office.jpg"
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://www.thesolarark.com/static/media/earnwithus1.78f2135bd59c7e4125ab.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support video playback.
                  </video>
                </div>

                {/* Editorial Caption */}
                <div className="flex items-center justify-between text-xs text-stone-600 px-0.5 font-body">
                  <span className="font-medium text-[#151817]">Team Orientation · Operations Overview</span>
                  <span className="text-[#7A211D] font-medium text-[11px] uppercase tracking-wider">Amravati HQ</span>
                </div>

                {/* Culture Stat Grid (Stacked vertically on small mobile, 2-col on sm+) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 text-xs font-body">
                  <div className="bg-white border border-[#E6E3DD] rounded-[4px] p-2.5 sm:p-3 space-y-0.5 shadow-2xs">
                    <div className="text-[10px] text-stone-500 font-medium uppercase tracking-[0.18em]">HQ &amp; Hubs</div>
                    <div className="font-medium text-[#151817] text-xs sm:text-xs">7 Regional Branches</div>
                  </div>

                  <div className="bg-white border border-[#E6E3DD] rounded-[4px] p-2.5 sm:p-3 space-y-0.5 shadow-2xs">
                    <div className="text-[10px] text-[#7A211D] font-medium uppercase tracking-[0.18em]">Culture Score</div>
                    <div className="font-medium text-[#151817] text-xs sm:text-xs">4.8★ Team Rating</div>
                  </div>

                  <div className="bg-white border border-[#E6E3DD] rounded-[4px] p-2.5 sm:p-3 space-y-0.5 shadow-2xs">
                    <div className="text-[10px] text-stone-500 font-medium uppercase tracking-[0.18em]">Incentives</div>
                    <div className="font-medium text-[#151817] text-xs sm:text-xs">Project Bonus &amp; CTC</div>
                  </div>

                  <div className="bg-white border border-[#E6E3DD] rounded-[4px] p-2.5 sm:p-3 space-y-0.5 shadow-2xs">
                    <div className="text-[10px] text-stone-500 font-medium uppercase tracking-[0.18em]">Mastery</div>
                    <div className="font-medium text-[#151817] text-xs sm:text-xs">Internal Solar Academies</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. ARCHITECTURAL PROOF STRIP (Aligned with OfficialMetricsStrip) ── */}
      <section className="w-full bg-white border-y border-[#E6E3DD] py-5 sm:py-6 lg:py-7 mb-12 sm:mb-16 lg:mb-20 relative z-10 transition-colors">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Stacked vertically on mobile (< sm), 2-col on sm, 4-col on lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0 items-center">
            
            {/* Col 1: #1 Solar EPC */}
            <div className="flex flex-col justify-center px-2 sm:px-6 lg:px-8 border-b sm:border-b-0 sm:border-r border-[#E6E3DD] pb-3.5 sm:pb-0">
              <div className="font-heading text-xl sm:text-2xl lg:text-[26px] font-semibold text-[#151817] tracking-tight leading-none">
                #1 Solar EPC
              </div>
              <div className="font-body text-xs sm:text-xs lg:text-[13px] text-[#6C6C68] font-normal leading-tight mt-1 sm:mt-1.5">
                Central India Leader
              </div>
            </div>

            {/* Col 2: 35+ MW */}
            <div className="flex flex-col justify-center px-2 sm:px-6 lg:px-8 border-b sm:border-b-0 lg:border-r border-[#E6E3DD] pb-3.5 sm:pb-0">
              <div className="font-heading text-xl sm:text-2xl lg:text-[26px] font-semibold text-[#151817] tracking-tight leading-none">
                35+ MW
              </div>
              <div className="font-body text-xs sm:text-xs lg:text-[13px] text-[#6C6C68] font-normal leading-tight mt-1 sm:mt-1.5">
                Capacity Commissioned
              </div>
            </div>

            {/* Col 3: 100% Growth */}
            <div className="flex flex-col justify-center px-2 sm:px-6 lg:px-8 border-b sm:border-b-0 sm:border-r border-[#E6E3DD] pb-3.5 sm:pb-0">
              <div className="font-heading text-xl sm:text-2xl lg:text-[26px] font-semibold text-[#151817] tracking-tight leading-none">
                100% Growth
              </div>
              <div className="font-body text-xs sm:text-xs lg:text-[13px] text-[#6C6C68] font-normal leading-tight mt-1 sm:mt-1.5">
                Year-on-Year Expansion
              </div>
            </div>

            {/* Col 4: 4.8 / 5.0 */}
            <div className="flex flex-col justify-center px-2 sm:px-6 lg:px-8">
              <div className="font-heading text-xl sm:text-2xl lg:text-[26px] font-semibold text-[#151817] tracking-tight leading-none">
                4.8 / 5.0
              </div>
              <div className="font-body text-xs sm:text-xs lg:text-[13px] text-[#6C6C68] font-normal leading-tight mt-1 sm:mt-1.5">
                Team Culture Rating
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. CAREER TRACKS AT SOLARARK (Role Categories Zone) ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-12 sm:mb-16 lg:mb-20">
        <div className="space-y-6">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-[#E6E3DD] pb-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[4px] bg-[#7A211D]/8 text-[#7A211D] text-[11px] font-medium tracking-[0.16em] uppercase font-body">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Hiring Disciplines</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#151817] tracking-tight">
                Career Tracks at SolarArk
              </h2>
              <p className="text-xs sm:text-sm text-[#6C6C68] font-body max-w-xl font-normal">
                Choose your domain below to preselect your position in the application form.
              </p>
            </div>
            
            <div className="text-xs font-body text-stone-500">
              <span className="font-semibold text-[#151817]">7 Active Tracks</span> · Maharashtra Hubs
            </div>
          </div>

          {/* Tracks List: Vertical full-width single-column list on mobile, 2/3 column on md/lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {careerTracks.map((track) => {
              const isSelected = selectedRoleForForm === track.title;
              return (
                <button
                  key={track.title}
                  type="button"
                  onClick={() => handleSelectTrack(track.title)}
                  className={`w-full text-left p-4 rounded-[4px] border transition-all cursor-pointer flex flex-col justify-between min-h-[48px] group active:scale-[0.99] ${
                    isSelected
                      ? 'bg-white border-[#7A211D] ring-1 ring-[#7A211D] shadow-xs'
                      : 'bg-white border-[#E6E3DD] hover:border-[#7A211D]/50 hover:bg-[#FCFAF7]'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] font-semibold uppercase tracking-[0.14em] px-2 py-0.5 rounded-[4px] font-body ${
                        isSelected
                          ? 'bg-[#7A211D] text-white'
                          : 'bg-[#FAF8F5] text-stone-600 border border-[#E6E3DD]'
                      }`}>
                        {track.department}
                      </span>
                      {isSelected ? (
                        <span className="flex items-center gap-1 text-[11px] font-medium text-[#7A211D] font-body">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          <span>Selected</span>
                        </span>
                      ) : (
                        <span className="text-[11px] text-stone-400 font-body hidden group-hover:inline">
                          Tap to select
                        </span>
                      )}
                    </div>
                    <h3 className={`font-heading text-sm sm:text-base font-semibold leading-snug transition-colors ${
                      isSelected ? 'text-[#7A211D]' : 'text-[#151817] group-hover:text-[#7A211D]'
                    }`}>
                      {track.title}
                    </h3>
                    <p className="text-xs text-stone-500 font-body font-normal leading-relaxed line-clamp-2">
                      {track.description}
                    </p>
                  </div>
                  
                  <div className="pt-3 mt-2 border-t border-[#E6E3DD]/60 flex items-center justify-between text-xs font-medium font-body">
                    <span className={isSelected ? 'text-[#7A211D]' : 'text-stone-500'}>
                      {isSelected ? 'Preselected in Form ↓' : 'Select Track & Apply'}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isSelected ? 'text-[#7A211D] translate-x-1' : 'text-stone-400 group-hover:translate-x-0.5'
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 4. DEDICATED APPLICATION STUDIO (Single-column thumb optimized on mobile) ── */}
      <section id="application-studio" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-12 sm:mb-16 lg:mb-20 scroll-mt-24">
        <div className="bg-[#151817] border border-stone-800 text-white rounded-[4px] p-5 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#7A211D]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Prompt Column (Supporting Proof & Touch-Friendly Contact Details) */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-5">
              
              <div className="flex items-center gap-2 text-white/80 text-xs font-medium font-body uppercase tracking-[0.18em]">
                <Send className="w-3.5 h-3.5 text-[#B24635]" />
                <span>Direct HR Application</span>
                <span className="w-6 h-px bg-white/20" />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-tight">
                  Submit Your Application
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal font-body">
                  Takes less than 2 minutes. Our talent acquisition team reviews every profile and responds within 48 business hours.
                </p>
              </div>

              {/* Direct Support Highlights (Clickable phone & email with ≥ 44px touch targets on mobile) */}
              <div className="space-y-2.5 pt-2 sm:pt-3 border-t border-white/15 text-xs text-stone-300 font-body">
                <div className="flex items-center gap-2.5 py-1">
                  <UserCheck className="w-4 h-4 text-[#B24635] shrink-0" />
                  <span>Equal opportunity employer with merit-based growth</span>
                </div>
                <div>
                  <a
                    href="tel:+917080909590"
                    className="inline-flex items-center gap-2.5 py-1.5 text-stone-300 hover:text-white transition-colors min-h-[44px]"
                  >
                    <PhoneCall className="w-4 h-4 text-[#B24635] shrink-0" />
                    <span>HR Helpline: <strong className="text-white font-medium underline underline-offset-2">+91 7080909590</strong></span>
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:hr@thesolarark.com"
                    className="inline-flex items-center gap-2.5 py-1.5 text-stone-300 hover:text-white transition-colors min-h-[44px]"
                  >
                    <Mail className="w-4 h-4 text-[#B24635] shrink-0" />
                    <span>Careers Desk: <strong className="text-white font-medium underline underline-offset-2">hr@thesolarark.com</strong></span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Form Card (Single column on mobile, spacious inputs, iOS zoom protected) */}
            <div className="lg:col-span-8 w-full">
              <div className="bg-white text-slate-900 rounded-[4px] p-5 sm:p-8 shadow-sm border border-[#E6E3DD]">
                
                {submitted ? (
                  <div className="text-center py-8 sm:py-10 space-y-4">
                    <div className="w-14 h-14 rounded-[4px] bg-[#7A211D]/10 text-[#7A211D] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#151817]">
                        Application Received Successfully!
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto font-body leading-relaxed">
                        Thank you <strong>{formData.fullName}</strong>. We have received your application for <strong>{selectedRoleForForm}</strong>. Our HR team for <strong>{formData.city}</strong> will contact you via <strong>{formData.phoneNumber}</strong> / <strong>{formData.email}</strong>.
                      </p>
                    </div>
                    <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                      <a
                        href={`https://wa.me/917080909590?text=${encodeURIComponent(`Hello SolarArk HR Team! 💼\n\nI am applying for a job position at SolarArk Projects.\n\n📌 *Applicant Details:*\n• *Role:* ${selectedRoleForForm}\n• *Full Name:* ${formData.fullName}\n• *Mobile:* ${formData.phoneNumber}\n• *Email:* ${formData.email}\n• *Experience:* ${formData.experience}\n• *City:* ${formData.city}\n• *Resume / Portfolio URL:* ${formData.resumeUrl || 'N/A'}\n• *Cover Note:* ${formData.coverNote || 'N/A'}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium font-body text-white bg-[#7A211D] hover:bg-[#631B18] px-6 py-3.5 rounded-[4px] cursor-pointer transition-colors shadow-xs min-h-[44px]"
                      >
                        <span>Open in WhatsApp</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="w-full sm:w-auto inline-flex items-center justify-center text-xs font-medium font-body text-[#7A211D] hover:underline cursor-pointer min-h-[44px] py-2 px-4"
                      >
                        Submit another application
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-4.5" noValidate>
                    
                    {/* Role Dropdown */}
                    <div className="space-y-1.5">
                      <label htmlFor="selectedRole" className="text-xs font-medium text-slate-700 font-body flex items-center justify-between">
                        <span>Functional Domain / Position *</span>
                        <span className="text-[11px] font-normal text-stone-400 font-body">Select area of expertise</span>
                      </label>
                      <select
                        id="selectedRole"
                        name="selectedRole"
                        value={selectedRoleForForm}
                        onChange={(e) => setSelectedRoleForForm(e.target.value)}
                        className="w-full px-3.5 py-3 sm:py-2.5 min-h-[44px] rounded-[4px] border border-[#E6E3DD] text-base sm:text-xs font-medium text-[#151817] focus:border-[#7A211D] focus:ring-1 focus:ring-[#7A211D] focus:outline-none bg-[#FAF8F5] focus:bg-white font-body"
                      >
                        {careerTracks.map((track) => (
                          <option key={track.title} value={track.title}>
                            {track.title} ({track.department})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Single column on mobile, 2 columns on sm+ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="fullName" className="text-xs font-medium text-slate-700 font-body block">
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          name="fullName"
                          autoComplete="name"
                          placeholder="e.g. Anand Kulkarni"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`w-full px-3.5 py-3 sm:py-2.5 min-h-[44px] rounded-[4px] border text-base sm:text-xs text-[#151817] bg-[#FAF8F5] focus:bg-white transition-all focus:outline-none focus:ring-1 font-body ${
                            errors.fullName
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-[#E6E3DD] focus:border-[#7A211D] focus:ring-[#7A211D]'
                          }`}
                        />
                        {errors.fullName && <p className="text-xs text-red-600 font-medium font-body pt-0.5">{errors.fullName}</p>}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="phoneNumber" className="text-xs font-medium text-slate-700 font-body block">
                          Mobile Number (10 Digits) *
                        </label>
                        <input
                          id="phoneNumber"
                          type="tel"
                          inputMode="numeric"
                          pattern="[0-9]{10}"
                          autoComplete="tel"
                          placeholder="9876543210"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          className={`w-full px-3.5 py-3 sm:py-2.5 min-h-[44px] rounded-[4px] border text-base sm:text-xs text-[#151817] bg-[#FAF8F5] focus:bg-white transition-all focus:outline-none focus:ring-1 font-body ${
                            errors.phoneNumber
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-[#E6E3DD] focus:border-[#7A211D] focus:ring-[#7A211D]'
                          }`}
                        />
                        {errors.phoneNumber && <p className="text-xs text-red-600 font-medium font-body pt-0.5">{errors.phoneNumber}</p>}
                      </div>
                    </div>

                    {/* Single column on mobile, 2 columns on sm+ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-medium text-slate-700 font-body block">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          autoComplete="email"
                          placeholder="anand@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-3.5 py-3 sm:py-2.5 min-h-[44px] rounded-[4px] border text-base sm:text-xs text-[#151817] bg-[#FAF8F5] focus:bg-white transition-all focus:outline-none focus:ring-1 font-body ${
                            errors.email
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-[#E6E3DD] focus:border-[#7A211D] focus:ring-[#7A211D]'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-red-600 font-medium font-body pt-0.5">{errors.email}</p>}
                      </div>

                      {/* City */}
                      <div className="space-y-1.5">
                        <label htmlFor="city" className="text-xs font-medium text-slate-700 font-body block">
                          Preferred Location / Base City *
                        </label>
                        <select
                          id="city"
                          name="city"
                          autoComplete="address-level2"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-3 sm:py-2.5 min-h-[44px] rounded-[4px] border border-[#E6E3DD] text-base sm:text-xs font-medium text-[#151817] focus:border-[#7A211D] focus:ring-1 focus:ring-[#7A211D] focus:outline-none bg-[#FAF8F5] focus:bg-white font-body"
                        >
                          <option value="Nagpur">Nagpur</option>
                          <option value="Pune">Pune</option>
                          <option value="Amravati">Amravati</option>
                          <option value="Chhatrapati Sambhajinagar">Chhatrapati Sambhajinagar</option>
                          <option value="Wardha">Wardha</option>
                          <option value="Akola">Akola</option>
                          <option value="Nashik">Nashik</option>
                          <option value="Other Maharashtra">Other Maharashtra Location</option>
                        </select>
                      </div>
                    </div>

                    {/* Single column on mobile, 2 columns on sm+ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Total Experience */}
                      <div className="space-y-1.5">
                        <label htmlFor="experience" className="text-xs font-medium text-slate-700 font-body block">
                          Total Relevant Experience *
                        </label>
                        <select
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-3 sm:py-2.5 min-h-[44px] rounded-[4px] border border-[#E6E3DD] text-base sm:text-xs font-medium text-[#151817] focus:border-[#7A211D] focus:ring-1 focus:ring-[#7A211D] focus:outline-none bg-[#FAF8F5] focus:bg-white font-body"
                        >
                          <option value="Fresher / Under 1 Year">Fresher / Under 1 Year</option>
                          <option value="1-3 Years">1 – 3 Years</option>
                          <option value="3-5 Years">3 – 5 Years</option>
                          <option value="5+ Years Senior">5+ Years Senior</option>
                        </select>
                      </div>

                      {/* Notice Period */}
                      <div className="space-y-1.5">
                        <label htmlFor="noticePeriod" className="text-xs font-medium text-slate-700 font-body block">
                          Notice Period / Availability *
                        </label>
                        <select
                          id="noticePeriod"
                          name="noticePeriod"
                          value={formData.noticePeriod}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-3 sm:py-2.5 min-h-[44px] rounded-[4px] border border-[#E6E3DD] text-base sm:text-xs font-medium text-[#151817] focus:border-[#7A211D] focus:ring-1 focus:ring-[#7A211D] focus:outline-none bg-[#FAF8F5] focus:bg-white font-body"
                        >
                          <option value="Immediate / < 15 Days">Immediate / Within 15 Days</option>
                          <option value="30 Days">30 Days</option>
                          <option value="60 Days">60 Days</option>
                        </select>
                      </div>
                    </div>

                    {/* Resume / Portfolio Link */}
                    <div className="space-y-1.5">
                      <label htmlFor="resumeUrl" className="text-xs font-medium text-slate-700 font-body flex items-center justify-between">
                        <span>Resume / LinkedIn / Google Drive Link (Optional)</span>
                        <span className="text-[11px] font-normal text-stone-400 font-body">Share viewable URL</span>
                      </label>
                      <div className="relative">
                        <LinkIcon className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          id="resumeUrl"
                          type="url"
                          name="resumeUrl"
                          autoComplete="url"
                          placeholder="https://linkedin.com/in/... or drive.google.com/..."
                          value={formData.resumeUrl}
                          onChange={handleInputChange}
                          className="w-full pl-9 pr-4 py-3 sm:py-2.5 min-h-[44px] rounded-[4px] border border-[#E6E3DD] text-base sm:text-xs text-[#151817] bg-[#FAF8F5] focus:bg-white focus:border-[#7A211D] focus:ring-1 focus:ring-[#7A211D] focus:outline-none font-body"
                        />
                      </div>
                    </div>

                    {/* Short Cover Note */}
                    <div className="space-y-1.5">
                      <label htmlFor="coverNote" className="text-xs font-medium text-slate-700 font-body block">
                        Brief Cover Note / Highlights
                      </label>
                      <textarea
                        id="coverNote"
                        name="coverNote"
                        rows={2}
                        placeholder="Share your key achievements or why you want to join SolarArk..."
                        value={formData.coverNote}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-3 sm:py-2.5 min-h-[64px] rounded-[4px] border border-[#E6E3DD] text-base sm:text-xs text-[#151817] bg-[#FAF8F5] focus:bg-white focus:border-[#7A211D] focus:ring-1 focus:ring-[#7A211D] focus:outline-none resize-none font-body"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <PrimaryButton
                        type="submit"
                        disabled={isSubmitting}
                        fullWidth
                        size="md"
                        icon={isSubmitting ? undefined : <Send className="w-4 h-4" />}
                        showArrow={false}
                        className="min-h-[46px]"
                      >
                        {isSubmitting ? 'Submitting Application...' : 'Submit Job Application'}
                      </PrimaryButton>
                    </div>

                    <p className="text-[11px] text-stone-500 text-center pt-1 font-body leading-relaxed">
                      By submitting, you agree to receive interview calls and recruitment updates from SolarArk Projects Pvt. Ltd.
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
