/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
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
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { EarnWithUsPage } from './components/EarnWithUsPage';
import { CareersPage } from './components/CareersPage';
import { ContactPage } from './components/ContactPage';
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
      navigateTo('/contact');
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
    <div className="pt-28 lg:pt-32 pb-20 min-h-screen bg-[#FCFAF7]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Navigation Breadcrumb & Back button */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-stone-200 mb-8">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <button
              onClick={() => navigateTo('/')}
              className="flex items-center gap-1 hover:text-[#8B1E1E] transition-colors"
            >
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">{title}</span>
          </div>

          <button
            onClick={() => navigateTo('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-[#8B1E1E] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Page Title & Subtitle */}
        <div className="max-w-3xl mb-12 space-y-2">
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Render Component */}
        {component}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#8B1E1E] selection:text-white">
      {/* Universal Header */}
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
            {/* 1. Hero with conversion triggers */}
            <Hero
              onCtaClick={scrollToContactForm}
              onClaimEstimate={handleClaimEstimate}
            />

            {/* 2. Interactive Problem / Grid Tariffs vs Solar cost */}
            <ProblemSection onCtaClick={scrollToContactForm} />

            {/* 3. Comprehensive Solar Savings Calculator */}
            <div id="calculator">
              <SavingsCalculator
                onClaimEstimate={handleClaimEstimate}
                initialPincode={calculatorState.pincode}
                initialBill={calculatorState.monthlyBill}
              />
            </div>

            {/* 4. 4-Step Transparent Installation Process */}
            <div id="how-it-works">
              <HowItWorks onCtaClick={scrollToContactForm} />
            </div>

            {/* 5. Deep-Dive Bento Teaser Grid */}
            <DeepDiveTeaser onNavigate={navigateTo} />

            {/* 6. Lead Consultation Form */}
            <div id="contact-form">
              <FinalCTAForm
                prefilledPincode={calculatorState.pincode}
                prefilledBill={calculatorState.monthlyBill}
              />
            </div>
          </>
        )}

        {/* DEDICATED PAGE: About Us */}
        {currentPath === '/about' && (
          <AboutPage
            onNavigate={navigateTo}
            onCtaClick={scrollToContactForm}
            prefilledPincode={calculatorState.pincode}
            prefilledBill={calculatorState.monthlyBill}
          />
        )}

        {/* DEDICATED PAGE: Services */}
        {currentPath === '/services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onCtaClick={scrollToContactForm}
            prefilledPincode={calculatorState.pincode}
            prefilledBill={calculatorState.monthlyBill}
          />
        )}

        {/* DEDICATED PAGE: Earn with us (Surya Mitra) */}
        {currentPath === '/earn-with-us' && (
          <EarnWithUsPage
            onNavigate={navigateTo}
            onCtaClick={scrollToContactForm}
          />
        )}

        {/* DEDICATED PAGE: Our Projects / Case Studies */}
        {currentPath === '/projects' &&
          renderDedicatedPage(
            'Verified Customer Installations',
            'Browse real rooftop solar projects across Maharashtra with verified bill reduction metrics.',
            <ProjectsGrid onCtaClick={scrollToContactForm} />
          )}

        {/* DEDICATED PAGE: Careers */}
        {currentPath === '/careers' && (
          <CareersPage
            onNavigate={navigateTo}
            onCtaClick={scrollToContactForm}
          />
        )}

        {/* DEDICATED PAGE: Contact Us */}
        {currentPath === '/contact' && (
          <ContactPage
            onNavigate={navigateTo}
            onCtaClick={scrollToContactForm}
          />
        )}

        {/* DEDICATED PAGE: Technology */}
        {currentPath === '/technology' &&
          renderDedicatedPage(
            'SolarArk Technology Standards',
            'Explore our Tier-1 N-Type TOPCon panels, smart hybrid inverters, and 25-year performance warranties.',
            <TechnologySection onCtaClick={scrollToContactForm} />
          )}

        {/* DEDICATED PAGE: App Experience */}
        {currentPath === '/app' &&
          renderDedicatedPage(
            'Smart SolarArk Telemetry App',
            'Track real-time power generation, grid net-metering exports, battery state of charge, and lifetime savings.',
            <AppExperience onCtaClick={scrollToContactForm} />
          )}

        {/* DEDICATED PAGE: Reviews */}
        {currentPath === '/reviews' &&
          renderDedicatedPage(
            'Homeowner Testimonials & Reviews',
            'Read verified stories from Indian homeowners who switched to SolarArk rooftop solar.',
            <Testimonials />
          )}

        {/* DEDICATED PAGE: FAQ */}
        {currentPath === '/faq' &&
          renderDedicatedPage(
            'Knowledge Base & FAQ',
            'Find answers to common questions about PM Surya Ghar subsidies, MSEDCL net-metering, installation, and financing.',
            <FAQSection onCtaClick={scrollToContactForm} />
          )}
      </main>

      {/* Footer */}
      <Footer onCtaClick={scrollToContactForm} onNavigate={navigateTo} />

      {/* Persistent Desktop Top Sticky Bar & Mobile Bottom Sticky Bar */}
      <StickyBars
        onCtaClick={scrollToContactForm}
        onCalculatorClick={scrollToCalculator}
      />
    </div>
  );
}
