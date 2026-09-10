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
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
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
  const projectsScrollRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const serviceItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    container: stickyContainerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardLength = SPECIALIZED_SERVICES.length;
    const cardsBreakpoints = SPECIALIZED_SERVICES.map((_, index) => index / (cardLength - 1 || 1));
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveServiceTab(closestBreakpointIndex);
  });

  const handleTabClick = (idx: number) => {
    setActiveServiceTab(idx);
    if (serviceItemRefs.current[idx]) {
      serviceItemRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
    <div className="pt-20 sm:pt-24 lg:pt-32 pb-12 min-h-screen bg-[#F7F5F0] text-[#151817] selection:bg-[#7A211D] selection:text-white font-body">
      
      {/* ── SECTION 01: EDITORIAL SOLUTIONS SHOWCASE (PRESERVED INTACT) ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-6 lg:mb-8">

        {/* Editorial Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <span className="text-[11px] font-medium text-[#6C6C68] uppercase tracking-[0.18em] font-body block">
              Solutions
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[52px] font-medium text-[#151817] tracking-tight leading-[1.08]">
              Energy solutions for{' '}
              <br className="hidden sm:block" />
              every kind of{' '}
              <span className="word-accent-subtle font-medium">space.</span>
            </h1>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="border-l-2 border-[#E6E3DD] pl-5 sm:pl-6 lg:pl-7 py-1">
              <p className="text-base sm:text-lg lg:text-[18px] text-[#6C6C68] leading-relaxed max-w-lg font-normal font-body">
                Thoughtful solar solutions for the spaces where life, business and industry move forward.
              </p>
            </div>
          </div>

          {/* First-Screenful Mobile Primary CTA (revamp.md Focus Area 1 & 4) */}
          <div className="lg:col-span-12 block lg:hidden -mt-2">
            <button
              onClick={onCtaClick}
              className="w-full inline-flex items-center justify-center gap-2 text-sm font-body font-medium text-white bg-[#7A211D] hover:bg-[#631B18] rounded-[14px] px-6 py-3.5 min-h-[48px] shadow-sm transition-all duration-300 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A211D]"
            >
              <span>Request Free 3D Site Survey</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* ── Three-Column Full-Bleed Image Cards (Vertical List on Mobile) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-3 lg:gap-4">
          
          {/* Card 01: Residential */}
          <div 
            className="group relative overflow-hidden rounded-[4px] cursor-pointer"
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
            <div className="h-[340px] sm:h-auto sm:aspect-[4/5] lg:aspect-[3/4]">
              <img 
                src="/images/services/homes.jpg"
                alt="Residential rooftop solar installation on Indian home"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8 space-y-2 sm:space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-white/70 font-heading">01</span>
                <div className="w-8 h-[1px] bg-white/40" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Residential
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Custom-designed solar for homeowners and housing communities to slash bills and ensure independence.
              </p>
              <div className="pt-0.5">
                <span className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-white group-hover:gap-3 transition-all duration-300">
                  Explore Residential
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-2.5 border-t border-white/20">
                <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Homes</span>
                <span className="text-white/25 text-xs">|</span>
                <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Villas</span>
                <span className="text-white/25 text-xs">|</span>
                <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Housing Societies</span>
              </div>
            </div>
          </div>

          {/* Card 02: Commercial */}
          <div 
            className="group relative overflow-hidden rounded-[4px] cursor-pointer"
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
            <div className="h-[340px] sm:h-auto sm:aspect-[4/5] lg:aspect-[3/4]">
              <img 
                src="/images/services/commercial.png"
                alt="Commercial building with rooftop solar array"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8 space-y-2 sm:space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-white/70 font-heading">02</span>
                <div className="w-8 h-[1px] bg-white/40" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Commercial
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Tailored installations for businesses to reduce operational costs and optimize energy usage.
              </p>
              <div className="pt-0.5">
                <span className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-white group-hover:gap-3 transition-all duration-300">
                  Explore Commercial
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-2.5 border-t border-white/20">
                <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Offices</span>
                <span className="text-white/25 text-xs">|</span>
                <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Retail Spaces</span>
                <span className="text-white/25 text-xs">|</span>
                <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Institutions</span>
              </div>
            </div>
          </div>

          {/* Card 03: Industrial */}
          <div 
            className="group relative overflow-hidden rounded-[4px] cursor-pointer"
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
            <div className="h-[340px] sm:h-auto sm:aspect-[4/5] lg:aspect-[3/4]">
              <img 
                src="/images/services/industrials.jpg"
                alt="Industrial solar plant installation on factory roof"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8 space-y-2 sm:space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-white/70 font-heading">03</span>
                <div className="w-8 h-[1px] bg-white/40" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Industrial
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Large-scale systems engineered to cut heavy expenses while boosting long-term efficiency.
              </p>
              <div className="pt-0.5">
                <span className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-white group-hover:gap-3 transition-all duration-300">
                  Explore Industrial
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-2.5 border-t border-white/20">
                <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Manufacturing</span>
                <span className="text-white/25 text-xs">|</span>
                <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Warehouses</span>
                <span className="text-white/25 text-xs">|</span>
                <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Industrial Parks</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 02: OUR APPROACH (OPEN FULL-BLEED ARCHITECTURAL STRIP) ── */}
      <section id="our-approach" className="scroll-mt-20 relative w-full overflow-hidden mb-6 lg:mb-8 bg-[#FCFAF7]">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Editorial Text Column (aligned with container) */}
          <div className="w-full lg:w-[38%] xl:w-[34%] px-4 sm:px-6 lg:pl-[max(1.5rem,calc((100vw-1360px)/2+3rem))] lg:pr-8 py-6 lg:py-8 space-y-3 sm:space-y-4 shrink-0 z-10">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-[0.2em] font-heading block">
                Our Approach
              </span>
              <div className="w-8 h-[1px] bg-stone-300" />
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-[1.10]">
              Built around<br />
              the site, not<br />
              <span className="word-accent-subtle">a template.</span>
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed max-w-sm">
              Every space is different. We take a site-first approach to design solar systems that are efficient, reliable and built for the long term.
            </p>

            <div className="pt-1">
              <button
                onClick={onCtaClick}
                className="min-h-[44px] text-xs sm:text-sm font-medium text-[#7A211D] hover:underline inline-flex items-center gap-1.5 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A211D] font-body"
              >
                <span className="underline underline-offset-4 decoration-[#7A211D]">Our Process</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Open Full-Bleed Image (No box, no card, extends to top, bottom, and right edges) */}
          <div className="w-full lg:w-[62%] xl:w-[66%] relative flex items-center justify-end">
            <img
              src="/images/approach-artwork.png"
              alt="SolarArk site-first solar engineering process: Site Assessment, System Design, Installation, and Ongoing Support"
              className="w-full h-auto object-cover object-right block lg:[mask-image:linear-gradient(to_right,transparent_0%,black_24px,black_100%)] lg:[WebkitMaskImage:linear-gradient(to_right,transparent_0%,black_24px,black_100%)]"
            />
          </div>

        </div>

        {/* Accessible Mobile 4-Step Process Cards (revamp.md Focus Area 5) */}
        <div className="block lg:hidden w-full px-4 sm:px-6 pt-2 pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { num: '01', title: 'Site Assessment', desc: 'On-site survey, 3D shadow analysis & rooftop structural engineering.' },
              { num: '02', title: 'Custom Design', desc: 'CAD simulation customized to your roof geometry for highest generation.' },
              { num: '03', title: 'Precision Execution', desc: 'In-house execution with Tier-1 bifacial panels & certified safety standards.' },
              { num: '04', title: 'Ongoing Support', desc: 'Turnkey DISCOM net metering liaison & 25-year performance warranty.' },
            ].map((step) => (
              <div key={step.num} className="p-3.5 bg-white border border-[#E6E3DD] rounded-[4px] flex items-start gap-3 shadow-2xs">
                <span className="w-7 h-7 rounded-full bg-[#7A211D]/10 text-[#7A211D] flex items-center justify-center shrink-0 font-heading font-medium text-xs">
                  {step.num}
                </span>
                <div>
                  <h4 className="font-heading font-medium text-xs sm:text-sm text-[#151817] leading-snug">{step.title}</h4>
                  <p className="text-[11px] sm:text-xs text-[#6C6C68] mt-0.5 leading-relaxed font-body">{step.desc}</p>
                </div>
              </div>
            ))}
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
              <span className="word-accent-subtle">SolarARK.</span>
            </h2>

            <p className="text-sm sm:text-base font-semibold text-slate-800 tracking-tight">
              Central India's top homeowners and businesses choose SolarARK.
            </p>

            <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
              Discover the future of energy with SolarArk's advanced solar panel systems. We offer reliable, maintainable, affordable, and efficient turnkey solar solutions designed to drastically cut electricity bills while ensuring long-term energy independence.
            </p>

            {/* Credibility Figures Bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 border-t border-stone-200/80">
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-slate-900">90%</div>
                <div className="text-[10px] sm:text-[11px] text-stone-500 font-medium mt-0.5 leading-tight">Recommendation Rate</div>
              </div>
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-slate-900">25 Yrs</div>
                <div className="text-[10px] sm:text-[11px] text-stone-500 font-medium mt-0.5 leading-tight">Performance Guarantee</div>
              </div>
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-slate-900">4+ Cities</div>
                <div className="text-[10px] sm:text-[11px] text-stone-500 font-medium mt-0.5 leading-tight">Direct Maharashtra Hubs</div>
              </div>
            </div>

            <div className="pt-2">
              <PrimaryButton size="md" onClick={onCtaClick} className="w-full sm:w-auto px-6 py-3 min-h-[48px] text-xs sm:text-sm justify-center">
                Get a Free Consultation
              </PrimaryButton>
            </div>
          </div>

          {/* Right Video Player Frame */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[4px] overflow-hidden shadow-md border border-stone-200/80 bg-slate-950 aspect-[16/9] group">
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
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#7A211D]/90 text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-105 border border-white/20">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
                  </div>
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-black/65 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] sm:text-xs font-medium text-white tracking-wide font-body">
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
              <span className="text-[11px] font-medium text-[#6C6C68] uppercase tracking-[0.18em] font-body block">
                Lifecycle & Support
              </span>
              <div className="w-8 h-[1px] bg-[#E6E3DD]" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-medium text-[#151817] tracking-tight leading-tight">
              Specialized solutions built for{' '}
              <span className="word-accent-subtle font-medium">peak yield.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6C6C68] max-w-md leading-relaxed font-body">
            From automated monitoring to preventive maintenance and subsidy financing, we support your installation across its entire 25-year lifecycle.
          </p>
        </div>

        {/* Pareto Horizontal Tab Navigator */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none mb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {SPECIALIZED_SERVICES.map((srv, idx) => (
            <button
              key={srv.id}
              onClick={() => handleTabClick(idx)}
              className={`px-4 py-2.5 min-h-[44px] rounded-full text-xs sm:text-sm font-medium font-body whitespace-nowrap transition-all duration-200 cursor-pointer border shrink-0 flex items-center ${
                activeServiceTab === idx
                  ? 'bg-[#7A211D] text-white border-[#7A211D] shadow-xs'
                  : 'bg-white text-[#6C6C68] border-[#E6E3DD] hover:border-[#6C6C68] hover:text-[#151817]'
              }`}
            >
              <span className="text-[10px] opacity-60 mr-1.5">{srv.number}</span>
              {srv.tabName}
            </button>
          ))}
        </div>

        {/* Desktop Sticky Scroll Reveal Showcase (Exact Aceternity sticky-scroll pattern art-directed for SolarARK) */}
        <div className="hidden lg:block bg-white border border-[#E6E3DD] rounded-[4px] p-8 lg:p-10 shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-12 gap-10 items-start">
            
            {/* Left Scrollable Stream */}
            <div
              ref={stickyContainerRef}
              className="col-span-6 h-[32rem] overflow-y-auto pr-6 scrollbar-thin scrollbar-thumb-[#E6E3DD] scrollbar-track-transparent space-y-24 py-4"
            >
              {SPECIALIZED_SERVICES.map((srv, idx) => (
                <motion.div
                  key={srv.id}
                  ref={(el) => {
                    serviceItemRefs.current[idx] = el;
                  }}
                  animate={{
                    opacity: activeServiceTab === idx ? 1 : 0.28,
                  }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-[#7A211D] font-heading">
                      {srv.number} / 05
                    </span>
                    <div className="w-6 h-[1px] bg-[#7A211D]/40" />
                    <span className="text-[11px] font-medium text-[#6C6C68] uppercase tracking-wider font-body">
                      SolarARK Official Service
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl lg:text-3xl font-medium text-[#151817] tracking-tight">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-[#6C6C68] leading-relaxed font-body">
                    {srv.shortDesc}
                  </p>

                  {/* Key Deliverables List */}
                  <div className="space-y-2.5 pt-2 border-t border-stone-100">
                    {srv.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#7A211D] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#151817] font-medium leading-relaxed font-body">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 flex items-center gap-4">
                    <PrimaryButton size="md" onClick={onCtaClick} className="px-6 py-2.5 text-xs sm:text-sm">
                      Enquire About This Service →
                    </PrimaryButton>
                    <button
                      onClick={onCtaClick}
                      className="text-xs font-medium text-[#6C6C68] hover:text-[#151817] underline underline-offset-4 decoration-stone-300 hover:decoration-[#151817] transition-all cursor-pointer font-body"
                    >
                      Speak with an Engineer →
                    </button>
                  </div>
                </motion.div>
              ))}
              <div className="h-20" />
            </div>

            {/* Right Sticky Visual Display */}
            <div className="col-span-6 sticky top-4 self-start">
              <div className="relative rounded-[4px] overflow-hidden border border-[#E6E3DD] aspect-[16/10] bg-[#F7F5F0] shadow-sm group">
                <motion.img
                  key={SPECIALIZED_SERVICES[activeServiceTab].id}
                  src={SPECIALIZED_SERVICES[activeServiceTab].image}
                  alt={SPECIALIZED_SERVICES[activeServiceTab].alt}
                  initial={{ opacity: 0.6, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3.5 left-3.5 bg-black/65 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs font-medium text-white shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {SPECIALIZED_SERVICES[activeServiceTab].title}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Interactive Single-Card Showcase */}
        <div className="block lg:hidden bg-white border border-[#E6E3DD] rounded-[4px] p-5 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 gap-6 items-center">
            
            {/* Left Narrative Details */}
            <div className="space-y-3.5 sm:space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-[#7A211D] font-heading">
                  {SPECIALIZED_SERVICES[activeServiceTab].number} / 05
                </span>
                <div className="w-6 h-[1px] bg-[#7A211D]/40" />
                <span className="text-[11px] font-medium text-[#6C6C68] uppercase tracking-wider font-body">
                  SolarARK Official Service
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#151817] tracking-tight">
                {SPECIALIZED_SERVICES[activeServiceTab].title}
              </h3>

              <p className="text-xs sm:text-sm text-[#6C6C68] leading-relaxed font-body">
                {SPECIALIZED_SERVICES[activeServiceTab].shortDesc}
              </p>

              {/* Key Deliverables List */}
              <div className="space-y-2.5 pt-2 border-t border-stone-100">
                {SPECIALIZED_SERVICES[activeServiceTab].deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#7A211D] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#151817] font-medium leading-relaxed font-body">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <PrimaryButton size="md" onClick={onCtaClick} className="w-full sm:w-auto px-6 py-3 min-h-[48px] text-xs sm:text-sm justify-center">
                  Enquire About This Service
                </PrimaryButton>
                <button
                  onClick={onCtaClick}
                  className="inline-flex items-center justify-center min-h-[44px] text-xs sm:text-sm font-medium text-[#6C6C68] hover:text-[#151817] underline underline-offset-4 decoration-stone-300 hover:decoration-[#151817] transition-all cursor-pointer font-body"
                >
                  Speak with an Engineer →
                </button>
              </div>
            </div>

            {/* Right Photo */}
            <div>
              <div className="relative rounded-[4px] overflow-hidden border border-stone-200 aspect-[16/10] bg-stone-100 group">
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
                  className="inline-flex items-center gap-3 min-h-[44px] text-white/90 hover:text-white group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold tracking-wide">View All Projects</span>
                </button>
              </div>
            </div>

            {/* Right Column: Carousel Controls, 3-Card Grid, and Pagination */}
            <div className="lg:col-span-9 xl:col-span-9 flex flex-col justify-between">
              
              {/* Carousel Controls (Positioned Top Right Above Cards) */}
              <div className="flex justify-end items-center gap-2.5 mb-3">
                <button
                  onClick={handlePrevProject}
                  aria-label="Previous project"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-white/25 hover:border-white flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextProject}
                  aria-label="Next project"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-[#7A211D]/60 hover:border-white flex items-center justify-center text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <ArrowRight className="w-4 h-4" />
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
                    className={`group relative rounded-[4px] overflow-hidden cursor-pointer transition-all duration-300 border ${
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
                      <div className="w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-white/35 flex items-center justify-center text-white group-hover:border-white group-hover:bg-white group-hover:text-slate-950 transition-all duration-300 shrink-0">
                        <ArrowRight className="w-4 h-4 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
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

      {/* ── SECTION 04: ASSESSMENT PRE-FOOTER CTA STRIP ("Tell us about your property.") ── */}
      <section className="border-t border-b border-[#E6E3DD] bg-[#F7F5F0] py-8 sm:py-10 lg:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
            
            {/* Left & Center: Eyebrow Stack + Vertical Divider + Headline/Subtext */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 lg:gap-10">
              
              {/* 1. Regional Eyebrow Stack: A CLEANER / BRIGHTER / MAHARASHTRA */}
              <div className="flex flex-col select-none shrink-0">
                <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-[#6C6C68] font-body leading-tight">
                  A CLEANER
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-[#6C6C68] font-body leading-tight mt-0.5">
                  BRIGHTER
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-[#6C6C68] font-body leading-tight mt-0.5">
                  MAHARASHTRA
                </span>
                <div className="w-7 h-[1.5px] bg-[#E6E3DD] mt-2.5" />
              </div>

              {/* Vertical Architectural Divider */}
              <div className="hidden sm:block w-[1px] h-12 lg:h-14 bg-[#E6E3DD] shrink-0" />

              {/* 2. Headline & Subtext */}
              <div className="space-y-1 text-left">
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-medium text-[#151817] tracking-tight leading-tight">
                  Tell us about your property.
                </h3>
                <p className="text-xs sm:text-sm lg:text-[15px] text-[#6C6C68] font-normal leading-normal font-body">
                  We'll help assess the right solar solution for your space.
                </p>
              </div>

            </div>

            {/* 3. Right Action Button */}
            <div className="shrink-0 flex items-center">
              <PrimaryButton
                as="a"
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) {
                    onNavigate('/contact');
                  } else if (onCtaClick) {
                    onCtaClick();
                  }
                }}
                size="md"
                className="w-full sm:w-auto justify-center whitespace-nowrap"
              >
                Get a Solar Assessment
              </PrimaryButton>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
