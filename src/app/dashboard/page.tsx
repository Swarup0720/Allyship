"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  User,
  Sparkles,
  Bookmark,
  Calendar,
  CheckCircle2,
  Award,
  Download,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Trash2,
  Printer,
} from "lucide-react";
import {
  getStoredPledge,
  getSavedResourceIds,
  getRegisteredEventIds,
  toggleSavedResourceId,
} from "@/lib/storage";
import { RESOURCES } from "@/data/resources";
import { COMMUNITY_EVENTS } from "@/data/communityEvents";
import { PledgeSubmission } from "@/lib/types";
import { InteractiveChecklist } from "@/components/InteractiveChecklist";
import { PledgeModal } from "@/components/PledgeModal";

export default function DashboardPage() {
  const [pledge, setPledge] = useState<PledgeSubmission | null>(null);
  const [savedResourceIds, setSavedResourceIds] = useState<string[]>([]);
  const [registeredEventIds, setRegisteredEventIds] = useState<string[]>([]);
  const [isPledgeModalOpen, setIsPledgeModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "resources" | "events" | "checklist">(
    "overview"
  );

  const loadData = () => {
    setPledge(getStoredPledge());
    setSavedResourceIds(getSavedResourceIds());
    setRegisteredEventIds(getRegisteredEventIds());
  };

  useEffect(() => {
    loadData();
    window.addEventListener("allyship-pledge-updated", loadData);
    window.addEventListener("allyship-saved-resources-updated", loadData);
    window.addEventListener("allyship-events-updated", loadData);

    return () => {
      window.removeEventListener("allyship-pledge-updated", loadData);
      window.removeEventListener("allyship-saved-resources-updated", loadData);
      window.removeEventListener("allyship-events-updated", loadData);
    };
  }, []);

  const savedResources = RESOURCES.filter((r) => savedResourceIds.includes(r.id));
  const registeredEvents = COMMUNITY_EVENTS.filter((e) => registeredEventIds.includes(e.id));

  const handleRemoveSaved = (id: string) => {
    toggleSavedResourceId(id);
    setSavedResourceIds(getSavedResourceIds());
  };

  const handlePrintCertificate = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="flex flex-col gap-10 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
      {/* Top Profile / Welcome Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 text-white flex items-center justify-center font-bold text-xl shadow-md">
            {pledge ? pledge.name.charAt(0).toUpperCase() : <User className="w-7 h-7" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                {pledge ? `Welcome back, ${pledge.name}` : "Ally Member Portal"}
              </h1>
              {pledge && (
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Advocate
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {pledge
                ? `Certificate ID: ${pledge.certificateNumber} • Registered ${new Date(pledge.createdAt).toLocaleDateString()}`
                : "Take the pledge to receive your official certificate and unlock personalized tracking."}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {!pledge ? (
            <button
              type="button"
              onClick={() => setIsPledgeModalOpen(true)}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-xs shadow-md flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Take the Allyship Pledge</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handlePrintCertificate}
              className="px-5 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center gap-2 hover:bg-slate-800 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save Certificate</span>
            </button>
          )}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto text-xs font-bold">
        {[
          { id: "overview", label: "Overview & Certificate", count: pledge ? "1" : "0" },
          { id: "resources", label: "Saved Resources", count: String(savedResources.length) },
          { id: "events", label: "Registered Sessions", count: String(registeredEvents.length) },
          { id: "checklist", label: "Everyday Habits Checklist", count: "" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === tab.id
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span>{tab.label}</span>
            {tab.count && (
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  activeTab === tab.id ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Tab 1: Overview & Certificate */}
      {activeTab === "overview" && (
        <div className="space-y-8">
          {pledge ? (
            <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-indigo-900 shadow-xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl space-y-6">
                <div className="flex items-center justify-between text-xs text-indigo-300 font-mono">
                  <span>ALLYSHIP FOUNDATION • VERIFIED CREDENTIAL</span>
                  <span className="font-bold">{pledge.certificateNumber}</span>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-orange-400">
                    Official Recognition
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                    {pledge.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 italic leading-relaxed">
                    “Has made a solemn commitment to listen actively, interrupt systemic bias, and empower underrepresented individuals.”
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Registered Focus Areas:</span>
                    <span className="font-semibold text-white capitalize">
                      {pledge.focusAreas.join(", ")}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Credential Date:</span>
                    <span className="font-semibold text-white">
                      {new Date(pledge.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-10 border border-slate-200 text-center max-w-xl mx-auto space-y-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">No Active Pledge Yet</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Affirm your commitment to active solidarity, receive your personalized Certificate of Active Allyship, and unlock member recommendations.
              </p>
              <button
                type="button"
                onClick={() => setIsPledgeModalOpen(true)}
                className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs"
              >
                Take the Pledge (2 Minutes)
              </button>
            </div>
          )}

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Saved Resources
              </span>
              <div className="text-2xl font-extrabold text-slate-900 mt-1">
                {savedResources.length}
              </div>
              <Link href="/resources" className="text-xs text-indigo-600 font-semibold mt-2 inline-block">
                Browse Library →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Registered Sessions
              </span>
              <div className="text-2xl font-extrabold text-slate-900 mt-1">
                {registeredEvents.length}
              </div>
              <Link href="/community" className="text-xs text-indigo-600 font-semibold mt-2 inline-block">
                View Calendar →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Pledge Status
              </span>
              <div className="text-2xl font-extrabold text-slate-900 mt-1">
                {pledge ? "Active" : "Guest"}
              </div>
              <span className="text-xs text-slate-500 mt-2 block">
                {pledge ? "Verified Advocate" : "Unverified"}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Saved Resources */}
      {activeTab === "resources" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Your Saved Reading List</h2>
            <Link href="/resources" className="text-xs font-bold text-indigo-600 hover:underline">
              + Discover more resources
            </Link>
          </div>

          {savedResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedResources.map((res) => (
                <div
                  key={res.id}
                  className="p-5 bg-white rounded-2xl border border-slate-200 flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                      {res.categoryLabel}
                    </span>
                    <Link
                      href={`/resources/${res.slug}`}
                      className="block text-sm font-bold text-slate-900 hover:text-indigo-600"
                    >
                      {res.title}
                    </Link>
                    <p className="text-xs text-slate-500 line-clamp-1">{res.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveSaved(res.id)}
                    title="Remove from saved"
                    className="p-2 text-slate-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 text-xs text-slate-500">
              You haven't saved any resources yet. Explore the{" "}
              <Link href="/resources" className="text-indigo-600 font-bold underline">
                Resource Library
              </Link>{" "}
              and click the bookmark button on any guide.
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Registered Events */}
      {activeTab === "events" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Your Upcoming Registered Gatherings</h2>
            <Link href="/community" className="text-xs font-bold text-indigo-600 hover:underline">
              + Explore Community Calendar
            </Link>
          </div>

          {registeredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {registeredEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-indigo-600">{evt.format}</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                      ✓ Confirmed RSVP
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{evt.title}</h3>
                  <p className="text-xs text-slate-500">{evt.date} • {evt.time} ({evt.timezone})</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 text-xs text-slate-500">
              You have not registered for any upcoming sessions yet. Visit the{" "}
              <Link href="/community" className="text-indigo-600 font-bold underline">
                Community Page
              </Link>{" "}
              to RSVP for free circles and masterclasses.
            </div>
          )}
        </div>
      )}

      {/* Tab 4: Habits Checklist */}
      {activeTab === "checklist" && (
        <div className="max-w-3xl mx-auto w-full">
          <InteractiveChecklist />
        </div>
      )}

      {/* Pledge Modal */}
      <PledgeModal isOpen={isPledgeModalOpen} onClose={() => setIsPledgeModalOpen(false)} />
    </div>
  );
}
