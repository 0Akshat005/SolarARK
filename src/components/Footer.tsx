/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Star, ArrowRight } from 'lucide-react';
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

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Compact Closing Trust Echo Banner */}
      <div className="bg-[#0B1730] border-b border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold">
              <Star className="w-4 h-4 fill-current" />
              <span>5,000+ Happy Customers across Maharashtra</span>
            </div>

            <span className="text-slate-600 hidden sm:inline">•</span>

            <div className="flex items-center gap-1.5 text-slate-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Assured Renewable Komfort</span>
            </div>
          </div>

          <button
            onClick={onCtaClick}
            className="bg-[#8B1E1E] hover:bg-[#5E1212] text-white font-bold px-5 py-2.5 rounded-xl transition-all inline-flex items-center gap-2"
          >
            <span>Get Free Solar Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand Info & Head Office */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="inline-block"
              aria-label="SolarARK Home"
            >
              <SolarArkLogo variant="dark" size="md" />
            </a>

            <p className="text-slate-400 leading-relaxed text-xs sm:text-sm max-w-sm">
              SolarArk is India's dedicated solar EPC company empowering homes, housing societies, and businesses with high-efficiency rooftop solar systems, PM Surya Ghar subsidy claims, and zero-headache DISCOM net-metering.
            </p>

            <div className="space-y-2.5 pt-2 text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E27D16] shrink-0" />
                <a href="tel:+917080909590" className="hover:text-white transition-colors font-medium">
                  +91 7080909590
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E27D16] shrink-0" />
                <a href="mailto:info@thesolarark.com" className="hover:text-white transition-colors font-medium">
                  info@thesolarark.com
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E27D16] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  <strong>Head Office:</strong> Mira Sadan, House No. 27 A, Krushnarpan Colony, Amravati, Maharashtra 444605
                </span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Quick Links
            </span>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
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
                <a href="/earn-with-us" onClick={(e) => handleLinkClick(e, '/earn-with-us')} className="hover:text-white transition-colors">
                  Surya Mitra (Earn With Us)
                </a>
              </li>
              <li>
                <a href="/projects" onClick={(e) => handleLinkClick(e, '/projects')} className="hover:text-white transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="/careers" onClick={(e) => handleLinkClick(e, '/careers')} className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')} className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Solar Offerings */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Solar Solutions
            </span>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/services" onClick={(e) => handleLinkClick(e, '/services')} className="hover:text-white transition-colors">
                  Residential Rooftop Solar (Homes)
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleLinkClick(e, '/services')} className="hover:text-white transition-colors">
                  Housing Societies &amp; Apartments
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleLinkClick(e, '/services')} className="hover:text-white transition-colors">
                  Commercial &amp; Industrial Solar
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleLinkClick(e, '/services')} className="hover:text-white transition-colors">
                  Solar Inverter &amp; Battery Storage
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleLinkClick(e, '/services')} className="hover:text-white transition-colors">
                  Panel Cleaning &amp; Annual Maintenance
                </a>
              </li>
              <li>
                <a href="/faq" onClick={(e) => handleLinkClick(e, '/faq')} className="hover:text-white transition-colors">
                  PM Surya Ghar Subsidy Guide (₹78,000)
                </a>
              </li>
            </ul>
          </div>

          {/* Regional Branches */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Regional Offices
            </span>
            <div className="space-y-3 text-slate-400 text-[11px] leading-relaxed">
              <div>
                <strong className="text-slate-200 block">Chh. Sambhajinagar (Aurangabad):</strong>
                <span>Near Saptapadi Mangal Karyalaya Rd, Baliram Patil School Rd</span>
              </div>
              <div>
                <strong className="text-slate-200 block">Wardha Branch:</strong>
                <span>Infront Of Amit Tailors, Near Dr. Mehre Clinic, Arvi Naka</span>
              </div>
              <div>
                <strong className="text-slate-200 block">Akola Hub:</strong>
                <span>Regional Operations &amp; Installation Service Center</span>
              </div>
              <div>
                <strong className="text-slate-200 block">Key Service Areas:</strong>
                <span>Amravati, Chh. Sambhajinagar, Wardha, Akola, Pune, Nagpur</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & Compliance */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} SolarArk Projects Pvt. Ltd. All rights reserved.
          </div>

          <div className="text-center sm:text-right text-slate-600">
            Channel partner for national solar schemes. All subsidy calculations based on official PM Surya Ghar guidelines.
          </div>
        </div>

      </div>
    </footer>
  );
};
