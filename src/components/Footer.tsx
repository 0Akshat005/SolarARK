/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Star, ArrowRight, Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { SolarArkLogo } from './SolarArkLogo';

interface FooterProps {
  onCtaClick: () => void;
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onCtaClick, onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/solarark-projects-pvt-ltd/',
      icon: Linkedin,
      hoverClass: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/solararkprojects/?igsh=MTY5Ym80dzVhY2NpMQ%3D%3D#',
      icon: Instagram,
      hoverClass: 'hover:text-[#E4405F] hover:border-[#E4405F]/50 hover:bg-[#E4405F]/10',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/solararkprojects',
      icon: Facebook,
      hoverClass: 'hover:text-[#1877F2] hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/917080909590',
      icon: MessageCircle,
      hoverClass: 'hover:text-[#25D366] hover:border-[#25D366]/50 hover:bg-[#25D366]/10',
    },
  ];

  return (
    <footer className="bg-[#0F172A] text-slate-300 text-sm border-t border-slate-800">
      
      {/* Compact Closing Trust Echo Banner */}
      <div className="bg-[#1E293B] border-b border-slate-700/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm sm:text-base">
              <Star className="w-4.5 h-4.5 fill-current" />
              <span>5,000+ Happy Customers across Maharashtra</span>
            </div>

            <span className="text-slate-600 hidden sm:inline">•</span>

            <div className="flex items-center gap-2 text-slate-200 font-medium text-sm sm:text-base">
              <ShieldCheck className="w-4.5 h-4.5 text-amber-400" />
              <span>Assured Renewable Komfort</span>
            </div>
          </div>

          <button
            onClick={onCtaClick}
            className="bg-[#8B1E1E] hover:bg-[#5E1212] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all inline-flex items-center gap-2 shadow-sm cursor-pointer"
          >
            <span>Get Free Solar Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Brand Info, Contact & Social Links */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="inline-block"
              aria-label="SolarARK Home"
            >
              <SolarArkLogo variant="dark" size="md" />
            </a>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              India's trusted solar EPC partner delivering Tier-1 rooftop systems, ₹78,000 PM Surya Ghar subsidies, and turnkey net-metering.
            </p>

            <div className="space-y-2.5 pt-1 text-slate-200 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8B1E1E] shrink-0" />
                <a href="tel:+917080909590" className="hover:text-white transition-colors font-semibold">
                  +91 7080909590
                </a>
                <span className="text-slate-600">|</span>
                <Mail className="w-4 h-4 text-[#8B1E1E] shrink-0" />
                <a href="mailto:info@thesolarark.com" className="hover:text-white transition-colors font-semibold">
                  info@thesolarark.com
                </a>
              </div>

              <div className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                <MapPin className="w-4 h-4 text-[#8B1E1E] shrink-0 mt-0.5" />
                <span>Mira Sadan, Krushnarpan Colony, Amravati, Maharashtra 444605</span>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="pt-2">
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`SolarArk on ${social.name}`}
                      className={`w-9 h-9 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-300 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 active:scale-95 ${social.hoverClass}`}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-heading block">
              Company
            </span>
            <ul className="space-y-2 text-slate-300 text-xs sm:text-sm font-normal">
              <li>
                <a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleLinkClick(e, '/services')} className="hover:text-white transition-colors">
                  Solar Services
                </a>
              </li>
              <li>
                <a href="/projects" onClick={(e) => handleLinkClick(e, '/projects')} className="hover:text-white transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="/earn-with-us" onClick={(e) => handleLinkClick(e, '/earn-with-us')} className="hover:text-white transition-colors">
                  Surya Mitra (Partner)
                </a>
              </li>
              <li>
                <a href="/careers" onClick={(e) => handleLinkClick(e, '/careers')} className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Solar Solutions */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-heading block">
              Solutions
            </span>
            <ul className="space-y-2 text-slate-300 text-xs sm:text-sm font-normal">
              <li>
                <a href="/services" onClick={(e) => handleLinkClick(e, '/services')} className="hover:text-white transition-colors">
                  Residential Rooftop
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleLinkClick(e, '/services')} className="hover:text-white transition-colors">
                  Housing Societies
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleLinkClick(e, '/services')} className="hover:text-white transition-colors">
                  Commercial &amp; Industrial
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleLinkClick(e, '/services')} className="hover:text-white transition-colors">
                  Solar Battery Storage
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')} className="hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Regional Hubs */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-heading block">
              Service Hubs
            </span>
            <div className="flex flex-wrap gap-1.5 text-xs text-slate-200 font-medium">
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/80">Amravati (HQ)</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/80">Nagpur</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/80">Chh. Sambhajinagar</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/80">Wardha</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/80">Akola</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/80">Pune</span>
            </div>
            <p className="text-xs text-slate-400 pt-1 leading-relaxed">
              Active EPC &amp; Net-Metering operations across Maharashtra.
            </p>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-slate-300">
            <span>© {new Date().getFullYear()} SolarArk Projects Pvt. Ltd. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>
              Designed &amp; Developed by{' '}
              <a
                href="https://bizleap.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-300 font-semibold underline underline-offset-2 transition-colors inline-flex items-center gap-0.5"
              >
                BizLeap
              </a>
            </span>
          </div>

          <div className="text-center sm:text-right text-slate-400 text-xs">
            Channel partner for PM Surya Ghar national rooftop schemes.
          </div>
        </div>

      </div>
    </footer>
  );
};
