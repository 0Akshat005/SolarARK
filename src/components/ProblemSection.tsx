/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { TrendingUp, ShieldCheck, Sun, IndianRupee, Home, ArrowRight } from 'lucide-react';

interface ProblemSectionProps {
  onCtaClick: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onCtaClick }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mq.matches);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Subtle parallax translation for background image
  const imgTranslateY = isReducedMotion ? 0 : (scrollProgress - 0.5) * 20;

  return (
    <section
      ref={sectionRef}
      id="tariff-comparison"
      className="relative bg-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-stone-200/70"
    >
      {/* ── 1. CRISP, NATURAL FULL-BLEED ROOFTOP BACKGROUND (LIGHT & POSITIVE) ── */}
      <div className="absolute top-0 bottom-0 left-0 w-full lg:w-[52%] pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/story-empty-rooftop.jpg"
          alt="SolarARK Modern Rooftop Terrace at Golden Hour Sunrise"
          className="w-full h-full object-cover object-left-top will-change-transform transition-transform duration-700 ease-out"
          style={{
            transform: `scale(1.02) translateY(${imgTranslateY}px)`,
          }}
          loading="lazy"
        />

        {/* Soft, natural white-to-transparent dissolve towards the right text/card area */}
        <div 
          className="absolute inset-0 hidden lg:block"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.75) 60%, #FFFFFF 85%)',
          }}
        />
        
        {/* Mobile / Tablet soft overlay */}
        <div 
          className="absolute inset-0 lg:hidden"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.85) 40%, #FFFFFF 80%)',
          }}
        />
      </div>

      {/* ── 2. MAIN CONTENT CONTAINER (MATCHING REFERENCE COMPOSITION) ── */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column Spacer for Desktop to let authentic rooftop & solar panels show */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-4" />

          {/* Right Column: Headline, Comparison Card & Benefits Strip */}
          <div className="lg:col-span-8 xl:col-span-8 space-y-6 lg:space-y-7">
            
            {/* ── 1. SECTION HEADLINE HIERARCHY ── */}
            <div
              className={`space-y-3 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {/* Eyebrow Pill Badge (Matching Reference: Soft Red Pill with Trending Icon) */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF1EC] border border-[#8B1E1E]/20 text-[#8B1E1E] text-[11px] font-bold tracking-wider uppercase font-heading">
                <TrendingUp className="w-3.5 h-3.5 text-[#8B1E1E]" />
                <span>GRID TARIFF ESCALATION VS SOLAR STABILITY</span>
              </div>

              {/* Dominant Headline */}
              <div className="space-y-1">
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B1730] tracking-tight leading-[1.12] m-0">
                  Your electricity bill keeps going up.
                </h2>
                <h3 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#8B1E1E] tracking-tight leading-[1.12] m-0">
                  Your rooftop doesn’t have to.
                </h3>
              </div>

              {/* Supporting Factual Copy */}
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl text-left pt-0.5">
                DISCOM grid tariffs rise by 5–8% every year in Maharashtra. A SolarARK rooftop installation locks your electricity costs at a predictable, fixed rate for 25+ years.
              </p>
            </div>

            {/* ── 2. MAIN WHITE COMPARISON CARD (MATCHING REFERENCE PIXEL-BY-PIXEL) ── */}
            <div
              className={`transition-all duration-700 delay-100 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="bg-white rounded-[26px] sm:rounded-3xl border border-stone-200/90 shadow-[0_14px_38px_rgba(0,0,0,0.06)] p-5 sm:p-7 lg:p-8 space-y-6">
                
                {/* Upper Comparison Grid: Left Legend + Right Timeline Graph */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Legend Indicators */}
                  <div className="md:col-span-5 space-y-3">
                    
                    {/* Grid Electricity Cost Card */}
                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#FEF2F2] border border-red-100">
                      <div className="w-9 h-9 rounded-xl bg-white border border-red-200 flex items-center justify-center text-red-600 shrink-0 shadow-2xs">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading">
                          Grid Electricity Cost
                        </div>
                        <div className="text-[11px] text-red-600 font-semibold mt-0.5">
                          Rising 5–8% every year
                        </div>
                      </div>
                    </div>

                    {/* SolarARK Cost Card */}
                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#ECFDF5] border border-emerald-100">
                      <div className="w-9 h-9 rounded-xl bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 shadow-2xs">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading">
                          SolarARK Cost
                        </div>
                        <div className="text-[11px] text-emerald-700 font-semibold mt-0.5">
                          Locked &amp; predictable for 25 yrs
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right Animated Timeline Graph */}
                  <div className="md:col-span-7 relative pt-2 pb-1 px-1 sm:px-3">
                    
                    {/* Timeline Headers Across Top */}
                    <div className="grid grid-cols-3 text-center mb-5 relative z-10">
                      <div className="text-center">
                        <div className="text-xs sm:text-sm font-bold text-[#8B1E1E] font-heading">Today</div>
                        <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">Current Tariff</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs sm:text-sm font-bold text-[#8B1E1E] font-heading">5 Years</div>
                        <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">+35% Grid Rise</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs sm:text-sm font-bold text-[#8B1E1E] font-heading">10 Years</div>
                        <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">+80% Grid Rise</div>
                      </div>
                    </div>

                    {/* SVG Line Graph */}
                    <div className="relative h-40 sm:h-44 w-full">
                      
                      {/* Vertical Dotted Guidelines */}
                      <div className="absolute inset-0 grid grid-cols-3 pointer-events-none">
                        <div className="border-r border-dashed border-stone-200 h-full" />
                        <div className="border-r border-dashed border-stone-200 h-full" />
                        <div className="h-full" />
                      </div>

                      <svg
                        className="w-full h-full overflow-visible"
                        viewBox="0 0 380 150"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          {/* Red rising area gradient fill */}
                          <linearGradient id="tariffRedGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#DC2626" stopOpacity="0.22" />
                            <stop offset="100%" stopColor="#DC2626" stopOpacity="0.0" />
                          </linearGradient>

                          {/* Arrow markers */}
                          <marker
                            id="tariffArrowRed"
                            viewBox="0 0 10 10"
                            refX="6"
                            refY="5"
                            markerWidth="6"
                            markerHeight="6"
                            orient="auto-start-reverse"
                          >
                            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#DC2626" />
                          </marker>

                          <marker
                            id="tariffArrowGreen"
                            viewBox="0 0 10 10"
                            refX="6"
                            refY="5"
                            markerWidth="6"
                            markerHeight="6"
                            orient="auto-start-reverse"
                          >
                            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#059669" />
                          </marker>
                        </defs>

                        {/* Red Area Fill */}
                        <path
                          d="M 60 115 Q 190 90, 360 38 L 360 135 L 60 135 Z"
                          fill="url(#tariffRedGradient)"
                          className={`transition-opacity duration-1000 ${
                            isVisible ? 'opacity-100' : 'opacity-0'
                          }`}
                        />

                        {/* Green Constant Solar Line */}
                        <line
                          x1="60"
                          y1="135"
                          x2="362"
                          y2="135"
                          stroke="#059669"
                          strokeWidth="3.2"
                          strokeDasharray={isReducedMotion ? 'none' : '380'}
                          strokeDashoffset={isVisible ? '0' : '380'}
                          markerEnd="url(#tariffArrowGreen)"
                          className="transition-all duration-1000 ease-out"
                        />

                        {/* Red Rising Grid Cost Line */}
                        <path
                          d="M 60 115 Q 190 90, 360 38"
                          fill="none"
                          stroke="#DC2626"
                          strokeWidth="3.2"
                          strokeDasharray={isReducedMotion ? 'none' : '420'}
                          strokeDashoffset={isVisible ? '0' : '420'}
                          markerEnd="url(#tariffArrowRed)"
                          className="transition-all duration-1000 ease-out delay-150"
                        />

                        {/* Timeline Data Checkpoint Dots */}
                        {/* Point 1: Today */}
                        <circle cx="60" cy="115" r="5" fill="#DC2626" />
                        <circle cx="60" cy="135" r="5" fill="#059669" />

                        {/* Point 2: 5 Years */}
                        <circle cx="190" cy="94" r="5" fill="#DC2626" />
                        <circle cx="190" cy="135" r="5" fill="#059669" />

                        {/* Point 3: 10 Years */}
                        <circle cx="318" cy="54" r="5" fill="#DC2626" />
                        <circle cx="318" cy="135" r="5" fill="#059669" />
                      </svg>
                    </div>

                  </div>

                </div>

                {/* ── 3. REASSURANCE CTA BANNER AT BOTTOM OF CARD (MATCHING REFERENCE) ── */}
                <div className="bg-[#FAF6F0] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-stone-200/70">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-[#FFF3DC] flex items-center justify-center text-[#D97706] shrink-0 shadow-2xs">
                      <Sun className="w-5 h-5" />
                    </div>
                    <div className="text-left space-y-0.5">
                      <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug font-heading">
                        The longer you stay on the grid,{' '}
                        <span className="text-[#8B1E1E]">the more you keep paying.</span>
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-500 font-normal">
                        Lock in zero-tariff solar electricity today with PM Surya Ghar DBT subsidies.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center sm:items-end shrink-0 w-full sm:w-auto">
                    <button
                      onClick={onCtaClick}
                      className="w-full sm:w-auto bg-[#8B1E1E] hover:bg-[#5E1212] active:scale-[0.98] text-white text-xs sm:text-sm font-bold font-heading px-6 py-3 rounded-xl shadow-md shadow-[#8B1E1E]/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>See My Savings</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <span className="text-[10px] text-slate-400 mt-1 font-medium text-center">
                      Free estimate in 60 seconds
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* ── 4. BOTTOM 4 BENEFITS STRIP (FLOATING ROUNDED CARD BELOW MAIN CARD) ── */}
            <div
              className={`transition-all duration-700 delay-200 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="bg-white rounded-2xl sm:rounded-[22px] border border-stone-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.04)] p-4 sm:p-5">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
                  
                  {/* Benefit 1: 25+ Years */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-[#8B1E1E] shrink-0 shadow-2xs">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="text-left space-y-0.5">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading">25+ Years</div>
                      <div className="text-[11px] text-slate-500 font-medium">Solar Cost Stability</div>
                    </div>
                  </div>

                  {/* Benefit 2: 100% Clean Energy */}
                  <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pl-4 lg:pl-6">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 shadow-2xs">
                      <Sun className="w-4 h-4" />
                    </div>
                    <div className="text-left space-y-0.5">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading">100%</div>
                      <div className="text-[11px] text-slate-500 font-medium">Clean Energy</div>
                    </div>
                  </div>

                  {/* Benefit 3: Protect Your Home */}
                  <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pl-4 lg:pl-6">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0 shadow-2xs">
                      <IndianRupee className="w-4 h-4" />
                    </div>
                    <div className="text-left space-y-0.5">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading">Protect Your Home</div>
                      <div className="text-[11px] text-slate-500 font-medium">From Rising Bills</div>
                    </div>
                  </div>

                  {/* Benefit 4: Energy Independence */}
                  <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pl-4 lg:pl-6">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-purple-700 shrink-0 shadow-2xs">
                      <Home className="w-4 h-4" />
                    </div>
                    <div className="text-left space-y-0.5">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading">Energy Independence</div>
                      <div className="text-[11px] text-slate-500 font-medium">Starts With You</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
