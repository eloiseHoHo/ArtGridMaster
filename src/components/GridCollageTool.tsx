"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import {
  Upload,
  Download,
  Grid3X3,
  XCircle,
  ImagePlus,
  Sparkles,
} from "lucide-react";
import { useDropzone } from "react-dropzone";
import {
  generateCollage,
  downloadCollage,
} from "@/lib/gridCollage";

/* ───── constants ───── */

const LAYOUT_PRESETS = [
  { label: "1×2", rows: 1, cols: 2 },
  { label: "2×1", rows: 2, cols: 1 },
  { label: "2×2", rows: 2, cols: 2 },
  { label: "1×3", rows: 1, cols: 3 },
  { label: "3×1", rows: 3, cols: 1 },
  { label: "2×3", rows: 2, cols: 3 },
  { label: "3×2", rows: 3, cols: 2 },
  { label: "3×3", rows: 3, cols: 3 },
];

const ASPECT_PRESETS = [
  { label: "Square", w: 1, h: 1 },
  { label: "4:5", w: 4, h: 5 },
  { label: "3:2", w: 3, h: 2 },
];

const BG_COLORS = [
  { label: "White", value: "#ffffff" },
  { label: "Black", value: "#000000" },
  { label: "Light Gray", value: "#f0f0f0" },
];

const SAMPLE_URLS = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&h=800&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=800&q=80",
  "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&h=800&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=800&q=80",
];

/* ───── types ───── */

interface CollageImage {
  id: string;
  dataUrl: string;
}

/* ───── component ───── */

export default function GridCollageTool() {
  const [images, setImages] = useState<CollageImage[]>([]);
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);
  const [gap, setGap] = useState(8);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [aspectW, setAspectW] = useState(1);
  const [aspectH, setAspectH] = useState(1);
  const [cornerRadius, setCornerRadius] = useState(0);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isLoadingSamples, setIsLoadingSamples] = useState(false);
  const genRef = useRef(0);

  const MAX_DIM = 2000;

  /* ── helpers ── */

  const resizeImage = useCallback(
    (src: string): Promise<string> =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          const c = document.createElement("canvas");
          if (img.width <= MAX_DIM && img.height <= MAX_DIM) {
            c.width = img.width;
            c.height = img.height;
          } else {
            const s = Math.min(MAX_DIM / img.width, MAX_DIM / img.height);
            c.width = Math.round(img.width * s);
            c.height = Math.round(img.height * s);
          }
          c.getContext("2d")!.drawImage(img, 0, 0, c.width, c.height);
          resolve(c.toDataURL("image/jpeg", 0.9));
        };
        img.onerror = () => reject(new Error("Failed to load image"));
        img.src = src;
      }),
    []
  );

  const addImages = useCallback(
    async (files: File[]) => {
      const items: CollageImage[] = [];
      for (const file of files) {
        const raw = await new Promise<string>((res) => {
          const r = new FileReader();
          r.onload = (e) => res(e.target?.result as string);
          r.readAsDataURL(file);
        });
        const resized = await resizeImage(raw);
        items.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          dataUrl: resized,
        });
      }
      setImages((prev) => [...prev, ...items].slice(0, 25));
    },
    [resizeImage]
  );

  const removeImage = useCallback((id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  }, []);

  const onDrop = useCallback(
    (accepted: File[]) => addImages(accepted),
    [addImages]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/webp": [".webp"],
    },
    multiple: true,
  });

  const loadSamples = async () => {
    setIsLoadingSamples(true);
    try {
      const loaded: CollageImage[] = [];
      for (const url of SAMPLE_URLS) {
        const resized = await resizeImage(url);
        loaded.push({
          id: `s-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          dataUrl: resized,
        });
      }
      setImages(loaded);
      setRows(2);
      setCols(2);
    } catch {
      alert("Failed to load sample images");
    } finally {
      setIsLoadingSamples(false);
    }
  };

  /* ── auto-preview (debounced) ── */

  useEffect(() => {
    if (images.length === 0) {
      setPreviewUrl(null);
      return;
    }
    const gen = ++genRef.current;
    const timer = setTimeout(async () => {
      setIsGenerating(true);
      try {
        const url = await generateCollage({
          images: images.map((i) => i.dataUrl),
          rows,
          cols,
          gap,
          bgColor,
          outputWidth: 800,
          aspectW,
          aspectH,
          cornerRadius,
        });
        if (gen === genRef.current) setPreviewUrl(url);
      } catch {
        /* ignore */
      } finally {
        if (gen === genRef.current) setIsGenerating(false);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [images, rows, cols, gap, bgColor, aspectW, aspectH, cornerRadius]);

  /* ── download at full-res ── */

  const handleDownload = async () => {
    if (images.length === 0) return;
    setIsDownloading(true);
    const scale = 1080 / 800;
    try {
      const url = await generateCollage({
        images: images.map((i) => i.dataUrl),
        rows,
        cols,
        gap: Math.round(gap * scale),
        bgColor,
        outputWidth: 1080,
        aspectW,
        aspectH,
        cornerRadius: Math.round(cornerRadius * scale),
      });
      downloadCollage(url, `photo-grid-${rows}x${cols}`);
    } finally {
      setIsDownloading(false);
    }
  };

  const maxCells = rows * cols;

  /* ── render ── */

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ──────── Left: Upload + Config ──────── */}
        <div className="lg:col-span-1 space-y-4">
          {/* Upload Area */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-900">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
              Photos{" "}
              <span className="text-xs text-gray-400 font-normal">
                ({images.length}/{maxCells})
              </span>
            </h3>

            {images.length === 0 ? (
              <>
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                    isDragActive
                      ? "border-gray-400 bg-gray-50 dark:bg-gray-800"
                      : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
                  }`}
                >
                  <input {...getInputProps()} />
                  <Upload className="h-8 w-8 mx-auto text-gray-300 dark:text-gray-500 mb-2" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Drop photos here or click to upload
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    Select multiple photos at once
                  </p>
                </div>
                <div className="mt-3">
                  <button
                    onClick={loadSamples}
                    disabled={isLoadingSamples}
                    className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 flex items-center gap-1"
                  >
                    <Sparkles className="h-3 w-3" />
                    {isLoadingSamples ? "Loading…" : "Try with sample photos"}
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-1.5 mb-3">
                  {images.map((img, idx) => (
                    <div key={img.id} className="relative group">
                      <img
                        src={img.dataUrl}
                        alt={`Photo ${idx + 1}`}
                        className={`w-full aspect-square object-cover rounded ${
                          idx >= maxCells ? "opacity-30" : ""
                        }`}
                      />
                      <span className="absolute top-0.5 left-0.5 bg-black/60 text-white text-[10px] font-bold px-1 rounded">
                        {idx + 1}
                      </span>
                      <button
                        onClick={() => removeImage(img.id)}
                        className="absolute top-0.5 right-0.5 p-0.5 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <XCircle className="h-3 w-3" />
                      </button>
                      {idx >= maxCells && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[10px] bg-black/60 text-white px-1 rounded">
                            unused
                          </span>
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Add more */}
                {images.length < 25 && (
                  <div {...getRootProps()} className="cursor-pointer">
                    <input {...getInputProps()} />
                    <div className="w-full py-2 text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 border border-dashed border-gray-200 dark:border-gray-600 rounded-md flex items-center justify-center gap-1 transition-colors">
                      <ImagePlus className="h-3.5 w-3.5" />
                      Add more photos
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setImages([])}
                  className="mt-2 text-xs text-gray-400 hover:text-red-500 transition-colors"
                >
                  Clear all
                </button>
              </>
            )}
          </div>

          {/* Grid Layout */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-900">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
              Grid Layout
            </h3>

            <div className="mb-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                Presets
              </p>
              <div className="grid grid-cols-4 gap-1.5">
                {LAYOUT_PRESETS.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => {
                      setRows(p.rows);
                      setCols(p.cols);
                    }}
                    className={`px-2.5 py-1.5 text-xs rounded-md border transition-colors ${
                      rows === p.rows && cols === p.cols
                        ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-gray-900 dark:border-gray-100"
                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1.5">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Rows
                  </span>
                  <span className="text-xs font-medium text-gray-900 dark:text-gray-100 tabular-nums">
                    {rows}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={rows}
                  onChange={(e) => setRows(+e.target.value)}
                  className="w-full accent-gray-900 dark:accent-gray-100"
                />
              </div>
              <div>
                <div className="flex justify-between mb-1.5">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Columns
                  </span>
                  <span className="text-xs font-medium text-gray-900 dark:text-gray-100 tabular-nums">
                    {cols}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={cols}
                  onChange={(e) => setCols(+e.target.value)}
                  className="w-full accent-gray-900 dark:accent-gray-100"
                />
              </div>
            </div>
          </div>

          {/* Style */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-900">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
              Style
            </h3>

            {/* Cell Shape */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                Cell shape
              </p>
              <div className="flex gap-1.5">
                {ASPECT_PRESETS.map((a) => (
                  <button
                    key={a.label}
                    onClick={() => {
                      setAspectW(a.w);
                      setAspectH(a.h);
                    }}
                    className={`flex-1 px-2.5 py-1.5 text-xs rounded-md border transition-colors ${
                      aspectW === a.w && aspectH === a.h
                        ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-gray-900 dark:border-gray-100"
                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
                    }`}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Gap */}
            <div className="mb-4">
              <div className="flex justify-between mb-1.5">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Spacing
                </span>
                <span className="text-xs font-medium text-gray-900 dark:text-gray-100 tabular-nums">
                  {gap}px
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={30}
                value={gap}
                onChange={(e) => setGap(+e.target.value)}
                className="w-full accent-gray-900 dark:accent-gray-100"
              />
            </div>

            {/* Corner Radius */}
            <div className="mb-4">
              <div className="flex justify-between mb-1.5">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Rounded corners
                </span>
                <span className="text-xs font-medium text-gray-900 dark:text-gray-100 tabular-nums">
                  {cornerRadius}px
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={20}
                value={cornerRadius}
                onChange={(e) => setCornerRadius(+e.target.value)}
                className="w-full accent-gray-900 dark:accent-gray-100"
              />
            </div>

            {/* BG Color */}
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                Background
              </p>
              <div className="flex gap-2 items-center">
                {BG_COLORS.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setBgColor(c.value)}
                    className={`w-8 h-8 rounded-md border-2 transition-all ${
                      bgColor === c.value
                        ? "border-gray-900 dark:border-gray-100 scale-110"
                        : "border-gray-200 dark:border-gray-600"
                    }`}
                    style={{ backgroundColor: c.value }}
                    title={c.label}
                  />
                ))}
                <input
                  type="color"
                  value={bgColor.startsWith("#") ? bgColor : "#ffffff"}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-8 h-8 rounded-md cursor-pointer border-2 border-gray-200 dark:border-gray-600"
                  title="Custom color"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ──────── Right: Preview ──────── */}
        <div className="lg:col-span-2 space-y-4">
          {previewUrl ? (
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
              <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Preview — {rows}×{cols} Grid
                  {isGenerating && (
                    <span className="ml-2 text-xs text-gray-400">
                      (updating…)
                    </span>
                  )}
                </span>
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="text-xs bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-300 px-3 py-1.5 rounded-md font-medium transition-colors disabled:opacity-50 flex items-center gap-1.5"
                >
                  <Download className="h-3.5 w-3.5" />
                  {isDownloading ? "Saving…" : "Download"}
                </button>
              </div>
              <div className="p-5">
                <img
                  src={previewUrl}
                  alt="Collage preview"
                  className="w-full rounded-md"
                />
              </div>
            </div>
          ) : (
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-12 bg-white dark:bg-gray-900 text-center min-h-[400px] flex flex-col items-center justify-center">
              <Grid3X3 className="h-12 w-12 text-gray-200 dark:text-gray-700 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                Upload photos to create a collage
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                Add multiple photos, choose your grid layout, and create a
                beautiful photo grid collage instantly.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
