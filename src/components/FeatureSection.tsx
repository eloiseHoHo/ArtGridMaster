"use client";

import Link from "next/link";
import { Grid3X3, Pencil, PenTool, BookOpen, Hash, Layers, Paintbrush, Scissors } from "lucide-react";

const tools = [
  { icon: Grid3X3, title: "Grid Overlay", desc: "Add customizable grids to any photo for proportional drawing reference", href: "/photo-to-grid" },
  { icon: PenTool, title: "Line Art", desc: "Extract clean line drawings with adjustable edge detection and styles", href: "/photo-to-lineart" },
  { icon: Pencil, title: "Sketch", desc: "Convert to pencil, charcoal, or pastel sketch styles with texture control", href: "/photo-to-sketch" },
  { icon: BookOpen, title: "Coloring Page", desc: "Generate printable coloring pages with adjustable detail and line weight", href: "/photo-to-coloring-page" },
  { icon: Hash, title: "Paint by Numbers", desc: "Create numbered color regions with customizable palette size", href: "/photo-to-paint-by-numbers" },
  { icon: Layers, title: "Pixel Art", desc: "Retro pixel art conversion with palette control and multiple render styles", href: "/photo-to-pixel-art" },
  { icon: Paintbrush, title: "Watercolor & Oil", desc: "Apply watercolor, oil painting, and impressionist effects", href: "/photo-to-watercolor" },
  { icon: Scissors, title: "Instagram Grid Splitter", desc: "Split photos into 3, 6, 9, or custom grid pieces for Instagram profiles", href: "/instagram-grid-splitter" },
];

export default function FeatureSection() {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">All tools</h2>
      <p className="text-gray-500 mb-8">Eight ways to transform your photos, all free and instant.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="group block p-5 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-all">
              <tool.icon className="h-5 w-5 text-gray-400 mb-3 group-hover:text-gray-600 transition-colors" />
              <h3 className="font-medium text-gray-900 mb-1">{tool.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{tool.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
