import { useState } from "react";
import { type GridSettings, type LineArtSettings, type SketchSettings } from "@shared/schema";

// Client-side image processing previews
export function useGridPreview(imageUrl: string, settings: GridSettings) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  const generatePreview = async () => {
    try {
      const image = new Image();
      image.crossOrigin = "anonymous";
      
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        
        if (!ctx) return;
        
        // Set canvas size to match image
        canvas.width = image.width;
        canvas.height = image.height;
        
        // Draw original image
        ctx.drawImage(image, 0, 0);
        
        // Draw grid overlay
        const { size, opacity, color, style } = settings;
        
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = opacity / 100;
        
        // Draw horizontal lines
        if (style === "lines" || style === "dashed") {
          if (style === "dashed") {
            ctx.setLineDash([5, 5]);
          }
          
          for (let y = 0; y < canvas.height; y += size) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
          }
          
          // Draw vertical lines
          for (let x = 0; x < canvas.width; x += size) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
          }
        } else if (style === "dots") {
          // Draw dots at intersections
          ctx.fillStyle = color;
          
          for (let x = 0; x < canvas.width; x += size) {
            for (let y = 0; y < canvas.height; y += size) {
              ctx.beginPath();
              ctx.arc(x, y, 1, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
        
        // Reset global alpha
        ctx.globalAlpha = 1;
        
        // Convert to data URL
        const dataUrl = canvas.toDataURL("image/png");
        setPreviewUrl(dataUrl);
      };
      
      image.src = imageUrl;
    } catch (error) {
      console.error("Error generating grid preview:", error);
    }
  };
  
  return { previewUrl, generatePreview };
}

// Note: For line art and sketch previews, we would typically 
// use server-side processing as these transformations are more
// complex and computationally intensive. The client would
// make an API call to get the transformed image.
