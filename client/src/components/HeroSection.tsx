import { Button } from "@/components/ui/button";
import { useState, useCallback, useEffect } from "react";
import { Upload, Image, Info, ArrowRight, Check } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useDropzone } from "react-dropzone";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"grid" | "lineart" | "sketch">("grid");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [transformedImage, setTransformedImage] = useState<string | null>(null);
  const [isTransforming, setIsTransforming] = useState(false);
  
  // Grid settings
  const [gridSize, setGridSize] = useState(20);
  const [gridOpacity, setGridOpacity] = useState(70);
  const [gridColor, setGridColor] = useState("#000000");
  const [gridStyle, setGridStyle] = useState<"lines" | "dots" | "dashed">("lines");
  
  // Line art settings
  const [lineThreshold, setLineThreshold] = useState(128);
  const [lineThickness, setLineThickness] = useState(1);
  const [lineStyle, setLineStyle] = useState<"normal" | "detailed" | "minimal">("normal");
  
  // Sketch settings
  const [sketchIntensity, setSketchIntensity] = useState(50);
  const [pencilType, setPencilType] = useState<"graphite" | "charcoal">("graphite");
  const [shadingLevel, setShadingLevel] = useState(50);

  // Create canvas elements for transformations
  const [canvasElement, setCanvasElement] = useState<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    // Create a canvas element for image processing
    const canvas = document.createElement('canvas');
    setCanvasElement(canvas);
    
    // Clean up
    return () => {
      setCanvasElement(null);
    };
  }, []);
  
  // Dropzone setup
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string);
        setTransformedImage(null); // Reset transformed image when new image is uploaded
      };
      reader.readAsDataURL(file);
    }
  }, []);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png']
    },
    maxFiles: 1
  });
  
  // Image transformation functions
  const applyGridTransform = useCallback((imageSource: string): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        if (!canvasElement) return resolve(imageSource);
        
        const ctx = canvasElement.getContext('2d');
        if (!ctx) return resolve(imageSource);
        
        // Set canvas dimensions to match image
        canvasElement.width = img.width;
        canvasElement.height = img.height;
        
        // Draw original image
        ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        ctx.drawImage(img, 0, 0);
        
        // Draw grid overlay
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1;
        ctx.globalAlpha = gridOpacity / 100;
        
        if (gridStyle === "lines" || gridStyle === "dashed") {
          if (gridStyle === "dashed") {
            ctx.setLineDash([5, 5]);
          } else {
            ctx.setLineDash([]);
          }
          
          // Draw vertical lines
          for (let x = 0; x < canvasElement.width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvasElement.height);
            ctx.stroke();
          }
          
          // Draw horizontal lines
          for (let y = 0; y < canvasElement.height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvasElement.width, y);
            ctx.stroke();
          }
        } else if (gridStyle === "dots") {
          ctx.fillStyle = gridColor;
          
          for (let x = 0; x < canvasElement.width; x += gridSize) {
            for (let y = 0; y < canvasElement.height; y += gridSize) {
              ctx.beginPath();
              ctx.arc(x, y, 1, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
        
        // Reset global alpha
        ctx.globalAlpha = 1;
        
        // Return transformed image as data URL
        resolve(canvasElement.toDataURL('image/png'));
      };
      
      img.src = imageSource;
    });
  }, [canvasElement, gridColor, gridOpacity, gridSize, gridStyle]);
  
  const applyLineArtTransform = useCallback((imageSource: string): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        if (!canvasElement) return resolve(imageSource);
        
        const ctx = canvasElement.getContext('2d');
        if (!ctx) return resolve(imageSource);
        
        // Set canvas dimensions to match image
        canvasElement.width = img.width;
        canvasElement.height = img.height;
        
        // Draw original image
        ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        ctx.drawImage(img, 0, 0);
        
        // Get image data
        const imageData = ctx.getImageData(0, 0, canvasElement.width, canvasElement.height);
        const data = imageData.data;
        
        // Convert to grayscale first
        for (let i = 0; i < data.length; i += 4) {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          data[i] = data[i + 1] = data[i + 2] = avg;
        }
        
        // Apply threshold based on line style
        let contrastFactor = 1;
        let brightnessFactor = 0;
        
        switch (lineStyle) {
          case 'detailed':
            contrastFactor = 1.2;
            brightnessFactor = 0;
            break;
          case 'minimal':
            contrastFactor = 0.8;
            brightnessFactor = 30;
            break;
          default: // normal
            contrastFactor = 1;
            brightnessFactor = 0;
            break;
        }
        
        // Apply edge detection (simple threshold with contrast/brightness adjustment)
        for (let i = 0; i < data.length; i += 4) {
          // Apply contrast and brightness adjustment
          data[i] = Math.min(255, Math.max(0, (data[i] - 128) * contrastFactor + 128 + brightnessFactor));
          
          // Apply threshold
          data[i] = data[i] < lineThreshold ? 0 : 255;
          
          // Invert for line art (black lines on white background)
          data[i] = 255 - data[i];
          
          // Copy to other channels
          data[i + 1] = data[i + 2] = data[i];
        }
        
        // Apply line thickness (simple dilation)
        if (lineThickness > 1) {
          const tempCanvas = document.createElement('canvas');
          tempCanvas.width = canvasElement.width;
          tempCanvas.height = canvasElement.height;
          const tempCtx = tempCanvas.getContext('2d');
          
          if (tempCtx) {
            // Put the processed image data
            ctx.putImageData(imageData, 0, 0);
            
            // Draw to temp canvas with slight blur for thickness
            tempCtx.filter = `blur(${lineThickness}px)`;
            tempCtx.drawImage(canvasElement, 0, 0);
            
            // Draw back to main canvas
            ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
            ctx.drawImage(tempCanvas, 0, 0);
            
            // Apply threshold again to sharpen edges
            const finalData = ctx.getImageData(0, 0, canvasElement.width, canvasElement.height);
            const finalPixels = finalData.data;
            
            for (let i = 0; i < finalPixels.length; i += 4) {
              finalPixels[i] = finalPixels[i] < 128 ? 0 : 255;
              finalPixels[i + 1] = finalPixels[i + 2] = finalPixels[i];
            }
            
            ctx.putImageData(finalData, 0, 0);
          }
        } else {
          // Put the processed image data directly
          ctx.putImageData(imageData, 0, 0);
        }
        
        // Return transformed image as data URL
        resolve(canvasElement.toDataURL('image/png'));
      };
      
      img.src = imageSource;
    });
  }, [canvasElement, lineThreshold, lineThickness, lineStyle]);
  
  const applySketchTransform = useCallback((imageSource: string): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        if (!canvasElement) return resolve(imageSource);
        
        const ctx = canvasElement.getContext('2d');
        if (!ctx) return resolve(imageSource);
        
        // Set canvas dimensions to match image
        canvasElement.width = img.width;
        canvasElement.height = img.height;
        
        // Draw original image
        ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        ctx.drawImage(img, 0, 0);
        
        // Get image data
        const imageData = ctx.getImageData(0, 0, canvasElement.width, canvasElement.height);
        const data = imageData.data;
        
        // Convert to grayscale with adjustments based on pencil type and intensity
        let contrast = pencilType === 'charcoal' ? 1.2 + shadingLevel / 50 : 1.1 + shadingLevel / 80;
        let brightness = pencilType === 'charcoal' ? 0.8 - shadingLevel / 50 : 0.9;
        
        // Apply sketch effect (simulating dodging and burning)
        for (let i = 0; i < data.length; i += 4) {
          // Convert to grayscale
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          
          // Apply contrast and brightness
          let gray = avg / 255;
          gray = Math.pow(gray, 1 / contrast); // Contrast adjustment
          gray = gray * brightness; // Brightness adjustment
          
          // Apply intensity
          const intensityFactor = sketchIntensity / 50;
          gray = gray < 0.5 ? gray * intensityFactor : 1 - (1 - gray) * intensityFactor;
          
          // Convert back to 0-255 range
          const val = Math.min(255, Math.max(0, Math.round(gray * 255)));
          
          // Apply pencil texture effect
          let noise = 0;
          if (pencilType === 'charcoal') {
            // More grainy texture for charcoal
            noise = (Math.random() - 0.5) * 10 * (shadingLevel / 50);
          } else {
            // Smoother texture for graphite
            noise = (Math.random() - 0.5) * 5 * (shadingLevel / 50);
          }
          
          const pixelValue = Math.min(255, Math.max(0, val + noise));
          data[i] = data[i + 1] = data[i + 2] = pixelValue;
        }
        
        // Put processed image data back
        ctx.putImageData(imageData, 0, 0);
        
        // Return transformed image as data URL
        resolve(canvasElement.toDataURL('image/png'));
      };
      
      img.src = imageSource;
    });
  }, [canvasElement, pencilType, shadingLevel, sketchIntensity]);
  
  // Transform function
  const handleTransform = useCallback(async () => {
    if (!uploadedImage) return;
    
    setIsTransforming(true);
    
    try {
      let result;
      
      // Apply the appropriate transformation based on the active tab
      switch (activeTab) {
        case 'grid':
          result = await applyGridTransform(uploadedImage);
          break;
        case 'lineart':
          result = await applyLineArtTransform(uploadedImage);
          break;
        case 'sketch':
          result = await applySketchTransform(uploadedImage);
          break;
        default:
          result = uploadedImage;
      }
      
      setTransformedImage(result);
    } catch (error) {
      console.error('Error during transformation:', error);
    } finally {
      setIsTransforming(false);
    }
  }, [activeTab, uploadedImage, applyGridTransform, applyLineArtTransform, applySketchTransform]);

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
                  <Image className="h-16 w-16 text-gray-400 mb-4" />
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
                    {isTransforming && (
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
                        // Download the transformed image
                        const link = document.createElement("a");
                        link.href = transformedImage;
                        link.download = `transformed-image-${activeTab}.png`;
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
                    onValueChange={(value) => setActiveTab(value as "grid" | "lineart" | "sketch")}
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
                          onValueChange={(values) => setGridSize(values[0])}
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
                          onValueChange={(values) => setGridOpacity(values[0])}
                        />
                      </div>
                      
                      <div>
                        <Label className="block mb-2">Grid Color</Label>
                        <div className="flex space-x-2">
                          <button 
                            className={`w-8 h-8 rounded-full bg-black ${gridColor === '#000000' ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                            onClick={() => setGridColor('#000000')}
                            aria-label="Black grid color"
                          ></button>
                          <button 
                            className={`w-8 h-8 rounded-full bg-blue-500 ${gridColor === '#3b82f6' ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                            onClick={() => setGridColor('#3b82f6')}
                            aria-label="Blue grid color"
                          ></button>
                          <button 
                            className={`w-8 h-8 rounded-full bg-red-500 ${gridColor === '#ef4444' ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                            onClick={() => setGridColor('#ef4444')}
                            aria-label="Red grid color"
                          ></button>
                          <button 
                            className={`w-8 h-8 rounded-full bg-green-500 ${gridColor === '#22c55e' ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                            onClick={() => setGridColor('#22c55e')}
                            aria-label="Green grid color"
                          ></button>
                        </div>
                      </div>
                      
                      <div>
                        <Label className="block mb-2">Grid Style</Label>
                        <div className="grid grid-cols-3 gap-2">
                          <button 
                            className={`p-2 rounded border text-center text-sm ${gridStyle === 'lines' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                            onClick={() => setGridStyle('lines')}
                          >
                            Lines
                          </button>
                          <button 
                            className={`p-2 rounded border text-center text-sm ${gridStyle === 'dots' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                            onClick={() => setGridStyle('dots')}
                          >
                            Dots
                          </button>
                          <button 
                            className={`p-2 rounded border text-center text-sm ${gridStyle === 'dashed' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                            onClick={() => setGridStyle('dashed')}
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
                          onValueChange={(values) => setLineThreshold(values[0])}
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
                          onValueChange={(values) => setLineThickness(values[0])}
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
                            onClick={() => setLineStyle('normal')}
                          >
                            Normal
                          </button>
                          <button 
                            className={`p-2 rounded border text-center text-sm ${lineStyle === 'detailed' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                            onClick={() => setLineStyle('detailed')}
                          >
                            Detailed
                          </button>
                          <button 
                            className={`p-2 rounded border text-center text-sm ${lineStyle === 'minimal' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                            onClick={() => setLineStyle('minimal')}
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
                          onValueChange={(values) => setSketchIntensity(values[0])}
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
                            onClick={() => setPencilType('graphite')}
                          >
                            Graphite
                          </button>
                          <button 
                            className={`p-2 rounded border text-center text-sm ${pencilType === 'charcoal' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                            onClick={() => setPencilType('charcoal')}
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
                          onValueChange={(values) => setShadingLevel(values[0])}
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Light</span>
                          <span>Heavy</span>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  <Button 
                    className="w-full mt-4" 
                    onClick={handleTransform}
                    disabled={isTransforming || !uploadedImage}
                  >
                    {isTransforming ? 'Processing...' : 'Apply Transformation'}
                  </Button>
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
