/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, EyeOff, Eye } from 'lucide-react';
import { SolarArkLogo } from './SolarArkLogo';

interface HeaderProps {
  onCtaClick: () => void;
  onNavigate: (path: string) => void;
  currentPath: string;
  isReducedMotion: boolean;
  toggleReducedMotion: () => void;
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkHero
          ? 'py-3 sm:py-3.5 lg:py-4 border-b border-transparent'
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

        {/* 3. RIGHT: Symmetrical Action Group (Urgency Call Icon + High-Conversion CTA) */}
        <div className="hidden lg:flex items-center justify-end gap-2.5 xl:gap-3 shrink-0">
          {/* Accessibility Toggle */}
          <button
            onClick={toggleReducedMotion}
            title={isReducedMotion ? 'Enable Motion Effects' : 'Reduce Motion for Accessibility'}
            className={`transition-colors p-2 rounded-full cursor-pointer ${
              isDarkHero
                ? 'text-white/80 hover:text-white hover:bg-white/15 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]'
                : 'text-slate-400 hover:text-slate-700 hover:bg-stone-100'
            }`}
            aria-label={isReducedMotion ? 'Enable Motion Effects' : 'Reduce Motion'}
          >
            {isReducedMotion ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>

          {/* High-Urgency Call Icon with Live Status Beacon */}
          <a
            href="tel:7080909590"
            className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 shadow-2xs hover:shadow-xs group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E1E]/30 ${
              isDarkHero
                ? 'bg-white/15 hover:bg-[#8B1E1E] border border-white/25 hover:border-[#8B1E1E] text-white backdrop-blur-md'
                : 'bg-red-50/90 hover:bg-[#8B1E1E] border border-red-200 hover:border-[#8B1E1E] text-[#8B1E1E] hover:text-white'
            }`}
            title="Instant Helpline: +91 7080909590 (Mon-Sat 9:30 AM - 7:00 PM)"
            aria-label="Direct Phone Helpline"
          >
            {/* Live Availability Radar Beacon */}
            <span className="absolute top-0 right-0 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border-2 border-white" />
            </span>
            <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
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
          {/* Mobile Urgency Call Button */}
          <a
            href="tel:7080909590"
            className={`relative flex items-center justify-center w-9 h-9 rounded-full shadow-2xs active:scale-95 transition-transform ${
              isDarkHero
                ? 'bg-white/15 border border-white/30 text-white backdrop-blur-md'
                : 'bg-red-50 text-[#8B1E1E] border border-red-200/80'
            }`}
            title="Call Helpline"
            aria-label="Call Helpline"
          >
            <span className="absolute top-0 right-0 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 border-2 border-white" />
            </span>
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 focus:outline-none cursor-pointer rounded-lg ${
              isDarkHero ? 'text-white hover:bg-white/15' : 'text-slate-800 hover:bg-stone-100'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPath === item.path && !item.hash;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#8B1E1E]/10 text-[#8B1E1E] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="tel:7080909590"
              className="flex items-center justify-center gap-2 text-xs font-bold text-slate-800 bg-red-50/70 border border-red-200/80 py-2.5 rounded-xl"
            >
              <Phone className="w-3.5 h-3.5 text-[#8B1E1E]" />
              <span>Direct Helpline: 7080909590</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onCtaClick();
              }}
              className="w-full bg-[#8B1E1E] hover:bg-[#5E1212] text-white text-xs font-bold py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <span>Get Free Solar Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
