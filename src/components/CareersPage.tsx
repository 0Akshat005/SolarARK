/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Home as HomeIcon,
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  Zap,
  TrendingUp,
  HeartHandshake,
  Mail,
  PhoneCall,
  Sparkles,
  Award,
  Users,
  Building,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Search,
  Check,
  Compass,
  HelpCircle,
  Link as LinkIcon,
  UserCheck,
  FileText,
  DollarSign,
  Sun,
  ShieldCheck,
  Star,
  Layers,
  X
} from 'lucide-react';

interface CareersPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
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

  const careerTracks = [
    'Solar Sales & Business Development',
    'Solar Electrical Engineering & EPC',
    '3D CAD & Shadow Analysis Design',
    'DISCOM Documentation & Net-Metering',
    'Customer Success & Operations',
    'Quality & Safety Assurance',
    'General Open Application / Other',
  ];

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
    if (!/^[0-9]{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      newErrors.phoneNumber = 'Enter a valid 10-digit mobile number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const message = `Hello SolarArk HR Team! 💼\n\nI am applying for a job position at SolarArk Projects.\n\n📌 *Applicant Details:*\n• *Role:* ${selectedRoleForForm}\n• *Full Name:* ${formData.fullName}\n• *Mobile:* ${formData.phoneNumber}\n• *Email:* ${formData.email}\n• *Experience:* ${formData.experience}\n• *City:* ${formData.city}\n• *LinkedIn / Portfolio:* ${formData.linkedin || 'N/A'}\n• *Cover Note:* ${formData.notes || 'N/A'}`;
    const whatsappUrl = `https://wa.me/917080909590?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 selection:bg-[#8B1E1E] selection:text-white pt-24 pb-6">
      


      {/* ── 2. HERO SHOWCASE: TWO-COLUMN LUXURY STUDIO LAYOUT ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-12">
        <div className="relative bg-gradient-to-br from-white via-[#FCFAF7] to-amber-50/30 rounded-3xl p-6 sm:p-10 lg:p-12 text-slate-900 shadow-md overflow-hidden border border-stone-200/90">
          
          {/* Subtle Warmth Accents */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Program Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E1E] shadow-sm text-[11px] font-bold text-white tracking-wider uppercase font-heading border border-red-500/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                </span>
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>JOIN INDIA’S CLEAN ENERGY REVOLUTION</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold font-heading tracking-tight leading-[1.12] text-[#0B1730]">
                  Empower Your Career with <br />
                  <span className="text-[#8B1E1E]">
                    SolarArk Projects
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-semibold text-amber-900 font-heading">
                  Shaping the Future of Renewable Energy with Innovation &amp; Excellence
                </p>
              </div>

              {/* Official Mission Description */}
              <div className="space-y-3 text-stone-600 text-xs sm:text-sm leading-relaxed max-w-xl font-normal">
                <p>
                  At <strong className="text-slate-900">SolarArk Projects Pvt. Ltd.</strong>, we are accelerating India's transition to rooftop clean energy. Join a high-velocity team committed to technical mastery, sustainable engineering, and exceptional customer trust.
                </p>
                <p className="text-stone-500 text-xs">
                  Exciting opportunities across <strong className="text-slate-800">Sales, Engineering, CAD Design, Government DISCOM Liaison, and Project Operations</strong> across Maharashtra.
                </p>
              </div>

              {/* Quick Action CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#application-studio"
                  className="bg-gradient-to-r from-[#8B1E1E] to-[#A82424] hover:from-[#A82424] hover:to-[#8B1E1E] text-white font-heading font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-[#8B1E1E]/30 transition-all inline-flex items-center gap-2 cursor-pointer active:scale-[0.98] border border-red-400/20"
                >
                  <FileText className="w-4 h-4 text-amber-300" />
                  <span>Apply Now · Instant Application Form</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="mailto:hr@thesolarark.com"
                  className="bg-stone-100 hover:bg-stone-200 border border-stone-300 text-slate-800 font-semibold px-5 py-3.5 rounded-xl transition-all inline-flex items-center gap-2 text-xs sm:text-sm cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#8B1E1E]" />
                  <span>Email CV Directly</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-[11px] text-stone-500 border-t border-stone-200">
                <span className="flex items-center gap-1.5 font-medium">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-600" /> Merit-Based Growth
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Award className="w-3.5 h-3.5 text-amber-600" /> Fast 48h HR Feedback
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Equal Opportunity Employer
                </span>
              </div>

            </div>

            {/* Right Visual Culture Spotlight Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-stone-50 border border-stone-200 p-4 shadow-sm space-y-3.5">
                
                {/* Visual Image */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900">
                  <img
                    src="/images/gallery/office.jpg"
                    alt="SolarArk Engineering & Collaboration Office"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-1.5 text-[10px] text-amber-300 font-bold uppercase tracking-wider font-heading">
                      <Users className="w-3 h-3" /> Life at SolarArk
                    </div>
                    <div className="text-sm font-bold font-heading mt-0.5">
                      Empowering 100+ Clean Energy Professionals
                    </div>
                  </div>
                </div>

                {/* Culture Pill Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white border border-stone-200 rounded-xl p-2.5 space-y-0.5 shadow-2xs">
                    <div className="text-[10px] text-amber-800 font-bold uppercase font-heading">HQ &amp; Hubs</div>
                    <div className="font-semibold text-slate-800 text-xs">7 Regional Branches</div>
                  </div>

                  <div className="bg-white border border-stone-200 rounded-xl p-2.5 space-y-0.5 shadow-2xs">
                    <div className="text-[10px] text-emerald-700 font-bold uppercase font-heading">Culture Score</div>
                    <div className="font-semibold text-slate-800 text-xs">4.8★ Team Rating</div>
                  </div>

                  <div className="bg-white border border-stone-200 rounded-xl p-2.5 space-y-0.5 shadow-2xs">
                    <div className="text-[10px] text-blue-700 font-bold uppercase font-heading">Incentives</div>
                    <div className="font-semibold text-slate-800 text-xs">Project Bonus &amp; CTC</div>
                  </div>

                  <div className="bg-white border border-stone-200 rounded-xl p-2.5 space-y-0.5 shadow-2xs">
                    <div className="text-[10px] text-purple-700 font-bold uppercase font-heading">Mastery</div>
                    <div className="font-semibold text-slate-800 text-xs">Internal Solar Academies</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. CONNECTED PROOF STRIP CARD ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-14">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-7">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-stone-100 items-center">
            
            <div className="flex items-center gap-3.5 lg:px-6">
              <div className="w-11 h-11 rounded-2xl bg-red-50 text-[#8B1E1E] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#0B1730] font-heading">#1 Solar EPC</div>
                <div className="text-xs text-stone-500 font-medium">Central India Leader</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 lg:px-6">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#0B1730] font-heading">35+ MW</div>
                <div className="text-xs text-stone-500 font-medium">Capacity Commissioned</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 lg:px-6">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#0B1730] font-heading">100% Growth</div>
                <div className="text-xs text-stone-500 font-medium">Year-on-Year Expansion</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 lg:px-6">
              <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#0B1730] font-heading">4.8 / 5.0</div>
                <div className="text-xs text-stone-500 font-medium">Team Culture Rating</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. WHY WORK AT SOLARARK (CULTURE PILLARS) ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-16 lg:mb-20">
        
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E1E]/10 text-xs font-bold text-[#8B1E1E] font-heading">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Join Us</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Build a Purpose-Driven Clean-Tech Career
          </h2>
          <p className="text-xs sm:text-sm text-stone-500">
            We provide the resources, mentorship, and high-impact projects for you to excel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          
          <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-2xs hover:border-[#8B1E1E]/40 hover:shadow-md transition-all flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-sm text-slate-900">Booming Clean-Tech Sector</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Directly participate in India's national PM Surya Ghar distributed rooftop revolution.</p>
            </div>
          </div>

          <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-2xs hover:border-[#8B1E1E]/40 hover:shadow-md transition-all flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-sm text-slate-900">Rewarding Compensation</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Competitive fixed CTC packages + monthly project bonuses &amp; fast-track promotion paths.</p>
            </div>
          </div>

          <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-2xs hover:border-[#8B1E1E]/40 hover:shadow-md transition-all flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#8B1E1E] flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-sm text-slate-900">Continuous Technical Training</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Hands-on masterclasses on solar CAD design, smart inverters, and DISCOM liaisons.</p>
            </div>
          </div>

          <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-2xs hover:border-[#8B1E1E]/40 hover:shadow-md transition-all flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-sm text-slate-900">Collaborative Culture</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Work in an open, vibrant environment that celebrates innovation, diversity, and team wins.</p>
            </div>
          </div>

          <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-2xs hover:border-[#8B1E1E]/40 hover:shadow-md transition-all flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Building className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-sm text-slate-900">Multi-City Regional Hubs</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Active hubs across Nagpur, Pune, Amravati, Sambhajinagar, Wardha, and Akola.</p>
            </div>
          </div>

          <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-2xs hover:border-[#8B1E1E]/40 hover:shadow-md transition-all flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-sm text-slate-900">Real Environmental Impact</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Every megawatt your team commissions prevents thousands of tonnes of CO2 emissions.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 6. DEDICATED APPLICATION STUDIO ── */}
      <section id="application-studio" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 lg:mb-28 scroll-mt-24">
        <div className="bg-gradient-to-br from-[#8B1E1E] via-[#741616] to-[#5E1212] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Prompt Column */}
            <div className="lg:col-span-4 space-y-5">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-300 font-heading">
                <Send className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant HR Application</span>
              </div>

              <div className="space-y-2">
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                  Submit Your Application
                </h2>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-normal">
                  Takes less than 2 minutes. Our talent acquisition team reviews every profile and responds within 48 business hours.
                </p>
              </div>

              {/* Direct Support Highlights */}
              <div className="space-y-3 pt-2 border-t border-white/15 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <UserCheck className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Equal opportunity employer with merit-based growth</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>HR Helpline: <strong className="text-white">+91 7080909590</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Official Careers Desk: <strong className="text-white">hr@thesolarark.com</strong></span>
                </div>
              </div>

            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-8">
              <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl">
                
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading text-2xl font-bold text-slate-900">
                        Application Received Successfully!
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                        Thank you <strong>{formData.fullName}</strong>. We have received your application for <strong>{selectedRoleForForm}</strong>. Our HR team for <strong>{formData.city}</strong> will contact you via <strong>{formData.phoneNumber}</strong> / <strong>{formData.email}</strong>.
                      </p>
                    </div>
                    <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`https://wa.me/917080909590?text=${encodeURIComponent(`Hello SolarArk HR Team! 💼\n\nI am applying for a job position at SolarArk Projects.\n\n📌 *Applicant Details:*\n• *Role:* ${selectedRoleForForm}\n• *Full Name:* ${formData.fullName}\n• *Mobile:* ${formData.phoneNumber}\n• *Email:* ${formData.email}\n• *Experience:* ${formData.experience}\n• *City:* ${formData.city}\n• *LinkedIn / Portfolio:* ${formData.linkedin || 'N/A'}\n• *Cover Note:* ${formData.notes || 'N/A'}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-5 py-2.5 rounded-xl cursor-pointer transition-colors shadow-xs"
                      >
                        <span>Open in WhatsApp</span>
                      </a>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs font-bold text-[#8B1E1E] hover:underline cursor-pointer"
                      >
                        Submit another application
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    
                    {/* Role Dropdown */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 font-heading flex items-center justify-between">
                        <span>Functional Domain / Position *</span>
                        <span className="text-[11px] font-normal text-stone-400">Select area of expertise</span>
                      </label>
                      <select
                        value={selectedRoleForForm}
                        onChange={(e) => setSelectedRoleForForm(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold text-slate-900 focus:border-[#8B1E1E] focus:ring-2 focus:ring-[#8B1E1E]/20 focus:outline-none bg-stone-50"
                      >
                        {careerTracks.map((track) => (
                          <option key={track} value={track}>
                            {track}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="e.g. Anand Kulkarni"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 transition-all focus:outline-none focus:ring-2 ${
                            errors.fullName
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-stone-300 focus:border-[#8B1E1E] focus:ring-[#8B1E1E]/20'
                          }`}
                        />
                        {errors.fullName && <p className="text-xs text-red-600 font-medium">{errors.fullName}</p>}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Mobile Number (10 Digits) *
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          placeholder="9876543210"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 transition-all focus:outline-none focus:ring-2 ${
                            errors.phoneNumber
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-stone-300 focus:border-[#8B1E1E] focus:ring-[#8B1E1E]/20'
                          }`}
                        />
                        {errors.phoneNumber && <p className="text-xs text-red-600 font-medium">{errors.phoneNumber}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="anand@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 transition-all focus:outline-none focus:ring-2 ${
                            errors.email
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-stone-300 focus:border-[#8B1E1E] focus:ring-[#8B1E1E]/20'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-red-600 font-medium">{errors.email}</p>}
                      </div>

                      {/* City */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Preferred Location / Base City *
                        </label>
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-slate-900 focus:border-[#8B1E1E] focus:ring-2 focus:ring-[#8B1E1E]/20 focus:outline-none"
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Total Experience */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Total Relevant Experience *
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-slate-900 focus:border-[#8B1E1E] focus:ring-2 focus:ring-[#8B1E1E]/20 focus:outline-none"
                        >
                          <option value="Fresher / Under 1 Year">Fresher / Under 1 Year</option>
                          <option value="1-3 Years">1 – 3 Years</option>
                          <option value="3-5 Years">3 – 5 Years</option>
                          <option value="5+ Years Senior">5+ Years Senior</option>
                        </select>
                      </div>

                      {/* Notice Period */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Notice Period / Availability *
                        </label>
                        <select
                          name="noticePeriod"
                          value={formData.noticePeriod}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-slate-900 focus:border-[#8B1E1E] focus:ring-2 focus:ring-[#8B1E1E]/20 focus:outline-none"
                        >
                          <option value="Immediate / < 15 Days">Immediate / Within 15 Days</option>
                          <option value="30 Days">30 Days</option>
                          <option value="60 Days">60 Days</option>
                        </select>
                      </div>
                    </div>

                    {/* Resume / Portfolio Link */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 font-heading flex items-center justify-between">
                        <span>Resume / LinkedIn / Google Drive Link (Optional)</span>
                        <span className="text-[11px] font-normal text-stone-400">Share viewable URL</span>
                      </label>
                      <div className="relative">
                        <LinkIcon className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="url"
                          name="resumeUrl"
                          placeholder="https://linkedin.com/in/... or drive.google.com/..."
                          value={formData.resumeUrl}
                          onChange={handleInputChange}
                          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-300 text-xs text-slate-900 focus:border-[#8B1E1E] focus:ring-2 focus:ring-[#8B1E1E]/20 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Short Cover Note */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 font-heading">
                        Brief Cover Note / Highlights
                      </label>
                      <textarea
                        name="coverNote"
                        rows={2}
                        placeholder="Share your key achievements or why you want to join SolarArk..."
                        value={formData.coverNote}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-slate-900 focus:border-[#8B1E1E] focus:ring-2 focus:ring-[#8B1E1E]/20 focus:outline-none resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#8B1E1E] hover:bg-[#5E1212] active:scale-[0.98] text-white font-heading font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-md shadow-[#8B1E1E]/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                      >
                        {isSubmitting ? (
                          <span>Submitting Application...</span>
                        ) : (
                          <>
                            <span>Submit Job Application</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-stone-500 text-center pt-1">
                      By submitting, you agree to receive interview calls and recruitment updates from SolarArk Projects Pvt. Ltd.
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 7. 4-STEP RECRUITMENT ROADMAP ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-6 sm:mb-8">
        <div className="bg-[#FCFAF7] border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 font-heading">
              <Compass className="w-3.5 h-3.5" />
              <span>Hiring Process</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Our Simple &amp; Transparent Hiring Journey
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              From application review to official offer letter in under 7 business days.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-xl bg-red-50 text-[#8B1E1E] font-heading font-bold flex items-center justify-center text-xs">
                01
              </div>
              <h3 className="font-heading text-sm font-bold text-slate-900">Application Review</h3>
              <p className="text-xs text-stone-500 leading-relaxed">HR reviews your profile within 48 hours for domain alignment.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-xl bg-red-50 text-[#8B1E1E] font-heading font-bold flex items-center justify-center text-xs">
                02
              </div>
              <h3 className="font-heading text-sm font-bold text-slate-900">Technical Discussion</h3>
              <p className="text-xs text-stone-500 leading-relaxed">A 30-minute call focusing on your practical domain strengths.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-xl bg-red-50 text-[#8B1E1E] font-heading font-bold flex items-center justify-center text-xs">
                03
              </div>
              <h3 className="font-heading text-sm font-bold text-slate-900">Leadership Meeting</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Connect with our founders &amp; heads on growth and cultural fit.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 font-heading font-bold flex items-center justify-center text-xs">
                04
              </div>
              <h3 className="font-heading text-sm font-bold text-slate-900">Offer &amp; Induction</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Receive your official offer letter and welcome kit with immediate induction.</p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
