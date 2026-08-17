/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
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
  GraduationCap,
  Briefcase,
  TrendingUp,
  FileText,
  BadgeCheck,
  CreditCard,
  MessageCircle,
  HelpCircle,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronDown,
  ChevronUp,
  Gift,
  Quote,
  Flame,
  Check
} from 'lucide-react';

import { PageContextBar } from './PageContextBar';

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

  // Calculator State
  const [monthlyCapacityKw, setMonthlyCapacityKw] = useState<number>(10);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Video Ref for Video 1
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
      newErrors.address = 'Address cannot be empty.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('earnwith');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculator calculations
  const calculateEstimatedEarnings = (kw: number) => {
    // Average ₹3,500 - ₹5,000 commission per kW installed
    const basePerKw = 4000;
    const milestoneBonus = kw >= 25 ? 25000 : kw >= 10 ? 10000 : 0;
    return kw * basePerKw + milestoneBonus;
  };

  const whoCanJoinList = [
    {
      title: 'Electricians, Plumbers & AC Fitters',
      desc: 'You are on rooftops and electrical panels every day. Turn existing client visits into ₹15,000+ solar referral payouts.',
      icon: Wrench,
    },
    {
      title: 'Shopkeepers, Students & Travel Agents',
      desc: 'Leverage your daily customer footfall and community trust to champion clean rooftop solar in your locality.',
      icon: ShoppingBag,
    },
    {
      title: 'Grocery Store Owners & Cable Operators',
      desc: 'You connect with thousands of local households. Share SolarArk benefits and earn monthly recurring bonuses.',
      icon: Users,
    },
    {
      title: 'Real Estate Agents & Property Advisors',
      desc: 'Solar rooftops boost property value. Add a premium solar option to your new home and villa client consultations.',
      icon: Building,
    },
    {
      title: 'Chartered Accountants & Financial Advisors',
      desc: 'Advise commercial and industrial clients on 40% accelerated depreciation, zero power bills, and massive tax savings.',
      icon: TrendingUp,
    },
    {
      title: 'Gram Panchayat & Community Leaders',
      desc: 'Help your village, cooperative housing society, or town adopt PM Surya Ghar Muft Bijli Yojana subsidies seamlessly.',
      icon: Award,
    },
  ];

  const welcomeKitItems = [
    {
      title: 'Welcome Letter, Pen & Flyers',
      desc: 'Official SolarArk authorization letter and informative homeowner brochures with localized Marathi & Hindi editions.',
    },
    {
      title: 'Branding Materials & Visiting Cards',
      desc: 'Personalized Surya Mitra ID card, professional visiting cards, high-impact shop banners, and digital flyers.',
    },
    {
      title: 'Access to Exclusive Training & Workshops',
      desc: 'Weekly webinars on shadow analysis, DISCOM net-metering processes, and objection handling from solar engineers.',
    },
    {
      title: 'Digital Marketing Support & Incentives',
      desc: 'Ready-to-share WhatsApp status creatives, localized lead tracking dashboard, and monthly performance rewards.',
    },
  ];

  const benefitsList = [
    {
      icon: Wallet,
      title: 'Monetary Incentives',
      description: 'Earn transparent commissions for every successful lead you provide with direct bank NEFT transfer upon commissioning.',
      badge: 'Up to ₹5,000 / kW',
    },
    {
      icon: BookOpen,
      title: 'Training and Support',
      description: 'Regular webinars, technical meetings, and live sessions on emerging solar panel technology, inverters, and battery storage.',
      badge: 'Weekly Sessions',
    },
    {
      icon: Sparkles,
      title: 'Marketing Tools',
      description: 'Access high-converting digital campaigns, printed branding materials, brochures, and seamless bank loan tie-up support.',
      badge: '100% Free Materials',
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Join active Surya Mitra WhatsApp groups across Maharashtra, share field experiences, and win exciting monthly festive schemes.',
      badge: 'Active Peer Network',
    },
  ];

  const faqs = [
    {
      q: 'Do I need technical solar background to join as a Surya Mitra?',
      a: 'No prior technical experience is required! Your primary role is to connect interested homeowners, housing societies, or business owners with SolarArk. Our certified solar engineers handle the site survey, 3D CAD design, DISCOM approvals, installation, and commissioning.',
    },
    {
      q: 'When and how are commissions paid?',
      a: 'Commissions are credited directly to your bank account via NEFT/UPI immediately upon project commissioning and net-meter synchronization. We provide a real-time tracking link for each referred customer.',
    },
    {
      q: 'Does SolarArk handle the DISCOM net-metering and PM Surya Ghar subsidy?',
      a: 'Yes! SolarArk handles 100% of the government paperwork, DISCOM filings with MSEDCL / SNDL, and subsidy disbursement on the National Portal. Your clients get an effortless turnkey experience.',
    },
    {
      q: 'Is there any joining fee or registration charge?',
      a: 'Becoming a SolarArk Surya Mitra is 100% free. There are zero upfront costs or registration charges. We even provide your welcome kit and training materials free of charge.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 selection:bg-[#8B1E1E] selection:text-white pt-24 pb-20">
      
      {/* ── BREADCRUMB & BACK HEADER ── */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-6">
        <div className="flex items-center justify-between py-2 border-b border-stone-200/80">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-[#8B1E1E] transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-stone-500">
            <span
              onClick={() => onNavigate('/')}
              className="hover:text-stone-900 cursor-pointer flex items-center gap-1"
            >
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </span>
            <span>/</span>
            <span className="text-[#8B1E1E] font-bold">Earn With Us (Surya Mitra)</span>
          </div>
        </div>
      </div>

      <PageContextBar
        title="Earn With Us — Surya Mitra Partner Program"
        badge="Partner Ecosystem"
        description="Partner with Maharashtra's leading rooftop solar provider. Turn your local relationships into recurring income with ₹15,000 to ₹1,00,000+ per month in milestone payouts."
        onPrimaryClick={scrollToForm}
        primaryCtaText="Register as Surya Mitra"
      />

      {/* ── SECTION 01: HERO BANNER ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-16 lg:mb-24">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200/90 bg-[#120808]">
          
          {/* Hero Slide Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/earnwithus/earnwithus-hero-slide.png"
              alt="SolarArk Surya Mitra Partner Program"
              className="w-full h-full object-cover opacity-35 object-center"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/homeowner-family-stories.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#120808] via-[#120808]/90 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-radial-at-t from-[#8B1E1E]/30 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl space-y-6 text-white">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E1E]/70 backdrop-blur-md border border-red-300/30 text-xs font-bold text-amber-200 uppercase tracking-wider font-heading">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Official SolarArk Surya Mitra Program</span>
            </div>

            {/* Display Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14] font-heading">
                Welcome to <span className="text-amber-400">SolarArk</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 font-heading">
                Empowering Communities with Solar Energy
              </h2>
            </div>

            {/* Exact Extract Copy Paragraphs */}
            <div className="space-y-3 text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              <p>
                The <strong>Surya Mitra program</strong>, an initiative by SolarARK, aims to bring solar rooftops to every home and empower individuals to contribute to a greener planet.
              </p>
              <p className="text-slate-300 text-sm">
                This campaign creates a network of enthusiastic individuals, business owners, and entrepreneurs to promote solar energy solutions while fostering self-reliance and entrepreneurship.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#earnwith"
                onClick={scrollToForm}
                className="bg-[#8B1E1E] hover:bg-[#5E1212] active:scale-[0.98] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-[#8B1E1E]/40 transition-all inline-flex items-center gap-2.5 text-sm cursor-pointer"
              >
                <span>Earn With Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/917080909590?text=Hi%20SolarArk%20Team%2C%20I%20want%20to%20know%20more%20about%20the%20Surya%20Mitra%20program."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition-all inline-flex items-center gap-2 text-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Partner Desk</span>
              </a>
            </div>

            {/* Trust Micro-Metrics */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-lg sm:text-2xl font-extrabold text-amber-400 font-heading">₹15,000+</div>
                <div className="text-[11px] text-slate-400 font-medium">Avg. Payout per Residential Referral</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-extrabold text-white font-heading">100%</div>
                <div className="text-[11px] text-slate-400 font-medium">Technical &amp; DISCOM Support</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-extrabold text-emerald-400 font-heading">₹0</div>
                <div className="text-[11px] text-slate-400 font-medium">Registration Fee / Zero Risk</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 02: WHO CAN JOIN? ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 lg:mb-28">
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Photographic Frame: Suryamitra.jpg */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200/80 bg-stone-100 group">
                <img
                  src="/images/earnwithus/suryamitra-who-can-join.jpg"
                  alt="Who can join the SolarArk Surya Mitra Network"
                  className="w-full h-[320px] sm:h-[400px] object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/homeowner-family-stories.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#8B1E1E]/90 text-[10px] font-bold uppercase tracking-wider text-amber-200 font-heading">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Open to All Enthusiastic Individuals</span>
                  </div>
                  <div className="text-base font-bold">
                    No Solar Background Needed
                  </div>
                  <p className="text-xs text-slate-300">
                    SolarArk handles survey, design, DISCOM paperwork, and installation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Copy & Profiles */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E1E]/10 border border-[#8B1E1E]/20 text-xs font-bold text-[#8B1E1E] font-heading">
                  <Users className="w-3.5 h-3.5" />
                  <span>Partner Categories</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Who can <span className="text-[#8B1E1E]">join?</span>
                </h2>
                <p className="text-sm sm:text-base font-medium text-slate-700">
                  Anyone passionate about making a difference can become a Surya Mitra, including:
                </p>
              </div>

              {/* Roles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {whoCanJoinList.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#FCFAF7] border border-stone-200/80 hover:border-[#8B1E1E]/40 hover:bg-white hover:shadow-sm transition-all space-y-2"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-red-50 text-[#8B1E1E] flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-heading text-xs sm:text-sm font-bold text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 03: HOW TO JOIN? (WELCOME KIT & SUPPORT) ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 lg:mb-28">
        <div className="bg-gradient-to-br from-[#8B1E1E] via-[#741616] to-[#5E1212] text-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl border border-red-900/50 relative overflow-hidden">
          
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-red-900/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-300 font-heading">
                  <Gift className="w-3.5 h-3.5" />
                  <span>Onboarding &amp; Welcome Kit</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                  How to <span className="text-amber-300">join?</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-100 font-normal leading-relaxed max-w-xl">
                  Register today with simple documents like an ID card, photo, and bank details. Upon joining, receive an official welcome kit with:
                </p>
              </div>

              {/* Kit Items List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {welcomeKitItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 transition-colors space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="font-heading text-xs sm:text-sm font-bold text-white">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed pl-7">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <a
                  href="#earnwith"
                  onClick={scrollToForm}
                  className="bg-white hover:bg-amber-50 text-[#8B1E1E] font-bold px-6 py-3 rounded-xl shadow-lg transition-all text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Apply for Surya Mitra Welcome Kit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Right Photo Frame: Solar power station */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-stone-900 group">
                <img
                  src="/images/earnwithus/solar-power-station-join.jpg"
                  alt="SolarArk Turnkey Rooftop Solar Infrastructure"
                  className="w-full h-[340px] sm:h-[420px] object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/homeowner-family-stories.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block font-heading">
                    Engineered by SolarArk EPC
                  </span>
                  <span className="text-sm font-bold block leading-snug">
                    Turnkey Rooftop Execution Across Maharashtra
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 04: DIRECTOR'S DESK & LEADERSHIP MESSAGE ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 lg:mb-28">
        <div className="relative bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-sm overflow-hidden">
          
          {/* Ambient City Backdrop */}
          <div className="absolute bottom-0 right-0 left-0 h-32 opacity-15 pointer-events-none overflow-hidden">
            <img
              src="/images/earnwithus/city-skyline-bg.png"
              alt=""
              className="w-full h-full object-cover object-bottom"
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            
            {/* Top Quote Callout */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#8B1E1E] flex items-center justify-center mx-auto shadow-xs">
                <Quote className="w-6 h-6" />
              </div>

              <blockquote className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug max-w-3xl mx-auto">
                “Join us in illuminating the world with the power of solar energy. Together, we can make a difference, one panel at a time.”
              </blockquote>
            </div>

            {/* Director Identity Profile */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-2">
              
              {/* Photo Inset */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-3 border-[#8B1E1E] shadow-md shrink-0 bg-stone-100">
                <img
                  src="/images/earnwithus/director-shrikant-tikhile.jpg"
                  alt="Shrikant Tikhile, Director, SolarARK"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/official-founder-desk-clean.png';
                  }}
                />
              </div>

              <div className="text-center sm:text-left space-y-0.5">
                <h3 className="font-heading text-xl font-bold text-slate-900">
                  Shrikant Tikhile
                </h3>
                <p className="text-sm font-bold text-[#8B1E1E] font-heading">
                  Director, SolarARK Projects Pvt. Ltd.
                </p>
                <p className="text-xs text-stone-500 max-w-md">
                  Pioneering distributed residential rooftop solar and empowering local micro-entrepreneurs across Maharashtra.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 05: BENEFITS OF JOINING THE SURYAMITRA NETWORK ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 lg:mb-28">
        <div className="space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E1E]/10 border border-[#8B1E1E]/20 text-xs font-bold text-[#8B1E1E] font-heading">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Network Advantages</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Benefits of Joining the <span className="text-[#8B1E1E]">Suryamitra Network</span>
            </h2>
            <p className="text-sm text-stone-600">
              Complete support ecosystem designed so you succeed from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left 2 Native Video Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Video Player 1 */}
              <div className="bg-[#120808] border border-[#8B1E1E]/30 rounded-2xl p-4 flex flex-col justify-between shadow-lg text-white space-y-3">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black shadow-inner flex items-center justify-center group">
                  <video
                    ref={videoRef1}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://www.thesolarark.com/static/media/earnwithus1.78f2135bd59c7e4125ab.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support video playback.
                  </video>
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-300 font-heading">
                    <Play className="w-3 h-3 fill-amber-300" />
                    <span>Orientation Video 01</span>
                  </div>
                  <h4 className="font-heading text-xs sm:text-sm font-bold text-white mt-1">
                    Surya Mitra Program Overview &amp; Payout Slabs
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-0.5 line-clamp-2">
                    How referrals convert to milestone payouts with zero installation liability.
                  </p>
                </div>
              </div>

              {/* Video Player 2 */}
              <div className="bg-[#120808] border border-[#8B1E1E]/30 rounded-2xl p-4 flex flex-col justify-between shadow-lg text-white space-y-3">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black shadow-inner flex items-center justify-center group">
                  <video
                    ref={videoRef2}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://www.thesolarark.com/static/media/earnwithus2.02fcc24f1ec7beedad6e.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support video playback.
                  </video>
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-300 font-heading">
                    <Play className="w-3 h-3 fill-amber-300" />
                    <span>Field Insights 02</span>
                  </div>
                  <h4 className="font-heading text-xs sm:text-sm font-bold text-white mt-1">
                    Technical Backing &amp; Customer Trust
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-0.5 line-clamp-2">
                    How SolarArk engineers handle CAD drawings, shadow analysis, and DISCOM meter installation.
                  </p>
                </div>
              </div>

            </div>

            {/* Right 4 Pillar Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefitsList.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-xs hover:border-[#8B1E1E]/40 hover:shadow-sm transition-all flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="w-9 h-9 rounded-xl bg-red-50 text-[#8B1E1E] flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 font-heading">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 06: INTERACTIVE EARNINGS ESTIMATOR CALCULATOR ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 lg:mb-28">
        <div className="bg-[#FCFAF7] border border-stone-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 font-heading">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Projected Earnings Calculator</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              See How Much You Can Earn Monthly
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Slide to select your monthly referral capacity across residential villas, housing societies, or commercial rooftops.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* Slider Control */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-700 font-heading uppercase tracking-wider">
                  Monthly Referred Capacity
                </span>
                <span className="text-base font-extrabold text-[#8B1E1E] font-heading bg-red-50 px-3 py-1 rounded-lg border border-red-100">
                  {monthlyCapacityKw} kW / month
                </span>
              </div>

              <input
                type="range"
                min="3"
                max="50"
                step="1"
                value={monthlyCapacityKw}
                onChange={(e) => setMonthlyCapacityKw(Number(e.target.value))}
                className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#8B1E1E]"
              />

              <div className="flex justify-between text-[11px] text-stone-400 font-medium">
                <span>3 kW (1 Villa)</span>
                <span>10 kW (3 Villas)</span>
                <span>25 kW (Society)</span>
                <span>50 kW (Commercial)</span>
              </div>
            </div>

            {/* Projected Result Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/60 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider font-heading block">
                  Estimated Monthly Payout
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#8B1E1E] font-heading tracking-tight mt-0.5">
                  ₹{calculateEstimatedEarnings(monthlyCapacityKw).toLocaleString('en-IN')}
                  <span className="text-xs font-normal text-stone-600 ml-1">/ month</span>
                </div>
                <span className="text-[11px] text-stone-500 mt-1 block">
                  Includes base commission + milestone quarterly performance incentives.
                </span>
              </div>

              <a
                href="#earnwith"
                onClick={scrollToForm}
                className="bg-[#8B1E1E] hover:bg-[#5E1212] text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-md transition-all shrink-0 cursor-pointer"
              >
                Claim Partner Account
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 07: ONBOARDING REGISTRATION FORM (ID="EARNWITH") ── */}
      <section id="earnwith" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 lg:mb-28 scroll-mt-24">
        <div className="relative bg-gradient-to-br from-[#8B1E1E] via-[#741616] to-[#5E1212] rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl border border-red-900/60 text-white overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Prompt Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-300 font-heading">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant Digital Onboarding</span>
              </div>

              <div className="space-y-3">
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Fill Out This Form
                </h2>
                <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
                  Connect with us to explore better career opportunities and accelerate your professional growth.
                </p>
                <p className="text-slate-200 text-xs sm:text-sm">
                  Our regional coordinator will activate your Surya Mitra ID and dispatch your welcome kit within 24 hours.
                </p>
              </div>

              {/* Trust highlights */}
              <div className="space-y-2.5 pt-2 border-t border-white/15">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>No technical certification or upfront fee required</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Helpline: <strong>7080909590</strong> | hr@thesolarark.com</span>
                </div>
              </div>

            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
                
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading text-2xl font-bold text-slate-900">
                        Application Submitted Successfully!
                      </h3>
                      <p className="text-sm text-stone-600 max-w-md mx-auto">
                        Thank you <strong>{formData.fullName}</strong>. Our partner onboarding manager for <strong>{formData.city || 'Maharashtra'}</strong> will call you on <strong>{formData.phoneNumber}</strong> to verify your details and activate your partner portal.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-[#8B1E1E] hover:underline pt-2 cursor-pointer"
                    >
                      Register Another Partner
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
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
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 transition-all focus:outline-none focus:ring-2 ${
                            errors.fullName
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-stone-300 focus:border-[#8B1E1E] focus:ring-[#8B1E1E]/20'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-xs text-red-600 font-medium">{errors.fullName}</p>
                        )}
                      </div>

                      {/* Email */}
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
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 transition-all focus:outline-none focus:ring-2 ${
                            errors.email
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-stone-300 focus:border-[#8B1E1E] focus:ring-[#8B1E1E]/20'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-600 font-medium">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone Number */}
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
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 transition-all focus:outline-none focus:ring-2 ${
                            errors.phoneNumber
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-stone-300 focus:border-[#8B1E1E] focus:ring-[#8B1E1E]/20'
                          }`}
                        />
                        {errors.phoneNumber && (
                          <p className="text-xs text-red-600 font-medium">{errors.phoneNumber}</p>
                        )}
                      </div>

                      {/* Primary City / District */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          District / Town *
                        </label>
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-slate-900 focus:border-[#8B1E1E] focus:ring-2 focus:ring-[#8B1E1E]/20 focus:outline-none"
                        >
                          <option value="Nagpur">Nagpur</option>
                          <option value="Amravati">Amravati</option>
                          <option value="Chhatrapati Sambhajinagar">Chhatrapati Sambhajinagar (Aurangabad)</option>
                          <option value="Wardha">Wardha</option>
                          <option value="Akola">Akola</option>
                          <option value="Yavatmal">Yavatmal</option>
                          <option value="Chandrapur">Chandrapur</option>
                          <option value="Pune">Pune</option>
                          <option value="Nashik">Nashik</option>
                          <option value="Other Maharashtra">Other District in Maharashtra</option>
                        </select>
                      </div>
                    </div>

                    {/* Profession / Role */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 font-heading">
                        Your Current Occupation / Background *
                      </label>
                      <select
                        name="profession"
                        value={formData.profession}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm text-slate-900 focus:border-[#8B1E1E] focus:ring-2 focus:ring-[#8B1E1E]/20 focus:outline-none"
                      >
                        <option value="Electrician / Plumber / Technician">Electrician, Plumber or AC Technician</option>
                        <option value="Shopkeeper / Trader / Business Owner">Shopkeeper, Trader or Local Merchant</option>
                        <option value="Real Estate Consultant / Builder">Real Estate Consultant or Builder</option>
                        <option value="Chartered Accountant / Financial Advisor">Chartered Accountant / Tax Advisor</option>
                        <option value="Student / Freelancer">Student or Freelancer</option>
                        <option value="Community Leader / Housing Society Member">Community Leader / Housing Society Member</option>
                        <option value="Other Profession">Other Profession</option>
                      </select>
                    </div>

                    {/* Address / Locality */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 font-heading">
                        Address / Locality *
                      </label>
                      <input
                        type="text"
                        name="address"
                        placeholder="e.g. Near Gandhi Square, Dharampeth"
                        value={formData.address}
                        onChange={handleInputChange}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 transition-all focus:outline-none focus:ring-2 ${
                          errors.address
                            ? 'border-red-400 focus:ring-red-300'
                            : 'border-stone-300 focus:border-[#8B1E1E] focus:ring-[#8B1E1E]/20'
                        }`}
                      />
                      {errors.address && (
                        <p className="text-xs text-red-600 font-medium">{errors.address}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#8B1E1E] hover:bg-[#5E1212] active:scale-[0.98] text-white font-heading font-bold text-sm py-3.5 rounded-xl shadow-md shadow-[#8B1E1E]/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                      >
                        {isSubmitting ? (
                          <span>Processing Application...</span>
                        ) : (
                          <>
                            <span>Submit Surya Mitra Application</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-stone-500 text-center pt-1">
                      By submitting, you agree to receive onboarding calls and official training materials from SolarArk Projects Pvt. Ltd.
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 08: FREQUENTLY ASKED QUESTIONS ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-16">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E1E]/10 text-xs font-bold text-[#8B1E1E] font-heading">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Surya Mitra Partner FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-heading text-sm sm:text-base font-bold text-slate-900 hover:text-[#8B1E1E] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#8B1E1E] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
