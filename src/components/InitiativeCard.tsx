"use client";

import React from "react";
import Link from "next/link";
import { Initiative } from "@/lib/types";
import {
  Briefcase,
  ShieldAlert,
  Sparkles,
  GraduationCap,
  Compass,
  FileCheck2,
  Clock,
  Video,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

interface InitiativeCardProps {
  initiative: Initiative;
  variant?: "compact" | "detailed";
}

const ICON_MAP: Record<string, React.ElementType> = {
  Briefcase,
  ShieldAlert,
  Sparkles,
  GraduationCap,
  Compass,
  FileCheck2,
};

export function InitiativeCard({ initiative, variant = "detailed" }: InitiativeCardProps) {
  const IconComponent = ICON_MAP[initiative.iconName] || Sparkles;

  const categoryColor: Record<string, string> = {
    workplace: "bg-indigo-50 text-indigo-700 border-indigo-200",
    education: "bg-amber-50 text-amber-800 border-amber-200",
    community: "bg-emerald-50 text-emerald-800 border-emerald-200",
    advocacy: "bg-purple-50 text-purple-800 border-purple-200",
    mentorship: "bg-rose-50 text-rose-800 border-rose-200",
  };

  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300">
      <div>
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 group-hover:scale-105 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
            <IconComponent className="w-6 h-6" />
          </div>

          <div className="flex flex-wrap gap-1.5 justify-end">
            <span
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                categoryColor[initiative.category] || "bg-slate-100 text-slate-700"
              }`}
            >
              {initiative.categoryLabel}
            </span>
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight">
          {initiative.title}
        </h3>
        <p className="text-xs font-medium text-orange-600 mt-1 italic">
          {initiative.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
          {initiative.description}
        </p>

        {/* Meta Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-5 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1 bg-slate-100/80 px-2.5 py-1 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {initiative.duration}
          </span>
          <span className="inline-flex items-center gap-1 bg-slate-100/80 px-2.5 py-1 rounded-lg">
            <Video className="w-3.5 h-3.5 text-slate-400" />
            {initiative.format}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
            {initiative.status}
          </span>
        </div>

        {/* Key outcomes snippet if detailed */}
        {variant === "detailed" && initiative.keyOutcomes.length > 0 && (
          <div className="mt-5 pt-4 border-t border-slate-100 space-y-1.5">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Key Focus:
            </div>
            <div className="flex items-start gap-1.5 text-xs text-slate-700">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="line-clamp-2">{initiative.keyOutcomes[0]}</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer link */}
      <div className="pt-6 mt-4 flex items-center justify-between">
        <Link
          href={`/initiatives/${initiative.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 hover:text-indigo-900 group-hover:translate-x-0.5 transition-all"
        >
          <span>Explore Syllabus & Enroll</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
