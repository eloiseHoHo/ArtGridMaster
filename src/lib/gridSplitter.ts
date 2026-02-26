import JSZip from "jszip";

export interface GridSlice {
  index: number;
  row: number;
  col: number;
  dataUrl: string;
}

/**
 * Split an image into a grid of rows × cols slices.
 * All processing happens in the browser via Canvas.
 */
export async function splitImage(
  imageSrc: string,
  rows: number,
  cols: number
): Promise<GridSlice[]> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const sliceWidth = Math.floor(img.width / cols);
      const sliceHeight = Math.floor(img.height / rows);
      const slices: GridSlice[] = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const canvas = document.createElement("canvas");
          canvas.width = sliceWidth;
          canvas.height = sliceHeight;
          const ctx = canvas.getContext("2d")!;
          ctx.drawImage(
            img,
            c * sliceWidth,
            r * sliceHeight,
            sliceWidth,
            sliceHeight,
            0,
            0,
            sliceWidth,
            sliceHeight
          );
          slices.push({
            index: r * cols + c + 1,
            row: r,
            col: c,
            dataUrl: canvas.toDataURL("image/png"),
          });
        }
      }
      resolve(slices);
    };
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = imageSrc;
  });
}

/**
 * Download all slices as a ZIP file using JSZip.
 */
export async function downloadSlicesAsZip(
  slices: GridSlice[],
  filename = "instagram-grid"
): Promise<void> {
  const zip = new JSZip();
  for (const slice of slices) {
    const data = slice.dataUrl.split(",")[1];
    zip.file(`${filename}_${slice.index}.png`, data, { base64: true });
  }
  const blob = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${filename}.zip`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Download a single slice as PNG.
 */
export function downloadSingleSlice(
  slice: GridSlice,
  filename = "instagram-grid"
): void {
  const a = document.createElement("a");
  a.href = slice.dataUrl;
  a.download = `${filename}_${slice.index}.png`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
