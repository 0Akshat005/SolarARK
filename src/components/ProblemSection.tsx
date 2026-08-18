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
  const imgTranslateY = isReducedMotion ? 0 : (scrollProgress - 0.5) * 25;

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0A0F1D] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-slate-800/80"
    >
      {/* ── 1. LEFT EDGE ANCHORED PHOTOGRAPH WITH IMMERSIVE CINEMATIC DISSOLVE ── */}
      <div className="absolute top-0 bottom-0 left-0 w-full lg:w-[48%] pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/story-empty-rooftop.jpg"
          alt="Modern Indian rooftop terrace at golden hour sunrise"
          className="w-full h-full object-cover object-left-top will-change-transform transition-transform duration-700 ease-out opacity-90"
          style={{
            transform: `scale(1.04) translateY(${imgTranslateY}px)`,
          }}
          loading="lazy"
        />

        {/* Horizontal organic dissolve gradient: sunlight fading into dark content area */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A0F1D]/50 to-[#0A0F1D] hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/75 to-transparent lg:hidden" />
        
        {/* Soft vertical vignette top/bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1D]/60 via-transparent to-[#0A0F1D]/80" />
      </div>

      {/* ── 2. SUBTLE AMBIENT SOLAR WARMTH (PRESERVING POSITIVITY & SUNLIGHT DEPTH) ── */}
      <div className="absolute top-[10%] right-[15%] w-[40%] h-[320px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[280px] bg-emerald-500/10 blur-[90px] rounded-full pointer-events-none" />

      {/* ── 3. MAIN CONTENT CONTAINER ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column Spacer for Desktop to let photo bleed through */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-4" />

          {/* Right Editorial Composition Area */}
          <div className="lg:col-span-8 xl:col-span-8 space-y-8 lg:pl-2">
            
            {/* Headline & Supporting Copy with High Contrast */}
            <div
              className={`space-y-4 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold text-amber-300 font-heading tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Grid Tariff Escalation vs. Solar Freedom</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.12]">
                Your electricity bill <br className="hidden sm:inline" />
                keeps going up. <br />
                <span className="text-[#FF9E2C] relative inline-block">
                  Your rooftop doesn’t have to.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl text-left">
                DISCOM grid tariffs rise by 5–8% every year in Maharashtra. SolarARK locks in your energy cost at near-zero, keeping your family protected for 25+ years.
              </p>
            </div>

            {/* Visual Cost Comparison Hero (Frosted Glass Card) */}
            <div
              className={`transition-all duration-700 delay-150 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="bg-[#0E1626]/85 backdrop-blur-xl border border-white/15 rounded-3xl p-5 sm:p-7 lg:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.4)] space-y-7">
                
                {/* Legend + Timeline Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Legend Indicators */}
                  <div className="md:col-span-4 space-y-3.5">
                    {/* Grid Cost Legend */}
                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-red-950/40 border border-red-500/20">
                      <div className="w-9 h-9 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5 text-left">
                        <div className="text-xs sm:text-sm font-bold text-white font-heading">Grid Electricity Cost</div>
                        <div className="text-[11px] text-red-300 font-medium">Rising 5–8% yearly</div>
                      </div>
                    </div>

                    {/* SolarARK Cost Legend */}
                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/20">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5 text-left">
                        <div className="text-xs sm:text-sm font-bold text-white font-heading">SolarARK Cost</div>
                        <div className="text-[11px] text-emerald-300 font-medium">Locked &amp; predictable</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Interactive/Animated Timeline Chart */}
                  <div className="md:col-span-8 relative pt-4 pb-2 px-2 sm:px-4">
                    
                    {/* Timeline Headers Across Top */}
                    <div className="grid grid-cols-3 text-center mb-4 relative z-10">
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-amber-300 font-heading">Today</div>
                        <div className="text-[11px] text-slate-400 font-medium mt-0.5">You pay standard tariff</div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-amber-400 font-heading">5 Years</div>
                        <div className="text-[11px] text-slate-300 font-medium mt-0.5">+40% Tariff hike</div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-red-400 font-heading">10 Years</div>
                        <div className="text-[11px] text-red-300 font-medium mt-0.5">+90% Cumulative hike</div>
                      </div>
                    </div>

                    {/* SVG Line Graph */}
                    <div className="relative h-40 sm:h-48 w-full">
                      
                      {/* Vertical Grid Dotted Guidelines */}
                      <div className="absolute inset-0 grid grid-cols-3 pointer-events-none">
                        <div className="border-r border-dashed border-white/10 h-full" />
                        <div className="border-r border-dashed border-white/10 h-full" />
                        <div className="h-full" />
                      </div>

                      <svg
                        className="w-full h-full overflow-visible"
                        viewBox="0 0 400 160"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          {/* Red rising area gradient */}
                          <linearGradient id="redCurveDarkGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#EF4444" stopOpacity="0.0" />
                          </linearGradient>

                          {/* Arrow markers */}
                          <marker
                            id="arrowRedDark"
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
                            id="arrowGreenDark"
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
                          fill="url(#redCurveDarkGradient)"
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
                          markerEnd="url(#arrowGreenDark)"
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
                          markerEnd="url(#arrowRedDark)"
                          className="transition-all duration-1000 ease-out delay-200"
                        />

                        {/* Timeline Data Dots */}
                        <circle cx="66" cy="120" r="5.5" fill="#EF4444" className="transition-transform duration-300 hover:scale-125" />
                        <circle cx="66" cy="140" r="5.5" fill="#10B981" className="transition-transform duration-300 hover:scale-125" />

                        <circle cx="200" cy="98" r="5.5" fill="#EF4444" className="transition-transform duration-300 hover:scale-125" />
                        <circle cx="200" cy="140" r="5.5" fill="#10B981" className="transition-transform duration-300 hover:scale-125" />

                        <circle cx="334" cy="58" r="5.5" fill="#EF4444" className="transition-transform duration-300 hover:scale-125" />
                        <circle cx="334" cy="140" r="5.5" fill="#10B981" className="transition-transform duration-300 hover:scale-125" />
                      </svg>
                    </div>

                  </div>

                </div>

                {/* Bottom Callout & Action Strip */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0">
                      <Sun className="w-5 h-5" />
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-100 leading-snug text-left">
                      The longer you delay rooftop solar,{' '}
                      <span className="text-amber-400 font-bold">the more you pay DISCOM unnecessarily.</span>
                    </p>
                  </div>

                  <div className="flex flex-col items-center sm:items-end shrink-0 w-full sm:w-auto">
                    <button
                      onClick={onCtaClick}
                      className="w-full sm:w-auto bg-gradient-to-r from-[#8B1E1E] via-[#A82424] to-[#7A1515] hover:from-[#A82424] hover:to-[#5E1212] text-white text-xs sm:text-sm font-bold font-heading px-6 py-3 rounded-xl shadow-lg shadow-[#8B1E1E]/40 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>Lock My Solar Savings</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <span className="text-[10px] text-slate-400 mt-1 font-medium">
                      Free 3D site survey in 60s
                    </span>
                  </div>
                </div>

                {/* 4 Bottom Pillars (Clean text-left) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5 text-left">
                      <div className="text-xs font-bold text-white">25+ Years</div>
                      <div className="text-[11px] text-slate-400">Fixed Cost Stability</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Sun className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5 text-left">
                      <div className="text-xs font-bold text-white">100%</div>
                      <div className="text-[11px] text-slate-400">Clean Self-Generation</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <IndianRupee className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5 text-left">
                      <div className="text-xs font-bold text-white">Zero Hike Risk</div>
                      <div className="text-[11px] text-slate-400">Immunity from Tariffs</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                      <Home className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5 text-left">
                      <div className="text-xs font-bold text-white">Energy Freedom</div>
                      <div className="text-[11px] text-slate-400">Own Your Power</div>
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
