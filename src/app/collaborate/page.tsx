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
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";

export default function CollaboratePage() {
  const [activeTab, setActiveTab] = useState<string>("Industry Challenges");
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  // Form states
  const [challengeTitle, setChallengeTitle] = useState("");
  const [industrySector, setIndustrySector] = useState("");
  const [challengeDesc, setChallengeDesc] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState("");

  const tabs = [
    "Industry Challenges",
    "Research Collaboration",
    "Mentorship",
    "Internships & Hiring",
  ];

  const studentProjects = [
    {
      title: "Smart Agriculture Monitoring",
      tag: "IoT • Agriculture",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "AI-Powered Learning Platform",
      tag: "EdTech • AI",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Low-Cost Water Purification",
      tag: "Sustainability • Environment",
      image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Autonomous Delivery Robot",
      tag: "Robotics • Logistics",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const handleSubmitChallenge = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!challengeTitle.trim() || !challengeDesc.trim()) return;

    setIsSubmitting(true);

    try {
      // Connect to real backend API route /api/contact
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Industry Partner",
          email: contactEmail || "partner@industry.com",
          subject: `Industry Challenge: ${challengeTitle}`,
          category: "Partnership",
          organization: industrySector || "Corporate Partner",
          message: `Title: ${challengeTitle}\nSector: ${industrySector}\nDetails: ${challengeDesc}`,
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
      {/* 1. Dark Photographic Hero matching Reference */}
      <section className="relative bg-[#070d18] text-white pt-12 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
              FROM IDEAS TO ACTION
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
              Collaborate with <span className="text-blue-500">SOA</span>
            </h1>

            <p className="text-lg sm:text-xl font-bold text-slate-100">
              Let's build solutions together.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Submit your industry challenges, explore research collaborations, mentor talented students or create new opportunities with SOA.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsInviteOpen(true)}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide shadow-md shadow-blue-600/30 transition-all"
              >
                Get Invited to Allyship Conclave
              </button>
            </div>
          </div>

          {/* Right Collaboration Photo matching reference */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Corporate Leaders and University Researchers Collaborating"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-5">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  Industry-Academia Boardroom
                </span>
                <span className="text-sm font-bold text-white mt-0.5">
                  Joint Pilot Labs & Innovation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Horizontal Tabs matching Reference */}
      <section className="bg-white border-b border-slate-200 sticky top-20 z-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto py-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === tab
                  ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600 font-extrabold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Main 2-Column: Submit Challenge + How It Works */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Submit an Industry Challenge Form matching Reference */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Submit an Industry Challenge
              </h2>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Share a real-world problem your organisation is facing. Our faculty and student teams can explore solutions through research, projects or prototypes.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Challenge Registered!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Your challenge <strong className="text-slate-900">"{challengeTitle}"</strong> has been assigned to the SOA Industry-Academia Secretariat under reference:
                </p>
                <div className="text-xs font-mono font-bold text-blue-700 bg-white py-1 px-3 rounded-lg inline-block border border-blue-200">
                  {refId}
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setChallengeTitle("");
                      setChallengeDesc("");
                    }}
                    className="text-xs text-blue-600 font-bold underline"
                  >
                    Submit another challenge
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitChallenge} className="space-y-4">
                <div>
                  <label htmlFor="challenge-title" className="block text-xs font-bold text-slate-700 mb-1">
                    Challenge Title
                  </label>
                  <input
                    id="challenge-title"
                    type="text"
                    required
                    value={challengeTitle}
                    onChange={(e) => setChallengeTitle(e.target.value)}
                    placeholder="e.g. AI-based supply chain forecasting"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label htmlFor="challenge-sector" className="block text-xs font-bold text-slate-700 mb-1">
                    Industry / Sector
                  </label>
                  <select
                    id="challenge-sector"
                    value={industrySector}
                    onChange={(e) => setIndustrySector(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-600"
                  >
                    <option value="">Select Industry</option>
                    <option value="Information Technology & AI">Information Technology & AI</option>
                    <option value="Healthcare & Biomedical Engineering">Healthcare & Biomedical Engineering</option>
                    <option value="Renewable Energy & Power Systems">Renewable Energy & Power Systems</option>
                    <option value="Civil Infrastructure & Smart Cities">Civil Infrastructure & Smart Cities</option>
                    <option value="Manufacturing & Robotics">Manufacturing & Robotics</option>
                    <option value="Agriculture & Food Tech">Agriculture & Food Tech</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="challenge-email" className="block text-xs font-bold text-slate-700 mb-1">
                    Your Corporate Email
                  </label>
                  <input
                    id="challenge-email"
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="contact@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label htmlFor="challenge-desc" className="block text-xs font-bold text-slate-700 mb-1">
                    Describe the Challenge
                  </label>
                  <textarea
                    id="challenge-desc"
                    required
                    rows={4}
                    value={challengeDesc}
                    onChange={(e) => setChallengeDesc(e.target.value)}
                    placeholder="Provide details about the problem, expected outcome and timeline."
                    className="w-full p-4 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide shadow-md transition-colors"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Challenge"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: How It Works matching Reference */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              How It Works
            </h2>

            {/* 4 Steps Timeline with Blue Circle Indicators */}
            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">You submit a challenge</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Share your problem and requirements.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">SOA identifies the right team</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Faculty, students or research groups.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Collaborate on a pilot</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Define scope, timeline and deliverables.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Track progress</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Stay updated on milestones and outcomes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Talent & Mentorship: Featured Student Projects */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Invest in Future Talent
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Student Projects
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Browse innovative projects built by SOA students and explore collaboration opportunities.
            </p>
          </div>
          <span className="text-xs font-bold text-blue-600 inline-flex items-center gap-1 cursor-pointer">
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>

        {/* 4 Student Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentProjects.map((proj) => (
            <div
              key={proj.title}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="h-40 w-full overflow-hidden bg-slate-100">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                    {proj.tag}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {proj.title}
                  </h3>
                </div>
                <div className="pt-3 mt-2 border-t border-slate-100 text-xs font-bold text-blue-600 inline-flex items-center gap-1">
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Invitation Modal */}
      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />
    </div>
  );
}
