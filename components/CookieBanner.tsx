"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookies_accepted", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-700 px-4 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-slate-300 leading-relaxed">
          Usamos cookies propias y de terceros (Google Analytics, Google AdSense) para analizar el tráfico y mostrar publicidad relevante.{" "}
          <Link href="/politica-de-privacidad" className="text-blue-400 hover:underline">
            Más información
          </Link>
          .
        </p>
        <button
          onClick={accept}
          className="flex-shrink-0 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
