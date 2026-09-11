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
import { PrimaryButton } from './PrimaryButton';

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

  const openPositions = [
    {
      id: 'cad-engineer',
      title: 'Solar Systems & 3D CAD Design Engineer',
      track: '3D CAD & Shadow Analysis Design',
      department: 'Engineering & Technical',
      location: 'Amravati HQ / Nagpur',
      type: 'Full-time · On-site',
      description: 'Design custom rooftop arrays, single-line diagrams (SLD), structural layouts, and comprehensive PVsyst generation simulations for residential and C&I rooftops.',
      tags: ['AutoCAD', 'PVsyst', 'BOS Design', 'Tier-1 TOPCon'],
    },
    {
      id: 'epc-supervisor',
      title: 'Solar EPC Site Supervisor & Commissioning Lead',
      track: 'Solar Electrical Engineering & EPC',
      department: 'Project Operations',
      location: 'Vidarbha & Marathwada',
      type: 'Full-time · Field Engineering',
      description: 'Supervise on-site rooftop mounting, AC/DC cabling, solar inverter synchronization, earthing, lightning arrestor setups, and strict safety protocols.',
      tags: ['Site Execution', 'Inverter Sync', 'DISCOM Standards', 'QA/QC'],
    },
    {
      id: 'solar-consultant',
      title: 'Commercial & Residential Solar Consultant',
      track: 'Solar Sales & Business Development',
      department: 'Business Development',
      location: 'Pune / Sambhajinagar / Nagpur',
      type: 'Full-time · Client Advisory',
      description: 'Guide homeowners, industrial complexes, and societies on solar payback, OPEX/CAPEX economics, net-metering benefits, and PM Surya Ghar subsidy navigation.',
      tags: ['Client Advisory', 'Energy Auditing', 'Proposal Engineering', 'B2B/B2C'],
    },
    {
      id: 'discom-officer',
      title: 'DISCOM Liaison & Grid Integration Officer',
      track: 'DISCOM Documentation & Net-Metering',
      department: 'Regulatory & Utility Affairs',
      location: 'Maharashtra Regional Hubs',
      type: 'Full-time · Regulatory Operations',
      description: 'Handle end-to-end DISCOM (MSEDCL) net-metering sanctions, transformer capacity feasibility, meter testing, CEIG approvals, and subsidy disbursements.',
      tags: ['MSEDCL Liaison', 'Net-Metering', 'CEIG Approvals', 'Govt Subsidy'],
    },
  ];

  const handleSelectRoleAndApply = (roleTrack: string) => {
    setSelectedRoleForForm(roleTrack);
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

    const message = `Hello SolarArk HR Team! 💼\n\nI am applying for a job position at SolarArk Projects.\n\n📌 *Applicant Details:*\n• *Role:* ${selectedRoleForForm}\n• *Full Name:* ${formData.fullName}\n• *Mobile:* ${formData.phoneNumber}\n• *Email:* ${formData.email}\n• *Experience:* ${formData.experience}\n• *City:* ${formData.city}\n• *Resume / Portfolio URL:* ${formData.resumeUrl || 'N/A'}\n• *Cover Note:* ${formData.coverNote || 'N/A'}`;
    const whatsappUrl = `https://wa.me/917080909590?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#151817] selection:bg-[#7A211D] selection:text-white pt-24 pb-6">
      


      {/* ── 2. HERO SHOWCASE: TWO-COLUMN LUXURY STUDIO LAYOUT ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-12">
        <div className="relative bg-gradient-to-br from-white via-[#FCFAF7] to-amber-50/30 rounded-[4px] p-6 sm:p-10 lg:p-12 text-[#151817] shadow-sm overflow-hidden border border-[#E6E3DD]">
          
          {/* Subtle Warmth Accents */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#7A211D]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Program Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-stone-100 border border-[#E6E3DD] text-stone-700 text-[11px] font-medium tracking-[0.18em] uppercase font-body">
                <Sparkles className="w-3.5 h-3.5 text-stone-600" />
                <span>JOIN INDIA’S CLEAN ENERGY REVOLUTION</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold font-heading tracking-tight leading-[1.12] text-[#151817]">
                  Empower Your Career with <br />
                  <span className="text-accent-light">
                    SolarArk Projects
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-normal text-stone-600 font-body">
                  Shaping the Future of Renewable Energy with Innovation &amp; Excellence
                </p>
              </div>

              {/* Official Mission Description */}
              <div className="space-y-3 text-stone-600 text-xs sm:text-sm leading-relaxed max-w-xl font-normal font-body">
                <p>
                  At <strong className="text-[#151817]">SolarArk Projects Pvt. Ltd.</strong>, we are accelerating India's transition to rooftop clean energy. Join a high-velocity team committed to technical mastery, sustainable engineering, and exceptional customer trust.
                </p>
                <p className="text-stone-500 text-xs font-body">
                  Exciting opportunities across <strong className="text-stone-800">Sales, Engineering, CAD Design, Government DISCOM Liaison, and Project Operations</strong> across Maharashtra.
                </p>
              </div>

              {/* Quick Action CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#application-studio"
                  className="bg-[#7A211D] hover:bg-[#631B18] text-white font-body font-medium text-xs sm:text-sm px-6 py-3.5 rounded-[4px] transition-all inline-flex items-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <FileText className="w-4 h-4 text-white/90" />
                  <span>Apply Now · Instant Application Form</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="mailto:hr@thesolarark.com"
                  className="bg-white hover:bg-stone-50 border border-[#E6E3DD] text-[#151817] font-body font-medium px-5 py-3.5 rounded-[4px] transition-all inline-flex items-center gap-2 text-xs sm:text-sm cursor-pointer shadow-2xs"
                >
                  <Mail className="w-4 h-4 text-[#7A211D]" />
                  <span>Email CV Directly</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-[11px] text-stone-500 border-t border-[#E6E3DD] font-body">
                <span className="flex items-center gap-1.5 font-medium">
                  <UserCheck className="w-3.5 h-3.5 text-[#7A211D]" /> Merit-Based Growth
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Award className="w-3.5 h-3.5 text-[#7A211D]" /> Fast 48h HR Feedback
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7A211D]" /> Equal Opportunity Employer
                </span>
              </div>

            </div>

            {/* Right Visual Culture & Video Spotlight Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[4px] overflow-hidden bg-stone-50 border border-[#E6E3DD] p-3.5 sm:p-4 shadow-xs space-y-3">
                
                {/* Orientation Video */}
                <div className="relative rounded-[4px] overflow-hidden aspect-[16/9] sm:aspect-[4/3] bg-black border border-[#E6E3DD]">
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

                {/* Culture Stat Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs font-body">
                  <div className="bg-white border border-[#E6E3DD] rounded-[4px] p-2.5 space-y-0.5 shadow-2xs">
                    <div className="text-[10px] text-stone-500 font-medium uppercase tracking-[0.18em]">HQ &amp; Hubs</div>
                    <div className="font-medium text-[#151817] text-xs">7 Regional Branches</div>
                  </div>

                  <div className="bg-white border border-[#E6E3DD] rounded-[4px] p-2.5 space-y-0.5 shadow-2xs">
                    <div className="text-[10px] text-[#7A211D] font-medium uppercase tracking-[0.18em]">Culture Score</div>
                    <div className="font-medium text-[#151817] text-xs">4.8★ Team Rating</div>
                  </div>

                  <div className="bg-white border border-[#E6E3DD] rounded-[4px] p-2.5 space-y-0.5 shadow-2xs">
                    <div className="text-[10px] text-stone-500 font-medium uppercase tracking-[0.18em]">Incentives</div>
                    <div className="font-medium text-[#151817] text-xs">Project Bonus &amp; CTC</div>
                  </div>

                  <div className="bg-white border border-[#E6E3DD] rounded-[4px] p-2.5 space-y-0.5 shadow-2xs">
                    <div className="text-[10px] text-stone-500 font-medium uppercase tracking-[0.18em]">Mastery</div>
                    <div className="font-medium text-[#151817] text-xs">Internal Solar Academies</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. ARCHITECTURAL PROOF STRIP ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-14">
        <div className="bg-white rounded-[4px] border border-[#E6E3DD] shadow-xs p-6 sm:p-7">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[#E6E3DD] items-center">
            
            <div className="flex items-center gap-3.5 lg:px-6">
              <div className="w-10 h-10 rounded-[4px] bg-[#7A211D]/8 text-[#7A211D] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-semibold text-[#151817] font-heading tracking-tight">#1 Solar EPC</div>
                <div className="text-xs text-[#6C6C68] font-normal font-body">Central India Leader</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 lg:px-6">
              <div className="w-10 h-10 rounded-[4px] bg-[#7A211D]/8 text-[#7A211D] flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-semibold text-[#151817] font-heading tracking-tight">35+ MW</div>
                <div className="text-xs text-[#6C6C68] font-normal font-body">Capacity Commissioned</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 lg:px-6">
              <div className="w-10 h-10 rounded-[4px] bg-[#7A211D]/8 text-[#7A211D] flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-semibold text-[#151817] font-heading tracking-tight">100% Growth</div>
                <div className="text-xs text-[#6C6C68] font-normal font-body">Year-on-Year Expansion</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 lg:px-6">
              <div className="w-10 h-10 rounded-[4px] bg-[#7A211D]/8 text-[#7A211D] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-semibold text-[#151817] font-heading tracking-tight">4.8 / 5.0</div>
                <div className="text-xs text-[#6C6C68] font-normal font-body">Team Culture Rating</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. OPEN OPPORTUNITIES & CAREER TRACKS ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-20">
        <div className="space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E6E3DD] pb-5">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-stone-100 border border-[#E6E3DD] text-stone-700 text-[11px] font-medium tracking-[0.18em] uppercase font-body">
                <Briefcase className="w-3.5 h-3.5 text-[#7A211D]" />
                <span>ACTIVE OPPORTUNITIES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-heading text-[#151817] tracking-tight">
                Join Our Engineering &amp; Operations Teams
              </h2>
              <p className="text-xs sm:text-sm text-[#6C6C68] font-body max-w-2xl font-normal">
                Open roles across our Maharashtra headquarters and regional hubs. Build a long-term career with Central India&apos;s leading solar EPC.
              </p>
            </div>
            
            <div className="text-xs font-body text-stone-500">
              <span className="font-semibold text-[#151817]">4 Functional Tracks</span> Active for Immediate Hiring
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {openPositions.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-[#E6E3DD] rounded-[4px] p-6 shadow-2xs hover:border-[#7A211D]/40 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] text-[#7A211D] font-medium uppercase tracking-[0.16em] font-body bg-[#7A211D]/6 px-2.5 py-1 rounded-[4px] border border-[#7A211D]/15">
                      {job.department}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 font-body">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-[#151817] tracking-tight group-hover:text-[#7A211D] transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-xs text-[#6C6C68] font-body font-normal leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10.5px] font-medium font-body text-stone-600 bg-[#FAF8F5] border border-[#E6E3DD] px-2 py-0.5 rounded-[4px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E6E3DD] flex items-center justify-between">
                  <span className="text-[11px] text-stone-400 font-body">{job.type}</span>
                  <button
                    onClick={() => handleSelectRoleAndApply(job.track)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold font-body text-[#7A211D] hover:text-[#631B18] transition-colors cursor-pointer group-hover:translate-x-0.5 duration-150"
                  >
                    <span>Apply for Position</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. DEDICATED APPLICATION STUDIO ── */}
      <section id="application-studio" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-20 scroll-mt-24">
        <div className="bg-[#151817] border border-stone-800 text-white rounded-[4px] p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7A211D]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Prompt Column */}
            <div className="lg:col-span-4 space-y-5">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-white/10 border border-white/20 text-xs font-medium text-white/90 font-body uppercase tracking-[0.18em]">
                <Send className="w-3.5 h-3.5 text-[#B24635]" />
                <span>Direct HR Application</span>
              </div>

              <div className="space-y-2">
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-tight">
                  Submit Your Application
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal font-body">
                  Takes less than 2 minutes. Our talent acquisition team reviews every profile and responds within 48 business hours.
                </p>
              </div>

              {/* Direct Support Highlights */}
              <div className="space-y-3 pt-2 border-t border-white/15 text-xs text-stone-300 font-body">
                <div className="flex items-center gap-2.5">
                  <UserCheck className="w-4 h-4 text-[#B24635] shrink-0" />
                  <span>Equal opportunity employer with merit-based growth</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-[#B24635] shrink-0" />
                  <span>HR Helpline: <strong className="text-white font-medium">+91 7080909590</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#B24635] shrink-0" />
                  <span>Official Careers Desk: <strong className="text-white font-medium">hr@thesolarark.com</strong></span>
                </div>
              </div>

            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-8">
              <div className="bg-white text-slate-900 rounded-[4px] p-6 sm:p-8 shadow-sm border border-[#E6E3DD]">
                
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-14 h-14 rounded-[4px] bg-[#7A211D]/10 text-[#7A211D] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading text-2xl font-semibold text-[#151817]">
                        Application Received Successfully!
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto font-body">
                        Thank you <strong>{formData.fullName}</strong>. We have received your application for <strong>{selectedRoleForForm}</strong>. Our HR team for <strong>{formData.city}</strong> will contact you via <strong>{formData.phoneNumber}</strong> / <strong>{formData.email}</strong>.
                      </p>
                    </div>
                    <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`https://wa.me/917080909590?text=${encodeURIComponent(`Hello SolarArk HR Team! 💼\n\nI am applying for a job position at SolarArk Projects.\n\n📌 *Applicant Details:*\n• *Role:* ${selectedRoleForForm}\n• *Full Name:* ${formData.fullName}\n• *Mobile:* ${formData.phoneNumber}\n• *Email:* ${formData.email}\n• *Experience:* ${formData.experience}\n• *City:* ${formData.city}\n• *Resume / Portfolio URL:* ${formData.resumeUrl || 'N/A'}\n• *Cover Note:* ${formData.coverNote || 'N/A'}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-medium font-body text-white bg-[#7A211D] hover:bg-[#631B18] px-5 py-2.5 rounded-[4px] cursor-pointer transition-colors shadow-xs"
                      >
                        <span>Open in WhatsApp</span>
                      </a>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs font-medium font-body text-[#7A211D] hover:underline cursor-pointer"
                      >
                        Submit another application
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    
                    {/* Role Dropdown */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700 font-body flex items-center justify-between">
                        <span>Functional Domain / Position *</span>
                        <span className="text-[11px] font-normal text-stone-400 font-body">Select area of expertise</span>
                      </label>
                      <select
                        value={selectedRoleForForm}
                        onChange={(e) => setSelectedRoleForForm(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-[4px] border border-[#E6E3DD] text-xs font-medium text-[#151817] focus:border-[#7A211D] focus:ring-1 focus:ring-[#7A211D] focus:outline-none bg-[#FAF8F5] focus:bg-white font-body"
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
                        <label className="text-xs font-medium text-slate-700 font-body">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="e.g. Anand Kulkarni"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`w-full px-3.5 py-2.5 rounded-[4px] border text-xs text-[#151817] bg-[#FAF8F5] focus:bg-white transition-all focus:outline-none focus:ring-1 font-body ${
                            errors.fullName
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-[#E6E3DD] focus:border-[#7A211D] focus:ring-[#7A211D]'
                          }`}
                        />
                        {errors.fullName && <p className="text-xs text-red-600 font-medium font-body">{errors.fullName}</p>}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-700 font-body">
                          Mobile Number (10 Digits) *
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          placeholder="9876543210"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          className={`w-full px-3.5 py-2.5 rounded-[4px] border text-xs text-[#151817] bg-[#FAF8F5] focus:bg-white transition-all focus:outline-none focus:ring-1 font-body ${
                            errors.phoneNumber
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-[#E6E3DD] focus:border-[#7A211D] focus:ring-[#7A211D]'
                          }`}
                        />
                        {errors.phoneNumber && <p className="text-xs text-red-600 font-medium font-body">{errors.phoneNumber}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-700 font-body">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="anand@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-3.5 py-2.5 rounded-[4px] border text-xs text-[#151817] bg-[#FAF8F5] focus:bg-white transition-all focus:outline-none focus:ring-1 font-body ${
                            errors.email
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-[#E6E3DD] focus:border-[#7A211D] focus:ring-[#7A211D]'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-red-600 font-medium font-body">{errors.email}</p>}
                      </div>

                      {/* City */}
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-700 font-body">
                          Preferred Location / Base City *
                        </label>
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-[4px] border border-[#E6E3DD] text-xs font-medium text-[#151817] focus:border-[#7A211D] focus:ring-1 focus:ring-[#7A211D] focus:outline-none bg-[#FAF8F5] focus:bg-white font-body"
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
                        <label className="text-xs font-medium text-slate-700 font-body">
                          Total Relevant Experience *
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-[4px] border border-[#E6E3DD] text-xs font-medium text-[#151817] focus:border-[#7A211D] focus:ring-1 focus:ring-[#7A211D] focus:outline-none bg-[#FAF8F5] focus:bg-white font-body"
                        >
                          <option value="Fresher / Under 1 Year">Fresher / Under 1 Year</option>
                          <option value="1-3 Years">1 – 3 Years</option>
                          <option value="3-5 Years">3 – 5 Years</option>
                          <option value="5+ Years Senior">5+ Years Senior</option>
                        </select>
                      </div>

                      {/* Notice Period */}
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-700 font-body">
                          Notice Period / Availability *
                        </label>
                        <select
                          name="noticePeriod"
                          value={formData.noticePeriod}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-[4px] border border-[#E6E3DD] text-xs font-medium text-[#151817] focus:border-[#7A211D] focus:ring-1 focus:ring-[#7A211D] focus:outline-none bg-[#FAF8F5] focus:bg-white font-body"
                        >
                          <option value="Immediate / < 15 Days">Immediate / Within 15 Days</option>
                          <option value="30 Days">30 Days</option>
                          <option value="60 Days">60 Days</option>
                        </select>
                      </div>
                    </div>

                    {/* Resume / Portfolio Link */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700 font-body flex items-center justify-between">
                        <span>Resume / LinkedIn / Google Drive Link (Optional)</span>
                        <span className="text-[11px] font-normal text-stone-400 font-body">Share viewable URL</span>
                      </label>
                      <div className="relative">
                        <LinkIcon className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="url"
                          name="resumeUrl"
                          placeholder="https://linkedin.com/in/... or drive.google.com/..."
                          value={formData.resumeUrl}
                          onChange={handleInputChange}
                          className="w-full pl-9 pr-4 py-2.5 rounded-[4px] border border-[#E6E3DD] text-xs text-[#151817] bg-[#FAF8F5] focus:bg-white focus:border-[#7A211D] focus:ring-1 focus:ring-[#7A211D] focus:outline-none font-body"
                        />
                      </div>
                    </div>

                    {/* Short Cover Note */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700 font-body">
                        Brief Cover Note / Highlights
                      </label>
                      <textarea
                        name="coverNote"
                        rows={2}
                        placeholder="Share your key achievements or why you want to join SolarArk..."
                        value={formData.coverNote}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-[4px] border border-[#E6E3DD] text-xs text-[#151817] bg-[#FAF8F5] focus:bg-white focus:border-[#7A211D] focus:ring-1 focus:ring-[#7A211D] focus:outline-none resize-none font-body"
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
                      >
                        {isSubmitting ? 'Submitting Application...' : 'Submit Job Application'}
                      </PrimaryButton>
                    </div>

                    <p className="text-[11px] text-stone-500 text-center pt-1 font-body">
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
