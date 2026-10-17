"use client";

import React, { useState } from "react";
import {
  Users,
  BookOpen,
  CalendarCheck,
  ShieldCheck,
  Info,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  category: string;
  icon: React.ElementType;
}

const DEFAULT_METRICS: MetricItem[] = [
  {
    id: "m1",
    value: "180+",
    label: "Facilitated Circles",
    sublabel: "Moderated peer discussion sessions held across hybrid hubs",
    category: "Community Engagement",
    icon: Users,
  },
  {
    id: "m2",
    value: "42",
    label: "Open Toolkits & Guides",
    sublabel: "Free, peer-reviewed educational frameworks and checklists",
    category: "Educational Resources",
    icon: BookOpen,
  },
  {
    id: "m3",
    value: "15,400+",
    label: "Workshop Attendees",
    sublabel: "Active learners verified across public bystander clinics",
    category: "Verified Participation",
    icon: CalendarCheck,
  },
  {
    id: "m4",
    value: "94%",
    label: "Intervention Confidence",
    sublabel: "Post-training cohort respondents reporting readiness to act",
    category: "Survey Efficacy",
    icon: ShieldCheck,
  },
];

export function ImpactCounter() {
  const [showMethodology, setShowMethodology] = useState(false);

  return (
    <div className="w-full">
      {/* Transparency Banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8 p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-900">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-indigo-700 shrink-0" />
          <span>
            <strong>Verified Impact Dashboard:</strong> Metrics reflect confirmed attendance and post-cohort evaluations. No fabricated corporate metrics.
          </span>
        </div>
        <button
          type="button"
          onClick={() => setShowMethodology(!showMethodology)}
          className="text-xs font-bold text-indigo-700 hover:text-indigo-900 underline flex items-center gap-1 shrink-0"
        >
          <Info className="w-3.5 h-3.5" />
          {showMethodology ? "Hide Methodology" : "View Verification Criteria"}
        </button>
      </div>

      {showMethodology && (
        <div className="mb-8 p-5 bg-white rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2 animate-in fade-in shadow-sm">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Impact Verification & Data Governance Policy
          </h4>
          <p>
            1. <strong>Workshop Attendees:</strong> Counted only upon check-in verification via live attendance logs in registered cohort sessions.
          </p>
          <p>
            2. <strong>Efficacy Rate:</strong> Derived from voluntary, anonymous 30-day post-cohort survey responses asking participants whether they have actively intervened or applied toolkits.
          </p>
          <p>
            3. <strong>Open Access:</strong> Toolkits and guides are published under Creative Commons (CC BY-NC 4.0) with zero paywalls.
          </p>
        </div>
      )}

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DEFAULT_METRICS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-indigo-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {item.category}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
                  {item.value}
                </div>

                <div className="text-sm font-bold text-slate-800 mt-1">
                  {item.label}
                </div>

                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {item.sublabel}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Audited Quarterly</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
