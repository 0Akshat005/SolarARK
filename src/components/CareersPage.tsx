/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
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
  ChevronDown,
  ChevronUp,
  Search,
  Check,
  Compass,
  HelpCircle,
  Link as LinkIcon,
  UserCheck,
  FileText
} from 'lucide-react';

interface CareersPageProps {
  onNavigate: (path: string) => void;
  onCtaClick: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({
  onNavigate,
  onCtaClick,
}) => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedRoleId, setExpandedRoleId] = useState<string | null>('sales-advisor');
  const [selectedRoleForForm, setSelectedRoleForForm] = useState<string>('Solar Sales Consultant / Energy Advisor');

  // Application Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    city: 'Nagpur',
    experience: '1-3 Years',
    noticePeriod: 'Immediate / < 15 Days',
    resumeUrl: '',
    coverNote: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
      experience: '1–4 Years',
      salary: '₹3.5L – ₹6.5L CTC + Commissions',
      badge: 'High Commission',
      summary: 'Meet residential homeowners and housing society committees to present customized solar savings proposals and close turnkey solar bookings.',
      responsibilities: [
        'Conduct client site assessments and explain PM Surya Ghar ₹78,000 subsidy benefits.',
        'Prepare detailed financial payback proposals using our solar pricing engine.',
        'Coordinate with engineering teams for 3D layout approvals and structural planning.',
      ],
      requirements: [
        'Strong communication skills in Marathi, Hindi, and English.',
        'Prior direct sales experience in rooftop solar, electrical appliances, or financial services.',
        'Own two-wheeler vehicle for local client consultations.',
      ],
    },
    {
      id: 'site-engineer',
      title: 'Solar Electrical Engineer & Site Supervisor',
      department: 'Engineering & EPC',
      location: 'Nagpur / Wardha / Akola / Amravati',
      type: 'Full Time',
      experience: '2–5 Years',
      salary: '₹4.0L – ₹7.0L CTC',
      badge: 'Engineering',
      summary: 'Supervise on-site rooftop solar panel mounting, inverter wiring, distribution boxes, earthing pit connections, and quality inspections.',
      responsibilities: [
        'Supervise structural fabrication of elevated GI structures (6-8 ft terrace clearance).',
        'Verify string sizing, DC cable routing, inverter synchronization, and safety earthing.',
        'Conduct DISCOM net-meter inspection readiness tests and bi-directional meter setup.',
      ],
      requirements: [
        'Diploma or B.E./B.Tech in Electrical or Civil Engineering.',
        'Hands-on experience supervising 3 kW to 50 kW residential & commercial rooftop setups.',
        'Valid electrical supervisor license is an advantage.',
      ],
    },
    {
      id: 'cad-engineer',
      title: 'Solar 3D CAD & Shadow Analysis Engineer',
      department: 'Design & CAD',
      location: 'Nagpur Head Office / Hybrid',
      type: 'Full Time',
      experience: '1–3 Years',
      salary: '₹3.5L – ₹5.5L CTC',
      badge: 'Design & Tech',
      summary: 'Design precision 3D rooftop solar layouts, shadow analysis models, structural drawings, and Single Line Diagrams (SLDs) for DISCOM filings.',
      responsibilities: [
        'Generate PVsyst / SketchUp / AutoCAD layouts for residential and commercial rooftops.',
        'Perform annual solar irradiance and seasonal shadow loss simulations.',
        'Draft Single Line Diagrams (SLDs) for MSEDCL / SNDL net-metering sanctions.',
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
      experience: '1–3 Years',
      salary: '₹3.0L – ₹4.8L CTC',
      badge: 'Government Liaison',
      summary: 'Process online PM Surya Ghar national portal applications, coordinate MSEDCL meter testing, and ensure timely subsidy disbursement.',
      responsibilities: [
        'File consumer applications on National Portal for Rooftop Solar and MSEDCL portals.',
        'Liaise with junior engineers at local DISCOM subdivisions for site inspection approvals.',
        'Track bi-directional net meter availability and synchronization commissioning.',
      ],
      requirements: [
        'Familiarity with DISCOM net-metering processes in Maharashtra (MSEDCL/SNDL).',
        'Strong documentation, MS Excel, and correspondence management skills.',
        'High organizational speed and proactive customer follow-up abilities.',
      ],
    },
    {
      id: 'telecaller',
      title: 'Customer Success & Telecalling Specialist',
      department: 'Operations & Support',
      location: 'Nagpur Head Office',
      type: 'Full Time',
      experience: 'Fresher / 1–2 Years',
      salary: '₹2.5L – ₹4.0L CTC + Performance Bonuses',
      badge: 'Customer Success',
      summary: 'Handle inbound inquiries from solar savings calculator users, educate homeowners on solar benefits, and schedule free site assessment visits.',
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
      experience: '2–4 Years',
      salary: '₹3.6L – ₹5.5L CTC',
      badge: 'Quality Assurance',
      summary: 'Audit completed rooftop installations for structural torque, water seal integrity, electrical insulation resistance, and safety parameters.',
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

  // Filtered Roles based on Search & Department
  const filteredRoles = useMemo(() => {
    return openRoles.filter((role) => {
      const matchesDept = selectedDepartment === 'All' || role.department === selectedDepartment;
      const matchesSearch =
        searchQuery.trim() === '' ||
        role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        role.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        role.department.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDept && matchesSearch;
    });
  }, [selectedDepartment, searchQuery]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full Name must be at least 3 characters.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!/^[0-9]{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      newErrors.phoneNumber = 'Enter a valid 10-digit mobile number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

  const selectRoleAndScrollToForm = (roleTitle: string) => {
    setSelectedRoleForForm(roleTitle);
    const formElement = document.getElementById('application-studio');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
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
      a: 'Absolutely! We are always looking for passionate engineers, content creators, finance professionals, and operations leaders. You can submit an open application in the form below or email your CV directly to hr@thesolarark.com.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 selection:bg-[#8B1E1E] selection:text-white pt-24 pb-20">
      
      {/* ── 1. COMPACT BREADCRUMB ROW ── */}
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
            <span className="text-slate-800 font-bold">Careers &amp; Opportunities</span>
          </div>
        </div>
      </div>

      {/* ── 2. HERO: PARETO-FOCUSED HIGH-CONVERTING HEADER ── */}
      <section className="relative overflow-hidden pt-2 pb-12 sm:pb-16">
        
        {/* Modern Engineering Team Collaboration Photo (Right Blend) */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[62%] xl:w-[58%] pointer-events-none z-0 overflow-hidden">
          <img
            src="/images/careers/careers-hero-team.jpg"
            alt="SolarArk Engineering Team Collaboration"
            className="w-full h-full object-cover object-right-top"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.06) 12%, rgba(0,0,0,0.65) 35%, black 65%), linear-gradient(to bottom, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.06) 12%, rgba(0,0,0,0.65) 35%, black 65%), linear-gradient(to bottom, black 80%, transparent 100%)',
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
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#0B1730] font-heading tracking-tight leading-[1.12] m-0">
                Empower Your Career with <br />
                <span>SolarArk Projects</span>
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-[24px] font-bold text-slate-800 font-heading leading-tight tracking-tight">
                Shaping the Future of Renewable Energy with Innovation &amp; Excellence
              </h2>
            </div>

            {/* Official Mission Statement Copy */}
            <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
              <p>
                At <strong>SolarArk Projects Pvt. Ltd.</strong>, we are shaping the future of renewable energy with innovation and excellence. Join our dynamic team and be part of a mission-driven organization committed to sustainability and technological advancement.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                We offer exciting career opportunities across sales, engineering, CAD design, and project management, empowering professionals to grow and make a real impact. With a culture of collaboration, continuous learning, and employee well-being, we foster an environment where talent thrives.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#openings"
                className="bg-[#7D1818] hover:bg-[#5E1212] active:scale-[0.98] text-white font-heading font-bold px-6 py-3.5 rounded-xl shadow-md shadow-[#8B1E1E]/20 transition-all inline-flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>Browse {openRoles.length} Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#application-studio"
                className="bg-white hover:bg-stone-50 border border-stone-200 text-slate-800 font-semibold px-5 py-3.5 rounded-xl shadow-xs transition-all inline-flex items-center gap-2 text-sm cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#8B1E1E]" />
                <span>Instant Application Form</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. CONNECTED PROOF STRIP CARD ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-14 relative z-20">
        <div className="bg-white rounded-[24px] sm:rounded-3xl border border-stone-100 shadow-[0_12px_36px_rgba(0,0,0,0.06)] p-6 sm:p-7">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-stone-100 items-center">
            
            <div className="flex items-center gap-3.5 lg:px-6">
              <div className="w-11 h-11 rounded-2xl bg-red-50 text-[#8B1E1E] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#0B1730] font-heading">#1 Solar EPC</div>
                <div className="text-xs text-stone-500 font-medium">Central India Leader</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 lg:px-6">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#0B1730] font-heading">35+ MW</div>
                <div className="text-xs text-stone-500 font-medium">Capacity Commissioned</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 lg:px-6">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#0B1730] font-heading">100% Growth</div>
                <div className="text-xs text-stone-500 font-medium">Year-on-Year Expansion</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 lg:px-6">
              <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#0B1730] font-heading">4.8 / 5.0</div>
                <div className="text-xs text-stone-500 font-medium">Team Culture Rating</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. WHY WORK AT SOLARARK (COMPACT CULTURE PILLARS) ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-16 lg:mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          
          <div className="bg-white border border-stone-200/80 rounded-2xl p-5 shadow-2xs hover:border-[#8B1E1E]/30 transition-all flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-sm text-slate-900">Booming Clean-Tech Sector</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Directly participate in India's national PM Surya Ghar distributed rooftop revolution.</p>
            </div>
          </div>

          <div className="bg-white border border-stone-200/80 rounded-2xl p-5 shadow-2xs hover:border-[#8B1E1E]/30 transition-all flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-sm text-slate-900">Rewarding Compensation</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Competitive fixed CTC packages + monthly project bonuses &amp; fast-track promotion paths.</p>
            </div>
          </div>

          <div className="bg-white border border-stone-200/80 rounded-2xl p-5 shadow-2xs hover:border-[#8B1E1E]/30 transition-all flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#8B1E1E] flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-sm text-slate-900">Continuous Technical Training</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Hands-on masterclasses on solar CAD design, smart inverters, and DISCOM liaisons.</p>
            </div>
          </div>

          <div className="bg-white border border-stone-200/80 rounded-2xl p-5 shadow-2xs hover:border-[#8B1E1E]/30 transition-all flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-sm text-slate-900">Collaborative Culture</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Work in an open, vibrant environment that celebrates innovation, diversity, and team wins.</p>
            </div>
          </div>

          <div className="bg-white border border-stone-200/80 rounded-2xl p-5 shadow-2xs hover:border-[#8B1E1E]/30 transition-all flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Building className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-sm text-slate-900">Multi-City Regional Hubs</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Active hubs across Nagpur, Pune, Amravati, Sambhajinagar, Wardha, and Akola.</p>
            </div>
          </div>

          <div className="bg-white border border-stone-200/80 rounded-2xl p-5 shadow-2xs hover:border-[#8B1E1E]/30 transition-all flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-sm text-slate-900">Real Environmental Impact</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Every megawatt your team commissions prevents thousands of tonnes of CO2 emissions.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. INTERACTIVE OPEN POSITIONS EXPLORER (HIGH-DENSITY & SPACE-EFFICIENT) ── */}
      <section id="openings" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-16 lg:mb-20 scroll-mt-24">
        <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
          
          {/* Header & Controls Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-stone-100 pb-5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#8B1E1E]/10 text-xs font-bold text-[#8B1E1E] font-heading">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Job Openings ({openRoles.length})</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Current Career Opportunities
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search role, skill, or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-stone-200 text-xs text-slate-900 focus:outline-none focus:border-[#8B1E1E] bg-stone-50"
              />
            </div>
          </div>

          {/* Department Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-heading transition-all cursor-pointer whitespace-nowrap ${
                  selectedDepartment === dept
                    ? 'bg-[#8B1E1E] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {dept === 'All' ? `All Positions (${openRoles.length})` : dept}
              </button>
            ))}
          </div>

          {/* Compact Interactive Accordion / Row List */}
          {filteredRoles.length === 0 ? (
            <div className="text-center py-10 bg-stone-50 rounded-2xl p-6">
              <p className="text-xs text-stone-500 font-medium">No positions match your search criteria.</p>
              <button
                onClick={() => {
                  setSelectedDepartment('All');
                  setSearchQuery('');
                }}
                className="mt-2 text-xs font-bold text-[#8B1E1E] hover:underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredRoles.map((role) => {
                const isExpanded = expandedRoleId === role.id;
                return (
                  <div
                    key={role.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isExpanded
                        ? 'border-[#8B1E1E]/40 bg-[#FCFAF7] shadow-xs'
                        : 'border-stone-200/80 bg-white hover:border-stone-300'
                    }`}
                  >
                    {/* Compact Clickable Row Header */}
                    <div
                      onClick={() => setExpandedRoleId(isExpanded ? null : role.id)}
                      className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3 cursor-pointer select-none"
                    >
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider font-heading px-2 py-0.5 rounded bg-red-50 text-[#8B1E1E] border border-red-100">
                            {role.department}
                          </span>
                          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            {role.type}
                          </span>
                        </div>
                        <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900">
                          {role.title}
                        </h3>
                      </div>

                      {/* Right Meta Chips & Toggle Arrow */}
                      <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                          <span className="flex items-center gap-1 font-medium bg-stone-100 px-2.5 py-1 rounded-lg">
                            <MapPin className="w-3 h-3 text-[#8B1E1E]" /> {role.location.split('/')[0]}
                          </span>
                          <span className="font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-lg">
                            {role.salary.split('+')[0]}
                          </span>
                        </div>

                        <div className="w-8 h-8 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center">
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-[#8B1E1E]" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Smooth Expandable Content Panel */}
                    {isExpanded && (
                      <div className="px-4 sm:px-6 pb-5 pt-1 border-t border-stone-200/60 space-y-4 text-slate-700 animate-in fade-in duration-150">
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal pt-2">
                          {role.summary}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-xl border border-stone-200/80 text-xs">
                          {/* Responsibilities */}
                          <div className="space-y-1.5">
                            <span className="font-bold text-slate-900 font-heading block">
                              Key Responsibilities:
                            </span>
                            {role.responsibilities.map((resp, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-stone-600">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </div>
                            ))}
                          </div>

                          {/* Requirements */}
                          <div className="space-y-1.5">
                            <span className="font-bold text-slate-900 font-heading block">
                              Requirements &amp; Skills:
                            </span>
                            {role.requirements.map((req, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-stone-600">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#8B1E1E] shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Direct Action Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                          <button
                            onClick={() => selectRoleAndScrollToForm(role.title)}
                            className="bg-[#8B1E1E] hover:bg-[#5E1212] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-all inline-flex items-center gap-1.5 cursor-pointer"
                          >
                            <span>Apply for {role.title.split('/')[0]}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <a
                            href={`mailto:hr@thesolarark.com?subject=Application%20for%20${encodeURIComponent(role.title)}`}
                            className="text-xs text-stone-500 hover:text-[#8B1E1E] font-medium transition-colors"
                          >
                            Or Email CV to hr@thesolarark.com →
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* ── 6. DEDICATED FULL-WIDTH APPLICATION STUDIO (CREATIVE & USER-FRIENDLY) ── */}
      <section id="application-studio" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-20 lg:mb-28 scroll-mt-24">
        <div className="bg-gradient-to-br from-[#8B1E1E] via-[#741616] to-[#5E1212] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Prompt Column */}
            <div className="lg:col-span-4 space-y-5">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-300 font-heading">
                <Send className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant HR Application</span>
              </div>

              <div className="space-y-2">
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                  Submit Your Application
                </h2>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-normal">
                  Takes less than 2 minutes. Our talent acquisition board reviews every profile and responds within 48 business hours.
                </p>
              </div>

              {/* Direct Support Highlights */}
              <div className="space-y-3 pt-2 border-t border-white/15 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <UserCheck className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Equal opportunity employer with merit-based growth</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>HR Helpline: <strong>+91 7080909590</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Official Careers Desk: <strong>hr@thesolarark.com</strong></span>
                </div>
              </div>

            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-8">
              <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl">
                
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading text-2xl font-bold text-slate-900">
                        Application Received Successfully!
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                        Thank you <strong>{formData.fullName}</strong>. We have received your application for <strong>{selectedRoleForForm}</strong>. Our HR team for <strong>{formData.city}</strong> will contact you via <strong>{formData.phoneNumber}</strong> / <strong>{formData.email}</strong>.
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
                    
                    {/* Role Dropdown */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 font-heading flex items-center justify-between">
                        <span>Applying For Position *</span>
                        <span className="text-[11px] font-normal text-stone-400">Auto-synced with selection</span>
                      </label>
                      <select
                        value={selectedRoleForForm}
                        onChange={(e) => setSelectedRoleForForm(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold text-slate-900 focus:border-[#8B1E1E] focus:ring-2 focus:ring-[#8B1E1E]/20 focus:outline-none bg-stone-50"
                      >
                        {openRoles.map((r) => (
                          <option key={r.id} value={r.title}>
                            {r.title} ({r.department})
                          </option>
                        ))}
                        <option value="General Open Application / Other">General Open Application (Other Expertise)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="e.g. Anand Kulkarni"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 transition-all focus:outline-none focus:ring-2 ${
                            errors.fullName
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-stone-300 focus:border-[#8B1E1E] focus:ring-[#8B1E1E]/20'
                          }`}
                        />
                        {errors.fullName && <p className="text-xs text-red-600 font-medium">{errors.fullName}</p>}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Mobile Number (10 Digits) *
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          placeholder="9876543210"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 transition-all focus:outline-none focus:ring-2 ${
                            errors.phoneNumber
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-stone-300 focus:border-[#8B1E1E] focus:ring-[#8B1E1E]/20'
                          }`}
                        />
                        {errors.phoneNumber && <p className="text-xs text-red-600 font-medium">{errors.phoneNumber}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="anand@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 transition-all focus:outline-none focus:ring-2 ${
                            errors.email
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-stone-300 focus:border-[#8B1E1E] focus:ring-[#8B1E1E]/20'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-red-600 font-medium">{errors.email}</p>}
                      </div>

                      {/* City */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Preferred Location / Base City *
                        </label>
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-slate-900 focus:border-[#8B1E1E] focus:ring-2 focus:ring-[#8B1E1E]/20 focus:outline-none"
                        >
                          <option value="Nagpur">Nagpur</option>
                          <option value="Pune">Pune</option>
                          <option value="Amravati">Amravati</option>
                          <option value="Chhatrapati Sambhajinagar">Chhatrapati Sambhajinagar</option>
                          <option value="Wardha">Wardha</option>
                          <option value="Akola">Akola</option>
                          <option value="Nashik">Nashik</option>
                          <option value="Other Maharashtra">Other Maharashtra Location</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Total Experience */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Total Relevant Experience *
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-slate-900 focus:border-[#8B1E1E] focus:ring-2 focus:ring-[#8B1E1E]/20 focus:outline-none"
                        >
                          <option value="Fresher / Under 1 Year">Fresher / Under 1 Year</option>
                          <option value="1-3 Years">1 – 3 Years</option>
                          <option value="3-5 Years">3 – 5 Years</option>
                          <option value="5+ Years Senior">5+ Years Senior</option>
                        </select>
                      </div>

                      {/* Notice Period */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 font-heading">
                          Notice Period / Availability *
                        </label>
                        <select
                          name="noticePeriod"
                          value={formData.noticePeriod}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-slate-900 focus:border-[#8B1E1E] focus:ring-2 focus:ring-[#8B1E1E]/20 focus:outline-none"
                        >
                          <option value="Immediate / < 15 Days">Immediate / Within 15 Days</option>
                          <option value="30 Days">30 Days</option>
                          <option value="60 Days">60 Days</option>
                        </select>
                      </div>
                    </div>

                    {/* Resume / Portfolio Link */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 font-heading flex items-center justify-between">
                        <span>Resume / LinkedIn / Google Drive Link (Optional)</span>
                        <span className="text-[11px] font-normal text-stone-400">Share viewable URL</span>
                      </label>
                      <div className="relative">
                        <LinkIcon className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="url"
                          name="resumeUrl"
                          placeholder="https://linkedin.com/in/... or drive.google.com/..."
                          value={formData.resumeUrl}
                          onChange={handleInputChange}
                          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-300 text-xs text-slate-900 focus:border-[#8B1E1E] focus:ring-2 focus:ring-[#8B1E1E]/20 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Short Cover Note */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 font-heading">
                        Brief Cover Note / Highlights
                      </label>
                      <textarea
                        name="coverNote"
                        rows={2}
                        placeholder="Share your key achievements or why you want to join SolarArk..."
                        value={formData.coverNote}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-slate-900 focus:border-[#8B1E1E] focus:ring-2 focus:ring-[#8B1E1E]/20 focus:outline-none resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#8B1E1E] hover:bg-[#5E1212] active:scale-[0.98] text-white font-heading font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-md shadow-[#8B1E1E]/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                      >
                        {isSubmitting ? (
                          <span>Submitting Application...</span>
                        ) : (
                          <>
                            <span>Submit Job Application</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-stone-500 text-center pt-1">
                      By submitting, you agree to receive interview calls and recruitment updates from SolarArk Projects Pvt. Ltd.
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 7. 4-STEP RECRUITMENT ROADMAP ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-16 lg:mb-20">
        <div className="bg-[#FCFAF7] border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 font-heading">
              <Compass className="w-3.5 h-3.5" />
              <span>Hiring Process</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Our Simple &amp; Transparent Hiring Journey
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              From application review to official offer letter in under 7 business days.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-xl bg-red-50 text-[#8B1E1E] font-heading font-bold flex items-center justify-center text-xs">
                01
              </div>
              <h3 className="font-heading text-sm font-bold text-slate-900">Application Review</h3>
              <p className="text-xs text-stone-500 leading-relaxed">HR reviews your profile within 48 hours for domain alignment.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-xl bg-red-50 text-[#8B1E1E] font-heading font-bold flex items-center justify-center text-xs">
                02
              </div>
              <h3 className="font-heading text-sm font-bold text-slate-900">Technical Discussion</h3>
              <p className="text-xs text-stone-500 leading-relaxed">A 30-minute call focusing on your practical domain strengths.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-xl bg-red-50 text-[#8B1E1E] font-heading font-bold flex items-center justify-center text-xs">
                03
              </div>
              <h3 className="font-heading text-sm font-bold text-slate-900">Leadership Meeting</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Connect with our founders &amp; heads on growth and cultural fit.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 font-heading font-bold flex items-center justify-center text-xs">
                04
              </div>
              <h3 className="font-heading text-sm font-bold text-slate-900">Offer &amp; Induction</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Receive your official offer letter and welcome kit with immediate induction.</p>
            </div>

          </div>

        </div>
      </section>

      {/* ── 8. CAREERS FAQ ACCORDION ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 mb-16">
        <div className="max-w-3xl mx-auto space-y-6">
          
          <div className="text-center space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#8B1E1E]/10 text-xs font-bold text-[#8B1E1E] font-heading">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions About Working Here?</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
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
