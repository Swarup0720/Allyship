"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, ShieldCheck, Mail, Building2, User, Briefcase, Sparkles, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface GetInvitedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GetInvitedModal({ isOpen, onClose }: GetInvitedModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [industry, setIndustry] = useState("Technology & Software");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !company.trim()) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }
    if (!email.includes("@")) {
      setErrorMsg("Please provide a valid corporate email.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    const ref = `INV-2025-${Math.floor(1000 + Math.random() * 9000)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setReferenceId(ref);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#2563eb", "#3b82f6", "#60a5fa", "#ffffff"],
        });
      } catch (err) {
        // Fallback
      }
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="invite-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 text-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 p-6 sm:p-7 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-blue-400">
                A Private Invitation Event
              </span>
              <h2 id="invite-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Request Your Invitation
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500 text-blue-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-blue-400">
                  Request Recorded
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Thank You, {fullName}
                </h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto mt-2 leading-relaxed">
                  Your request to attend <strong className="text-white">ALLYSHIP: Bridging Industry. Academia. A Brighter Tomorrow.</strong> has been submitted to the Executive Invitation Committee.
                </p>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs font-mono text-slate-300 max-w-sm mx-auto">
                <span className="text-slate-500 block text-[10px] uppercase tracking-wider">Reference ID:</span>
                <span className="text-blue-400 font-bold text-sm">{referenceId}</span>
              </div>

              <p className="text-xs text-slate-400 pt-2">
                The executive committee reviews all requests within 48 hours. Formal passes will be delivered to <span className="text-white font-medium">{email}</span>.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors"
                >
                  Close & Return
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-400 leading-relaxed">
                ALLYSHIP is an exclusive corporate leadership and research gathering on <strong className="text-white">10 January 2025</strong> at <strong className="text-white">SOA University, Bhubaneswar</strong>. Space is strictly curated.
              </p>

              {errorMsg && (
                <div className="p-3 bg-red-950/70 border border-red-700 text-red-200 text-xs rounded-xl">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="invite-name" className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    id="invite-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ramesh Chandra"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="invite-email" className="block text-xs font-semibold text-slate-300 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    id="invite-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ramesh@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="invite-company" className="block text-xs font-semibold text-slate-300 mb-1">
                    Organization / Company *
                  </label>
                  <input
                    id="invite-company"
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Tata Consultancy Services"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="invite-designation" className="block text-xs font-semibold text-slate-300 mb-1">
                    Designation / Title
                  </label>
                  <input
                    id="invite-designation"
                    type="text"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    placeholder="e.g. VP Engineering / HR Director"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="invite-industry" className="block text-xs font-semibold text-slate-300 mb-1">
                  Industry Sector
                </label>
                <select
                  id="invite-industry"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Technology & Software">Technology & Software</option>
                  <option value="Manufacturing & Heavy Industry">Manufacturing & Heavy Industry</option>
                  <option value="Healthcare, Pharma & Biotech">Healthcare, Pharma & Biotech</option>
                  <option value="Energy, Power & Sustainability">Energy, Power & Sustainability</option>
                  <option value="Banking, Financial Services & FinTech">Banking, Financial Services & FinTech</option>
                  <option value="Education & Public Sector">Education & Public Sector</option>
                  <option value="Consulting & Professional Services">Consulting & Professional Services</option>
                </select>
              </div>

              <div>
                <label htmlFor="invite-message" className="block text-xs font-semibold text-slate-300 mb-1">
                  Area of Interest / Note (Optional)
                </label>
                <textarea
                  id="invite-message"
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Key topics you'd like to explore (e.g. AI research, student hiring, innovation pilot)..."
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Submitting Request..."
                  ) : (
                    <>
                      <span>Submit Invitation Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-400 justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Executive committee review. No spam. Strict privacy.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
