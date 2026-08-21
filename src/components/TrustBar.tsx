/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect, useMemo } from 'react';

export const TrustBar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  const storyStages = useMemo(() => [
    {
      tag: 'THE POTENTIAL',
      title: 'Your rooftop holds untapped energy.',
      desc: 'Transform unused terrace space into a personal power source.',
    },
    {
      tag: 'THE TECHNOLOGY',
      title: 'Engineered for long-term yield.',
      desc: 'Tier-1 monocrystalline panels optimized for Indian sunlight.',
    },
    {
      tag: 'THE SAVINGS',
      title: 'Turn sunlight into savings.',
      desc: 'Net-metering feeds excess energy back to slash your bills.',
    },
    {
      tag: 'THE PROMISE',
      title: 'SolarARK handles the journey.',
      desc: 'From roof analysis to permits, installation, and maintenance.',
    },
  ], []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mq.matches);

    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activeStage = Math.min(3, Math.floor(scrollProgress * 4));
  const stageLocal = (scrollProgress * 4) - activeStage;

  // Solar overlay dissolve: empty rooftop → solar panels
  const solarOpacity = isReducedMotion
    ? (activeStage > 0 ? 1 : 0)
    : Math.max(0, Math.min(1, (scrollProgress - 0.10) * 3.0));

  // Subtle parallax: slow scale + gentle vertical drift
  const imgScale = isReducedMotion ? 1 : 1 + scrollProgress * 0.06;
  const imgTranslateY = isReducedMotion ? 0 : scrollProgress * -16;

  // Top atmospheric fade: starts strong (connecting to Hero's white),
  // gradually diminishes as user scrolls deeper into the story
  const topFadeOpacity = isReducedMotion ? 0 : Math.max(0, 1 - scrollProgress * 3);

  // Text crossfade between stages
  const textOpacity = isReducedMotion
    ? 1
    : stageLocal < 0.12
      ? Math.min(1, stageLocal / 0.12)
      : stageLocal > 0.88
        ? Math.max(0, (1 - stageLocal) / 0.12)
        : 1;

  const textTranslateY = isReducedMotion
    ? 0
    : stageLocal < 0.12
      ? 14 * (1 - stageLocal / 0.12)
      : stageLocal > 0.88
        ? -14 * ((stageLocal - 0.88) / 0.12)
        : 0;

  const stage = storyStages[activeStage];

  // Progress line segment positions
  const progressFraction = scrollProgress;

  return (
    <>
      {/* ── Independent Off-White Section Handoff ──
           Provides a clean, solid, architectural section foundation directly following the Hero.
           Prevents full-bleed photographic image collision between Hero and scroll story. ── */}
      <section className="bg-[#F8FAFC] py-10 sm:py-12 px-6 sm:px-12 border-b border-slate-200/60 relative z-10">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#8B1E1E] uppercase font-heading">
              Rooftop Transformation
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-heading">
              See How SolarARK Turns Sunlight Into Monthly Savings
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-medium">
            Scroll down to explore how unused residential terrace space is transformed into a clean, long-term power generation system.
          </p>
        </div>
      </section>

      {/* ── Cinematic Scroll Story Section ── */}
      <section
        ref={containerRef}
        className={`relative ${isReducedMotion ? '' : 'h-[320vh]'}`}
      >
        {/* ── Sticky Cinematic Viewport ── */}
        <div
          className={`${
            isReducedMotion ? 'relative' : 'sticky top-0'
          } w-full overflow-hidden`}
          style={{ height: isReducedMotion ? 'auto' : '100vh' }}
        >
          {/* ── Full-Bleed Photographic Canvas ── */}
          <div className="absolute inset-0">
            {/* Base: Empty Rooftop (Stage 01) */}
            <img
              src="/images/story-empty-rooftop.jpg"
              alt="Empty modern Indian residential terrace at golden hour"
              className="w-full h-full object-cover will-change-transform"
              style={{
                transform: `scale(${imgScale}) translateY(${imgTranslateY}px)`,
                transition: isReducedMotion ? 'none' : 'transform 0.08s linear',
              }}
              loading="eager"
            />

            {/* Dissolve: Solar Installation (Stage 02+) */}
            <img
              src="/images/story-solar-rooftop.jpg"
              alt="Solar panels installed on the same rooftop terrace"
              className="absolute inset-0 w-full h-full object-cover will-change-[opacity,transform]"
              style={{
                opacity: solarOpacity,
                transform: `scale(${imgScale}) translateY(${imgTranslateY}px)`,
                transition: isReducedMotion ? 'none' : 'transform 0.08s linear, opacity 0.25s ease-out',
              }}
              loading="eager"
            />
          </div>

          {/* ── Localized Text Readability Gradient (bottom-left only) ── */}
          {/* Restrained — only behind text area, preserving image vividness elsewhere */}
          <div
            className="absolute inset-0 pointer-events-none z-[2]"
            style={{
              background: `
                radial-gradient(
                  ellipse 55% 50% at 12% 92%,
                  rgba(0,0,0,0.58) 0%,
                  rgba(0,0,0,0.30) 40%,
                  transparent 100%
                )
              `,
            }}
          />

          {/* ── Editorial Text — bottom-left, within image's natural composition ── */}
          <div
            className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
            style={{ paddingBottom: 'clamp(80px, 12vh, 140px)' }}
          >
            <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
              <div
                className="max-w-md lg:max-w-lg"
                style={{
                  opacity: textOpacity,
                  transform: `translateY(${textTranslateY}px)`,
                  transition: isReducedMotion ? 'none' : 'opacity 0.2s ease-out, transform 0.2s ease-out',
                }}
              >
                {/* Stage number + eyebrow */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-[13px] lg:text-[14px] font-bold tabular-nums"
                    style={{
                      color: 'rgba(255,255,255,0.40)',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {String(activeStage + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase"
                    style={{
                      color: 'rgba(255,255,255,0.50)',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {stage.tag}
                  </span>
                </div>

                {/* Headline */}
                <h2
                  className="text-[22px] sm:text-[28px] lg:text-[36px] font-bold text-white leading-[1.15] tracking-tight mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {stage.title}
                </h2>

                {/* One sentence */}
                <p
                  className="text-[13px] sm:text-[14px] leading-relaxed max-w-xs lg:max-w-sm"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                >
                  {stage.desc}
                </p>
              </div>
            </div>
          </div>

          {/* ── Editorial Chapter Progress Line ── */}
          {/* 01 ━━━━━ 02 ───── 03 ───── 04 */}
          <div
            className="absolute z-20 pointer-events-none"
            style={{
              bottom: 'clamp(24px, 4vh, 48px)',
              right: 'clamp(24px, 3vw, 64px)',
            }}
          >
            <div className="flex items-center gap-0">
              {storyStages.map((_, idx) => {
                const isActive = idx === activeStage;
                const isPast = idx < activeStage;
                const isLast = idx === storyStages.length - 1;

                // Segment fill: past = full, active = proportional, future = empty
                const segmentFill = isPast
                  ? 1
                  : isActive
                    ? stageLocal
                    : 0;

                return (
                  <React.Fragment key={idx}>
                    {/* Chapter number */}
                    <span
                      className="text-[10px] sm:text-[11px] font-bold tabular-nums transition-colors duration-300"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        color: isActive || isPast
                          ? 'rgba(255,255,255,0.70)'
                          : 'rgba(255,255,255,0.25)',
                      }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    {/* Connecting line segment (not after last) */}
                    {!isLast && (
                      <div
                        className="relative mx-1.5 sm:mx-2"
                        style={{
                          width: 'clamp(28px, 4vw, 56px)',
                          height: '1px',
                        }}
                      >
                        {/* Background track */}
                        <div
                          className="absolute inset-0"
                          style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
                        />
                        {/* Active fill */}
                        <div
                          className="absolute top-0 left-0 h-full"
                          style={{
                            width: `${segmentFill * 100}%`,
                            backgroundColor: 'rgba(255,255,255,0.55)',
                            transition: isReducedMotion ? 'none' : 'width 0.1s linear',
                          }}
                        />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
