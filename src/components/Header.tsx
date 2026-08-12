/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sun, Phone, Menu, X, ArrowRight, EyeOff, Eye } from 'lucide-react';

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

  const navItems = [
    { name: 'How It Works', path: '/', hash: '#how-it-works' },
    { name: 'Solar Solutions', path: '/', hash: '#calculator' },
    { name: 'Cities', path: '/', hash: '#cities' },
    { name: 'Technology', path: '/technology' },
    { name: 'Projects', path: '/projects' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'About', path: '/', hash: '#about' },
    { name: 'Blog', path: '/', hash: '#blog' },
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
          ? 'bg-white shadow-sm py-3.5 border-b border-slate-100'
          : 'bg-white lg:bg-transparent py-4 lg:py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate('/')}
          className="flex items-center gap-2.5 group focus:outline-none text-left"
        >
          <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-[#1D5FE0] flex items-center justify-center text-white shadow-md shadow-[#1D5FE0]/20">
            <Sun className="w-5 h-5 text-white" />
          </div>
          <span className="font-heading font-bold text-xl lg:text-2xl tracking-tight text-slate-900 leading-none">
            SolarARK
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navItems.map((item) => {
            const isActive = currentPath === item.path && !item.hash;
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`text-[13px] xl:text-[14px] font-medium transition-colors ${
                  isActive
                    ? 'text-[#1D5FE0] font-semibold'
                    : 'text-slate-700 hover:text-[#1D5FE0]'
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-5">
          {/* Reduced Motion Toggle */}
          <button
            onClick={toggleReducedMotion}
            title={isReducedMotion ? 'Enable Motion Effects' : 'Reduce Motion for Accessibility'}
            className="text-slate-400 hover:text-slate-700 transition-colors p-1"
          >
            {isReducedMotion ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>

          {/* Phone */}
          <a
            href="tel:18001028777"
            className="flex items-center gap-1.5 text-[13px] xl:text-[14px] font-semibold text-slate-800 hover:text-[#1D5FE0] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" fill="currentColor" />
            <span>1800 102 8777</span>
          </a>

          {/* Primary CTA Button */}
          <button
            onClick={onCtaClick}
            className="bg-[#1D5FE0] hover:bg-[#174AB8] text-white text-[13px] xl:text-[14px] font-semibold px-4 py-2 rounded-full transition-all duration-150 flex items-center gap-1.5 shadow-sm shadow-[#1D5FE0]/20 active:scale-[0.97]"
          >
            <span>Get My Free Savings Estimate</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-900 p-1"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-5 shadow-xl absolute top-full left-0 right-0 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-base font-medium text-slate-800 hover:text-[#1D5FE0] text-left py-1.5 border-b border-slate-100"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="pt-3 flex flex-col gap-3">
            <a
              href="tel:18001028777"
              className="flex items-center gap-2.5 text-base font-bold text-slate-900 py-1"
            >
              <Phone className="w-4 h-4" fill="currentColor" />
              <span>1800 102 8777</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onCtaClick();
              }}
              className="bg-[#1D5FE0] hover:bg-[#174AB8] text-white text-sm font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md shadow-[#1D5FE0]/20"
            >
              <span>Get My Free Savings Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
