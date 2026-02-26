/**
 * Social Export Engine
 * Generates before/after comparison images optimized for social media platforms.
 * All processing is client-side via Canvas API.
 */

export type SocialFormat = "instagram-post" | "instagram-story" | "twitter";

interface FormatConfig {
  width: number;
  height: number;
  label: string;
}

export const SOCIAL_FORMATS: Record<SocialFormat, FormatConfig> = {
  "instagram-post": { width: 1080, height: 1080, label: "Instagram Post" },
  "instagram-story": { width: 1080, height: 1920, label: "Instagram Story" },
  "twitter": { width: 1200, height: 675, label: "Twitter / X" },
};

const EFFECT_LABELS: Record<string, string> = {
  grid: "Grid Effect",
  lineart: "Line Art",
  sketch: "Pencil Sketch",
  coloring: "Coloring Page",
  pbn: "Paint by Numbers",
  pixel: "Pixel Art",
  watercolor: "Painting Effect",
};

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = src;
  });
}

/**
 * Generate a before/after comparison image for social media.
 */
export async function generateSocialImage(
  originalSrc: string,
  transformedSrc: string,
  effectKey: string,
  format: SocialFormat
): Promise<string> {
  const config = SOCIAL_FORMATS[format];
  const { width: W, height: H } = config;

  const [original, transformed] = await Promise.all([
    loadImage(originalSrc),
    loadImage(transformedSrc),
  ]);

  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;

  // -- Background
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, W, H);

  // -- Layout constants
  const topBarH = Math.round(H * 0.055);
  const bottomBarH = Math.round(H * 0.055);
  const gap = Math.round(W * 0.012);
  const padding = Math.round(W * 0.03);
  const imageAreaY = topBarH;
  const imageAreaH = H - topBarH - bottomBarH;

  // -- Draw images side by side
  const halfW = Math.floor((W - padding * 2 - gap) / 2);
  const imgH = imageAreaH;

  drawCroppedImage(ctx, original, padding, imageAreaY, halfW, imgH);
  drawCroppedImage(ctx, transformed, padding + halfW + gap, imageAreaY, halfW, imgH);

  // -- Divider line
  const dividerX = padding + halfW + gap / 2;
  ctx.strokeStyle = "rgba(255,255,255,0.8)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(dividerX, imageAreaY);
  ctx.lineTo(dividerX, imageAreaY + imageAreaH);
  ctx.stroke();

  // -- "Before" / "After" labels on images
  const labelFontSize = Math.round(W * 0.022);
  ctx.font = `600 ${labelFontSize}px Inter, system-ui, sans-serif`;

  drawPill(ctx, "Before", padding + 10, imageAreaY + 10, labelFontSize);
  drawPill(ctx, "After", padding + halfW + gap + 10, imageAreaY + 10, labelFontSize);

  // -- Top bar: effect name
  ctx.fillStyle = "#111111";
  ctx.fillRect(0, 0, W, topBarH);
  const topFontSize = Math.round(W * 0.024);
  ctx.font = `600 ${topFontSize}px Inter, system-ui, sans-serif`;
  ctx.fillStyle = "#ffffff";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  const effectLabel = EFFECT_LABELS[effectKey] || "Transformed";
  ctx.fillText(effectLabel, W / 2, topBarH / 2);

  // -- Bottom bar: branding
  ctx.fillStyle = "#111111";
  ctx.fillRect(0, H - bottomBarH, W, bottomBarH);
  const brandFontSize = Math.round(W * 0.02);
  ctx.font = `500 ${brandFontSize}px Inter, system-ui, sans-serif`;
  ctx.fillStyle = "rgba(255,255,255,0.9)";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText("Made with PhotoGrid.space · 100% Free", W / 2, H - bottomBarH / 2);

  return canvas.toDataURL("image/jpeg", 0.92);
}

/**
 * Draw image cropped to cover the target rectangle (like CSS object-fit: cover).
 */
function drawCroppedImage(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  x: number,
  y: number,
  w: number,
  h: number
) {
  const imgRatio = img.width / img.height;
  const targetRatio = w / h;
  let sx = 0, sy = 0, sw = img.width, sh = img.height;

  if (imgRatio > targetRatio) {
    sw = img.height * targetRatio;
    sx = (img.width - sw) / 2;
  } else {
    sh = img.width / targetRatio;
    sy = (img.height - sh) / 2;
  }

  // Rounded corners
  const radius = Math.round(w * 0.015);
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, radius);
  ctx.clip();
  ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
  ctx.restore();
}

/**
 * Draw a small pill-shaped label (e.g. "Before", "After").
 */
function drawPill(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  fontSize: number
) {
  ctx.font = `600 ${fontSize}px Inter, system-ui, sans-serif`;
  const metrics = ctx.measureText(text);
  const pw = metrics.width + fontSize * 1.2;
  const ph = fontSize * 1.8;
  const pr = ph / 2;

  ctx.fillStyle = "rgba(0,0,0,0.55)";
  ctx.beginPath();
  ctx.roundRect(x, y, pw, ph, pr);
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText(text, x + pw / 2, y + ph / 2);
}

/**
 * Generate an all-effects grid image: original + 7 effects in a 2×4 grid.
 * Output is 1080×1350 (Instagram-optimized portrait).
 */
export async function generateAllEffectsGrid(
  items: { label: string; dataUrl: string }[]
): Promise<string> {
  const W = 1080;
  const H = 1350;
  const cols = 2;
  const rows = 4;
  const topBarH = 60;
  const bottomBarH = 50;
  const gap = 6;
  const padding = 6;

  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;

  // Background
  ctx.fillStyle = "#111111";
  ctx.fillRect(0, 0, W, H);

  // Top bar
  ctx.font = "600 22px Inter, system-ui, sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText("7 Art Styles · One Photo", W / 2, topBarH / 2);

  // Grid area
  const gridY = topBarH;
  const gridH = H - topBarH - bottomBarH;
  const cellW = Math.floor((W - padding * 2 - gap * (cols - 1)) / cols);
  const cellH = Math.floor((gridH - gap * (rows - 1)) / rows);

  const images = await Promise.all(items.map((item) => loadImage(item.dataUrl)));

  for (let i = 0; i < Math.min(items.length, cols * rows); i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = padding + col * (cellW + gap);
    const y = gridY + row * (cellH + gap);

    // Draw image cover-cropped
    drawCroppedImage(ctx, images[i], x, y, cellW, cellH);

    // Label pill at bottom-left of each cell
    const labelFontSize = 14;
    ctx.font = `600 ${labelFontSize}px Inter, system-ui, sans-serif`;
    const label = items[i].label;
    const metrics = ctx.measureText(label);
    const pw = metrics.width + 14;
    const ph = 24;
    const px = x + 6;
    const py = y + cellH - ph - 6;

    ctx.fillStyle = "rgba(0,0,0,0.6)";
    ctx.beginPath();
    ctx.roundRect(px, py, pw, ph, 12);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(label, px + pw / 2, py + ph / 2);
  }

  // Bottom bar
  ctx.font = "500 16px Inter, system-ui, sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText("Made with PhotoGrid.space · 100% Free", W / 2, H - bottomBarH / 2);

  return canvas.toDataURL("image/jpeg", 0.92);
}

/**
 * Add a small watermark to a result image.
 */
export async function addWatermark(imageSrc: string): Promise<string> {
  const img = await loadImage(imageSrc);
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(img, 0, 0);

  const fontSize = Math.max(12, Math.round(img.width * 0.018));
  const padding = fontSize * 0.8;
  const text = "photogrid.space";

  ctx.font = `500 ${fontSize}px Inter, system-ui, sans-serif`;
  const tw = ctx.measureText(text).width;

  const bx = img.width - tw - padding * 3;
  const by = img.height - fontSize - padding * 3;
  const bw = tw + padding * 2;
  const bh = fontSize + padding * 1.5;

  ctx.fillStyle = "rgba(0,0,0,0.35)";
  ctx.beginPath();
  ctx.roundRect(bx, by, bw, bh, 4);
  ctx.fill();

  ctx.fillStyle = "rgba(255,255,255,0.9)";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText(text, bx + bw / 2, by + bh / 2);

  return canvas.toDataURL("image/png");
}

/**
 * Trigger download of a data URL.
 */
export function downloadDataUrl(dataUrl: string, filename: string) {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Share image using Web Share API (with fallback to clipboard).
 * Returns true if shared natively, false if copied to clipboard.
 */
export async function shareImage(
  dataUrl: string,
  effectKey: string
): Promise<boolean> {
  const effectLabel = EFFECT_LABELS[effectKey] || "art";
  const shareText = `I turned my photo into ${effectLabel.toLowerCase()} with photogrid.space 🎨 100% free, no signup!`;

  // Try Web Share API with file
  if (navigator.share && navigator.canShare) {
    try {
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], `photogrid-${effectKey}.jpg`, { type: "image/jpeg" });
      const shareData = { text: shareText, files: [file] };

      if (navigator.canShare(shareData)) {
        await navigator.share(shareData);
        return true;
      }
    } catch (e) {
      // User cancelled or not supported, fall through
      if ((e as Error).name === "AbortError") return false;
    }
  }

  // Fallback: copy text to clipboard
  try {
    await navigator.clipboard.writeText(shareText + "\nhttps://www.photogrid.space");
  } catch {
    // Ignore clipboard errors
  }
  return false;
}
