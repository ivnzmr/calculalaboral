"use client";

import { useState, useRef, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { countries } from "@/data/countries";

type SearchItem = {
  name: string;
  slug: string;
  countryName: string;
  countrySlug: string;
};

const searchIndex: SearchItem[] = Object.values(countries).flatMap((country) =>
  country.calculators.map((calc) => ({
    name: calc.name,
    slug: calc.slug,
    countryName: country.name,
    countrySlug: country.slug,
  }))
);

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return searchIndex.filter((item) => item.name.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  const handleSelect = useCallback(
    (item: SearchItem) => {
      setQuery("");
      setOpen(false);
      router.push(`/${item.countrySlug}/${item.slug}`);
    },
    [router]
  );

  function handleBlur() {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }

  function handleFocus() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (query.trim()) setOpen(true);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setOpen(e.target.value.trim().length > 0);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  }

  return (
    <div className="relative">
      <div className="relative">
        <svg
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder="Buscar calculadora..."
          className="w-48 lg:w-64 pl-8 pr-3 py-1.5 bg-slate-700 border border-slate-600 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
        />
      </div>

      {open && results.length > 0 && (
        <div className="absolute right-0 top-full mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50">
          {results.map((item) => (
            <button
              key={`${item.countrySlug}-${item.slug}`}
              onMouseDown={() => handleSelect(item)}
              className="w-full text-left px-4 py-2.5 hover:bg-blue-50 transition-colors border-b border-slate-100 last:border-0"
            >
              <p className="text-sm font-medium text-slate-800">{item.name}</p>
              <p className="text-xs text-slate-500 mt-0.5">{item.countryName}</p>
            </button>
          ))}
        </div>
      )}

      {open && query.trim() && results.length === 0 && (
        <div className="absolute right-0 top-full mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-200 px-4 py-3 z-50">
          <p className="text-sm text-slate-500">Sin resultados para &ldquo;{query}&rdquo;</p>
        </div>
      )}
    </div>
  );
}
