"use client";

import { useState, useCallback, FormEvent } from "react";
import { Upload, Download, Grid3X3, Image as ImageIcon, Link, XCircle, Package } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { splitImage, downloadSlicesAsZip, downloadSingleSlice, type GridSlice } from "@/lib/gridSplitter";

const PRESETS = [
  { label: "1×3 Horizontal", rows: 1, cols: 3 },
  { label: "3×1 Vertical", rows: 3, cols: 1 },
  { label: "2×3 (6 pieces)", rows: 2, cols: 3 },
  { label: "3×3 (9 pieces)", rows: 3, cols: 3 },
  { label: "3×4 (12 pieces)", rows: 3, cols: 4 },
  { label: "4×3 (12 pieces)", rows: 4, cols: 3 },
];

const SAMPLE_IMAGES = [
  { url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1080&h=1080&q=80", label: "Portrait" },
  { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&h=720&q=80", label: "Landscape" },
  { url: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1080&h=1080&q=80", label: "Cat" },
];

export default function GridSplitterTool() {
  const [image, setImage] = useState<string | null>(null);
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [slices, setSlices] = useState<GridSlice[]>([]);
  const [isSplitting, setIsSplitting] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [isUrlMode, setIsUrlMode] = useState(false);
  const [urlError, setUrlError] = useState<string | null>(null);

  const MAX_DIM = 4000;

  const loadImage = useCallback(async (src: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const c = document.createElement("canvas");
        if (img.width <= MAX_DIM && img.height <= MAX_DIM) {
          c.width = img.width;
          c.height = img.height;
        } else {
          const scale = Math.min(MAX_DIM / img.width, MAX_DIM / img.height);
          c.width = Math.round(img.width * scale);
          c.height = Math.round(img.height * scale);
        }
        c.getContext("2d")!.drawImage(img, 0, 0, c.width, c.height);
        resolve(c.toDataURL("image/jpeg", 0.92));
      };
      img.onerror = () => reject(new Error("Failed to load image"));
      img.src = src;
    });
  }, []);

  const onDrop = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      if (e.target?.result) {
        const resized = await loadImage(e.target.result as string);
        setImage(resized);
        setSlices([]);
      }
    };
    reader.readAsDataURL(files[0]);
  }, [loadImage]);

  const handleUrlImport = async (e: FormEvent) => {
    e.preventDefault();
    if (!imageUrl.trim()) { setUrlError("Please enter a valid URL"); return; }
    setUrlError(null);
    try {
      const resized = await loadImage(imageUrl);
      setImage(resized);
      setSlices([]);
      setImageUrl("");
      setIsUrlMode(false);
    } catch {
      setUrlError("Could not load image from this URL");
    }
  };

  const loadSample = async (url: string) => {
    try {
      const resized = await loadImage(url);
      setImage(resized);
      setSlices([]);
    } catch {
      alert("Failed to load sample image");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/jpeg": [".jpg", ".jpeg"], "image/png": [".png"] },
    maxFiles: 1,
  });

  const handleSplit = async () => {
    if (!image) return;
    setIsSplitting(true);
    try {
      const result = await splitImage(image, rows, cols);
      setSlices(result);
    } catch {
      alert("Split failed. Please try again.");
    } finally {
      setIsSplitting(false);
    }
  };

  const handleDownloadAll = async () => {
    if (slices.length === 0) return;
    setIsDownloading(true);
    try {
      await downloadSlicesAsZip(slices, `instagram-grid-${rows}x${cols}`);
    } finally {
      setIsDownloading(false);
    }
  };

  const applyPreset = (preset: typeof PRESETS[0]) => {
    setRows(preset.rows);
    setCols(preset.cols);
    setSlices([]);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Upload + Config */}
        <div className="lg:col-span-1 space-y-4">
          {/* Upload Area */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-900">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">Upload Image</h3>

            {!image ? (
              <>
                {!isUrlMode ? (
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
                    <p className="text-sm text-gray-500 dark:text-gray-400">Drop image here or click to upload</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">JPG, PNG up to 10MB</p>
                  </div>
                ) : (
                  <form onSubmit={handleUrlImport} className="space-y-2">
                    <input
                      type="url"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="https://example.com/photo.jpg"
                      className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                    {urlError && <p className="text-xs text-red-500">{urlError}</p>}
                    <button type="submit" className="w-full py-2 text-sm bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-md hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors">
                      Import
                    </button>
                  </form>
                )}
                <div className="flex items-center gap-2 mt-3">
                  <button
                    onClick={() => setIsUrlMode(!isUrlMode)}
                    className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 flex items-center gap-1"
                  >
                    {isUrlMode ? <ImageIcon className="h-3 w-3" /> : <Link className="h-3 w-3" />}
                    {isUrlMode ? "Upload file" : "Import from URL"}
                  </button>
                </div>
                <div className="mt-3">
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">Or try a sample:</p>
                  <div className="flex gap-2">
                    {SAMPLE_IMAGES.map((s) => (
                      <button
                        key={s.label}
                        onClick={() => loadSample(s.url)}
                        className="text-xs px-2.5 py-1.5 rounded-md border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="relative">
                <img src={image} alt="Uploaded" className="w-full rounded-md" />
                <button
                  onClick={() => { setImage(null); setSlices([]); }}
                  className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <XCircle className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          {/* Grid Config */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-900">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">Grid Settings</h3>

            {/* Presets */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick presets</p>
              <div className="grid grid-cols-2 gap-1.5">
                {PRESETS.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => applyPreset(p)}
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

            {/* Custom Rows/Cols */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1.5">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Rows</span>
                  <span className="text-xs font-medium text-gray-900 dark:text-gray-100 tabular-nums">{rows}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={9}
                  value={rows}
                  onChange={(e) => { setRows(+e.target.value); setSlices([]); }}
                  className="w-full accent-gray-900 dark:accent-gray-100"
                />
              </div>
              <div>
                <div className="flex justify-between mb-1.5">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Columns</span>
                  <span className="text-xs font-medium text-gray-900 dark:text-gray-100 tabular-nums">{cols}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={9}
                  value={cols}
                  onChange={(e) => { setCols(+e.target.value); setSlices([]); }}
                  className="w-full accent-gray-900 dark:accent-gray-100"
                />
              </div>
            </div>

            {/* Split Button */}
            <button
              onClick={handleSplit}
              disabled={!image || isSplitting}
              className="w-full mt-4 py-2.5 text-sm font-medium bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-md hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Grid3X3 className="h-4 w-4" />
              {isSplitting ? "Splitting..." : `Split into ${rows * cols} pieces`}
            </button>
          </div>
        </div>

        {/* Right: Preview + Results */}
        <div className="lg:col-span-2 space-y-4">
          {/* Grid Preview */}
          {image && (
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
              <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Preview — {rows}×{cols} Grid ({rows * cols} pieces)
                </span>
                {slices.length > 0 && (
                  <button
                    onClick={handleDownloadAll}
                    disabled={isDownloading}
                    className="text-xs bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-300 px-3 py-1.5 rounded-md font-medium transition-colors disabled:opacity-50 flex items-center gap-1.5"
                  >
                    <Package className="h-3.5 w-3.5" />
                    {isDownloading ? "Zipping..." : "Download All (.zip)"}
                  </button>
                )}
              </div>
              <div className="p-5">
                {slices.length === 0 ? (
                  /* Grid Preview Overlay */
                  <div className="relative inline-block w-full">
                    <img src={image} alt="Preview" className="w-full rounded-md" />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        display: "grid",
                        gridTemplateRows: `repeat(${rows}, 1fr)`,
                        gridTemplateColumns: `repeat(${cols}, 1fr)`,
                      }}
                    >
                      {Array.from({ length: rows * cols }).map((_, i) => (
                        <div
                          key={i}
                          className="border border-white/60 flex items-center justify-center"
                          style={{ boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.3)" }}
                        >
                          <span className="bg-black/50 text-white text-xs sm:text-sm font-bold px-1.5 py-0.5 rounded">
                            {i + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Split Results Grid */
                  <div
                    className="grid gap-2"
                    style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
                  >
                    {slices.map((slice) => (
                      <div
                        key={slice.index}
                        className="relative group cursor-pointer rounded-md overflow-hidden border border-gray-100 dark:border-gray-700"
                        onClick={() => downloadSingleSlice(slice, `instagram-grid-${rows}x${cols}`)}
                      >
                        <img
                          src={slice.dataUrl}
                          alt={`Piece ${slice.index}`}
                          className="w-full block"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center">
                            <Download className="h-5 w-5 text-white" />
                            <span className="text-white text-xs mt-1">Download</span>
                          </div>
                        </div>
                        <span className="absolute top-1 left-1 bg-black/50 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                          {slice.index}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Empty State */}
          {!image && (
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-12 bg-white dark:bg-gray-900 text-center min-h-[400px] flex flex-col items-center justify-center">
              <Grid3X3 className="h-12 w-12 text-gray-200 dark:text-gray-700 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Upload an image to get started</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                Upload a photo, choose your grid size, and split it into perfectly sized pieces for your Instagram feed.
              </p>
            </div>
          )}

          {/* How to Post Guide */}
          {slices.length > 0 && (
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-900">
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">How to post on Instagram</h3>
              <ol className="text-sm text-gray-500 dark:text-gray-400 space-y-1.5 list-decimal list-inside">
                <li>Download all pieces (ZIP) or individual pieces</li>
                <li>Post in <strong>reverse order</strong> — start with piece #{rows * cols}, then #{rows * cols - 1}, etc.</li>
                <li>Your profile grid will display the complete image perfectly</li>
              </ol>
            </div>
          )}
        </div>
      </div>

      {/* SEO Content */}
      <section className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          How to Split Photos for Instagram Grid
        </h2>
        <div className="prose prose-gray dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
          <p>
            The Instagram grid splitter is a popular technique used by brands, photographers, and content creators to create visually stunning Instagram profiles. By splitting a single image into multiple perfectly-sized pieces, you can create a seamless panoramic or mosaic effect on your Instagram profile grid.
          </p>
          <h3>Common Instagram Grid Layouts</h3>
          <ul>
            <li><strong>1×3 Horizontal Banner:</strong> Split a wide image into 3 horizontal pieces for a seamless banner across one row of your Instagram feed.</li>
            <li><strong>3×1 Vertical Strip:</strong> Create a tall vertical image spread across 3 posts in a single column.</li>
            <li><strong>3×3 Nine-Grid:</strong> The classic Instagram puzzle layout — split one photo into 9 perfect squares for a stunning profile view.</li>
            <li><strong>2×3 Six-Grid:</strong> A balanced layout that spans 2 rows of your profile, ideal for landscape photos.</li>
          </ul>
          <h3>Tips for Best Results</h3>
          <ul>
            <li>Use high-resolution images (at least 1080px wide) for crisp results</li>
            <li>Square images (1:1) work best for 3×3 grids</li>
            <li>Post pieces in <strong>reverse order</strong> so they appear correctly on your profile</li>
            <li>Plan your feed — use a grid planner to visualize how the pieces fit together</li>
            <li>All processing happens in your browser — your images are never uploaded to any server</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
