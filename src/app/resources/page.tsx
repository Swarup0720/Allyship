"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Bookmark, Tag, BookOpen, Sparkles, Filter, X } from "lucide-react";
import { RESOURCES } from "@/data/resources";
import { ResourceCard } from "@/components/ResourceCard";
import { getSavedResourceIds } from "@/lib/storage";

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    const updateSaved = () => {
      setSavedIds(getSavedResourceIds());
    };
    updateSaved();
    window.addEventListener("allyship-saved-resources-updated", updateSaved);
    return () => window.removeEventListener("allyship-saved-resources-updated", updateSaved);
  }, []);

  const categories = [
    { id: "all", label: "All Formats" },
    { id: "guides", label: "Practical Guides" },
    { id: "toolkits", label: "Action Toolkits" },
    { id: "frameworks", label: "Strategic Frameworks" },
    { id: "checklists", label: "Quick Checklists" },
    { id: "research", label: "Research Briefings" },
  ];

  // Extract all unique tags
  const allTags = Array.from(new Set(RESOURCES.flatMap((r) => r.tags)));

  const filteredResources = RESOURCES.filter((res) => {
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "all" || res.category === selectedCategory;

    const matchesTag = !selectedTag || res.tags.includes(selectedTag);

    const matchesSaved = !showSavedOnly || savedIds.includes(res.id);

    return matchesSearch && matchesCategory && matchesTag && matchesSaved;
  });

  return (
    <div className="flex flex-col gap-12 sm:gap-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5 text-teal-600" />
          <span>Open Educational Repository</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Resource Library & Toolkits
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Peer-reviewed guides, real-time intervention scripts, meeting checklists, and research briefings. Free to read, download, and share.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, topics (e.g. microaggressions, listening, meetings)..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
            />
          </div>

          {/* Saved Toggle Button */}
          <button
            type="button"
            onClick={() => setShowSavedOnly(!showSavedOnly)}
            className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
              showSavedOnly
                ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${showSavedOnly ? "fill-white" : ""}`} />
            <span>Saved ({savedIds.length})</span>
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">
            Format:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">
            Tags:
          </span>
          {allTags.map((tag) => {
            const isTagActive = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(isTagActive ? null : tag)}
                className={`text-[11px] font-medium px-2.5 py-1 rounded-lg transition-all ${
                  isTagActive
                    ? "bg-orange-500 text-white shadow-xs font-bold"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                #{tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Filter Indicators */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
        <span>
          Showing <strong>{filteredResources.length}</strong> resources
        </span>
        {(searchQuery || selectedCategory !== "all" || selectedTag || showSavedOnly) && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
              setSelectedTag(null);
              setShowSavedOnly(false);
            }}
            className="text-indigo-600 hover:text-indigo-800 font-semibold underline flex items-center gap-1"
          >
            <X className="w-3.5 h-3.5" />
            Reset all filters
          </button>
        )}
      </div>

      {/* Grid of Resources */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredResources.map((res) => (
            <ResourceCard key={res.id} resource={res} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No resources found</h3>
          <p className="text-xs text-slate-500">
            {showSavedOnly
              ? "You haven't bookmarked any guides yet. Click the bookmark icon on any guide card to save it here."
              : "No guides or toolkits matched your current filter. Try adjusting your query."}
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
              setSelectedTag(null);
              setShowSavedOnly(false);
            }}
            className="px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
