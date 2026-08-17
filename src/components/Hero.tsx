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

  // Subtle parallax — restrained to feel cinematic, not gimmicky
  const parallaxY = isReducedMotion ? 0 : scrollY * 0.1;
  const parallaxScale = isReducedMotion ? 1 : 1 + scrollY * 0.00006;

  // Content entrance animation
  const contentOpacity = imageLoaded ? 1 : 0;
  const contentTranslateY = imageLoaded ? 0 : 12;

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative overflow-hidden w-full"
      style={{ minHeight: 'clamp(740px, 94vh, 920px)' }}
    >
      {/* ── Full-bleed background photograph ──
           Clean HD image — Indian residential home with rooftop solar
           panels at golden hour. Background extends fully with parent container. ── */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <img
          src="/hero-solar-home.png"
          alt="Premium Indian residential home with rooftop solar panels at golden hour, Maharashtra cityscape"
          className="w-full h-full object-cover will-change-transform"
          style={{
            objectPosition: '68% 40%',
            transform: `scale(${parallaxScale}) translateY(${-parallaxY}px)`,
            transition: isReducedMotion ? 'none' : 'transform 0.1s linear',
          }}
          loading="eager"
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* ── Desktop: Localized left-side readability gradient ──
           Art-directed backdrop focused specifically around headline & CTA column.
           Keeps headline 100% readable while leaving the bottom-left cityscape & right solar home sharp, vivid, and unwashed. ── */}
      <div
        className="absolute inset-0 z-[1] hidden lg:block pointer-events-none"
        style={{
          background: `
            radial-gradient(
              ellipse 65% 75% at 18% 42%,
              rgba(248, 250, 252, 0.92) 0%,
              rgba(248, 250, 252, 0.78) 35%,
              rgba(248, 250, 252, 0.45) 60%,
              transparent 85%
            )
          `,
        }}
      />

      {/* ── Mobile / Tablet: Top-to-bottom readability gradient ──
           Covers the headline and supporting text area. The CTA and
           trust elements below get their own frosted backdrop. ── */}
      <div
        className="absolute inset-0 z-[1] lg:hidden pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(248, 250, 252, 0.94) 0%,
              rgba(248, 250, 252, 0.88) 18%,
              rgba(248, 250, 252, 0.72) 32%,
              rgba(255, 255, 255, 0.48) 46%,
              rgba(255, 255, 255, 0.18) 60%,
              transparent 72%
            )
          `,
        }}
      />

      {/* ── Multi-Layered Organic Wave Section Divider ──
           Seamless, modern architectural wave curve dividing Hero from the ProblemSection below. ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-[15] overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-[50px] sm:h-[80px] lg:h-[120px]"
          preserveAspectRatio="none"
        >
          {/* Top Translucent Wave Layer (Subtle Depth) */}
          <path
            d="M0,25 C320,95 620,15 940,70 C1200,110 1360,45 1440,30 L1440,140 L0,140 Z"
            fill="rgba(250, 249, 246, 0.4)"
          />
          {/* Middle Semi-Opaque Wave Layer (Organic Depth) */}
          <path
            d="M0,45 C280,110 580,30 900,85 C1180,120 1370,55 1440,45 L1440,140 L0,140 Z"
            fill="rgba(250, 249, 246, 0.7)"
          />
          {/* Foreground Solid Cream Wave Layer (Seamless Section Transition into #FAF9F6) */}
          <path
            d="M0,65 C240,125 540,48 860,98 C1160,135 1360,75 1440,65 L1440,140 L0,140 Z"
            fill="#FAF9F6"
          />
        </svg>
      </div>

      {/* ── Content Container ── */}
      <div
        className="max-w-[1400px] w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10 flex items-center"
        style={{ minHeight: 'clamp(760px, 95vh, 940px)' }}
      >
        <div
          className="max-w-xl lg:max-w-[540px] pt-28 sm:pt-32 lg:pt-0 pb-16 sm:pb-12 lg:pb-0"
          style={{
            opacity: contentOpacity,
            transform: `translateY(${contentTranslateY}px)`,
            transition: isReducedMotion
              ? 'opacity 0.01s'
              : 'opacity 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          {/* ── Headline ──
               Primary visual anchor. Controlled width so line breaks feel
               intentional. Blue emphasis is visually balanced. ── */}
          <h1
            className="font-heading text-[30px] sm:text-[38px] lg:text-[46px] xl:text-[50px] font-extrabold text-slate-900 tracking-tight leading-[1.08]"
            style={{ textShadow: '0 1px 12px rgba(248,250,252,0.6)' }}
          >
            Power your home.{' '}
            <br />
            <span className="text-[#8B1E1E]">Pay less every month.</span>
          </h1>

          {/* ── Supporting copy ──
               Intentional breathing room from headline (mt-5).
               Doesn't sit too close, doesn't float disconnected. ── */}
          <p
            className="mt-5 text-[15px] sm:text-base text-slate-600 max-w-[380px] leading-relaxed font-medium"
            style={{ textShadow: '0 1px 8px rgba(248,250,252,0.5)' }}
          >
            Clean energy. Lower bills.{' '}
            <br className="hidden sm:inline" />
            A smarter choice for your family.
          </p>

          {/* ── CTA Group ──
               Connected to headline through intentional spacing (mt-7).
               Primary CTA clearly wins hierarchy. Secondary is visually
               subdued but still accessible.
               On mobile/tablet, the bottom portion gets a frosted container
               for readability against the vivid image. ── */}
          <div
            className="mt-7 rounded-2xl lg:rounded-none lg:bg-transparent lg:backdrop-blur-0 lg:shadow-none px-4 py-4 -mx-4 sm:px-5 sm:-mx-5 lg:mx-0 lg:px-0 lg:py-0"
            style={{
              /* Mobile frosted backdrop */
            }}
          >
            <style>{`
              @media (max-width: 1023px) {
                .hero-cta-backdrop {
                  background: rgba(248, 250, 252, 0.72) !important;
                  backdrop-filter: blur(12px) !important;
                  -webkit-backdrop-filter: blur(12px) !important;
                  box-shadow: 0 2px 20px rgba(0,0,0,0.06) !important;
                }
              }
            `}</style>
            <div className="hero-cta-backdrop rounded-2xl lg:rounded-none lg:bg-transparent lg:backdrop-blur-0 lg:shadow-none px-4 py-4 -mx-4 sm:px-5 sm:-mx-5 lg:mx-0 lg:px-0 lg:py-0">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <button
                  onClick={onCtaClick}
                  className="w-full sm:w-auto bg-[#8B1E1E] hover:bg-[#5E1212] active:scale-[0.97] text-white text-[15px] font-semibold px-8 py-[14px] rounded-full transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
                  style={{
                    boxShadow: '0 4px 14px -2px rgba(139, 30, 30, 0.35), 0 2px 6px -1px rgba(139, 30, 30, 0.15)',
                  }}
                >
                  <span>Get My Free Savings Estimate</span>
                  <ArrowRight className="w-[16px] h-[16px] group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>

                <button
                  onClick={onCalculatorClick}
                  className="text-slate-600 hover:text-[#8B1E1E] text-[14px] font-semibold px-2 py-2 transition-colors duration-200 flex items-center gap-1.5 group cursor-pointer"
                >
                  <span>See How It Works</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>
              </div>

              {/* ── Reassurance micro-copy ── */}
              <p className="mt-2.5 text-[12px] sm:text-[12.5px] text-slate-500 tracking-wide font-semibold pl-0.5">
                Takes about 60 seconds&ensp;•&ensp;No obligation
              </p>

              {/* ── Trust element ── */}
              <div
                className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-md"
                style={{
                  background: 'rgba(248, 250, 252, 0.5)',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
                }}
              >
                <ShieldCheck
                  className="w-[15px] h-[15px] text-[#8B1E1E]/80 shrink-0"
                  strokeWidth={2.2}
                />
                <p className="text-[12px] sm:text-[12.5px] text-slate-600 leading-snug whitespace-nowrap">
                  <span className="font-semibold text-slate-700">
                    Trusted by homeowners across Maharashtra.
                  </span>
                  {' '}
                  <span className="hidden sm:inline text-slate-500">
                    Quality installation · Govt. subsidy support.
                  </span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
