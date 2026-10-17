"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Resource } from "@/lib/types";
import { Clock, Bookmark, ArrowRight, BookOpen, Tag } from "lucide-react";
import { getSavedResourceIds, toggleSavedResourceId } from "@/lib/storage";

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const checkSaved = () => {
      const ids = getSavedResourceIds();
      setIsSaved(ids.includes(resource.id));
    };
    checkSaved();

    window.addEventListener("allyship-saved-resources-updated", checkSaved);
    return () => {
      window.removeEventListener("allyship-saved-resources-updated", checkSaved);
    };
  }, [resource.id]);

  const handleToggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const updatedStatus = toggleSavedResourceId(resource.id);
    setIsSaved(updatedStatus);
  };

  const categoryColor: Record<string, string> = {
    guides: "bg-teal-50 text-teal-800 border-teal-200",
    toolkits: "bg-orange-50 text-orange-800 border-orange-200",
    frameworks: "bg-indigo-50 text-indigo-800 border-indigo-200",
    research: "bg-purple-50 text-purple-800 border-purple-200",
    checklists: "bg-emerald-50 text-emerald-800 border-emerald-200",
  };

  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300">
      <div>
        {/* Top Badges & Bookmark */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
              categoryColor[resource.category] || "bg-slate-100 text-slate-700"
            }`}
          >
            {resource.categoryLabel}
          </span>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 font-medium">
              <Clock className="w-3 h-3 text-slate-400" />
              {resource.readTime}
            </span>

            <button
              type="button"
              onClick={handleToggleSave}
              title={isSaved ? "Remove from saved resources" : "Save resource for later"}
              aria-label={isSaved ? "Saved" : "Save"}
              className={`p-1.5 rounded-full transition-colors ${
                isSaved
                  ? "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                  : "bg-slate-100 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50"
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? "fill-indigo-600" : ""}`} />
            </button>
          </div>
        </div>

        {/* Title */}
        <Link href={`/resources/${resource.slug}`} className="block">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight line-clamp-2">
            {resource.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
          {resource.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {resource.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] text-slate-400">
          By {resource.author.name}
        </span>
        <Link
          href={`/resources/${resource.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-indigo-700 hover:text-indigo-900 group-hover:translate-x-0.5 transition-all"
        >
          <span>Read Guide</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
