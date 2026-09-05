/**
 * AboutPage — High-Fidelity Editorial About Page for SolarArk Projects Pvt. Ltd.
 *
 * Structural Architecture drawn from reference (aboutpage.png):
 * 1. Hero Band: Editorial split layout. Left typography ("Energy that works for real life." with rust-red accent),
 *    right full-bleed architectural solar building facade with vertical text ribbon ("CLEANER / BRIGHTER / MAHARASHTRA").
 * 2. Origin Triptych: Seamless 3-part panoramic strip (0 gaps). Left: rooftop array with quote scrim;
 *    Center: pure white story card ("Where it all began."); Right: angled solar sunset slice with vertical text ("SAME / SPACES / NEW / POSSIBILITIES").
 * 3. Belief Band: Split layout. Left 65% statement + 3 minimal procedural pillars with subtle dividers;
 *    Right 35% full-height glistening solar panel array with vertical text ("DIFFERENT / SPACES / SAME / PURPOSE").
 * 4. Team Band: Cinematic dark full-width band. Left copy + "Meet Our Team ->" pill CTA; Right integrated field team visual + quote.
 * 5. Process Rail: Interconnected horizontal procedural rail with 1px borders between 4 steps + right vertical ribbon.
 * 6. Journey Strip: 6-photo visual proof strip with category captions and smooth navigation.
 * 7. Horizon CTA: Golden-hour landscape band with "Building a cleaner future, together." + dual pill CTAs.
 *
 * @license SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
  prefilledPincode?: string;
  prefilledBill?: number;
}

/* ── 6 Field Journey Photos for Visual Proof Strip ── */
const journeyPhotos = [
  {
    src: '/images/process/stage-03-install-wide.jpg',
    tag: 'Execution',
    caption: 'Precision Module Mounting at Sunset',
  },
  {
    src: '/images/earnwithus/earnwithus-hero-rooftop.jpg',
    tag: 'Aerial Survey',
    caption: 'Rooftop Megawatt Infrastructure',
  },
  {
    src: '/images/process/stage-01-survey-rooftop.jpg',
    tag: 'Site Audit',
    caption: 'RTK GPS & Laser Shadow Analysis',
  },
  {
    src: '/images/process/stage-04-commission-inverter.png',
    tag: 'Commissioning',
    caption: 'Smart Hybrid Inverter Telemetry',
  },
  {
    src: '/images/projects/featured-commercial.jpg',
    tag: 'Commercial',
    caption: 'Turnkey Institutional Grid Integration',
  },
  {
    src: '/images/completed-projects-home.jpg',
    tag: 'Residential',
    caption: 'Architectural Solar Villa Handover',
  },
];

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onCtaClick,
}) => {
  /* ── Journey strip scroll logic ── */
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 6);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 6);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.65;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen bg-[#FAF9F6] text-slate-900 overflow-x-hidden selection:bg-[#8B1E1E] selection:text-white"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content="SolarArk Projects Pvt. Ltd." />
      <meta itemProp="url" content="https://www.thesolarark.com/about" />

      {/* ════════════════════════════════════════════════════════════════
          BAND 1 — HERO BAND
          Clean grid split: Left editorial copy, right architectural solar facade
          with vertical text ribbon. Zero bottom gap (touches Band 2).
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#FAF9F6] pt-24 lg:pt-28 overflow-hidden border-b border-stone-200/60">
        <div className="w-full max-w-[1440px] mx-auto pl-4 sm:pl-6 md:pl-12 lg:pl-16 pr-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[580px] lg:min-h-[640px]">

            {/* Left Editorial Story Column */}
            <div className="lg:col-span-5 flex flex-col justify-center py-12 lg:py-16 pr-6 sm:pr-8 z-10">
              <p className="eyebrow text-[11px] font-heading font-semibold text-stone-500 tracking-[0.22em] uppercase mb-6">
                ABOUT SOLAR ARK
              </p>

              <h1 className="hero-display text-[#0B1730] tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-[62px] mb-6">
                Energy that{' '}
                <br className="hidden sm:block" />
                works for{' '}
                <span className="text-[#8B1E1E] font-serif italic">real life.</span>
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-md mb-8">
                We design and deliver solar solutions that make clean energy practical,
                reliable and truly beneficial for the spaces people live, work and grow in.
              </p>

              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-stone-400" />
                <span className="text-[11px] font-heading font-semibold text-stone-400 tracking-[0.18em] uppercase">
                  ASSURED RENEWABLE KOMFORT
                </span>
              </div>
            </div>

            {/* Right Architectural Solar Building Facade + Vertical Ribbon */}
            <div className="lg:col-span-7 relative flex items-stretch">
              <div className="relative w-full h-[360px] sm:h-[440px] lg:h-full overflow-hidden">
                <img
                  src="/images/solar-villa-sunset.jpg"
                  alt="Modern architectural headquarters with rooftop solar installations at sunset"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                {/* Soft gradient edge vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#FAF9F6]/20 lg:via-transparent lg:to-transparent" />
              </div>

              {/* Vertical Text Ribbon on Far Right Margin */}
              <div className="hidden xl:flex absolute right-4 2xl:right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-2 pointer-events-none z-20">
                {['CLEANER', 'BRIGHTER', 'MAHARASHTRA'].map((word) => (
                  <span
                    key={word}
                    className="text-[9px] font-heading font-semibold text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] tracking-[0.3em] uppercase"
                    style={{ writingMode: 'vertical-lr' }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 2 — ORIGIN STORY TRIPTYCH
          Seamless 3-part connected panoramic strip (0 gaps).
          Left: Panoramic rooftop array with quote scrim (52%)
          Center: Pure white story card (32%)
          Right: Glistening solar panel sunset slice with vertical text (16%)
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#0B1730] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[480px] lg:min-h-[520px]">

          {/* Panel 1 (Left 6 cols / 50%): Panoramic Rooftop Array with Scrim Quote */}
          <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-full overflow-hidden">
            <img
              src="/images/earnwithus/earnwithus-hero-rooftop.jpg"
              alt="Solar engineer overseeing panoramic rooftop solar installation across Maharashtra"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            {/* Scrim Quote */}
            <div className="absolute bottom-8 left-6 sm:bottom-10 sm:left-10 max-w-md z-10">
              <blockquote className="font-heading font-semibold text-white text-2xl sm:text-3xl leading-snug tracking-tight">
                “From Maharashtra,
                <br />
                for a cleaner tomorrow.”
              </blockquote>
            </div>
          </div>

          {/* Panel 2 (Center 4 cols / 33%): Pure White Story Block */}
          <div className="lg:col-span-4 bg-white text-[#0B1730] p-8 sm:p-12 lg:p-14 flex flex-col justify-center z-10 border-r border-stone-200/50">
            <p className="eyebrow text-[11px] font-heading font-semibold text-stone-500 tracking-[0.22em] uppercase mb-3">
              OUR STORY
            </p>
            <h2 className="font-heading font-bold text-[#0B1730] text-3xl sm:text-4xl tracking-tight leading-[1.12] mb-5">
              Where it all began.
            </h2>
            <p className="text-sm sm:text-[15px] text-stone-600 leading-relaxed mb-6">
              Solar Ark was founded with a clear purpose — to make renewable energy accessible,
              reliable and relevant for homes, businesses and industries. What began as a small
              team with a big vision has grown into a trusted solar partner for clients across Maharashtra.
            </p>
            <div>
              <button
                onClick={() => {
                  const el = document.getElementById('journey-gallery');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-[#8B1E1E] hover:text-[#A82424] transition-colors cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]"
              >
                <span>Our Journey</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Panel 3 (Right 2 cols / 17%): Angled Sunset Solar Panel Slice with Vertical Text */}
          <div className="lg:col-span-2 relative min-h-[220px] lg:min-h-full overflow-hidden hidden lg:block">
            <img
              src="/images/completed-projects-home.jpg"
              alt="Glistening solar panels at sunset"
              className="w-full h-full object-cover object-right"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/25" />
            {/* Vertical Text Ribbon */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
              {['SAME', 'SPACES', 'NEW', 'POSSIBILITIES'].map((word) => (
                <span
                  key={word}
                  className="text-[9px] font-heading font-semibold text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] tracking-[0.28em] uppercase"
                  style={{ writingMode: 'vertical-lr' }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 3 — WHAT WE BELIEVE
          Split layout: Left 65% Statement + 3 Numbered Minimal Pillars;
          Right 35% Full-height solar array with vertical text.
          Seamless flush connection into Band 4.
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#FAF9F6] border-b border-stone-200/60">
        <div className="w-full max-w-[1440px] mx-auto pl-4 sm:pl-6 md:pl-12 lg:pl-16 pr-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

            {/* Left 8 cols: Statement & 3 Pillars */}
            <div className="lg:col-span-8 py-16 sm:py-20 lg:py-24 pr-6 sm:pr-10 lg:pr-14 flex flex-col justify-between">
              <div>
                <p className="eyebrow text-[11px] font-heading font-semibold text-stone-500 tracking-[0.22em] uppercase mb-6">
                  WHAT WE BELIEVE
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-14">
                  <div className="md:col-span-7">
                    <h2 className="font-heading font-bold text-[#0B1730] text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] tracking-tight">
                      Good solar is not just technology.{' '}
                      <br className="hidden sm:block" />
                      It's <span className="text-[#8B1E1E] font-serif italic">a better tomorrow.</span>
                    </h2>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                      Every space is different. Every energy need is unique. We believe in thoughtful
                      design, reliable execution and long-term support — because real progress comes
                      from solutions that truly fit your world.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Procedural Minimal Pillars separated by dividers */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-stone-200">
                <div>
                  <span className="text-xs font-heading font-semibold text-stone-400 block mb-2">01</span>
                  <h3 className="font-heading text-lg font-bold text-[#0B1730] tracking-tight mb-1.5">
                    Thoughtful Design
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                    Solutions designed around real needs.
                  </p>
                </div>

                <div>
                  <span className="text-xs font-heading font-semibold text-stone-400 block mb-2">02</span>
                  <h3 className="font-heading text-lg font-bold text-[#0B1730] tracking-tight mb-1.5">
                    Reliable Execution
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                    Quality in every detail.
                  </p>
                </div>

                <div>
                  <span className="text-xs font-heading font-semibold text-stone-400 block mb-2">03</span>
                  <h3 className="font-heading text-lg font-bold text-[#0B1730] tracking-tight mb-1.5">
                    Long-term Support
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                    We stay with you beyond installation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 4 cols: Full-Height Glistening Solar Panel Array with Vertical Text */}
            <div className="lg:col-span-4 relative min-h-[300px] lg:min-h-full overflow-hidden">
              <img
                src="/images/approach-artwork.png"
                alt="Solar panels angled upwards reflecting golden sunlight"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Vertical Text Ribbon */}
              <div className="absolute right-4 bottom-8 flex flex-col items-center gap-2 z-10">
                {['DIFFERENT', 'SPACES', 'SAME', 'PURPOSE'].map((word) => (
                  <span
                    key={word}
                    className="text-[9px] font-heading font-semibold text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] tracking-[0.28em] uppercase"
                    style={{ writingMode: 'vertical-lr' }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 4 — THE PEOPLE BEHIND SOLAR ARK
          Cinematic dark full-width band. Left copy + "Meet Our Team ->" pill;
          Right panoramic field engineers with blueprints on site + quote.
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#0B1730] text-white overflow-hidden min-h-[440px] lg:min-h-[480px] flex items-center">
        {/* Panoramic Team Image filling middle/right */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] h-full">
          <img
            src="/images/process/stage-03-install-wide.jpg"
            alt="SolarARK field engineering team with blueprints on rooftop installation at sunset"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Multi-directional dark scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730] via-[#0B1730]/40 to-transparent lg:bg-gradient-to-r lg:from-[#0B1730] lg:via-[#0B1730]/80 lg:to-transparent" />
        </div>

        {/* Content Layer */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left 5 cols: Typography + Pill CTA */}
            <div className="lg:col-span-5 space-y-6 max-w-md">
              <p className="eyebrow text-[11px] font-heading font-semibold text-stone-400 tracking-[0.22em] uppercase">
                THE PEOPLE BEHIND SOLAR ARK
              </p>
              <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-[42px] tracking-tight leading-[1.1]">
                A team that builds what matters.
              </h2>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/gallery')}
                  className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-heading font-semibold text-white border border-white/40 hover:border-white hover:bg-white/10 rounded-full px-7 py-3 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1730] group"
                >
                  <span>Meet Our Team</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right 7 cols: Italic Quote on bottom right */}
            <div className="lg:col-span-7 relative flex justify-end items-end h-[160px] lg:h-[280px]">
              <div className="max-w-[260px] text-right z-20">
                <p className="font-heading italic text-stone-200 text-sm leading-snug drop-shadow-md">
                  “Different perspectives. <br />
                  <span className="text-white font-medium not-italic">A shared purpose.”</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 5 — PROCESS RAIL (How We Work)
          Clean horizontal procedural rail with 1px border dividers:
          Left intro + 4 distinct steps + right vertical ribbon.
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#FAF9F6] border-b border-stone-200/60 py-14 sm:py-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0">

            {/* Left 4 cols: Intro + Circle Button */}
            <div className="lg:col-span-4 pr-6 lg:border-r lg:border-stone-200">
              <p className="eyebrow text-[11px] font-heading font-semibold text-stone-500 tracking-[0.22em] uppercase mb-3">
                HOW WE WORK
              </p>
              <div className="flex items-center gap-4">
                <h2 className="font-heading font-bold text-[#0B1730] text-2xl sm:text-3xl tracking-tight leading-[1.12]">
                  From understanding <br className="hidden sm:block" />
                  to lasting impact.
                </h2>
                <button
                  onClick={onCtaClick}
                  className="w-10 h-10 rounded-full border border-stone-300 hover:border-[#8B1E1E] hover:bg-[#8B1E1E]/5 flex items-center justify-center shrink-0 transition-colors cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]"
                  aria-label="Get started"
                >
                  <ArrowRight className="w-4 h-4 text-stone-600 group-hover:text-[#8B1E1E] transition-colors" />
                </button>
              </div>
            </div>

            {/* Middle 7 cols: 4 Procedural Steps with Vertical 1px Dividers */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 px-0 lg:px-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
              {[
                { num: '01', title: 'Understand the Site' },
                { num: '02', title: 'Design the System' },
                { num: '03', title: 'Execute Professionally' },
                { num: '04', title: 'Support Long-term' },
              ].map((step) => (
                <div key={step.num} className="p-4 sm:px-5 first:pl-0 sm:first:pl-4">
                  <span className="text-xs font-heading font-semibold text-stone-400 block mb-2">
                    {step.num}
                  </span>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#0B1730] tracking-tight leading-snug mb-3">
                    {step.title}
                  </h3>
                  <div className="w-5 h-[2px] bg-stone-300" />
                </div>
              ))}
            </div>

            {/* Right 1 col: Vertical Stacked Ribbon */}
            <div className="lg:col-span-1 hidden lg:flex justify-end border-l border-stone-200 pl-4">
              <div className="flex flex-col items-center gap-1.5 opacity-60">
                {['A SMOOTHER', 'CLEANER', 'BRIGHTER', 'TOMORROW'].map((word) => (
                  <span
                    key={word}
                    className="text-[8px] font-heading font-semibold text-stone-500 tracking-[0.24em] uppercase text-center"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 6 — BEHIND EVERY INSTALLATION (Visual Proof Strip)
          Header with controls + 6 compact landscape photos side-by-side
          ════════════════════════════════════════════════════════════════ */}
      <section id="journey-gallery" className="py-14 sm:py-16 bg-[#FAF9F6] scroll-mt-20">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">

          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <p className="eyebrow text-[11px] font-heading font-semibold text-stone-500 tracking-[0.22em] uppercase mb-1.5">
                BEHIND EVERY INSTALLATION
              </p>
              <h2 className="font-heading font-bold text-[#0B1730] text-2xl sm:text-3xl tracking-tight leading-[1.14]">
                Real people. Real progress.
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[10px] font-heading font-semibold text-stone-400 tracking-[0.18em] uppercase hidden sm:block">
                A GLIMPSE INTO OUR JOURNEY
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className="w-8 h-8 rounded-full border border-stone-300 hover:border-stone-500 disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]"
                  aria-label="Previous photos"
                >
                  <ChevronLeft className="w-4 h-4 text-stone-600" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className="w-8 h-8 rounded-full border border-stone-300 hover:border-stone-500 disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]"
                  aria-label="Next photos"
                >
                  <ChevronRight className="w-4 h-4 text-stone-600" />
                </button>
              </div>
            </div>
          </div>

          {/* 6 Photos Horizontal Strip with Tight Editorial Gaps */}
          <div
            ref={scrollRef}
            className="flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2"
          >
            {journeyPhotos.map((photo, idx) => (
              <div
                key={idx}
                className="shrink-0 w-[200px] sm:w-[230px] lg:w-[250px] snap-start group cursor-pointer"
              >
                <div className="overflow-hidden bg-stone-200 aspect-[16/10] mb-2">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
                <p className="text-[10px] font-heading font-semibold text-stone-400 uppercase tracking-wider mb-0.5">
                  {photo.tag}
                </p>
                <p className="text-xs font-heading font-medium text-stone-700 leading-snug line-clamp-1">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 7 — BOTTOM CTA (Panoramic Horizon)
          Panoramic golden-hour landscape photo background with
          "Building a cleaner future, together." + dual pill CTAs.
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 overflow-hidden border-t border-stone-200">
        {/* Landscape Photo Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/earnwithus/earnwithus-hero-rooftop.jpg"
            alt="Maharashtra panoramic horizon at sunset"
            className="w-full h-full object-cover object-bottom brightness-[0.7] contrast-[1.05]"
            loading="eager"
          />
          {/* Warm sunset tonal overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-950/80 via-amber-900/60 to-stone-900/80 mix-blend-multiply" />
        </div>

        {/* Content Layer */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-[42px] tracking-tight leading-[1.1] mb-2">
                Building a cleaner future, <br className="hidden sm:block" />
                together.
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('/projects')}
                className="bg-[#8B1E1E] hover:bg-[#A82424] text-white text-sm font-heading font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Explore Our Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onCtaClick}
                className="border border-white/60 hover:border-white hover:bg-white/10 text-white text-sm font-heading font-semibold px-8 py-3.5 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Talk to Our Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
