"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Compass,
  Building2,
  GraduationCap,
  Target,
  ArrowRight,
  Award,
  Globe,
  ExternalLink,
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";

export default function AboutPage() {
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  const values = [
    {
      title: "Collaborative Excellence",
      desc: "Creating high-trust institutional bridges between corporate pioneers and university research laboratories.",
      icon: Target,
    },
    {
      title: "Applied Innovation",
      desc: "Channeling student and faculty research toward urgent industrial, civic, and societal challenges.",
      icon: Compass,
    },
    {
      title: "Talent Empowerment",
      desc: "Preparing engineering, medical, management, and scientific minds through direct executive mentorship.",
      icon: GraduationCap,
    },
    {
      title: "Sustainable Impact",
      desc: "Championing clean technologies, healthcare access, and inclusive regional development.",
      icon: Globe,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-slate-900 pb-20">
      {/* 1. Dark Hero Section */}
      <section className="relative bg-[#070d18] text-white pt-14 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block">
            <span className="px-3.5 py-1 rounded-full border border-slate-700 bg-slate-900/80 text-blue-400 text-[11px] font-mono font-bold tracking-widest uppercase">
              ABOUT ALLYSHIP & SOA UNIVERSITY
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
            Bridging Industry. Academia. <br />
            <span className="text-blue-500">A Brighter Tomorrow.</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            ALLYSHIP is a joint initiative founded at Siksha 'O' Anusandhan (SOA University) to unite visionary corporate leaders with forward-looking educators, scientists, and student researchers.
          </p>
        </div>
      </section>

      {/* 2. Institutional Foundation & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
              The Genesis of Allyship
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Industry and Academia Must Build Together
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In an era of rapid technological transformation, the traditional boundaries between academic study and corporate execution can no longer operate in isolation. Industry requires agile research talent and sustainable innovation; universities require real-world validation and career pathways.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              SOA University—consistently ranked among the top institutions in India—serves as the fertile ground for ALLYSHIP, providing advanced labs, 30,000+ students, and an ecosystem primed for collaborative discovery.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">{v.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. LEADERSHIP SECTION — EXACTLY TWO PROFILES SIDE BY SIDE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
            Executive Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Institutional Leadership
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Guiding SOA University and the ALLYSHIP initiative toward shared industrial and academic horizons.
          </p>
        </div>

        {/* EXACTLY TWO PROFILES: Side by side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* PROFILE 1: Vice Chancellor, SOA University */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col">
            <div className="h-64 sm:h-72 w-full overflow-hidden bg-slate-900 relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="Vice Chancellor, SOA University"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-3 right-3">
                <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm text-blue-400 text-[10px] font-mono font-bold uppercase tracking-wider border border-slate-700">
                  Institutional Governance
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Prof. (Dr.) Pradipta Kumar Nanda
                </h3>
                <p className="text-xs font-semibold text-blue-600 mt-1">
                  Vice Chancellor, SOA University
                </p>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  Distinguished academician and researcher guiding SOA University's institutional vision, multidisciplinary research excellence, and national accreditation standards across 25+ academic schools.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Executive Office</span>
                <span className="font-semibold text-blue-600">SOA University</span>
              </div>
            </div>
          </div>

          {/* PROFILE 2: Raj Kumar Hota */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col">
            <div className="h-64 sm:h-72 w-full overflow-hidden bg-slate-900 relative">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
                alt="Raj Kumar Hota speaking at podium"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-3 right-3">
                <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm text-blue-400 text-[10px] font-mono font-bold uppercase tracking-wider border border-slate-700">
                  Leadership
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Raj Kumar Hota
                </h3>
                <p className="text-xs font-semibold text-blue-600 mt-1">
                  Leadership & Strategic Advisor, Chancellor's Office
                </p>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  Pioneering strategist championing corporate partnership networks, industry challenge labs, and cross-sector innovation for SOA University and the ALLYSHIP movement.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Strategic Advisory</span>
                <span className="font-semibold text-blue-600">SOA University</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Institutional Pillars Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pt-8">
        <div className="bg-[#070d18] text-white rounded-3xl p-8 sm:p-12 text-center border border-slate-800 shadow-xl max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Connect with SOA University Leadership
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Corporate leaders and industrial partners are warmly invited to engage in our high-level roundtables and innovation pilot programs.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsInviteOpen(true)}
              className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide shadow-md transition-colors"
            >
              Get Invited
            </button>
            <Link
              href="/collaborate"
              className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors"
            >
              Explore Collaboration Tracks
            </Link>
          </div>
        </div>
      </section>

      {/* Global Invitation Modal */}
      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />
    </div>
  );
}
