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
      setIsScrolled(window.scrollY > 10);
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
    { name: 'Gallery', path: '/projects' },
    { name: 'Contact Us', path: '/contact' },
  ];

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
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-slate-100/80'
          : 'bg-white/80 lg:bg-white/[0.45] lg:backdrop-blur-[8px] py-3.5 lg:py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate('/')}
          className="group focus:outline-none text-left cursor-pointer shrink-0"
          aria-label="SolarARK Home"
        >
          <SolarArkLogo variant="light" size="md" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navItems.map((item) => {
            const isActive = currentPath === item.path && !item.hash;
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`relative py-1 text-[13px] xl:text-[14px] font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#1D5FE0] font-semibold'
                    : `${isScrolled ? 'text-slate-700' : 'text-slate-800'} hover:text-[#1D5FE0]`
                }`}
              >
                <span>{item.name}</span>
                {isActive && (
                  <span className="block h-[2.5px] w-5 bg-[#1D5FE0] rounded-full mx-auto mt-0.5" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions (Space Optimized & Structured Hierarchy) */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
          {/* Reduced Motion Toggle */}
          <button
            onClick={toggleReducedMotion}
            title={isReducedMotion ? 'Enable Motion Effects' : 'Reduce Motion for Accessibility'}
            className="text-slate-300 hover:text-slate-600 transition-colors p-1 cursor-pointer"
          >
            {isReducedMotion ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          </button>

          {/* SECONDARY ACTION: Compact, High-Intent "Call Now" Group */}
          <a
            href="tel:7080909590"
            className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full border border-stone-200/80 bg-white/70 hover:bg-amber-50/70 hover:border-amber-300 transition-all duration-200 group cursor-pointer shadow-2xs hover:shadow-xs"
            title="Call SolarARK Direct Helpline: 7080909590"
          >
            <div className="w-6 h-6 rounded-full bg-amber-500/15 group-hover:bg-[#E27D16] text-[#E27D16] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs">
              <Phone className="w-3 h-3 group-hover:rotate-12 transition-transform duration-200" />
            </div>
            <div className="flex flex-col leading-tight text-left">
              <span className="text-[11px] font-bold text-slate-800 group-hover:text-[#E27D16] tracking-tight transition-colors">
                Call now
              </span>
              <span className="text-[10px] font-semibold text-slate-500 group-hover:text-slate-700 tracking-tight font-mono">
                7080909590
              </span>
            </div>
          </a>

          {/* PRIMARY ACTION: Dominant Get A Quote CTA */}
          <button
            onClick={onCtaClick}
            className="bg-[#1D5FE0] hover:bg-[#1753C8] text-white text-[13px] xl:text-[14px] font-semibold px-4 xl:px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-1.5 active:scale-[0.98] cursor-pointer"
          >
            <span>Get A Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu & Call Action */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <a
            href="tel:7080909590"
            className="flex items-center gap-1.5 text-xs font-bold text-[#E27D16] bg-amber-50 border border-amber-200/70 px-3 py-1.5 rounded-full shadow-2xs active:scale-95 transition-transform"
          >
            <Phone className="w-3 h-3 text-[#E27D16]" />
            <span>Call now</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-800 focus:outline-none cursor-pointer"
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
                  className={`text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-[#1D5FE0] font-semibold'
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
              className="flex items-center justify-center gap-2 text-xs font-bold text-slate-800 bg-amber-50/70 border border-amber-200/80 py-2.5 rounded-xl"
            >
              <Phone className="w-3.5 h-3.5 text-[#E27D16]" />
              <span>Direct Helpline: 7080909590</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onCtaClick();
              }}
              className="w-full bg-[#1D5FE0] text-white text-xs font-bold py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
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
