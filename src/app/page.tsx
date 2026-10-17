"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Play,
  ArrowRight,
  Users,
  Building2,
  Lightbulb,
  Infinity as InfinityIcon,
  MessageSquare,
  Network,
  GraduationCap,
  Compass,
  X,
  ExternalLink,
  Award,
  Sparkles,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";

export default function HomePage() {
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Updated stats matching the blueprint
  const heroStats = [
    {
      value: "6",
      label: "Conclaves across 5 Metro Hubs",
      icon: MapPin,
    },
    {
      value: "60–70+",
      label: "Senior Leaders per Chapter",
      icon: Users,
    },
    {
      value: "2.0",
      label: "2026 Edition (Hyderabad & Chennai)",
      icon: Sparkles,
    },
    {
      value: "40+",
      label: "CXO Panelists & Sports Legends",
      icon: Award,
    },
  ];

  // The 4 cards under "A Platform for Real Impact" from the blueprint
  const platformCards = [
    {
      title: "Exchange Ideas",
      desc: "Candid CXO panels and fireside chats addressing urgent workplace realities—from psychological safety and hybrid engineering cultures to Gen-Z career aspirations.",
      symbol: "⇄",
    },
    {
      title: "Build Partnerships",
      desc: "Direct pathways into SOA’s research ecosystem, generating joint Centres of Excellence with leaders like Tech Mahindra and L&T Technology Services, alongside sponsored consultancy.",
      symbol: "⚭",
    },
    {
      title: "Shape Opportunities",
      desc: "A continuous feedback loop where boardroom expectations directly inform SOA’s flexible curriculum design, technical skill labs, and campus-to-corporate readiness.",
      symbol: "◎",
    },
    {
      title: "Drive Impact",
      desc: "Operationalizing allyship not as a standalone HR initiative, but as an everyday leadership responsibility that fuels innovation, institutional trust, and sustainable growth.",
      symbol: "✦",
    },
  ];

  const cityHighlights = [
    {
      city: "Bengaluru 1.0",
      theme: "Leadership in Sports & Tech Cultures",
      speaker: "Anju Bobby George (Olympian) & Tech CXOs",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    },
    {
      city: "Hyderabad 1.0 & 2.0",
      theme: "Gen-Z Aspirations & Organizational Allyship",
      speaker: "Arshad Ayub, Dr. G. Srinivas Patnaik, Prof. Sanjay Dhir",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    },
    {
      city: "Kolkata 1.0",
      theme: "Legacy Business, Digital DEI & Sports Tribute",
      speaker: "Gurbux Singh (Olympian), Gautam Sarkar, Satyaprakash Krishna",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    },
    {
      city: "Mumbai 1.0 & Chennai 2.0",
      theme: "Workplace Well-being & Leadership Responsibility",
      speaker: "Nilesh Kulkarni, Anand Menezes, Premanand J., Archana Grover",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-slate-900 pb-20">
      {/* 1. HERO SECTION (Dark Navy & Black) */}
      <section className="relative bg-[#070d18] text-white pt-12 sm:pt-16 lg:pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800">
        {/* Subtle background stage image overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070d18] via-[#070d18]/90 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tag from blueprint */}
            <div className="inline-block">
              <span className="px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/60 text-blue-400 text-[11px] font-mono font-bold tracking-widest uppercase">
                Industry–Academia Leadership Conclave Series
              </span>
            </div>

            {/* Main Headline: ALLYSHIP++ */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-sans text-white">
              ALLY<span className="text-blue-500">SHIP</span><span className="text-cyan-400 font-mono">++</span>
            </h1>

            {/* Sub-headline from blueprint */}
            <p className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100">
              Bridging Industry. Academia. A Brighter Tomorrow.
            </p>

            {/* Lead copy from blueprint */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Siksha ‘O’ Anusandhan (SOA) Deemed to be University takes academia directly into India’s premier corporate boardrooms—uniting CHROs, Global Talent Heads, engineering leaders, and Olympic sports icons to build inclusive, future-ready leadership ecosystems.
            </p>

            {/* Metadata from blueprint */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 font-medium pt-1">
              <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700/80">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Bengaluru · Hyderabad (1.0 & 2.0) · Kolkata · Mumbai · Chennai</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span>| Organised by Siksha ‘O’ Anusandhan, Bhubaneswar</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs tracking-wide transition-all flex items-center gap-2 shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <Play className="w-3 h-3 fill-white ml-0.5" />
                </div>
                <span>Watch Conclave Highlights</span>
              </button>

              <button
                type="button"
                onClick={() => setIsInviteOpen(true)}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide transition-all shadow-md shadow-blue-600/30 flex items-center gap-2"
              >
                <span>Request Executive Invitation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Hero Stage Photography matching reference */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80"
                alt="Allyship++ National Conclave Stage at SOA University"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6">
                <div className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                  SOA University Allyship++ Conclave
                </div>
                <div className="text-lg font-bold text-white mt-1">
                  Boardroom to Arena. Ideas to Impact.
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Connecting Corporate Leaders with Academic Pioneers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HORIZONTAL STATISTICS PANEL (from blueprint) */}
      <section className="bg-[#0b1120] border-b border-slate-800 text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {heroStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col items-center justify-center p-3">
                <div className="flex items-center gap-2 text-blue-400 mb-1">
                  <Icon className="w-4 h-4" />
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. A PLATFORM FOR REAL IMPACT (from blueprint) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
            The Allyship++ Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            A Platform for Real Impact
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Allyship++ is more than an event. It is an operational bridge taking academia directly into corporate capitals to co-create agile talent pipelines, applied R&D labs, and inclusive workplace cultures.
          </p>
        </div>

        {/* 4 Cards Row matching blueprint */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 text-xl font-bold">
                  {card.symbol}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LEADERSHIP & CONVENER MESSAGE (from blueprint) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
          {/* Left: Dr. Hota Photograph */}
          <div className="md:col-span-5 relative h-80 sm:h-96 w-full bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
              alt="Prof. (Dr.) Raj Kumar Hota speaking at podium"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:hidden p-4 flex items-end">
              <span className="text-white font-bold text-sm">Prof. (Dr.) Raj Kumar Hota</span>
            </div>
          </div>

          {/* Right: Vision from Conclave Leadership */}
          <div className="md:col-span-7 p-8 sm:p-12 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                Executive Stewardship
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Vision from the Conclave Leadership
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Under the academic stewardship of Vice-Chancellor Prof. Pradipta Kumar Nanda and Pro-Vice Chancellor Prof. Prasanta Kumar Patra, Siksha ‘O’ Anusandhan has positioned industry-academia collaboration as the cornerstone of future-ready workplaces.
            </p>

            <blockquote className="text-xs sm:text-sm text-slate-800 italic leading-relaxed border-l-4 border-blue-600 pl-4 bg-slate-50 py-3 rounded-r-xl">
              “As Convener of every Allyship++ chapter since its inception in 2024, Prof. (Dr.) Raj Kumar Hota has championed the creation of empathetic, inclusive, and agile leadership ecosystems aligned with Gen-Z aspirations—bringing Fortune 500 CHROs, Global Capability Heads, IIT faculty, and Olympic legends onto a single collaborative stage across five cities.”
            </blockquote>

            {/* Signature & Credentials */}
            <div className="pt-2 border-t border-slate-100">
              <div className="font-serif italic text-2xl text-blue-600 font-bold tracking-wider">
                Raj Kumar Hota
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">
                Prof. (Dr.) Raj Kumar Hota
              </div>
              <div className="text-xs text-slate-500">
                Dean, Corporate Relations, Placement, Career Development & Industry Collaboration, SOA · Convener, Allyship++
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SIX-CHAPTER CONCLAVE HIGHLIGHTS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Across India's Corporate Capitals
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Six Chapters Across Editions 1.0 & 2.0
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Deliberating future-ready engineering cultures, psychological safety, and sports-inspired leadership resilience.
            </p>
          </div>
          <Link
            href="/event"
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors"
          >
            <span>Explore All 6 Conclaves & Speakers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cityHighlights.map((h) => (
            <div
              key={h.city}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                <img
                  src={h.image}
                  alt={h.city}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-cyan-400 font-mono text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-700">
                  {h.city}
                </div>
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {h.theme}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {h.speaker}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-bold">
                  <span>View Chapter</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Invitation Modal */}
      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-slate-800 text-white">
              <span className="font-bold text-sm">Allyship++ Conclave Video Highlights</span>
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/8wSGKsWyQwk?autoplay=1"
                title="Allyship++ Conclave Video"
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
