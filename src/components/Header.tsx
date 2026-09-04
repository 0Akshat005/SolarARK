/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PhoneCall, Phone, Menu, X, ArrowRight } from 'lucide-react';
import { SolarArkLogo } from './SolarArkLogo';

interface HeaderProps {
  onCtaClick: () => void;
  onNavigate: (path: string) => void;
  currentPath: string;
  isReducedMotion?: boolean;
  toggleReducedMotion?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onCtaClick,
  onNavigate,
  currentPath,
  isReducedMotion,
  toggleReducedMotion,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: Array<{ name: string; path: string; hash?: string }> = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Earn with us', path: '/earn-with-us' },
    { name: 'Our Projects', path: '/projects' },
    { name: 'Careers', path: '/careers' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isDarkHero = currentPath === '/' && !isScrolled;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (item: { name: string; path: string; hash?: string }) => {
    setMobileMenuOpen(false);
    if (item.path !== currentPath) {
      onNavigate(item.path);
      if (item.hash) {
        setTimeout(() => {
          const el = document.getElementById(item.hash!.replace('#', ''));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (item.hash) {
      const el = document.getElementById(item.hash.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isDarkHero
            ? 'py-3 sm:py-3.5 lg:py-4 border-b-0'
            : isScrolled
            ? 'bg-white/92 backdrop-blur-xl shadow-xs py-2.5 lg:py-3 border-b border-stone-200/80'
            : 'bg-white/90 backdrop-blur-lg py-3 lg:py-3.5 border-b border-stone-200/60'
        }`}
        style={{
          background: isDarkHero
            ? 'linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.12) 45%, rgba(0,0,0,0) 100%)'
            : undefined,
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* 1. LEFT: Brand Identity & Official Tagline */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => onNavigate('/')}
              className="group focus:outline-none text-left cursor-pointer transition-transform duration-200 hover:scale-[1.01]"
              aria-label="SolarARK Home"
            >
              <SolarArkLogo variant={isDarkHero ? 'dark' : 'light'} size="md" />
            </button>
          </div>

          {/* 2. CENTER: Symmetrical, High-Legibility Navigation Hub */}
          <nav 
            className="hidden lg:flex items-center justify-center gap-1 xl:gap-1.5 flex-1 px-2" 
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = currentPath === item.path && !item.hash;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`relative px-3.5 py-1.5 rounded-full text-[13.5px] xl:text-[14.5px] font-heading font-medium tracking-tight transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#8B1E1E] text-white shadow-sm shadow-[#8B1E1E]/30 font-semibold ring-1 ring-white/20'
                      : isDarkHero
                      ? 'text-white hover:text-white hover:bg-white/15 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]'
                      : 'text-slate-700 hover:text-[#8B1E1E] hover:bg-stone-100/80'
                  }`}
                >
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* 3. RIGHT: Symmetrical Action Group (Refined Call Action + High-Conversion CTA) */}
          <div className="hidden lg:flex items-center justify-end gap-2.5 xl:gap-3 shrink-0">
            {/* Refined Premium Call Button (Eye-Catching, AI-Indicator Removed) */}
            <a
              href="tel:7080909590"
              className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/40 hover:scale-105 active:scale-95 ${
                isDarkHero
                  ? 'bg-white/10 hover:bg-[#8B1E1E] border border-white/25 hover:border-[#8B1E1E] text-white backdrop-blur-md shadow-xs hover:shadow-[0_4px_20px_rgba(139,30,30,0.45)] ring-1 ring-white/10'
                  : 'bg-white hover:bg-[#8B1E1E] border border-stone-200 hover:border-[#8B1E1E] text-[#8B1E1E] hover:text-white shadow-xs hover:shadow-[0_4px_16px_rgba(139,30,30,0.25)] ring-1 ring-black/[0.04]'
              }`}
              title="Instant Helpline: +91 7080909590 (Mon-Sat 9:30 AM - 7:00 PM)"
              aria-label="Direct Phone Helpline"
            >
              <PhoneCall className="w-[18px] h-[18px] stroke-[1.9] transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110" />
            </a>

            {/* Primary High-Conversion CTA Button */}
            <button
              onClick={onCtaClick}
              className="bg-[#8B1E1E] hover:bg-[#5E1212] active:scale-[0.98] text-white font-heading font-semibold text-[13.5px] xl:text-[14px] px-5 py-2.5 rounded-full flex items-center gap-1.5 cursor-pointer shadow-md shadow-[#8B1E1E]/25 hover:shadow-lg hover:shadow-[#8B1E1E]/35 transition-all ring-1 ring-white/20"
            >
              <span>Get A Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Navigation Header Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Premium Call Button */}
            <a
              href="tel:7080909590"
              className={`relative flex items-center justify-center w-9 h-9 rounded-full active:scale-95 transition-all duration-300 ${
                isDarkHero
                  ? 'bg-white/10 border border-white/25 text-white backdrop-blur-md shadow-xs'
                  : 'bg-white text-[#8B1E1E] border border-stone-200 shadow-xs'
              }`}
              title="Call Helpline"
              aria-label="Call Helpline"
            >
              <PhoneCall className="w-4 h-4 stroke-[1.9]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 focus:outline-none cursor-pointer rounded-lg ${
                isDarkHero ? 'text-white hover:bg-white/15' : 'text-slate-800 hover:bg-stone-100'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* ── Full-Screen Mobile Navigation Overlay (Modern Luxury & Clean UX) ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden bg-[#0A0F1D]/95 backdrop-blur-2xl text-white flex flex-col justify-between p-5 sm:p-6 animate-in fade-in duration-200">
          
          {/* Top Bar: Brand Identity & Close Button */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <SolarArkLogo variant="dark" size="sm" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Navigation Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links: Generous touch targets & crisp typography */}
          <nav className="flex flex-col space-y-1.5 py-4 overflow-y-auto max-h-[calc(100vh-230px)]">
            {navItems.map((item) => {
              const isActive = currentPath === item.path && !item.hash;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`text-left px-4 py-3 rounded-2xl text-base font-heading font-medium tracking-tight transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#8B1E1E] text-white font-semibold shadow-md shadow-[#8B1E1E]/30 ring-1 ring-white/20'
                      : 'text-slate-200 hover:text-white hover:bg-white/10 active:bg-white/15'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                </button>
              );
            })}
          </nav>

          {/* Bottom Action Area: Direct Phone Dial + High-Conversion CTA */}
          <div className="pt-4 border-t border-white/10 space-y-2.5">
            <a
              href="tel:7080909590"
              className="flex items-center justify-center gap-2.5 text-sm font-heading font-bold text-white bg-white/10 hover:bg-white/15 border border-white/15 py-3 rounded-2xl transition-colors cursor-pointer"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-white" />
              </span>
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Direct Helpline: +91 7080909590</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onCtaClick();
              }}
              className="w-full bg-[#8B1E1E] hover:bg-[#5E1212] active:scale-[0.98] text-white font-heading font-bold text-sm py-3.5 rounded-2xl shadow-lg shadow-[#8B1E1E]/30 flex items-center justify-center gap-2 transition-all cursor-pointer ring-1 ring-white/20"
            >
              <span>Get Free Solar Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </>
  );
};
