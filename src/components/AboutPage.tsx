/**
 * AboutPage — High-Fidelity Editorial About Page for SolarArk Projects Pvt. Ltd.
 *
 * Mobile-First Responsive Refinements:
 * - Single-column stacked layouts at <= 767px with comfortable margins (px-4/px-5).
 * - Body text 16px/18px with relaxed line-height; headlines scale down gracefully.
 * - Minimum 44px touch targets on all interactive CTAs and links.
 * - Belief pillars convert into a clean vertical list with subtle separators on mobile.
 * - 4-step process band converts into a clear vertical stack with circular badges & 1-line descriptions.
 * - Desktop 12-column grid, thin procedural dividers, and full-bleed visual layouts 100% preserved.
 *
 * @license SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Compass, Cpu, Wrench, ShieldCheck } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
  prefilledPincode?: string;
  prefilledBill?: number;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onCtaClick,
}) => {

  return (
    <div
      className="min-h-screen bg-[#F7F5F0] text-[#151817] overflow-x-hidden selection:bg-[#7A211D] selection:text-white font-body"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content="SolarArk Projects Pvt. Ltd." />
      <meta itemProp="url" content="https://www.thesolarark.com/about" />

      {/* ════════════════════════════════════════════════════════════════
          BAND 1 — HERO BAND
          Left: Editorial headline with maroon accent + short paragraph + eyebrow
          Right: Integrated executive founder portrait with seamless right bleed
          Mobile: Stacked single column with clean margins and breathable padding
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#F7F5F0] border-b border-[#E6E3DD] overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-0 lg:min-h-[560px]">

          {/* Left Column (5 cols on xl, 6 on lg) — Editorial Copy */}
          <div className="lg:col-span-6 xl:col-span-5 px-5 sm:px-10 lg:px-14 py-8 sm:py-16 lg:py-18 flex flex-col justify-center">
            <p className="eyebrow text-xs text-[#6C6C68] mb-4 sm:mb-6 tracking-[0.18em] uppercase font-medium">
              ABOUT SOLAR ARK
            </p>

            <h1
              className="hero-display font-heading font-medium text-[#151817] tracking-tight leading-[1.05] mb-4 sm:mb-6"
              style={{ fontSize: 'clamp(2.1rem, 1.6rem + 2.4vw, 4.5rem)' }}
            >
              Energy that{' '}
              <br />
              works for <span className="word-accent-subtle font-heading font-medium">real life.</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#6C6C68] font-normal leading-relaxed max-w-lg mb-6 sm:mb-8 font-body">
              We design and deliver solar solutions that make clean energy practical,
              reliable and truly beneficial for the spaces people live, work and grow in.
            </p>

            <div className="flex items-center gap-3">
              <div className="w-8 h-[1.5px] bg-[#E6E3DD]" />
              <span className="text-[10.5px] sm:text-[11px] font-heading font-medium text-[#6C6C68] tracking-[0.18em] uppercase">
                ASSURED RENEWABLE KOMFORT
              </span>
            </div>
          </div>

          {/* Right Column (7 cols on xl, 6 on lg) — Full-Bleed Executive Visual */}
          <div className="lg:col-span-6 xl:col-span-7 relative h-[300px] sm:h-[440px] lg:h-full min-h-[300px] sm:min-h-[440px] lg:min-h-full">
            <img
              src="/images/earnwithus/director-shrikant-editorial.jpg"
              alt="SolarArk Founder & Managing Director Shrikant Tikhile"
              className="w-full h-full object-cover object-top sm:object-center"
              loading="eager"
            />
            {/* Elegant Founder Attribution Badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-black/70 backdrop-blur-md px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-white border border-white/10 shadow-lg">
              <p className="text-[10px] font-heading font-medium text-[#FFB020] uppercase tracking-wider">
                Founder & Managing Director
              </p>
              <p className="text-sm sm:text-base font-heading font-semibold text-white mt-0.5">
                Shrikant Tikhile
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 2 — ORIGIN STORY STRIP ("Where it all began")
          Continuous panoramic strip:
          Left (55%): Rooftop photo with quote
          Center (30%): White story panel with "View Our Projects →"
          Mobile: Clean vertical stack with zero overlapping cards
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#151817] text-white overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">

          {/* Panel 1: Left (7 cols on lg, 6 on xl) — Rooftop Photo with Quote */}
          <div className="lg:col-span-7 xl:col-span-6 relative h-[260px] sm:h-[380px] lg:h-auto min-h-[260px] sm:min-h-[380px] lg:min-h-[460px]">
            <img
              src="/images/earnwithus/earnwithus-hero-rooftop.jpg"
              alt="SolarArk rooftop solar array overlooking Maharashtra skyline"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-transparent lg:to-black/30" />
            <div className="absolute bottom-6 left-5 sm:bottom-10 sm:left-12 max-w-md border-l-2 border-[#7A211D] pl-4 sm:pl-5">
              <blockquote className="font-heading font-medium text-white text-lg sm:text-2xl lg:text-3xl leading-snug tracking-tight">
                “From Maharashtra,
                <br />
                for a cleaner tomorrow.”
              </blockquote>
            </div>
          </div>

          {/* Panel 2: Center (5 cols on lg, 4 on xl) — Warm Ivory Story Block */}
          <div className="lg:col-span-5 xl:col-span-4 bg-[#F7F5F0] text-[#151817] px-5 sm:px-12 py-8 sm:py-16 lg:py-20 flex flex-col justify-center">
            <p className="eyebrow text-xs text-[#6C6C68] mb-2 sm:mb-3 tracking-[0.18em] uppercase font-medium">
              OUR STORY
            </p>
            <h2 className="font-heading font-medium text-[#151817] text-2xl sm:text-3xl lg:text-[32px] tracking-tight leading-[1.12] mb-3 sm:mb-4">
              Where it all began.
            </h2>
            <p className="text-sm sm:text-[15px] text-[#6C6C68] font-normal leading-relaxed mb-5 sm:mb-6 font-body">
              Solar Ark was founded with a clear purpose — to make renewable energy accessible,
              reliable and relevant for homes, businesses and industries. What began as a small team
              with a big vision has grown into a trusted solar partner for clients across Maharashtra.
            </p>
            <div className="w-8 h-[1.5px] bg-[#E6E3DD] mb-5 sm:mb-6" />
            <div>
              <button
                onClick={() => onNavigate('/projects')}
                className="inline-flex items-center gap-2 min-h-[44px] py-2 px-1 text-sm font-body font-medium text-[#7A211D] hover:text-[#9A2D28] transition-colors cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A211D]"
              >
                <span>View Our Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Panel 3: Right (Hidden on lg, 2 cols on xl) — Clean Sunset Visual */}
          <div className="hidden xl:block xl:col-span-2 relative min-h-[460px]">
            <img
              src="/images/solar-villa-sunset.jpg"
              alt="Solar panels reflecting sunset glow"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 3 — WHAT WE BELIEVE (3 PILLARS)
          Left: Top headline + paragraph; Bottom 3 numbered pillars
          Mobile: Vertical list with subtle dividers between pillars
          Right: Sunlit angled solar module visual
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#F7F5F0] border-b border-[#E6E3DD] overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">

          {/* Left Column (8 cols) — Editorial Content & Procedural Pillars */}
          <div className="lg:col-span-7 xl:col-span-8 px-5 sm:px-10 lg:px-14 py-8 sm:py-14 lg:py-16 flex flex-col justify-between">

            {/* Top Row: Eyebrow + Headline + Paragraph */}
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <p className="eyebrow text-xs text-[#6C6C68] mb-2 sm:mb-3 tracking-[0.18em] uppercase font-medium">
                WHAT WE BELIEVE
              </p>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-10 items-start">
                <div className="md:col-span-7">
                  <h2
                    className="font-heading font-medium text-[#151817] tracking-tight leading-[1.08]"
                    style={{ fontSize: 'clamp(1.75rem, 1.4rem + 1.8vw, 3rem)' }}
                  >
                    Good solar is not just technology.
                    <br />
                    It’s <span className="word-accent-subtle font-medium">a better tomorrow.</span>
                  </h2>
                </div>
                <div className="md:col-span-5">
                  <p className="text-sm sm:text-base text-[#6C6C68] font-normal leading-relaxed font-body">
                    Every space is different. Every energy need is unique. We believe in thoughtful
                    design, reliable execution and long-term support — because real progress comes
                    from solutions that truly fit your world.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row: 3 Numbered Minimal Pillars (Vertical list on mobile, 3-col on sm+) */}
            <div className="flex flex-col sm:grid sm:grid-cols-3 divide-y sm:divide-y-0 divide-[#E6E3DD] pt-6 sm:pt-8 border-t border-[#E6E3DD]">
              <div className="pb-5 sm:pb-0 sm:pr-6 sm:border-r border-[#E6E3DD]">
                <span className="text-xs font-heading font-medium text-[#7A211D] sm:text-[#6C6C68] block mb-1 sm:mb-2">01</span>
                <h3 className="font-heading text-base sm:text-lg font-medium text-[#151817] tracking-tight mb-1 sm:mb-2">
                  Thoughtful Design
                </h3>
                <p className="text-xs sm:text-sm text-[#6C6C68] leading-relaxed font-body">
                  Solutions designed around real spaces and unique energy patterns.
                </p>
              </div>

              <div className="py-5 sm:py-0 sm:px-6 sm:border-r border-[#E6E3DD]">
                <span className="text-xs font-heading font-medium text-[#7A211D] sm:text-[#6C6C68] block mb-1 sm:mb-2">02</span>
                <h3 className="font-heading text-base sm:text-lg font-medium text-[#151817] tracking-tight mb-1 sm:mb-2">
                  Reliable Execution
                </h3>
                <p className="text-xs sm:text-sm text-[#6C6C68] leading-relaxed font-body">
                  In-house Maharashtra engineering with zero compromise on safety.
                </p>
              </div>

              <div className="pt-5 sm:pt-0 sm:pl-6">
                <span className="text-xs font-heading font-medium text-[#7A211D] sm:text-[#6C6C68] block mb-1 sm:mb-2">03</span>
                <h3 className="font-heading text-base sm:text-lg font-medium text-[#151817] tracking-tight mb-1 sm:mb-2">
                  Long-term Support
                </h3>
                <p className="text-xs sm:text-sm text-[#6C6C68] leading-relaxed font-body">
                  We stay with you through net-metering and 25-year performance.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column (4 cols) — Sunlit Angled Solar Panel Visual */}
          <div className="lg:col-span-5 xl:col-span-4 relative h-[220px] sm:h-[300px] lg:h-auto min-h-[220px] sm:min-h-[300px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-[#E6E3DD]">
            <img
              src="/images/technology-solar-module.jpg"
              alt="High efficiency monocrystalline solar panels basking in sun flare"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            {/* Stacked Margin Label (Bottom Right) */}
            <div className="hidden sm:flex absolute right-6 bottom-8 flex-col items-start gap-1 pointer-events-none z-10">
              <span className="text-[9px] font-heading font-medium text-white/90 tracking-[0.25em] uppercase leading-tight drop-shadow">
                DIFFERENT
              </span>
              <span className="text-[9px] font-heading font-medium text-white/90 tracking-[0.25em] uppercase leading-tight drop-shadow">
                SPACES
              </span>
              <span className="text-[9px] font-heading font-medium text-white/90 tracking-[0.25em] uppercase leading-tight drop-shadow">
                SAME
              </span>
              <span className="text-[9px] font-heading font-medium text-white/90 tracking-[0.25em] uppercase leading-tight drop-shadow">
                PURPOSE
              </span>
              <div className="w-4 h-[1px] bg-white/70 mt-1" />
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 4 — TEAM BAND ("A team that builds what matters")
          Dark full-width band (#151817):
          Mobile: Text above team photo, full-width thumb-friendly button
          Desktop: 65% photo width with left gradient blend
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#151817] text-white overflow-hidden min-h-[400px] lg:min-h-[440px] flex items-center">
        {/* Full-bleed team photo on desktop with seamless left gradient blend */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[65%] h-full">
          <img
            src="/images/gallery/office.jpg"
            alt="SolarARK team members celebrating customer milestone at headquarters"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#151817] via-[#151817]/75 to-transparent" />
        </div>

        {/* Content Layer */}
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-14 py-8 sm:py-14 lg:py-16 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">

            {/* Left 5 cols: Text & Dark Pill CTA */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6 max-w-md">
              <p className="eyebrow text-xs text-[#FFB020] tracking-[0.18em] uppercase font-medium">
                THE PEOPLE BEHIND SOLAR ARK
              </p>
              <h2
                className="font-heading font-medium text-white tracking-tight leading-[1.08]"
                style={{ fontSize: 'clamp(2rem, 1.6rem + 2vw, 3.5rem)' }}
              >
                A team that
                <br />
                builds what
                <br />
                matters.
              </h2>
              
              {/* Mobile only: Team image stacked cleanly between text & CTA */}
              <div className="lg:hidden relative h-[220px] sm:h-[320px] w-full rounded-xl overflow-hidden shadow-lg my-2">
                <img
                  src="/images/gallery/office.jpg"
                  alt="SolarARK team members celebrating customer milestone at headquarters"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151817]/90 via-[#151817]/30 to-transparent" />
                <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 max-w-[240px] text-right">
                  <p className="font-heading italic text-stone-200 text-xs sm:text-sm leading-snug">
                    “Different perspectives.{' '}
                    <span className="text-white font-medium not-italic">A shared purpose.</span>”
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/gallery')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-sm font-body font-medium text-white border border-white/40 hover:border-white hover:bg-white/10 rounded-[14px] px-7 py-3.5 min-h-[48px] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#151817] group"
                >
                  <span>Meet Our Team</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Desktop only: Quote badge overlay */}
            <div className="hidden lg:flex lg:col-span-7 justify-end items-end h-[300px]">
              <div className="max-w-[260px] text-right z-20">
                <p className="font-heading italic text-stone-200 text-sm leading-snug drop-shadow-md">
                  “Different perspectives.{' '}
                  <span className="text-white font-medium not-italic">A shared purpose.</span>”
                </p>
                <div className="w-6 h-[1.5px] bg-white/40 ml-auto mt-3" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 5 — PROCESS BAND ("How We Work")
          Mobile: Clean vertical stack with numbered badges & 1-line descriptions
          Desktop: 4 columns separated by 1px vertical hairline dividers
          ════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F7F5F0] border-b border-[#E6E3DD] py-8 sm:py-10 lg:py-11">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-0 items-stretch">

            {/* Left 3 cols: Intro + Inline Circle Button */}
            <div className="lg:col-span-4 xl:col-span-3 lg:pr-8 flex flex-col justify-center mb-2 lg:mb-0">
              <p className="eyebrow text-xs text-[#6C6C68] mb-2 tracking-[0.18em] uppercase font-medium">
                HOW WE WORK
              </p>
              <div className="flex items-center justify-between sm:justify-start gap-3 sm:gap-4">
                <h2 className="font-heading font-medium text-[#151817] text-2xl sm:text-[26px] lg:text-[28px] tracking-tight leading-[1.12]">
                  From understanding
                  <br />
                  to lasting impact.
                </h2>
                <button
                  onClick={onCtaClick}
                  className="shrink-0 w-11 h-11 sm:w-9 sm:h-9 rounded-full border border-[#6C6C68]/40 hover:border-[#7A211D] hover:bg-[#7A211D] hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A211D]"
                  aria-label="Get Started"
                >
                  <ArrowRight className="w-4 h-4 text-[#151817] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </button>
              </div>
            </div>

            {/* 4 Procedural Columns (Vertical stack on mobile, 4-cols on sm+) */}
            <div className="lg:col-span-8 xl:col-span-9 flex flex-col sm:grid sm:grid-cols-4 gap-3 sm:gap-0 items-stretch">
              {[
                { 
                  num: '01', 
                  title: 'Understand the Site',
                  desc: 'Comprehensive on-site survey & solar irradiance analysis.',
                  icon: Compass
                },
                { 
                  num: '02', 
                  title: 'Design the System',
                  desc: 'Custom 3D CAD modeling tailored for maximum rooftop yield.',
                  icon: Cpu
                },
                { 
                  num: '03', 
                  title: 'Execute Professionally',
                  desc: 'Precision installation with Tier-1 components and safety compliance.',
                  icon: Wrench
                },
                { 
                  num: '04', 
                  title: 'Support Long-term',
                  desc: 'DISCOM liaison, net-metering & 25-year performance assurance.',
                  icon: ShieldCheck
                },
              ].map((step, idx) => (
                <div
                  key={step.num}
                  className={`flex items-start sm:flex-col justify-between p-3.5 sm:p-0 sm:px-5 lg:px-6 py-1 bg-white sm:bg-transparent rounded-xl sm:rounded-none border border-[#E6E3DD] sm:border-0 shadow-2xs sm:shadow-none ${
                    idx !== 0 ? 'sm:border-l sm:border-[#E6E3DD]' : ''
                  }`}
                >
                  <div className="flex items-start gap-3 sm:block">
                    <div className="w-8 h-8 rounded-full bg-[#7A211D]/10 text-[#7A211D] flex items-center justify-center shrink-0 font-heading font-medium text-xs sm:hidden">
                      {step.num}
                    </div>
                    <div>
                      <span className="hidden sm:block text-xs font-heading font-medium text-[#6C6C68] mb-2">
                        {step.num}
                      </span>
                      <h3 className="font-heading text-sm sm:text-[15px] lg:text-base font-medium text-[#151817] tracking-tight leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#6C6C68] mt-1 leading-relaxed sm:hidden font-body">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block w-6 h-[2px] bg-[#E6E3DD] mt-4" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAND 7 — BOTTOM CTA ("Building a cleaner future, together.")
          Warm photographic sunset landscape background
          Left: Display heading
          Right: Dual pill buttons (Maroon fill + warm outline)
          Mobile: Full-width stacked buttons with 48px tap targets
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative py-10 sm:py-14 lg:py-16 overflow-hidden">
        {/* Photographic Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/solar-villa-sunset.jpg"
            alt="Maharashtra solar landscape at sunset"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[#D4AF37]/25 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-900/85 to-stone-900/75" />
        </div>

        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-14 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 md:gap-12">
            <div className="w-full md:w-7/12">
              <h2
                className="font-heading font-medium text-white tracking-tight leading-[1.08]"
                style={{ fontSize: 'clamp(1.85rem, 1.5rem + 2vw, 3.5rem)' }}
              >
                Building a cleaner future,
                <br />
                together.
              </h2>
            </div>
            <div className="w-full md:w-5/12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 justify-end">
              <button
                onClick={() => onNavigate('/projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-body font-medium text-white bg-[#7A211D] hover:bg-[#631B18] rounded-[14px] px-8 py-3.5 min-h-[48px] transition-all duration-300 cursor-pointer shadow-md group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Explore Our Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-body font-medium text-[#151817] bg-[#E8DCCB]/90 hover:bg-[#F2E8DA] border border-[#D5C6B1] rounded-[14px] px-8 py-3.5 min-h-[48px] transition-all duration-300 cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
