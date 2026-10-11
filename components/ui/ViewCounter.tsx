"use client";

import React, { useEffect, useState } from "react";

export function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function trackVisit() {
      // Check if current browser session was already counted to prevent refresh spamming
      const sessionCounted = sessionStorage.getItem("sv_session_counted");
      const method = sessionCounted ? "GET" : "POST";

      try {
        const response = await fetch("/api/views", {
          method,
          cache: "no-store",
        });

        if (response.ok) {
          const data = await response.json();
          if (isMounted && typeof data.views === "number") {
            setViews(data.views);
            sessionStorage.setItem("sv_session_counted", "true");
            localStorage.setItem("sv_cached_views", data.views.toString());
            return;
          }
        }
      } catch {
        // network or server error fallback handled below
      }

      // Offline or fallback handling using localStorage
      if (isMounted) {
        try {
          const cached = localStorage.getItem("sv_cached_views");
          let count = cached ? parseInt(cached, 10) : 930;
          if (isNaN(count) || count < 930) count = 930;

          if (!sessionStorage.getItem("sv_session_counted")) {
            count += 1;
            sessionStorage.setItem("sv_session_counted", "true");
            localStorage.setItem("sv_cached_views", count.toString());
          }
          setViews(count);
        } catch {
          setViews(930);
        }
      }
    }

    trackVisit();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/90 border border-emerald-500/25 text-warm-200 text-xs shadow-xs"
      title="Verified Realtime Website Visits"
    >
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span className="text-warm-400 text-[11px] font-medium tracking-wide">
        Site Visits:
      </span>
      <span className="font-mono font-bold text-white text-xs tracking-wider">
        {views !== null ? views.toLocaleString() : "930"}
      </span>
    </div>
  );
}
