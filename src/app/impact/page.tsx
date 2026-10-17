"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Building2,
  Lightbulb,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Newspaper,
  Award,
  CheckCircle2,
  TrendingUp,
  X,
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";

export default function ImpactPage() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [selectedClipping, setSelectedClipping] = useState<any | null>(null);

  // 3 Qualitative Outcome Pillars from blueprint
  const outcomePillars = [
    {
      title: "Curriculum & CoE Co-Creation",
      badge: "Institutional Infrastructure",
      desc: "Boardroom feedback from Bengaluru, Hyderabad, Kolkata, Mumbai, and Chennai has translated into specialized skill labs on campus—including the July 2026 Tech Mahindra Centre of Excellence at ITER and Wipro job-readiness tracks (Fast Forward, Talent Next, Mission10x).",
      metric: "Active CoEs with Tech Mahindra & LTTS",
    },
    {
      title: "Record-Breaking Graduate Absorption",
      badge: "Career Velocity",
      desc: "Deepened trust among global capability centres and Fortune 500 recruiters contributed to a 94.54% engineering placement rate, a 97.22% MBA placement rate, and London Stock Exchange Group (LSEG) selecting 11 SOA students in a single drive—its highest campus tally in India.",
      metric: "11 Hired by LSEG · ₹46 LPA Peak",
    },
    {
      title: "Gen-Z Leadership & HR Policy Adoption",
      badge: "Workplace Cultural Reform",
      desc: "Over 500 participating CHROs, VPs, and talent leaders across six conclaves have co-developed actionable playbooks on psychological safety, Upstander/Sponsor allyship roles, and empathetic Gen-Z onboarding for hybrid corporate environments.",
      metric: "500+ Executives Engaged",
    },
  ];

  // 9 Press & Media Clippings from blueprint
  const pressClippings = [
    {
      id: "dc-hyd",
      outlet: "Deccan Chronicle",
      title: "Allyship++ Conclave Focuses on Leadership and Collaboration",
      date: "July 2024 · Hyderabad",
      category: "Conclave Coverage",
      summary: "Detailed coverage of the Hyderabad chapter headlined by former Indian international cricketer Arshad Ayub, CXO leaders from UPS, Human Edge, and CSIR scientists deliberating collaborative leadership and industry-academia cooperation.",
      quote: "SOA convenes corporate leadership to bridge the gap between academic research and business transformation.",
      link: "https://www.deccanchronicle.com/southern-states/allyship-conclave-focuses-on-leadership-and-collaboration-1812653",
      image: "/news-deccan-hyd.jpg",
    },
    {
      id: "statesman-techm",
      outlet: "The Statesman",
      title: "Odisha: SOA Ties Up with Tech Mahindra to Boost Industry-Ready Skills",
      date: "July 2026 · Bhubaneswar",
      category: "Centre of Excellence",
      summary: "Reporting on the inauguration of the Tech Mahindra Centre of Excellence at ITER campus under the stewardship of Founder President & Chairman Prof. (Dr.) Manojranjan Nayak and Tech Mahindra's Dharmaraj Nayak to train engineers in ServiceNow, AI/ML, and Cloud architecture.",
      quote: "A pioneering milestone accelerating hands-on enterprise competency directly within university laboratories.",
      link: "https://www.thestatesman.com/business/odisha-soa-ties-up-with-tech-mahindra-to-boost-industry-ready-skills-1503616250.html",
      image: "/soa-iter-building.jpg",
    },
    {
      id: "prameya-genz",
      outlet: "Prameya News",
      title: "SOA Organises Allyship++ 2.0 with Focus on Gen-Z Aspirations at Hyderabad",
      date: "May 2026 · Hyderabad",
      category: "Conclave 2.0",
      summary: "Focusing on the 2.0 cycle launch at Le Meridien, Gachibowli, featuring AFI Secretary Dr. G. Srinivas Patnaik, IIT Delhi's Prof. Sanjay Dhir, and HR heads from Akamai, Reckitt, and NCC Ltd on psychological safety and learning agility.",
      quote: "Modern enterprises must adapt to Gen-Z aspirations through intentional, daily mentorship.",
      link: "https://www.prameyanews.com/soa-organises-allyship-20-with-focus-on-gen-z-aspirations-at-hyderabad",
      image: "/news-prameya-genz.webp",
    },
    {
      id: "bytes-blr",
      outlet: "OdishaBytes",
      title: "70 Corporate Leaders Attend SOA's Allyship++ Event at Bengaluru",
      date: "June 2024 · Bengaluru",
      category: "Conclave Coverage",
      summary: "Reporting on the inaugural conclave in Bengaluru with top executives from Microsoft, Dell, Zscaler, BNY Mellon, and an inspiring virtual keynote by Olympian Anju Bobby George on leadership in sports.",
      quote: "Over 70 corporate stalwarts gathered in Bengaluru to initiate a transformative dialogue with SOA University.",
      link: "https://odishabytes.com/70-corporate-leaders-attend-soas-allyship-event-at-bengaluru/",
      image: "/news-bytes-blr.jpg",
    },
    {
      id: "prameya-mumbai",
      outlet: "Prameya News",
      title: "Nilesh Kulkarni Addresses SOA's Allyship Conclave at Mumbai",
      date: "October 2025 · Mumbai",
      category: "Conclave Coverage",
      summary: "Former Indian Test cricketer Nilesh Kulkarni and Olympian Anand Menezes joined Chairman Prof. (Dr.) Manojranjan Nayak and LTTS Global Head Dr. P.B. Kotur in Mumbai to examine employee well-being and high-performance discipline.",
      quote: "Connecting the resilience of international sport with executive well-being and boardroom empathy.",
      link: "https://www.prameyanews.com/nilesh-kulkarni-addresses-soas-allyship-conclave-at-mumbai",
      image: "/news-prameya-mumbai.webp",
    },
    {
      id: "update-lseg",
      outlet: "UpdateOdisha",
      title: "First Time in Odisha: LSEG Hires 11 SOA Students",
      date: "September 2025 · Bhubaneswar",
      category: "Placement Milestone",
      summary: "London Stock Exchange Group (LSEG) selected 11 B.Tech and MCA students from SOA following a rigorous six-round recruitment drive—representing the largest cohort recruited by LSEG from any single campus in India.",
      quote: "A testament to the global competitiveness of SOA's technical curriculum and student caliber.",
      link: "https://updateodisha.com/2025/09/13/first-time-in-odisha-lseg-hires-11-soa-students-87858/",
      image: "/news-update-lseg.jpg",
    },
    {
      id: "sakala-kolkata",
      outlet: "The Sakala",
      title: "Allyship++ Conclave at Kolkata: Sports Legends & Corporate Leaders",
      date: "September 2024 · Kolkata",
      category: "Sports & Industry Tribute",
      summary: "1964 Olympic hockey gold medalist Gurbux Singh, footballer Gautam Sarkar, and Dhoni's mentor Satyaprakash Krishna joined PwC, Lexmark, and Fortune 500 DEI advisors to deliberate digital transformation and workplace inclusion.",
      quote: "Honoring India's greatest athletic icons while laying the roadmap for modern inclusive workplaces.",
      link: "https://www.soa.ac.in/general-notifications/2024/9/30/soa-organises-allyship-conclave-at-kolkata",
      image: "/CON01638.JPG",
    },
    {
      id: "around-chennai",
      outlet: "Around Odisha",
      title: "SOA University Hosts Allyship++ 2.0 at Chennai",
      date: "August 2026 · Chennai",
      category: "Conclave 2.0",
      summary: "Paris Olympics sprint coach Premanand J. and Standard Chartered Global Head Archana Grover led deliberations with 60+ talent heads from Rocket India, Foodhub, Nordex, KaarTech, and Mphasis on allyship as everyday leadership.",
      quote: "Allyship is not an optional HR policy—it is a daily leadership responsibility that unlocks sustainable innovation.",
      link: "https://www.soa.ac.in/general-notifications/2026/8/7/soa-university-hosts-allyship-20-at-chennai",
      image: "/news-around-chennai.jpg",
    },
    {
      id: "sanchar-nirf",
      outlet: "The Sanchar / Orissa Today",
      title: "SOA Ranked 15th in Country in NIRF 2025; Climbs in Engineering & Medicine",
      date: "September 2025 · National",
      category: "Academic Ranking",
      summary: "Ministry of Education announces NIRF 2025: SOA ranks 15th nationally in the University category with score of 63.14. ITER engineering ascends to 22nd and Medical surges to 15th in India.",
      quote: "Reinforcing SOA's stature as a multidisciplinary powerhouse and the #1 university in Odisha.",
      link: "https://www.soa.ac.in/general-notifications/2025/9/4/soa-ranked-15th-in-country-in-2025-nirf-rankings-climbs-up-the-ladder-in-medical-sciences-and-engineering",
      image: "/soa-campus-aerial.jpg",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-slate-900 pb-20">
      {/* 1. Reconstructed Dark Photographic Hero Section (from blueprint) */}
      <section className="relative bg-[#070d18] text-white pt-12 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[11px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
              Measurable Outcomes & Media Footprint
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
              The Impact of <span className="text-blue-500">Allyship</span><span className="text-cyan-400 font-mono">++</span>
            </h1>

            <p className="text-lg sm:text-xl font-bold text-slate-100">
              Conversations in the Boardroom. Structural Transformations on Campus.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Across six chapters in five corporate capitals, Allyship++ has shifted industry-academia engagement from transactional placement drives to sustained leadership dialogue—generating national media coverage, new Centres of Excellence, and actionable workplace frameworks.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsInviteOpen(true)}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide shadow-md shadow-blue-600/30 transition-all flex items-center gap-2"
              >
                <span>Request Executive Conclave Seat</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900 group">
              <img
                src="/IMG_7873.jpg"
                alt="Allyship++ National Conclave Live Delegation and Leadership"
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-5">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Partnership Outcomes
                </span>
                <span className="text-sm font-bold text-white mt-0.5">
                  Centres of Excellence & Industry Transformation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE QUALITATIVE OUTCOME PILLARS (from blueprint) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
            Institutional Transformation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            From Dialogue to Institutional Action
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            How executive conclaves in Bengaluru, Hyderabad, Kolkata, Mumbai, and Chennai translate into concrete academic, research, and corporate talent outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomePillars.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                  {p.badge}
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-xs font-bold text-blue-700">
                {p.metric}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. IN THE PRESS — 9 NEWSPAPER & MEDIA CLIPPINGS (from blueprint) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-200">
        <div className="max-w-3xl space-y-3 mb-10">
          <div className="flex items-center gap-2 text-blue-600">
            <Newspaper className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider font-mono">
              National & Regional Media Chronicle
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            In the Press
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            National and regional print and digital publications—including Deccan Chronicle, The Statesman, Prameya News, OdishaBytes, The Sakala, Samaya, Around Odisha, Orissa Today, and The Sanchar—have chronicled SOA’s Allyship++ journey across India. Click any clipping to inspect the full report.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressClippings.map((c) => (
            <div
              key={c.id}
              onClick={() => setSelectedClipping(c)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-cyan-400 font-mono text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-700">
                  {c.outlet}
                </div>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {c.date}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-1 line-clamp-2">
                    {c.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {c.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>Inspect Report</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIPPING DETAIL MODAL / LIGHTBOX */}
      {selectedClipping && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                  {selectedClipping.outlet} · {selectedClipping.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  {selectedClipping.title}
                </h3>
                <span className="text-xs text-slate-500 font-medium block mt-1">
                  {selectedClipping.date}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedClipping(null)}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="h-52 sm:h-64 w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner">
                <img
                  src={selectedClipping.image}
                  alt={selectedClipping.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <blockquote className="text-sm text-slate-800 italic border-l-4 border-blue-600 pl-4 py-1 bg-slate-50 rounded-r-xl">
                “{selectedClipping.quote}”
              </blockquote>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedClipping.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                Official Press Record Archive · SOA University
              </span>
              <a
                href={selectedClipping.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <span>Read Full Notification</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Global Invitation Modal */}
      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />
    </div>
  );
}
