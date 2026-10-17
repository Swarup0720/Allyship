"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import {
  X,
  Calendar,
  MapPin,
  Users,
  Medal,
  Award,
  ArrowRight,
  ExternalLink,
  Building,
  Sparkles,
  Play,
} from "lucide-react";
import { ConclaveChapter } from "@/data/conclaves";

interface ChapterModalProps {
  chapter: ConclaveChapter | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ChapterModal({ chapter, isOpen, onClose }: ChapterModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !chapter) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close Button */}
        <div className="relative h-48 sm:h-64 w-full bg-slate-900 shrink-0 overflow-hidden">
          <img
            src={chapter.image}
            alt={chapter.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white/80 hover:text-white transition-colors border border-slate-700/80 shadow-md z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Chapter badge & title on banner */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 space-y-1.5 text-white">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
                {chapter.edition}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-800/90 text-cyan-300 text-xs font-mono font-semibold border border-slate-700">
                {chapter.date}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              {chapter.city}: {chapter.title}
            </h2>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-800">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
              <div>
                <span className="block font-semibold text-slate-900">Venue</span>
                <span>{chapter.venue}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-blue-600 shrink-0" />
              <div>
                <span className="block font-semibold text-slate-900">Turnout & Participation</span>
                <span>{chapter.turnout}</span>
              </div>
            </div>
          </div>

          {/* Official Conclave Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Conclave Summary from SOA</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-white rounded-xl">
              {chapter.desc}
            </p>
            <div className="pt-2">
              <div className="inline-block text-xs font-semibold text-blue-900 bg-blue-50 px-3.5 py-1.5 rounded-lg border border-blue-200/80">
                <span className="font-bold">Core Focus: </span>
                {chapter.focus}
              </div>
            </div>
          </div>

          {/* Key Participating Organizations */}
          {chapter.organizations && chapter.organizations.length > 0 && (
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                Key Participating Brands & Institutions
              </h4>
              <div className="flex flex-wrap gap-2">
                {chapter.organizations.map((org) => (
                  <span
                    key={org}
                    className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-800 text-xs font-semibold border border-slate-200 transition-colors"
                  >
                    {org}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Sports Legends & Chief Guests */}
          {chapter.sportsGuests && chapter.sportsGuests.length > 0 && (
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2 text-amber-700">
                <Medal className="w-4 h-4" />
                <h4 className="text-xs font-bold uppercase tracking-wider font-mono">
                  Sports Legends & Special Chief Guests
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {chapter.sportsGuests.map((guest) => (
                  <div
                    key={guest.name}
                    className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1 shadow-2xs"
                  >
                    <div className="text-sm font-bold text-slate-900">{guest.name}</div>
                    <div className="text-xs font-medium text-amber-900">{guest.role}</div>
                    {guest.note && (
                      <div className="text-[11px] text-slate-600 italic pt-1 border-t border-amber-200/50 mt-1">
                        {guest.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Moderators & Corporate Panelists */}
          {chapter.panelists && chapter.panelists.length > 0 && (
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2 text-blue-600">
                <Users className="w-4 h-4" />
                <h4 className="text-xs font-bold uppercase tracking-wider font-mono">
                  Moderator & Corporate Panelists
                </h4>
              </div>

              {chapter.moderators && chapter.moderators.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                  {chapter.moderators.map((m) => (
                    <div
                      key={m.name}
                      className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200"
                    >
                      <span className="text-[10px] font-mono font-bold text-blue-700 uppercase">
                        Conclave Moderator
                      </span>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">{m.name}</div>
                      <div className="text-xs text-slate-600">{m.role}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {chapter.panelists.map((panelist) => (
                  <div
                    key={panelist.name}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors"
                  >
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      Panelist
                    </span>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">{panelist.name}</div>
                    <div className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                      {panelist.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <Link
            href={`/event?chapter=${chapter.id}`}
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide shadow-md shadow-blue-600/20 transition-all"
          >
            <span>Open in Full Event Series Explorer</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
