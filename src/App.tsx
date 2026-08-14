/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProblemSection } from './components/ProblemSection';
import { SavingsCalculator } from './components/SavingsCalculator';
import { HowItWorks } from './components/HowItWorks';
import { ProjectsGrid } from './components/ProjectsGrid';
import { Testimonials } from './components/Testimonials';
import { TechnologySection } from './components/TechnologySection';
import { AppExperience } from './components/AppExperience';
import { FAQSection } from './components/FAQSection';
import { FinalCTAForm } from './components/FinalCTAForm';
import { Footer } from './components/Footer';
import { StickyBars } from './components/StickyBars';
import { DeepDiveTeaser } from './components/DeepDiveTeaser';
import { AboutSection } from './components/AboutSection';
import { ArrowLeft, Home as HomeIcon } from 'lucide-react';

export default function App() {
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname || '/');
  const [calculatorState, setCalculatorState] = useState<{ pincode: string; monthlyBill: number }>({
    pincode: '560034',
    monthlyBill: 8500,
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (isReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [isReducedMotion]);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: isReducedMotion ? 'auto' : 'smooth' });
  };

  const toggleReducedMotion = () => {
    setIsReducedMotion(!isReducedMotion);
  };

  const scrollToContactForm = () => {
    if (currentPath !== '/') {
      navigateTo('/');
      setTimeout(() => {
        const el = document.getElementById('contact-form');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById('contact-form');
      if (el) {
        el.scrollIntoView({ behavior: isReducedMotion ? 'auto' : 'smooth' });
      }
    }
  };

  const scrollToCalculator = () => {
    if (currentPath !== '/') {
      navigateTo('/');
      setTimeout(() => {
        const el = document.getElementById('calculator');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById('calculator');
      if (el) {
        el.scrollIntoView({ behavior: isReducedMotion ? 'auto' : 'smooth' });
      }
    }
  };

  const handleClaimEstimate = (data: { pincode: string; monthlyBill: number }) => {
    setCalculatorState(data);
    scrollToContactForm();
  };

  // Dedicated Page Container wrapper with Breadcrumbs & Back link
  const renderDedicatedPage = (
    title: string,
    subtitle: string,
    component: React.ReactNode
  ) => (
    <div className="pt-28 lg:pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mb-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-4">
          <button
            onClick={() => navigateTo('/')}
            className="flex items-center gap-1 hover:text-[#1D5FE0] transition-colors"
          >
            <HomeIcon className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="text-slate-900 font-semibold">{title}</span>
        </div>

        {/* Page Title & Back Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
              {subtitle}
            </p>
          </div>

          <button
            onClick={() => navigateTo('/')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#1D5FE0] bg-white border border-slate-200 hover:border-slate-300 px-4 py-2.5 rounded-xl transition-all shadow-xs shrink-0 self-start md:self-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Main Experience</span>
          </button>
        </div>
      </div>

      {/* Main Page Component */}
      <div>{component}</div>

      {/* Embedded Lead CTA Form at bottom of dedicated pages */}
      <div className="mt-16">
        <FinalCTAForm
          prefilledPincode={calculatorState.pincode}
          prefilledBill={calculatorState.monthlyBill}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-[#1D5FE0] selection:text-white">
      {/* 1. Header (Present across all pages) */}
      <Header
        onCtaClick={scrollToContactForm}
        onNavigate={navigateTo}
        currentPath={currentPath}
        isReducedMotion={isReducedMotion}
        toggleReducedMotion={toggleReducedMotion}
      />

      <main className="flex-1">
        {/* HOMEPAGE VIEW */}
        {currentPath === '/' && (
          <>
            {/* 1. Hero Section */}
            <Hero
              onCtaClick={scrollToContactForm}
              onCalculatorClick={scrollToCalculator}
            />

            {/* 2. Why Now / rising electricity cost section */}
            <ProblemSection onCtaClick={scrollToContactForm} />

            {/* 5. Savings Calculator */}
            <div id="calculator">
              <SavingsCalculator onClaimEstimate={handleClaimEstimate} />
            </div>

            {/* 6. How It Works */}
            <div id="how-it-works">
              <HowItWorks onCtaClick={scrollToContactForm} />
            </div>

            {/* 7. Concise Teaser strip pointing to dedicated deep-dive hubs */}
            <DeepDiveTeaser onNavigate={navigateTo} />

            {/* 8. Final Lead Form */}
            <div id="contact-form">
              <FinalCTAForm
                prefilledPincode={calculatorState.pincode}
                prefilledBill={calculatorState.monthlyBill}
              />
            </div>
          </>
        )}

        {/* DEDICATED PAGE: About Us */}
        {currentPath === '/about' &&
          renderDedicatedPage(
            'About SolarArk',
            'Powering a Sustainable Future with India\'s Premier Residential Rooftop Solar Platform',
            <AboutSection onCtaClick={scrollToContactForm} />
          )}

        {/* DEDICATED PAGE: Technology */}
        {currentPath === '/technology' &&
          renderDedicatedPage(
            'SolarARK Technology Standards',
            'Explore our Tier-1 monocrystalline panels, smart inverters, and 25-year performance warranties.',
            <TechnologySection onCtaClick={scrollToContactForm} />
          )}

        {/* DEDICATED PAGE: App Experience */}
        {currentPath === '/app' &&
          renderDedicatedPage(
            'Smart SolarARK Monitoring App',
            'Track real-time power generation, grid net-metering exports, battery state of charge, and lifetime savings.',
            <AppExperience onCtaClick={scrollToContactForm} />
          )}

        {/* DEDICATED PAGE: Projects / Case Studies */}
        {currentPath === '/projects' &&
          renderDedicatedPage(
            'Verified Customer Installations',
            'Browse real rooftop solar projects across 15+ Indian cities with verified bill reduction metrics.',
            <ProjectsGrid onCtaClick={scrollToContactForm} />
          )}

        {/* DEDICATED PAGE: Reviews */}
        {currentPath === '/reviews' &&
          renderDedicatedPage(
            'Homeowner Testimonials & Reviews',
            'Read verified stories from Indian homeowners who switched to SolarARK rooftop solar.',
            <Testimonials />
          )}

        {/* DEDICATED PAGE: FAQ */}
        {currentPath === '/faq' &&
          renderDedicatedPage(
            'Knowledge Base & FAQ',
            'Find answers to common questions about PM Surya Ghar subsidies, DISCOM net-metering, installation, and financing.',
            <FAQSection onCtaClick={scrollToContactForm} />
          )}
      </main>

      {/* Footer (Present across all pages) */}
      <Footer onCtaClick={scrollToContactForm} />

      {/* Persistent Desktop Top Sticky Bar & Mobile Bottom Sticky Bar */}
      <StickyBars
        onCtaClick={scrollToContactForm}
        onCalculatorClick={scrollToCalculator}
      />
    </div>
  );
}
