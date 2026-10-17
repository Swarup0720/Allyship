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
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";

export default function HomePage() {
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const stats = [
    {
      value: "100+",
      label: "Corporate Leaders",
      icon: Users,
    },
    {
      value: "25+",
      label: "Industries",
      icon: Building2,
    },
    {
      value: "50+",
      label: "SOA Innovators",
      icon: Lightbulb,
    },
    {
      value: "∞",
      label: "Possibilities",
      icon: InfinityIcon,
    },
  ];

  const platformCards = [
    {
      title: "Exchange Ideas",
      desc: "Meaningful discussions on real industry challenges",
      icon: MessageSquare,
    },
    {
      title: "Build Partnerships",
      desc: "Research, projects and talent collaborations",
      icon: Network,
    },
    {
      title: "Shape Opportunities",
      desc: "Mentorship, internships and industry engagement",
      icon: GraduationCap,
    },
    {
      title: "Drive Impact",
      desc: "Solutions for a stronger, more innovative future",
      icon: Compass,
    },
  ];

  const eventHighlights = [
    {
      title: "Leadership Discussions",
      desc: "Keynote sessions and roundtable conversations",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Innovation Showcase",
      desc: "Student projects and research demonstrations",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Networking",
      desc: "Curated one-on-one and group interactions",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Collaboration Opportunities",
      desc: "Explore research, mentorship and industry projects",
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
            {/* Small label: A PRIVATE INVITATION EVENT */}
            <div className="inline-block">
              <span className="px-3.5 py-1 rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 text-[11px] font-mono font-bold tracking-widest uppercase">
                A PRIVATE INVITATION EVENT
              </span>
            </div>

            {/* Main Heading: ALLYSHIP with SHIP in blue */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-sans text-white">
              ALLY<span className="text-blue-500">SHIP</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100">
              Bridging Industry. Academia. A Brighter Tomorrow.
            </p>

            {/* Short introduction */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              A curated gathering of corporate leaders, HRs and change-makers to discuss ideas, build partnerships and create opportunities with SOA University.
            </p>

            {/* Date & Location Pill Row */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium pt-1">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-semibold text-white">10 Jan 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Bhubaneswar, India</span>
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
                <span>Watch the Video</span>
              </button>

              <button
                type="button"
                onClick={() => setIsInviteOpen(true)}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide transition-all shadow-md shadow-blue-600/30 flex items-center gap-2"
              >
                <span>Request Invitation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Hero Stage Photography matching reference */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80"
                alt="Allyship Conference Stage at SOA University"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6">
                <div className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
                  SOA University Grand Stage
                </div>
                <div className="text-lg font-bold text-white mt-1">
                  Ideas. People. Partnerships.
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  For a Better Tomorrow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HORIZONTAL STATISTICS PANEL */}
      <section className="bg-[#0b1120] border-b border-slate-800 text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => {
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

      {/* 3. A PLATFORM FOR REAL IMPACT */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            A Platform for Real Impact
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Allyship is more than an event. It's a movement to connect industry leaders with the talent, research and innovation ecosystem at SOA University.
          </p>
        </div>

        {/* 4 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. A MESSAGE FROM HOTA SIR */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
          {/* Left: Dr. Hota Photograph */}
          <div className="md:col-span-5 relative h-72 sm:h-96 w-full bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
              alt="Dr. Raj Kumar Hota speaking at podium"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:hidden p-4 flex items-end">
              <span className="text-white font-bold text-sm">Dr. Raj Kumar Hota</span>
            </div>
          </div>

          {/* Right: Message Quote */}
          <div className="md:col-span-7 p-8 sm:p-12 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              A Message from Hota Sir
            </h2>

            <blockquote className="text-sm sm:text-base text-slate-700 italic leading-relaxed border-l-4 border-blue-600 pl-4">
              “Allyship is about people coming together with a shared purpose — to create opportunities, solve real problems and build a better tomorrow with the bright minds at SOA.”
            </blockquote>

            {/* Signature & Credentials */}
            <div className="pt-2">
              <div className="font-serif italic text-2xl text-blue-600 font-bold tracking-wider">
                Hota
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">
                Dr. Raj Kumar Hota
              </div>
              <div className="text-xs text-slate-500">
                [Founder / Chancellor, SOA University]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EVENT HIGHLIGHTS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Event Highlights
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              What corporate executives and academic innovators experience at Allyship.
            </p>
          </div>
          <Link
            href="/event"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
          >
            <span>View Full Agenda</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventHighlights.map((hl) => (
            <div
              key={hl.title}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={hl.image}
                  alt={hl.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {hl.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    {hl.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Preview Modal */}
      {isVideoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in"
        >
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <div className="p-4 bg-slate-950 flex items-center justify-between text-white text-xs font-bold">
              <span>ALLYSHIP 2025 • Official Event Teaser</span>
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-slate-950 flex flex-col items-center justify-center text-white p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-600/40">
                <Play className="w-7 h-7 fill-white ml-1" />
              </div>
              <h3 className="text-xl font-bold">Bridging Industry. Academia. A Brighter Tomorrow.</h3>
              <p className="text-xs text-slate-400 max-w-md mt-2">
                Curated gathering of corporate leaders, researchers, and innovators at SOA University.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Global Get Invited Modal */}
      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />
    </div>
  );
}
