import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { FileCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing the use of the Allyship platform and resources.",
};

export default function TermsPage() {
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 text-xs font-semibold border border-indigo-200">
          <FileCheck className="w-3.5 h-3.5 text-indigo-600" />
          <span>Platform Charter</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Terms of Service
        </h1>
        <p className="text-xs text-slate-400">
          Effective Date: January 1, 2026
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-6 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Community Terms</h2>
          <p>
            By accessing or using the Allyship website, toolkits, community circles, and programs, you agree to abide by these Terms of Service and our Community Safety Charter.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">2. Educational & Non-Legal Nature</h2>
          <p>
            All resources, checklists, and guides provided by Allyship are for educational, cultural, and informational purposes. They do not constitute formal legal counsel. Organizations should consult qualified legal counsel when drafting official employment handbooks or union contracts.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">3. Open Access & Intellectual Property</h2>
          <p>
            Unless explicitly noted otherwise, our core educational frameworks and guides are made available under Creative Commons Attribution-NonCommercial (CC BY-NC 4.0). You are encouraged to adapt, share, and utilize them internally within your teams, provided proper attribution is maintained and materials are not resold for commercial profit.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">4. Community Code of Conduct</h2>
          <p>
            Participation in discussions, workshops, and circles requires mutual dignity. Harassment, derogatory speech, discrimination, and disruption are strictly grounds for immediate permanent exclusion from all programs.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">5. Modifications</h2>
          <p>
            We may update these terms periodically to reflect expanding programs. Continued use of the platform constitutes agreement to the revised terms.
          </p>
        </section>
      </div>
    </div>
  );
}
