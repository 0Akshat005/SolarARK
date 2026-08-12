/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CITIES_LIST } from '../data/solarData';
import { Sun, Phone, Mail, MapPin, ShieldCheck, Star } from 'lucide-react';

export const Footer: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Compact Closing Trust Echo Banner */}
      <div className="bg-[#0B1730] border-b border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold">
              <Star className="w-4 h-4 fill-current" />
              <span>4.8 / 5.0 Google Rating</span>
            </div>

            <span className="text-slate-600 hidden sm:inline">•</span>

            <div className="flex items-center gap-1.5 text-slate-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#1D5FE0]" />
              <span>Back by 25-Year SunSure Promise™</span>
            </div>
          </div>

          <button
            onClick={onCtaClick}
            className="bg-[#1D5FE0] hover:bg-white hover:text-slate-950 text-white font-bold px-5 py-2 rounded-xl transition-all"
          >
            Get My Free Savings Estimate
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#1D5FE0] flex items-center justify-center text-white">
                <Sun className="w-5 h-5 text-[#FFB020]" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Solar<span className="text-[#1D5FE0]">ARK</span>
              </span>
            </a>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              SolarARK is India’s premier residential rooftop solar platform. We design, install, and maintain 
              high-performance solar systems with transparent government subsidy claims and guaranteed generation.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1D5FE0]" />
                <a href="tel:18001028777" className="hover:text-white transition-colors">Toll-Free: 1800 102 8777</a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1D5FE0]" />
                <a href="mailto:support@solarark.in" className="hover:text-white transition-colors">support@solarark.in</a>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1D5FE0]" />
                <span>HQ: Indiranagar, Bengaluru, KA 560038</span>
              </div>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Quick Links
            </span>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Savings Calculator</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">Technology Specs</a></li>
              <li><a href="#guarantee" className="hover:text-white transition-colors">SunSure™ Guarantee</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Major Cities Served */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Cities Served
            </span>
            <ul className="space-y-2 text-slate-400">
              {CITIES_LIST.slice(0, 6).map((c) => (
                <li key={c.name}>
                  <a href="#projects" className="hover:text-white transition-colors">
                    Solar in {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Governance & Policies
            </span>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">PM Surya Ghar Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SunSure™ T&C Document</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DISCOM Empanelment List</a></li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © 2026 SolarARK Technologies India Pvt. Ltd. All rights reserved.
          </div>

          <div className="text-center sm:text-right text-slate-600">
            All numerical figures, subsidy examples, and ROI estimations are illustrative projections based on standard Indian solar radiation models.
          </div>
        </div>

      </div>
    </footer>
  );
};
