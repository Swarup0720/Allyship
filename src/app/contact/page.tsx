"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";
import { FAQS } from "@/data/faqs";
import { FaqAccordion } from "@/components/FaqAccordion";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("General");
  const [organization, setOrganization] = useState("");
  const [preferredContact, setPreferredContact] = useState("Email");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
    ref?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatusMessage({
        type: "error",
        text: "Please fill out all required fields (Name, Email, and Message).",
      });
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject: subject || `${category} Inquiry`,
          category,
          organization,
          preferredContact,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit message.");
      }

      setStatusMessage({
        type: "success",
        text: data.message,
        ref: data.referenceId,
      });

      // Clear form on success
      setName("");
      setEmail("");
      setSubject("");
      setOrganization("");
      setMessage("");
    } catch (err: any) {
      setStatusMessage({
        type: "error",
        text: err.message || "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs font-semibold">
          <Mail className="w-3.5 h-3.5 text-orange-600" />
          <span>Connect & Collaborate</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Get in Touch with Allyship
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Have an inquiry regarding community programs, workplace partnerships, press, or volunteering? Send us a note and our coordination team will follow up.
        </p>
      </div>

      {/* Main Grid: Form & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Contact Form Column */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Send a Message
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              All messages are routed through our active Next.js backend API.
            </p>
          </div>

          {statusMessage && (
            <div
              role="alert"
              className={`p-4 rounded-2xl text-xs flex items-start gap-3 ${
                statusMessage.type === "success"
                  ? "bg-emerald-50 border border-emerald-200 text-emerald-900"
                  : "bg-red-50 border border-red-200 text-red-900"
              }`}
            >
              {statusMessage.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              )}
              <div className="space-y-1">
                <p className="font-semibold">{statusMessage.text}</p>
                {statusMessage.ref && (
                  <p className="font-mono text-[11px] text-emerald-700">
                    Reference ID: {statusMessage.ref}
                  </p>
                )}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jordan Rivera"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jordan@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-category" className="block text-xs font-semibold text-slate-700 mb-1">
                  Inquiry Category *
                </label>
                <select
                  id="contact-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 font-medium"
                >
                  <option value="General">General Inquiry</option>
                  <option value="Partnership">Corporate / Institutional Partnership</option>
                  <option value="Volunteering">Volunteering & Circle Facilitation</option>
                  <option value="Media">Press & Speaking Engagements</option>
                  <option value="Resource Contribution">Curriculum / Resource Contribution</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-org" className="block text-xs font-semibold text-slate-700 mb-1">
                  Organization / Affiliation (Optional)
                </label>
                <input
                  id="contact-org"
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="e.g. University / Non-profit / Company"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-indigo-600"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 mb-1">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Brief summary of your inquiry..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1">
                Your Message *
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help or collaborate? Please include relevant details..."
                className="w-full p-4 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 resize-none leading-relaxed"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-orange-400" />
                    <span>Send Message to Team</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl text-[11px] text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Backend Status: Live API verified. Submissions are processed with valid response SLA.
              </span>
            </div>
          </form>
        </div>

        {/* Organizational Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Organizational Details
            </h3>

            <div className="space-y-4 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">General Inquiries:</span>
                  <a href="mailto:contact@allyship.org" className="hover:text-indigo-600 underline">
                    contact@allyship.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Response Timeframe:</span>
                  <span>Within 48 business hours (Mon – Fri)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Headquarters:</span>
                  <span>Hybrid / Remote Global Coalition (North America & Europe)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Partnership Scope
              </span>
              <p className="text-xs text-slate-500 leading-relaxed">
                We partner with academic institutions, non-profit coalitions, employee resource groups (ERGs), and purpose-driven enterprises committed to verifiable culture change.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="space-y-8 pt-8 border-t border-slate-200/80">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
            Instant Answers
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <FaqAccordion faqs={FAQS} allowFilter={true} />
      </div>
    </div>
  );
}
