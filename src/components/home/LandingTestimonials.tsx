/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { 
  Star, 
  Play, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  TrendingDown,
} from 'lucide-react';

interface TestimonialStory {
  id: string;
  tabLabel: string;
  category: 'Residential' | 'Villa' | 'Housing Society' | 'Commercial';
  author: string;
  role: string;
  city: string;
  systemSizeKw: number;
  systemType: string;
  beforeBill: number;
  afterBill: number;
  percentSaved: number;
  quote: string;
  highlight: string;
  videoSrc?: string;
  posterSrc?: string;
  hasVideo: boolean;
}

const STORIES: TestimonialStory[] = [
  {
    id: 'amravati-canopy',
    tabLabel: '01. Residential Canopy · Amravati',
    category: 'Residential',
    author: 'Rajesh & Meera Patil',
    role: 'Homeowner',
    city: 'Amravati (HQ), Maharashtra',
    systemSizeKw: 5.2,
    systemType: 'Elevated Rooftop Canopy Structure',
    beforeBill: 12000,
    afterBill: 950,
    percentSaved: 92,
    highlight: 'Full Terrace Utilization & 92% Bill Slash',
    quote: 'SolarArk made our solar transition completely seamless. The elevated canopy preserved our entire terrace garden while cutting our monthly electric bill from ₹12,000 to under ₹1,000. The ₹78,000 PM Surya Ghar subsidy was credited directly to our bank account without any bureaucratic hassles.',
    videoSrc: '/videos/client-testimonial-web.mp4',
    posterSrc: '/images/client-video-poster.jpg',
    hasVideo: true,
  },
  {
    id: 'sambhajinagar-villa',
    tabLabel: '02. Private Villa · Chh. Sambhajinagar',
    category: 'Villa',
    author: 'Advocate Nitin Gaikwad',
    role: 'Villa Owner',
    city: 'Chh. Sambhajinagar, Maharashtra',
    systemSizeKw: 3.3,
    systemType: 'Mono PERC Tier-1 Residential Grid',
    beforeBill: 8500,
    afterBill: 680,
    percentSaved: 92,
    highlight: 'High-Wind Structural Integrity & Live App Sync',
    quote: 'The structural engineering and elevated terrace framing exceeded my expectations. Even in heavy monsoon winds, the galvanized framework is rock solid. Real-time generation tracking on my phone gives me total visibility into daily unit exports.',
    videoSrc: '/videos/client-testimonial-web.mp4',
    posterSrc: '/images/homeowner-family-stories.jpg',
    hasVideo: true,
  },
  {
    id: 'wardha-society',
    tabLabel: '03. Housing Society · Wardha',
    category: 'Housing Society',
    author: 'Prathamesh Co-op Housing Society',
    role: 'Managing Committee (48 Flats)',
    city: 'Wardha, Maharashtra',
    systemSizeKw: 15.0,
    systemType: 'Centralized Common-Meter Array',
    beforeBill: 34000,
    afterBill: 4200,
    percentSaved: 88,
    highlight: 'Common Utility Lifts & Pumps Powered 100% Green',
    quote: 'Powering our common elevators, basement water pumps, and campus security lighting with solar has drastically lowered quarterly society maintenance dues for all 48 member families. SolarArk handled DISCOM liaison with zero friction.',
    videoSrc: '/videos/client-testimonial-web.mp4',
    posterSrc: '/images/client-video-poster.jpg',
    hasVideo: true,
  },
  {
    id: 'akola-commercial',
    tabLabel: '04. Commercial Facility · Akola',
    category: 'Commercial',
    author: 'Sunil Agrawal & Partners',
    role: 'Commercial Enterprise',
    city: 'Akola, Maharashtra',
    systemSizeKw: 25.0,
    systemType: 'Commercial High-Yield Net-Metered Plant',
    beforeBill: 62000,
    afterBill: 7500,
    percentSaved: 88,
    highlight: 'Estimated 3.2-Year Capital Payback with Tier-1 Yield',
    quote: 'Our plant payback period is on track for under 3.5 years. SolarArk managed the 33kV commercial synchronization and bi-directional net-meter commissioning with zero factory downtime and top-tier safety certifications.',
    videoSrc: '/videos/client-testimonial-web.mp4',
    posterSrc: '/images/homeowner-family-stories.jpg',
    hasVideo: true,
  },
];

interface LandingTestimonialsProps {
  onNavigate?: (path: string) => void;
  onCtaClick?: () => void;
}

export const LandingTestimonials: React.FC<LandingTestimonialsProps> = ({
  onNavigate,
  onCtaClick,
}) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeStory = STORIES[activeStoryIndex];

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSelectStory = (index: number) => {
    setActiveStoryIndex(index);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section 
      id="customer-stories" 
      className="relative w-full bg-[#FAF8F5] border-t border-b border-stone-300/80 py-14 sm:py-18 lg:py-20 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">

        {/* ── SECTION HEADER: Strict Architectural Boxy Styling ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-stone-300/70">
          <div className="space-y-2.5 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-[1.5px] bg-[#8B1E1E] shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold font-sans uppercase tracking-[0.22em] text-[#8B1E1E]">
                VERIFIED PROOF & HOMEOWNER EXPERIENCES
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[40px] font-bold text-stone-900 tracking-tight leading-[1.12] m-0">
              Real installations. Real power savings.
            </h2>

            <p className="text-stone-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-xl m-0 font-normal">
              Direct reviews and unscripted rooftop walkthroughs from families and property owners powering with SolarARK across Maharashtra.
            </p>
          </div>

          {/* Right Trust Metric Box (Sharp Boxy Architecture - NO rounded pill) */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 shrink-0">
            <div className="bg-white border border-stone-300 px-4 py-3 shadow-2xs flex items-center gap-3.5">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="border-l border-stone-200 pl-3">
                <span className="block text-xs font-bold text-stone-900 font-heading leading-tight">
                  4.8 / 5 Rating
                </span>
                <span className="text-[11px] text-stone-500 font-sans leading-tight">
                  5,000+ Maharashtra Installations
                </span>
              </div>
            </div>

            {onCtaClick && (
              <button
                onClick={onCtaClick}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#8B1E1E] hover:bg-[#A82424] text-white font-heading font-semibold text-xs sm:text-sm tracking-wide transition-all cursor-pointer shadow-2xs hover:shadow-sm"
              >
                <span>Book Free Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* ── ARCHITECTURAL STORY SELECTOR TABS (Sharp Boxy Bar) ── */}
        <div className="pt-8 pb-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            {STORIES.map((story, idx) => {
              const isSelected = idx === activeStoryIndex;
              return (
                <button
                  key={story.id}
                  onClick={() => handleSelectStory(idx)}
                  className={`px-4 py-2.5 text-xs sm:text-[13px] font-heading font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-white border-[#8B1E1E] text-[#8B1E1E] shadow-2xs'
                      : 'bg-stone-100/70 hover:bg-stone-200/60 border-stone-300/80 text-stone-600'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 ${isSelected ? 'bg-[#8B1E1E]' : 'bg-stone-400'}`} />
                  <span>{story.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── MAIN SHOWCASE GRID: 7 COLS (VIDEO THEATER) + 5 COLS (STRUCTURED DOSSIER) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch pt-2">

          {/* ══ LEFT ZONE: Video Theater (7 Columns, Sharp Boxy Frame) ══ */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            {/* Boxy Video Container */}
            <div className="relative w-full aspect-[16/9] bg-[#0A0D14] border border-stone-300 shadow-sm overflow-hidden group">
              <video
                ref={videoRef}
                src={activeStory.videoSrc}
                poster={activeStory.posterSrc}
                className="w-full h-full object-cover"
                controls={isPlaying}
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Play Overlay (Visible when not actively playing) */}
              {!isPlaying && (
                <div
                  onClick={handleTogglePlay}
                  className="absolute inset-0 bg-black/35 hover:bg-black/25 transition-all duration-300 flex items-center justify-center cursor-pointer select-none"
                >
                  {/* Sharp Center Play Trigger */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#8B1E1E] hover:bg-[#A82424] text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-105 border border-white/20">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
                  </div>

                  {/* Top Right Live Badge */}
                  <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md px-3 py-1.5 border border-white/15 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-sans font-medium text-white tracking-wide uppercase">
                      Verified Client Video
                    </span>
                  </div>

                  {/* Bottom Left Context Bar */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2.5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-amber-400 block">
                        On-Site Rooftop Walkthrough
                      </span>
                      <p className="text-xs sm:text-sm font-heading font-medium text-white m-0 truncate">
                        {activeStory.author} · {activeStory.city}
                      </p>
                    </div>

                    <span className="text-[11px] font-sans font-semibold text-white/90 shrink-0 pl-3">
                      Watch Video →
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Video Technical Specs Ribbon (Directly Below Video, Sharp Boxy) */}
            <div className="bg-white border border-stone-300 p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 shadow-2xs">
              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-stone-400 block">
                  Capacity
                </span>
                <span className="text-base sm:text-lg font-heading font-bold text-stone-900 mt-0.5 block">
                  {activeStory.systemSizeKw} kWp
                </span>
              </div>

              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-stone-400 block">
                  Structure
                </span>
                <span className="text-xs sm:text-[13px] font-heading font-semibold text-stone-800 mt-0.5 block truncate" title={activeStory.systemType}>
                  {activeStory.systemType}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-stone-400 block">
                  Bill Reduction
                </span>
                <span className="text-base sm:text-lg font-heading font-bold text-emerald-700 mt-0.5 block">
                  -{activeStory.percentSaved}%
                </span>
              </div>

              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-stone-400 block">
                  DISCOM Net-Meter
                </span>
                <div className="flex items-center gap-1.5 text-emerald-700 font-heading font-semibold text-xs sm:text-sm mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Synchronized</span>
                </div>
              </div>
            </div>

          </div>

          {/* ══ RIGHT ZONE: Structured Testimonial Dossier (5 Columns, Sharp Boxy) ══ */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Primary Story Dossier Card */}
            <div className="bg-white border border-stone-300 p-6 sm:p-7 shadow-2xs space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                
                {/* Quantified Outcome Strip (Sharp Boxy Banner) */}
                <div className="bg-[#0A1410] border border-emerald-800/60 p-3.5 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-emerald-400 block">
                      Monthly Electricity Cost
                    </span>
                    <div className="text-sm sm:text-base font-heading font-bold text-emerald-200 mt-0.5">
                      ₹{activeStory.beforeBill.toLocaleString('en-IN')} → ₹{activeStory.afterBill.toLocaleString('en-IN')} <span className="text-xs font-normal text-emerald-400">/ mo</span>
                    </div>
                  </div>

                  <div className="bg-emerald-600 text-white font-heading font-bold text-xs sm:text-sm px-2.5 py-1 tracking-wider">
                    -{activeStory.percentSaved}%
                  </div>
                </div>

                {/* Rating & Highlight Title */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-sans font-bold text-stone-500 uppercase tracking-wider">
                      Verified Installation
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-stone-900 tracking-tight leading-snug m-0">
                    "{activeStory.highlight}"
                  </h3>
                </div>

                {/* Quote Text */}
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-normal m-0 italic">
                  "{activeStory.quote}"
                </p>
              </div>

              {/* Author & Verification Footer (Sharp Boxy Divider) */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-heading font-bold text-stone-900 m-0">
                    {activeStory.author}
                  </h4>
                  <p className="text-xs text-stone-500 font-sans m-0">
                    {activeStory.role} · {activeStory.city}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-stone-600 bg-stone-100 border border-stone-200 px-2.5 py-1 text-[11px] font-medium font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>SolarARK Verified</span>
                </div>
              </div>
            </div>

            {/* Secondary Companion Review Snippet (Sharp Boxy, High Information Density) */}
            <div className="bg-stone-100/80 border border-stone-300/80 p-4 sm:p-5 flex items-start gap-3.5">
              <div className="w-8 h-8 bg-[#8B1E1E]/10 text-[#8B1E1E] flex items-center justify-center shrink-0">
                <TrendingDown className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-heading font-bold text-stone-900 m-0">
                  Government Subsidy Claimed & Disbursed
                </p>
                <p className="text-[11px] sm:text-xs text-stone-600 font-sans m-0 leading-relaxed">
                  Direct bank DBT under PM Surya Ghar Muft Bijli Yojana (up to ₹78,000) processed completely by SolarARK's local office.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
