import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Upload, Image as ImageIcon, ArrowRight, Check } from "lucide-react";
import { useDropzone } from "react-dropzone";

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
  
  // Apply line art transformation
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
      
      // Draw original image
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      
      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      // Convert to grayscale
      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = data[i + 1] = data[i + 2] = avg;
      }
      
      // Apply contrast adjustment based on style
      let contrastFactor = 1;
      let brightnessFactor = 0;
      
      switch (lineStyle) {
        case 'detailed':
          contrastFactor = 1.5;
          break;
        case 'minimal':
          contrastFactor = 0.7;
          brightnessFactor = 30;
          break;
        default: // normal
          contrastFactor = 1.2;
          break;
      }
      
      // Apply threshold
      for (let i = 0; i < data.length; i += 4) {
        // Apply contrast
        data[i] = Math.min(255, Math.max(0, 
          (data[i] - 128) * contrastFactor + 128 + brightnessFactor));
        
        // Apply threshold
        data[i] = data[i] < lineThreshold ? 0 : 255;
        
        // Invert colors (black lines on white)
        data[i] = 255 - data[i];
        
        // Copy to all channels
        data[i + 1] = data[i + 2] = data[i];
      }
      
      // Apply image data
      ctx.putImageData(imageData, 0, 0);
      
      // Apply thickness if needed
      if (lineThickness > 1) {
        // Create temporary canvas
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        
        if (tempCtx) {
          // Draw with blur
          tempCtx.filter = `blur(${lineThickness}px)`;
          tempCtx.drawImage(canvas, 0, 0);
          
          // Draw back
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(tempCanvas, 0, 0);
          
          // Threshold again
          const finalData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const finalPixels = finalData.data;
          
          for (let i = 0; i < finalPixels.length; i += 4) {
            finalPixels[i] = finalPixels[i] < 128 ? 0 : 255;
            finalPixels[i + 1] = finalPixels[i + 2] = finalPixels[i];
          }
          
          ctx.putImageData(finalData, 0, 0);
        }
      }
      
      // Get result
      setTransformedImage(canvas.toDataURL('image/png'));
      setIsProcessing(false);
    };
    
    img.src = uploadedImage;
  };
  
  // Apply sketch transformation
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
      
      // Draw original image
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      
      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      // Set params based on pencil type
      const contrast = pencilType === 'charcoal' 
        ? 1.2 + (shadingLevel / 50) 
        : 1.1 + (shadingLevel / 80);
      
      const brightness = pencilType === 'charcoal' 
        ? 0.8 - (shadingLevel / 50) 
        : 0.9;
      
      // Apply sketch effect
      for (let i = 0; i < data.length; i += 4) {
        // Convert to grayscale
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        
        // Apply contrast and brightness
        let gray = avg / 255;
        gray = Math.pow(gray, 1 / contrast); // Contrast
        gray = gray * brightness; // Brightness
        
        // Apply intensity
        const intensityFactor = sketchIntensity / 50;
        gray = gray < 0.5 
          ? gray * intensityFactor 
          : 1 - (1 - gray) * intensityFactor;
        
        // Convert back to 0-255
        let val = Math.min(255, Math.max(0, Math.round(gray * 255)));
        
        // Add noise for texture
        const noise = (Math.random() - 0.5) * 
          (pencilType === 'charcoal' ? 15 : 5) * (shadingLevel / 50);
        
        val = Math.min(255, Math.max(0, val + noise));
        
        // Set pixel values
        data[i] = data[i + 1] = data[i + 2] = val;
      }
      
      // Apply image data
      ctx.putImageData(imageData, 0, 0);
      
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
    if (uploadedImage && !isProcessing && activeTab === 'sketch') {
      setIsProcessing(true);
      requestAnimationFrame(() => applySketchTransform());
    }
  }, [uploadedImage, isProcessing, activeTab, applySketchTransform]);
  
  const handlePencilTypeChange = useCallback((type: string) => {
    setPencilType(type);
    if (uploadedImage && !isProcessing && activeTab === 'sketch') {
      setIsProcessing(true);
      requestAnimationFrame(() => applySketchTransform());
    }
  }, [uploadedImage, isProcessing, activeTab, applySketchTransform]);
  
  const handleShadingLevelChange = useCallback((values: number[]) => {
    setShadingLevel(values[0]);
    if (uploadedImage && !isProcessing && activeTab === 'sketch') {
      setIsProcessing(true);
      requestAnimationFrame(() => applySketchTransform());
    }
  }, [uploadedImage, isProcessing, activeTab, applySketchTransform]);
  
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