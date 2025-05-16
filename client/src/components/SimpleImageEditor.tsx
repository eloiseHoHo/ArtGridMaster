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
  
  // Apply line art transformation using RoughJS for hand-drawn effect
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
      
      // Step 1: Prepare detection canvas for edge finding
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
      
      // Convert to grayscale with weighted RGB for better perception
      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114);
        data[i] = data[i + 1] = data[i + 2] = avg;
      }
      
      // Apply contrast adjustment based on style
      let contrastFactor = 1;
      let brightnessFactor = 0;
      let thresholdValue = lineThreshold;
      
      switch (lineStyle) {
        case 'detailed':
          contrastFactor = 1.8;
          brightnessFactor = 15;
          thresholdValue = Math.min(lineThreshold, 120);
          break;
        case 'minimal':
          contrastFactor = 0.8;
          brightnessFactor = 40;
          thresholdValue = Math.max(lineThreshold, 150);
          break;
        default: // normal
          contrastFactor = 1.4;
          brightnessFactor = 20;
          break;
      }
      
      // Apply threshold to create a binary image for edge detection
      for (let i = 0; i < data.length; i += 4) {
        // Apply contrast and brightness
        data[i] = Math.min(255, Math.max(0, 
          (data[i] - 128) * contrastFactor + 128 + brightnessFactor));
        
        // Apply adaptive threshold
        let adaptiveThreshold = thresholdValue;
        if (data[i] > 200) adaptiveThreshold *= 1.1;
        if (data[i] < 60) adaptiveThreshold *= 0.9;
        
        // Apply threshold
        data[i] = data[i] < adaptiveThreshold ? 0 : 255;
        
        // Copy to all channels
        data[i + 1] = data[i + 2] = data[i];
      }
      
      // Put processed data back to detection canvas
      detectCtx.putImageData(imageData, 0, 0);
      
      // Step 2: Use RoughJS to create hand-drawn line art
      
      // Clear the main canvas
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Create RoughJS generator
      const rc = rough.canvas(canvas);
      
      // Parameters adjustment based on line style
      const roughness = lineStyle === 'detailed' ? 0.5 : 
                      lineStyle === 'minimal' ? 1.5 : 1.0;
                      
      const bowing = lineStyle === 'detailed' ? 0.5 : 
                    lineStyle === 'minimal' ? 1.5 : 1.0;
      
      // Calculate step size based on image size and desired detail level
      // Smaller values mean more detail but slower processing
      const baseStep = Math.max(2, Math.min(10, Math.floor(canvas.width / 400)));
      const stepX = baseStep;
      const stepY = baseStep;
      
      // Points array to store detected edge points
      const edgePoints = [];
      
      // Edge detection - find transitions between black and white
      for (let y = 0; y < canvas.height - stepY; y += stepY) {
        for (let x = 0; x < canvas.width - stepX; x += stepX) {
          // Sample current pixel
          const pixelData = detectCtx.getImageData(x, y, 1, 1).data;
          
          // Sample pixels in different directions
          const rightPixel = detectCtx.getImageData(x + stepX, y, 1, 1).data;
          const downPixel = detectCtx.getImageData(x, y + stepY, 1, 1).data;
          
          // Check for edges (transitions between black and white)
          const isCurrentDark = pixelData[0] < 128;
          const isRightDark = rightPixel[0] < 128;
          const isDownDark = downPixel[0] < 128;
          
          // If we found an edge in either direction
          if ((isCurrentDark !== isRightDark) || (isCurrentDark !== isDownDark)) {
            edgePoints.push([x, y]);
          }
        }
      }
      
      // For hand-drawn effect, we'll convert edge points to strokes
      const strokes = [];
      const maxPoints = 5000; // Limit points to prevent performance issues
      
      // If we have too many points, sample them
      const sampleRate = Math.max(1, Math.floor(edgePoints.length / maxPoints));
      
      // Group nearby points into strokes
      let currentStroke = [];
      let lastPoint = null;
      
      for (let i = 0; i < edgePoints.length; i += sampleRate) {
        const point = edgePoints[i];
        
        if (lastPoint) {
          // Calculate distance between points
          const dist = Math.sqrt(
            Math.pow(point[0] - lastPoint[0], 2) + 
            Math.pow(point[1] - lastPoint[1], 2)
          );
          
          // If points are close enough, add to current stroke
          if (dist < stepX * 3) {
            currentStroke.push(point);
          } else {
            // Start a new stroke if this point is far from the last one
            if (currentStroke.length > 1) {
              strokes.push([...currentStroke]);
            }
            currentStroke = [point];
          }
        } else {
          currentStroke.push(point);
        }
        
        lastPoint = point;
      }
      
      // Add the last stroke
      if (currentStroke.length > 1) {
        strokes.push([...currentStroke]);
      }
      
      // Draw strokes with RoughJS
      strokes.forEach(stroke => {
        // For very short strokes, draw as points
        if (stroke.length < 3) {
          const [x, y] = stroke[0];
          rc.circle(x, y, lineThickness * 2, {
            fill: '#000',
            fillStyle: 'solid',
            roughness: roughness
          });
          return;
        }
        
        // For longer strokes, draw as connected path
        // We'll simplify by connecting every other point
        const simplifiedStroke = stroke.filter((_, i) => i % 2 === 0 || i === stroke.length - 1);
        
        // Build path points
        const pathData = [];
        for (let i = 0; i < simplifiedStroke.length - 1; i++) {
          const [x1, y1] = simplifiedStroke[i];
          const [x2, y2] = simplifiedStroke[i + 1];
          
          // Vary thickness slightly for more natural look
          const strokeWidth = lineThickness * (0.8 + Math.random() * 0.4);
          
          // Draw line segment
          rc.line(x1, y1, x2, y2, {
            roughness: roughness * (0.9 + Math.random() * 0.2),
            strokeWidth: strokeWidth,
            bowing: bowing * (0.9 + Math.random() * 0.2)
          });
        }
      });
      
      // Get result
      setTransformedImage(canvas.toDataURL('image/png'));
      setIsProcessing(false);
    };
    
    img.src = uploadedImage;
  };
  
  // Apply sketch transformation using RoughJS for hand-drawn artistic effect
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
      
      // Step 1: Create detection canvas for edge and tone analysis
      const detectCanvas = document.createElement('canvas');
      detectCanvas.width = canvas.width;
      detectCanvas.height = canvas.height;
      const detectCtx = detectCanvas.getContext('2d');
      
      if (!detectCtx) {
        setIsProcessing(false);
        return;
      }
      
      // Draw original image to detection canvas
      detectCtx.drawImage(img, 0, 0);
      
      // Get image data for analysis
      const imageData = detectCtx.getImageData(0, 0, detectCanvas.width, detectCanvas.height);
      const data = imageData.data;
      
      // Convert to grayscale with weighted RGB for better perception
      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114);
        data[i] = data[i + 1] = data[i + 2] = avg;
      }
      
      // Set parameters based on pencil type
      const contrast = pencilType === 'charcoal' 
        ? 1.0 + (shadingLevel / 100) 
        : 0.9 + (shadingLevel / 120);
      
      const brightness = pencilType === 'charcoal' 
        ? 1.2 - (shadingLevel / 150) 
        : 1.3 - (shadingLevel / 200);
      
      // Apply contrast and brightness for better edge detection
      for (let i = 0; i < data.length; i += 4) {
        data[i] = Math.min(255, Math.max(0, 
          (data[i] - 128) * contrast + 128 + (brightness * 10)));
        data[i + 1] = data[i + 2] = data[i];
      }
      
      // Put adjusted data back for edge detection
      detectCtx.putImageData(imageData, 0, 0);
      
      // Step 2: Create RoughJS sketch on main canvas
      
      // Clear the main canvas
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Create RoughJS generator
      const rc = rough.canvas(canvas);
      
      // Set up pencil style based on settings
      const pencilColor = pencilType === 'charcoal' ? '#101010' : '#303030';
      const sketchRoughness = pencilType === 'charcoal' ? 1.8 : 1.2;
      const strokeWidthBase = pencilType === 'charcoal' ? 1.5 : 1.0;
      const strokeMultiplier = sketchIntensity / 50; // Convert 0-100 to 0-2 range
      
      // Set step size for scanning the image
      // Higher resolution (smaller step) for more detailed images
      const detailLevel = Math.max(2, Math.min(8, Math.floor(canvas.width / 500)));
      
      // Calculate hatching density based on intensity and shadingLevel
      const hatchDensity = (sketchIntensity / 100) * (shadingLevel / 50);
      
      // Track areas for hatching based on tone
      const darkAreas = [];
      const midtoneAreas = [];
      const lightAreas = [];
      
      // Simplify image into tonal regions (dark, midtone, light)
      const tileSize = Math.max(5, Math.floor(canvas.width / 100));
      
      for (let y = 0; y < canvas.height; y += tileSize) {
        for (let x = 0; x < canvas.width; x += tileSize) {
          // Sample this region to get average tone
          const tileWidth = Math.min(tileSize, canvas.width - x);
          const tileHeight = Math.min(tileSize, canvas.height - y);
          
          const tileData = detectCtx.getImageData(x, y, tileWidth, tileHeight).data;
          let tileSum = 0;
          let pixelCount = 0;
          
          // Calculate average brightness for this tile
          for (let i = 0; i < tileData.length; i += 4) {
            tileSum += tileData[i];
            pixelCount++;
          }
          
          const avgTone = tileSum / pixelCount;
          
          // Categorize by tone
          if (avgTone < 85) {
            darkAreas.push({ x, y, width: tileWidth, height: tileHeight });
          } else if (avgTone < 170) {
            midtoneAreas.push({ x, y, width: tileWidth, height: tileHeight });
          } else {
            lightAreas.push({ x, y, width: tileWidth, height: tileHeight });
          }
        }
      }
      
      // Find edges for detailed outline drawing
      const edges = [];
      const edgeThreshold = 30;
      
      for (let y = detailLevel; y < canvas.height - detailLevel; y += detailLevel) {
        for (let x = detailLevel; x < canvas.width - detailLevel; x += detailLevel) {
          // Get current pixel and surrounding pixels
          const currentPixel = detectCtx.getImageData(x, y, 1, 1).data[0];
          const rightPixel = detectCtx.getImageData(x + detailLevel, y, 1, 1).data[0];
          const bottomPixel = detectCtx.getImageData(x, y + detailLevel, 1, 1).data[0];
          
          // Check for edges (significant difference in brightness)
          if (Math.abs(currentPixel - rightPixel) > edgeThreshold || 
              Math.abs(currentPixel - bottomPixel) > edgeThreshold) {
            edges.push([x, y]);
          }
        }
      }
      
      // Sketch contour lines based on edges with RoughJS
      edges.forEach(([x, y], i) => {
        // Only draw a portion of edges for better performance and more natural look
        if (i % Math.max(1, Math.floor(edges.length / 2000)) === 0) {
          
          // Find a nearby edge to connect to
          let nearestEdge = null;
          let minDistance = detailLevel * 3;
          
          for (let j = 0; j < edges.length; j++) {
            if (i !== j) {
              const [nx, ny] = edges[j];
              const distance = Math.sqrt(Math.pow(x - nx, 2) + Math.pow(y - ny, 2));
              
              if (distance < minDistance) {
                minDistance = distance;
                nearestEdge = [nx, ny];
              }
            }
          }
          
          // Draw the line connecting edges
          if (nearestEdge) {
            const strokeWidth = strokeWidthBase * strokeMultiplier * (0.5 + Math.random() * 0.5);
            const opacity = 0.7 + (Math.random() * 0.3);
            
            rc.line(x, y, nearestEdge[0], nearestEdge[1], {
              stroke: pencilColor,
              strokeWidth: strokeWidth,
              roughness: sketchRoughness * (0.8 + Math.random() * 0.4),
              bowing: 1 + Math.random(),
              opacity: opacity
            });
          } else {
            // Draw a small line in a random direction
            const angleRad = Math.random() * Math.PI * 2;
            const length = detailLevel * (0.5 + Math.random() * 1.5);
            const endX = x + Math.cos(angleRad) * length;
            const endY = y + Math.sin(angleRad) * length;
            
            rc.line(x, y, endX, endY, {
              stroke: pencilColor,
              strokeWidth: strokeWidthBase * strokeMultiplier * 0.8,
              roughness: sketchRoughness,
              opacity: 0.6
            });
          }
        }
      });
      
      // Draw hatching in dark areas (densest)
      const darkHatchingCount = Math.floor(darkAreas.length * hatchDensity * 0.3);
      for (let i = 0; i < darkHatchingCount; i++) {
        const area = darkAreas[Math.floor(Math.random() * darkAreas.length)];
        const x = area.x + Math.random() * area.width;
        const y = area.y + Math.random() * area.height;
        
        // For dark areas, do cross-hatching
        const len = tileSize * (0.8 + Math.random() * 0.4);
        
        // Direction 1
        rc.line(
          x, y,
          x + len * Math.cos(Math.PI/4), y + len * Math.sin(Math.PI/4),
          {
            stroke: pencilColor,
            strokeWidth: strokeWidthBase * strokeMultiplier * 1.2,
            roughness: sketchRoughness * 0.8,
            opacity: 0.8
          }
        );
        
        // Direction 2 (perpendicular)
        rc.line(
          x, y,
          x + len * Math.cos(-Math.PI/4), y + len * Math.sin(-Math.PI/4),
          {
            stroke: pencilColor,
            strokeWidth: strokeWidthBase * strokeMultiplier * 1.1,
            roughness: sketchRoughness * 0.8,
            opacity: 0.7
          }
        );
      }
      
      // Draw hatching in midtone areas (less dense)
      const midHatchingCount = Math.floor(midtoneAreas.length * hatchDensity * 0.2);
      for (let i = 0; i < midHatchingCount; i++) {
        const area = midtoneAreas[Math.floor(Math.random() * midtoneAreas.length)];
        const x = area.x + Math.random() * area.width;
        const y = area.y + Math.random() * area.height;
        
        // For midtones, do single-direction hatching
        const len = tileSize * (0.7 + Math.random() * 0.3);
        const angle = Math.PI/4; // 45 degrees
        
        rc.line(
          x, y,
          x + len * Math.cos(angle), y + len * Math.sin(angle),
          {
            stroke: pencilColor,
            strokeWidth: strokeWidthBase * strokeMultiplier * 0.9,
            roughness: sketchRoughness,
            opacity: 0.5
          }
        );
      }
      
      // Draw minimal hatching in light areas
      const lightHatchingCount = Math.floor(lightAreas.length * hatchDensity * 0.05);
      for (let i = 0; i < lightHatchingCount; i++) {
        const area = lightAreas[Math.floor(Math.random() * lightAreas.length)];
        const x = area.x + Math.random() * area.width;
        const y = area.y + Math.random() * area.height;
        
        // For light areas, do sparse, light strokes
        const len = tileSize * (0.5 + Math.random() * 0.3);
        const angle = Math.random() * Math.PI; // Random angle
        
        rc.line(
          x, y,
          x + len * Math.cos(angle), y + len * Math.sin(angle),
          {
            stroke: pencilColor,
            strokeWidth: strokeWidthBase * strokeMultiplier * 0.7,
            roughness: sketchRoughness * 1.2,
            opacity: 0.3
          }
        );
      }
      
      // If it's charcoal, add some smudging effect with transparent rectangles
      if (pencilType === 'charcoal' && shadingLevel > 30) {
        const smudgeCount = Math.floor((darkAreas.length + midtoneAreas.length) * 0.1 * (shadingLevel / 100));
        
        for (let i = 0; i < smudgeCount; i++) {
          // Pick from dark or midtone areas for smudging
          const areaPool = [...darkAreas, ...midtoneAreas];
          const area = areaPool[Math.floor(Math.random() * areaPool.length)];
          
          const x = area.x + Math.random() * area.width;
          const y = area.y + Math.random() * area.height;
          const smudgeWidth = tileSize * (1 + Math.random() * 2);
          const smudgeHeight = tileSize * (0.2 + Math.random() * 0.5);
          
          // Draw smudge as a rough rectangle
          rc.rectangle(x, y, smudgeWidth, smudgeHeight, {
            fill: pencilColor,
            fillStyle: 'solid',
            stroke: 'none',
            roughness: 3,
            fillWeight: 0.1,
            opacity: 0.1 + (Math.random() * 0.1)
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
                          max={50} 
                          step={1}
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