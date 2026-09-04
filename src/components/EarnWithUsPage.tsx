/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { LeadershipQuote } from './LeadershipQuote';
import {
  ArrowLeft,
  ArrowRight,
  Home as HomeIcon,
  CheckCircle2,
  Users,
  Award,
  Wallet,
  BookOpen,
  Send,
  Sparkles,
  PhoneCall,
  ShieldCheck,
  Building,
  Wrench,
  ShoppingBag,
  TrendingUp,
  CreditCard,
  MessageCircle,
  HelpCircle,
  Play,
  Quote,
  Gift,
  Check,
  ChevronDown,
  ChevronUp,
  Headphones,
  Handshake,
  Coins,
  Share2,
  CheckCheck
} from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';

interface EarnWithUsPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
}

export const EarnWithUsPage: React.FC<EarnWithUsPageProps> = ({
  onNavigate,
  onCtaClick,
}) => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    profession: 'Electrician / Plumber / Technician',
    city: 'Nagpur',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Video Refs
  const videoRef1 = useRef<HTMLVideoElement | null>(null);
  const videoRef2 = useRef<HTMLVideoElement | null>(null);

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
    if (!formData.address.trim()) {
      newErrors.address = 'Address / Locality cannot be empty.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const message = `Hello SolarArk Team! 🤝\n\nI want to register for the Surya Mitra Partner Program.\n\n📌 *Partner Registration Details:*\n• *Full Name:* ${formData.fullName}\n• *Mobile:* ${formData.phoneNumber}\n• *Email:* ${formData.email}\n• *Locality / City:* ${formData.address}\n• *Current Occupation:* ${formData.occupation}\n• *Prior Solar / Sales Experience:* ${formData.experience}`;
    const whatsappUrl = `https://wa.me/917080909590?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('earnwith');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whoCanJoinList = [
    {
      title: 'Electricians & Technicians',
      desc: 'Turn routine electrical visits into ₹15,000+ solar referral payouts.',
      icon: Wrench,
    },
    {
      title: 'Shopkeepers & Merchants',
      desc: 'Leverage daily store footfall to introduce rooftop solar savings.',
      icon: ShoppingBag,
    },
    {
      title: 'Real Estate Advisors',
      desc: 'Add solar rooftop valuations to your villa and housing society deals.',
      icon: Building,
    },
    {
      title: 'Chartered Accountants & CAs',
      desc: 'Advise commercial clients on 40% accelerated solar tax depreciation.',
      icon: TrendingUp,
    },
    {
      title: 'Students & Freelancers',
      desc: 'Earn high commissions on part-time flexible schedules across Maharashtra.',
      icon: Coins,
    },
    {
      title: 'Housing Society Members',
      desc: 'Help your residential society install common-meter solar arrays.',
      icon: Users,
    },
  ];

  const threeStepWorkflow = [
    {
      step: '01',
      title: 'Share Client Lead',
      desc: 'Submit client name & phone number via your partner portal or WhatsApp.',
      icon: Share2,
    },
    {
      step: '02',
      title: 'SolarArk Handles 100%',
      desc: 'Our certified engineers conduct 3D laser survey, DISCOM filings, & installation.',
      icon: ShieldCheck,
    },
    {
      step: '03',
      title: 'Direct Bank Payout',
      desc: 'Receive ₹4,000–₹5,000 per kW credited directly to your bank account via NEFT/UPI.',
      icon: Wallet,
    },
  ];

  const welcomeKitItems = [
    {
      title: 'Official Authorization & Brochures',
      desc: 'Welcome letter and localized Marathi/Hindi homeowner brochures.',
    },
    {
      title: 'Personalized ID & Visiting Cards',
      desc: 'Official Surya Mitra ID badge and customized visiting cards.',
    },
    {
      title: 'Technical Masterclasses',
      desc: 'Weekly webinars on shadow analysis and DISCOM net-metering.',
    },
    {
      title: 'Ready-to-Share WhatsApp Creatives',
      desc: 'High-converting social graphics and real-time lead tracker.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 selection:bg-[#8B1E1E] selection:text-white pt-24 pb-6">
      


      {/* ── 2. HERO: PARETO-FOCUSED HIGH-CONVERTING HEADER ── */}
      <section className="relative overflow-hidden pt-2 pb-10 sm:pb-14">
        
        {/* Atmospheric Solar Rooftop Photo (Right Blend) */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[62%] xl:w-[58%] pointer-events-none z-0 overflow-hidden">
          <img
            src="/images/earnwithus/earnwithus-hero-rooftop.jpg"
            alt="SolarArk Modern Rooftop Solar Installation"
            className="w-full h-full object-cover object-right-top"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.06) 12%, rgba(0,0,0,0.65) 35%, black 65%), linear-gradient(to bottom, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.06) 12%, rgba(0,0,0,0.65) 35%, black 65%), linear-gradient(to bottom, black 80%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/85 to-transparent lg:via-[#FAF9F6]/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl xl:max-w-3xl space-y-5 pt-2">
            
            {/* Credibility Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200/80 shadow-2xs text-[11px] font-bold text-stone-700 tracking-wider uppercase font-heading">
              <Sparkles className="w-3.5 h-3.5 text-stone-600" />
              <span>OFFICIAL SOLARARK SURYA MITRA PARTNER PROGRAM</span>
            </div>

            {/* High-Intent Headline */}
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#0B1730] font-heading tracking-tight leading-[1.12] m-0">
                Earn ₹15,000+ Per Referral. <br />
                <span className="text-accent-light">Zero Hassle. Zero Investment.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl pt-1">
                Connect homeowners and housing societies with SolarArk. Our certified engineering team manages 100% of surveys, 3D designs, DISCOM net-metering, and subsidy claims — you receive direct bank payouts.
              </p>
            </div>

            {/* Primary & Secondary Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#earnwith"
                onClick={scrollToForm}
                className="bg-[#7D1818] hover:bg-[#5E1212] active:scale-[0.98] text-white font-heading font-bold px-7 py-3.5 rounded-xl shadow-md shadow-[#8B1E1E]/25 transition-all inline-flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>Register as Surya Mitra</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/917080909590?text=Hi%20SolarArk%20Team%2C%20I%20want%20to%20know%20more%20about%20the%20Surya%20Mitra%20program."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-stone-50 border border-stone-200 text-slate-800 font-semibold px-5 py-3.5 rounded-xl shadow-xs transition-all inline-flex items-center gap-2 text-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Partner Desk</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. 3-STEP INSTANT REVENUE WORKFLOW ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-16 lg:mb-24">
        <div className="bg-[#FCFAF7] border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 font-heading">
              <CheckCheck className="w-3.5 h-3.5" />
              <span>Simple 3-Step Process</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Start Earning in 3 Simple Steps
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 text-center">
              We handle the engineering, paperwork, and customer service. You earn the commission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {threeStepWorkflow.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-stone-200/80 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3 relative group hover:border-[#8B1E1E]/30 hover:shadow-xs transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-xs font-bold text-stone-400 uppercase tracking-wider">
                      Step {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-red-50 text-[#8B1E1E] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-heading text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-normal text-left">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 4. WELCOME KIT & ORIENTATION VIDEOS (FREE ONBOARDING KIT) ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-16 lg:mb-24">
        <div className="bg-gradient-to-br from-white via-[#FCFAF7] to-amber-50/40 text-slate-900 rounded-3xl p-6 sm:p-10 shadow-md border border-stone-200/90 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#8B1E1E]/10 text-xs font-bold text-[#8B1E1E] font-heading border border-[#8B1E1E]/20">
                <Gift className="w-3.5 h-3.5" />
                <span>Free Onboarding Kit</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0B1730] tracking-tight leading-snug">
                Everything You Need to Succeed from Day One
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {welcomeKitItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs space-y-1 hover:border-[#8B1E1E]/30 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#8B1E1E] shrink-0 font-bold" />
                      <span className="font-heading text-xs font-bold text-slate-900">{item.title}</span>
                    </div>
                    <p className="text-[11px] text-stone-500 leading-relaxed text-left pl-6">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Preview */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-sm space-y-2.5">
                <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-900 border border-stone-200 shadow-inner flex items-center justify-center">
                  <video
                    ref={videoRef1}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onLoadedMetadata={(e) => {
                      e.currentTarget.muted = true;
                      e.currentTarget.play().catch(() => {});
                    }}
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://www.thesolarark.com/static/media/earnwithus1.78f2135bd59c7e4125ab.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support video playback.
                  </video>
                </div>
                <div className="flex items-center justify-between text-xs text-stone-600 px-1 pt-1">
                  <span className="font-bold text-[#8B1E1E] font-heading">Orientation Video: Payout Slabs &amp; Portal Overview</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. WHO CAN JOIN (SCANNABLE MICRO-GRID) ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-16 lg:mb-24">
        <div className="space-y-6">
          
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#8B1E1E]/10 text-xs font-bold text-[#8B1E1E] font-heading">
              <Users className="w-3.5 h-3.5" />
              <span>Partner Profiles</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Who Can Become a <span className="text-accent-light">Surya Mitra?</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 text-center">
              No technical solar background required. Open to any motivated individual or professional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whoCanJoinList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-stone-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs hover:border-[#8B1E1E]/40 hover:shadow-xs transition-all space-y-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-red-50 text-[#8B1E1E] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading text-sm font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed font-normal text-left">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 8. DIRECTOR'S EDITORIAL LEADERSHIP STATEMENT (FULL-WIDTH COMPOSITION) ── */}
      <LeadershipQuote className="mb-16 lg:mb-24" />

      {/* ── 9. ONBOARDING REGISTRATION FORM (ID="EARNWITH") ── */}
      <section id="earnwith" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-6 sm:mb-8 scroll-mt-24">
        <div className="bg-gradient-to-br from-[#8B1E1E] via-[#741616] to-[#5E1212] rounded-3xl p-6 sm:p-10 shadow-2xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 text-xs font-bold text-amber-300 font-heading">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant Digital Registration</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Register as a SolarArk Partner
              </h2>
              <p className="text-slate-100 text-xs sm:text-sm leading-relaxed text-left">
                Fill out the simple form below. Our partner onboarding desk activates your Surya Mitra ID and dispatches your free welcome kit within 24 hours.
              </p>
              <div className="space-y-2 pt-2 border-t border-white/15 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>100% Free • No Technical Certificate Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct Partner Helpline: <strong>+91 7080909590</strong></span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl">
                {submitted ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-slate-900">
                      Application Submitted Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto text-center">
                      Thank you <strong>{formData.fullName}</strong>. Our partner onboarding manager for <strong>{formData.city}</strong> will contact you on <strong>{formData.phoneNumber}</strong> to verify your portal access and dispatch your welcome kit.
                    </p>
                    <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`https://wa.me/917080909590?text=${encodeURIComponent(`Hello SolarArk Team! 🤝\n\nI want to register for the Surya Mitra Partner Program.\n\n📌 *Partner Registration Details:*\n• *Full Name:* ${formData.fullName}\n• *Mobile:* ${formData.phoneNumber}\n• *Email:* ${formData.email}\n• *Locality / City:* ${formData.address}\n• *Current Occupation:* ${formData.occupation}\n• *Prior Solar / Sales Experience:* ${formData.experience}`)}`}
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
                        Register another partner
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="e.g. Ramesh Patil"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 focus:outline-none focus:ring-2 ${
                            errors.fullName ? 'border-red-400' : 'border-stone-300 focus:border-[#8B1E1E]'
                          }`}
                        />
                        {errors.fullName && <p className="text-xs text-red-600">{errors.fullName}</p>}
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="ramesh@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 focus:outline-none focus:ring-2 ${
                            errors.email ? 'border-red-400' : 'border-stone-300 focus:border-[#8B1E1E]'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Phone Number (10 Digits) *
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          placeholder="9876543210"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 focus:outline-none focus:ring-2 ${
                            errors.phoneNumber ? 'border-red-400' : 'border-stone-300 focus:border-[#8B1E1E]'
                          }`}
                        />
                        {errors.phoneNumber && <p className="text-xs text-red-600">{errors.phoneNumber}</p>}
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          District / Town *
                        </label>
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-slate-900 focus:border-[#8B1E1E] focus:outline-none bg-white"
                        >
                          <option value="Nagpur">Nagpur</option>
                          <option value="Amravati">Amravati</option>
                          <option value="Chhatrapati Sambhajinagar">Chh. Sambhajinagar</option>
                          <option value="Wardha">Wardha</option>
                          <option value="Akola">Akola</option>
                          <option value="Pune">Pune</option>
                          <option value="Other Maharashtra">Other Maharashtra City</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Occupation / Background *
                        </label>
                        <select
                          name="profession"
                          value={formData.profession}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-slate-900 focus:border-[#8B1E1E] focus:outline-none bg-white"
                        >
                          <option value="Electrician / Plumber / Technician">Electrician / Technician</option>
                          <option value="Shopkeeper / Trader / Business Owner">Shopkeeper / Merchant</option>
                          <option value="Real Estate Consultant / Builder">Real Estate Advisor</option>
                          <option value="Chartered Accountant / Tax Advisor">CA / Financial Advisor</option>
                          <option value="Student / Freelancer">Student / Freelancer</option>
                          <option value="Community / Housing Society">Housing Society Member</option>
                          <option value="Other Profession">Other</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Locality / Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          placeholder="e.g. Dharampeth, Nagpur"
                          value={formData.address}
                          onChange={handleInputChange}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 focus:outline-none focus:ring-2 ${
                            errors.address ? 'border-red-400' : 'border-stone-300 focus:border-[#8B1E1E]'
                          }`}
                        />
                        {errors.address && <p className="text-xs text-red-600">{errors.address}</p>}
                      </div>
                    </div>

                    <PrimaryButton
                      type="submit"
                      disabled={isSubmitting}
                      fullWidth
                      size="md"
                      icon={isSubmitting ? undefined : <Send className="w-4 h-4" />}
                      showArrow={false}
                    >
                      {isSubmitting ? 'Processing Registration...' : 'Submit Surya Mitra Registration'}
                    </PrimaryButton>
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
