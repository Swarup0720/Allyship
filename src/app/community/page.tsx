"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Calendar,
  ShieldCheck,
  Heart,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  Lock,
  ArrowRight,
  Send,
} from "lucide-react";
import { COMMUNITY_EVENTS } from "@/data/communityEvents";
import { EventCard } from "@/components/EventCard";
import { PledgeModal } from "@/components/PledgeModal";

export default function CommunityPage() {
  const [isPledgeModalOpen, setIsPledgeModalOpen] = useState(false);
  const [reflectionInput, setReflectionInput] = useState("");
  const [reflectionSubmitted, setReflectionSubmitted] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<string>("All");

  const workingCircles = [
    {
      title: "Workplace & Technology Allies",
      desc: "For engineers, managers, and designers tackling meeting equity, sponsorship pipelines, and hiring algorithms.",
      cadence: "Bi-weekly Thursdays",
      memberBadge: "Open Membership",
    },
    {
      title: "Neurodiversity & Universal Design Circle",
      desc: "Autistic, ADHD, and neurotypical professionals collaborating on sensory-friendly hybrid work norms.",
      cadence: "1st & 3rd Wednesday",
      memberBadge: "Safe Space",
    },
    {
      title: "First-Generation Scholars & Allies",
      desc: "Pairing first-gen university scholars with industry mentors to navigate career advancement and financial equity.",
      cadence: "Monthly Weekends",
      memberBadge: "Mentorship Hub",
    },
    {
      title: "Healthcare & Patient Advocacy Guild",
      desc: "Clinicians and patient advocates examining disparities in clinical trials, maternal health, and diagnosis bias.",
      cadence: "Monthly Roundtables",
      memberBadge: "Specialized Guild",
    },
  ];

  const guidelines = [
    {
      title: "1. The Chatham House Rule",
      text: "Participants are free to use the information received, but neither the identity nor the affiliation of the speaker may be revealed.",
    },
    {
      title: "2. Impact Over Intent",
      text: "When called in on harmful language or assumptions, we listen with curiosity rather than prioritizing our good intentions.",
    },
    {
      title: "3. Equal Airtime & No Dominance",
      text: "Facilitators actively balance speaking time so that louder voices make room for quieter or marginalized participants.",
    },
    {
      title: "4. Zero Tolerance for Harassment",
      text: "Hate speech, personal attacks, doxxing, or tone policing result in immediate removal without appeal.",
    },
  ];

  const handleReflectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reflectionInput.trim().length > 5) {
      setReflectionSubmitted(true);
      setReflectionInput("");
    }
  };

  const filteredEvents =
    selectedFormat === "All"
      ? COMMUNITY_EVENTS
      : COMMUNITY_EVENTS.filter((e) => e.format.includes(selectedFormat));

  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">
      {/* 1. Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
          <Users className="w-3.5 h-3.5 text-emerald-600" />
          <span>A Welcoming, Inclusive Community</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Where Allies Connect, Learn & Act
        </h1>

        <p className="text-base text-slate-600 leading-relaxed">
          Welcome to the Allyship community space. Here, learners, advocates, and organizers assemble to share unvarnished experiences, practice bystander intervention, and foster mutual accountability.
        </p>

        <div className="pt-2 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setIsPledgeModalOpen(true)}
            className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Join the Community (Take Pledge)</span>
          </button>
          <a
            href="#events"
            className="px-6 py-2.5 rounded-full bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
          >
            Explore Upcoming Events
          </a>
        </div>
      </section>

      {/* 2. Community Working Circles */}
      <section className="space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
            Peer Learning Groups
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Active Community Circles
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-xl">
            Bi-weekly and monthly dialogue cohorts organized around specific domains of practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workingCircles.map((circle) => (
            <div
              key={circle.title}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {circle.memberBadge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{circle.cadence}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">{circle.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {circle.desc}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setIsPledgeModalOpen(true)}
                  className="text-xs font-bold text-indigo-700 hover:text-indigo-900 inline-flex items-center gap-1"
                >
                  <span>Request to Join Circle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Upcoming Events Calendar */}
      <section id="events" className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
              Interactive Gatherings
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Upcoming Events & Workshops
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              RSVP to participate in live, moderated workshops. Free and open to registered allies.
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            {["All", "Workshop", "Circle", "Discussion"].map((fmt) => (
              <button
                key={fmt}
                type="button"
                onClick={() => setSelectedFormat(fmt)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedFormat === fmt
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((evt) => (
            <EventCard key={evt.id} event={evt} />
          ))}
        </div>
      </section>

      {/* 4. Safety, Moderation & Guidelines Charter */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-indigo-900">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
            <Lock className="w-4 h-4" />
            Safety, Moderation & Privacy Charter
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How We Protect Vulnerability and Safety
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Meaningful discussion about systemic bias requires emotional vulnerability. We safeguard this space through strict, non-negotiable community norms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {guidelines.map((g) => (
              <div key={g.title} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                <h4 className="text-sm font-bold text-orange-300">{g.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{g.text}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-4">
            <span>Moderated by trained restorative justice facilitators.</span>
            <Link href="/contact" className="text-indigo-300 hover:text-white underline">
              Report a Safety or Conduct Concern
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Reflection of the Month */}
      <section className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm max-w-3xl mx-auto w-full space-y-4">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-indigo-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Monthly Community Reflection Prompt
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900">
          “What is one unwritten rule in your industry that advantages people from certain backgrounds?”
        </h3>

        <p className="text-xs text-slate-500 leading-relaxed">
          Take a moment to reflect. Responses are submitted anonymously to our internal learning team for quarterly case study synthesis.
        </p>

        {reflectionSubmitted ? (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Thank you for sharing your reflection. Your insight helps refine our curriculum.</span>
          </div>
        ) : (
          <form onSubmit={handleReflectionSubmit} className="space-y-3 pt-2">
            <textarea
              rows={3}
              value={reflectionInput}
              onChange={(e) => setReflectionInput(e.target.value)}
              placeholder="Share an anonymous observation or lived reflection..."
              className="w-full p-4 rounded-2xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 resize-none bg-slate-50/50"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={reflectionInput.trim().length < 5}
                className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 disabled:opacity-40 transition-colors flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Anonymous Reflection</span>
              </button>
            </div>
          </form>
        )}
      </section>

      {/* Pledge Modal */}
      <PledgeModal isOpen={isPledgeModalOpen} onClose={() => setIsPledgeModalOpen(false)} />
    </div>
  );
}
