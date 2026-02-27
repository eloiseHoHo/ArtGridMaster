/**
 * Canvas-based photo grid collage engine.
 * Combines multiple images into a single grid layout.
 */

export interface CollageOptions {
  images: string[];
  rows: number;
  cols: number;
  gap: number;
  bgColor: string;
  outputWidth: number;
  aspectW: number;
  aspectH: number;
  cornerRadius?: number;
}

function loadImg(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = src;
  });
}

/** Draw a rounded rectangle path (arcTo for broad browser support). */
function roundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

/** Draw an image into a rectangle using object-fit:cover logic. */
function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  x: number,
  y: number,
  w: number,
  h: number,
  radius: number
) {
  const imgRatio = img.width / img.height;
  const cellRatio = w / h;
  let sx: number, sy: number, sw: number, sh: number;

  if (imgRatio > cellRatio) {
    sh = img.height;
    sw = sh * cellRatio;
    sx = (img.width - sw) / 2;
    sy = 0;
  } else {
    sw = img.width;
    sh = sw / cellRatio;
    sx = 0;
    sy = (img.height - sh) / 2;
  }

  if (radius > 0) {
    ctx.save();
    roundedRect(ctx, x, y, w, h, radius);
    ctx.clip();
    ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
    ctx.restore();
  } else {
    ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
  }
}

/** Generate a photo grid collage and return as data URL. */
export async function generateCollage(opts: CollageOptions): Promise<string> {
  const {
    images,
    rows,
    cols,
    gap,
    bgColor,
    outputWidth,
    aspectW,
    aspectH,
    cornerRadius = 0,
  } = opts;

  const cellWidth = Math.floor((outputWidth - (cols + 1) * gap) / cols);
  const cellHeight = Math.floor(cellWidth * (aspectH / aspectW));
  const totalW = cols * cellWidth + (cols + 1) * gap;
  const totalH = rows * cellHeight + (rows + 1) * gap;

  const canvas = document.createElement("canvas");
  canvas.width = totalW;
  canvas.height = totalH;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, totalW, totalH);

  const totalCells = rows * cols;
  for (let i = 0; i < totalCells && i < images.length; i++) {
    const img = await loadImg(images[i]);
    const r = Math.floor(i / cols);
    const c = i % cols;
    const x = gap + c * (cellWidth + gap);
    const y = gap + r * (cellHeight + gap);
    drawCover(ctx, img, x, y, cellWidth, cellHeight, cornerRadius);
  }

  return canvas.toDataURL("image/jpeg", 0.92);
}

/** Trigger browser download of a data URL. */
export function downloadCollage(
  dataUrl: string,
  filename = "photo-grid-collage"
): void {
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = `${filename}.jpg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
