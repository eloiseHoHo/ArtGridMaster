"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

function CollageVisual() {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-1 p-1 bg-white">
      {[
        "photo-1506905925346-21bda4d32df4",
        "photo-1518173946687-a4c8892bbd9f",
        "photo-1477959858617-67f85cf4f1df",
        "photo-1470770841072-f978cf4d019e",
      ].map((id, i) => (
        <img
          key={i}
          src={`https://images.unsplash.com/${id}?w=200&h=200&fit=crop&auto=format`}
          alt=""
          className="w-full h-full object-cover rounded-sm"
        />
      ))}
    </div>
  );
}

function SplitterVisual() {
  const src = "https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?w=600&h=600&fit=crop&auto=format";
  return (
    <div className="w-full h-full flex items-center gap-2 px-3 bg-white">
      <img
        src={src}
        alt=""
        className="flex-1 h-20 object-cover rounded"
      />
      <ArrowRight className="h-4 w-4 text-gray-400 shrink-0" />
      <div className="flex-1 h-20 grid gap-0.5 rounded overflow-hidden" style={{ gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "repeat(3,1fr)" }}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="relative"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "300% 300%",
              backgroundPosition: `${(i % 3) * 50}% ${Math.floor(i / 3) * 50}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ArtVisual() {
  const src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format";
  return (
    <div className="w-full h-full flex items-center gap-2 px-3 bg-white">
      <div className="relative flex-1 h-20 rounded overflow-hidden">
        <img src={src} alt="" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "25% 25%",
          }}
        />
      </div>
      <ArrowRight className="h-4 w-4 text-gray-400 shrink-0" />
      <div className="flex-1 h-20 rounded overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490750967868-88df5691cc96?w=400&h=300&fit=crop&auto=format"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(100%) contrast(400%) brightness(180%)" }}
        />
      </div>
    </div>
  );
}

const useCases = [
  {
    label: "TikTok & Social Posts",
    title: "Combine photos into a grid post",
    desc: "2×2, 3×3, or custom layouts — one download, ready to post.",
    href: "/photo-grid-collage",
    cta: "Try Collage Maker",
    Visual: CollageVisual,
  },
  {
    label: "Instagram Profile",
    title: "Split one image into puzzle tiles",
    desc: "Upload a wide photo, get 3–9 tiles. Post in reverse to create a stunning profile grid.",
    href: "/instagram-grid-splitter",
    cta: "Try Grid Splitter",
    Visual: SplitterVisual,
  },
  {
    label: "Art & Drawing",
    title: "Turn photos into drawing references",
    desc: "Grid overlay for proportions, or convert to line art, sketch, coloring page, and more.",
    href: "/photo-to-grid",
    cta: "Try Art Tools",
    Visual: ArtVisual,
  },
];

export default function RealTransformationExamples() {
  return (
    <section className="py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">What You Can Make</h2>
        <p className="text-gray-500 mb-8">Three ways creators use this toolkit every day.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-100 bg-white overflow-hidden hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <div className="h-28 bg-gray-50">
                <item.Visual />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{item.desc}</p>
                <Link
                  href={item.href}
                  className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                >
                  {item.cta}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
