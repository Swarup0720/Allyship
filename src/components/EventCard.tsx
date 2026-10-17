"use client";

import React, { useState, useEffect } from "react";
import { CommunityEvent } from "@/lib/types";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Users,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { getRegisteredEventIds, registerForEvent } from "@/lib/storage";

interface EventCardProps {
  event: CommunityEvent;
}

export function EventCard({ event }: EventCardProps) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const checkRegistered = () => {
      const ids = getRegisteredEventIds();
      setIsRegistered(ids.includes(event.id));
    };
    checkRegistered();

    window.addEventListener("allyship-events-updated", checkRegistered);
    return () => {
      window.removeEventListener("allyship-events-updated", checkRegistered);
    };
  }, [event.id]);

  const handleRegister = () => {
    registerForEvent(event.id);
    setIsRegistered(true);
    setShowConfirmation(true);
  };

  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all flex flex-col justify-between">
      <div>
        {/* Header Tags */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
            {event.format}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Users className="w-3.5 h-3.5 text-slate-400" />
            <span>
              {event.enrolledCount} / {event.capacity} seats filled
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
          {event.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
          {event.description}
        </p>

        {/* Date & Location Details */}
        <div className="space-y-2 mt-5 p-3.5 bg-slate-50/80 rounded-2xl text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-orange-600 shrink-0" />
            <span className="font-semibold text-slate-800">{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>
              {event.time} ({event.timezone})
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>

        {/* Facilitator */}
        <div className="mt-4 flex items-center gap-2.5 text-xs">
          <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
            <User className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold text-slate-800 block">{event.facilitator}</span>
            <span className="text-[11px] text-slate-400">{event.facilitatorRole}</span>
          </div>
        </div>
      </div>

      {/* RSVP Action */}
      <div className="pt-6 mt-4 border-t border-slate-100">
        {isRegistered ? (
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              RSVP Confirmed
            </span>
            <span className="text-[11px] text-slate-400">Calendar link sent</span>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleRegister}
            className="w-full py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            Register for This Session (Free)
          </button>
        )}

        {showConfirmation && (
          <p className="text-[11px] text-emerald-600 font-medium text-center mt-2 animate-in fade-in">
            ✓ Registration saved to your local Ally Dashboard.
          </p>
        )}
      </div>
    </div>
  );
}
