import { useState, useRef, useEffect, useCallback, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Upload, Image as ImageIcon, ArrowRight, Check, Link, XCircle } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { Input } from "@/components/ui/input";
import { generateGridEffect, generateLineArtEffect, generateSketchEffect } from "@/lib/imageEffects";

export default function SimpleImageEditorNew() {
  const [activeTab, setActiveTab] = useState<string>("grid");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [transformedImage, setTransformedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isUrlMode, setIsUrlMode] = useState<boolean>(false);
  const [urlError, setUrlError] = useState<string | null>(null);
  
  // Grid settings - larger default size for more visible effect
  const [gridSize, setGridSize] = useState(50);
  const [gridOpacity, setGridOpacity] = useState(70);
  const [gridColor, setGridColor] = useState("#000000");
  const [gridStyle, setGridStyle] = useState("lines");
  const [gridThickness, setGridThickness] = useState(2); // 增加默认线条粗细
  
  // Line art settings
  const [lineThreshold, setLineThreshold] = useState(128);
  const [lineThickness, setLineThickness] = useState(1);
  const [lineStyle, setLineStyle] = useState("normal");
  
  // Sketch settings
  const [sketchIntensity, setSketchIntensity] = useState(50);
  const [pencilType, setPencilType] = useState("graphite");
  const [shadingLevel, setShadingLevel] = useState(50);

  // Handle file drop
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      
      reader.onload = (e) => {
        if (e.target?.result) {
          setUploadedImage(e.target.result as string);
          setTransformedImage(null);
          setIsUrlMode(false); // Switch back to upload mode
          setUrlError(null);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };
  
  // Handle image import from URL
  const handleUrlImport = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setUrlError(null);
    setIsProcessing(true);
    
    if (!imageUrl.trim()) {
      setUrlError("Please enter a valid image URL");
      setIsProcessing(false);
      return;
    }
    
    try {
      // Create a new image to test URL validity
      const img = new Image();
      
      // Create a promise to handle image loading
      const imageLoadPromise = new Promise<string>((resolve, reject) => {
        img.onload = () => {
          // Image loaded successfully
          resolve(imageUrl);
        };
        
        img.onerror = () => {
          // Image failed to load
          reject(new Error("Image failed to load, please check if the URL is valid"));
        };
        
        // Set crossOrigin to allow processing images from other domains
        img.crossOrigin = "Anonymous";
      });
      
      // Set the source to start loading
      img.src = imageUrl;
      
      // Wait for image to load or fail
      await imageLoadPromise;
      
      // For demo purposes, just set the uploaded image
      setUploadedImage(imageUrl);
      setTransformedImage(null);
      
      // Clear URL input field after successful import
      setImageUrl("");
      
    } catch (error) {
      console.error("Error loading image from URL:", error);
      setUrlError(error instanceof Error ? error.message : "Error loading image");
    } finally {
      setIsProcessing(false);
    }
  }, [imageUrl]);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png']
    },
    maxFiles: 1
  });
  
  // Real transform functions using our image processing library
  const applyGridTransform = async () => {
    if (!uploadedImage) return;
    
    setIsProcessing(true);
    try {
      const result = await generateGridEffect(
        uploadedImage,
        gridSize,
        gridColor,
        gridOpacity / 100,
        gridStyle,
        gridThickness
      );
      setTransformedImage(result);
    } catch (error) {
      console.error("Error applying grid transform:", error);
      alert("Failed to apply grid effect. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };
  
  const applyLineArtTransform = async () => {
    if (!uploadedImage) return;
    
    setIsProcessing(true);
    try {
      const result = await generateLineArtEffect(
        uploadedImage,
        lineThreshold / 10,
        lineThickness,
        lineStyle
      );
      setTransformedImage(result);
    } catch (error) {
      console.error("Error applying line art transform:", error);
      alert("Failed to apply line art effect. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };
  
  const applySketchTransform = async () => {
    if (!uploadedImage) return;
    
    setIsProcessing(true);
    try {
      const result = await generateSketchEffect(
        uploadedImage,
        sketchIntensity / 10,
        pencilType as "graphite" | "charcoal"
      );
      setTransformedImage(result);
    } catch (error) {
      console.error("Error applying sketch transform:", error);
      alert("Failed to apply sketch effect. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card: Upload Area */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
          {/* Card Header */}
          <div className="px-6 py-5 border-b border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800">Upload Your Image</h3>
          </div>
          
          {/* Card Content */}
          <div className="p-6">
            {/* Tab Navigation */}
            <div className="flex mb-6 rounded-lg overflow-hidden border border-gray-200">
              <button
                className={`flex items-center justify-center py-3 px-4 flex-1 ${!isUrlMode ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setIsUrlMode(false)}
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload File
              </button>
              
              <button
                className={`flex items-center justify-center py-3 px-4 flex-1 ${isUrlMode ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setIsUrlMode(true)}
              >
                <Link className="h-4 w-4 mr-2" />
                Image URL
              </button>
            </div>
            
            {/* Upload Area Content */}
            {!uploadedImage ? (
              <div className="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 aspect-square">
                {!isUrlMode ? (
                  // File Upload Interface
                  <div
                    {...getRootProps()}
                    className="w-full h-full flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <input {...getInputProps()} id="fileInput" />
                    <div className="w-20 h-20 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
                      <ImageIcon className="h-10 w-10 text-indigo-500" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Upload Your Image</h3>
                    <p className="text-gray-500 text-center mb-4">
                      {isDragActive ? "Drop the image here..." : "Drag and drop an image, or click to browse"}
                    </p>
                    <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                      <Upload className="mr-2 h-4 w-4" />
                      Select Image
                    </Button>
                    <p className="text-xs text-gray-500 mt-4">Supported formats: JPG, PNG (Max 10MB)</p>
                  </div>
                ) : (
                  // URL Import Interface
                  <div className="w-full h-full flex flex-col p-6">
                    <form onSubmit={handleUrlImport} className="flex-1 flex flex-col">
                      <div className="mb-6">
                        <Label htmlFor="image-url" className="block text-gray-700 mb-2">Enter Image URL</Label>
                        <div className="flex">
                          <Input
                            id="image-url"
                            type="url"
                            placeholder="https://example.com/image.jpg"
                            value={imageUrl}
                            onChange={e => setImageUrl(e.target.value)}
                            className="flex-1 rounded-r-none"
                          />
                          <Button type="submit" className="rounded-l-none bg-gradient-to-r from-indigo-600 to-purple-600">
                            {isProcessing ? (
                              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                            ) : (
                              <ArrowRight className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        {urlError && (
                          <p className="mt-2 text-sm text-red-500 flex items-center">
                            <XCircle className="h-4 w-4 mr-1" />
                            {urlError}
                          </p>
                        )}
                      </div>
                      
                      <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
                          <Link className="h-10 w-10 text-indigo-500" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">Import from URL</h3>
                        <p className="text-gray-500 text-center mb-4">
                          Paste an image URL from the web to transform
                        </p>
                        <Button
                          type="submit"
                          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                        >
                          {isProcessing ? (
                            <>
                              <div className="mr-2 animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                              Importing...
                            </>
                          ) : (
                            <>
                              <Link className="mr-2 h-4 w-4" />
                              Import Image
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            ) : (
              // Image Preview Area
              <div className="flex flex-col">
                <div className="relative rounded-xl overflow-hidden bg-gray-100 border border-gray-200 aspect-square">
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
                    {isUrlMode ? 'Import New Image' : 'Upload New Image'}
                  </Button>
                  {transformedImage && (
                    <Button
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = transformedImage;
                        link.download = `gridart-${activeTab}.png`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      Download Image
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Right Card: Settings Area */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
          {/* Card Header */}
          <div className="px-6 py-5 border-b border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800">Transformation Settings</h3>
          </div>
          
          {/* Card Content */}
          <div className="p-6">
            {uploadedImage ? (
              // Transformation Controls
              <div>
                <Tabs defaultValue="grid" value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-3 gap-2 mb-6">
                    <TabsTrigger
                      value="grid"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                    >
                      Grid
                    </TabsTrigger>
                    <TabsTrigger
                      value="lineart"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                    >
                      Line Art
                    </TabsTrigger>
                    <TabsTrigger
                      value="sketch"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                    >
                      Sketch
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="grid" className="space-y-5">
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-gray-700">Grid Size</Label>
                        <span className="text-sm text-indigo-600 font-medium">{gridSize/100} inch</span>
                      </div>
                      <Slider
                        min={10}
                        max={500}
                        step={10}
                        value={[gridSize]}
                        onValueChange={(value) => setGridSize(value[0])}
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-gray-700">Opacity</Label>
                        <span className="text-sm text-indigo-600 font-medium">{gridOpacity}%</span>
                      </div>
                      <Slider
                        min={10}
                        max={100}
                        step={1}
                        value={[gridOpacity]}
                        onValueChange={(value) => setGridOpacity(value[0])}
                      />
                    </div>
                    
                    <div>
                      <Label className="block mb-2 text-gray-700">Grid Color</Label>
                      <div className="flex space-x-3">
                        {['#000000', '#EF4444', '#3B82F6', '#10B981', '#8B5CF6'].map((color) => (
                          <button
                            key={color}
                            type="button"
                            className={`w-8 h-8 rounded-full border ${
                              gridColor === color ? 'ring-2 ring-indigo-500 ring-offset-2 scale-110' : 'hover:scale-105'
                            } transition-all`}
                            style={{ backgroundColor: color }}
                            onClick={() => setGridColor(color)}
                            aria-label={`Set grid color to ${color}`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label className="block mb-2 text-gray-700">Grid Style</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {['lines', 'dots', 'dashed'].map((style) => (
                          <Button
                            key={style}
                            variant={gridStyle === style ? 'default' : 'outline'}
                            onClick={() => setGridStyle(style)}
                            className={gridStyle === style ? 'bg-gradient-to-r from-indigo-600 to-purple-600 border-0' : ''}
                          >
                            {style.charAt(0).toUpperCase() + style.slice(1)}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <Button
                      className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                      onClick={applyGridTransform}
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <div className="mr-2 animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                          Processing...
                        </>
                      ) : transformedImage ? 'Update Grid' : 'Apply Grid'}
                    </Button>
                  </TabsContent>
                  
                  {/* Other tabs content would be similar */}
                  <TabsContent value="lineart">
                    {/* Line Art Controls */}
                    <div className="space-y-5">
                      <div>
                        <div className="flex justify-between mb-2">
                          <Label className="text-gray-700">Edge Threshold</Label>
                          <span className="text-sm text-indigo-600 font-medium">{lineThreshold}</span>
                        </div>
                        <Slider
                          min={20}
                          max={200}
                          step={1}
                          value={[lineThreshold]}
                          onValueChange={(value) => setLineThreshold(value[0])}
                        />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <Label className="text-gray-700">Line Thickness</Label>
                          <span className="text-sm text-indigo-600 font-medium">{lineThickness}px</span>
                        </div>
                        <Slider
                          min={0.5}
                          max={3}
                          step={0.1}
                          value={[lineThickness]}
                          onValueChange={(value) => setLineThickness(value[0])}
                        />
                      </div>
                      
                      <div>
                        <Label className="block mb-2 text-gray-700">Line Style</Label>
                        <div className="grid grid-cols-3 gap-2">
                          {['normal', 'detailed', 'minimal'].map((style) => (
                            <Button
                              key={style}
                              variant={lineStyle === style ? 'default' : 'outline'}
                              onClick={() => setLineStyle(style)}
                              className={lineStyle === style ? 'bg-gradient-to-r from-indigo-600 to-purple-600 border-0' : ''}
                            >
                              {style.charAt(0).toUpperCase() + style.slice(1)}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <Button
                        className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                        onClick={applyLineArtTransform}
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <>
                            <div className="mr-2 animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                            Processing...
                          </>
                        ) : transformedImage ? 'Update Line Art' : 'Create Line Art'}
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="sketch">
                    {/* Sketch Controls */}
                    <div className="space-y-5">
                      <div>
                        <div className="flex justify-between mb-2">
                          <Label className="text-gray-700">Intensity</Label>
                          <span className="text-sm text-indigo-600 font-medium">{sketchIntensity}%</span>
                        </div>
                        <Slider
                          min={10}
                          max={100}
                          step={1}
                          value={[sketchIntensity]}
                          onValueChange={(value) => setSketchIntensity(value[0])}
                        />
                      </div>
                      
                      <div>
                        <Label className="block mb-2 text-gray-700">Pencil Type</Label>
                        <div className="grid grid-cols-2 gap-2">
                          {['graphite', 'charcoal'].map((type) => (
                            <Button
                              key={type}
                              variant={pencilType === type ? 'default' : 'outline'}
                              onClick={() => setPencilType(type)}
                              className={pencilType === type ? 'bg-gradient-to-r from-indigo-600 to-purple-600 border-0' : ''}
                            >
                              {type.charAt(0).toUpperCase() + type.slice(1)}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <Label className="text-gray-700">Shading Level</Label>
                          <span className="text-sm text-indigo-600 font-medium">{shadingLevel}%</span>
                        </div>
                        <Slider
                          min={0}
                          max={100}
                          step={1}
                          value={[shadingLevel]}
                          onValueChange={(value) => setShadingLevel(value[0])}
                        />
                      </div>
                      
                      <Button
                        className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                        onClick={applySketchTransform}
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <>
                            <div className="mr-2 animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                            Processing...
                          </>
                        ) : transformedImage ? 'Update Sketch' : 'Create Sketch'}
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            ) : (
              // Features Section When No Image
              <div className="text-center py-4 h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-green-500" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Free to Use Online</h4>
                <p className="text-gray-600 mb-6 max-w-md">
                  Upload an image and apply transformations instantly,
                  no sign-up or installation required
                </p>
                <div className="bg-gray-50 rounded-xl p-5 w-full mb-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-green-500" />
                      </div>
                      <span className="text-gray-700">Create precise grid references for your artwork</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-green-500" />
                      </div>
                      <span className="text-gray-700">Convert photos to line art with adjustable styles</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-green-500" />
                      </div>
                      <span className="text-gray-700">Transform images into sketch-style drawings</span>
                    </li>
                  </ul>
                </div>
                <Button
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md"
                  onClick={() => document.getElementById('fileInput')?.click()}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload an Image Now
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}