"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  Briefcase,
  Layers,
  GraduationCap,
  Send,
  ShieldCheck,
  Copy,
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  Phone,
  Award,
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";

export default function CollaboratePage() {
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  // Form states
  const [challengeTitle, setChallengeTitle] = useState("");
  const [industrySector, setIndustrySector] = useState("");
  const [challengeDesc, setChallengeDesc] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [refId, setRefId] = useState("");

  // 4 Corporate Partnership Pillars from blueprint
  const partnershipPillars = [
    {
      title: "Industry Challenges & Incubation",
      symbol: "?",
      desc: "Bring real-world engineering, clinical, or business challenges for faculty and student teams to prototype via the AIC-SOA Foundation (Atal Incubation Centre under NITI Aayog).",
      action: "Submit Problem Statement",
    },
    {
      title: "Centres of Excellence & R&D",
      symbol: "⚗",
      desc: "Co-establish specialized labs modeled on SOA’s recent Centres of Excellence with Tech Mahindra (ServiceNow & Enterprise Tech at ITER) and L&T Technology Services (AI in Medicine & MedTech).",
      action: "Explore CoE Models",
    },
    {
      title: "Executive Mentorship & Curriculum Co-Design",
      symbol: "☺",
      desc: "Shape flexible curricula and job-ready training tracks—building on SOA’s Talent Next and Mission10x alliances with Wipro Ltd and scholarships with Blue Star Foundation.",
      action: "Join Advisory Boards",
    },
    {
      title: "High-Velocity Internships & Campus Hiring",
      symbol: "✉",
      desc: "Recruit from an ecosystem delivering 94.54% B.Tech and 97.22% MBA placement rates, ₹46 LPA peak packages, and record selections by global leaders like the London Stock Exchange Group (LSEG).",
      action: "Initiate Recruitment",
    },
  ];

  // Placement Velocity Data Table from blueprint
  const placementData = [
    {
      faculty: "Engineering — B.Tech (ITER)",
      rate2022: "88.11%",
      rate2023: "91.47%",
      rate2024: "94.54% (1,802 / 1,903 placed; 92 higher studies)",
      median: "₹6.00 LPA (Peak: ₹43–46 LPA)",
      recruiters: "Microsoft, Amazon, Adobe, LSEG, JP Morgan, Zscaler, Dell, Samsung, Bosch, LTTS, Wipro, TCS, Cognizant",
    },
    {
      faculty: "Management — MBA (IBCS)",
      rate2022: "95.26%",
      rate2023: "94.79%",
      rate2024: "97.22% (175 / 180 placed)",
      median: "₹5.20 LPA",
      recruiters: "Deloitte, EY, KPMG, PwC, HDFC Bank, ICICI Bank, Axis Bank, Reliance, FactSet, Flipkart, Myntra",
    },
    {
      faculty: "Medicine — MBBS & MD/MS (IMS & SUM)",
      rate2022: "100.0%",
      rate2023: "100.0%",
      rate2024: "100.0% (148 / 148 placed)",
      median: "₹9.00 – ₹12.00 LPA",
      recruiters: "SUM Hospital, Apollo Hospitals, Max Healthcare, Fortis, National & Global Research Institutes",
    },
    {
      faculty: "Dental Sciences — BDS & MDS (IDS)",
      rate2022: "96.96%",
      rate2023: "93.40%",
      rate2024: "95.52% (64 / 67 placed)",
      median: "₹5.40 LPA (BDS) · ₹8.40 LPA (MDS)",
      recruiters: "Leading Corporate Dental Chains, Multi-Specialty Hospitals, Academic & Clinical Practice",
    },
    {
      faculty: "Law (SNIL) & Pharmacy (SPS)",
      rate2022: "High",
      rate2023: "196 placed",
      rate2024: "90%+ Eligible Placed",
      median: "₹5.40 LPA (Law) · ₹3.50 LPA (Pharmacy)",
      recruiters: "Tier-1 Corporate Law Firms, Judiciary, Sun Pharma, Dr. Reddy's, Cipla, Lupin, Bharat Biotech",
    },
  ];

  // Formatted brief text for clipboard & mailto
  const formattedBrief = `SOA ALLYSHIP++ INDUSTRY CHALLENGE BRIEF
----------------------------------------
Title: ${challengeTitle || "[Challenge Title]"}
Sector: ${industrySector || "[Industry Sector]"}
Submitted By: ${contactName || "[Corporate Representative]"} (${contactEmail || "[Contact Email]"})

Challenge Overview:
${challengeDesc || "[Detailed description of industrial problem or partnership opportunity]"}

Sent via SOA University Allyship++ Platform (https://www.placements.soa.ac.in)`;

  const mailtoUrl = `mailto:info@soa.ac.in?subject=${encodeURIComponent(
    `Industry Challenge Submission: ${challengeTitle || "Partnership Proposal"}`
  )}&body=${encodeURIComponent(formattedBrief)}`;

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(formattedBrief);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmitChallenge = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!challengeTitle.trim() || !challengeDesc.trim()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactName || "Industry Partner",
          email: contactEmail || "partner@industry.com",
          subject: `Industry Challenge: ${challengeTitle}`,
          category: "Partnership",
          organization: industrySector || "Corporate Partner",
          message: formattedBrief,
        }),
      });

      const data = await res.json();
      setRefId(data.referenceId || `CHAL-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);
    } catch (err) {
      setRefId(`CHAL-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-slate-900 pb-20">
      {/* 1. Dark Photographic Hero Section */}
      <section className="relative bg-[#070d18] text-white pt-12 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[11px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
              Corporate Relations & Industry Collaboration
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
              Collaborate with <span className="text-blue-500">SOA</span>
            </h1>

            <p className="text-lg sm:text-xl font-bold text-slate-100">
              Co-Creating Centres of Excellence, Applied R&D & High-Velocity Talent Pipelines.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              From our recent Tech Mahindra and L&T Technology Services Centres of Excellence to Wipro’s Talent Next pact and LSEG’s record campus intake, explore high-trust partnership pathways at SOA University.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
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
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Corporate Leaders and SOA University Leadership in Deliberation"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-5">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Corporate Partnership Directorate
                </span>
                <span className="text-sm font-bold text-white mt-0.5">
                  Centres of Excellence & Innovation Labs
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4 CORPORATE PARTNERSHIP PILLARS (from blueprint) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
            Engagement Tracks
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Four Corporate Partnership Pillars
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Tangible engagement mechanisms connecting corporate leadership with SOA's 30,000 students and advanced research ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnershipPillars.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold">
                  {p.symbol}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-xs font-bold text-blue-600 flex items-center gap-1">
                <span>{p.action}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PLACEMENT VELOCITY & VERIFIED RECRUITMENT OUTCOMES */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-200">
        <div className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
              Absorption Metrics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Verified Placement Velocity & Recruitment Velocity
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Annual campus recruitment audited data across SOA constituent faculties, with London Stock Exchange Group (LSEG) selecting 11 students in a single drive—its highest tally in India.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200/90 shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                  <th className="p-4 sm:p-5">Academic Stream / Faculty</th>
                  <th className="p-4 sm:p-5">2022 Placement</th>
                  <th className="p-4 sm:p-5">2023 Placement</th>
                  <th className="p-4 sm:p-5">2024 Placement Rate</th>
                  <th className="p-4 sm:p-5">Median / Peak CTC</th>
                  <th className="p-4 sm:p-5">Key Corporate Recruiters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {placementData.map((row) => (
                  <tr key={row.faculty} className="hover:bg-blue-50/40 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{row.faculty}</td>
                    <td className="p-4 sm:p-5 font-medium">{row.rate2022}</td>
                    <td className="p-4 sm:p-5 font-medium">{row.rate2023}</td>
                    <td className="p-4 sm:p-5 font-bold text-blue-700 bg-blue-50/50">{row.rate2024}</td>
                    <td className="p-4 sm:p-5 font-semibold text-slate-900">{row.median}</td>
                    <td className="p-4 sm:p-5 text-[11px] leading-snug">{row.recruiters}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. SUBMIT AN INDUSTRY CHALLENGE (with mailto & copy buttons) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
              Interactive Submission Portal
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Submit an Industry Challenge
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Have an engineering hurdle, healthcare AI problem statement, or talent requirement? Fill in the details to submit directly to our Corporate Relations Cell, or copy the formatted brief into your email client.
            </p>

            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-3">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Two-Way Engagement Process:</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-5">
                <li>Submit via web form to generate a tracked Reference ID.</li>
                <li>One-click copy to clipboard for executive forwarding.</li>
                <li>Direct dispatch to official mailbox: <b>info@soa.ac.in</b>.</li>
                <li>48-hour response protocol from Dean's Office.</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Challenge Brief Logged Successfully!
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Your reference ID is <span className="font-mono font-bold text-blue-600">{refId}</span>. The Corporate Relations Directorate will contact you within 2 working days.
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? "Copied!" : "Copy Challenge Brief"}</span>
                  </button>
                  <a
                    href={mailtoUrl}
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send via Email to info@soa.ac.in</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitChallenge} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name & Title
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar, VP Engineering"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Official Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@enterprise.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Challenge Title / Focus Area
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. AI-driven Supply Chain Optimization"
                      value={challengeTitle}
                      onChange={(e) => setChallengeTitle(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Industry Sector / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Automotive / Fintech / Healthcare"
                      value={industrySector}
                      onChange={(e) => setIndustrySector(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Problem Statement & Scope of Collaboration
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe the challenge, desired prototype timeline, or campus hiring requirement..."
                    value={challengeDesc}
                    onChange={(e) => setChallengeDesc(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? "Copied to Clipboard!" : "Copy Formatted Brief"}</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={mailtoUrl}
                      className="px-4 py-2.5 rounded-xl border border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email Directly</span>
                    </a>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? "Submitting..." : "Submit to SOA"}</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. COMPLETE CORPORATE RELATIONS CONTACT DIRECTORY (from blueprint) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-200">
        <div className="bg-[#070d18] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
              Official Institutional Directory
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Direct Contact — SOA Corporate Relations & Placement
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Siksha ‘O’ Anusandhan (Deemed to be University), Khandagiri Square, Bhubaneswar – 751030, Odisha, India
            </p>
          </div>

          {/* Leadership Roster */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {[
              {
                name: "Prof. (Dr.) Raj Kumar Hota",
                role: "Dean, Corporate Relations, Placement, Career Development & Industry Collaboration · Convener, Allyship++",
              },
              {
                name: "Prof. Prasanta Kumar Patra",
                role: "Pro-Vice Chancellor & Dean, Sponsored Research and Industrial Consultancy",
              },
              {
                name: "Mr. Sumit Mitra",
                role: "Head, Career Development Cell (CDC), SOA University",
              },
              {
                name: "Ms. Kajal Panda",
                role: "Deputy Director, Corporate Relations & Learning & Development",
              },
              {
                name: "Mr. Pratap Das",
                role: "Deputy Director, Corporate Relations and Placement",
              },
            ].map((p) => (
              <div key={p.name} className="p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 space-y-1">
                <div className="text-sm font-bold text-white">{p.name}</div>
                <div className="text-xs text-cyan-300 leading-snug">{p.role}</div>
              </div>
            ))}
          </div>

          {/* Digital Endpoints */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Official Email:</span>
              <a href="mailto:info@soa.ac.in" className="text-blue-400 hover:underline font-bold">
                info@soa.ac.in
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>Placement Portal:</span>
              <a href="https://www.placements.soa.ac.in" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-bold">
                www.placements.soa.ac.in
              </a>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-blue-400" />
              <span>University Contact:</span>
              <a href="https://www.soa.ac.in/contact-us" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-bold">
                www.soa.ac.in/contact-us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Invitation Modal */}
      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />
    </div>
  );
}
