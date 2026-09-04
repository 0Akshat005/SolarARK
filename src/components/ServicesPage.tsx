/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Play,
} from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
  prefilledPincode?: string;
  prefilledBill?: number;
}

interface SpecializedService {
  id: string;
  number: string;
  tabName: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
  image: string;
  alt: string;
}

const SPECIALIZED_SERVICES: SpecializedService[] = [
  {
    id: 'cleaning',
    number: '01',
    tabName: 'Panel Cleaning',
    title: 'Solar Panel Cleaning Service',
    shortDesc: 'Regular cleaning enhances efficiency by removing dust, debris, and bird droppings, ensuring maximum sunlight absorption for optimal performance.',
    deliverables: [
      'De-mineralized water wash prevents mineral scaling and surface etching',
      'Non-abrasive microfiber equipment protects anti-reflective panel coating',
      'Restores up to 15–25% lost generation caused by environmental dust accumulation',
    ],
    image: '/images/services/cleaning.jpg',
    alt: 'Solar panel cleaning service with professional equipment',
  },
  {
    id: 'monitoring',
    number: '02',
    tabName: 'Online Monitoring',
    title: 'Online Monitoring',
    shortDesc: 'Track your solar system’s performance in real time with our advanced online monitoring tools, helping you optimize energy usage and detect issues instantly.',
    deliverables: [
      'Real-time generation analytics, daily peak tracking, and DISCOM export stats',
      'Instant automated inverter fault detection and SMS/email alerts',
      'Mobile app & cloud dashboard with downloadable historical yield reports',
    ],
    image: '/images/services/monitoring.jpg',
    alt: 'Real-time online solar monitoring dashboard analytics',
  },
  {
    id: 'maintenance',
    number: '03',
    tabName: 'Preventive Maintenance',
    title: 'Proactive System Maintenance',
    shortDesc: 'We provide regular system check-ups and preventive maintenance to ensure consistent energy output and extend the lifespan of your solar panels.',
    deliverables: [
      'Scheduled physical & electrical diagnostic check-ups by certified engineers',
      'Thermal imaging inspections to detect hot spots and micro-cracks before failure',
      'Superstructure torque verification, grounding checks, and MC4 connector health audits',
    ],
    image: '/images/services/maintenance.jpg',
    alt: 'Engineer conducting preventive maintenance on solar array',
  },
  {
    id: 'installation',
    number: '04',
    tabName: 'Installation & Commissioning',
    title: 'Installation & Commissioning',
    shortDesc: 'Our expert team ensures a seamless solar panel installation, from site assessment to system activation, following industry best practices for safety and efficiency.',
    deliverables: [
      'Elevated galvanized GI superstructures custom-engineered for maximum roof clearance',
      'Tier-1 bifacial panels, certified European/Indian inverters, and IP67 DC junction boxes',
      'End-to-end DISCOM net metering liaison, safety testing, and official grid synchronization',
    ],
    image: '/images/services/installation.jpg',
    alt: 'SolarArk installation team mounting solar panels on rooftop',
  },
  {
    id: 'financing',
    number: '05',
    tabName: 'Solar Financing & Subsidies',
    title: 'Solar Financing',
    shortDesc: 'We offer flexible financing options to make solar energy affordable, including EMI plans, government subsidies, and leasing models to suit your budget.',
    deliverables: [
      'PM Surya Ghar: Muft Bijli Yojana subsidy assistance with direct DBT transfer (up to ₹78,000)',
      'Low-interest, collateral-free solar loans with easy EMI tenures (1 to 5 years)',
      '40% accelerated depreciation & GST input credit guidance for commercial & industrial clients',
    ],
    image: '/images/services/financing.jpg',
    alt: 'Solar financing and subsidy guidance consultation',
  },
];

const BILL_TIERS = [
  '₹1,000 – ₹2,000',
  '₹2,000 – ₹3,000',
  '₹3,000 – ₹4,000',
  '₹4,000 – ₹5,000',
  '₹5,000+',
];

interface FeaturedProject {
  id: string;
  capacity: string;
  category: string;
  city: string;
  image: string;
  alt: string;
}

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'proj-res',
    capacity: '6 kW',
    category: 'Residential',
    city: 'Amravati',
    image: '/images/projects/featured-residential.jpg',
    alt: '6 kW Residential rooftop solar installation in Amravati',
  },
  {
    id: 'proj-comm',
    capacity: '100 kW',
    category: 'Commercial',
    city: 'Nagpur',
    image: '/images/projects/featured-commercial.jpg',
    alt: '100 kW Commercial solar installation in Nagpur',
  },
  {
    id: 'proj-ind',
    capacity: '250 kW',
    category: 'Industrial',
    city: 'Wardha',
    image: '/images/projects/featured-industrial.jpg',
    alt: '250 kW Industrial solar plant in Wardha',
  },
];

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onCtaClick,
}) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
  const [activeServiceTab, setActiveServiceTab] = useState<number>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [selectedBillTier, setSelectedBillTier] = useState<string>('₹3,000 – ₹4,000');
  const projectsScrollRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prev) => {
      const next = (prev + 1) % FEATURED_PROJECTS.length;
      if (projectsScrollRef.current) {
        const cardWidth = projectsScrollRef.current.clientWidth / 3;
        projectsScrollRef.current.scrollTo({
          left: next * cardWidth,
          behavior: 'smooth',
        });
      }
      return next;
    });
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prev) => {
      const next = prev === 0 ? FEATURED_PROJECTS.length - 1 : prev - 1;
      if (projectsScrollRef.current) {
        const cardWidth = projectsScrollRef.current.clientWidth / 3;
        projectsScrollRef.current.scrollTo({
          left: next * cardWidth,
          behavior: 'smooth',
        });
      }
      return next;
    });
  };

  const scrollToApproach = () => {
    const el = document.getElementById('our-approach');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-12 min-h-screen bg-[#FCFAF7] text-slate-900 selection:bg-[#8B1E2D] selection:text-white">
      
      {/* ── SECTION 01: EDITORIAL SOLUTIONS SHOWCASE (PRESERVED INTACT) ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-6 lg:mb-8">

        {/* Editorial Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-bold text-stone-500 uppercase tracking-[0.2em] font-heading block">
              Solutions
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[52px] font-bold text-slate-900 tracking-tight leading-[1.08]">
              Energy solutions for{' '}
              <br className="hidden sm:block" />
              every kind of{' '}
              <span className="text-[#8B1E2D]">space.</span>
            </h1>
          </div>
          <div className="lg:col-span-5 flex items-end gap-6 lg:gap-8">
            <div className="space-y-0.5 border-l-2 border-stone-200 pl-6">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.18em] block">Cleaner</span>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.18em] block">Spaces</span>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.18em] block mt-1.5">Stronger</span>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.18em] block">Communities</span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed max-w-[240px] border-l border-stone-200 pl-6">
              Thoughtful solar solutions for the spaces where life, business and industry move forward.
            </p>
          </div>
        </div>

        {/* ── Three-Column Full-Bleed Image Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
          
          {/* Card 01: Residential */}
          <div 
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
            onClick={scrollToApproach}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToApproach();
              }
            }}
          >
            <div className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]">
              <img 
                src="/images/services/homes.jpg"
                alt="Residential rooftop solar installation on Indian home"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-white/70 font-heading">01</span>
                <div className="w-8 h-[1px] bg-white/40" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Residential
              </h2>
              <p className="text-sm text-white/80 leading-relaxed">
                Custom-designed solar for homeowners and housing communities to slash bills and ensure independence.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all duration-300">
                Explore Residential
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="flex items-center gap-2 pt-3 border-t border-white/20">
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Homes</span>
                <span className="text-white/25 text-xs">|</span>
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Villas</span>
                <span className="text-white/25 text-xs">|</span>
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Housing Societies</span>
              </div>
            </div>
          </div>

          {/* Card 02: Commercial */}
          <div 
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
            onClick={scrollToApproach}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToApproach();
              }
            }}
          >
            <div className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]">
              <img 
                src="/images/services/commercial.png"
                alt="Commercial building with rooftop solar array"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-white/70 font-heading">02</span>
                <div className="w-8 h-[1px] bg-white/40" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Commercial
              </h2>
              <p className="text-sm text-white/80 leading-relaxed">
                Tailored installations for businesses to reduce operational costs and optimize energy usage.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all duration-300">
                Explore Commercial
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="flex items-center gap-2 pt-3 border-t border-white/20">
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Offices</span>
                <span className="text-white/25 text-xs">|</span>
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Retail Spaces</span>
                <span className="text-white/25 text-xs">|</span>
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Institutions</span>
              </div>
            </div>
          </div>

          {/* Card 03: Industrial */}
          <div 
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
            onClick={scrollToApproach}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToApproach();
              }
            }}
          >
            <div className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]">
              <img 
                src="/images/services/industrials.jpg"
                alt="Industrial solar plant installation on factory roof"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-white/70 font-heading">03</span>
                <div className="w-8 h-[1px] bg-white/40" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Industrial
              </h2>
              <p className="text-sm text-white/80 leading-relaxed">
                Large-scale systems engineered to cut heavy expenses while boosting long-term efficiency.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all duration-300">
                Explore Industrial
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="flex items-center gap-2 pt-3 border-t border-white/20">
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Manufacturing</span>
                <span className="text-white/25 text-xs">|</span>
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Warehouses</span>
                <span className="text-white/25 text-xs">|</span>
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Industrial Parks</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 02: OUR APPROACH (OPEN FULL-BLEED ARCHITECTURAL STRIP) ── */}
      <section id="our-approach" className="scroll-mt-20 relative w-full overflow-hidden mb-6 lg:mb-8 bg-[#FCFAF7]">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Editorial Text Column (aligned with container) */}
          <div className="w-full lg:w-[38%] xl:w-[34%] pl-4 sm:pl-6 lg:pl-[max(1.5rem,calc((100vw-1360px)/2+3rem))] pr-4 sm:pr-6 lg:pr-8 py-6 lg:py-8 space-y-3 sm:space-y-4 shrink-0 z-10">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-[0.2em] font-heading block">
                Our Approach
              </span>
              <div className="w-8 h-[1px] bg-stone-300" />
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-[1.10]">
              Built around<br />
              the site, not<br />
              <span className="text-[#8B1E2D]">a template.</span>
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed max-w-sm">
              Every space is different. We take a site-first approach to design solar systems that are efficient, reliable and built for the long term.
            </p>

            <div className="pt-1">
              <button
                onClick={onCtaClick}
                className="text-xs sm:text-sm font-semibold text-[#8B1E2D] hover:underline inline-flex items-center gap-1.5 group cursor-pointer"
              >
                <span className="underline underline-offset-4 decoration-[#8B1E2D]">Our Process</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Open Full-Bleed Image (No box, no card, extends to top, bottom, and right edges) */}
          <div className="w-full lg:w-[62%] xl:w-[66%] relative flex items-center justify-end">
            <img
              src="/images/approach-artwork.png"
              alt="SolarArk site-first solar engineering process: Site Assessment, System Design, Installation, and Ongoing Support"
              className="w-full h-auto object-cover object-right block"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 24px, black 100%)',
                maskImage: 'linear-gradient(to right, transparent 0%, black 24px, black 100%)',
              }}
            />
          </div>

        </div>
      </section>

      {/* ── SECTION 02B: CLIENT PROOF & AUTHENTIC VIDEO SHOWCASE ── */}
      <section id="client-story" className="scroll-mt-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-6 lg:mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Editorial Narrative & Proof Stats */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-[0.2em] font-heading block">
                Client Story
              </span>
              <div className="w-8 h-[1px] bg-stone-300" />
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-[1.10]">
              90% of customers recommend{' '}
              <span className="text-[#8B1E2D]">SolarARK.</span>
            </h2>

            <p className="text-sm sm:text-base font-semibold text-slate-800 tracking-tight">
              Central India's top homeowners and businesses choose SolarARK.
            </p>

            <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
              Discover the future of energy with SolarArk's advanced solar panel systems. We offer reliable, maintainable, affordable, and efficient turnkey solar solutions designed to drastically cut electricity bills while ensuring long-term energy independence.
            </p>

            {/* Credibility Figures Bar */}
            <div className="grid grid-cols-3 gap-4 pt-3 border-t border-stone-200/80">
              <div>
                <div className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">90%</div>
                <div className="text-[11px] text-stone-500 font-medium mt-0.5">Recommendation Rate</div>
              </div>
              <div>
                <div className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">25 Yrs</div>
                <div className="text-[11px] text-stone-500 font-medium mt-0.5">Performance Guarantee</div>
              </div>
              <div>
                <div className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">4+ Cities</div>
                <div className="text-[11px] text-stone-500 font-medium mt-0.5">Direct Maharashtra Hubs</div>
              </div>
            </div>

            <div className="pt-2">
              <PrimaryButton size="md" onClick={onCtaClick} className="px-6 py-2.5 text-xs sm:text-sm">
                Get a Free Consultation
              </PrimaryButton>
            </div>
          </div>

          {/* Right Video Player Frame */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-stone-200/80 bg-slate-950 aspect-[16/9] group">
              <video
                ref={videoRef}
                src="/videos/client-testimonial-web.mp4"
                poster="/images/client-video-poster.jpg"
                className="w-full h-full object-cover"
                controls
                playsInline
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
              />
              
              {/* Custom Play Overlay Badge (fades out when video is active) */}
              {!isVideoPlaying && (
                <div 
                  onClick={toggleVideoPlay}
                  className="absolute inset-0 bg-black/25 hover:bg-black/15 transition-all duration-300 flex items-center justify-center cursor-pointer"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#8B1E2D]/90 text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-105 border border-white/20">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
                  </div>
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-black/65 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] sm:text-xs font-medium text-white tracking-wide">
                      Real Customer Rooftop Installation
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 02C: SPECIALIZED TECHNICAL & LIFECYCLE SERVICES (PARETO TABS) ── */}
      <section id="specialized-services" className="scroll-mt-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-6 lg:mb-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-[0.2em] font-heading block">
                Lifecycle & Support
              </span>
              <div className="w-8 h-[1px] bg-stone-300" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
              Specialized services built for{' '}
              <span className="text-[#8B1E2D]">peak yield.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 max-w-md leading-relaxed">
            From automated monitoring to preventive maintenance and subsidy financing, we support your installation across its entire 25-year lifecycle.
          </p>
        </div>

        {/* Pareto Horizontal Tab Navigator */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-4">
          {SPECIALIZED_SERVICES.map((srv, idx) => (
            <button
              key={srv.id}
              onClick={() => setActiveServiceTab(idx)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                activeServiceTab === idx
                  ? 'bg-[#8B1E2D] text-white border-[#8B1E2D] shadow-xs'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300 hover:text-slate-900'
              }`}
            >
              <span className="text-[10px] opacity-60 mr-1.5">{srv.number}</span>
              {srv.tabName}
            </button>
          ))}
        </div>

        {/* Active Service Showcase Card */}
        <div className="bg-white border border-stone-200/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative Details */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#8B1E2D] font-heading">
                  {SPECIALIZED_SERVICES[activeServiceTab].number} / 05
                </span>
                <div className="w-6 h-[1px] bg-[#8B1E2D]/40" />
                <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                  SolarARK Official Service
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {SPECIALIZED_SERVICES[activeServiceTab].title}
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                {SPECIALIZED_SERVICES[activeServiceTab].shortDesc}
              </p>

              {/* Key Deliverables List */}
              <div className="space-y-2.5 pt-2 border-t border-stone-100">
                {SPECIALIZED_SERVICES[activeServiceTab].deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <PrimaryButton size="md" onClick={onCtaClick} className="px-5 py-2.5 text-xs sm:text-sm">
                  Enquire About This Service
                </PrimaryButton>
                <button
                  onClick={onCtaClick}
                  className="text-xs font-semibold text-stone-600 hover:text-slate-900 underline underline-offset-4 decoration-stone-300 hover:decoration-slate-900 transition-all cursor-pointer"
                >
                  Speak with an Engineer →
                </button>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden border border-stone-200 aspect-[16/10] bg-stone-100 group">
                <img
                  src={SPECIALIZED_SERVICES[activeServiceTab].image}
                  alt={SPECIALIZED_SERVICES[activeServiceTab].alt}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-medium text-white">
                  {SPECIALIZED_SERVICES[activeServiceTab].title}
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ── SECTION 03: FEATURED PROJECTS (COMPACT EDITORIAL HORIZONTAL FRAME) ── */}
      <section className="relative text-white py-10 sm:py-12 lg:py-14 overflow-hidden">
        
        {/* Atmospheric Twilight Tree Canopy Backdrop */}
        <div 
          className="absolute inset-0 bg-cover bg-top pointer-events-none opacity-40 mix-blend-luminosity"
          style={{ backgroundImage: "url('/images/projects-backdrop.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D131B]/95 via-[#0D131B]/90 to-[#0A0E15] pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          {/* Unified Horizontal Layout: Intro on Left, Cards on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Column: Eyebrow, Heading, Description, View All Projects CTA */}
            <div className="lg:col-span-3 xl:col-span-3 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold text-white/50 uppercase tracking-[0.2em] font-heading block">
                  Featured Projects
                </span>
                <div className="w-8 h-[1px] bg-white/20" />
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.08]">
                Real spaces.<br />
                <span className="text-[#C83848]">Real impact.</span>
              </h2>

              <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed max-w-sm">
                From residential rooftops to large industrial facilities, our projects reflect long-term value and a cleaner tomorrow.
              </p>

              {/* View All Projects Button */}
              <div className="pt-1">
                <button
                  onClick={() => onNavigate('/projects')}
                  className="inline-flex items-center gap-3 text-white/90 hover:text-white group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold tracking-wide">View All Projects</span>
                </button>
              </div>
            </div>

            {/* Right Column: Carousel Controls, 3-Card Grid, and Pagination */}
            <div className="lg:col-span-9 xl:col-span-9 flex flex-col justify-between">
              
              {/* Carousel Controls (Positioned Top Right Above Cards) */}
              <div className="flex justify-end items-center gap-2 mb-3">
                <button
                  onClick={handlePrevProject}
                  aria-label="Previous project"
                  className="w-8 h-8 rounded-full border border-white/25 hover:border-white flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer active:scale-95"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleNextProject}
                  aria-label="Next project"
                  className="w-8 h-8 rounded-full border border-[#8B1E2D]/60 hover:border-white flex items-center justify-center text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer active:scale-95"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 3 Project Cards Grid */}
              <div 
                ref={projectsScrollRef}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 lg:gap-4 overflow-x-auto scrollbar-none"
              >
                {FEATURED_PROJECTS.map((project, idx) => (
                  <div
                    key={project.id}
                    onClick={() => onNavigate('/projects')}
                    className={`group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border ${
                      currentProjectIndex === idx ? 'border-white/40 ring-1 ring-white/20' : 'border-white/15 hover:border-white/30'
                    }`}
                  >
                    {/* Project Image (Aspect-Ratio Controlled) */}
                    <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                      />
                    </div>

                    {/* Dark Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                    {/* Bottom Content Bar */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-end justify-between">
                      <div className="space-y-0.5">
                        <div className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight leading-none">
                          {project.capacity}
                        </div>
                        <div className="text-[11px] sm:text-xs text-white/75 font-medium mt-1">
                          {project.category} <span className="text-white/40">|</span> {project.city}
                        </div>
                      </div>

                      {/* Circular Arrow Button */}
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/35 flex items-center justify-center text-white group-hover:border-white group-hover:bg-white group-hover:text-slate-950 transition-all duration-300 shrink-0">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Counter / Progress at Bottom Right */}
              <div className="flex justify-end items-center gap-2 mt-3 text-[11px] text-white/50 font-mono tracking-widest">
                <span className="text-white font-bold">{String(currentProjectIndex + 1).padStart(2, '0')}</span>
                <div className="w-10 h-[1px] bg-white/25" />
                <span>03</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 04: ASSESSMENT PRE-FOOTER CTA STRIP (COMPACT ARCHITECTURAL STRIP) ── */}
      <section className="border-t border-stone-200/80 bg-[#FCFAF7] py-6 sm:py-8 lg:py-9">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-8">
            
            {/* Left: Eyebrow + Headline + Subtext */}
            <div className="space-y-1.5 shrink-0 max-w-lg">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-[0.2em] font-heading block">
                  Book Free Consultation
                </span>
                <div className="w-8 h-[1px] bg-stone-300" />
                <span className="text-[11px] font-bold text-[#8B1E2D] uppercase tracking-wider">
                  Up to ₹78,000 Subsidy
                </span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                Tell us about your property.
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                Connect with our solar experts for honest advice tailored to your energy needs.
              </p>
            </div>

            {/* Right: Inline Bill Tier Segmented Bar + Action Button */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-4 shrink-0">
              {/* Bill tier chips */}
              <div className="flex items-center gap-1 bg-stone-200/60 p-1 rounded-xl overflow-x-auto scrollbar-none">
                {BILL_TIERS.map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setSelectedBillTier(tier)}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      selectedBillTier === tier
                        ? 'bg-[#8B1E2D] text-white shadow-xs'
                        : 'text-stone-600 hover:text-slate-900 hover:bg-white/70'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>

              {/* Action Button */}
              <PrimaryButton
                size="md"
                onClick={onCtaClick}
                className="px-6 py-2.5 text-xs sm:text-sm whitespace-nowrap w-full sm:w-auto shrink-0"
              >
                Get Free Consultation →
              </PrimaryButton>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
