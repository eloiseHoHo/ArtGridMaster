"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const COLLAGE_PHOTOS = [
  "photo-1506905925346-21bda4d32df4",
  "photo-1518173946687-a4c8892bbd9f",
  "photo-1477959858617-67f85cf4f1df",
  "photo-1470770841072-f978cf4d019e",
];

const SPLIT_SRC =
  "https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?w=600&h=600&fit=crop&auto=format";

type ToolKey =
  | "grid" | "lineart" | "sketch" | "coloring"
  | "paintbynumbers" | "pixelart" | "watercolor"
  | "splitter" | "collage";

interface ToolMeta {
  name: string;
  path: string;
  label: string;
  src?: string;
  filter?: string;
  gridOverlay?: boolean;
  pixelated?: boolean;
  isCollage?: boolean;
  isSplit?: boolean;
}

const allTools: Record<ToolKey, ToolMeta> = {
  grid: {
    name: "Grid Overlay",
    path: "/photo-to-grid",
    label: "photo → drawing reference",
    src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&h=400&fit=crop&auto=format",
    gridOverlay: true,
  },
  lineart: {
    name: "Line Art",
    path: "/photo-to-lineart",
    label: "photo → clean outlines",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&auto=format",
    filter: "grayscale(100%) contrast(500%) brightness(200%)",
  },
  sketch: {
    name: "Pencil Sketch",
    path: "/photo-to-sketch",
    label: "photo → pencil drawing",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format",
    filter: "grayscale(100%) contrast(130%) brightness(110%)",
  },
  coloring: {
    name: "Coloring Page",
    path: "/photo-to-coloring-page",
    label: "photo → printable outline",
    src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&auto=format",
    filter: "grayscale(100%) contrast(420%) brightness(175%)",
  },
  paintbynumbers: {
    name: "Paint by Numbers",
    path: "/photo-to-paint-by-numbers",
    label: "photo → numbered canvas",
    src: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&h=400&fit=crop&auto=format",
    filter: "saturate(190%) contrast(130%) brightness(105%)",
  },
  pixelart: {
    name: "Pixel Art",
    path: "/photo-to-pixel-art",
    label: "photo → retro pixel art",
    src: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=20&h=20&fit=crop&auto=format",
    pixelated: true,
  },
  watercolor: {
    name: "Watercolor & Oil",
    path: "/photo-to-watercolor",
    label: "photo → watercolor painting",
    src: "https://images.unsplash.com/photo-1490750967868-88df5691cc96?w=400&h=400&fit=crop&auto=format",
    filter: "saturate(260%) blur(2.5px) brightness(112%) contrast(88%)",
  },
  splitter: {
    name: "Instagram Grid Splitter",
    path: "/instagram-grid-splitter",
    label: "split one photo into 3–9 tiles",
    isSplit: true,
  },
  collage: {
    name: "Photo Grid Collage",
    path: "/photo-grid-collage",
    label: "combine photos into one grid",
    isCollage: true,
  },
};

function ToolCard({ tool }: { tool: ToolMeta }) {
  return (
    <Link
      href={tool.path}
      className="group relative rounded-xl overflow-hidden bg-gray-100 aspect-square block"
    >
      {tool.isCollage ? (
        <div className="absolute inset-0 grid grid-cols-2 gap-0.5">
          {COLLAGE_PHOTOS.map((id, i) => (
            <img
              key={i}
              src={`https://images.unsplash.com/${id}?w=200&h=200&fit=crop&auto=format`}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ))}
        </div>
      ) : tool.isSplit ? (
        <div
          className="absolute inset-0 grid gap-0.5"
          style={{ gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "repeat(3,1fr)" }}
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url(${SPLIT_SRC})`,
                backgroundSize: "300% 300%",
                backgroundPosition: `${(i % 3) * 50}% ${Math.floor(i / 3) * 50}%`,
              }}
            />
          ))}
        </div>
      ) : (
        <>
          <img
            src={tool.src}
            alt={tool.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
        </>
      )}

      {/* Label */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-3 pt-8">
        <p className="text-white text-xs font-semibold leading-tight">{tool.name}</p>
        <p className="text-white/65 text-[11px] mt-0.5">{tool.label}</p>
      </div>

      {/* Hover CTA */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="bg-white text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
          Try free <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </Link>
  );
}

interface RelatedToolsProps {
  currentTool: ToolKey;
}

export default function RelatedTools({ currentTool }: RelatedToolsProps) {
  const tools = (Object.keys(allTools) as ToolKey[])
    .filter((k) => k !== currentTool)
    .map((k) => allTools[k]);

  return (
    <section className="py-14 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">More free tools</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Everything runs in your browser — no upload, no signup.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {tools.map((tool) => (
            <ToolCard key={tool.path} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
