import sharp from "sharp";
import { type TransformationType, type GridSettings, type LineArtSettings, type SketchSettings } from "@shared/schema";

class ImageProcessor {
  async transformImage(
    inputPath: string,
    outputPath: string,
    transformationType: TransformationType,
    settings: any
  ): Promise<void> {
    switch (transformationType) {
      case "grid":
        return this.applyGridTransformation(inputPath, outputPath, settings as GridSettings);
      case "lineart":
        return this.applyLineArtTransformation(inputPath, outputPath, settings as LineArtSettings);
      case "sketch":
        return this.applySketchTransformation(inputPath, outputPath, settings as SketchSettings);
      default:
        throw new Error(`Unsupported transformation type: ${transformationType}`);
    }
  }

  private async applyGridTransformation(
    inputPath: string,
    outputPath: string,
    settings: GridSettings
  ): Promise<void> {
    const { size, opacity, color, style } = settings;
    
    // Get image dimensions
    const metadata = await sharp(inputPath).metadata();
    const width = metadata.width!;
    const height = metadata.height!;
    
    // Create a grid overlay using SVG
    let gridSvg = '';
    const hexColor = color.startsWith('#') ? color : '#000000';
    const alphaValue = opacity / 100;
    
    if (style === 'lines') {
      // Draw vertical lines
      for (let x = size; x < width; x += size) {
        gridSvg += `<line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="${hexColor}" stroke-opacity="${alphaValue}" />`;
      }
      
      // Draw horizontal lines
      for (let y = size; y < height; y += size) {
        gridSvg += `<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${hexColor}" stroke-opacity="${alphaValue}" />`;
      }
    } else if (style === 'dots') {
      // Draw dots at grid intersections
      for (let x = size; x < width; x += size) {
        for (let y = size; y < height; y += size) {
          gridSvg += `<circle cx="${x}" cy="${y}" r="1" fill="${hexColor}" fill-opacity="${alphaValue}" />`;
        }
      }
    } else if (style === 'dashed') {
      // Draw dashed lines
      for (let x = size; x < width; x += size) {
        gridSvg += `<line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="${hexColor}" stroke-opacity="${alphaValue}" stroke-dasharray="5,5" />`;
      }
      
      for (let y = size; y < height; y += size) {
        gridSvg += `<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${hexColor}" stroke-opacity="${alphaValue}" stroke-dasharray="5,5" />`;
      }
    }
    
    const svgBuffer = Buffer.from(`
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        ${gridSvg}
      </svg>
    `);
    
    // Composite the original image with the grid overlay
    await sharp(inputPath)
      .composite([{ input: svgBuffer, blend: 'over' }])
      .toFile(outputPath);
  }

  private async applyLineArtTransformation(
    inputPath: string,
    outputPath: string,
    settings: LineArtSettings
  ): Promise<void> {
    const { threshold, lineThickness, style } = settings;
    
    let pipeline = sharp(inputPath)
      .grayscale();
    
    switch (style) {
      case 'detailed':
        pipeline = pipeline
          .normalize()
          .threshold(threshold)
          .negate();
        break;
      case 'minimal':
        pipeline = pipeline
          .modulate({ brightness: 1.5 })
          .threshold(threshold + 30)
          .negate();
        break;
      default: // normal
        pipeline = pipeline
          .normalize()
          .modulate({ brightness: 1.2 })
          .threshold(threshold)
          .negate();
        break;
    }
    
    // If line thickness > 1, simulate it using erode/dilate operations
    if (lineThickness > 1) {
      // The erode makes lines thicker in the negative space
      pipeline = pipeline.linear(lineThickness, 0);
    }
    
    await pipeline.toFile(outputPath);
  }

  private async applySketchTransformation(
    inputPath: string,
    outputPath: string,
    settings: SketchSettings
  ): Promise<void> {
    const { intensity, pencilType, shadingLevel } = settings;
    
    // Create sketch effect
    // 1. Create an inverted grayscale image
    const invertedImage = await sharp(inputPath)
      .grayscale()
      .negate()
      .toBuffer();
    
    // 2. Create a blurred version to use for dodge and burn effects
    const blurAmount = 2 * (1 + Math.min(intensity, 100) / 50);
    const blurredImage = await sharp(invertedImage)
      .blur(blurAmount)
      .toBuffer();
    
    // 3. Original grayscale image
    const grayscaleImage = await sharp(inputPath)
      .grayscale()
      .toBuffer();
    
    // 4. Apply different effects based on pencil type
    let contrast, brightness;
    if (pencilType === 'charcoal') {
      contrast = 1.2 + shadingLevel / 50;
      brightness = 0.8 - shadingLevel / 50;
    } else { // graphite
      contrast = 1.1 + shadingLevel / 80;
      brightness = 0.9;
    }
    
    // 5. Combine everything for the sketch effect
    const metadata = await sharp(inputPath).metadata();
    const width = metadata.width!;
    const height = metadata.height!;
    
    await sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
    .composite([
      { input: grayscaleImage, blend: 'multiply' },
      { input: blurredImage, blend: 'screen' }
    ])
    .modulate({ brightness, contrast })
    .toFile(outputPath);
  }
}

export const imageProcessor = new ImageProcessor();
