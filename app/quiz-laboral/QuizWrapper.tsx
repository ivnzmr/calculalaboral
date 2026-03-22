"use client";

import { useState } from "react";
import QuizLaboral from "@/components/QuizLaboral";

const COUNTRIES = [
  { slug: "mexico", name: "México" },
  { slug: "colombia", name: "Colombia" },
  { slug: "espana", name: "España" },
  { slug: "argentina", name: "Argentina" },
  { slug: "chile", name: "Chile" },
];

export default function QuizWrapper() {
  const [selected, setSelected] = useState<{ slug: string; name: string } | null>(null);

  if (selected) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slate-600">Quiz: {selected.name}</p>
          <button
            onClick={() => setSelected(null)}
            className="text-sm text-blue-600 hover:underline"
          >
            Cambiar país
          </button>
        </div>
        <QuizLaboral country={selected.slug} countryName={selected.name} />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
      <p className="font-semibold text-slate-800">Selecciona tu país</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {COUNTRIES.map((c) => (
          <button
            key={c.slug}
            onClick={() => setSelected(c)}
            className="border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium text-slate-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition-all text-center"
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}
