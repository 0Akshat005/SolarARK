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
  Mail,
  PhoneCall,
  Sparkles,
  Award,
  Users,
  Building,
  GraduationCap,
  FileCheck,
  ChevronDown,
  ChevronUp,
  Layers,
  HelpCircle,
  Compass
} from 'lucide-react';

interface CareersPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({
  onNavigate,
  onCtaClick,
}) => {
  const [selectedRole, setSelectedRole] = useState<string>('Solar Sales Consultant / Energy Advisor');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [applicantData, setApplicantData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Nagpur',
    experience: '1-3 Years',
    portfolioUrl: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const departments = [
    'All',
    'Sales & Business Development',
    'Engineering & EPC',
    'Design & CAD',
    'Government & Liaison',
    'Operations & Support',
  ];

  const openRoles = [
    {
      id: 'sales-advisor',
      title: 'Solar Sales Consultant / Energy Advisor',
      department: 'Sales & Business Development',
      location: 'Nagpur / Pune / Amravati / Sambhajinagar',
      type: 'Full Time',
      experience: '1-4 Years',
      salary: '₹3.5L – ₹6.5L CTC + Lucrative Commissions',
      description:
        'Meet residential homeowners and housing society committees to present customized solar savings proposals, conduct preliminary rooftop surveys, and close turnkey solar bookings.',
      responsibilities: [
        'Conduct client site assessments and explain PM Surya Ghar ₹78,000 subsidy benefits.',
        'Prepare detailed financial payback proposals using our solar pricing engine.',
        'Coordinate with engineering teams for 3D layout approvals and structural planning.',
        'Maintain long-term relationships with clients for referral generation.',
      ],
      requirements: [
        'Strong communication skills in Marathi, Hindi, and English.',
        'Prior direct sales experience in rooftop solar, electrical appliances, or financial services.',
        'Own two-wheeler vehicle for local client consultations.',
        'Self-motivated mindset with high drive for performance-based monthly incentives.',
      ],
    },
    {
      id: 'site-engineer',
      title: 'Solar Electrical Engineer & Site Supervisor',
      department: 'Engineering & EPC',
      location: 'Nagpur / Wardha / Akola / Amravati',
      type: 'Full Time',
      experience: '2-5 Years',
      salary: '₹4.0L – ₹7.0L CTC',
      description:
        'Supervise on-site rooftop solar panel mounting, inverter wiring, DC/AC distribution boxes, earthing pit connections, and quality inspections as per DISCOM and IEC standards.',
      responsibilities: [
        'Supervise structural fabrication of elevated GI structures (6-8 ft terrace clearance).',
        'Verify string sizing, DC cable routing, inverter synchronization, and safety earthing.',
        'Conduct DISCOM net-meter inspection readiness tests and bi-directional meter setup.',
        'Ensure 100% compliance with workplace safety, PPE protocols, and zero roof leakage.',
      ],
      requirements: [
        'Diploma or B.E./B.Tech in Electrical or Civil Engineering.',
        'Hands-on experience supervising 3 kW to 50 kW residential & commercial rooftop setups.',
        'Valid electrical supervisor license is an advantage.',
        'Strong leadership skills to manage certified installation field crews.',
      ],
    },
    {
      id: 'cad-engineer',
      title: 'Solar 3D CAD & Shadow Analysis Engineer',
      department: 'Design & CAD',
      location: 'Nagpur Head Office / Hybrid',
      type: 'Full Time',
      experience: '1-3 Years',
      salary: '₹3.5L – ₹5.5L CTC',
      description:
        'Design precision 3D rooftop solar layouts, shadow analysis models, structural foundation drawings, and single line diagrams (SLDs) for DISCOM filings.',
      responsibilities: [
        'Generate PVsyst / SketchUp / AutoCAD layouts for residential and commercial rooftops.',
        'Perform annual solar irradiance and seasonal shadow loss simulations.',
        'Draft Single Line Diagrams (SLDs) for MSEDCL / SNDL net-metering sanctions.',
        'Optimize module placement to maximize annual kWh generation and terrace aesthetics.',
      ],
      requirements: [
        'Proficiency in AutoCAD, SketchUp, PVsyst, or Helioscope.',
        'Sound knowledge of solar PV electrical architecture, string design, and tilt angles.',
        'Degree/Diploma in Electrical, Mechanical, or Civil Engineering.',
      ],
    },
    {
      id: 'discom-liaison',
      title: 'DISCOM Documentation & Net-Metering Executive',
      department: 'Government & Liaison',
      location: 'Nagpur / Amravati HQ',
      type: 'Full Time',
      experience: '1-3 Years',
      salary: '₹3.0L – ₹4.8L CTC',
      description:
        'Process online PM Surya Ghar national portal applications, coordinate MSEDCL meter testing, and ensure timely subsidy disbursement directly to client bank accounts.',
      responsibilities: [
        'File consumer applications on National Portal for Rooftop Solar and MSEDCL portals.',
        'Liaise with junior engineers at local DISCOM subdivisions for site inspection approvals.',
        'Track bi-directional net meter availability, testing reports, and synchronization commissioning.',
        'Maintain real-time client status updates on CRM and follow up on bank subsidy releases.',
      ],
      requirements: [
        'Familiarity with DISCOM net-metering processes in Maharashtra (MSEDCL/SNDL).',
        'Strong documentation, MS Excel, and correspondence management skills.',
        'High organizational speed and proactive problem-solving abilities.',
      ],
    },
    {
      id: 'telecaller',
      title: 'Customer Success & Telecalling Specialist',
      department: 'Operations & Support',
      location: 'Nagpur Head Office',
      type: 'Full Time',
      experience: 'Fresher / 1-2 Years',
      salary: '₹2.5L – ₹4.0L CTC + Performance Bonuses',
      description:
        'Handle inbound inquiries from solar savings calculator users, educate homeowners on solar benefits, and schedule free site assessment visits for field engineers.',
      responsibilities: [
        'Connect with verified website leads and explain rooftop solar ROI and subsidies.',
        'Schedule technical rooftop surveys and coordinate with city field engineers.',
        'Provide post-installation support and help homeowners navigate mobile telemetry apps.',
      ],
      requirements: [
        'Pleasant phone etiquette and fluent communication in Marathi and Hindi.',
        'Proactive and customer-first approach.',
        'Basic computer proficiency and CRM software experience.',
      ],
    },
    {
      id: 'quality-inspector',
      title: 'Rooftop Quality & Safety Inspector',
      department: 'Operations & Support',
      location: 'Field Locations across Maharashtra',
      type: 'Full Time',
      experience: '2-4 Years',
      salary: '₹3.6L – ₹5.5L CTC',
      description:
        'Audit completed rooftop installations for structural torque, water seal integrity, electrical insulation resistance, and 25-year performance warranty parameters.',
      responsibilities: [
        'Conduct rigorous pre-commissioning quality checklists across completed rooftop sites.',
        'Perform thermal imaging, Megger insulation testing, and structure torque checks.',
        'Issue SolarArk Official Commissioning Certificate to homeowners.',
      ],
      requirements: [
        'Background in electrical quality assurance or solar EPC site execution.',
        'Attention to fine technical details and uncompromising safety mindset.',
      ],
    },
  ];

  const filteredRoles = selectedDepartment === 'All'
    ? openRoles
    : openRoles.filter((r) => r.department === selectedDepartment);

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!applicantData.name.trim() || applicantData.name.trim().length < 3) {
      errs.name = 'Full Name must be at least 3 characters.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicantData.email)) {
      errs.email = 'Enter a valid email address.';
    }
    if (!/^[0-9]{10}$/.test(applicantData.phone.replace(/\D/g, ''))) {
      errs.phone = 'Enter a valid 10-digit mobile number.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 750);
  };

  const scrollToApply = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    const el = document.getElementById('apply-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const careerFaqs = [
    {
      q: 'Does SolarArk provide training for freshers or career switchers?',
      a: 'Yes! We run comprehensive internal onboarding and solar engineering bootcamps. Whether you are transitioning from electrical, sales, or civil backgrounds, our technical experts guide you on shadow analysis, inverter telemetry, DISCOM portals, and client consultations.',
    },
    {
      q: 'What are the primary job locations across Maharashtra?',
      a: 'We have major operations across Nagpur (Head Office), Pune, Amravati, Chhatrapati Sambhajinagar, Wardha, Akola, and Nashik. Roles are available as field engineering positions, city sales hubs, or central office coordination.',
    },
    {
      q: 'How does the performance incentive and bonus structure work?',
      a: 'Alongside competitive fixed monthly CTC packages, team members receive transparent quarterly milestone rewards, project commissioning bonuses, and annual performance increments.',
    },
    {
      q: 'Can I apply if my specific role is not currently listed?',
      a: 'Absolutely! We are always looking for passionate engineers, content creators, finance professionals, and operations leaders. You can submit an open application or email your CV directly to hr@thesolarark.com.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 selection:bg-[#8B1E1E] selection:text-white pt-24 pb-20">
      
      {/* ── 1. COMPACT CONTEXT / BREADCRUMB ROW ── */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-4">
        <div className="flex items-center justify-between py-2 border-b border-stone-200/60">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-[#8B1E1E] transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
            <span
              onClick={() => onNavigate('/')}
              className="hover:text-stone-800 cursor-pointer flex items-center gap-1"
            >
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </span>
            <span className="text-stone-300">/</span>
            <span className="text-[#8B1E1E] font-bold">Careers &amp; Opportunities</span>
          </div>
        </div>
      </div>

      {/* ── 2. HERO SHOWCASE COMPOSITION ── */}
      <section className="relative overflow-hidden pt-4 pb-12 sm:pb-16 lg:pb-20">
        
        {/* Ambient Right Photographic Texture */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[50%] pointer-events-none z-0 overflow-hidden opacity-90">
          <img
            src="/images/gallery/office.jpg"
            alt="SolarArk Engineering Team"
            className="w-full h-full object-cover object-center"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 15%, rgba(0,0,0,0.8) 45%, black 80%), linear-gradient(to bottom, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 15%, rgba(0,0,0,0.8) 45%, black 80%), linear-gradient(to bottom, black 80%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/85 to-transparent lg:via-[#FAF9F6]/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="max-w-2xl xl:max-w-3xl space-y-6 pt-2">
            
            {/* Program Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7D1818] shadow-xs text-[11px] font-bold text-white tracking-wider uppercase font-heading">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>JOIN INDIA’S CLEAN ENERGY REVOLUTION</span>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold text-[#0B1730] font-heading tracking-tight leading-[1.12] m-0">
                Empower Your Career with <br />
                <span className="text-[#8B1E1E]">SolarArk Projects</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-slate-800 font-heading leading-tight tracking-tight">
                Shaping the Future of Renewable Energy with Innovation &amp; Excellence
              </h2>
            </div>

            {/* Factual Mission Statement Copy (Extracted from official site) */}
            <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
              <p>
                At <strong>SolarArk Projects Pvt. Ltd.</strong>, we are shaping the future of renewable energy with innovation and excellence. Join our dynamic team and be part of a mission-driven organization committed to sustainability and technological advancement.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                We offer exciting career opportunities across sales, engineering, design, and project management, empowering professionals to grow and make a real impact. With a culture of collaboration, continuous learning, and employee well-being, we foster an environment where talent thrives.
              </p>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#openings"
                className="bg-[#7D1818] hover:bg-[#5E1212] active:scale-[0.98] text-white font-heading font-bold px-7 py-3.5 rounded-xl shadow-md shadow-[#8B1E1E]/20 transition-all inline-flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>View Open Positions ({openRoles.length})</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:hr@thesolarark.com"
                className="bg-white hover:bg-stone-50 border border-stone-200 text-slate-800 font-semibold px-5 py-3.5 rounded-xl shadow-xs transition-all inline-flex items-center gap-2 text-sm cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#8B1E1E]" />
                <span>hr@thesolarark.com</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. CONNECTED PROOF STRIP CARD ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-16 relative z-20">
        <div className="bg-white rounded-[26px] sm:rounded-3xl border border-stone-100 shadow-[0_12px_36px_rgba(0,0,0,0.06)] p-6 sm:p-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-stone-100 items-center">
            
            <div className="flex items-center gap-4 lg:px-6">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#8B1E1E] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#0B1730] font-heading">#1 Solar EPC</div>
                <div className="text-xs text-stone-500 font-medium">Central India Leader</div>
              </div>
            </div>

            <div className="flex items-center gap-4 lg:px-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#0B1730] font-heading">35+ MW</div>
                <div className="text-xs text-stone-500 font-medium">Capacity Commissioned</div>
              </div>
            </div>

            <div className="flex items-center gap-4 lg:px-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#0B1730] font-heading">100% Growth</div>
                <div className="text-xs text-stone-500 font-medium">Year-on-Year Expansion</div>
              </div>
            </div>

            <div className="flex items-center gap-4 lg:px-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#0B1730] font-heading">4.8 / 5.0</div>
                <div className="text-xs text-stone-500 font-medium">Team Culture Rating</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. WHY BUILD YOUR CAREER AT SOLARARK ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 lg:mb-28">
        <div className="space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E1E]/10 border border-[#8B1E1E]/20 text-xs font-bold text-[#8B1E1E] font-heading">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Our Culture &amp; Benefits</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Work at <span className="text-[#8B1E1E]">SolarArk?</span>
            </h2>
            <p className="text-sm text-stone-600">
              We empower our people with the resources, autonomy, and support needed to build extraordinary careers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Pillar 1 */}
            <div className="bg-white border border-stone-200/90 rounded-3xl p-7 shadow-xs hover:border-[#8B1E1E]/40 hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Booming Clean-Tech Sector
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                Be at the forefront of India’s rapid solar transition driven by national PM Surya Ghar policies and distributed clean energy expansion.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white border border-stone-200/90 rounded-3xl p-7 shadow-xs hover:border-[#8B1E1E]/40 hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Rewarding Compensation &amp; Bonuses
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                Competitive fixed packages, monthly project execution bonuses, quarterly incentives, and transparent career progression paths.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white border border-stone-200/90 rounded-3xl p-7 shadow-xs hover:border-[#8B1E1E]/40 hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#8B1E1E] flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Continuous Technical Training
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                Masterclasses on 3D CAD shadow analysis, hybrid inverters, IoT generation telemetry, and DISCOM net-metering processes.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white border border-stone-200/90 rounded-3xl p-7 shadow-xs hover:border-[#8B1E1E]/40 hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Empowered &amp; Collaborative Culture
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                Work alongside passionate engineers, innovators, and mentors in an open environment that values your ideas and initiative.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="bg-white border border-stone-200/90 rounded-3xl p-7 shadow-xs hover:border-[#8B1E1E]/40 hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Regional Presence &amp; Flexibility
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                Opportunities across Nagpur, Pune, Amravati, Sambhajinagar, Wardha, and Akola with field and central office roles.
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="bg-white border border-stone-200/90 rounded-3xl p-7 shadow-xs hover:border-[#8B1E1E]/40 hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Real Environmental Impact
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                Every system your team installs offsets tonnes of carbon emissions, helping Indian families and industries live sustainably.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── 5. OPEN POSITIONS & APPLICATION PORTAL ── */}
      <section id="openings" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 lg:mb-28 scroll-mt-24">
        <div className="space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E1E]/10 text-xs font-bold text-[#8B1E1E] font-heading">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Job Openings</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Current Career Opportunities ({filteredRoles.length})
              </h2>
            </div>

            {/* Department Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 md:pb-0">
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider font-heading mr-1 shrink-0">
                Department:
              </span>
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-heading transition-all cursor-pointer whitespace-nowrap ${
                    selectedDepartment === dept
                      ? 'bg-[#8B1E1E] text-white shadow-xs'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  {dept === 'All' ? 'All Roles' : dept}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: Open Roles List */}
            <div className="lg:col-span-7 space-y-6">
              {filteredRoles.map((role) => {
                const isSelected = selectedRole === role.title;
                return (
                  <div
                    key={role.id}
                    className={`bg-white rounded-3xl border p-6 sm:p-7 shadow-xs transition-all duration-200 space-y-5 ${
                      isSelected
                        ? 'border-[#8B1E1E] ring-2 ring-[#8B1E1E]/15 shadow-md'
                        : 'border-stone-200/90 hover:border-stone-300'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider font-heading px-2.5 py-0.5 rounded-md bg-red-50 text-[#8B1E1E] border border-red-100">
                          {role.department}
                        </span>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700">
                          {role.type}
                        </span>
                      </div>

                      <span className="text-xs font-bold text-amber-700 font-heading bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                        {role.salary}
                      </span>
                    </div>

                    {/* Title & Meta */}
                    <div className="space-y-1">
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                        {role.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 pt-1">
                        <span className="flex items-center gap-1 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-[#E27D16]" /> {role.location}
                        </span>
                        <span className="flex items-center gap-1 font-medium">
                          <Briefcase className="w-3.5 h-3.5 text-stone-400" /> {role.experience}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                      {role.description}
                    </p>

                    {/* Key Responsibilities */}
                    <div className="space-y-2 pt-2 border-t border-stone-100">
                      <span className="text-xs font-bold text-slate-800 font-heading block">
                        Key Responsibilities:
                      </span>
                      <div className="space-y-1.5">
                        {role.responsibilities.map((resp, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-stone-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="space-y-2 pt-2 border-t border-stone-100">
                      <span className="text-xs font-bold text-slate-800 font-heading block">
                        Requirements &amp; Qualifications:
                      </span>
                      <div className="space-y-1.5">
                        {role.requirements.map((req, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-stone-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#8B1E1E] shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={() => scrollToApply(role.title)}
                        className={`text-xs font-bold font-heading px-5 py-2.5 rounded-xl transition-all inline-flex items-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-[#8B1E1E] text-white shadow-sm'
                            : 'bg-stone-100 hover:bg-[#8B1E1E] text-stone-800 hover:text-white'
                        }`}
                      >
                        <span>Apply for this Role</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={`mailto:hr@thesolarark.com?subject=Application%20for%20${encodeURIComponent(role.title)}`}
                        className="text-xs text-stone-500 hover:text-[#8B1E1E] font-medium transition-colors"
                      >
                        Email CV directly →
                      </a>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Right 5 Columns: Direct Job Application Form */}
            <div id="apply-form" className="lg:col-span-5 scroll-mt-28">
              <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-xl space-y-6 sticky top-28">
                
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E1E]/10 text-xs font-bold text-[#8B1E1E] font-heading mb-2">
                    <Send className="w-3.5 h-3.5" />
                    <span>Direct HR Portal</span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                    Apply for Position
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Submit your application directly to SolarArk’s recruitment board.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-heading text-xl font-bold text-slate-900">
                        Application Received!
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto">
                        Thank you <strong>{applicantData.name}</strong> for applying for <strong>{selectedRole}</strong>. Our HR department will review your profile and contact you within 48 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-[#8B1E1E] hover:underline pt-2 cursor-pointer"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    
                    {/* Selected Role */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 font-heading">
                        Applying For *
                      </label>
                      <select
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold text-slate-900 focus:border-[#8B1E1E] focus:ring-2 focus:ring-[#8B1E1E]/20 focus:outline-none bg-white"
                      >
                        {openRoles.map((r) => (
                          <option key={r.id} value={r.title}>
                            {r.title} ({r.department})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 font-heading">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Anand Kulkarni"
                        value={applicantData.name}
                        onChange={(e) => {
                          setApplicantData({ ...applicantData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 transition-all focus:outline-none focus:ring-2 ${
                          errors.name
                            ? 'border-red-400 focus:ring-red-300'
                            : 'border-stone-300 focus:border-[#8B1E1E] focus:ring-[#8B1E1E]/20'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-600 font-medium">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Mobile */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          placeholder="9876543210"
                          value={applicantData.phone}
                          onChange={(e) => {
                            setApplicantData({ ...applicantData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: '' });
                          }}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 transition-all focus:outline-none focus:ring-2 ${
                            errors.phone
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-stone-300 focus:border-[#8B1E1E] focus:ring-[#8B1E1E]/20'
                          }`}
                        />
                        {errors.phone && <p className="text-xs text-red-600 font-medium">{errors.phone}</p>}
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="anand@example.com"
                          value={applicantData.email}
                          onChange={(e) => {
                            setApplicantData({ ...applicantData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 transition-all focus:outline-none focus:ring-2 ${
                            errors.email
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-stone-300 focus:border-[#8B1E1E] focus:ring-[#8B1E1E]/20'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-red-600 font-medium">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Current City */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Current Location / City *
                        </label>
                        <select
                          value={applicantData.city}
                          onChange={(e) => setApplicantData({ ...applicantData, city: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-slate-900 focus:border-[#8B1E1E] focus:ring-2 focus:ring-[#8B1E1E]/20 focus:outline-none bg-white"
                        >
                          <option value="Nagpur">Nagpur</option>
                          <option value="Pune">Pune</option>
                          <option value="Amravati">Amravati</option>
                          <option value="Chhatrapati Sambhajinagar">Chh. Sambhajinagar</option>
                          <option value="Wardha">Wardha</option>
                          <option value="Akola">Akola</option>
                          <option value="Nashik">Nashik</option>
                          <option value="Other">Other Maharashtra City</option>
                        </select>
                      </div>

                      {/* Experience */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Relevant Experience *
                        </label>
                        <select
                          value={applicantData.experience}
                          onChange={(e) => setApplicantData({ ...applicantData, experience: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-slate-900 focus:border-[#8B1E1E] focus:ring-2 focus:ring-[#8B1E1E]/20 focus:outline-none bg-white"
                        >
                          <option value="Fresher / < 1 Year">Fresher / Under 1 Year</option>
                          <option value="1-3 Years">1 – 3 Years</option>
                          <option value="3-5 Years">3 – 5 Years</option>
                          <option value="5+ Years Senior">5+ Years Senior</option>
                        </select>
                      </div>
                    </div>

                    {/* LinkedIn / Resume Drive Link */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 font-heading">
                        LinkedIn Profile / Google Drive Resume Link (Optional)
                      </label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/yourprofile or drive link"
                        value={applicantData.portfolioUrl}
                        onChange={(e) => setApplicantData({ ...applicantData, portfolioUrl: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-slate-900 focus:border-[#8B1E1E] focus:ring-2 focus:ring-[#8B1E1E]/20 focus:outline-none"
                      />
                    </div>

                    {/* Brief Note */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 font-heading">
                        Short Cover Note / Background
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Tell us about your background and why you want to join SolarArk..."
                        value={applicantData.message}
                        onChange={(e) => setApplicantData({ ...applicantData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-slate-900 focus:border-[#8B1E1E] focus:ring-2 focus:ring-[#8B1E1E]/20 focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#8B1E1E] hover:bg-[#5E1212] active:scale-[0.98] text-white font-heading font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-md shadow-[#8B1E1E]/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Processing Application...</span>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="pt-2 text-center text-xs text-stone-500 border-t border-stone-100">
                      Or email your CV directly to{' '}
                      <a href="mailto:hr@thesolarark.com" className="font-bold text-[#8B1E1E] hover:underline">
                        hr@thesolarark.com
                      </a>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 6. 4-STEP RECRUITMENT JOURNEY ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 lg:mb-28">
        <div className="bg-[#FCFAF7] border border-stone-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 font-heading">
              <Compass className="w-3.5 h-3.5" />
              <span>Hiring Process</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Simple &amp; Transparent Hiring Journey
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              From application review to official offer letter in under 7 business days.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#8B1E1E] font-heading font-extrabold flex items-center justify-center">
                01
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900">
                Application Review
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Our talent team reviews your profile within 48 hours to assess technical alignment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#8B1E1E] font-heading font-extrabold flex items-center justify-center">
                02
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900">
                Technical Discussion
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                A 30-minute phone or video conversation focusing on your core domain strengths.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#8B1E1E] font-heading font-extrabold flex items-center justify-center">
                03
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900">
                Leadership Meeting
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Connect with our founders and engineering heads to discuss growth aspirations and cultural fit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 font-heading font-extrabold flex items-center justify-center">
                04
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900">
                Offer &amp; Induction
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Receive your official offer letter and welcome kit with immediate onboarding support.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── 7. CAREERS FAQ ACCORDION ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-16">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E1E]/10 text-xs font-bold text-[#8B1E1E] font-heading">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions About Working Here?</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Careers Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {careerFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-heading text-sm sm:text-base font-bold text-slate-900 hover:text-[#8B1E1E] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#8B1E1E] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
