"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Filter, Sparkles, BookOpen, Clock, Users, ArrowRight } from "lucide-react";
import { INITIATIVES } from "@/data/initiatives";
import { InitiativeCard } from "@/components/InitiativeCard";
import { InitiativeCategory } from "@/lib/types";

export default function InitiativesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedFormat, setSelectedFormat] = useState<string>("all");

  const categories: { id: string; label: string }[] = [
    { id: "all", label: "All Categories" },
    { id: "workplace", label: "Workplace & Culture" },
    { id: "community", label: "Community Action" },
    { id: "education", label: "Neurodiversity & Education" },
    { id: "advocacy", label: "Policy & Advocacy" },
    { id: "mentorship", label: "Mentorship & Youth" },
  ];

  const formats = ["all", "Virtual", "Hybrid", "In-Person", "Self-Paced"];

  const filteredInitiatives = INITIATIVES.filter((init) => {
    const matchesSearch =
      init.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      init.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      init.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || init.category === selectedCategory;

    const matchesFormat =
      selectedFormat === "all" || init.format === selectedFormat;

    return matchesSearch && matchesCategory && matchesFormat;
  });

  return (
    <div className="flex flex-col gap-12 sm:gap-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-orange-600" />
          <span>Active Programs & Cohorts</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Initiatives & Learning Labs
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Structured, high-impact programs designed for individuals, professional teams, and community organizers to eliminate bias and build systemic belonging.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Search Input */}
          <div className="md:col-span-8 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search initiatives by keyword, topic, or role..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
            />
          </div>

          {/* Format Select */}
          <div className="md:col-span-4 flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="w-full py-2.5 px-3.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-700 focus:outline-none focus:border-indigo-600 font-semibold"
            >
              <option value="all">All Formats (Virtual / Hybrid)</option>
              <option value="Virtual">Virtual Interactive</option>
              <option value="Hybrid">Hybrid Cohort</option>
              <option value="In-Person">In-Person Intensive</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">
            Category:
          </span>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === c.id
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
        <span>
          Showing <strong>{filteredInitiatives.length}</strong> active initiatives
        </span>
        {(searchQuery || selectedCategory !== "all" || selectedFormat !== "all") && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
              setSelectedFormat("all");
            }}
            className="text-indigo-600 hover:text-indigo-800 font-semibold underline"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Initiatives Grid */}
      {filteredInitiatives.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredInitiatives.map((init) => (
            <InitiativeCard key={init.id} initiative={init} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No initiatives found</h3>
          <p className="text-xs text-slate-500">
            No active programs matched your current search and filter settings. Try adjusting your query or category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
              setSelectedFormat("all");
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
