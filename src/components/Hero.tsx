/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  Sun, 
  Zap, 
  BadgeCheck, 
  TrendingUp 
} from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
  onCalculatorClick?: () => void;
  onClaimEstimate?: (data: { pincode: string; monthlyBill: number }) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onCtaClick, 
  onCalculatorClick,
  onClaimEstimate 
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mq.matches);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle parallax — restrained to feel cinematic
  const parallaxY = isReducedMotion ? 0 : scrollY * 0.08;
  const parallaxScale = isReducedMotion ? 1 : 1 + scrollY * 0.00004;

  const contentOpacity = imageLoaded ? 1 : 0;
  const contentTranslateY = imageLoaded ? 0 : 12;

  const handleScrollToCalc = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCalculatorClick) {
      onCalculatorClick();
    } else {
      const el = document.getElementById('calculator');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featurePillars = [
    {
      icon: Zap,
      title: 'PM Surya Ghar Subsidy',
      desc: 'Up to ₹78,000 Direct DBT',
    },
    {
      icon: Sun,
      title: 'Tier-1 TOPCon Panels',
      desc: '22.8% High-Efficiency Cells',
    },
    {
      icon: ShieldCheck,
      title: '25-Yr Performance Guarantee',
      desc: 'Certified Linear Power Warranty',
    },
    {
      icon: TrendingUp,
      title: 'Turnkey Net-Metering',
      desc: '100% DISCOM Approval Handled',
    },
  ];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full bg-[#0B1730]"
      style={{ minHeight: 'clamp(720px, 92vh, 880px)' }}
    >
      {/* ── 1. FULL-BLEED CRISP BACKGROUND PHOTOGRAPH (ZERO BLURRY FOG / ZERO WHITE FADE) ── */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <img
          src="/hero-solar-home.png"
          alt="Premium Indian residential home with rooftop solar panels at golden hour, Maharashtra cityscape"
          className="w-full h-full object-cover will-change-transform"
          style={{
            objectPosition: '65% 35%',
            transform: `scale(${parallaxScale}) translateY(${-parallaxY}px)`,
            transition: isReducedMotion ? 'none' : 'transform 0.1s linear',
          }}
          loading="eager"
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
        />

        {/* Soft, targeted readability scrim strictly on left content column (keeps rooftop & cityscape 100% clear) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent w-full md:w-[65%] lg:w-[50%] pointer-events-none" />
      </div>

      {/* ── 2. HERO CONTENT CONTAINER ── */}
      <div
        className="max-w-[1400px] w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10 flex flex-col justify-between pt-32 sm:pt-36 lg:pt-32 pb-8 sm:pb-12"
        style={{ minHeight: 'clamp(720px, 92vh, 880px)' }}
      >
        {/* Main Left Text Zone */}
        <div
          className="max-w-xl lg:max-w-[560px] space-y-6"
          style={{
            opacity: contentOpacity,
            transform: `translateY(${contentTranslateY}px)`,
            transition: isReducedMotion
              ? 'opacity 0.01s'
              : 'opacity 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          {/* Official Accreditation Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E1E] text-white shadow-sm text-xs font-bold font-heading tracking-wider uppercase">
            <BadgeCheck className="w-4 h-4 text-amber-300" />
            <span>PM Surya Ghar Authorized EPC Partner</span>
          </div>

          {/* Bold Editorial Headline */}
          <h1 className="font-heading text-[32px] sm:text-[42px] lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.08]">
            Power your home.{' '}
            <br />
            <span className="text-[#8B1E1E]">Pay less every month.</span>
          </h1>

          {/* Supporting Narrative */}
          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-lg">
            Harness clean rooftop solar energy for your home. Slash your monthly electricity bills by up to 90% with turnkey installation and seamless government subsidies.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-2 space-y-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto bg-[#8B1E1E] hover:bg-[#5E1212] active:scale-[0.97] text-white text-[15px] font-bold font-heading px-8 py-4 rounded-xl shadow-lg shadow-[#8B1E1E]/30 transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Get Free Savings Estimate</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleScrollToCalc}
                className="w-full sm:w-auto bg-white/90 hover:bg-white border border-stone-300 text-slate-800 font-semibold px-6 py-4 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Instant Solar Calculator</span>
                <ArrowUpRight className="w-4 h-4 text-[#8B1E1E]" />
              </button>
            </div>

            {/* Microcopy Trust Line */}
            <p className="text-xs text-slate-600 font-medium pl-1">
              ✓ Takes 60 seconds&ensp;•&ensp;Zero obligation&ensp;•&ensp;Trusted across Maharashtra
            </p>
          </div>
        </div>

        {/* ── 3. CREATIVE SECTION DIVISION: FLOATING 4-PILLAR GLASS BRIDGE DOCK ── */}
        <div className="w-full pt-8 relative z-20">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-[0_16px_40px_rgba(0,0,0,0.08)] p-4 sm:p-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
              {featurePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={idx} 
                    className={`flex items-center gap-3.5 ${idx > 0 ? 'pt-3 sm:pt-0 sm:pl-4 lg:pl-6' : ''}`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-red-50 text-[#8B1E1E] flex items-center justify-center shrink-0 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5 text-left">
                      <h4 className="font-heading text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {pillar.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-stone-500 font-medium">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* ── 4. CRISP ARCHITECTURAL BOTTOM SEPARATOR (SOLID #FAF9F6, ZERO BLURRY FOG) ── */}
      <div className="w-full h-4 bg-[#FAF9F6] border-t border-stone-200/60" />
    </section>
  );
};
