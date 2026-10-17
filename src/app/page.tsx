"use client";

import React, { useState, useEffect } from "react";
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
  Medal,
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";
import { ChapterModal } from "@/components/ChapterModal";
import { conclavesData, ConclaveChapter } from "@/data/conclaves";

const landingHeroImages = [
  {
    src: "/IMG_7873.jpg",
    title: "Hyderabad Chapter 2.0 Live Conclave",
    subtitle: "Dignitaries, CXOs & Academic Leadership",
  },
  {
    src: "/IMG_7577.jpg",
    title: "Executive Ballroom & Corporate Delegates",
    subtitle: "Over 80-90+ Industry Leaders per Conclave",
  },
  {
    src: "/IMG_7849.jpg",
    title: "CXO Strategic Panel Discussion",
    subtitle: "Navigating AI, Workforce Transformation & Academia",
  },
  {
    src: "/IMG_7610.jpg",
    title: "Leadership Insights & Deliberations",
    subtitle: "Bridging Corporate Strategy with University R&D",
  },
];

export default function HomePage() {
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedModalChapter, setSelectedModalChapter] = useState<ConclaveChapter | null>(null);
  const [isChapterModalOpen, setIsChapterModalOpen] = useState(false);
  const [activeEditionFilter, setActiveEditionFilter] = useState<"All" | "1.0" | "2.0">("All");
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % landingHeroImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const filteredChapters = conclavesData.filter((c) => {
    if (activeEditionFilter === "1.0") return c.editionCycle === "1.0";
    if (activeEditionFilter === "2.0") return c.editionCycle === "2.0";
    return true;
  });

  // Updated stats matching the blueprint
  const heroStats = [
    {
      value: "8",
      label: "Conclaves across 5 Metro Hubs",
      icon: MapPin,
    },
    {
      value: "80-90+",
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


  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-slate-900 pb-20">
      {/* 1. HERO SECTION WITH AUTOMATIC SLIDING CONCLAVE BACKGROUND */}
      <section className="relative bg-[#070d18] text-white pt-12 sm:pt-16 lg:pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800">
        {/* Sliding Background Gallery */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="flex h-full w-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${heroSlide * 100}%)` }}
          >
            {landingHeroImages.map((slide) => (
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
            {landingHeroImages.map((slide, i) => (
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
            {landingHeroImages[heroSlide].title}
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Hero Content with frosted backing for crisp legibility */}
          <div className="lg:col-span-7 space-y-6 bg-slate-950/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
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
                <span>Bengaluru · Hyderabad</span>
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

          {/* Right Hero Stage Photography matching reference with uploaded IMG_7376.jpg */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div
              onClick={() => setIsVideoOpen(true)}
              className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group bg-slate-900 cursor-pointer"
            >
              <img
                src="/IMG_7376.jpg"
                alt="Allyship++ National Conclave Live Ballroom at SOA University"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                      Live Conclave Session
                    </div>
                    <div className="text-lg font-bold text-white mt-0.5">
                      Allyship++ 2.0 Hyderabad Conclave
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Corporate CXOs, Academic Leaders & Delegates
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-600/90 hover:bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </div>
                </div>
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

      {/* 4. FOUNDER PRESIDENT & CHAIRMAN'S VISION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
          {/* Left: Chairman Photograph */}
          <div className="md:col-span-5 relative h-80 sm:h-96 w-full bg-slate-900">
            <img
              src="/chairman-manojranjan-nayak.png"
              alt="Prof. (Dr.) Manojranjan Nayak, Founder President & Chairman of SOA / ITER"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm text-blue-400 text-[10px] font-mono font-bold uppercase tracking-wider border border-slate-700">
                Chairman
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:hidden p-4 flex items-end">
              <span className="text-white font-bold text-sm">Prof. (Dr.) Manojranjan Nayak</span>
            </div>
          </div>

          {/* Right: Vision from the Chairman */}
          <div className="md:col-span-7 p-8 sm:p-12 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                Founder's Vision & Institutional Stewardship
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Vision from the Chairman
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Under the pioneering stewardship of Founder President & Chairman Prof. (Dr.) Manojranjan Nayak, Siksha ‘O’ Anusandhan (Deemed to be University) and ITER were founded on the bedrock of academic excellence and societal impact—growing into a NIRF Top-15 multidisciplinary benchmark.
            </p>

            <blockquote className="text-xs sm:text-sm text-slate-800 italic leading-relaxed border-l-4 border-blue-600 pl-4 bg-slate-50 py-3 rounded-r-xl">
              “From pioneering engineering education at ITER to building SOA into a world-class university, our enduring conviction has been that education achieves its true purpose when academia and industry walk hand-in-hand. Allyship++ embodies this vision—bridging boardrooms and classrooms to nurture future-ready leaders of high intellect and profound human empathy.”
            </blockquote>

            {/* Signature & Credentials */}
            <div className="pt-2 border-t border-slate-100">
              <div className="font-serif italic text-2xl text-blue-600 font-bold tracking-wider">
                Manojranjan Nayak
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">
                Prof. (Dr.) Manojranjan Nayak
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Founder President & Chairman, Siksha ‘O’ Anusandhan (SOA) / ITER
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SIX-CHAPTER CONCLAVE HIGHLIGHTS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Across India's Corporate Capitals
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Six Chapters Across Editions 1.0 & 2.0
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Deliberating future-ready engineering cultures, psychological safety, and sports-inspired leadership resilience across India’s major metropolitan innovation corridors.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Edition Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl">
              {(["All", "1.0", "2.0"] as const).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveEditionFilter(filter)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeEditionFilter === filter
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {filter === "All" && "All 6 Chapters"}
                  {filter === "1.0" && "Edition 1.0"}
                  {filter === "2.0" && "Edition 2.0"}
                </button>
              ))}
            </div>

            <Link
              href="/event"
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors pl-2"
            >
              <span>Explore All 6 Conclaves & Speakers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Responsive Grid of Conclave Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChapters.map((h) => (
            <div
              key={h.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all group flex flex-col justify-between"
            >
              {/* Card Banner Image */}
              <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                <img
                  src={h.image}
                  alt={h.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="bg-slate-950/85 backdrop-blur-sm text-cyan-400 font-mono text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-700">
                    {h.city}
                  </span>
                  <span className="bg-blue-600/90 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {h.editionCycle === "2.0" ? "2.0" : "1.0"}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-mono text-slate-300 font-semibold block">
                    {h.date} · {h.venue}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {h.title}
                  </h3>

                  {/* Sports Guests & Dignitaries Badge */}
                  {h.sportsGuests && h.sportsGuests.length > 0 && (
                    <div className="flex items-start gap-2 p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/60 text-xs">
                      <Medal className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900 block">
                          {h.sportsGuests[0].name}
                        </span>
                        <span className="text-[11px] text-amber-900 line-clamp-1">
                          {h.sportsGuests[0].role}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Summary Snippet from SOA */}
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {h.desc}
                  </p>

                  {/* Organizations preview */}
                  {h.organizations && h.organizations.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {h.organizations.slice(0, 4).map((org) => (
                        <span
                          key={org}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-medium border border-slate-200"
                        >
                          {org}
                        </span>
                      ))}
                      {h.organizations.length > 4 && (
                        <span className="text-[10px] text-slate-400 font-medium self-center">
                          +{h.organizations.length - 4} more
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Working Clickable Action Hyperlinks */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link
                    href={`/event?chapter=${h.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group/link py-1"
                    title={`View full details for ${h.city} chapter`}
                  >
                    <span>View Chapter</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedModalChapter(h);
                      setIsChapterModalOpen(true);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 font-semibold text-xs transition-colors flex items-center gap-1 shrink-0"
                    title="Quick preview summary"
                  >
                    <span>Quick Read</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if filter has no results */}
        {filteredChapters.length === 0 && (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
            <p className="text-sm text-slate-500">No chapters found for this filter.</p>
          </div>
        )}
      </section>

      {/* Chapter Content Modal */}
      <ChapterModal
        chapter={selectedModalChapter}
        isOpen={isChapterModalOpen}
        onClose={() => setIsChapterModalOpen(false)}
      />

      {/* Global Invitation Modal */}
      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />

      {/* Video Modal with Uploaded Conclave Video */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-slate-800 text-white">
              <span className="font-bold text-sm">Allyship++ 2.0 Hyderabad Conclave Highlights</span>
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black flex items-center justify-center">
              <video
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
                src="/soa-allyship ++ 2.0_hyd-4.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
