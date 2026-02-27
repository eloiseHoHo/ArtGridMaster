"use client";

import Link from "next/link";
import {
  GridCollageThumbnail,
  GridSplitterThumbnail,
  GridOverlayThumbnail,
  LineArtThumbnail,
  SketchThumbnail,
  ColoringPageThumbnail,
  PaintByNumbersThumbnail,
  PixelArtThumbnail,
  WatercolorThumbnail,
} from "@/components/ToolThumbnails";

const socialTools = [
  {
    Thumbnail: GridCollageThumbnail,
    title: "Photo Grid Collage",
    desc: "Combine multiple photos into one grid — 2×2, 3×3, or any custom layout",
    href: "/photo-grid-collage",
  },
  {
    Thumbnail: GridSplitterThumbnail,
    title: "Instagram Grid Splitter",
    desc: "Split one image into 3, 6, or 9 tiles — post in reverse for a profile puzzle",
    href: "/instagram-grid-splitter",
  },
];

const artTools = [
  { Thumbnail: GridOverlayThumbnail, title: "Grid Overlay", desc: "Draw proportionally with grid reference", href: "/photo-to-grid" },
  { Thumbnail: LineArtThumbnail, title: "Line Art", desc: "Extract clean outlines from any photo", href: "/photo-to-lineart" },
  { Thumbnail: SketchThumbnail, title: "Sketch", desc: "Pencil, charcoal, or pastel sketch effect", href: "/photo-to-sketch" },
  { Thumbnail: ColoringPageThumbnail, title: "Coloring Page", desc: "Generate printable coloring book pages", href: "/photo-to-coloring-page" },
  { Thumbnail: PaintByNumbersThumbnail, title: "Paint by Numbers", desc: "Numbered color regions ready to paint", href: "/photo-to-paint-by-numbers" },
  { Thumbnail: PixelArtThumbnail, title: "Pixel Art", desc: "Retro pixel art with palette control", href: "/photo-to-pixel-art" },
  { Thumbnail: WatercolorThumbnail, title: "Watercolor & Oil", desc: "Watercolor, oil, and impressionist effects", href: "/photo-to-watercolor" },
];

export default function FeatureSection() {
  return (
    <section className="mb-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">All tools</h2>
      <p className="text-gray-500 mb-8">Social tools to publish faster, plus art transformations — all free, no signup.</p>

      <div className="mb-10">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">For Social Media</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group block rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all overflow-hidden"
            >
              <div className="h-40 bg-gray-50 overflow-hidden">
                <tool.Thumbnail />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{tool.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{tool.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">For Art & Drawing</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {artTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group block rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all overflow-hidden"
            >
              <div className="aspect-[4/3] bg-gray-50 overflow-hidden">
                <tool.Thumbnail />
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-900 text-sm mb-0.5">{tool.title}</h3>
                <p className="text-xs text-gray-400 leading-snug">{tool.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
