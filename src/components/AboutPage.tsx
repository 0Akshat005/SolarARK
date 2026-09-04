/**
 * AboutPage — High-End Editorial About Page for SolarArk Projects Pvt. Ltd.
 *
 * Designed in exact alignment with the master architectural reference:
 * 1. Hero Band: Editorial typography ("real life." in maroon #8B1E1E), paragraph,
 *    and a full-bleed architectural solar facade visual bleeding to the right edge.
 * 2. Origin Story Band: 3-part seamless panoramic strip (field engineer visual with
 *    "From Maharashtra, for a cleaner tomorrow." quote + white story panel + sunset panel).
 *    Zero unnecessary vertical spacing from the hero!
 * 3. What We Believe Band: Statement with maroon accent ("a better tomorrow.") +
 *    supporting copy + 3 numbered minimal text pillars, paired with full-bleed
 *    technology-solar-module.jpg on the right with sun flare.
 * 4. Team Band: Full-width panoramic band with field engineering team, dark gradient scrim,
 *    headline, and "Meet Our Team" outline pill CTA.
 * 5. Process Band (How We Work): Compact minimal horizontal rail with circle arrow button,
 *    4 step labels with minimal underline dashes, and vertical accent text.
 * 6. Journey Band (Behind Every Installation): Compact header with navigation buttons (< >)
 *    and a continuous 6-tile photo strip with tight gap.
 * 7. Bottom CTA Band: Panoramic landscape visual background with headline and dual pill CTAs.
 *
 * @license SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
  prefilledPincode?: string;
  prefilledBill?: number;
}

/* ── 6 Curated Photos for Band 6 Journey Strip ── */
const journeyStripPhotos = [
  {
    src: '/images/process/stage-03-install-wide.jpg',
    alt: 'SolarARK certified engineers installing Tier-1 modules',
  },
  {
    src: '/images/process/stage-01-survey-rooftop.jpg',
    alt: 'High-precision laser site survey and shadow analysis',
  },
  {
    src: '/images/process/stage-02-cad-design.jpg',
    alt: '3D CAD structural blueprints and generation simulation',
  },
  {
    src: '/images/process/stage-04-commission-inverter.png',
    alt: 'Inverter telemetry and net-metering synchronization',
  },
  {
    src: '/images/solar-villa-sunset.jpg',
    alt: 'Completed luxury residential solar installation at sunset',
  },
  {
    src: '/images/gallery/gallery1.jpg',
    alt: 'SolarARK annual milestone lamp lighting celebration',
  },
];

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onCtaClick,
}) => {
  /* ── Gallery scroll controls ── */
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
    const amount = el.clientWidth * 0.6;
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
          BAND 1 — HERO
          Left: Editorial headline ("real life." in #8B1E1E maroon),
                subtle paragraph, tagline with dash rule.
          Right: Architectural solar facade reaching the edge.
          Far right: CLEANER / BRIGHTER / MAHARASHTRA stacked text.
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#FAF9F6] border-b border-stone-200/50">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">

          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 px-6 sm:px-10 lg:pl-16 xl:pl-24 lg:pr-12 pt-20 pb-12 sm:pt-24 sm:pb-14 lg:py-16 xl:py-20 flex flex-col justify-center">
            <div className="max-w-xl">
              <p className="eyebrow text-xs text-stone-500 tracking-[0.2em] mb-4 uppercase font-medium">
                ABOUT SOLAR ARK
              </p>

              <h1
                className="hero-display text-[#0B1730] tracking-tight leading-[1.04] mb-5 font-bold"
                style={{ fontSize: 'clamp(2.5rem, 1.8rem + 3.2vw, 4.75rem)' }}
              >
                Energy that
                <br />
                works for{' '}
                <span className="text-[#8B1E1E]">real life.</span>
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-md mb-7">
                We design and deliver solar solutions that make clean energy practical,
                reliable and truly beneficial for the spaces people live, work and grow in.
              </p>

              <div className="flex items-center gap-3 pt-1">
                <div className="w-8 h-[1.5px] bg-stone-400" />
                <span className="text-[11px] font-heading font-semibold text-stone-500 tracking-[0.2em] uppercase">
                  ASSURED RENEWABLE KOMFORT
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Solar Facade & Stacked Text */}
          <div className="lg:col-span-6 relative h-[380px] sm:h-[440px] lg:h-auto min-h-[460px] flex items-stretch">
            <div className="relative flex-1 h-full overflow-hidden">
              <img
                src="/images/solar-villa-sunset.jpg"
                alt="SolarARK modern architectural building with integrated solar rooftop at sunset"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>

            {/* Stacked Word Column on Far Right (Matching Reference) */}
            <div className="hidden xl:flex w-24 shrink-0 bg-[#FAF9F6] flex-col justify-start items-center pt-8 px-2 border-l border-stone-200/40">
              <div className="flex flex-col items-start gap-1 text-[9px] font-heading font-semibold text-stone-500 tracking-[0.22em] uppercase leading-tight">
                <span>CLEANER</span>
                <span>BRIGHTER</span>
                <span>MAHARASHTRA</span>
                <div className="w-5 h-[1.5px] bg-stone-400 mt-2" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 2 — ORIGIN STORY STRIP ("Where it all began.")
          3-Part Panoramic Strip meeting Hero with ZERO gap.
          Left: Field engineer visual + "From Maharashtra, for a cleaner tomorrow."
          Center: Clean white story block with "Our Journey ->"
          Right: Sunset panel + "SAME SPACES NEW POSSIBILITIES"
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#0B1730] overflow-hidden border-b border-stone-200/50">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">

          {/* Part 1 (Left 6 cols): Field Engineer Visual with Quote Scrim */}
          <div className="lg:col-span-6 relative h-[360px] sm:h-[420px] lg:h-[480px] overflow-hidden">
            <img
              src="/images/process/stage-03-install-wide.jpg"
              alt="SolarARK engineers reviewing blueprints on a Maharashtra rooftop solar installation"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            {/* Gradient scrim for quote legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            <div className="absolute bottom-8 left-6 sm:bottom-10 sm:left-10 lg:left-16 max-w-sm z-10">
              <blockquote className="font-heading font-medium text-white text-lg sm:text-xl lg:text-2xl leading-snug mb-3">
                “From
                <br />
                Maharashtra,
                <br />
                for a cleaner
                <br />
                tomorrow.”
              </blockquote>
              <div className="w-6 h-[1.5px] bg-stone-300" />
            </div>
          </div>

          {/* Part 2 (Center 4 cols): Clean White Origin Story Panel */}
          <div className="lg:col-span-4 bg-white text-[#0B1730] px-8 py-10 sm:px-10 sm:py-12 lg:p-12 xl:p-14 flex flex-col justify-center">
            <p className="eyebrow text-xs text-stone-500 tracking-[0.2em] mb-3 uppercase font-medium">
              OUR STORY
            </p>
            <h2 className="font-heading font-bold text-[#0B1730] text-2xl sm:text-3xl lg:text-[34px] tracking-tight leading-[1.12] mb-4">
              Where it
              <br />
              all began.
            </h2>
            <p className="text-sm sm:text-[14px] text-stone-600 leading-relaxed mb-5">
              Solar Ark was founded with a clear purpose — to make renewable energy accessible,
              reliable and relevant for homes, businesses and industries. What began as a small
              team with a big vision has grown into a trusted solar partner for clients across Maharashtra.
            </p>
            <div className="w-6 h-[1.5px] bg-stone-300 mb-5" />
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

          {/* Part 3 (Right 2 cols): Sunset Solar Panel Visual */}
          <div className="lg:col-span-2 relative h-[220px] lg:h-[480px] overflow-hidden hidden sm:block">
            <img
              src="/images/earnwithus/earnwithus-hero-rooftop.jpg"
              alt="Solar panels reflecting the golden sunset"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            {/* Dark overlay with stacked text */}
            <div className="absolute inset-0 bg-black/25" />
            <div className="hidden xl:flex absolute right-4 top-8 flex-col items-start gap-1 z-10">
              <div className="flex flex-col items-start text-[8px] font-heading font-semibold text-white/90 drop-shadow-md tracking-[0.24em] uppercase leading-tight">
                <span>SAME</span>
                <span>SPACES</span>
                <span>NEW</span>
                <span>POSSIBILITIES</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 3 — WHAT WE BELIEVE
          Zero gap from Band 2.
          Left: Statement ("a better tomorrow." in #8B1E1E maroon) +
                supporting paragraph + 3 minimal numbered pillars.
          Right: technology-solar-module.jpg with sun flare.
          Far right: DIFFERENT / SPACES / SAME / PURPOSE stacked text.
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#FAF9F6] border-b border-stone-200/60">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">

          {/* Left Column (7 cols): Belief Statement, Paragraph, and 3 Pillars */}
          <div className="lg:col-span-7 px-6 sm:px-10 lg:pl-16 xl:pl-24 lg:pr-12 py-12 sm:py-14 lg:py-16 flex flex-col justify-center">
            <div className="max-w-2xl">
              <p className="eyebrow text-xs text-stone-500 tracking-[0.2em] mb-3 uppercase font-medium">
                WHAT WE BELIEVE
              </p>

              {/* Split row: Headline on left, supporting copy on right */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start mb-8 lg:mb-10">
                <div className="md:col-span-7">
                  <h2
                    className="font-heading font-bold text-[#0B1730] tracking-tight leading-[1.08]"
                    style={{ fontSize: 'clamp(1.75rem, 1.2rem + 2vw, 2.75rem)' }}
                  >
                    Good solar is not
                    <br />
                    just technology.
                    <br />
                    It’s <span className="text-[#8B1E1E]">a better tomorrow.</span>
                  </h2>
                </div>
                <div className="md:col-span-5 pt-1">
                  <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                    Every space is different. Every energy need is unique. We believe in
                    thoughtful design, reliable execution and long-term support — because
                    real progress comes from solutions that truly fit your world.
                  </p>
                </div>
              </div>

              {/* 3 Numbered Minimal Pillars in a Horizontal Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 border-t border-stone-200/80 pt-6">
                <div>
                  <span className="text-xs font-heading font-semibold text-stone-400 block mb-1.5">
                    01
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#0B1730] tracking-tight mb-1">
                    Thoughtful Design
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Solutions designed around real needs.
                  </p>
                </div>

                <div>
                  <span className="text-xs font-heading font-semibold text-stone-400 block mb-1.5">
                    02
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#0B1730] tracking-tight mb-1">
                    Reliable Execution
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Quality in every detail.
                  </p>
                </div>

                <div>
                  <span className="text-xs font-heading font-semibold text-stone-400 block mb-1.5">
                    03
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#0B1730] tracking-tight mb-1">
                    Long-term Support
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    We stay with you beyond installation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Angled Solar Panel with Sun Flare */}
          <div className="lg:col-span-5 relative h-[320px] sm:h-[380px] lg:h-auto min-h-[420px] flex items-stretch">
            <div className="relative flex-1 h-full overflow-hidden">
              <img
                src="/images/technology-solar-module.jpg"
                alt="High-efficiency solar module angled toward the sun with brilliant flare"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
            {/* Stacked Word Column on Far Right */}
            <div className="hidden xl:flex w-24 shrink-0 bg-[#FAF9F6] flex-col justify-end items-center pb-8 px-2 border-l border-stone-200/40">
              <div className="flex flex-col items-start gap-1 text-[9px] font-heading font-semibold text-stone-500 tracking-[0.22em] uppercase leading-tight">
                <span>DIFFERENT</span>
                <span>SPACES</span>
                <span>SAME</span>
                <span>PURPOSE</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 4 — THE TEAM BAND
          Full-width panoramic photo band with hardhat team.
          Left: Dark scrim + "THE PEOPLE BEHIND SOLAR ARK" + headline +
                "Meet Our Team ->" outline pill CTA.
          Right: "Different perspectives. A shared purpose."
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#0B1730] text-white overflow-hidden min-h-[380px] sm:min-h-[420px] lg:min-h-[440px] flex items-center">
        {/* Full-width panoramic background visual */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/process/stage-03-install-wide.jpg"
            alt="SolarARK field engineering team on installation site at sunset"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Panoramic dark gradient scrim across the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        </div>

        {/* Content Container */}
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-14 lg:py-16 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">

            {/* Left: Eyebrow, Headline, and Outline Pill CTA */}
            <div className="max-w-xl space-y-4">
              <p className="eyebrow text-xs text-stone-300 tracking-[0.2em] uppercase font-medium">
                THE PEOPLE
                <br />
                BEHIND SOLAR ARK
              </p>
              <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.08]">
                A team that
                <br />
                builds what
                <br />
                matters.
              </h2>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/gallery')}
                  className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-heading font-semibold text-white border border-white/40 hover:border-white hover:bg-white/10 rounded-full px-6 py-2.5 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white group"
                >
                  <span>Meet Our Team</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right: Signature Editorial Quote */}
            <div className="max-w-xs text-left lg:text-right">
              <blockquote className="font-heading italic text-stone-200 text-sm sm:text-base leading-snug drop-shadow-md mb-2">
                “Different
                <br />
                perspectives.
                <br />
                <span className="text-white font-medium not-italic">A shared purpose.”</span>
              </blockquote>
              <div className="w-6 h-[1.5px] bg-stone-300 ml-auto hidden lg:block" />
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 5 — PROCESS (How We Work)
          Compact minimal horizontal rail:
          Left: "HOW WE WORK" + headline + circle arrow button.
          Right: 4 steps (01, 02, 03, 04) with minimal underline dashes.
          Far right: A SMOOTHER / CLEANER / BRIGHTER / TOMORROW.
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#FAF9F6] border-b border-stone-200/60 py-8 sm:py-10 lg:py-12">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left: Intro + Circle Arrow Button */}
            <div className="lg:col-span-4 space-y-3">
              <p className="eyebrow text-xs text-stone-500 tracking-[0.2em] uppercase font-medium">
                HOW WE WORK
              </p>
              <h2 className="font-heading font-bold text-[#0B1730] text-2xl sm:text-3xl tracking-tight leading-[1.12]">
                From understanding
                <br />
                to lasting impact.
              </h2>
              <div>
                <button
                  onClick={onCtaClick}
                  className="w-10 h-10 rounded-full border border-stone-300 hover:border-[#8B1E1E] hover:bg-[#8B1E1E]/5 flex items-center justify-center transition-all cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]"
                  aria-label="Schedule a site consultation"
                >
                  <ArrowRight className="w-4 h-4 text-stone-600 group-hover:text-[#8B1E1E] transition-colors" />
                </button>
              </div>
            </div>

            {/* Right: 4 Horizontal Steps with Underline Dashes */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-6 relative">
              {[
                { num: '01', line1: 'Understand', line2: 'the Site' },
                { num: '02', line1: 'Design', line2: 'the System' },
                { num: '03', line1: 'Execute', line2: 'Professionally' },
                { num: '04', line1: 'Support', line2: 'Long-term' },
              ].map((step) => (
                <div key={step.num} className="space-y-1.5">
                  <span className="text-xs font-heading font-semibold text-stone-400 block">
                    {step.num}
                  </span>
                  <h3 className="font-heading font-bold text-sm sm:text-[15px] text-[#0B1730] tracking-tight leading-snug">
                    {step.line1}
                    <br />
                    {step.line2}
                  </h3>
                  <div className="w-5 h-[1.5px] bg-stone-300 pt-0.5" />
                </div>
              ))}
            </div>

            {/* Far Right: Stacked Text Accent (Matching Reference) */}
            <div className="hidden xl:flex lg:col-span-1 justify-end">
              <div className="flex flex-col items-start text-[8px] font-heading font-semibold text-stone-500 tracking-[0.22em] uppercase leading-tight">
                <span>A SMOOTHER</span>
                <span>CLEANER</span>
                <span>BRIGHTER</span>
                <span>TOMORROW</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 6 — JOURNEY STRIP ("Behind Every Installation")
          Compact header with "A GLIMPSE INTO OUR JOURNEY" and (< >) arrows.
          Underneath: Continuous 6-tile photo strip showing all 6 photos side-by-side.
          ════════════════════════════════════════════════════════════════ */}
      <section id="journey-gallery" className="py-10 sm:py-12 lg:py-14 bg-[#FAF9F6] scroll-mt-20 border-b border-stone-200/50">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">

          {/* Compact Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5 sm:mb-6">
            <div>
              <p className="eyebrow text-xs text-stone-500 mb-1 tracking-[0.2em] uppercase font-medium">
                BEHIND EVERY INSTALLATION
              </p>
              <h2 className="font-heading font-bold text-[#0B1730] text-2xl sm:text-3xl tracking-tight leading-[1.14]">
                Real people. Real progress.
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] sm:text-[11px] font-heading font-semibold text-stone-400 tracking-[0.18em] uppercase hidden sm:block">
                A GLIMPSE INTO OUR JOURNEY
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className="w-8 h-8 sm:w-8 sm:h-8 rounded-full border border-stone-300 hover:border-stone-500 disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]"
                  aria-label="Scroll photo strip left"
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-stone-600" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className="w-8 h-8 sm:w-8 sm:h-8 rounded-full border border-stone-300 hover:border-stone-500 disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]"
                  aria-label="Scroll photo strip right"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Continuous 6-Tile Photo Strip (6 Columns on Desktop matching reference exactly) */}
          <div
            ref={scrollRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 lg:gap-3"
          >
            {journeyStripPhotos.map((photo, idx) => (
              <div
                key={idx}
                className="w-full aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3] overflow-hidden group cursor-pointer bg-stone-100"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 7 — BOTTOM CTA ("Building a cleaner future, together.")
          Warm golden dusk landscape visual background with dark charcoal headline
          on left & maroon pill CTA + soft taupe outline pill CTA on right.
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden py-14 sm:py-16 lg:py-20">
        {/* Warm golden dusk landscape texture */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/projects-backdrop.jpg"
            alt="Maharashtra mountain horizon at sunset"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Warm ambient sunset wash (matching reference) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F6EDE0]/95 via-[#EEDDCA]/85 to-[#E6D1BA]/80" />
        </div>

        {/* Content */}
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
            <div className="md:w-7/12">
              <h2 className="font-heading font-bold text-[#0B1730] text-2xl sm:text-3xl lg:text-[40px] tracking-tight leading-[1.1]">
                Building a cleaner future,
                <br />
                together.
              </h2>
            </div>

            <div className="md:w-5/12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 justify-end w-full">
              <button
                onClick={() => onNavigate('/projects')}
                className="inline-flex items-center justify-center gap-2 text-sm font-heading font-semibold text-white bg-[#8B1E1E] hover:bg-[#A82424] rounded-full px-7 py-3 transition-all duration-300 cursor-pointer shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]"
              >
                <span>Explore Our Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onCtaClick}
                className="inline-flex items-center justify-center gap-2 text-sm font-heading font-semibold text-[#0B1730] bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] border border-stone-400/60 rounded-full px-7 py-3 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1730]"
              >
                Talk to Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

