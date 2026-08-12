/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Compass, Box, Wrench, Radio, CheckCircle, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'Free Precision Site Survey',
      subtitle: 'Non-Invasive Structural & Shade Analysis',
      description: 'Our certified engineers conduct a 3D LiDAR laser scan of your rooftop to evaluate tilt angle, shadow profiles from nearby structures, and electrical wiring pathways.',
      detail: 'Survey takes under 30 minutes. Includes free slab strength audit and DISCOM feeder capacity check.',
      icon: Compass,
      highlight: '3D Laser Shade Scan',
    },
    {
      number: '02',
      title: 'Custom 3D Solar Layout',
      subtitle: 'Tailored Aesthetic & Maximum Generation',
      description: 'We generate an exact CAD 3D preview showing how the solar panels will look on your specific roof architecture before you spend a single rupee.',
      detail: 'Choose between flush roof mount or elevated pergola structures that preserve full terrace usability.',
      icon: Box,
      highlight: 'Before/After Roof Preview',
    },
    {
      number: '03',
      title: 'Rapid 48-Hr Installation',
      subtitle: 'Zero Slab Penetration & Subsidy Filing',
      description: 'Our in-house master installers mount the WindPro 170 km/h galvanized array and IP66 inverter. We manage 100% of the PM Surya Ghar government subsidy paperwork.',
      detail: 'No messy construction. All cabling concealed in weather-resistant conduits.',
      icon: Wrench,
      highlight: '100% Govt Paperwork Handled',
    },
    {
      number: '04',
      title: 'Solar On & Companion App',
      subtitle: 'DISCOM Net-Metering & 25-Yr SunSure Guarantee',
      description: 'DISCOM installs your bi-directional net meter. Switch on solar generation and track daily units saved, battery status, and carbon offsets live on your smartphone.',
      detail: 'SunSure Promise™ active from Day 1 with automatic deficit cashback protection.',
      icon: Radio,
      highlight: '25-Year Guarantee Active',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#1D5FE0] text-xs font-semibold">
            <CheckCircle className="w-4 h-4" />
            <span>Frictionless 4-Step Journey</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            We Handle Everything. You Just Save Money.
          </h2>

          <p className="text-base text-slate-600">
            From initial roof survey to DISCOM net-metering and government subsidy credit, 
            our end-to-end service eliminates every point of friction.
          </p>
        </div>

        {/* Desktop Interactive Stepper Display */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch">
          
          {/* Step Selector Tabs (Left 5 Cols) */}
          <div className="col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                    isActive
                      ? 'bg-white border-[#1D5FE0] shadow-elevation-2 scale-[1.02]'
                      : 'bg-slate-100/80 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 transition-colors ${
                      isActive ? 'bg-[#1D5FE0] text-white shadow-md' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {step.number}
                  </div>

                  <div>
                    <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider font-heading">
                      {step.highlight}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 font-heading">{step.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{step.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Step Detail Display Card (Right 7 Cols) */}
          <div className="col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-elevation-2 flex flex-col justify-between space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-bl-full pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1D5FE0] flex items-center justify-center font-bold">
                    {React.createElement(steps[activeStep].icon, { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1D5FE0] uppercase tracking-wider font-heading">
                      Step {steps[activeStep].number} of 04
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                      {steps[activeStep].title}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                  {steps[activeStep].highlight}
                </span>
              </div>

              <p className="text-base text-slate-700 leading-relaxed font-normal">
                {steps[activeStep].description}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <strong>What to expect:</strong> {steps[activeStep].detail}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-slate-100 relative z-10">
              <span className="text-xs text-slate-500 font-medium">
                100% Guaranteed by SolarARK SunSure™ Protocol
              </span>

              <button
                onClick={onCtaClick}
                className="bg-[#1D5FE0] hover:bg-[#0F2E6E] text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all flex items-center gap-2"
              >
                <span>Book Free Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Mobile Vertical Stepper (No scroll-jacking on mobile) */}
        <div className="lg:hidden space-y-6">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#1D5FE0] text-white flex items-center justify-center font-bold text-xs">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-heading">{step.title}</h3>
                    <p className="text-xs text-[#1D5FE0] font-medium">{step.subtitle}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>

                <div className="bg-slate-50 p-3 rounded-lg text-[11px] text-slate-500">
                  {step.detail}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
