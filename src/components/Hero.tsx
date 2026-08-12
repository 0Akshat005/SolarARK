/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
  onCalculatorClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, onCalculatorClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mq.matches);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle parallax
  const parallaxY = isReducedMotion ? 0 : scrollY * 0.12;
  const parallaxScale = isReducedMotion ? 1 : 1 + scrollY * 0.00008;

  // Content entrance animation
  const contentOpacity = imageLoaded ? 1 : 0;
  const contentTranslateY = imageLoaded ? 0 : 16;

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative overflow-hidden"
      style={{ minHeight: 'clamp(560px, 88vh, 820px)' }}
    >
      {/* ── Full-bleed background photograph ──
           Clean HD image — Indian residential home with rooftop solar
           panels at golden hour. No baked text, no UI artefacts. ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-solar-home.jpg"
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
      </div>

      {/* ── Desktop: Localized readability gradient (left → right) ──
           Minimal translucent wash behind the text zone only.
           Peaks at ~75% opacity on the far left, dissolves quickly
           to transparent by the mid-point. No heavy whitewash.
           The vivid home/solar image stays fully immersive on the right. ── */}
      <div
        className="absolute inset-0 z-[1] hidden lg:block pointer-events-none"
        style={{
          background: `
            linear-gradient(
              105deg,
              rgba(255, 255, 255, 0.78) 0%,
              rgba(255, 255, 255, 0.68) 16%,
              rgba(255, 255, 255, 0.48) 30%,
              rgba(255, 255, 255, 0.22) 42%,
              rgba(255, 255, 255, 0.06) 52%,
              transparent 60%
            )
          `,
        }}
      />

      {/* ── Mobile / Tablet: Top-to-bottom readability gradient ──
           Soft scrim behind the headline zone at the top.
           Dissolves quickly to show the vivid image below. ── */}
      <div
        className="absolute inset-0 z-[1] lg:hidden pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.82) 0%,
              rgba(255, 255, 255, 0.65) 20%,
              rgba(255, 255, 255, 0.38) 38%,
              rgba(255, 255, 255, 0.12) 54%,
              transparent 68%
            )
          `,
        }}
      />

      {/* ── Bottom dissolve — seamless handoff into next section ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[2]"
        style={{
          height: 'clamp(80px, 15vh, 180px)',
          background: `
            linear-gradient(
              to top,
              rgba(248, 250, 252, 1.0) 0%,
              rgba(248, 250, 252, 0.55) 40%,
              rgba(248, 250, 252, 0.12) 70%,
              transparent 100%
            )
          `,
        }}
      />

      {/* ── Content Container ── */}
      <div
        className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center"
        style={{ minHeight: 'clamp(560px, 88vh, 820px)' }}
      >
        <div
          className="max-w-xl lg:max-w-[520px] pt-24 sm:pt-28 lg:pt-0 pb-24 sm:pb-20 lg:pb-0"
          style={{
            opacity: contentOpacity,
            transform: `translateY(${contentTranslateY}px)`,
            transition: isReducedMotion
              ? 'opacity 0.01s'
              : 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          {/* Headline */}
          <h1
            className="font-heading text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.10]"
            style={{ textShadow: '0 1px 8px rgba(255,255,255,0.5)' }}
          >
            Power your home. <br />
            <span className="text-[#1D5FE0]">Pay less every month.</span>
          </h1>

          {/* Accent rule */}
          <div
            className="mt-5 w-12 h-[3px] rounded-full"
            style={{
              background: 'linear-gradient(to right, #1D5FE0, #FFB020)',
            }}
          />

          {/* Supporting copy */}
          <p
            className="mt-5 text-[15px] sm:text-base text-slate-700 max-w-[400px] leading-relaxed font-medium"
            style={{ textShadow: '0 1px 6px rgba(255,255,255,0.45)' }}
          >
            Clean energy. Lower bills. <br className="hidden sm:inline" />
            A smarter choice for your family.
          </p>

          {/* Action CTAs */}
          <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-3.5">
            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto bg-[#1D5FE0] hover:bg-[#174AB8] active:scale-[0.97] text-white text-[15px] font-semibold px-7 py-3.5 rounded-full transition-all duration-150 flex items-center justify-center gap-2 group shadow-lg shadow-[#1D5FE0]/25"
            >
              <span>Get My Free Savings Estimate</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={onCalculatorClick}
              className="text-slate-700 hover:text-[#1D5FE0] text-[15px] font-medium px-2 py-2.5 transition-colors flex items-center gap-1.5 group"
              style={{ textShadow: '0 1px 4px rgba(255,255,255,0.4)' }}
            >
              <span>See How It Works</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Trust line */}
          <div className="mt-6 flex items-start gap-2.5">
            <ShieldCheck
              className="w-5 h-5 text-[#1D5FE0] mt-0.5 shrink-0"
              strokeWidth={2}
            />
            <div
              className="text-[13px] text-slate-700 leading-snug"
              style={{ textShadow: '0 1px 4px rgba(255,255,255,0.4)' }}
            >
              <span className="font-semibold text-slate-800">
                Trusted by homeowners across Maharashtra.
              </span>
              <br />
              <span className="text-slate-600">
                Quality installation. Government subsidy support.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
