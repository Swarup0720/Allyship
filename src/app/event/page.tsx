"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  Users,
  CheckCircle2,
  Building,
  HelpCircle,
  Play,
  Award,
  Medal,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";
import { conclavesData } from "@/data/conclaves";

const eventHeroImages = [
  {
    src: "/IMG_7492.jpg",
    title: "Hyderabad Chapter Ballroom & Delegates",
    subtitle: "Strategic Industry-Academia Leadership Conclave",
  },
  {
    src: "/CON01670.JPG",
    title: "Chennai Chapter 2.0 Delegation Group",
    subtitle: "Senior HR Directors, CHROs & Corporate Partners",
  },
  {
    src: "/CON01638.JPG",
    title: "Chennai Chapter 2.0 Keynote & Stage Dignitaries",
    subtitle: "Panels on Practicing Allyship & Talent Readiness",
  },
];

function EventContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"Chapters" | "Speakers" | "Themes" | "Videos">("Chapters");
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % eventHeroImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const conclaves = conclavesData;

  useEffect(() => {
    const chapterParam = searchParams.get("chapter");
    if (chapterParam) {
      const idx = conclaves.findIndex(
        (c) =>
          c.id.toLowerCase() === chapterParam.toLowerCase() ||
          c.city.toLowerCase().includes(chapterParam.toLowerCase())
      );
      if (idx !== -1) {
        setSelectedChapter(idx);
        setActiveTab("Chapters");
        const el = document.getElementById("chapter-details");
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }
  }, [searchParams, conclaves]);

  const videos = [
    {
      title: "Chennai Chapter 2.0 | Panel Discussion on Practicing Allyship",
      desc: "Moderated by Standard Chartered's Global Head Archana Grover with talent heads from Rocket India, Foodhub, Nordex, KaarTech, and Mphasis.",
      youtubeId: "yD0eEo0oh7A",
      tag: "Chennai 2.0",
    },
    {
      title: "Chennai Chapter | Fireside Chat with National Coach J. Premanand",
      desc: "High-performance athletics coach for the Paris Olympics sprint team on connecting athletic resilience with Gen-Z mentorship.",
      youtubeId: "0vOCqqE4zbI",
      tag: "Olympics & Leadership",
    },
    {
      title: "Hyderabad Chapter | Allyship++ Conclave Film",
      desc: "Official highlights from the Hyderabad conclave deliberating Gen-Z workforce expectations, learning agility, and industry-academia CoEs.",
      youtubeId: "8wSGKsWyQwk",
      tag: "Hyderabad Conclave",
    },
  ];

  const currentConclave = conclaves[selectedChapter];

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-slate-900 pb-20">
      {/* 1. Dark Photographic Hero Section with Automatic Sliding Background */}
      <section className="relative bg-[#070d18] text-white pt-12 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 overflow-hidden">
        {/* Sliding Background Gallery */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="flex h-full w-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${heroSlide * 100}%)` }}
          >
            {eventHeroImages.map((slide) => (
              <div
                key={slide.src}
                className="w-full h-full flex-shrink-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${slide.src}')` }}
              />
            ))}
          </div>
          {/* Light translucent overlay: ensures conclave photos are 100% bright, vibrant & clearly visible */}
          <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-black/10 pointer-events-none" />
        </div>

        {/* Slide Indicator Dots & Quick Caption */}
        <div className="absolute bottom-4 left-4 sm:left-8 z-10 flex items-center gap-3 bg-slate-950/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700/60 shadow-lg">
          <div className="flex items-center gap-1.5">
            {eventHeroImages.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setHeroSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === heroSlide ? "w-6 bg-cyan-400" : "w-1.5 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
          <span className="hidden sm:inline-block text-[11px] font-mono text-slate-300 border-l border-slate-700 pl-3">
            {eventHeroImages[heroSlide].title}
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5 bg-slate-950/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
            <div className="inline-block">
              <span className="px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/60 text-blue-400 text-[11px] font-mono font-bold tracking-widest uppercase">
                Master Conclave Series · 2024–2026
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
              Allyship<span className="text-cyan-400 font-mono">++</span> Conclaves
            </h1>

            <p className="text-lg sm:text-xl font-bold text-slate-200">
              6 Conclaves Across 5 Metropolitan Capitals
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              From Bengaluru and Hyderabad to Kolkata, Mumbai, and Chennai, Siksha ‘O’ Anusandhan has built a continuous national bridge connecting over 500 corporate CXOs, Olympic medalists, and academic leaders.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsInviteOpen(true)}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide shadow-md shadow-blue-600/30 transition-all flex items-center gap-2"
              >
                <span>Request Executive Invitation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900">
              <img
                src="/CON01670.JPG"
                alt="Allyship++ National Conclave Live Delegation"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-5">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Editions 1.0 & 2.0
                </span>
                <span className="text-sm font-bold text-white mt-0.5">
                  Bridging Industry, Sports & Academia
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY ALLYSHIP++? — GENUINE INSTITUTIONAL PHILOSOPHY & MANDATE */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>The Institutional Philosophy & Purpose</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Why Allyship<span className="text-blue-600 font-mono">++</span>?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            In an era of rapid technological disruption, transactional campus recruitment is no longer enough. Siksha ‘O’ Anusandhan created <strong className="text-slate-900 font-semibold">Allyship++</strong> to move academic leadership directly into corporate boardrooms—co-creating empathetic, resilient, and future-ready talent ecosystems across India.
          </p>
        </div>

        {/* 4 Core Genuine Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                <Users className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold text-blue-600 tracking-wider uppercase block">
                  Beyond The Placement Drive
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-blue-600 transition-colors">
                  Ending Transactional Hiring
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Conventional universities wait for annual placement seasons. Allyship++ engages Fortune 500 CHROs and Engineering VPs year-round to co-create academic curricula, practical skill benchmarks, and campus labs before students ever graduate.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-blue-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Curriculum aligned with CXO benchmarks</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600 group-hover:scale-105 transition-transform">
                <Medal className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold text-amber-700 tracking-wider uppercase block">
                  The Athletic Crucible
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-amber-700 transition-colors">
                  Why Sports Anchors Allyship
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Olympic medalists and national coaches headline our stages because elite sports embodies the purest form of allyship: unconditional coach-athlete trust, grit under pressure, and mental resilience—the exact attributes needed to prevent tech-worker burnout.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-amber-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Mentorship tested under Olympic pressure</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200/60 flex items-center justify-center text-cyan-700 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold text-cyan-700 tracking-wider uppercase block">
                  Workplace Cultural Shift
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-cyan-700 transition-colors">
                  Everyday Duty Over HR Slogans
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Allyship is not a once-a-year compliance checkbox. In our Hyderabad and Chennai conclaves, leaders established that practicing allyship is an everyday managerial duty—creating psychological safety and clear pathways for Gen-Z digital natives.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-cyan-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
              <span>Psychological safety in high-stress teams</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200/60 flex items-center justify-center text-indigo-600 group-hover:scale-105 transition-transform">
                <Building className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold text-indigo-600 tracking-wider uppercase block">
                  Two-Way Enterprise Bridge
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-indigo-600 transition-colors">
                  Co-Innovation & Living Labs
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Allyship is reciprocal. Industry partners gain direct access to SOA’s NIRF Top-15 research faculty and advanced labs—co-creating enterprise Centres of Excellence (like Tech Mahindra's ServiceNow & AI Labs) and sponsored R&D initiatives.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-indigo-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span>Campus Centres of Excellence established</span>
            </div>
          </div>
        </div>

        {/* Genuine Leadership Vision Callout Box */}
        <div className="mt-12 bg-gradient-to-br from-[#070d18] via-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                The Institutional Commitment
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                “We do not wait for industry to knock on our doors; we bring academic rigor directly into corporate boardrooms across India.”
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Allyship++ is our pledge that every SOA graduate enters a modern enterprise where they are actively championed, psychologically protected, and empowered to lead India’s knowledge-driven economy.
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
                <span className="font-semibold text-white">Siksha ‘O’ Anusandhan (Deemed to be University)</span>
                <span>•</span>
                <span className="text-cyan-400">NIRF Top-15 · NAAC A++</span>
              </div>
            </div>

            {/* Quick Impact Numbers */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">500+</div>
                <div className="text-[11px] text-slate-300 mt-1 font-medium">Corporate CXOs & HR Leaders</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">6</div>
                <div className="text-[11px] text-slate-300 mt-1 font-medium">Metropolitan Conclaves</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">10+</div>
                <div className="text-[11px] text-slate-300 mt-1 font-medium">Olympic & Sports Icons</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">100%</div>
                <div className="text-[11px] text-slate-300 mt-1 font-medium">Reciprocal Engagement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 MESSAGE FROM PROF. (DR.) RAJ KUMAR HOTA — CONVENER, ALLYSHIP++ */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
          {/* Left: Dr. Hota Photograph (IMG_7364.jpg) */}
          <div className="md:col-span-5 relative h-80 sm:h-96 w-full bg-slate-900">
            <img
              src="/IMG_7364.jpg"
              alt="Prof. (Dr.) Raj Kumar Hota addressing Allyship++ Conclave at podium"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm text-blue-400 text-[10px] font-mono font-bold uppercase tracking-wider border border-slate-700">
                Conclave Convener
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:hidden p-4 flex items-end">
              <span className="text-white font-bold text-sm">Prof. (Dr.) Raj Kumar Hota</span>
            </div>
          </div>

          {/* Right: Message from the Convener */}
          <div className="md:col-span-7 p-8 sm:p-12 space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                Convener's Perspective
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Message from Prof. (Dr.) Raj Kumar Hota
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              As Convener of every Allyship++ chapter across Bengaluru, Hyderabad, Kolkata, Mumbai, and Chennai, Prof. Hota has spearheaded the movement to bridge corporate leadership with academic research and youth development.
            </p>

            <blockquote className="text-sm sm:text-base text-slate-800 italic leading-relaxed border-l-4 border-blue-600 pl-4 bg-slate-50 py-3 rounded-r-xl">
              “Allyship is not a transactional corporate gesture; it is the intentional, everyday commitment to guide, mentor, and sponsor young talent. When academia and corporate leadership unite with empathy and athletic grit, we create an environment where every graduate feels trusted, valued, and empowered to excel.”
            </blockquote>

            {/* Signature & Credentials */}
            <div className="pt-2 border-t border-slate-100">
              <div className="font-serif italic text-2xl text-blue-600 font-bold tracking-wider">
                Raj Kumar Hota
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">
                Prof. (Dr.) Raj Kumar Hota
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Dean of Corporate Relations and Placement, Career Development and Industry Collaboration, SOA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Top-Level Tab Switcher */}
      <section className="bg-white border-b border-slate-200 sticky top-20 z-30 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto py-2.5">
          {(["Chapters", "Speakers", "Themes", "Videos"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActiveTab(t)}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === t
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {t === "Chapters" && "All 6 Chapters (1.0 & 2.0)"}
              {t === "Speakers" && "Marquee Speakers Roster"}
              {t === "Themes" && "Strategic Themes & Evolution"}
              {t === "Videos" && "Official Conclave Videos"}
            </button>
          ))}
        </div>
      </section>

      {/* 3. MAIN TAB CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* TAB 1: ALL 6 CHAPTERS */}
        {activeTab === "Chapters" && (
          <div id="chapter-details" className="space-y-8 scroll-mt-28">
            {/* City Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {conclaves.map((c, idx) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedChapter(idx)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedChapter === idx
                      ? "bg-blue-50 border-blue-600 ring-2 ring-blue-500/20"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold text-blue-600 block">
                    {c.date}
                  </span>
                  <span className="text-xs font-bold text-slate-900 block truncate mt-0.5">
                    {c.city}
                  </span>
                  <span className="text-[10px] text-slate-500 block truncate">
                    {c.edition.includes("2.0") ? "Edition 2.0" : "Edition 1.0"}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Conclave Detail Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8">
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold">
                      {currentConclave.edition}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                      {currentConclave.date}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {currentConclave.city}: {currentConclave.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      {currentConclave.venue}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-blue-600" />
                      {currentConclave.turnout}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsInviteOpen(true)}
                  className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide shrink-0 transition-all shadow-sm"
                >
                  Join Future Conclaves
                </button>
              </div>

              {/* Narrative Description */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Conclave Overview & Strategic Dialogue
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {currentConclave.desc}
                </p>
                <div className="pt-2">
                  <span className="inline-block text-xs font-semibold text-blue-900 bg-blue-50/80 px-3 py-1 rounded-lg border border-blue-200">
                    Key Focus: {currentConclave.focus}
                  </span>
                </div>
              </div>

              {/* Sports Legends & Special Chief Guests */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-amber-600">
                  <Medal className="w-4 h-4" />
                  <h3 className="text-xs font-bold uppercase tracking-wider font-mono">
                    Sports Icons & Keynote Guests
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentConclave.sportsGuests.map((sg) => (
                    <div key={sg.name} className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-1">
                      <div className="text-sm font-bold text-slate-900">{sg.name}</div>
                      <div className="text-xs font-medium text-amber-800">{sg.role}</div>
                      <div className="text-[11px] text-slate-600 italic">{sg.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Moderators & Corporate Panelists */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-blue-600">
                  <Users className="w-4 h-4" />
                  <h3 className="text-xs font-bold uppercase tracking-wider font-mono">
                    Moderator & Corporate Panelists
                  </h3>
                </div>
                
                {/* Moderators */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentConclave.moderators.map((m) => (
                    <div key={m.name} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] font-mono font-bold text-blue-600 uppercase">Moderator</span>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">{m.name}</div>
                      <div className="text-xs text-slate-500">{m.role}</div>
                    </div>
                  ))}
                </div>

                {/* Panelists */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                  {currentConclave.panelists.map((p) => (
                    <div key={p.name} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-blue-300 transition-colors">
                      <span className="text-[10px] font-mono text-slate-400 uppercase">Panelist</span>
                      <div className="text-xs font-bold text-slate-900 mt-0.5">{p.name}</div>
                      <div className="text-[11px] text-slate-600 mt-0.5 leading-snug">{p.role}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SOA Leadership Delegation */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-indigo-600">
                  <Building className="w-4 h-4" />
                  <h3 className="text-xs font-bold uppercase tracking-wider font-mono">
                    SOA University Institutional Delegation
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentConclave.leadership.map((l) => (
                    <div key={l.name} className="p-3.5 rounded-xl bg-indigo-50/50 border border-indigo-200/60">
                      <div className="text-xs font-bold text-slate-900">{l.name}</div>
                      <div className="text-[11px] text-indigo-700 mt-0.5">{l.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MARQUEE SPEAKERS ROSTER */}
        {activeTab === "Speakers" && (
          <div className="space-y-8">
            <div className="max-w-3xl space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Marquee Speakers, Sports Icons & CXO Leaders
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Over 40 distinguished corporate leaders, Olympic medalists, international athletes, and academic dignitaries across all six Allyship++ conclaves.
              </p>
            </div>

            {/* Sports & Keynote Icons */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-700">
                <Medal className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider font-mono">
                  Olympic Champions & Indian Sports Legends
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "Anju Bobby George", chapter: "Bengaluru 1.0", role: "Olympian & World Athletics Medalist", note: "Keynote on Leadership in Sports" },
                  { name: "Arshad Ayub", chapter: "Hyderabad 1.0", role: "Former Indian Test & ODI Cricketer", note: "Chief Guest on Collaborative Leadership" },
                  { name: "Gurbux Singh", chapter: "Kolkata 1.0", role: "1964 Olympic Hockey Gold Medalist", note: "Sports Legend Tribute" },
                  { name: "Gautam Sarkar", chapter: "Kolkata 1.0", role: "Former Indian Footballer ('Indian Beckenbauer')", note: "Sports Legend Tribute" },
                  { name: "Satyaprakash Krishna", chapter: "Kolkata 1.0", role: "Mentor to Former Indian Cricket Captain M.S. Dhoni", note: "Sponsorship & Talent Spotting" },
                  { name: "Nilesh Kulkarni", chapter: "Mumbai 1.0", role: "Former Indian Test Cricketer", note: "Fireside Chat on Resilience & Education" },
                  { name: "Anand Menezes", chapter: "Mumbai 1.0", role: "Olympian & Senior Consultant, AFI", note: "Keynote on Athletic High-Performance" },
                  { name: "Dr. G. Srinivas Patnaik", chapter: "Hyderabad 2.0", role: "Secretary, Athletics Federation of India", note: "Mentorship & Resilience in Young Talent" },
                  { name: "Premanand J.", chapter: "Chennai 2.0", role: "Paris Olympics National Sprint Coach", note: "Discipline, Mentorship & Gen-Z Leadership" },
                ].map((s) => (
                  <div key={s.name} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-amber-400 transition-colors">
                    <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      {s.chapter}
                    </span>
                    <div className="text-sm font-bold text-slate-900 mt-2">{s.name}</div>
                    <div className="text-xs font-medium text-slate-700 mt-0.5">{s.role}</div>
                    <div className="text-[11px] text-slate-500 mt-1 italic">{s.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate & CXO Leaders */}
            <div className="space-y-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-blue-700">
                <Users className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider font-mono">
                  Corporate CXOs, CHROs & Capability Heads
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Dr. P.B. Kotur", role: "Global Head, Engineering Academy, LTTS", chapter: "Bengaluru & Mumbai" },
                  { name: "Archana Grover", role: "Global Head – Capabilities, Standard Chartered", chapter: "Chennai 2.0" },
                  { name: "Prof. Sanjay Dhir", role: "Professor, IIT Delhi", chapter: "Hyderabad 2.0" },
                  { name: "C. Aparna", role: "CHRO, Torry Harris Integration Solutions", chapter: "Bengaluru 1.0" },
                  { name: "Baliram Mutagekar", role: "Vice President, BNY Mellon", chapter: "Bengaluru 1.0" },
                  { name: "Pushkala Balasubramanian", role: "VP – Engineering, Kloudgin", chapter: "Hyderabad 1.0" },
                  { name: "Rohit Adlakha", role: "CXO Advisor, Human Edge Enterprises", chapter: "Hyderabad 1.0" },
                  { name: "Kiranmal Pendyala", role: "Former Strategic Thought Leader, UPS", chapter: "Hyderabad 1.0" },
                  { name: "Sudipto Ray", role: "MD – Cloud & Digital, PwC", chapter: "Kolkata 1.0" },
                  { name: "Brishti Mondal", role: "Vice President, NRI FinTech", chapter: "Kolkata 1.0" },
                  { name: "Sumit Agarwal", role: "DEI Advisor to Fortune 500 Companies", chapter: "Kolkata 1.0" },
                  { name: "Dr. Brillian S.K.", role: "EVP & Head HR, Times Professional Learning", chapter: "Mumbai 1.0" },
                  { name: "Rachita Mahadev", role: "Emerging Talent Lead – APJ, Akamai Technologies", chapter: "Hyderabad 2.0" },
                  { name: "Dr. Reena Das", role: "CHRO, Keolis Hyderabad", chapter: "Hyderabad 2.0" },
                  { name: "Suganya Veeraraghavan", role: "AVP, Rocket India", chapter: "Chennai 2.0" },
                  { name: "Suresh Aade", role: "Head HR, Foodhub", chapter: "Chennai 2.0" },
                  { name: "R.K. Ramachandran", role: "Global Talent Head, KaarTech", chapter: "Chennai 2.0" },
                  { name: "M.D. Joshua David", role: "India Campus Head, Mphasis", chapter: "Chennai 2.0" },
                ].map((c) => (
                  <div key={c.name} className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 transition-colors">
                    <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {c.chapter}
                    </span>
                    <div className="text-xs font-bold text-slate-900 mt-2">{c.name}</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">{c.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: THEMES & STRATEGIC EVOLUTION */}
        {activeTab === "Themes" && (
          <div className="space-y-8">
            <div className="max-w-3xl space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-900">
                The Strategic Arc: Allyship++ 1.0 to 2.0
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                How the conclave series evolved from establishing foundational corporate-academic trust to operationalizing daily allyship for Gen-Z talent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phase I Card */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-4">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-mono text-xs font-bold">
                  Phase I: Allyship++ 1.0 (2024–2025)
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Dismantling Geographical & Institutional Distance
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  SOA University systematically brought an academic hub in Bhubaneswar directly into the corporate boardrooms of Bengaluru, Hyderabad, Kolkata, and Mumbai. Engaging 60 to 70 leaders per city, Phase I demonstrated that academic institutions must collaborate continuously with industry to navigate cloud engineering burnout, hybrid team dynamics, and Fortune 500 DEI mandates.
                </p>
                <div className="pt-2 border-t border-slate-100 text-xs text-slate-500">
                  Chapters: Bengaluru · Hyderabad 1.0 · Kolkata · Mumbai
                </div>
              </div>

              {/* Phase II Card */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-4">
                <span className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 font-mono text-xs font-bold">
                  Phase II: Allyship++ 2.0 (2026)
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Practicing Allyship: Gen-Z Mentorship & Daily Responsibility
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Pivoting from <i>why</i> inclusion matters to <i>how</i> enterprises operationalize it daily. Moderated by IIT Delhi’s Prof. Sanjay Dhir in Hyderabad and Standard Chartered’s Global Head Archana Grover in Chennai, leaders addressed the expectations of Gen-Z digital natives—codifying allyship not as an isolated HR program, but as a core leadership responsibility driving psychological safety and innovation.
                </p>
                <div className="pt-2 border-t border-slate-100 text-xs text-slate-500">
                  Chapters: Hyderabad 2.0 (May 2026) · Chennai 2.0 (July 2026)
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: OFFICIAL CONCLAVE VIDEOS */}
        {activeTab === "Videos" && (
          <div className="space-y-8">
            <div className="max-w-3xl space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Official Conclave Video Recordings & Fireside Chats
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Watch full panel deliberations and keynote fireside chats from the Chennai, Hyderabad, and national chapters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videos.map((v) => (
                <div key={v.title} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
                  <div className="relative aspect-video bg-black flex items-center justify-center">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        {v.tag}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 mt-2 line-clamp-2">
                        {v.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-3">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Global Invitation Modal */}
      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />
    </div>
  );
}

export default function EventPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#070d18] text-white flex items-center justify-center">
          <div className="flex items-center gap-3 text-sm font-semibold text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
            <span>Loading Allyship++ Conclave Series...</span>
          </div>
        </div>
      }
    >
      <EventContent />
    </Suspense>
  );
}
