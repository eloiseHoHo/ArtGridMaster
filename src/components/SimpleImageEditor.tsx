"use client";

import { useState, useCallback, useRef, useEffect, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Upload, Image as ImageIcon, ArrowRight, Link, XCircle, Download, Share2, Instagram, Twitter, Check } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { Input } from "@/components/ui/input";
import { generateGridEffect, generateLineArtEffect, generateSketchEffect, generateColoringPageEffect, generatePaintByNumbersEffect, generatePixelArtEffect, generateWatercolorEffect } from "@/lib/imageEffects";
import { generateSocialImage, shareImage, downloadDataUrl, SOCIAL_FORMATS, type SocialFormat } from "@/lib/socialExport";

export default function SimpleImageEditorNew() {
  const [activeTab, setActiveTab] = useState<string>("grid");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [transformedImage, setTransformedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isUrlMode, setIsUrlMode] = useState<boolean>(false);
  const [urlError, setUrlError] = useState<string | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [showSocialPanel, setShowSocialPanel] = useState(false);
  const [socialExporting, setSocialExporting] = useState(false);
  const [shareToast, setShareToast] = useState<string | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const [gridSize, setGridSize] = useState(50);
  const [gridOpacity, setGridOpacity] = useState(70);
  const [gridColor, setGridColor] = useState("#000000");
  const [gridStyle, setGridStyle] = useState("lines");
  const [gridThickness, setGridThickness] = useState(2);

  const [lineThreshold, setLineThreshold] = useState(128);
  const [lineThickness, setLineThickness] = useState(1);
  const [lineStyle, setLineStyle] = useState("normal");
  const lineArtStyles = [
    { value: "normal", label: "Standard" },
    { value: "detailed", label: "Detailed" },
    { value: "minimal", label: "Minimal" },
    { value: "pen", label: "Pen & Ink" },
    { value: "technical", label: "Technical" },
    { value: "comic", label: "Comic" }
  ];

  const [sketchIntensity, setSketchIntensity] = useState(50);
  const [pencilType, setPencilType] = useState("graphite");
  const [shadingLevel, setShadingLevel] = useState(50);
  const [sketchStyle, setSketchStyle] = useState("classic");
  const sketchStyles = [
    { value: "classic", label: "Classic" },
    { value: "pencil", label: "Pencil" },
    { value: "charcoal", label: "Charcoal" },
    { value: "conte", label: "Conte" },
    { value: "pastel", label: "Pastel" },
    { value: "crosshatch", label: "Crosshatch" }
  ];
  const pencilTypes = [
    { value: "graphite", label: "HB Graphite" },
    { value: "graphite_soft", label: "6B Soft" },
    { value: "graphite_hard", label: "2H Hard" },
    { value: "charcoal", label: "Charcoal" },
    { value: "charcoal_soft", label: "Soft Charcoal" }
  ];

  const [coloringLineThickness, setColoringLineThickness] = useState(2);
  const [coloringDetailLevel, setColoringDetailLevel] = useState(50);
  const [coloringStyle, setColoringStyle] = useState("classic");
  const coloringStyles = [
    { value: "classic", label: "Classic" },
    { value: "detailed", label: "Detailed" },
    { value: "simple", label: "Simple" },
    { value: "bold", label: "Bold" },
    { value: "kids", label: "Kids" }
  ];

  const [pbnNumColors, setPbnNumColors] = useState(12);
  const [pbnCellSize, setPbnCellSize] = useState(30);
  const [pbnShowNumbers, setPbnShowNumbers] = useState(true);
  const [pbnShowOutlines, setPbnShowOutlines] = useState(true);

  const [pixelSize, setPixelSize] = useState(10);
  const [pixelColorCount, setPixelColorCount] = useState(16);
  const [pixelStyle, setPixelStyle] = useState("classic");
  const pixelStyles = [
    { value: "classic", label: "Classic" },
    { value: "rounded", label: "Rounded" },
    { value: "outline", label: "Grid" },
    { value: "isometric", label: "Isometric" }
  ];

  const [watercolorIntensity, setWatercolorIntensity] = useState(50);
  const [watercolorWetness, setWatercolorWetness] = useState(50);
  const [watercolorStyle, setWatercolorStyle] = useState("classic");
  const watercolorStyles = [
    { value: "classic", label: "Watercolor" },
    { value: "wet", label: "Wet Wash" },
    { value: "oil", label: "Oil" },
    { value: "impressionist", label: "Impressionist" }
  ];

  const handleSliderMove = useCallback((clientX: number) => {
    if (!sliderContainerRef.current || !isDraggingRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleSliderStart = useCallback((clientX: number) => {
    isDraggingRef.current = true;
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);

    const onMouseMove = (e: MouseEvent) => handleSliderMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => handleSliderMove(e.touches[0].clientX);
    const onEnd = () => {
      isDraggingRef.current = false;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onEnd);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onEnd);
  }, [handleSliderMove]);

  const MAX_IMAGE_DIM = 2000;
  const resizeImageIfNeeded = (dataUrl: string): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        if (img.width <= MAX_IMAGE_DIM && img.height <= MAX_IMAGE_DIM) { resolve(dataUrl); return; }
        const scale = Math.min(MAX_IMAGE_DIM / img.width, MAX_IMAGE_DIM / img.height);
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.9));
      };
      img.src = dataUrl;
    });
  };

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = async (e) => {
        if (e.target?.result) {
          const resized = await resizeImageIfNeeded(e.target.result as string);
          setUploadedImage(resized);
          setTransformedImage(null);
          setIsUrlMode(false);
          setUrlError(null);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlImport = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    setUrlError(null);
    setIsProcessing(true);
    if (!imageUrl.trim()) { setUrlError("Please enter a valid image URL"); setIsProcessing(false); return; }
    try {
      const img = new Image();
      const p = new Promise<string>((resolve, reject) => {
        img.onload = () => resolve(imageUrl);
        img.onerror = () => reject(new Error("Could not load this image URL"));
        img.crossOrigin = "Anonymous";
      });
      img.src = imageUrl;
      await p;
      const resized = await resizeImageIfNeeded(imageUrl);
      setUploadedImage(resized);
      setTransformedImage(null);
      setImageUrl("");
    } catch (error) {
      setUrlError(error instanceof Error ? error.message : "Error loading image");
    } finally {
      setIsProcessing(false);
    }
  }, [imageUrl]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/jpeg': ['.jpg', '.jpeg'], 'image/png': ['.png'] },
    maxFiles: 1
  });

  const wrapTransform = async (fn: () => Promise<string>) => {
    if (!uploadedImage) return;
    setIsProcessing(true);
    try { setTransformedImage(await fn()); }
    catch { alert("Processing failed. Please try again."); }
    finally { setIsProcessing(false); }
  };

  const getTransformFn = useCallback(() => {
    if (!uploadedImage) return null;
    switch (activeTab) {
      case "grid": return () => generateGridEffect(uploadedImage, gridSize, gridColor, gridOpacity / 100, gridStyle, gridThickness);
      case "lineart": return () => generateLineArtEffect(uploadedImage, lineThreshold / 10, lineThickness, lineStyle);
      case "sketch": return () => generateSketchEffect(uploadedImage, sketchIntensity / 10, pencilType, shadingLevel, sketchStyle);
      case "coloring": return () => generateColoringPageEffect(uploadedImage, coloringLineThickness, coloringDetailLevel, coloringStyle);
      case "pbn": return () => generatePaintByNumbersEffect(uploadedImage, pbnNumColors, pbnCellSize, pbnShowNumbers, pbnShowOutlines);
      case "pixel": return () => generatePixelArtEffect(uploadedImage, pixelSize, pixelColorCount, pixelStyle);
      case "watercolor": return () => generateWatercolorEffect(uploadedImage, watercolorIntensity, watercolorWetness, watercolorStyle);
      default: return null;
    }
  }, [uploadedImage, activeTab, gridSize, gridColor, gridOpacity, gridStyle, gridThickness, lineThreshold, lineThickness, lineStyle, sketchIntensity, pencilType, shadingLevel, sketchStyle, coloringLineThickness, coloringDetailLevel, coloringStyle, pbnNumColors, pbnCellSize, pbnShowNumbers, pbnShowOutlines, pixelSize, pixelColorCount, pixelStyle, watercolorIntensity, watercolorWetness, watercolorStyle]);

  const applyTransform = () => {
    const fn = getTransformFn();
    if (fn) wrapTransform(fn);
  };

  // Auto-apply: debounce 600ms after any parameter change
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasAppliedOnce = useRef(false);

  useEffect(() => {
    if (!uploadedImage || !hasAppliedOnce.current) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const fn = getTransformFn();
      if (fn) wrapTransform(fn);
    }, 600);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getTransformFn]);

  const ToggleSwitch = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
    <button onClick={onChange} className={`relative w-9 h-5 rounded-full transition-colors ${checked ? 'bg-gray-900 dark:bg-gray-100' : 'bg-gray-200 dark:bg-gray-600'}`}>
      <div className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white dark:bg-gray-900 transition-transform ${checked ? 'translate-x-4' : ''}`} />
    </button>
  );

  const StyleGrid = ({ options, value, onChange, cols = 3 }: { options: { value: string; label: string }[]; value: string; onChange: (v: string) => void; cols?: number }) => (
    <div className={`grid gap-1.5 ${cols === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => onChange(o.value)}
          className={`px-2.5 py-1.5 text-xs rounded-md border transition-colors ${value === o.value ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-gray-900 dark:border-gray-100' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );

  const SliderControl = ({ label, value, unit, min, max, step, onChange }: { label: string; value: number; unit?: string; min: number; max: number; step: number; onChange: (v: number) => void }) => (
    <div>
      <div className="flex justify-between mb-2">
        <Label className="text-xs text-gray-500 dark:text-gray-400">{label}</Label>
        <span className="text-xs text-gray-900 dark:text-gray-100 font-medium tabular-nums">{value}{unit}</span>
      </div>
      <Slider min={min} max={max} step={step} value={[value]} onValueChange={(v) => onChange(v[0])} />
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
          <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Image</span>
            {uploadedImage && (
              <div className="flex items-center gap-2">
                {transformedImage && (
                  <>
                    <button
                      className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-1"
                      onClick={() => downloadDataUrl(transformedImage, `photogrid-${activeTab}.png`)}
                    >
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </button>
                    <button
                      className="text-xs bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors flex items-center gap-1 px-2.5 py-1 rounded-md font-medium"
                      onClick={() => setShowSocialPanel(!showSocialPanel)}
                    >
                      <Share2 className="h-3.5 w-3.5" />
                      Share
                    </button>
                  </>
                )}
                <button
                  className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  onClick={() => { setUploadedImage(null); setTransformedImage(null); setShowSocialPanel(false); }}
                >
                  Clear
                </button>
              </div>
            )}
          </div>

          {/* Social Export Panel */}
          {showSocialPanel && transformedImage && uploadedImage && (
            <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Export for Social Media</span>
                <button
                  className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  onClick={() => setShowSocialPanel(false)}
                >
                  <XCircle className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="flex gap-2 mb-2">
                {(Object.entries(SOCIAL_FORMATS) as [SocialFormat, { label: string }][]).map(([key, { label }]) => (
                  <button
                    key={key}
                    disabled={socialExporting}
                    className="flex-1 text-xs py-2 px-2 rounded-md border border-gray-200 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-400 hover:bg-white dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300 disabled:opacity-50"
                    onClick={async () => {
                      setSocialExporting(true);
                      try {
                        const img = await generateSocialImage(uploadedImage!, transformedImage!, activeTab, key);
                        downloadDataUrl(img, `photogrid-${activeTab}-${key}.jpg`);
                      } catch { /* ignore */ }
                      setSocialExporting(false);
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <button
                className="w-full text-xs py-2 rounded-md bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors flex items-center justify-center gap-1.5 font-medium"
                onClick={async () => {
                  const native = await shareImage(transformedImage!, activeTab);
                  if (!native) {
                    setShareToast("Link & caption copied!");
                    setTimeout(() => setShareToast(null), 2500);
                  }
                }}
              >
                <Share2 className="h-3.5 w-3.5" />
                {shareToast ? (
                  <><Check className="h-3.5 w-3.5" /> {shareToast}</>
                ) : (
                  "Share with caption"
                )}
              </button>
            </div>
          )}

          <div className="p-4">
            {!uploadedImage ? (
              <div className="rounded-lg border border-dashed border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                <div className="flex gap-0 border-b border-gray-200 dark:border-gray-700">
                  <button
                    className={`flex-1 py-2 text-xs font-medium transition-colors ${!isUrlMode ? 'text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
                    onClick={() => setIsUrlMode(false)}
                  >
                    Upload File
                  </button>
                  <button
                    className={`flex-1 py-2 text-xs font-medium transition-colors ${isUrlMode ? 'text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
                    onClick={() => setIsUrlMode(true)}
                  >
                    From URL
                  </button>
                </div>

                {!isUrlMode ? (
                  <div
                    {...getRootProps()}
                    className="flex flex-col items-center justify-center py-16 px-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <input {...getInputProps()} id="fileInput" />
                    <Upload className="h-8 w-8 text-gray-300 mb-4" />
                    <p className="text-sm text-gray-500 mb-1">
                      {isDragActive ? "Drop here" : "Drop an image or click to browse"}
                    </p>
                    <p className="text-xs text-gray-400">JPG, PNG up to 10MB</p>
                  </div>
                ) : (
                  <div className="p-6">
                    <form onSubmit={handleUrlImport} className="space-y-3">
                      <div className="flex gap-2">
                        <Input
                          type="url"
                          placeholder="https://example.com/image.jpg"
                          value={imageUrl}
                          onChange={e => setImageUrl(e.target.value)}
                          className="text-sm"
                        />
                        <Button type="submit" size="sm" disabled={isProcessing} className="px-3">
                          {isProcessing ? <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" /> : <ArrowRight className="h-4 w-4" />}
                        </Button>
                      </div>
                      {urlError && (
                        <p className="text-xs text-red-500 flex items-center gap-1">
                          <XCircle className="h-3 w-3" />{urlError}
                        </p>
                      )}
                    </form>
                    <div className="flex flex-col items-center py-10">
                      <Link className="h-8 w-8 text-gray-300 mb-3" />
                      <p className="text-sm text-gray-500">Paste an image URL to get started</p>
                    </div>
                  </div>
                )}
              </div>
            ) : transformedImage && !isProcessing ? (
              <div
                ref={sliderContainerRef}
                className="relative rounded-lg overflow-hidden bg-gray-50 border border-gray-100 aspect-square cursor-col-resize select-none"
                onMouseDown={(e) => handleSliderStart(e.clientX)}
                onTouchStart={(e) => handleSliderStart(e.touches[0].clientX)}
              >
                <img
                  src={transformedImage}
                  alt="Transformed"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                  draggable={false}
                />
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img
                    src={uploadedImage}
                    alt="Original"
                    className="absolute inset-0 w-full h-full object-contain"
                    draggable={false}
                  />
                </div>
                <div
                  className="absolute top-0 bottom-0 pointer-events-none"
                  style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="w-0.5 h-full bg-white shadow-[0_0_4px_rgba(0,0,0,0.3)]" />
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-gray-500">
                      <path d="M4.5 3L1.5 7L4.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.5 3L12.5 7L9.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <span className="absolute top-2 left-2 text-[10px] font-medium text-gray-600 bg-white/80 px-1.5 py-0.5 rounded pointer-events-none">Original</span>
                <span className="absolute top-2 right-2 text-[10px] font-medium text-gray-600 bg-white/80 px-1.5 py-0.5 rounded pointer-events-none">Transformed</span>
              </div>
            ) : (
              <div className="relative rounded-lg overflow-hidden bg-gray-50 border border-gray-100 aspect-square">
                <img
                  src={uploadedImage}
                  alt="Preview"
                  className="w-full h-full object-contain"
                />
                {isProcessing && (
                  <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center gap-3">
                    <div className="animate-pulse text-sm font-medium text-gray-600">Processing your image...</div>
                    <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-500 rounded-full animate-indeterminate" />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
          <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Settings</span>
          </div>

          <div className="p-4">
            {uploadedImage ? (
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="flex flex-wrap gap-1 mb-5 h-auto p-1 bg-gray-50 dark:bg-gray-800 rounded-md">
                  {[
                    { value: "grid", label: "Grid" },
                    { value: "lineart", label: "Line Art" },
                    { value: "sketch", label: "Sketch" },
                    { value: "coloring", label: "Coloring" },
                    { value: "pbn", label: "Paint #" },
                    { value: "pixel", label: "Pixel" },
                    { value: "watercolor", label: "Paint" },
                  ].map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="text-xs px-2.5 py-1.5 rounded data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-gray-900 dark:data-[state=active]:text-gray-100 data-[state=active]:shadow-sm text-gray-500 dark:text-gray-400"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="grid" className="space-y-4">
                  <SliderControl label="Grid Size" value={gridSize} unit="px" min={10} max={200} step={5} onChange={setGridSize} />
                  <SliderControl label="Opacity" value={gridOpacity} unit="%" min={10} max={100} step={5} onChange={setGridOpacity} />
                  <SliderControl label="Thickness" value={gridThickness} unit="px" min={1} max={5} step={0.5} onChange={setGridThickness} />
                  <div>
                    <Label className="text-xs text-gray-500 dark:text-gray-400 mb-2 block">Color</Label>
                    <div className="flex gap-2">
                      {['#000000', '#EF4444', '#3B82F6', '#10B981', '#8B5CF6'].map((c) => (
                        <button
                          key={c}
                          className={`w-6 h-6 rounded-full border-2 transition-all ${gridColor === c ? 'border-gray-900 scale-110' : 'border-gray-200'}`}
                          style={{ backgroundColor: c }}
                          onClick={() => setGridColor(c)}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs text-gray-500 dark:text-gray-400 mb-2 block">Style</Label>
                    <StyleGrid options={[{ value: "lines", label: "Solid" }, { value: "dots", label: "Dots" }, { value: "dashed", label: "Dashed" }]} value={gridStyle} onChange={setGridStyle} />
                  </div>
                </TabsContent>

                <TabsContent value="lineart" className="space-y-4">
                  <SliderControl label="Edge Threshold" value={lineThreshold} min={20} max={200} step={1} onChange={setLineThreshold} />
                  <SliderControl label="Line Thickness" value={lineThickness} unit="px" min={0.5} max={3} step={0.1} onChange={setLineThickness} />
                  <div>
                    <Label className="text-xs text-gray-500 dark:text-gray-400 mb-2 block">Style</Label>
                    <StyleGrid options={lineArtStyles} value={lineStyle} onChange={setLineStyle} cols={2} />
                  </div>
                </TabsContent>

                <TabsContent value="sketch" className="space-y-4">
                  <div>
                    <Label className="text-xs text-gray-500 dark:text-gray-400 mb-2 block">Style</Label>
                    <StyleGrid options={sketchStyles} value={sketchStyle} onChange={setSketchStyle} cols={2} />
                  </div>
                  <SliderControl label="Intensity" value={sketchIntensity} unit="%" min={10} max={100} step={1} onChange={setSketchIntensity} />
                  <div>
                    <Label className="text-xs text-gray-500 dark:text-gray-400 mb-2 block">Pencil Type</Label>
                    <StyleGrid options={pencilTypes} value={pencilType} onChange={setPencilType} cols={2} />
                  </div>
                  <SliderControl label="Shading" value={shadingLevel} unit="%" min={0} max={100} step={1} onChange={setShadingLevel} />
                </TabsContent>

                <TabsContent value="coloring" className="space-y-4">
                  <div>
                    <Label className="text-xs text-gray-500 dark:text-gray-400 mb-2 block">Style</Label>
                    <StyleGrid options={coloringStyles} value={coloringStyle} onChange={setColoringStyle} />
                  </div>
                  <SliderControl label="Line Thickness" value={coloringLineThickness} unit="px" min={1} max={5} step={1} onChange={setColoringLineThickness} />
                  <SliderControl label="Detail Level" value={coloringDetailLevel} unit="%" min={10} max={100} step={5} onChange={setColoringDetailLevel} />
                </TabsContent>

                <TabsContent value="pbn" className="space-y-4">
                  <SliderControl label="Colors" value={pbnNumColors} min={4} max={24} step={1} onChange={setPbnNumColors} />
                  <SliderControl label="Region Size" value={pbnCellSize} unit="px" min={15} max={60} step={5} onChange={setPbnCellSize} />
                  <div className="flex items-center justify-between">
                    <Label className="text-xs text-gray-500 dark:text-gray-400">Show Numbers</Label>
                    <ToggleSwitch checked={pbnShowNumbers} onChange={() => setPbnShowNumbers(!pbnShowNumbers)} />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-xs text-gray-500 dark:text-gray-400">Show Outlines</Label>
                    <ToggleSwitch checked={pbnShowOutlines} onChange={() => setPbnShowOutlines(!pbnShowOutlines)} />
                  </div>
                </TabsContent>

                <TabsContent value="pixel" className="space-y-4">
                  <div>
                    <Label className="text-xs text-gray-500 dark:text-gray-400 mb-2 block">Style</Label>
                    <StyleGrid options={pixelStyles} value={pixelStyle} onChange={setPixelStyle} cols={2} />
                  </div>
                  <SliderControl label="Pixel Size" value={pixelSize} unit="px" min={4} max={30} step={1} onChange={setPixelSize} />
                  <SliderControl label="Colors" value={pixelColorCount} min={4} max={64} step={4} onChange={setPixelColorCount} />
                </TabsContent>

                <TabsContent value="watercolor" className="space-y-4">
                  <div>
                    <Label className="text-xs text-gray-500 dark:text-gray-400 mb-2 block">Style</Label>
                    <StyleGrid options={watercolorStyles} value={watercolorStyle} onChange={setWatercolorStyle} cols={2} />
                  </div>
                  <SliderControl label="Intensity" value={watercolorIntensity} unit="%" min={10} max={100} step={5} onChange={setWatercolorIntensity} />
                  <SliderControl label="Wetness" value={watercolorWetness} unit="%" min={10} max={100} step={5} onChange={setWatercolorWetness} />
                </TabsContent>

                <Button
                  className="w-full mt-5"
                  onClick={() => { hasAppliedOnce.current = true; applyTransform(); }}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                      Processing...
                    </div>
                  ) : transformedImage ? 'Update' : 'Apply'}
                </Button>
              </Tabs>
            ) : (
              <div className="text-center py-12">
                <ImageIcon className="h-10 w-10 text-gray-200 dark:text-gray-600 mx-auto mb-4" />
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Upload an image to get started</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">7 transformation tools available</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4"
                  onClick={() => document.getElementById('fileInput')?.click()}
                >
                  <Upload className="mr-2 h-3.5 w-3.5" />
                  Choose Image
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
