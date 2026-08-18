/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { TrendingUp, ShieldCheck, Sun, IndianRupee, Home, ArrowRight, Sparkles } from 'lucide-react';

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

  // Parallax translation for left edge image
  const imgTranslateY = isReducedMotion ? 0 : (scrollProgress - 0.5) * 24;

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FAF9F6] overflow-hidden py-16 sm:py-20 lg:py-28 border-b border-stone-200/80"
    >
      {/* ── 1. ATMOSPHERIC FULL-BLEED PHOTOGRAPH & IMMERSIVE BALANCED DISSOLVE ── */}
      <div className="absolute top-0 bottom-0 left-0 w-full lg:w-[50%] pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/story-empty-rooftop.jpg"
          alt="Modern Indian rooftop terrace at golden hour sunrise"
          className="w-full h-full object-cover object-left-top will-change-transform transition-transform duration-700 ease-out opacity-90"
          style={{
            transform: `scale(1.03) translateY(${imgTranslateY}px)`,
          }}
          loading="lazy"
        />

        {/* Subtle, restrained cinematic gradient fade from right & bottom (preserving golden-hour positivity while focusing the card) */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAF9F6]/40 via-40% to-[#FAF9F6] hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/60 to-transparent hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/30 via-transparent to-[#FAF9F6]/70 hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6]/30 via-[#FAF9F6]/85 to-[#FAF9F6] lg:hidden" />
      </div>

      {/* Subtle Right-Side Atmospheric Depth (Gives focus to the chart without making it overly dark) */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[60%] pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-[45%] h-[350px] bg-amber-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[10%] right-[15%] w-[35%] h-[280px] bg-red-900/5 blur-[90px] rounded-full" />
      </div>

      {/* ── 2. MAIN EDITORIAL CONTENT CONTAINER ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column Spacer on Desktop to let the morning rooftop bleed naturally */}
          <div className="hidden lg:block lg:col-span-3 xl:col-span-3" />

          {/* Right Editorial Composition & Interactive Graph Area */}
          <div className="lg:col-span-9 xl:col-span-9 space-y-8 lg:pl-4">
            
            {/* 1. Headline & Factual Narrative */}
            <div
              className={`space-y-3.5 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E1E]/10 border border-[#8B1E1E]/20 text-[#8B1E1E] shadow-2xs text-xs font-bold font-heading tracking-wider uppercase">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Grid Tariff Escalation vs Solar Stability</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Your electricity bill keeps going up. <br />
                <span className="text-[#8B1E1E]">Your rooftop doesn’t have to.</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl text-left">
                DISCOM grid tariffs rise by 5–8% every year in Maharashtra. A SolarARK rooftop installation locks your electricity costs at a predictable, fixed rate for 25+ years.
              </p>
            </div>

            {/* 2. Elevated Interactive Visual Cost Comparison Card */}
            <div
              className={`pt-1 transition-all duration-700 delay-150 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="bg-white rounded-3xl border border-stone-200/90 shadow-[0_16px_48px_rgba(15,23,42,0.06)] p-6 sm:p-8 lg:p-10 space-y-8">
                
                {/* Legend + Interactive Timeline Chart */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
                  
                  {/* Left Legend Indicators */}
                  <div className="md:col-span-4 space-y-3.5">
                    {/* Grid Cost Legend */}
                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-red-50/60 border border-red-100/80 transition-all hover:bg-red-50">
                      <div className="w-10 h-10 rounded-xl bg-red-100/80 flex items-center justify-center text-[#8B1E1E] shrink-0 shadow-2xs">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading">Grid Electricity Cost</div>
                        <div className="text-[11px] text-red-600 font-semibold mt-0.5">Rising 5–8% every year</div>
                      </div>
                    </div>

                    {/* SolarARK Cost Legend */}
                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100/80 transition-all hover:bg-emerald-50">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100/80 flex items-center justify-center text-emerald-700 shrink-0 shadow-2xs">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading">SolarARK Cost</div>
                        <div className="text-[11px] text-emerald-700 font-semibold mt-0.5">Locked &amp; predictable for 25 yrs</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Animated Timeline Chart */}
                  <div className="md:col-span-8 relative pt-4 pb-2 px-2 sm:px-4">
                    
                    {/* Timeline Headers Across Top */}
                    <div className="grid grid-cols-3 text-center mb-6 relative z-10">
                      <div className="text-center">
                        <div className="text-xs sm:text-sm font-bold text-[#8B1E1E] font-heading">Today</div>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">Current Tariff</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs sm:text-sm font-bold text-[#8B1E1E] font-heading">5 Years</div>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">+35% Grid Rise</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs sm:text-sm font-bold text-[#8B1E1E] font-heading">10 Years</div>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">+80% Grid Rise</div>
                      </div>
                    </div>

                    {/* SVG Line Graph */}
                    <div className="relative h-44 sm:h-52 w-full">
                      
                      {/* Vertical Grid Dotted Guidelines */}
                      <div className="absolute inset-0 grid grid-cols-3 pointer-events-none">
                        <div className="border-r border-dashed border-stone-200 h-full" />
                        <div className="border-r border-dashed border-stone-200 h-full" />
                        <div className="h-full" />
                      </div>

                      <svg
                        className="w-full h-full overflow-visible"
                        viewBox="0 0 400 160"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          {/* Red rising area gradient */}
                          <linearGradient id="redCurveGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#EF4444" stopOpacity="0.0" />
                          </linearGradient>

                          {/* Arrow markers */}
                          <marker
                            id="arrowRed"
                            viewBox="0 0 10 10"
                            refX="6"
                            refY="5"
                            markerWidth="6"
                            markerHeight="6"
                            orient="auto-start-reverse"
                          >
                            <path d="M 0 1 L 8 5 L 0 9 z" fill="#EF4444" />
                          </marker>

                          <marker
                            id="arrowGreen"
                            viewBox="0 0 10 10"
                            refX="6"
                            refY="5"
                            markerWidth="6"
                            markerHeight="6"
                            orient="auto-start-reverse"
                          >
                            <path d="M 0 1 L 8 5 L 0 9 z" fill="#10B981" />
                          </marker>
                        </defs>

                        {/* Red Area Fill */}
                        <path
                          d="M 66 120 Q 200 95, 380 40 L 380 140 L 66 140 Z"
                          fill="url(#redCurveGradient)"
                          className={`transition-opacity duration-1000 ${
                            isVisible ? 'opacity-100' : 'opacity-0'
                          }`}
                        />

                        {/* Green Constant Solar Line */}
                        <line
                          x1="66"
                          y1="140"
                          x2="385"
                          y2="140"
                          stroke="#10B981"
                          strokeWidth="3"
                          strokeDasharray={isReducedMotion ? 'none' : '400'}
                          strokeDashoffset={isVisible ? '0' : '400'}
                          markerEnd="url(#arrowGreen)"
                          className="transition-all duration-1000 ease-out"
                        />

                        {/* Red Rising Grid Cost Curve */}
                        <path
                          d="M 66 120 Q 200 95, 380 40"
                          fill="none"
                          stroke="#EF4444"
                          strokeWidth="3"
                          strokeDasharray={isReducedMotion ? 'none' : '450'}
                          strokeDashoffset={isVisible ? '0' : '450'}
                          markerEnd="url(#arrowRed)"
                          className="transition-all duration-1000 ease-out delay-200"
                        />

                        {/* Timeline Data Dots */}
                        {/* Point 1: Today */}
                        <circle cx="66" cy="120" r="5" fill="#EF4444" className="transition-transform duration-300 hover:scale-125" />
                        <circle cx="66" cy="140" r="5" fill="#10B981" className="transition-transform duration-300 hover:scale-125" />

                        {/* Point 2: 5 Years */}
                        <circle cx="200" cy="98" r="5" fill="#EF4444" className="transition-transform duration-300 hover:scale-125" />
                        <circle cx="200" cy="140" r="5" fill="#10B981" className="transition-transform duration-300 hover:scale-125" />

                        {/* Point 3: 10 Years */}
                        <circle cx="334" cy="58" r="5" fill="#EF4444" className="transition-transform duration-300 hover:scale-125" />
                        <circle cx="334" cy="140" r="5" fill="#10B981" className="transition-transform duration-300 hover:scale-125" />
                      </svg>
                    </div>

                  </div>

                </div>

                {/* 3. Bottom Banner / CTA Box with Jewel-Tone Maroon Button */}
                <div className="bg-[#FAF7F2] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-stone-200/80">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100/90 flex items-center justify-center text-amber-700 shrink-0 shadow-2xs">
                      <Sun className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug font-heading">
                        The longer you stay on the grid,{' '}
                        <span className="text-[#8B1E1E]">the more you keep paying.</span>
                      </p>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        Lock in zero-tariff solar electricity today with PM Surya Ghar DBT subsidies.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center sm:items-end shrink-0 w-full sm:w-auto">
                    <button
                      onClick={onCtaClick}
                      className="w-full sm:w-auto bg-gradient-to-r from-[#8B1E1E] via-[#A82424] to-[#7A1515] hover:from-[#A82424] hover:to-[#5E1212] active:scale-[0.97] text-white text-sm font-bold font-heading px-7 py-3.5 rounded-xl shadow-[0_8px_20px_-4px_rgba(139,30,30,0.45)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>See My Savings</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <span className="text-[11px] text-slate-500 mt-1.5 font-medium">
                      Free estimate in 60 seconds
                    </span>
                  </div>
                </div>

                {/* 4. Bottom 4 Key Benefits Strip */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-stone-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-[#8B1E1E] shrink-0 shadow-2xs">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading">25+ Years</div>
                      <div className="text-[11px] text-slate-500 font-medium">Solar Cost Stability</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 shadow-2xs">
                      <Sun className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading">100%</div>
                      <div className="text-[11px] text-slate-500 font-medium">Clean Energy</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0 shadow-2xs">
                      <IndianRupee className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading">Protect Your Home</div>
                      <div className="text-[11px] text-slate-500 font-medium">From Rising Bills</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-purple-700 shrink-0 shadow-2xs">
                      <Home className="w-4 h-4" />
                    </div>
                    <div className="text-left">
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
