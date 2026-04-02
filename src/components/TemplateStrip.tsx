"use client";

import { useState } from "react";

interface Template {
  label: string;
  rows: number;
  cols: number;
  aspectW: number;
  aspectH: number;
  gap: number;
  badge?: string;
}

const templates: Template[] = [
  { label: "2\u00d72 Square", rows: 2, cols: 2, aspectW: 1, aspectH: 1, gap: 8, badge: "Popular" },
  { label: "3\u00d73 Grid", rows: 3, cols: 3, aspectW: 1, aspectH: 1, gap: 6 },
  { label: "IG Feed 4:5", rows: 2, cols: 2, aspectW: 4, aspectH: 5, gap: 8 },
  { label: "TikTok 9:16", rows: 2, cols: 2, aspectW: 9, aspectH: 16, gap: 6 },
  { label: "1\u00d73 Strip", rows: 1, cols: 3, aspectW: 3, aspectH: 2, gap: 6 },
  { label: "2\u00d73 Portrait", rows: 2, cols: 3, aspectW: 4, aspectH: 5, gap: 6 },
];

const cellColors = [
  "bg-violet-300 dark:bg-violet-500",
  "bg-purple-300 dark:bg-purple-500",
  "bg-fuchsia-300 dark:bg-fuchsia-500",
  "bg-indigo-300 dark:bg-indigo-500",
  "bg-pink-300 dark:bg-pink-500",
  "bg-violet-400 dark:bg-violet-600",
];

interface TemplateStripProps {
  onSelect: (template: {
    rows: number;
    cols: number;
    aspectW: number;
    aspectH: number;
    gap: number;
  }) => void;
}

export default function TemplateStrip({ onSelect }: TemplateStripProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <div className="relative">
    <div
      className="flex gap-3 overflow-x-auto pt-3 pb-2 template-scroll"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>{`.template-scroll::-webkit-scrollbar { display: none; }`}</style>
      {templates.map((t, idx) => {
        const isSelected = selectedIdx === idx;
        return (
          <button
            key={t.label}
            onClick={() => {
              setSelectedIdx(idx);
              onSelect({
                rows: t.rows,
                cols: t.cols,
                aspectW: t.aspectW,
                aspectH: t.aspectH,
                gap: t.gap,
              });
            }}
            className={`
              relative overflow-visible flex-shrink-0 flex flex-col items-center gap-2 p-3 rounded-xl border
              transition-all duration-200 cursor-pointer opacity-0 animate-fade-in-up
              ${
                isSelected
                  ? "border-brand ring-2 ring-brand/30 bg-brand/5"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-900"
              }
            `}
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            {t.badge && (
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-medium px-2 py-0.5 rounded-full bg-violet-500 text-white whitespace-nowrap z-10">
                {t.badge}
              </span>
            )}

            {/* Grid miniature preview */}
            <div
              className="w-10 h-10 rounded"
              style={{
                display: "grid",
                gridTemplateRows: `repeat(${t.rows}, 1fr)`,
                gridTemplateColumns: `repeat(${t.cols}, 1fr)`,
                gap: "2px",
              }}
            >
              {Array.from({ length: t.rows * t.cols }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-[2px] ${cellColors[i % cellColors.length]}`}
                />
              ))}
            </div>

            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
              {t.label}
            </span>
          </button>
        );
      })}
    </div>
    {/* Right fade hint for mobile scroll */}
    <div className="absolute right-0 top-0 bottom-2 w-10 bg-gradient-to-l from-white dark:from-gray-950 to-transparent pointer-events-none sm:hidden" />
    </div>
  );
}
