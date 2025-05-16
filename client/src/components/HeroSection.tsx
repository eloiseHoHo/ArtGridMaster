import { Button } from "@/components/ui/button";
import { useState } from "react";
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
  
  // Dropzone setup
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string);
        setTransformedImage(null); // Reset transformed image when new image is uploaded
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
  
  // Mock transform function (in production this would call the backend API)
  const handleTransform = () => {
    if (!uploadedImage) return;
    
    setIsTransforming(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // In a real app, this would be an API call to transform the image
      setTransformedImage(uploadedImage);
      setIsTransforming(false);
    }, 1500);
  };

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
                  <h3 className="text-lg font-medium text-gray-700 mb-2">上传您的图片</h3>
                  <p className="text-gray-500 mb-4">
                    {isDragActive
                      ? "拖放图片到这里..."
                      : "拖放图片到这里，或点击选择文件"
                    }
                  </p>
                  <Button>
                    <Upload className="mr-2 h-4 w-4" />
                    选择图片
                  </Button>
                  <p className="text-xs text-gray-500 mt-4">支持的格式: JPG, PNG (最大 10MB)</p>
                </div>
              ) : (
                <div className="h-80 flex flex-col">
                  <div className="flex-1 relative rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src={transformedImage || uploadedImage} 
                      alt="Preview" 
                      className="w-full h-full object-contain"
                    />
                    {transformedImage && activeTab === "grid" && (
                      <div 
                        className="grid-overlay absolute inset-0"
                        style={{
                          backgroundSize: `${gridSize}px ${gridSize}px`,
                          opacity: gridOpacity / 100,
                          backgroundImage: gridStyle === "lines" 
                            ? `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`
                            : gridStyle === "dots"
                              ? `radial-gradient(${gridColor} 1px, transparent 1px)`
                              : `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`
                        }}
                      ></div>
                    )}
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
                      重新上传
                    </Button>
                    {transformedImage && (
                      <Button onClick={() => {
                        // In a real app, this would download the transformed image
                        const link = document.createElement("a");
                        link.href = transformedImage;
                        link.download = `transformed-image-${activeTab}.png`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}>
                        下载图片
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            {/* Transform Controls Section */}
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">图片转换设置</h3>
              
              {uploadedImage && (
                <>
                  <Tabs 
                    defaultValue="grid" 
                    value={activeTab} 
                    onValueChange={(value) => setActiveTab(value as "grid" | "lineart" | "sketch")}
                    className="mb-6"
                  >
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="grid">网格转换</TabsTrigger>
                      <TabsTrigger value="lineart">线稿转换</TabsTrigger>
                      <TabsTrigger value="sketch">素描转换</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="grid" className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <Label>网格大小</Label>
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
                          <Label>不透明度</Label>
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
                        <Label className="block mb-2">网格颜色</Label>
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
                        <Label className="block mb-2">网格样式</Label>
                        <div className="grid grid-cols-3 gap-2">
                          <button 
                            className={`p-2 rounded border text-center text-sm ${gridStyle === 'lines' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                            onClick={() => setGridStyle('lines')}
                          >
                            线条
                          </button>
                          <button 
                            className={`p-2 rounded border text-center text-sm ${gridStyle === 'dots' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                            onClick={() => setGridStyle('dots')}
                          >
                            点状
                          </button>
                          <button 
                            className={`p-2 rounded border text-center text-sm ${gridStyle === 'dashed' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                            onClick={() => setGridStyle('dashed')}
                          >
                            虚线
                          </button>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="lineart">
                      <div className="flex flex-col items-center justify-center py-10">
                        <p className="text-gray-600 mb-4 text-center">线稿功能准备中，敬请期待</p>
                        <Button variant="outline" className="mt-2" disabled>
                          线稿功能即将推出
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="sketch">
                      <div className="flex flex-col items-center justify-center py-10">
                        <p className="text-gray-600 mb-4 text-center">素描功能准备中，敬请期待</p>
                        <Button variant="outline" className="mt-2" disabled>
                          素描功能即将推出
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  <Button 
                    className="w-full mt-4" 
                    onClick={handleTransform}
                    disabled={isTransforming || !uploadedImage}
                  >
                    {isTransforming ? '处理中...' : '应用转换'}
                  </Button>
                </>
              )}
              
              {!uploadedImage && (
                <Card className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                  <div className="flex flex-col items-center text-center p-4">
                    <Check className="h-12 w-12 text-emerald-500 mb-4" />
                    <h4 className="text-lg font-medium mb-2">免费在线使用</h4>
                    <p className="text-gray-600 mb-4">上传图片并立即应用变换效果，无需注册或安装任何软件</p>
                    <ul className="text-left space-y-2 w-full mb-4">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>为您的绘画创建精确的网格参考</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>自定义网格大小、颜色和不透明度</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>立即下载转换后的图片</span>
                      </li>
                    </ul>
                    <Button
                      onClick={() => document.querySelector('input[type="file"]')?.click()}
                      className="mt-2"
                    >
                      立即上传图片 <ArrowRight className="ml-2 h-4 w-4" />
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
