"use client";

import { useState } from "react";
import Link from "next/link";
import { Grid3X3, Scissors, PenTool, Pencil, BookOpen, Hash, Gamepad2, Droplets, ChevronDown } from "lucide-react";

const primaryCards = [
  {
    href: "/instagram-grid-splitter",
    label: "Instagram Grid Splitter",
    desc: "Split photos into 3, 6, or 9 tiles for Instagram puzzle posts. Download as ZIP.",
    icon: Scissors,
    color: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
  },
  {
    href: "/photo-to-grid",
    label: "Grid Drawing Overlay",
    desc: "Add customizable grid lines to any photo for accurate drawing reference.",
    icon: Grid3X3,
    color: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400",
  },
];

const artTools = [
  { href: "/photo-to-lineart", label: "Line Art", desc: "Convert photos to clean line drawings", icon: PenTool, color: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400" },
  { href: "/photo-to-sketch", label: "Pencil Sketch", desc: "Create realistic pencil sketch effects", icon: Pencil, color: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400" },
  { href: "/photo-to-coloring-page", label: "Coloring Page", desc: "Generate printable coloring pages", icon: BookOpen, color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" },
  { href: "/photo-to-paint-by-numbers", label: "Paint by Numbers", desc: "Create numbered painting templates", icon: Hash, color: "bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400" },
  { href: "/photo-to-pixel-art", label: "Pixel Art", desc: "Convert to 8-bit retro pixel art", icon: Gamepad2, color: "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400" },
  { href: "/photo-to-watercolor", label: "Watercolor", desc: "Apply watercolor painting effects", icon: Droplets, color: "bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400" },
];

export default function MoreToolsSection() {
  const [showArt, setShowArt] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          More Tools
        </h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Explore our full suite of free image tools
        </p>
      </div>

      {/* Primary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {primaryCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group flex items-start gap-4 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all"
          >
            <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${card.color} flex items-center justify-center`}>
              <card.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {card.label}
              </h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                {card.desc}
              </p>
            </div>
            <svg className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-violet-500 transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>

      {/* Expand button */}
      <div className="text-center mb-6">
        <button
          onClick={() => setShowArt((v) => !v)}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full border border-violet-200 dark:border-violet-800 text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-colors"
        >
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showArt ? "rotate-180" : ""}`} />
          {showArt ? "Hide Art Tools" : "Show 6 Art Tools"}
        </button>
      </div>

      {/* Art tools grid */}
      {showArt && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 animate-scale-in">
          {artTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition-all"
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${tool.color} flex items-center justify-center`}>
                <tool.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {tool.label}
                </h3>
                <p className="text-xs text-gray-400 dark:text-gray-500 line-clamp-1">
                  {tool.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
