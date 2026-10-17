"use client";

import React, { useState, useEffect } from "react";
import { Bookmark, Share2, Check, Download, Printer } from "lucide-react";
import { getSavedResourceIds, toggleSavedResourceId } from "@/lib/storage";

interface ResourceActionsProps {
  resourceId: string;
  resourceTitle: string;
}

export function ResourceActions({ resourceId, resourceTitle }: ResourceActionsProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsSaved(getSavedResourceIds().includes(resourceId));
    };
    check();
    window.addEventListener("allyship-saved-resources-updated", check);
    return () => window.removeEventListener("allyship-saved-resources-updated", check);
  }, [resourceId]);

  const handleSave = () => {
    const state = toggleSavedResourceId(resourceId);
    setIsSaved(state);
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={handleSave}
        className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 border ${
          isSaved
            ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
            : "bg-white border-slate-300 text-slate-700 hover:bg-slate-50"
        }`}
      >
        <Bookmark className={`w-3.5 h-3.5 ${isSaved ? "fill-white" : ""}`} />
        <span>{isSaved ? "Saved" : "Save Guide"}</span>
      </button>

      <button
        type="button"
        onClick={handleShare}
        className="px-3.5 py-2 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-colors flex items-center gap-1.5"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-700">Link Copied!</span>
          </>
        ) : (
          <>
            <Share2 className="w-3.5 h-3.5 text-slate-500" />
            <span>Share</span>
          </>
        )}
      </button>

      <button
        type="button"
        onClick={handlePrint}
        title="Print or Save as PDF"
        className="p-2 rounded-full bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 transition-colors"
      >
        <Printer className="w-4 h-4" />
      </button>
    </div>
  );
}
