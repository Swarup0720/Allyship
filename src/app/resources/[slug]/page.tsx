import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Tag,
} from "lucide-react";
import { RESOURCES } from "@/data/resources";
import { ResourceCard } from "@/components/ResourceCard";
import { ResourceActions } from "./ResourceActions";

export const instant = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return RESOURCES.map((res) => ({
    slug: res.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = RESOURCES.find((r) => r.slug === slug);
  if (!resource) return { title: "Resource Not Found" };

  return {
    title: resource.title,
    description: resource.description,
  };
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resource = RESOURCES.find((r) => r.slug === slug);

  if (!resource) {
    notFound();
  }

  const relatedResources = RESOURCES.filter(
    (r) => r.slug !== slug && (r.category === resource.category || r.tags.some((t) => resource.tags.includes(t)))
  ).slice(0, 2);

  return (
    <article className="flex flex-col gap-10 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
      {/* Back button */}
      <div>
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Resource Library</span>
        </Link>
      </div>

      {/* Header Info */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
            {resource.categoryLabel}
          </span>
          <ResourceActions resourceId={resource.id} resourceTitle={resource.title} />
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {resource.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {resource.description}
        </p>

        {/* Metadata */}
        <div className="pt-4 pb-4 border-y border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-slate-400" />
            <span>
              Author: <strong>{resource.author.name}</strong> ({resource.author.role})
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>{resource.readTime}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>Updated {resource.publishedDate}</span>
          </div>
        </div>
      </header>

      {/* Key Takeaways Highlight Box */}
      <div className="p-6 sm:p-7 rounded-3xl bg-indigo-50/70 border border-indigo-200/80 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-900">
          <Sparkles className="w-4 h-4 text-orange-500" />
          <span>Core Key Takeaways</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {resource.keyTakeaways.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-indigo-950 font-medium">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-10 text-slate-800 text-sm sm:text-base leading-relaxed pt-2">
        {resource.content.map((sec, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {sec.heading}
            </h2>
            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-slate-700 leading-relaxed">
                {p}
              </p>
            ))}

            {sec.tips && sec.tips.length > 0 && (
              <div className="my-5 p-5 rounded-2xl bg-orange-50/70 border border-orange-200/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-900">
                  <Lightbulb className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Ally In Action Tip</span>
                </div>
                <ul className="space-y-1.5 text-xs text-orange-950">
                  {sec.tips.map((tip, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Tags */}
      <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-400 mr-1 flex items-center gap-1">
          <Tag className="w-3.5 h-3.5" /> Filed Under:
        </span>
        {resource.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Related Resources */}
      {relatedResources.length > 0 && (
        <div className="pt-12 border-t border-slate-200 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Continue Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedResources.map((rel) => (
              <ResourceCard key={rel.id} resource={rel} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
