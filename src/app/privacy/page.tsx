import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, ArrowLeft, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Our commitment to data privacy, non-commercialization, and user protection.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Privacy & Data Ethics</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400">
          Effective Date: January 1, 2026 • Last Reviewed: Quarterly
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-6 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">1. Our Core Privacy Philosophy</h2>
          <p>
            At Allyship, we believe that discussing equity, personal bias, and vulnerability requires unconditional data safety. We do not sell, rent, monetize, or broker personal member data under any circumstances.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">2. Information We Collect</h2>
          <p>
            <strong>Local Browser Storage:</strong> Your Allyship Pledge, saved resources, and everyday action checklists are saved directly on your local device (via browser localStorage). You retain full control to clear this data at any time.
          </p>
          <p>
            <strong>Inquiries & Contact Forms:</strong> When you send a message through our contact portal, we collect your name, email, and inquiry details solely to respond to your request. Inquiries are stored in encrypted environments with strict access logs.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">3. Chatham House Rules & Circle Privacy</h2>
          <p>
            Our community circles operate under strict non-attribution rules. Facilitators and participants may not disclose the identity, workplace, or personal statements made during confidential cohort sessions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">4. Third-Party Services & Analytics</h2>
          <p>
            We do not employ intrusive tracking pixels, behavioral advertising networks, or cross-site tracking cookies. Any aggregate web traffic metrics are fully anonymized.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">5. Your Data Rights</h2>
          <p>
            You have the right to request access to, correction of, or permanent deletion of any personal information provided to us. Contact our privacy officer at{" "}
            <a href="mailto:privacy@allyship.org" className="text-indigo-600 underline">
              privacy@allyship.org
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
