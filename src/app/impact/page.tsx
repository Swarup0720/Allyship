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
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";

export default function ImpactPage() {
  const [activeTab, setActiveTab] = useState<string>("Overview");
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  const tabs = [
    "Overview",
    "Collaborations",
    "Success Stories",
    "Media & Highlights",
  ];

  const impactMetrics = [
    { value: "100+", label: "Corporate Leaders" },
    { value: "25+", label: "Industries" },
    { value: "50+", label: "Collaboration Opportunities" },
    { value: "20+", label: "Mentorship Commitments" },
    { value: "10+", label: "Pilot Projects Initiated" },
  ];

  const successStories = [
    {
      title: "AI Solution for Rural Healthcare",
      badge: "Healthcare & AI",
      desc: "Partnership with leading healthcare networks to pilot automated early-stage retinopathy detection in regional rural clinics.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Sustainability Research Partnership",
      badge: "Clean Tech",
      desc: "Joint industrial pilot with energy conglomerates testing high-durability polymer coatings for commercial solar arrays.",
      image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Student Internship Programs",
      badge: "Talent & Placements",
      desc: "Curated 6-month corporate residency pipelines placing 120+ top SOA engineers into advanced R&D and product incubators.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-slate-900 pb-20">
      {/* 1. Dark Photographic Hero matching Reference */}
      <section className="relative bg-[#070d18] text-white pt-12 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
              MEASURING WHAT MATTERS
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
              Allyship Impact
            </h1>

            <p className="text-lg sm:text-xl font-bold text-slate-100">
              Conversations today. A stronger tomorrow.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              A look at the outcomes, collaborations and opportunities created through the Allyship initiative at SOA University.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsInviteOpen(true)}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide shadow-md shadow-blue-600/30 transition-all"
              >
                Get Invited to Allyship 2025
              </button>
            </div>
          </div>

          {/* Right Hero Image: Handshake silhouette matching reference */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1000&q=80"
                alt="Corporate Leaders Handshake Collaboration"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-5">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  Partnership Outcomes
                </span>
                <span className="text-sm font-bold text-white mt-0.5">
                  Real-world Research & Talent Impact
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Horizontal Tabs Bar matching Reference */}
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

      {/* 3. Horizontal Impact Metrics Panel matching Reference */}
      <section className="bg-white border-b border-slate-200 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {impactMetrics.map((m) => (
            <div key={m.label} className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-sans tracking-tight">
                {m.value}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Success Stories Section matching Reference */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Success Stories
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Real collaborations. Real impact across industries and society.
            </p>
          </div>
          <span className="text-xs font-bold text-blue-600 inline-flex items-center gap-1 cursor-pointer">
            <span>View All Stories</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>

        {/* 3 Success Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {successStories.map((story) => (
            <div
              key={story.title}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="h-44 w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-600 text-white text-[10px] font-bold tracking-wide uppercase">
                    {story.badge}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {story.desc}
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-slate-100">
                  <span className="text-xs font-bold text-blue-600 inline-flex items-center gap-1">
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
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
