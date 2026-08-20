/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Info,
  Target,
  Compass,
  Zap,
  BatteryCharging,
  BadgePercent,
  Headphones,
  ShieldCheck,
  Leaf,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Rocket,
  Home,
  Users,
  Heart,
  MapPin
} from 'lucide-react';

interface AboutSectionProps {
  onCtaClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isReduced, setIsReduced] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkReduced = () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const classReduced = document.documentElement.classList.contains('reduced-motion');
      return prefersReduced || classReduced;
    };

    const isReducedPref = checkReduced();
    setIsReduced(isReducedPref);

    if (isReducedPref) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const capabilities = [
    {
      icon: Zap,
      color: 'text-blue-600 bg-blue-50 border-blue-100',
      title: 'Solar Inverter Setup',
      description:
        'Smart, high-efficiency grid-tied & hybrid inverters tailored for seamless residential and commercial performance.',
    },
    {
      icon: BatteryCharging,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      title: 'Battery Storage Solutions',
      description:
        'Advanced energy storage engineered for 24/7 power backup during DISCOM grid cuts and peak tariff hours.',
    },
    {
      icon: BadgePercent,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
      title: 'Solar Material Financing',
      description:
        'Flexible, transparent low-EMI paperless financing plans tailored specifically for Indian homeowners.',
    },
    {
      icon: Headphones,
      color: 'text-purple-600 bg-purple-50 border-purple-100',
      title: '24 X 7 Call & Chat Support',
      description:
        'Dedicated customer care and remote telemetry health monitoring around the clock for total peace of mind.',
    },
  ];

  const journeyMilestones = [
    {
      year: '2020',
      title: 'SolarARK Projects',
      desc: 'Projects began and Nagpur operations kicked off with initial designs.',
      icon: Rocket,
    },
    {
      year: '2021',
      title: '575 Homes',
      desc: 'Residences successfully solarised across cities in Maharashtra.',
      icon: Home,
    },
    {
      year: '2022',
      title: '2230+ Solarised',
      desc: '100+ Commercial units and 50+ Housing Societies joined.',
      icon: Users,
    },
    {
      year: '2023',
      title: '5000+ Customers',
      desc: 'Happy clients transitioned with reliable MNRE setups.',
      icon: Heart,
    },
    {
      year: '2024',
      title: 'New Branches',
      desc: 'Branch offices established at Akola, Chh. Sambhaji Nagar & Wardha.',
      icon: MapPin,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-slate-200/60 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-16 sm:space-y-24">
        
        {/* ── CHAPTER 1: WHO ARE WE? ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F7EFE9] border border-[#8B1E1E]/15 text-xs font-bold text-[#8B1E1E]">
              <Info className="w-3.5 h-3.5" />
              <span>Official About SolarArk</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.14]">
              Who Are <span className="text-accent-light">We?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              We believe in building strong, lasting relationships with our clients, providing them with tailored solutions that align with their specific energy needs. Whether you're a homeowner, a business, or part of an industrial facility, Solar Ark is here to help you make the smart, eco-friendly choice for your energy needs.
            </p>

            {/* 4 Feature Bullet Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {capabilities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white border border-slate-200/80 rounded-2xl p-3.5 shadow-xs">
                  <div className="w-7 h-7 rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E] flex items-center justify-center shrink-0 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 font-heading">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Authentic Founder Photo Block */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-[#EFECE6] group">
              <img
                src="/images/completed-projects-home.jpg"
                alt="SolarArk Leadership & Turnkey Solar Engineering Team"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-heading">
                  Verified Leadership &amp; Engineering
                </div>
                <div className="text-lg font-bold">
                  SolarArk Management &amp; Support
                </div>
                <div className="text-xs text-slate-200 font-normal">
                  Dedicated leadership ensuring quality installation across Maharashtra &amp; Pan-India.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── CHAPTER 2: OUR JOURNEY (DELIBERATE DARK BRAND SECTION) ── */}
        <div 
          ref={timelineRef}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-[#10142B] p-6 sm:p-10 lg:p-14"
        >
          {/* Authentic dusk/golden hour rooftop installation background image */}
          <img
            src="/images/story-solar-rooftop.jpg"
            alt=""
            role="presentation"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-20 mix-blend-luminosity scale-105"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />

          {/* Deep Ink Gradient Overlay ensuring >=4.5:1 text contrast */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-[#10142B]/95 via-[#10142B]/90 to-[#0B1730]/98 pointer-events-none" 
            aria-hidden="true"
          />

          {/* Atmospheric Brand Maroon Ambient Glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#8B1E1E]/15 blur-[100px] pointer-events-none rounded-full" 
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-10 lg:space-y-14">
            {/* Header: Eyebrow + Split-color Heading + Subtext */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/[0.12] border border-white/20 text-xs font-bold text-white/90 font-heading tracking-wider uppercase backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>OUR JOURNEY</span>
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.15]">
                Our <span className="text-accent-dark">Journey</span>
              </h3>

              <p className="text-sm sm:text-base text-slate-300/85 max-w-2xl mx-auto font-normal leading-relaxed">
                Tracing our growth from inception to establishing branches across Maharashtra.
              </p>
            </div>

            {/* Desktop Horizontal Timeline (md and up) */}
            <div className="hidden md:block relative pt-4 pb-2">
              {/* Continuous Track Line (Base + Animated Fill) */}
              <div 
                className="absolute top-[82px] left-[8%] right-[8%] h-[3px] bg-white/15 rounded-full overflow-hidden" 
                aria-hidden="true"
              >
                <div 
                  className="h-full bg-gradient-to-r from-[#8B1E1E] via-[#A82424] to-[#C53030] shadow-[0_0_12px_rgba(197,48,48,0.8)] rounded-full transition-all ease-out"
                  style={{
                    width: isVisible ? '100%' : '0%',
                    transitionDuration: isReduced ? '0.01ms' : '1800ms',
                  }}
                />
              </div>

              {/* 5 Milestone Columns */}
              <ol className="grid grid-cols-5 gap-3 lg:gap-6 relative z-10 list-none m-0 p-0">
                {journeyMilestones.map((milestone, idx) => {
                  const IconComponent = milestone.icon;
                  const delayMs = isReduced ? 0 : 150 + idx * 280;
                  return (
                    <li
                      key={milestone.year}
                      className="group flex flex-col items-center text-center transition-all duration-700 ease-out"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                        transitionDelay: `${delayMs}ms`,
                      }}
                    >
                      {/* Year Label */}
                      <div className="h-10 flex items-center justify-center mb-2">
                        <span className="font-heading font-bold text-2xl lg:text-3xl text-white tracking-tight">
                          {milestone.year}
                        </span>
                      </div>

                      {/* Icon Chip on Track Line */}
                      <div className="relative my-1">
                        <div 
                          aria-hidden="true"
                          className="w-14 h-14 rounded-full bg-[#10142B]/95 backdrop-blur-md border-[1.5px] border-[#A82424] shadow-[0_0_16px_rgba(168,36,36,0.35)] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-[1.04] group-hover:border-[#C53030]"
                        >
                          <IconComponent className="w-6 h-6 stroke-[1.8]" />
                        </div>
                      </div>

                      {/* Milestone Title + Underline + Description */}
                      <div className="mt-4 flex flex-col items-center px-1">
                        <h4 className="font-heading font-bold text-base lg:text-lg text-white leading-snug">
                          {milestone.title}
                        </h4>
                        
                        {/* Accent underline */}
                        <div 
                          aria-hidden="true"
                          className="w-8 h-0.5 bg-[#A82424] rounded-full my-2.5 transition-all duration-300 group-hover:w-12 group-hover:bg-[#C53030]"
                        />

                        <p className="text-xs lg:text-sm text-slate-300/85 font-normal leading-relaxed">
                          {milestone.desc}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* Mobile Vertical Timeline (<md) */}
            <div className="block md:hidden relative pt-2">
              {/* Left-Aligned Vertical Track Line */}
              <div 
                className="absolute top-4 bottom-8 left-[27px] w-[3px] bg-white/15 rounded-full overflow-hidden" 
                aria-hidden="true"
              >
                <div 
                  className="w-full bg-gradient-to-b from-[#8B1E1E] via-[#A82424] to-[#C53030] shadow-[0_0_12px_rgba(168,36,36,0.8)] rounded-full transition-all ease-out"
                  style={{
                    height: isVisible ? '100%' : '0%',
                    transitionDuration: isReduced ? '0.01ms' : '1800ms',
                  }}
                />
              </div>

              {/* Vertical Milestones */}
              <ol className="space-y-8 relative z-10 list-none m-0 p-0">
                {journeyMilestones.map((milestone, idx) => {
                  const IconComponent = milestone.icon;
                  const delayMs = isReduced ? 0 : 150 + idx * 240;
                  return (
                    <li
                      key={milestone.year}
                      className="relative flex items-start gap-4 pl-2 transition-all duration-700 ease-out"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                        transitionDelay: `${delayMs}ms`,
                      }}
                    >
                      {/* Icon Chip Anchored to Track */}
                      <div 
                        aria-hidden="true"
                        className="w-14 h-14 rounded-full bg-[#10142B]/95 backdrop-blur-md border-[1.5px] border-[#A82424] shadow-[0_0_16px_rgba(168,36,36,0.35)] flex items-center justify-center text-white shrink-0 z-10"
                      >
                        <IconComponent className="w-6 h-6 stroke-[1.8]" />
                      </div>

                      {/* Content to the right */}
                      <div className="pt-0.5 flex-1">
                        <span className="font-heading font-bold text-2xl text-white block">
                          {milestone.year}
                        </span>
                        <h4 className="font-heading font-bold text-base text-white mt-0.5 leading-snug">
                          {milestone.title}
                        </h4>
                        <div 
                          aria-hidden="true"
                          className="w-8 h-0.5 bg-[#A82424] rounded-full my-2" 
                        />
                        <p className="text-xs sm:text-sm text-slate-300/85 font-normal leading-relaxed">
                          {milestone.desc}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>

        {/* ── CHAPTER 3: POWERING A SUSTAINABLE FUTURE & MISSION/VISION ── */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-xs space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#8B1E1E] uppercase tracking-wider font-heading">
              Our Core Philosophy
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
              Powering a <span className="text-accent-light">Sustainable Future</span> with Solar Ark India
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Mission & Vision Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Mission */}
              <div className="space-y-2 border-l-4 border-[#8B1E1E] pl-5 py-1">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#8B1E1E]" />
                  <h4 className="font-heading text-xl font-bold text-slate-900">Mission</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Solar Ark's mission extends beyond projects. Our efforts revolve around nurturing awareness about sustainable living practices, inspiring individuals to make eco-conscious choices.
                </p>
              </div>

              {/* Vision */}
              <div className="space-y-2 border-l-4 border-emerald-500 pl-5 py-1">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-heading text-xl font-bold text-slate-900">Vision</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed italic">
                  "Empowering Communities, Illuminating Futures: Solar Ark's Vision for a Sustainable India"
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  At Solar Ark, we envision a future where every corner of India is bathed in the glow of sustainable energy, where communities thrive in harmony with nature, and where innovation and tradition converge to create a brighter tomorrow. Our vision is to lead the charge towards a renewable energy revolution, empowering communities across India to harness the abundant power of the sun and other sustainable resources. We see a nation where clean energy is not just a choice, but a way of life ingrained in the fabric of society.
                </p>
              </div>
            </div>

            {/* Founder Office Desk Photo Block */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-900">
                <img
                  src="/images/official-founder-office.png"
                  alt="SolarArk Office & Founder Desk"
                  className="w-full h-[340px] sm:h-[400px] object-cover object-[24%_65%]"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── CHAPTER 4: EXCEPTIONAL QUALITY, ENVIRONMENTAL RESPONSIBILITY & SOLAR SYSTEMS ── */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Exceptional quality. End-to-end service. Delighted customers
            </h3>
            <p className="text-sm text-slate-600 font-normal">
              Tailored solar engineering designed for homes, businesses, and industrial facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Environmental Responsibility */}
            <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-4 border border-emerald-900/40 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-2xl font-bold">
                Environmental Responsibility
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                At SolarArk, we are pioneers in the solar energy revolution, dedicated to providing innovative, cost-effective and sustainable solar solutions to homes, businesses and industries across the globe. We believe that renewable energy is the key to building a brighter, more sustainable future, and we are committed to delivering clean, reliable energy solutions that reduce carbon footprints and promote environmental stewardship.
              </p>
            </div>

            {/* Solar Systems */}
            <div className="bg-gradient-to-br from-[#3D0C0C] via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-4 border border-red-900/40 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-[#8B1E1E]/30 text-amber-300 border border-[#8B1E1E]/50 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-2xl font-bold">
                Solar Systems
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                With a focus on quality, efficiency, and customer satisfaction, we ensure that each solar solution is tailored to the unique needs of our clients. Whether you're looking to reduce your home's energy costs, transition your business to renewable power or implement large-scale solar systems in industrial facilities, SolarArk is here to guide you every step of the way. With cutting-edge technology and a commitment to sustainability.
              </p>
            </div>
          </div>

          {/* CTA Trigger */}
          {onCtaClick && (
            <div className="pt-6 text-center">
              <button
                onClick={onCtaClick}
                className="bg-[#8B1E1E] hover:bg-[#5E1212] text-white text-sm font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-[#8B1E1E]/25 transition-all inline-flex items-center gap-2 active:scale-[0.98] cursor-pointer"
              >
                <span>Get Your Free Solar Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

