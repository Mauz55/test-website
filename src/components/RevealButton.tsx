"use client";

import { useState } from "react";

export default function RevealButton() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6">
      <button
        onClick={() => setRevealed(true)}
        className="rounded-full bg-clay px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-sand active:translate-y-0"
      >
        Klik hier
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`text-lg font-medium text-ink transition-all duration-300 ${
          revealed ? "opacity-100" : "opacity-0"
        }`}
      >
        {revealed ? "🎉 Alles werkt!" : ""}
      </p>
    </div>
  );
}
