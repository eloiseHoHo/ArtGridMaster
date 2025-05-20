import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Upload, Image as ImageIcon, ArrowRight, Check } from "lucide-react";
import { useDropzone } from "react-dropzone";
import rough from 'roughjs/bundled/rough.esm';

export default function SimpleImageEditor() {
  const [activeTab, setActiveTab] = useState<string>("grid");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [transformedImage, setTransformedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hiddenCanvasRef = useRef<HTMLCanvasElement | null>(null);
  
  // Grid settings
  const [gridSize, setGridSize] = useState(20);
  const [gridOpacity, setGridOpacity] = useState(70);
  const [gridColor, setGridColor] = useState("#000000");
  const [gridStyle, setGridStyle] = useState("lines");
  
  // Line art settings
  const [lineThreshold, setLineThreshold] = useState(128);
  const [lineThickness, setLineThickness] = useState(1);
  const [lineStyle, setLineStyle] = useState("normal");
  
  // Sketch settings
  const [sketchIntensity, setSketchIntensity] = useState(50);
  const [pencilType, setPencilType] = useState("graphite");
  const [shadingLevel, setShadingLevel] = useState(50);
  
  // Create a hidden canvas for processing
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.display = 'none';
    document.body.appendChild(canvas);
    
    // Store the canvas reference
    hiddenCanvasRef.current = canvas;
    
    return () => {
      if (canvas && canvas.parentNode) {
        document.body.removeChild(canvas);
      }
    };
  }, []);
  
  // Handle file drop
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      
      reader.onload = (e) => {
        if (e.target?.result) {
          setUploadedImage(e.target.result as string);
          setTransformedImage(null);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png']
    },
    maxFiles: 1
  });
  
  // Apply grid transformation
  const applyGridTransform = () => {
    if (!uploadedImage || !hiddenCanvasRef.current) return;
    
    setIsProcessing(true);
    
    const img = new Image();
    img.onload = () => {
      const canvas = hiddenCanvasRef.current!;
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        setIsProcessing(false);
        return;
      }
      
      // Set canvas size
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw original image
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      
      // Draw grid overlay
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.globalAlpha = gridOpacity / 100;
      
      if (gridStyle === 'lines' || gridStyle === 'dashed') {
        if (gridStyle === 'dashed') {
          ctx.setLineDash([5, 5]);
        } else {
          ctx.setLineDash([]);
        }
        
        // Draw vertical lines
        for (let x = 0; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        
        // Draw horizontal lines
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
      } else if (gridStyle === 'dots') {
        ctx.fillStyle = gridColor;
        
        for (let x = 0; x < canvas.width; x += gridSize) {
          for (let y = 0; y < canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      
      // Reset alpha
      ctx.globalAlpha = 1;
      
      // Get result
      setTransformedImage(canvas.toDataURL('image/png'));
      setIsProcessing(false);
    };
    
    img.src = uploadedImage;
  };
  
  // Apply line art transformation using enhanced Sobel edge detection and RoughJS for professional hand-drawn effect
  const applyLineArtTransform = () => {
    if (!uploadedImage || !hiddenCanvasRef.current) return;
    
    setIsProcessing(true);
    
    const img = new Image();
    img.onload = () => {
      const canvas = hiddenCanvasRef.current!;
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        setIsProcessing(false);
        return;
      }
      
      // Set canvas size
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Step 1: Prepare detection canvas for edge finding with Sobel
      const detectCanvas = document.createElement('canvas');
      detectCanvas.width = img.width;
      detectCanvas.height = img.height;
      const detectCtx = detectCanvas.getContext('2d');
      
      if (!detectCtx) {
        setIsProcessing(false);
        return;
      }
      
      // Draw original image to detection canvas
      detectCtx.drawImage(img, 0, 0);
      
      // Get image data for processing
      const imageData = detectCtx.getImageData(0, 0, detectCanvas.width, detectCanvas.height);
      const data = imageData.data;
      const width = detectCanvas.width;
      const height = detectCanvas.height;
      
      // Convert to grayscale with weighted RGB for better perception
      const grayPixels = new Uint8Array(width * height);
      for (let i = 0; i < data.length; i += 4) {
        // Use standard weights for more accurate grayscale conversion (ITU-R BT.601)
        const avg = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114);
        data[i] = data[i + 1] = data[i + 2] = avg;
        grayPixels[i / 4] = avg;
      }
      
      // Determine blur level based on line style
      let blurRadius = 0;
      switch (lineStyle) {
        case 'detailed':
          blurRadius = 1; // Minimal blur for detailed edges
          break;
        case 'minimal':
          blurRadius = 3; // More blur for smoother, less detailed edges
          break;
        default: // normal
          blurRadius = 2; // Standard blur
      }
      
      // Apply Gaussian blur approximation to reduce noise
      const blurredPixels = new Uint8Array(width * height);
      
      // First initialize with original grayscale
      blurredPixels.set(grayPixels);
      
      // Apply multi-pass box blur for better Gaussian approximation
      if (blurRadius > 0) {
        // Two-pass separable blur (horizontal + vertical) is more efficient
        for (let pass = 0; pass < 2; pass++) { // Multiple passes for better approximation
          const tempPixels = new Uint8Array(width * height);
          
          // Horizontal blur
          for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
              let sum = 0;
              let count = 0;
              
              for (let dx = -blurRadius; dx <= blurRadius; dx++) {
                const nx = Math.min(width - 1, Math.max(0, x + dx));
                const pixelIndex = y * width + nx;
                sum += blurredPixels[pixelIndex];
                count++;
              }
              
              tempPixels[y * width + x] = sum / count;
            }
          }
          
          // Vertical blur (using horizontal blur results)
          for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
              let sum = 0;
              let count = 0;
              
              for (let dy = -blurRadius; dy <= blurRadius; dy++) {
                const ny = Math.min(height - 1, Math.max(0, y + dy));
                const pixelIndex = ny * width + x;
                sum += tempPixels[pixelIndex];
                count++;
              }
              
              blurredPixels[y * width + x] = sum / count;
            }
          }
        }
      }
      
      // Adjust contrast based on style
      let contrastFactor = 1.0;
      
      switch (lineStyle) {
        case 'detailed':
          contrastFactor = 1.6; // Higher contrast for more defined edges
          break;
        case 'minimal':
          contrastFactor = 0.8; // Lower contrast for fewer edges
          break;
        default: // normal
          contrastFactor = 1.2; // Moderate contrast
      }
      
      // Create a new image buffer for edge detection
      const edgeData = new ImageData(width, height);
      const edgePixels = edgeData.data;
      
      // Fill with white background
      for (let i = 0; i < edgePixels.length; i += 4) {
        edgePixels[i] = edgePixels[i + 1] = edgePixels[i + 2] = 255;
        edgePixels[i + 3] = 255;
      }
      
      // Adjust threshold to line style and user control
      // scale lineThreshold (0-255) to a reasonable edge detection range
      const baseThreshold = lineStyle === 'detailed' ? 15 : 
                           lineStyle === 'minimal' ? 35 : 25;
      
      // Allow user control to adjust the threshold around the base value
      // Map lineThreshold (0-255) to a multiplier (0.5-1.5)
      const thresholdMultiplier = 0.5 + (lineThreshold / 255);
      const edgeThreshold = baseThreshold * thresholdMultiplier;
      
      // Create enhanced Sobel operator
      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          // Apply contrast to pixel before edge detection
          const centerPixel = blurredPixels[y * width + x];
          const adjustedPixel = Math.min(255, Math.max(0, 
            (centerPixel - 128) * contrastFactor + 128));
          
          // Store adjusted value back for Sobel
          blurredPixels[y * width + x] = adjustedPixel;
          
          // Standard Sobel operators for horizontal and vertical gradients
          const gx = 
            -1 * blurredPixels[(y-1) * width + (x-1)] +
             0 * blurredPixels[(y-1) * width + (x  )] +
             1 * blurredPixels[(y-1) * width + (x+1)] +
            -2 * blurredPixels[(y  ) * width + (x-1)] +
             0 * blurredPixels[(y  ) * width + (x  )] +
             2 * blurredPixels[(y  ) * width + (x+1)] +
            -1 * blurredPixels[(y+1) * width + (x-1)] +
             0 * blurredPixels[(y+1) * width + (x  )] +
             1 * blurredPixels[(y+1) * width + (x+1)];
             
          const gy = 
            -1 * blurredPixels[(y-1) * width + (x-1)] +
            -2 * blurredPixels[(y-1) * width + (x  )] +
            -1 * blurredPixels[(y-1) * width + (x+1)] +
             0 * blurredPixels[(y  ) * width + (x-1)] +
             0 * blurredPixels[(y  ) * width + (x  )] +
             0 * blurredPixels[(y  ) * width + (x+1)] +
             1 * blurredPixels[(y+1) * width + (x-1)] +
             2 * blurredPixels[(y+1) * width + (x  )] +
             1 * blurredPixels[(y+1) * width + (x+1)];
          
          // Calculate gradient magnitude and direction
          const magnitude = Math.sqrt(gx * gx + gy * gy);
          const angle = Math.atan2(gy, gx);
          
          // Apply threshold to determine if this is an edge
          const isEdge = magnitude > edgeThreshold;
          
          // Apply variable line thickness based on user control
          const effectiveThickness = Math.max(1, Math.round(lineThickness));
          
          if (isEdge) {
            // Apply line thickness by setting neighboring pixels
            for (let ly = -Math.floor(effectiveThickness/2); ly <= Math.floor(effectiveThickness/2); ly++) {
              for (let lx = -Math.floor(effectiveThickness/2); lx <= Math.floor(effectiveThickness/2); lx++) {
                const nx = x + lx;
                const ny = y + ly;
                
                // Ensure we're within bounds and calculate pixel index
                if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                  const idx = (ny * width + nx) * 4;
                  // Draw edge as black
                  edgePixels[idx] = edgePixels[idx + 1] = edgePixels[idx + 2] = 0;
                  edgePixels[idx + 3] = 255; // Full opacity
                }
              }
            }
          }
        }
      }
      
      // Step 2: Create RoughJS artistic enhancement on a separate canvas
      // Create a canvas for RoughJS drawing
      const roughCanvas = document.createElement('canvas');
      roughCanvas.width = width;
      roughCanvas.height = height;
      const roughCtx = roughCanvas.getContext('2d');
      
      if (!roughCtx) {
        // If RoughJS context fails, at least return the edge detection result
        ctx.putImageData(edgeData, 0, 0);
        setTransformedImage(canvas.toDataURL('image/png'));
        setIsProcessing(false);
        return;
      }
      
      // Prepare a white background
      roughCtx.fillStyle = '#ffffff';
      roughCtx.fillRect(0, 0, width, height);
      
      // Draw the edge detection result onto the RoughJS canvas
      roughCtx.putImageData(edgeData, 0, 0);
      
      // Create RoughJS generator
      const rc = rough.canvas(canvas);
      
      // Set RoughJS parameters based on line style
      const roughness = lineStyle === 'detailed' ? 0.4 : 
                        lineStyle === 'minimal' ? 1.5 : 0.8;
                        
      const bowing = lineStyle === 'detailed' ? 0.3 : 
                     lineStyle === 'minimal' ? 1.2 : 0.6;
      
      // Clear the main canvas for final output
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);
      
      // Find edge pixels to convert to RoughJS strokes
      const edgePoints = [];
      const stepSize = Math.max(1, Math.min(3, Math.ceil(width / 500))); // Adaptive step size
      
      // Scan the edge-detected image for edge pixels (black pixels)
      for (let y = 0; y < height; y += stepSize) {
        for (let x = 0; x < width; x += stepSize) {
          const idx = (y * width + x) * 4;
          if (edgePixels[idx] < 50) { // If it's a dark pixel (edge)
            edgePoints.push([x, y]);
          }
        }
      }
      
      // Only proceed with RoughJS if we have a reasonable number of edge points
      if (edgePoints.length > 0) {
        // Group edge points into continuous strokes for more natural drawing
        const strokes = [];
        const maxConnectDistance = stepSize * 2.5;
        
        // Initialize with the first edge point
        let currentStroke = [edgePoints[0]];
        let remainingPoints = edgePoints.slice(1);
        
        // Build strokes by connecting nearby points
        while (remainingPoints.length > 0) {
          const currentPoint = currentStroke[currentStroke.length - 1];
          
          // Find the closest remaining point
          let closestPointIndex = -1;
          let closestDistance = Infinity;
          
          for (let i = 0; i < remainingPoints.length; i++) {
            const point = remainingPoints[i];
            const distance = Math.sqrt(
              Math.pow(point[0] - currentPoint[0], 2) + 
              Math.pow(point[1] - currentPoint[1], 2)
            );
            
            if (distance < closestDistance) {
              closestDistance = distance;
              closestPointIndex = i;
            }
          }
          
          // If we found a close enough point, add it to the current stroke
          if (closestDistance < maxConnectDistance) {
            currentStroke.push(remainingPoints[closestPointIndex]);
            remainingPoints.splice(closestPointIndex, 1);
          } else {
            // Current stroke is complete, add it to strokes if it has enough points
            if (currentStroke.length > 2) {
              strokes.push([...currentStroke]);
            }
            
            // Start a new stroke with the first remaining point
            if (remainingPoints.length > 0) {
              currentStroke = [remainingPoints[0]];
              remainingPoints.splice(0, 1);
            } else {
              break;
            }
          }
          
          // Safety check for very long strokes
          if (currentStroke.length > 100) {
            strokes.push([...currentStroke]);
            currentStroke = [];
            if (remainingPoints.length > 0) {
              currentStroke = [remainingPoints[0]];
              remainingPoints.splice(0, 1);
            }
          }
        }
        
        // Add the final stroke if not empty
        if (currentStroke.length > 2) {
          strokes.push([...currentStroke]);
        }
        
        // Apply simplified Douglas-Peucker algorithm to reduce unnecessary points
        const simplifyStroke = (points, tolerance) => {
          if (points.length <= 2) return points;
          
          // Find the point with the maximum distance
          let maxDistance = 0;
          let maxIndex = 0;
          
          const start = points[0];
          const end = points[points.length - 1];
          
          for (let i = 1; i < points.length - 1; i++) {
            const point = points[i];
            
            // Calculate perpendicular distance from point to line
            const lineLength = Math.sqrt(
              Math.pow(end[0] - start[0], 2) + 
              Math.pow(end[1] - start[1], 2)
            );
            
            if (lineLength === 0) continue;
            
            const distance = Math.abs(
              (end[1] - start[1]) * point[0] - 
              (end[0] - start[0]) * point[1] + 
              end[0] * start[1] - 
              end[1] * start[0]
            ) / lineLength;
            
            if (distance > maxDistance) {
              maxDistance = distance;
              maxIndex = i;
            }
          }
          
          // If max distance is greater than tolerance, recursively simplify
          if (maxDistance > tolerance) {
            const left = simplifyStroke(points.slice(0, maxIndex + 1), tolerance);
            const right = simplifyStroke(points.slice(maxIndex), tolerance);
            
            // Combine results (avoiding duplicate point)
            return [...left.slice(0, -1), ...right];
          } else {
            // Return just the endpoints
            return [start, end];
          }
        };
        
        // Simplify strokes - apply simplification level based on style
        const simplifyTolerance = lineStyle === 'detailed' ? 1 : 
                                 lineStyle === 'minimal' ? 3 : 2;
        
        const simplifiedStrokes = strokes.map(stroke => 
          simplifyStroke(stroke, simplifyTolerance)
        );
        
        // Draw the simplified strokes with RoughJS
        simplifiedStrokes.forEach(stroke => {
          // For very short strokes, just draw a point
          if (stroke.length < 3) {
            const [x, y] = stroke[0];
            rc.circle(x, y, lineThickness * 1.2, {
              fill: '#000000',
              fillStyle: 'solid',
              roughness: roughness * 0.8
            });
            return;
          }
          
          // For longer strokes, use RoughJS to draw line segments with hand-drawn quality
          for (let i = 0; i < stroke.length - 1; i++) {
            const [x1, y1] = stroke[i];
            const [x2, y2] = stroke[i + 1];
            
            // Calculate segment length
            const segmentLength = Math.sqrt(
              Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
            );
            
            // Skip very short segments
            if (segmentLength < 2) continue;
            
            // Vary attributes slightly for more natural look
            const strokeWidth = lineThickness * (0.85 + Math.random() * 0.3);
            const segmentRoughness = roughness * (0.9 + Math.random() * 0.2);
            const segmentBowing = bowing * (0.95 + Math.random() * 0.1);
            
            // Draw the line segment with RoughJS
            rc.line(x1, y1, x2, y2, {
              stroke: '#000000',
              strokeWidth: strokeWidth,
              roughness: segmentRoughness,
              bowing: segmentBowing
            });
          }
        });
      } else {
        // If no edge points were found, just use the edge data directly
        ctx.putImageData(edgeData, 0, 0);
      }
      
      // Get the result
      setTransformedImage(canvas.toDataURL('image/png'));
      setIsProcessing(false);
    };
    
    img.src = uploadedImage;
  };
  
  // Apply sketch transformation combining ColorDodge technique with RoughJS for realistic hand-drawn effect
  const applySketchTransform = () => {
    if (!uploadedImage || !hiddenCanvasRef.current) return;
    
    setIsProcessing(true);
    
    const img = new Image();
    img.onload = () => {
      const canvas = hiddenCanvasRef.current!;
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        setIsProcessing(false);
        return;
      }
      
      // Set canvas size
      canvas.width = img.width;
      canvas.height = img.height;
      
      // STEP 1: Color Dodge Blend technique for realistic sketch base
      // Create multiple canvas layers for processing
      const grayscaleCanvas = document.createElement('canvas');
      const blurCanvas = document.createElement('canvas');
      const colorDodgeCanvas = document.createElement('canvas');
      
      [grayscaleCanvas, blurCanvas, colorDodgeCanvas].forEach(c => {
        c.width = canvas.width;
        c.height = canvas.height;
      });
      
      const grayscaleCtx = grayscaleCanvas.getContext('2d');
      const blurCtx = blurCanvas.getContext('2d');
      const colorDodgeCtx = colorDodgeCanvas.getContext('2d');
      
      if (!grayscaleCtx || !blurCtx || !colorDodgeCtx) {
        setIsProcessing(false);
        return;
      }
      
      // Step 1.1: Convert to grayscale with weighted RGB
      grayscaleCtx.drawImage(img, 0, 0);
      const grayscaleData = grayscaleCtx.getImageData(0, 0, canvas.width, canvas.height);
      
      // Apply weighted grayscale conversion for better perceptual accuracy
      for (let i = 0; i < grayscaleData.data.length; i += 4) {
        const avg = (grayscaleData.data[i] * 0.299 + grayscaleData.data[i+1] * 0.587 + grayscaleData.data[i+2] * 0.114);
        grayscaleData.data[i] = grayscaleData.data[i+1] = grayscaleData.data[i+2] = avg;
      }
      grayscaleCtx.putImageData(grayscaleData, 0, 0);
      
      // Step 1.2: Create a blurred inverted version for color dodge
      blurCtx.drawImage(grayscaleCanvas, 0, 0);
      
      // Apply Gaussian blur approximation (multi-pass box blur)
      // Simulate Gaussian blur with multiple passes of box blur
      const blurRadius = pencilType === 'charcoal' ? 3 : 2;
      const blurPasses = 3; // More passes = closer to true Gaussian
      
      for (let pass = 0; pass < blurPasses; pass++) {
        const blurData = blurCtx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = blurData.data;
        const tempData = new Uint8ClampedArray(pixels.length);
        
        // Horizontal blur pass
        for (let y = 0; y < canvas.height; y++) {
          for (let x = 0; x < canvas.width; x++) {
            let r = 0, g = 0, b = 0, a = 0, count = 0;
            
            // Sample horizontally
            for (let i = -blurRadius; i <= blurRadius; i++) {
              const x2 = Math.min(canvas.width - 1, Math.max(0, x + i));
              const index = (y * canvas.width + x2) * 4;
              r += pixels[index];
              g += pixels[index + 1];
              b += pixels[index + 2];
              a += pixels[index + 3];
              count++;
            }
            
            // Write to temp buffer
            const outIndex = (y * canvas.width + x) * 4;
            tempData[outIndex] = r / count;
            tempData[outIndex + 1] = g / count;
            tempData[outIndex + 2] = b / count;
            tempData[outIndex + 3] = a / count;
          }
        }
        
        // Vertical blur pass (using temp data)
        for (let y = 0; y < canvas.height; y++) {
          for (let x = 0; x < canvas.width; x++) {
            let r = 0, g = 0, b = 0, a = 0, count = 0;
            
            // Sample vertically
            for (let j = -blurRadius; j <= blurRadius; j++) {
              const y2 = Math.min(canvas.height - 1, Math.max(0, y + j));
              const index = (y2 * canvas.width + x) * 4;
              r += tempData[index];
              g += tempData[index + 1];
              b += tempData[index + 2];
              a += tempData[index + 3];
              count++;
            }
            
            // Write final result
            const outIndex = (y * canvas.width + x) * 4;
            pixels[outIndex] = r / count;
            pixels[outIndex + 1] = g / count;
            pixels[outIndex + 2] = b / count;
            pixels[outIndex + 3] = a / count;
          }
        }
        
        blurCtx.putImageData(blurData, 0, 0);
      }
      
      // Invert the blurred image
      const invertedData = blurCtx.getImageData(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < invertedData.data.length; i += 4) {
        invertedData.data[i] = 255 - invertedData.data[i];
        invertedData.data[i+1] = 255 - invertedData.data[i+1];
        invertedData.data[i+2] = 255 - invertedData.data[i+2];
      }
      blurCtx.putImageData(invertedData, 0, 0);
      
      // Step 1.3: Apply color dodge blend between grayscale and inverted blur
      colorDodgeCtx.drawImage(grayscaleCanvas, 0, 0);
      colorDodgeCtx.globalCompositeOperation = 'color-dodge';
      colorDodgeCtx.drawImage(blurCanvas, 0, 0);
      colorDodgeCtx.globalCompositeOperation = 'source-over'; // Reset blend mode
      
      // Adjust intensity and contrast based on sketch intensity setting
      const dodgeData = colorDodgeCtx.getImageData(0, 0, canvas.width, canvas.height);
      const contrast = pencilType === 'charcoal' ? 1.0 + (shadingLevel / 100) : 0.9 + (shadingLevel / 120);
      const intensity = sketchIntensity / 100;
      
      for (let i = 0; i < dodgeData.data.length; i += 4) {
        // Apply intensity
        let val = dodgeData.data[i]; // All channels are the same (grayscale)
        
        // Apply contrast 
        val = ((val / 255 - 0.5) * contrast + 0.5) * 255;
        
        // Adjust intensity (closer to original or more sketchy)
        const originalGray = grayscaleData.data[i];
        val = originalGray * (1 - intensity) + val * intensity;
        
        // Ensure proper range
        val = Math.max(0, Math.min(255, val));
        
        dodgeData.data[i] = dodgeData.data[i+1] = dodgeData.data[i+2] = val;
      }
      colorDodgeCtx.putImageData(dodgeData, 0, 0);
      
      // Step 2: Create RoughJS artistic effect
      // Clear the main canvas and start with the color dodge blend result
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(colorDodgeCanvas, 0, 0);
      
      // Create detection canvas for tone analysis
      const detectCanvas = document.createElement('canvas');
      detectCanvas.width = canvas.width;
      detectCanvas.height = canvas.height;
      const detectCtx = detectCanvas.getContext('2d');
      
      if (!detectCtx) {
        // If detection context fails, at least return the color dodge result
        setTransformedImage(colorDodgeCanvas.toDataURL('image/png'));
        setIsProcessing(false);
        return;
      }
      
      // Copy color dodge result to detection canvas
      detectCtx.drawImage(colorDodgeCanvas, 0, 0);
      
      // Create RoughJS generator for hand-drawn effect
      const rc = rough.canvas(canvas);
      
      // Set up pencil style based on settings
      const pencilColor = pencilType === 'charcoal' ? '#101010' : '#303030';
      const sketchRoughness = pencilType === 'charcoal' ? 1.8 : 1.2;
      const strokeWidthBase = pencilType === 'charcoal' ? 1.5 : 1.0;
      const strokeMultiplier = sketchIntensity / 50; // Convert 0-100 to 0-2 range
      
      // Analyze image into tonal regions
      const tileSize = Math.max(5, Math.floor(canvas.width / 100));
      const darkAreas = [];
      const midtoneAreas = [];
      const lightAreas = [];
      
      // Identify regions by tone
      for (let y = 0; y < canvas.height; y += tileSize) {
        for (let x = 0; x < canvas.width; x += tileSize) {
          const tileWidth = Math.min(tileSize, canvas.width - x);
          const tileHeight = Math.min(tileSize, canvas.height - y);
          
          const tileData = detectCtx.getImageData(x, y, tileWidth, tileHeight).data;
          let tileSum = 0;
          let pixelCount = 0;
          
          for (let i = 0; i < tileData.length; i += 4) {
            tileSum += tileData[i]; // Grayscale, so just use red channel
            pixelCount++;
          }
          
          const avgTone = tileSum / pixelCount;
          
          // Categorize by tone for hatching effect
          if (avgTone < 85) {
            darkAreas.push({ x, y, width: tileWidth, height: tileHeight });
          } else if (avgTone < 170) {
            midtoneAreas.push({ x, y, width: tileWidth, height: tileHeight });
          } else {
            lightAreas.push({ x, y, width: tileWidth, height: tileHeight });
          }
        }
      }
      
      // Calculate hatching density based on intensity and shadingLevel
      const hatchDensity = (sketchIntensity / 100) * (shadingLevel / 50);
      
      // Apply RoughJS hatching to enhance the sketch effect
      // Stronger hatching for darker areas
      const darkHatchingCount = Math.floor(darkAreas.length * hatchDensity * 0.15);
      for (let i = 0; i < darkHatchingCount; i++) {
        const area = darkAreas[Math.floor(Math.random() * darkAreas.length)];
        const x = area.x + Math.random() * area.width;
        const y = area.y + Math.random() * area.height;
        
        // Cross-hatching for dark areas
        const len = tileSize * (0.8 + Math.random() * 0.4);
        
        rc.line(
          x, y,
          x + len * Math.cos(Math.PI/4), y + len * Math.sin(Math.PI/4),
          {
            stroke: pencilColor,
            strokeWidth: strokeWidthBase * strokeMultiplier * 1.2,
            roughness: sketchRoughness * 0.8,
            opacity: 0.5
          }
        );
        
        if (Math.random() > 0.3) { // Only some get cross-hatching
          rc.line(
            x, y,
            x + len * Math.cos(-Math.PI/4), y + len * Math.sin(-Math.PI/4),
            {
              stroke: pencilColor,
              strokeWidth: strokeWidthBase * strokeMultiplier * 1.1,
              roughness: sketchRoughness * 0.8,
              opacity: 0.4
            }
          );
        }
      }
      
      // Some hatching for midtones
      const midHatchingCount = Math.floor(midtoneAreas.length * hatchDensity * 0.1);
      for (let i = 0; i < midHatchingCount; i++) {
        const area = midtoneAreas[Math.floor(Math.random() * midtoneAreas.length)];
        const x = area.x + Math.random() * area.width;
        const y = area.y + Math.random() * area.height;
        
        // Single-direction hatching for midtones
        const len = tileSize * (0.6 + Math.random() * 0.3);
        const angle = Math.PI/4; // 45 degrees
        
        rc.line(
          x, y,
          x + len * Math.cos(angle), y + len * Math.sin(angle),
          {
            stroke: pencilColor,
            strokeWidth: strokeWidthBase * strokeMultiplier * 0.8,
            roughness: sketchRoughness,
            opacity: 0.3
          }
        );
      }
      
      // If it's charcoal, add some smudging effect
      if (pencilType === 'charcoal' && shadingLevel > 30) {
        const smudgeCount = Math.floor((darkAreas.length + midtoneAreas.length) * 0.05 * (shadingLevel / 100));
        
        for (let i = 0; i < smudgeCount; i++) {
          const areaPool = [...darkAreas, ...midtoneAreas];
          const area = areaPool[Math.floor(Math.random() * areaPool.length)];
          
          const x = area.x + Math.random() * area.width;
          const y = area.y + Math.random() * area.height;
          const smudgeWidth = tileSize * (1 + Math.random() * 2);
          const smudgeHeight = tileSize * (0.2 + Math.random() * 0.5);
          
          rc.rectangle(x, y, smudgeWidth, smudgeHeight, {
            fill: pencilColor,
            fillStyle: 'solid',
            stroke: 'none',
            roughness: 3,
            fillWeight: 0.1,
            opacity: 0.08 + (Math.random() * 0.08)
          });
        }
      }
      
      // Get result
      setTransformedImage(canvas.toDataURL('image/png'));
      setIsProcessing(false);
    };
    
    img.src = uploadedImage;
  };
  
  // Handle transform button click
  const handleTransform = useCallback(() => {
    if (isProcessing || !uploadedImage) return;
    
    switch (activeTab) {
      case 'grid':
        applyGridTransform();
        break;
      case 'lineart':
        applyLineArtTransform();
        break;
      case 'sketch':
        applySketchTransform();
        break;
    }
  }, [activeTab, isProcessing, uploadedImage, applyGridTransform, applyLineArtTransform, applySketchTransform]);
  
  // Create direct handlers for immediate updates when user changes settings
  const handleGridSizeChange = useCallback((values: number[]) => {
    setGridSize(values[0]);
    if (uploadedImage && activeTab === 'grid') {
      // Skip setting isProcessing to true to avoid loading indicator for real-time updates
      requestAnimationFrame(() => {
        applyGridTransform();
      });
    }
  }, [uploadedImage, activeTab, applyGridTransform]);
  
  const handleGridOpacityChange = useCallback((values: number[]) => {
    setGridOpacity(values[0]);
    if (uploadedImage && activeTab === 'grid') {
      requestAnimationFrame(() => {
        applyGridTransform();
      });
    }
  }, [uploadedImage, activeTab, applyGridTransform]);
  
  const handleGridColorChange = useCallback((color: string) => {
    setGridColor(color);
    if (uploadedImage && activeTab === 'grid') {
      requestAnimationFrame(() => {
        applyGridTransform();
      });
    }
  }, [uploadedImage, activeTab, applyGridTransform]);
  
  const handleGridStyleChange = useCallback((style: string) => {
    setGridStyle(style);
    if (uploadedImage && activeTab === 'grid') {
      requestAnimationFrame(() => {
        applyGridTransform();
      });
    }
  }, [uploadedImage, activeTab, applyGridTransform]);
  
  // Line art handlers
  const handleLineThresholdChange = useCallback((values: number[]) => {
    setLineThreshold(values[0]);
    if (uploadedImage && activeTab === 'lineart') {
      requestAnimationFrame(() => {
        applyLineArtTransform();
      });
    }
  }, [uploadedImage, activeTab, applyLineArtTransform]);
  
  const handleLineThicknessChange = useCallback((values: number[]) => {
    setLineThickness(values[0]);
    if (uploadedImage && activeTab === 'lineart') {
      requestAnimationFrame(() => {
        applyLineArtTransform();
      });
    }
  }, [uploadedImage, activeTab, applyLineArtTransform]);
  
  const handleLineStyleChange = useCallback((style: string) => {
    setLineStyle(style);
    if (uploadedImage && activeTab === 'lineart') {
      requestAnimationFrame(() => {
        applyLineArtTransform();
      });
    }
  }, [uploadedImage, activeTab, applyLineArtTransform]);
  
  // Sketch handlers
  const handleSketchIntensityChange = useCallback((values: number[]) => {
    setSketchIntensity(values[0]);
    if (uploadedImage && activeTab === 'sketch') {
      requestAnimationFrame(() => {
        applySketchTransform();
      });
    }
  }, [uploadedImage, activeTab, applySketchTransform]);
  
  const handlePencilTypeChange = useCallback((type: string) => {
    setPencilType(type);
    if (uploadedImage && activeTab === 'sketch') {
      requestAnimationFrame(() => {
        applySketchTransform();
      });
    }
  }, [uploadedImage, activeTab, applySketchTransform]);
  
  const handleShadingLevelChange = useCallback((values: number[]) => {
    setShadingLevel(values[0]);
    if (uploadedImage && activeTab === 'sketch') {
      requestAnimationFrame(() => {
        applySketchTransform();
      });
    }
  }, [uploadedImage, activeTab, applySketchTransform]);
  
  // Initial transformation when tab changes
  useEffect(() => {
    if (uploadedImage && !isProcessing) {
      handleTransform();
    }
  }, [activeTab, uploadedImage, isProcessing, handleTransform]);
  
  return (
    <section className="bg-gradient-to-br from-primary to-primary-700 text-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Photo Grid for Artists
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-white/90 max-w-3xl mx-auto">
            Transform your images into grid overlays, line art, and sketches. Perfect for artists looking to develop their drawing skills or create unique art.
          </p>
        </div>
        
        <div className="bg-white text-gray-900 rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Upload/Preview Section */}
            <div className="p-6 border-r border-gray-100">
              {!uploadedImage ? (
                <div 
                  {...getRootProps()} 
                  className={`
                    border-2 border-dashed rounded-xl p-8 text-center h-80 flex flex-col items-center justify-center cursor-pointer
                    ${isDragActive ? 'border-primary bg-primary/5' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'}
                  `}
                >
                  <input {...getInputProps()} />
                  <ImageIcon className="h-16 w-16 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Upload your image</h3>
                  <p className="text-gray-500 mb-4">
                    {isDragActive
                      ? "Drop the image here..."
                      : "Drag and drop an image, or click to browse"
                    }
                  </p>
                  <Button>
                    <Upload className="mr-2 h-4 w-4" />
                    Select Image
                  </Button>
                  <p className="text-xs text-gray-500 mt-4">Supported formats: JPG, PNG (Max 10MB)</p>
                </div>
              ) : (
                <div className="h-80 flex flex-col">
                  <div className="flex-1 relative rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src={transformedImage || uploadedImage} 
                      alt="Preview" 
                      className="w-full h-full object-contain"
                    />
                    {isProcessing && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between mt-4">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setUploadedImage(null);
                        setTransformedImage(null);
                      }}
                    >
                      Upload New Image
                    </Button>
                    {transformedImage && (
                      <Button onClick={() => {
                        const link = document.createElement("a");
                        link.href = transformedImage;
                        link.download = `gridart-${activeTab}.png`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}>
                        Download Image
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            {/* Transform Controls Section */}
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">Transformation Settings</h3>
              
              {uploadedImage && (
                <>
                  <Tabs 
                    defaultValue="grid" 
                    value={activeTab} 
                    onValueChange={setActiveTab}
                    className="mb-6"
                  >
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="grid">Grid</TabsTrigger>
                      <TabsTrigger value="lineart">Line Art</TabsTrigger>
                      <TabsTrigger value="sketch">Sketch</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="grid" className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <Label>Grid Size</Label>
                          <span className="text-sm text-primary">{gridSize}px</span>
                        </div>
                        <Slider 
                          min={5} 
                          max={200} 
                          step={5}
                          value={[gridSize]} 
                          onValueChange={handleGridSizeChange}
                        />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <Label>Opacity</Label>
                          <span className="text-sm text-primary">{gridOpacity}%</span>
                        </div>
                        <Slider 
                          min={10} 
                          max={100} 
                          step={1}
                          value={[gridOpacity]} 
                          onValueChange={handleGridOpacityChange}
                        />
                      </div>
                      
                      <div>
                        <Label className="block mb-2">Grid Color</Label>
                        <div className="flex space-x-2">
                          <button 
                            className={`w-8 h-8 rounded-full bg-black ${gridColor === '#000000' ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                            onClick={() => handleGridColorChange('#000000')}
                            aria-label="Black grid color"
                          ></button>
                          <button 
                            className={`w-8 h-8 rounded-full bg-blue-500 ${gridColor === '#3b82f6' ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                            onClick={() => handleGridColorChange('#3b82f6')}
                            aria-label="Blue grid color"
                          ></button>
                          <button 
                            className={`w-8 h-8 rounded-full bg-red-500 ${gridColor === '#ef4444' ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                            onClick={() => handleGridColorChange('#ef4444')}
                            aria-label="Red grid color"
                          ></button>
                          <button 
                            className={`w-8 h-8 rounded-full bg-green-500 ${gridColor === '#22c55e' ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                            onClick={() => handleGridColorChange('#22c55e')}
                            aria-label="Green grid color"
                          ></button>
                        </div>
                      </div>
                      
                      <div>
                        <Label className="block mb-2">Grid Style</Label>
                        <div className="grid grid-cols-3 gap-2">
                          <button 
                            className={`p-2 rounded border text-center text-sm ${gridStyle === 'lines' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                            onClick={() => handleGridStyleChange('lines')}
                          >
                            Lines
                          </button>
                          <button 
                            className={`p-2 rounded border text-center text-sm ${gridStyle === 'dots' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                            onClick={() => handleGridStyleChange('dots')}
                          >
                            Dots
                          </button>
                          <button 
                            className={`p-2 rounded border text-center text-sm ${gridStyle === 'dashed' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                            onClick={() => handleGridStyleChange('dashed')}
                          >
                            Dashed
                          </button>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="lineart" className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <Label>Detail Threshold</Label>
                          <span className="text-sm text-primary">{lineThreshold}</span>
                        </div>
                        <Slider 
                          min={50} 
                          max={200} 
                          step={1}
                          value={[lineThreshold]} 
                          onValueChange={handleLineThresholdChange}
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>More Details</span>
                          <span>Less Details</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <Label>Line Thickness</Label>
                          <span className="text-sm text-primary">{lineThickness.toFixed(1)}</span>
                        </div>
                        <Slider 
                          min={0.5} 
                          max={3} 
                          step={0.1}
                          value={[lineThickness]} 
                          onValueChange={handleLineThicknessChange}
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Thin</span>
                          <span>Thick</span>
                        </div>
                      </div>
                      
                      <div>
                        <Label className="block mb-2">Line Art Style</Label>
                        <div className="grid grid-cols-3 gap-2">
                          <button 
                            className={`p-2 rounded border text-center text-sm ${lineStyle === 'normal' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                            onClick={() => handleLineStyleChange('normal')}
                          >
                            Normal
                          </button>
                          <button 
                            className={`p-2 rounded border text-center text-sm ${lineStyle === 'detailed' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                            onClick={() => handleLineStyleChange('detailed')}
                          >
                            Detailed
                          </button>
                          <button 
                            className={`p-2 rounded border text-center text-sm ${lineStyle === 'minimal' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                            onClick={() => handleLineStyleChange('minimal')}
                          >
                            Minimal
                          </button>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="sketch" className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <Label>Sketch Intensity</Label>
                          <span className="text-sm text-primary">{sketchIntensity}%</span>
                        </div>
                        <Slider 
                          min={10} 
                          max={100} 
                          step={1}
                          value={[sketchIntensity]} 
                          onValueChange={handleSketchIntensityChange}
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Subtle</span>
                          <span>Intense</span>
                        </div>
                      </div>
                      
                      <div>
                        <Label className="block mb-2">Pencil Type</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <button 
                            className={`p-2 rounded border text-center text-sm ${pencilType === 'graphite' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                            onClick={() => handlePencilTypeChange('graphite')}
                          >
                            Graphite
                          </button>
                          <button 
                            className={`p-2 rounded border text-center text-sm ${pencilType === 'charcoal' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                            onClick={() => handlePencilTypeChange('charcoal')}
                          >
                            Charcoal
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <Label>Shading Level</Label>
                          <span className="text-sm text-primary">{shadingLevel}%</span>
                        </div>
                        <Slider 
                          min={0} 
                          max={100} 
                          step={1}
                          value={[shadingLevel]} 
                          onValueChange={handleShadingLevelChange}
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Light</span>
                          <span>Heavy</span>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  {/* Transformations happen automatically, but we keep the button as an option */}
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-sm text-gray-500">
                      {isProcessing ? 'Processing...' : 'Adjustments apply automatically'}
                    </p>
                    <Button 
                      onClick={handleTransform}
                      disabled={isProcessing}
                      size="sm"
                    >
                      Apply Manually
                    </Button>
                  </div>
                </>
              )}
              
              {!uploadedImage && (
                <Card className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                  <div className="flex flex-col items-center text-center p-4">
                    <Check className="h-12 w-12 text-emerald-500 mb-4" />
                    <h4 className="text-lg font-medium mb-2">Free to Use Online</h4>
                    <p className="text-gray-600 mb-4">Upload an image and apply transformations instantly, no sign-up or installation required</p>
                    <ul className="text-left space-y-2 w-full mb-4">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Create precise grid references for your artwork</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Convert photos to line art with adjustable styles</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Transform images into sketch-style drawings</span>
                      </li>
                    </ul>
                    <Button
                      onClick={() => document.querySelector('input[type="file"]')?.click()}
                      className="mt-2"
                    >
                      Upload an Image Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}