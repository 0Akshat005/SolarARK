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
} from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
  prefilledPincode?: string;
  prefilledBill?: number;
}

interface ApproachStep {
  id: string;
  number: string;
  title: string;
  description: string;
  // Percentage coordinates for SVG leader lines on desktop
  lineStart: { x: number; y: number };
  lineEnd: { x: number; y: number };
  anchor: 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right';
}

const APPROACH_STEPS: ApproachStep[] = [
  {
    id: 'step-1',
    number: '01',
    title: 'Site Assessment',
    description: 'Understanding your space, energy needs and potential.',
    anchor: 'top-left',
    lineStart: { x: 30, y: 16 },
    lineEnd: { x: 42, y: 32 },
  },
  {
    id: 'step-2',
    number: '02',
    title: 'System Design',
    description: 'Tailored for maximum efficiency and performance.',
    anchor: 'bottom-left',
    lineStart: { x: 30, y: 82 },
    lineEnd: { x: 40, y: 64 },
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Installation',
    description: 'Safe, precise and professional execution.',
    anchor: 'top-right',
    lineStart: { x: 70, y: 16 },
    lineEnd: { x: 62, y: 36 },
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Ongoing Support',
    description: 'Monitoring, maintenance and long-term partnership.',
    anchor: 'bottom-right',
    lineStart: { x: 70, y: 82 },
    lineEnd: { x: 58, y: 68 },
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
  const [activeStep, setActiveStep] = useState<string>('step-1');
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
  const projectsScrollRef = useRef<HTMLDivElement>(null);

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
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 min-h-screen bg-[#FCFAF7] text-slate-900 selection:bg-[#8B1E2D] selection:text-white">
      
      {/* ── SECTION 01: EDITORIAL SOLUTIONS SHOWCASE (PRESERVED INTACT) ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 lg:mb-28">

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
                Greater savings.<br />
                A cleaner, more independent home.
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
                Turn your roof into a<br />
                long-term business asset.
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
                Engineered for larger demands.<br />
                Built for long-term performance.
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

      {/* ── SECTION 02: OUR APPROACH (MATCHING REFERENCE ARCHITECTURAL ROOFTOP) ── */}
      <section id="our-approach" className="scroll-mt-28 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 lg:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-[0.2em] font-heading block">
                Our Approach
              </span>
              <div className="w-8 h-[1px] bg-stone-300" />
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.12]">
              Built around<br />
              the site, not<br />
              <span className="text-[#8B1E2D]">a template.</span>
            </h2>

            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
              Every space is different. We take a site-first approach to design solar systems that are efficient, reliable and built for the long term.
            </p>

            <div className="pt-2">
              <button
                onClick={onCtaClick}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#8B1E2D] group transition-colors cursor-pointer"
              >
                <span>Our Process</span>
                <ArrowRight className="w-4 h-4 text-[#8B1E2D] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Photographic Container with Annotated Callout Pointers */}
          <div className="lg:col-span-8 relative">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-stone-200/90 bg-stone-900 aspect-[16/10] sm:aspect-[16/9]">
              
              {/* Aerial Architectural Photo */}
              <img
                src="/images/approach-rooftop.jpg"
                alt="SolarArk custom rooftop solar engineering site assessment and installation"
                className="w-full h-full object-cover object-center"
              />

              {/* Contrast Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/60 pointer-events-none" />

              {/* Desktop Interactive SVG Leader Lines */}
              <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                {APPROACH_STEPS.map((step) => {
                  const isHighlighted = activeStep === step.id;
                  return (
                    <g key={step.id} className="transition-opacity duration-300">
                      {/* Leader Line */}
                      <line
                        x1={step.lineStart.x}
                        y1={step.lineStart.y}
                        x2={step.lineEnd.x}
                        y2={step.lineEnd.y}
                        stroke={isHighlighted ? '#FFFFFF' : 'rgba(255, 255, 255, 0.45)'}
                        strokeWidth={isHighlighted ? '0.35' : '0.25'}
                        strokeDasharray={isHighlighted ? 'none' : '0.8 0.6'}
                      />
                      {/* Anchor Dot on rooftop */}
                      <circle
                        cx={step.lineEnd.x}
                        cy={step.lineEnd.y}
                        r={isHighlighted ? '1.2' : '0.8'}
                        fill={isHighlighted ? '#E05252' : '#FFFFFF'}
                        className="transition-all duration-300"
                      />
                      {isHighlighted && (
                        <circle
                          cx={step.lineEnd.x}
                          cy={step.lineEnd.y}
                          r="2.2"
                          fill="none"
                          stroke="#E05252"
                          strokeWidth="0.3"
                          opacity="0.75"
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Desktop Floating Annotations (Overlaying the Image exactly as in reference) */}
              <div className="hidden lg:block">
                
                {/* 01 Site Assessment (Top Left) */}
                <div 
                  className={`absolute top-[8%] left-[5%] max-w-[210px] p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeStep === 'step-1' ? 'bg-black/40 backdrop-blur-md ring-1 ring-white/30' : 'hover:bg-black/20'
                  }`}
                  onMouseEnter={() => setActiveStep('step-1')}
                  onClick={() => setActiveStep('step-1')}
                >
                  <span className="text-[11px] font-bold text-white/70 font-heading block">01</span>
                  <div className="font-heading font-bold text-sm text-white mt-0.5">Site Assessment</div>
                  <p className="text-[11px] text-white/75 leading-relaxed mt-1">
                    Understanding your space, energy needs and potential.
                  </p>
                </div>

                {/* 02 System Design (Bottom Left) */}
                <div 
                  className={`absolute bottom-[8%] left-[5%] max-w-[210px] p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeStep === 'step-2' ? 'bg-black/40 backdrop-blur-md ring-1 ring-white/30' : 'hover:bg-black/20'
                  }`}
                  onMouseEnter={() => setActiveStep('step-2')}
                  onClick={() => setActiveStep('step-2')}
                >
                  <span className="text-[11px] font-bold text-white/70 font-heading block">02</span>
                  <div className="font-heading font-bold text-sm text-white mt-0.5">System Design</div>
                  <p className="text-[11px] text-white/75 leading-relaxed mt-1">
                    Tailored for maximum efficiency and performance.
                  </p>
                </div>

                {/* 03 Installation (Top Right) */}
                <div 
                  className={`absolute top-[8%] right-[5%] max-w-[210px] p-3 rounded-xl transition-all duration-300 cursor-pointer text-left ${
                    activeStep === 'step-3' ? 'bg-black/40 backdrop-blur-md ring-1 ring-white/30' : 'hover:bg-black/20'
                  }`}
                  onMouseEnter={() => setActiveStep('step-3')}
                  onClick={() => setActiveStep('step-3')}
                >
                  <span className="text-[11px] font-bold text-white/70 font-heading block">03</span>
                  <div className="font-heading font-bold text-sm text-white mt-0.5">Installation</div>
                  <p className="text-[11px] text-white/75 leading-relaxed mt-1">
                    Safe, precise and professional execution.
                  </p>
                </div>

                {/* 04 Ongoing Support (Bottom Right) */}
                <div 
                  className={`absolute bottom-[8%] right-[5%] max-w-[210px] p-3 rounded-xl transition-all duration-300 cursor-pointer text-left ${
                    activeStep === 'step-4' ? 'bg-black/40 backdrop-blur-md ring-1 ring-white/30' : 'hover:bg-black/20'
                  }`}
                  onMouseEnter={() => setActiveStep('step-4')}
                  onClick={() => setActiveStep('step-4')}
                >
                  <span className="text-[11px] font-bold text-white/70 font-heading block">04</span>
                  <div className="font-heading font-bold text-sm text-white mt-0.5">Ongoing Support</div>
                  <p className="text-[11px] text-white/75 leading-relaxed mt-1">
                    Monitoring, maintenance and long-term partnership.
                  </p>
                </div>

              </div>

            </div>

            {/* Mobile / Tablet Structured Callout Grid below the photo */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {APPROACH_STEPS.map((step) => (
                <div 
                  key={step.id}
                  className="bg-white border border-stone-200 rounded-xl p-4 space-y-1 shadow-xs"
                >
                  <span className="text-[11px] font-bold text-[#8B1E2D] font-heading block">
                    {step.number}
                  </span>
                  <div className="font-heading font-bold text-sm text-slate-900">
                    {step.title}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
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

      {/* ── SECTION 04: ASSESSMENT PRE-FOOTER CTA STRIP (FULL-WIDTH CLEAN EDITORIAL) ── */}
      <section className="border-t border-stone-200/80 bg-[#FCFAF7]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Tagline */}
            <div className="md:col-span-3 space-y-1">
              <span className="text-[10px] sm:text-[11px] font-bold text-stone-400 uppercase tracking-[0.2em] font-heading block">
                A Cleaner
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-stone-400 uppercase tracking-[0.2em] font-heading block">
                Brighter
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-stone-400 uppercase tracking-[0.2em] font-heading block">
                Maharashtra
              </span>
              <div className="w-8 h-[1px] bg-stone-300 mt-2" />
            </div>

            {/* Center Copy */}
            <div className="md:col-span-6 md:border-l md:border-stone-200 md:pl-8 space-y-1">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Tell us about your property.
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 font-normal leading-relaxed">
                We'll help assess the right solar solution for your space.
              </p>
            </div>

            {/* Right Action Button */}
            <div className="md:col-span-3 flex md:justify-end">
              <PrimaryButton
                size="md"
                onClick={onCtaClick}
                className="px-6 py-3 text-sm w-full sm:w-auto"
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
