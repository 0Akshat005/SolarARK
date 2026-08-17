/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Home as HomeIcon,
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  Zap,
  TrendingUp,
  HeartHandshake,
  Mail
} from 'lucide-react';

import { PageContextBar } from './PageContextBar';

interface CareersPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({
  onNavigate,
  onCtaClick,
}) => {
  const [selectedRole, setSelectedRole] = useState<string>('Solar Sales Consultant');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [applicantData, setApplicantData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '1-3 Years',
    message: '',
  });

  const openRoles = [
    {
      id: 'sales-advisor',
      title: 'Solar Sales Consultant / Energy Advisor',
      department: 'Business Development',
      location: 'Amravati / Sambhajinagar / Pune',
      type: 'Full Time',
      description:
        'Meet residential homeowners and housing society committee members to present solar savings proposals, conduct basic roof surveys, and close installation bookings.',
      requirements: [
        'Strong communication skills in Marathi, Hindi, and English',
        'Prior experience in direct sales, insurance, or rooftop solar is a plus',
        'Own two-wheeler vehicle for local client visits',
        'Goal-oriented mindset with high earning potential through monthly commissions',
      ],
    },
    {
      id: 'site-engineer',
      title: 'Solar Electrical Engineer & Site Supervisor',
      department: 'Engineering & EPC',
      location: 'Amravati / Wardha / Akola',
      type: 'Full Time',
      description:
        'Supervise on-site rooftop solar panel mounting, inverter wiring, earthing pit connections, and quality inspections as per DISCOM standards.',
      requirements: [
        'Diploma or B.E. in Electrical / Civil Engineering',
        'Knowledge of solar CAD layouts, DC/AC distribution boxes, and safety protocols',
        'Hands-on experience in 3kW to 50kW rooftop installation projects',
        'Valid electrical supervisor license preferred',
      ],
    },
    {
      id: 'discom-liaison',
      title: 'DISCOM Documentation & Net-Metering Executive',
      department: 'Government & Liaison',
      location: 'Amravati Head Office',
      type: 'Full Time',
      description:
        'Process online PM Surya Ghar national portal applications, coordinate MSEDCL meter testing, and secure timely subsidy release for clients.',
      requirements: [
        'Familiarity with national rooftop solar portals and state DISCOM documentation',
        'Proficiency in MS Excel, PDF handling, and document verification',
        'High attention to detail and customer follow-up abilities',
      ],
    },
    {
      id: 'telecaller',
      title: 'Customer Success & Telecalling Specialist',
      department: 'Operations & Support',
      location: 'Amravati Head Office',
      type: 'Full Time',
      description:
        'Handle inbound inquiries from solar savings calculator users, schedule site assessment visits, and update homeowners on net-metering progress.',
      requirements: [
        'Pleasant phone etiquette and proactive customer service approach',
        'Ability to explain solar benefits clearly to interested homeowners',
        'Basic computer and CRM software skills',
      ],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 lg:pt-24 pb-20 min-h-screen bg-[#FCFAF7] text-slate-900 selection:bg-[#8B1E1E] selection:text-white">
      
      {/* ── REUSABLE INNER-PAGE TOP CONTEXT BAR ── */}
      <PageContextBar
        currentPage="Careers"
        onNavigate={onNavigate}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-8">

        {/* Page Hero Headline */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7EFE9] border border-[#8B1E1E]/15 text-xs font-bold text-[#8B1E1E] font-heading">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Careers at SolarArk Projects Pvt. Ltd.</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.14]">
            Build Your Career in India's Clean Energy Future
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Join our mission to empower thousands of homes and businesses with clean solar energy. Work alongside passionate engineers, innovators, and sustainability leaders across Maharashtra.
          </p>
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
        
        {/* ── WHY WORK AT SOLARARK ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#8B1E1E] flex items-center justify-center font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-slate-900">
              Booming Clean-Tech Sector
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Be at the forefront of India's rapid solar transition driven by national PM Surya Ghar policies.
            </p>
          </div>

          <div className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-slate-900">
              Rewarding Growth &amp; Incentives
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Attractive salary packages, transparent monthly project bonuses, and fast career progression.
            </p>
          </div>

          <div className="bg-white border border-stone-200/80 rounded-2xl p-6 shadow-xs space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-slate-900">
              Hands-On Technical Training
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Continuous masterclasses on solar CAD design, inverter telemetry, and grid synchronization.
            </p>
          </div>
        </div>

        {/* ── OPEN POSITIONS & APPLICATION FORM ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Positions List */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading text-2xl font-extrabold text-slate-900 tracking-tight">
              Current Open Roles
            </h2>

            <div className="space-y-4">
              {openRoles.map((role) => (
                <div
                  key={role.id}
                  onClick={() => setSelectedRole(role.title)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    selectedRole === role.title
                      ? 'bg-white border-[#8B1E1E] shadow-md ring-2 ring-[#8B1E1E]/10'
                      : 'bg-white border-stone-200/80 hover:border-stone-300'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold text-[#8B1E1E] font-heading uppercase tracking-wider bg-red-50 px-2.5 py-0.5 rounded-full">
                      {role.department}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {role.type}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    {role.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-stone-500 mt-1 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    <span>{role.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {role.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-stone-100">
                    <div className="text-[11px] font-bold text-stone-800">Requirements:</div>
                    {role.requirements.map((req, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8B1E1E] shrink-0" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Application Form */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-lg space-y-6 sticky top-28">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7EFE9] border border-[#8B1E1E]/15 text-xs font-bold text-[#8B1E1E] font-heading mb-2">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Direct Application</span>
                </div>
                <h3 className="font-heading text-xl font-extrabold text-slate-900">
                  Apply for Position
                </h3>
                <p className="text-xs text-stone-600 mt-0.5">
                  Send your resume directly to our HR team.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-emerald-900">
                    Application Sent!
                  </h4>
                  <p className="text-xs text-emerald-800">
                    Thank you <strong>{applicantData.name}</strong> for applying for <strong>{selectedRole}</strong>. Our HR team will review your profile and reach out via email or phone.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-emerald-700 underline mt-2"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Applying For
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={selectedRole}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs font-semibold text-slate-800 bg-stone-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Kulkarni"
                      value={applicantData.name}
                      onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-[#8B1E1E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={applicantData.phone}
                      onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-[#8B1E1E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. anand@gmail.com"
                      value={applicantData.email}
                      onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-[#8B1E1E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Relevant Experience
                    </label>
                    <select
                      value={applicantData.experience}
                      onChange={(e) => setApplicantData({ ...applicantData, experience: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-[#8B1E1E] bg-white"
                    >
                      <option>Fresher / Under 1 Year</option>
                      <option>1-3 Years</option>
                      <option>3-5 Years</option>
                      <option>5+ Years Senior</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Cover Note / Portfolio Link (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Briefly tell us about your background..."
                      value={applicantData.message}
                      onChange={(e) => setApplicantData({ ...applicantData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-[#8B1E1E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#8B1E1E] hover:bg-[#5E1212] text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    <span>Submit Application</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="pt-2 text-center text-xs text-stone-500">
                    Or email your CV directly to{' '}
                    <a href="mailto:info@thesolarark.com" className="font-bold text-[#8B1E1E] hover:underline">
                      info@thesolarark.com
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
