/**
 * AboutPage — High-Fidelity Editorial About Page for SolarArk Projects Pvt. Ltd.
 *
 * Designed with strict adherence to the structural approach, visual hierarchy,
 * and design system of the architectural editorial reference:
 * - Eliminates unnecessary white space by using full-width imagery, alternating tones,
 *   and interlocking panels rather than disconnected floating cards.
 * - Architectural 12-column grid with thin 1px procedural divider lines.
 * - Strategic brand maroon (#8B1E1E) accent typography on key phrases ("real life.", "a better tomorrow.").
 * - Vertical editorial margin typography ("CLEANER / BRIGHTER / MAHARASHTRA", etc.).
 * - High-end procedural process strip and seamless 6-photo photojournalistic contact strip.
 * - Full preservation of SolarArk content, authentic imagery, and routing props.
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

/* ── 6 Curated Photojournalistic Journey Photos ── */
const journeyPhotos = [
  {
    src: '/images/process/stage-03-install-wide.jpg',
    tag: 'Execution',
    caption: 'Precision rooftop mounting across Maharashtra',
  },
  {
    src: '/images/process/stage-01-survey-rooftop.jpg',
    tag: 'Survey',
    caption: 'High-precision laser survey & shadow analysis',
  },
  {
    src: '/images/process/stage-02-cad-design.jpg',
    tag: 'Engineering',
    caption: 'Custom 3D CAD design & layout simulation',
  },
  {
    src: '/images/process/stage-04-commission-inverter.png',
    tag: 'Technology',
    caption: 'Smart hybrid inverter sync & telemetry setup',
  },
  {
    src: '/images/projects/featured-commercial.jpg',
    tag: 'Commercial',
    caption: 'Commercial rooftop solar landmark project',
  },
  {
    src: '/images/gallery/lucky1.jpg',
    tag: 'Milestone',
    caption: 'Customer commissioning & net-metering handover',
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
          Left: Editorial headline with maroon accent + short paragraph + eyebrow
          Right: Integrated executive founder portrait with seamless right bleed
          Far right: Vertical architectural marker "CLEANER / BRIGHTER / MAHARASHTRA"
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#FAF9F6] border-b border-stone-300/60 overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[520px] lg:min-h-[560px]">

          {/* Left Column (5 cols on xl, 6 on lg) — Editorial Copy */}
          <div className="lg:col-span-6 xl:col-span-5 px-6 sm:px-10 lg:px-14 py-12 sm:py-16 lg:py-18 flex flex-col justify-center">
            <p className="eyebrow text-xs text-stone-500 mb-6 tracking-[0.22em] uppercase">
              ABOUT SOLAR ARK
            </p>

            <h1
              className="hero-display text-[#0B1730] tracking-tight leading-[1.04] mb-6"
              style={{ fontSize: 'clamp(2.4rem, 1.8rem + 2.8vw, 4.5rem)' }}
            >
              Energy that{' '}
              <br />
              works for <span className="text-[#8B1E1E] font-heading font-bold">real life.</span>
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-lg mb-8">
              We design and deliver solar solutions that make clean energy practical,
              reliable and truly beneficial for the spaces people live, work and grow in.
            </p>

            <div className="flex items-center gap-3">
              <div className="w-8 h-[1.5px] bg-stone-300" />
              <span className="text-[11px] font-heading font-semibold text-stone-500 tracking-[0.2em] uppercase">
                ASSURED RENEWABLE KOMFORT
              </span>
            </div>
          </div>

          {/* Right Column (7 cols on xl, 6 on lg) — Full-Bleed Executive Visual */}
          <div className="lg:col-span-6 xl:col-span-7 relative min-h-[380px] sm:min-h-[460px] lg:min-h-full">
            <img
              src="/images/earnwithus/director-shrikant-editorial.jpg"
              alt="SolarArk Founder & Managing Director Shrikant Tikhile"
              className="w-full h-full object-cover object-top sm:object-center"
              loading="eager"
            />
            {/* Elegant Founder Attribution Badge */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-black/65 backdrop-blur-md px-5 py-3 rounded-xl text-white border border-white/10 shadow-lg">
              <p className="text-[10px] font-heading font-semibold text-[#FFB020] uppercase tracking-wider">
                Founder & Managing Director
              </p>
              <p className="text-sm sm:text-base font-heading font-bold text-white mt-0.5">
                Shrikant Tikhile
              </p>
            </div>

            {/* Architectural Stacked Margin Label (Top Right) */}
            <div className="hidden xl:flex absolute right-8 xl:right-12 top-24 flex-col items-start gap-1 pointer-events-none z-20">
              <span className="text-[10px] font-heading font-semibold text-stone-600 tracking-[0.24em] uppercase leading-tight">
                CLEANER
              </span>
              <span className="text-[10px] font-heading font-semibold text-stone-600 tracking-[0.24em] uppercase leading-tight">
                BRIGHTER
              </span>
              <span className="text-[10px] font-heading font-semibold text-stone-600 tracking-[0.24em] uppercase leading-tight">
                MAHARASHTRA
              </span>
              <div className="w-5 h-[1.5px] bg-stone-400 mt-1" />
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 2 — ORIGIN STORY STRIP ("Where it all began")
          Continuous 3-panel panoramic strip with zero dead whitespace:
          Left (55%): Rooftop photo with scrim quote
          Center (30%): White story panel with "Our Journey →"
          Right (15%): Solar sunset visual with vertical label
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#0B1730] text-white overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">

          {/* Panel 1: Left (7 cols on lg, 6 on xl) — Rooftop Photo with Quote */}
          <div className="lg:col-span-7 xl:col-span-6 relative min-h-[340px] sm:min-h-[420px] lg:min-h-[460px]">
            <img
              src="/images/earnwithus/earnwithus-hero-rooftop.jpg"
              alt="SolarArk rooftop solar array overlooking Maharashtra skyline"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-transparent lg:to-black/30" />
            <div className="absolute bottom-8 left-8 sm:bottom-10 sm:left-12 max-w-md border-l-2 border-[#8B1E1E] pl-5">
              <blockquote className="font-heading font-medium text-white text-xl sm:text-2xl lg:text-3xl leading-snug tracking-tight">
                “From Maharashtra,
                <br />
                for a cleaner tomorrow.”
              </blockquote>
            </div>
          </div>

          {/* Panel 2: Center (5 cols on lg, 4 on xl) — Crisp White Story Block */}
          <div className="lg:col-span-5 xl:col-span-4 bg-white text-[#0B1730] px-8 sm:px-12 py-12 sm:py-16 lg:py-20 flex flex-col justify-center">
            <p className="eyebrow text-xs text-stone-500 mb-3 tracking-[0.2em] uppercase">
              OUR STORY
            </p>
            <h2 className="font-heading font-bold text-[#0B1730] text-2xl sm:text-3xl lg:text-[32px] tracking-tight leading-[1.12] mb-4">
              Where it all began.
            </h2>
            <p className="text-sm sm:text-[15px] text-stone-600 leading-relaxed mb-6">
              Solar Ark was founded with a clear purpose — to make renewable energy accessible,
              reliable and relevant for homes, businesses and industries. What began as a small team
              with a big vision has grown into a trusted solar partner for clients across Maharashtra.
            </p>
            <div className="w-8 h-[1.5px] bg-stone-300 mb-6" />
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

          {/* Panel 3: Right (Hidden on lg, 2 cols on xl) — Sunset Visual with Stacked Text */}
          <div className="hidden xl:block xl:col-span-2 relative min-h-[460px]">
            <img
              src="/images/solar-villa-sunset.jpg"
              alt="Solar panels reflecting sunset glow"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute top-8 right-6 flex flex-col items-start gap-1 pointer-events-none z-10">
              <span className="text-[9px] font-heading font-semibold text-white/90 tracking-[0.25em] uppercase leading-tight drop-shadow">
                SAME
              </span>
              <span className="text-[9px] font-heading font-semibold text-white/90 tracking-[0.25em] uppercase leading-tight drop-shadow">
                SPACES
              </span>
              <span className="text-[9px] font-heading font-semibold text-white/90 tracking-[0.25em] uppercase leading-tight drop-shadow">
                NEW
              </span>
              <span className="text-[9px] font-heading font-semibold text-white/90 tracking-[0.25em] uppercase leading-tight drop-shadow">
                POSSIBILITIES
              </span>
              <div className="w-4 h-[1px] bg-white/70 mt-1" />
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 3 — WHAT WE BELIEVE
          Architectural grid with thin 1px vertical dividers:
          Left (8 cols): Top headline + paragraph; Bottom 3 numbered pillars with dividers
          Right (4 cols): Angled sunlit solar panel photo with vertical label
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#FAF9F6] border-b border-stone-300/60 overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">

          {/* Left Column (8 cols) — Editorial Content & Procedural Pillars */}
          <div className="lg:col-span-7 xl:col-span-8 px-6 sm:px-10 lg:px-14 py-12 sm:py-14 lg:py-16 flex flex-col justify-between">

            {/* Top Row: Eyebrow + Headline + Paragraph */}
            <div className="mb-8 lg:mb-10">
              <p className="eyebrow text-xs text-stone-500 mb-3 tracking-[0.2em] uppercase">
                WHAT WE BELIEVE
              </p>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                <div className="md:col-span-7">
                  <h2
                    className="font-heading font-bold text-[#0B1730] tracking-tight leading-[1.08]"
                    style={{ fontSize: 'clamp(1.85rem, 1.4rem + 1.8vw, 3rem)' }}
                  >
                    Good solar is not just technology.
                    <br />
                    It’s <span className="text-[#8B1E1E]">a better tomorrow.</span>
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

            {/* Bottom Row: 3 Numbered Minimal Pillars with Thin 1px Vertical Dividers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 pt-8 border-t border-stone-300/70">
              <div className="sm:pr-6 sm:border-r border-stone-300/70">
                <span className="text-xs font-heading font-bold text-stone-400 block mb-2">01</span>
                <h3 className="font-heading text-lg font-bold text-[#0B1730] tracking-tight mb-2">
                  Thoughtful Design
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                  Solutions designed around real needs.
                </p>
              </div>

              <div className="sm:px-6 sm:border-r border-stone-300/70">
                <span className="text-xs font-heading font-bold text-stone-400 block mb-2">02</span>
                <h3 className="font-heading text-lg font-bold text-[#0B1730] tracking-tight mb-2">
                  Reliable Execution
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                  Quality in every detail.
                </p>
              </div>

              <div className="sm:pl-6">
                <span className="text-xs font-heading font-bold text-stone-400 block mb-2">03</span>
                <h3 className="font-heading text-lg font-bold text-[#0B1730] tracking-tight mb-2">
                  Long-term Support
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                  We stay with you beyond installation.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column (4 cols) — Sunlit Angled Solar Panel Visual */}
          <div className="lg:col-span-5 xl:col-span-4 relative min-h-[360px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-stone-300/60">
            <img
              src="/images/technology-solar-module.jpg"
              alt="High efficiency monocrystalline solar panels basking in sun flare"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            {/* Stacked Margin Label (Bottom Right) */}
            <div className="hidden sm:flex absolute right-6 bottom-8 flex-col items-start gap-1 pointer-events-none z-10">
              <span className="text-[9px] font-heading font-semibold text-white/90 tracking-[0.25em] uppercase leading-tight drop-shadow">
                DIFFERENT
              </span>
              <span className="text-[9px] font-heading font-semibold text-white/90 tracking-[0.25em] uppercase leading-tight drop-shadow">
                SPACES
              </span>
              <span className="text-[9px] font-heading font-semibold text-white/90 tracking-[0.25em] uppercase leading-tight drop-shadow">
                SAME
              </span>
              <span className="text-[9px] font-heading font-semibold text-white/90 tracking-[0.25em] uppercase leading-tight drop-shadow">
                PURPOSE
              </span>
              <div className="w-4 h-[1px] bg-white/70 mt-1" />
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 4 — TEAM BAND ("A team that builds what matters")
          Dark full-width band (#0B1730):
          Left (35%): Eyebrow + Headline + pill CTA
          Right (65%): Panoramic authentic team photo with gradient blend
          Bottom right: Quote overlay “Different perspectives. A shared purpose.”
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#0B1730] text-white overflow-hidden min-h-[400px] lg:min-h-[440px] flex items-center">
        {/* Full-bleed team photo on desktop with seamless left gradient blend */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[65%] h-full">
          <img
            src="/images/gallery/office.jpg"
            alt="SolarARK team members celebrating customer milestone at headquarters"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1730] via-[#0B1730]/75 to-transparent" />
        </div>

        {/* Content Layer */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-12 sm:py-14 lg:py-16 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left 5 cols: Text & Dark Pill CTA */}
            <div className="lg:col-span-5 space-y-6 max-w-md">
              <p className="eyebrow text-xs text-[#E27D16] tracking-[0.2em] uppercase">
                THE PEOPLE BEHIND SOLAR ARK
              </p>
              <h2
                className="font-heading font-bold text-white tracking-tight leading-[1.08]"
                style={{ fontSize: 'clamp(2rem, 1.6rem + 2vw, 3.5rem)' }}
              >
                A team that
                <br />
                builds what
                <br />
                matters.
              </h2>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/gallery')}
                  className="inline-flex items-center gap-2.5 text-sm font-heading font-semibold text-white border border-white/40 hover:border-white hover:bg-white/10 rounded-full px-7 py-3 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1730] group"
                >
                  <span>Meet Our Team</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Mobile & Tablet only: Team image stacked cleanly below text */}
            <div className="lg:hidden relative h-[260px] sm:h-[340px] rounded-xl overflow-hidden shadow-lg mt-4">
              <img
                src="/images/gallery/office.jpg"
                alt="SolarARK team members celebrating customer milestone at headquarters"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 max-w-[240px] text-right">
                <p className="font-heading italic text-stone-200 text-xs sm:text-sm leading-snug">
                  “Different perspectives.{' '}
                  <span className="text-white font-semibold not-italic">A shared purpose.</span>”
                </p>
              </div>
            </div>

            {/* Desktop only: Quote badge overlay */}
            <div className="hidden lg:flex lg:col-span-7 justify-end items-end h-[300px]">
              <div className="max-w-[260px] text-right z-20">
                <p className="font-heading italic text-stone-200 text-sm leading-snug drop-shadow-md">
                  “Different perspectives.{' '}
                  <span className="text-white font-semibold not-italic">A shared purpose.</span>”
                </p>
                <div className="w-6 h-[1.5px] bg-white/40 ml-auto mt-3" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 5 — PROCESS BAND ("How We Work")
          Clean architectural procedural rail:
          Left (25%): Eyebrow + Headline + circle arrow button
          Middle (60%): 4 columns separated by 1px vertical divider lines with accent dash
          Right (15%): Vertical label "A SMOOTHER / CLEANER / BRIGHTER / TOMORROW"
          ════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF9F6] border-b border-stone-300/60 py-8 sm:py-10 lg:py-11">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-stretch">

            {/* Left 3 cols: Intro + Inline Circle Button */}
            <div className="lg:col-span-4 xl:col-span-3 lg:pr-8 flex flex-col justify-center">
              <p className="eyebrow text-xs text-stone-500 mb-2 tracking-[0.2em] uppercase">
                HOW WE WORK
              </p>
              <div className="flex items-end gap-3 sm:gap-4">
                <h2 className="font-heading font-bold text-[#0B1730] text-2xl sm:text-[26px] lg:text-[28px] tracking-tight leading-[1.12]">
                  From understanding
                  <br />
                  to lasting impact.
                </h2>
                <button
                  onClick={onCtaClick}
                  className="shrink-0 w-9 h-9 rounded-full border border-stone-400 hover:border-[#8B1E1E] hover:bg-[#8B1E1E] hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer group mb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]"
                  aria-label="Get Started"
                >
                  <ArrowRight className="w-4 h-4 text-stone-700 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </button>
              </div>
            </div>

            {/* Middle 7 cols: 4 Procedural Columns Separated by 1px Vertical Dividers */}
            <div className="lg:col-span-6 xl:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 items-stretch">
              {[
                { num: '01', title: 'Understand the Site' },
                { num: '02', title: 'Design the System' },
                { num: '03', title: 'Execute Professionally' },
                { num: '04', title: 'Support Long-term' },
              ].map((step, idx) => (
                <div
                  key={step.num}
                  className={`flex flex-col justify-between sm:px-5 lg:px-6 py-1 ${
                    idx !== 0 ? 'sm:border-l border-stone-300/70' : ''
                  }`}
                >
                  <div>
                    <span className="text-xs font-heading font-bold text-stone-400 block mb-2">
                      {step.num}
                    </span>
                    <h3 className="font-heading text-sm sm:text-[15px] lg:text-base font-bold text-[#0B1730] tracking-tight leading-snug">
                      {step.title}
                    </h3>
                  </div>
                  <div className="w-6 h-[2px] bg-stone-300 mt-4" />
                </div>
              ))}
            </div>

            {/* Right 2 cols: Stacked Marker */}
            <div className="hidden xl:flex xl:col-span-2 lg:pl-8 lg:border-l border-stone-300/70 flex-col justify-center items-start gap-1 pointer-events-none">
              <span className="text-[9px] font-heading font-semibold text-stone-400 tracking-[0.24em] uppercase leading-tight">
                A SMOOTHER
              </span>
              <span className="text-[9px] font-heading font-semibold text-stone-400 tracking-[0.24em] uppercase leading-tight">
                CLEANER
              </span>
              <span className="text-[9px] font-heading font-semibold text-stone-400 tracking-[0.24em] uppercase leading-tight">
                BRIGHTER
              </span>
              <span className="text-[9px] font-heading font-semibold text-stone-400 tracking-[0.24em] uppercase leading-tight">
                TOMORROW
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 6 — JOURNEY GALLERY ("Behind Every Installation")
          Top row: Eyebrow + Headline + A GLIMPSE INTO OUR JOURNEY ( ← ) ( → )
          Bottom: Seamless 6-photo photojournalistic contact strip spanning full width
          ════════════════════════════════════════════════════════════════ */}
      <section id="journey-gallery" className="bg-[#FAF9F6] pt-8 pb-10 sm:pt-9 sm:pb-12 scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">

          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4 sm:mb-5">
            <div>
              <p className="eyebrow text-xs text-stone-500 mb-1.5 tracking-[0.2em] uppercase">
                BEHIND EVERY INSTALLATION
              </p>
              <h2 className="font-heading font-bold text-[#0B1730] text-2xl sm:text-3xl lg:text-[32px] tracking-tight leading-[1.12]">
                Real people. Real progress.
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] font-heading font-semibold text-stone-400 tracking-[0.18em] uppercase hidden sm:block">
                A GLIMPSE INTO OUR JOURNEY
              </span>
              <div className="flex items-center gap-1.5 lg:hidden">
                <button
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className="w-9 h-9 rounded-full border border-stone-400 hover:border-stone-700 disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]"
                  aria-label="Scroll gallery left"
                >
                  <ChevronLeft className="w-4 h-4 text-stone-700" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className="w-9 h-9 rounded-full border border-stone-400 hover:border-stone-700 disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]"
                  aria-label="Scroll gallery right"
                >
                  <ChevronRight className="w-4 h-4 text-stone-700" />
                </button>
              </div>
            </div>
          </div>

          {/* 6-Photo Contact Strip: 6-Col Grid on Desktop, Smooth Snap-Scroll on Mobile */}
          <div
            ref={scrollRef}
            className="flex gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory lg:grid lg:grid-cols-6 lg:overflow-visible pb-2 lg:pb-0"
          >
            {journeyPhotos.map((photo, idx) => (
              <div
                key={idx}
                className="shrink-0 w-[220px] sm:w-[260px] lg:w-auto lg:shrink snap-start group cursor-pointer"
              >
                <div className="overflow-hidden bg-stone-200 aspect-[4/3]">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 7 — BOTTOM CTA ("Building a cleaner future, together.")
          Warm photographic sunset landscape background
          Left: Display heading
          Right: Dual pill buttons (Maroon fill + warm outline)
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative py-12 sm:py-14 lg:py-16 overflow-hidden">
        {/* Photographic Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/solar-villa-sunset.jpg"
            alt="Maharashtra solar landscape at sunset"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[#D4AF37]/25 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/75 to-stone-900/60" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
            <div className="md:w-7/12">
              <h2
                className="font-heading font-bold text-white tracking-tight leading-[1.08]"
                style={{ fontSize: 'clamp(2rem, 1.6rem + 2vw, 3.5rem)' }}
              >
                Building a cleaner future,
                <br />
                together.
              </h2>
            </div>
            <div className="md:w-5/12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-end w-full">
              <button
                onClick={() => onNavigate('/projects')}
                className="inline-flex items-center justify-center gap-2 text-sm font-heading font-semibold text-white bg-[#8B1E1E] hover:bg-[#A82424] rounded-full px-8 py-3.5 transition-all duration-300 cursor-pointer shadow-md group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Explore Our Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={onCtaClick}
                className="inline-flex items-center justify-center gap-2 text-sm font-heading font-semibold text-[#1F1914] bg-[#E8DCCB]/90 hover:bg-[#F2E8DA] border border-[#D5C6B1] rounded-full px-8 py-3.5 transition-all duration-300 cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
