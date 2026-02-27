"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

// ─── Social tools (large landscape cards) ────────────────────────────────────

const COLLAGE_PHOTOS = [
  "photo-1506905925346-21bda4d32df4",
  "photo-1518173946687-a4c8892bbd9f",
  "photo-1477959858617-67f85cf4f1df",
  "photo-1470770841072-f978cf4d019e",
];

const SPLIT_SRC =
  "https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?w=900&h=600&fit=crop&auto=format";

// ─── Art tools (square transformation cards) ─────────────────────────────────

const artTools = [
  {
    title: "Line Art",
    label: "photo → clean outlines",
    href: "/photo-to-lineart",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop&auto=format",
    filter: "grayscale(100%) contrast(500%) brightness(200%)",
  },
  {
    title: "Pencil Sketch",
    label: "photo → pencil drawing",
    href: "/photo-to-sketch",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&auto=format",
    filter: "grayscale(100%) contrast(130%) brightness(110%)",
  },
  {
    title: "Coloring Page",
    label: "photo → printable outline",
    href: "/photo-to-coloring-page",
    src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop&auto=format",
    filter: "grayscale(100%) contrast(420%) brightness(175%)",
  },
  {
    title: "Watercolor",
    label: "photo → watercolor painting",
    href: "/photo-to-watercolor",
    src: "https://images.unsplash.com/photo-1490750967868-88df5691cc96?w=600&h=600&fit=crop&auto=format",
    filter: "saturate(260%) blur(2.5px) brightness(112%) contrast(88%)",
  },
  {
    title: "Paint by Numbers",
    label: "photo → numbered canvas",
    href: "/photo-to-paint-by-numbers",
    src: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600&h=600&fit=crop&auto=format",
    filter: "saturate(190%) contrast(130%) brightness(105%)",
  },
  {
    title: "Pixel Art",
    label: "photo → retro pixel art",
    href: "/photo-to-pixel-art",
    src: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=20&h=20&fit=crop&auto=format",
    filter: "",
    pixelated: true,
  },
  {
    title: "Grid Overlay",
    label: "photo → drawing reference",
    href: "/photo-to-grid",
    src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&h=600&fit=crop&auto=format",
    filter: "",
    gridOverlay: true,
  },
];

function HoverCTA() {
  return (
    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
      <span className="bg-white text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-1.5 shadow-xl translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        Try free <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </div>
  );
}

function BottomLabel({ title, label }: { title: string; label: string }) {
  return (
    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-4 pt-10">
      <p className="text-white font-semibold text-sm leading-tight">{title}</p>
      <p className="text-white/70 text-xs mt-0.5">{label}</p>
    </div>
  );
}

export default function VisualToolShowcase() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* ── Social tools ─────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">

        {/* Photo Grid Collage */}
        <Link
          href="/photo-grid-collage"
          className="group relative rounded-2xl overflow-hidden bg-gray-100 cursor-pointer"
          style={{ aspectRatio: "16/9" }}
        >
          <div className="absolute inset-0 grid grid-cols-2 gap-0.5 transition-transform duration-700 group-hover:scale-105">
            {COLLAGE_PHOTOS.map((id, i) => (
              <img
                key={i}
                src={`https://images.unsplash.com/${id}?w=480&h=360&fit=crop&auto=format`}
                alt=""
                className="w-full h-full object-cover"
              />
            ))}
          </div>
          <BottomLabel
            title="Photo Grid Collage"
            label="Combine 4–25 photos into one grid — 2×2, 3×3, any layout"
          />
          <HoverCTA />
        </Link>

        {/* Instagram Grid Splitter */}
        <Link
          href="/instagram-grid-splitter"
          className="group relative rounded-2xl overflow-hidden bg-gray-100 cursor-pointer"
          style={{ aspectRatio: "16/9" }}
        >
          <div
            className="absolute inset-0 grid gap-0.5 transition-transform duration-700 group-hover:scale-105"
            style={{
              gridTemplateColumns: "repeat(3,1fr)",
              gridTemplateRows: "repeat(3,1fr)",
            }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="relative overflow-hidden"
                style={{
                  backgroundImage: `url(${SPLIT_SRC})`,
                  backgroundSize: "300% 300%",
                  backgroundPosition: `${(i % 3) * 50}% ${Math.floor(i / 3) * 50}%`,
                }}
              >
                <span className="absolute top-1 left-1 text-white text-[9px] font-bold bg-black/50 rounded px-1 leading-tight">
                  {i + 1}
                </span>
              </div>
            ))}
          </div>
          <BottomLabel
            title="Instagram Grid Splitter"
            label="Split one photo into 3–9 tiles for a stunning profile puzzle"
          />
          <HoverCTA />
        </Link>
      </div>

      {/* ── Art tools ────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {artTools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group relative rounded-2xl overflow-hidden bg-gray-100 cursor-pointer aspect-square"
          >
            <img
              src={tool.src}
              alt={tool.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{
                filter: tool.filter || undefined,
                imageRendering: tool.pixelated ? "pixelated" : undefined,
              }}
            />
            {tool.gridOverlay && (
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)",
                  backgroundSize: "20% 20%",
                }}
              />
            )}
            <BottomLabel title={tool.title} label={tool.label} />
            <HoverCTA />
          </Link>
        ))}
      </div>
    </section>
  );
}
