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

  // Parallax translation for left edge image
  const imgTranslateY = isReducedMotion ? 0 : (scrollProgress - 0.5) * 30;

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-slate-100"
    >
      {/* ── Left Edge Anchored Photograph with Organic Fade ── */}
      <div className="absolute top-0 bottom-0 left-0 w-full lg:w-[42%] pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/story-empty-rooftop.jpg"
          alt="Modern Indian rooftop terrace at golden hour sunrise"
          className="w-full h-full object-cover object-left-top will-change-transform transition-transform duration-700 ease-out"
          style={{
            transform: `scale(1.04) translateY(${imgTranslateY}px)`,
          }}
          loading="lazy"
        />

        {/* Horizontal organic dissolve gradient: sunlight fading into white content area */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-white hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/80 to-white lg:hidden" />
        
        {/* Soft vertical vignette top/bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-60" />
      </div>

      {/* ── Main Content Container ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column Spacer for Desktop to let photo bleed through */}
          <div className="hidden lg:block lg:col-span-3 xl:col-span-3" />

          {/* Right Editorial Composition Area */}
          <div className="lg:col-span-9 xl:col-span-9 space-y-10 lg:pl-4">
            
            {/* 1. Headline & Short Supporting Copy */}
            <div
              className={`space-y-4 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.16]">
                Your electricity bill <br className="hidden sm:inline" />
                keeps going up. <br />
                <span className="text-[#1D5FE0] relative inline-block">
                  Your rooftop doesn’t have to.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                Grid tariffs rise every year. Solar keeps your cost under control for the long run.
              </p>
            </div>

            {/* 2. Visual Cost Comparison Hero (SVG Visualization) */}
            <div
              className={`pt-2 transition-all duration-700 delay-150 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-4 sm:p-6 lg:p-8 space-y-8">
                
                {/* Legend + Timeline Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Legend Indicators */}
                  <div className="md:col-span-4 space-y-4">
                    {/* Grid Cost Legend */}
                    <div className="flex items-center gap-3 p-2.5 rounded-xl transition-colors hover:bg-slate-50">
                      <div className="w-9 h-9 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-500 shrink-0">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900">Grid Electricity Cost</div>
                        <div className="text-[11px] sm:text-xs text-red-600 font-medium">Rising every year</div>
                      </div>
                    </div>

                    {/* SolarARK Cost Legend */}
                    <div className="flex items-center gap-3 p-2.5 rounded-xl transition-colors hover:bg-slate-50">
                      <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900">SolarARK Cost</div>
                        <div className="text-[11px] sm:text-xs text-emerald-600 font-medium">Locked &amp; predictable</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Interactive/Animated Timeline Chart */}
                  <div className="md:col-span-8 relative pt-8 pb-4 px-2 sm:px-6">
                    
                    {/* Timeline Headers Across Top */}
                    <div className="grid grid-cols-3 text-center mb-6 relative z-10">
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-[#1D5FE0]">Today</div>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">You pay</div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-[#1D5FE0]">5 Years</div>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">You pay more</div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-[#1D5FE0]">10 Years</div>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">You pay even more</div>
                      </div>
                    </div>

                    {/* SVG Line Graph */}
                    <div className="relative h-44 sm:h-52 w-full">
                      
                      {/* Vertical Grid Dotted Guidelines */}
                      <div className="absolute inset-0 grid grid-cols-3 pointer-events-none">
                        <div className="border-r border-dashed border-slate-200 h-full" />
                        <div className="border-r border-dashed border-slate-200 h-full" />
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
                            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.22" />
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
                          strokeWidth="2.5"
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
                          strokeWidth="2.5"
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

                {/* 3. Bottom Banner / CTA Box */}
                <div className="bg-amber-50/60 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100/80 flex items-center justify-center text-amber-600 shrink-0">
                      <Sun className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                        The longer you stay on the grid,{' '}
                        <span className="text-[#1D5FE0]">the more you keep paying.</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center sm:items-end shrink-0 w-full sm:w-auto">
                    <button
                      onClick={onCtaClick}
                      className="w-full sm:w-auto bg-[#1D5FE0] hover:bg-[#174AB8] active:scale-[0.97] text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-md shadow-[#1D5FE0]/20 transition-all flex items-center justify-center gap-2 group"
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
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-[#1D5FE0] shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">25+ Years</div>
                      <div className="text-[11px] text-slate-500">Solar Cost Stability</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                      <Sun className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">100%</div>
                      <div className="text-[11px] text-slate-500">Clean Energy</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      <IndianRupee className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">Protect Your Home</div>
                      <div className="text-[11px] text-slate-500">From Rising Bills</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                      <Home className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">Energy Independence</div>
                      <div className="text-[11px] text-slate-500">Starts With You</div>
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
