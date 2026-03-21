"use client";
import { useState } from "react";

type FAQ = { question: string; answer: string };

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="divide-y divide-slate-100">
      {faqs.map((faq, i) => (
        <div key={i} className="py-3">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left flex justify-between items-start gap-3 text-sm font-semibold text-slate-800"
          >
            <span>{faq.question}</span>
            <span className="text-slate-400 flex-shrink-0 font-normal text-lg leading-none mt-0.5">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>
          {openIndex === i && (
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
