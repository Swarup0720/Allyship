"use client";

import React, { useState } from "react";
import { Initiative } from "@/lib/types";
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface EnrollmentFormProps {
  initiative: Initiative;
}

export function InitiativeEnrollmentForm({ initiative }: EnrollmentFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [motivation, setMotivation] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    const code = `INIT-${Math.floor(1000 + Math.random() * 9000)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmationCode(code);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch (err) {
        // Fallback
      }
    }, 500);
  };

  if (submitted) {
    return (
      <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-base font-bold text-slate-900">Application Recorded!</h3>
        <p className="text-xs text-slate-600">
          Thank you, <strong>{name}</strong>. Your enrollment inquiry for{" "}
          <strong>{initiative.title}</strong> has been logged under reference{" "}
          <span className="font-mono font-bold text-emerald-800">{confirmationCode}</span>.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 underline"
          >
            Submit another application
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h3 className="text-base font-bold text-slate-900">Enroll or Inquire for Next Cohort</h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Reserve a seat in this upcoming learning track. All core materials are free.
        </p>
      </div>

      {errorMsg && (
        <div className="p-2.5 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
          {errorMsg}
        </div>
      )}

      <div>
        <label htmlFor="enroll-name" className="block text-xs font-semibold text-slate-700 mb-1">
          Full Name *
        </label>
        <input
          id="enroll-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Maya Chen"
          className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-indigo-600 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="enroll-email" className="block text-xs font-semibold text-slate-700 mb-1">
          Email Address *
        </label>
        <input
          id="enroll-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="maya@example.com"
          className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-indigo-600 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="enroll-role" className="block text-xs font-semibold text-slate-700 mb-1">
          Current Role / Organization (Optional)
        </label>
        <input
          id="enroll-role"
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="e.g. Software Engineer / Student"
          className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-indigo-600 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="enroll-motivation" className="block text-xs font-semibold text-slate-700 mb-1">
          What do you hope to learn or apply? (Optional)
        </label>
        <textarea
          id="enroll-motivation"
          rows={3}
          value={motivation}
          onChange={(e) => setMotivation(e.target.value)}
          placeholder="Share your goals or challenges..."
          className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-indigo-600 focus:outline-none resize-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs tracking-wide shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            "Processing..."
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Submit Enrollment Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>

      <div className="flex items-center gap-2 text-[11px] text-slate-400 justify-center pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
        <span>Strict privacy. We never share attendee lists.</span>
      </div>
    </form>
  );
}
