"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Play,
  ArrowRight,
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Globe,
  Building,
  Trophy,
  FileText,
  Rocket,
  CheckCircle2,
  Sparkles,
  X,
  Stethoscope,
  Cpu,
  Scale,
  Briefcase,
  FlaskConical,
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";

export default function DiscoverSoaPage() {
  const [activeTab, setActiveTab] = useState<string>("Faculties");
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);

  // 5 Hero Stat Counters matching blueprint
  const heroCounters = [
    { value: "15th", label: "NIRF 2025, University Category (Score: 63.14 · #1 in Odisha)" },
    { value: "25th", label: "NIRF 2025, Overall Category (Top 25 since 2016)" },
    { value: "A++", label: "NAAC Accredited (CGPA 3.88) · UGC Category-I Graded Autonomy" },
    { value: "Top 4", label: "In India, THE World Reputation Rankings 2025" },
    { value: "3rd", label: "Swachh Campus Ranking Nationally" },
  ];

  // 6 Constituent Faculties Cards matching blueprint
  const constituentFaculties = [
    {
      name: "Institute of Medical Sciences (IMS) & SUM Hospital",
      tag: "Medical Sciences",
      icon: Stethoscope,
      standing: "15th in Medical, NIRF 2025 (Climbed 6 spots) · 701–850 Globally in QS Medicine",
      desc: "NABH and NABL accredited super-specialty hospital and medical college. Ranked 601–800 in THE 2026, delivering 100% MBBS and MD/MS graduate clinical absorption across leading national healthcare networks.",
      metric: "100% Clinical Placement",
      highlight: "NABH & NABL Accredited",
    },
    {
      name: "Institute of Technical Education and Research (ITER)",
      tag: "Engineering & Technology",
      icon: Cpu,
      standing: "22nd in Engineering, NIRF 2025 (Up 4 spots) · 2nd in India in Times Engineering 2025 & 2026",
      desc: "SOA’s premier engineering faculty ranked ahead of Amrita (#23), Jamia Millia (#24), and IIT Gandhinagar (#25). Hosts state-of-the-art Centres of Excellence with Tech Mahindra and LTTS with a 94.54% B.Tech placement rate.",
      metric: "94.54% B.Tech Placement",
      highlight: "₹46 LPA Peak Package",
    },
    {
      name: "Institute of Dental Sciences (IDS)",
      tag: "Dental Sciences",
      icon: Award,
      standing: "9th in India in Dental, NIRF 2025 · #1 in Odisha",
      desc: "Consistently held a Top 10 national ranking for three consecutive years (2023, 2024, 2025). Features multi-chair specialized clinical labs and 95.52% BDS & MDS graduate placement velocity.",
      metric: "95.52% Placement Rate",
      highlight: "Ranked 9th Nationally",
    },
    {
      name: "SOA National Institute of Law (SNIL)",
      tag: "Legal Studies",
      icon: Scale,
      standing: "10th in India in Law, NIRF 2025 · #1 in Odisha",
      desc: "Consistently ranked among the nation's Top 10 law schools. Features advanced moot court infrastructure, distinguished legal research chairs, and strong judicial clerkship placements across India.",
      metric: "Top 10 in India",
      highlight: "#1 Law School in Odisha",
    },
    {
      name: "Institute of Business and Computer Studies (IBCS)",
      tag: "Management & Computing",
      icon: Briefcase,
      standing: "25th in Business & Management Studies (#1 in Odisha) · 66th in MBA/PGDM, NIRF 2025",
      desc: "Faculty of management education achieving 97.22% MBA placement rate. Strategic corporate recruiter relationships with Deloitte, EY, KPMG, PwC, ICICI, HDFC, and Reliance Industries.",
      metric: "97.22% MBA Placement",
      highlight: "#1 in Odisha (Business Studies)",
    },
    {
      name: "Multi-Disciplinary Research & Global Footprint",
      tag: "Research & Innovation",
      icon: FlaskConical,
      standing: "49th in Research, NIRF 2025 · 251–300 Globally in Science (THE 2026)",
      desc: "Featuring 38 SOA researchers recognized in Stanford University’s World’s Top 2% Scientists list. Home to the AIC-SOA Foundation (Atal Incubation Centre under NITI Aayog) and scholars from 15+ countries.",
      metric: "38 Stanford Top 2% Scientists",
      highlight: "AIC-SOA Incubation Centre",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-slate-900 pb-20">
      {/* 1. Dark Photographic Hero Section */}
      <section className="relative bg-[#070d18] text-white pt-12 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[11px] font-mono font-bold tracking-widest text-blue-400 uppercase">
              DEEMED TO BE UNIVERSITY · BHUBANESWAR, INDIA
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
              Discover <span className="text-blue-500">SOA</span>
            </h1>

            <p className="text-lg sm:text-xl font-bold text-slate-100">
              Ranked 15th Nationally. A Premier Multi-Faculty Research University.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Siksha ‘O’ Anusandhan (SOA) is recognized among India’s top four institutions in the Times Higher Education World Reputation Rankings 2025—fostering 30,000+ students, 38 Stanford Top 2% scientists, and industry-embedded Centres of Excellence.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setIsTourOpen(true)}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide transition-all flex items-center gap-2 shadow-md shadow-blue-600/30"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                </div>
                <span>Take a Virtual Tour</span>
              </button>

              <button
                type="button"
                onClick={() => setIsInviteOpen(true)}
                className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs tracking-wide transition-all flex items-center gap-2"
              >
                <span>Request Executive Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80"
                alt="SOA University Grand Campus Dome"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-5">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Khandagiri Square, Bhubaneswar
                </span>
                <span className="text-sm font-bold text-white mt-0.5">
                  SOA Deemed to be University Campus
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 5 HERO STAT COUNTERS (from blueprint) */}
      <section className="bg-[#0b1120] border-b border-slate-800 text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          {heroCounters.map((c) => (
            <div key={c.label} className="p-2 flex flex-col items-center justify-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-sans tracking-tight">
                {c.value}
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1 leading-snug">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 6 CONSTITUENT FACULTIES & NATIONAL STANDING (from blueprint) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
            Academic & Clinical Infrastructure
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Constituent Faculties & Verified National Standing
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Updated with official NIRF 2025, Times Engineering, and international accreditation data across SOA's premier faculties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {constituentFaculties.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.name}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                      {f.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-50 text-blue-600 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {f.name}
                  </h3>

                  <div className="text-xs font-semibold text-blue-700 bg-blue-50/70 p-2.5 rounded-xl border border-blue-100">
                    {f.standing}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {f.metric}
                  </span>
                  <span className="text-slate-500">
                    {f.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. GLOBAL ACCREDITATIONS & REPUTATION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-200">
        <div className="bg-[#070d18] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
              Global Standards & Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              One of Only Four Indian Institutions in THE World Reputation Rankings 2025
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Siksha ‘O’ Anusandhan was recognized alongside IISc Bengaluru, IIT Delhi, and IIT Madras in the prestigious Times Higher Education World Reputation Rankings 2025. With NAAC A++ (CGPA 3.88), UGC Category-I Graded Autonomy, and #3 Swachh Campus standing nationally, SOA provides corporate partners with world-class institutional stability and research credibility.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700 text-center">
              <span className="text-2xl font-extrabold text-cyan-400">3.88</span>
              <span className="text-xs text-slate-300 block font-medium">NAAC A++ Score</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700 text-center">
              <span className="text-2xl font-extrabold text-cyan-400">Category-I</span>
              <span className="text-xs text-slate-300 block font-medium">UGC Graded Autonomy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Global Invitation Modal */}
      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />

      {/* Virtual Tour Modal */}
      {isTourOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-slate-800 text-white">
              <span className="font-bold text-sm">SOA University Campus & Research Labs Virtual Tour</span>
              <button
                type="button"
                onClick={() => setIsTourOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/8wSGKsWyQwk?autoplay=1"
                title="SOA University Campus Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
