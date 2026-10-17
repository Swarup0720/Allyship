"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";

export default function EventPage() {
  const [activeTab, setActiveTab] = useState<"Overview" | "Agenda" | "Speakers" | "Venue" | "FAQ">("Agenda");
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  const tabs: ("Overview" | "Agenda" | "Speakers" | "Venue" | "FAQ")[] = [
    "Overview",
    "Agenda",
    "Speakers",
    "Venue",
    "FAQ",
  ];

  const agendaItems = [
    {
      time: "09:00 - 10:00 AM",
      title: "Registration & Welcome Tea",
      desc: "Meet fellow leaders and explore the innovation showcase.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80",
    },
    {
      time: "10:00 - 11:00 AM",
      title: "Inaugural Session",
      desc: "Welcome address by Hota Sir and special guests.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&q=80",
    },
    {
      time: "11:30 - 01:00 PM",
      title: "Panel Discussion",
      desc: "Industry-Academia Collaboration: Opportunities and Challenges",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=400&q=80",
    },
    {
      time: "02:00 - 03:30 PM",
      title: "Breakout Sessions",
      desc: "Focused discussions on key themes (AI, Sustainability, Healthcare, etc.)",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
    },
    {
      time: "04:00 - 05:00 PM",
      title: "Innovation Showcase",
      desc: "Live demonstrations of student projects and research.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80",
    },
    {
      time: "05:00 - 06:00 PM",
      title: "Networking & High Tea",
      desc: "Curated networking with corporate leaders, faculty and students.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-slate-900 pb-20">
      {/* 1. Dark Photographic Hero Section matching Reference */}
      <section className="relative bg-[#070d18] text-white pt-12 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
              JOIN THE CONVERSATION
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
              Event Details
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              An exclusive gathering to discuss ideas, share perspectives and create meaningful partnerships.
            </p>

            {/* Date, Time & Venue */}
            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-semibold text-white">10 January 2025</span>
                <span className="text-slate-500">|</span>
                <span>9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-semibold text-white">SOA University</span>
                <span className="text-slate-500">•</span>
                <span>Bhubaneswar, India</span>
              </div>
            </div>

            {/* Request Invitation Button */}
            <div className="pt-3">
              <button
                type="button"
                onClick={() => setIsInviteOpen(true)}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide shadow-md shadow-blue-600/30 transition-all flex items-center gap-2"
              >
                <span>Request Invitation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Stage Photo matching reference */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80"
                alt="Auditorium Stage at SOA University"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-5">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  SOA University Auditorium
                </span>
                <span className="text-sm font-bold text-white mt-0.5">
                  Main Conclave Hall
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Internal Tabs Navigation (Overview, Agenda, Speakers, Venue, FAQ) */}
      <section className="bg-white border-b border-slate-200 sticky top-20 z-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto py-2">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActiveTab(t)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === t
                  ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600 font-extrabold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Tab Content */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        {activeTab === "Agenda" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Event Agenda
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                A day of insightful discussions, engaging sessions and valuable networking opportunities.
              </p>
            </div>

            {/* Vertical Agenda Timeline matching reference */}
            <div className="space-y-4">
              {agendaItems.map((item, idx) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-blue-300 transition-all"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    {/* Time indicator */}
                    <div className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-mono font-bold whitespace-nowrap shrink-0 border border-blue-100">
                      {item.time}
                    </div>

                    <div className="space-y-0.5">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right Thumbnail Image matching reference */}
                  <div className="w-full sm:w-28 h-18 sm:h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Overview" && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">About Allyship 2025</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              ALLYSHIP is a high-level private invitation conclave organized by SOA University. The forum convenes C-suite corporate executives, talent acquisition heads, R&D directors, and academic researchers to build institutional partnerships.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold text-blue-600 block">Date & Duration</span>
                <span className="text-sm font-bold text-slate-800">10 January 2025 (Full Day)</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold text-blue-600 block">Attendance</span>
                <span className="text-sm font-bold text-slate-800">100+ Corporate Leaders</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold text-blue-600 block">Format</span>
                <span className="text-sm font-bold text-slate-800">In-Person Conclave</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Speakers" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Featured Keynotes & Panelists</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80"
                    alt="Raj Kumar Hota"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Raj Kumar Hota</h3>
                  <p className="text-xs text-blue-600 font-medium">Leadership, SOA University</p>
                  <p className="text-xs text-slate-500 mt-1">Inaugural Address & Industry Roadmap</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                    alt="Prof. Pradipta Kumar Nanda"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Prof. (Dr.) Pradipta Kumar Nanda</h3>
                  <p className="text-xs text-blue-600 font-medium">Vice Chancellor, SOA University</p>
                  <p className="text-xs text-slate-500 mt-1">Opening Keynote: Applied Academic Excellence</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Venue" && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Venue & Campus Logistics</h2>
            <p className="text-sm text-slate-600">
              The conclave will take place at the Main University Convention Centre, Siksha 'O' Anusandhan, Khandagiri Square, Bhubaneswar, Odisha.
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
              <p>• <strong>Airport:</strong> Biju Patnaik International Airport (BBI), 8 km from campus.</p>
              <p>• <strong>Railway:</strong> Bhubaneswar Railway Station (BBS), 10 km from campus.</p>
              <p>• Dedicated executive shuttle transportation is provided for confirmed corporate attendees.</p>
            </div>
          </div>
        )}

        {activeTab === "FAQ" && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">How can I request an invitation?</span>
                <span>Click the "Request Invitation" button on this page to submit your details. Curated invitations are sent following review by the committee.</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Is there a registration fee?</span>
                <span>No. ALLYSHIP is an invitation-only strategic conclave hosted by SOA University for invited corporate leaders and academic researchers.</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Global Invitation Modal */}
      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />
    </div>
  );
}
