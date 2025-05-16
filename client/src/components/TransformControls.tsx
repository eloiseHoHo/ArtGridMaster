import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { type TransformationType, type TransformationSettings } from "@shared/schema";
import { RefreshCw, Download } from "lucide-react";

interface TransformControlsProps {
  activeTab: TransformationType;
  setActiveTab: (tab: TransformationType) => void;
  settings: TransformationSettings;
  setSettings: (settings: TransformationSettings) => void;
  originalImagePath: string;
  transformedImagePath: string | null;
  isTransforming: boolean;
  onTransform: () => void;
}

export default function TransformControls({
  activeTab,
  setActiveTab,
  settings,
  setSettings,
  originalImagePath,
  transformedImagePath,
  isTransforming,
  onTransform
}: TransformControlsProps) {
  const handleGridSizeChange = (value: number[]) => {
    setSettings({ ...settings, size: value[0] });
  };
  
  const handleGridOpacityChange = (value: number[]) => {
    setSettings({ ...settings, opacity: value[0] });
  };
  
  const handleGridColorChange = (color: string) => {
    setSettings({ ...settings, color });
  };
  
  const handleGridStyleChange = (style: "lines" | "dots" | "dashed") => {
    setSettings({ ...settings, style });
  };
  
  const handleLineartThresholdChange = (value: number[]) => {
    setSettings({ ...settings as any, threshold: value[0] });
  };
  
  const handleLineartThicknessChange = (value: number[]) => {
    setSettings({ ...settings as any, lineThickness: value[0] });
  };
  
  const handleLineartStyleChange = (style: string) => {
    setSettings({ ...settings as any, style });
  };
  
  const handleSketchIntensityChange = (value: number[]) => {
    setSettings({ ...settings as any, intensity: value[0] });
  };
  
  const handleSketchPencilTypeChange = (pencilType: "graphite" | "charcoal") => {
    setSettings({ ...settings as any, pencilType });
  };
  
  const handleSketchShadingLevelChange = (value: number[]) => {
    setSettings({ ...settings as any, shadingLevel: value[0] });
  };
  
  return (
    <div className="mb-8">
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TransformationType)}>
        <TabsList className="mb-6 w-full border-b border-gray-200 grid grid-cols-3">
          <TabsTrigger value="grid" className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="3" y1="15" x2="21" y2="15"></line>
              <line x1="9" y1="3" x2="9" y2="21"></line>
              <line x1="15" y1="3" x2="15" y2="21"></line>
            </svg>
            Grid Transform
          </TabsTrigger>
          <TabsTrigger value="lineart" className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
            </svg>
            Line Art
          </TabsTrigger>
          <TabsTrigger value="sketch" className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
              <path d="M2 2l7.586 7.586"></path>
              <circle cx="11" cy="11" r="2"></circle>
            </svg>
            Sketch
          </TabsTrigger>
        </TabsList>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Transform Settings</h3>
            
            <TabsContent value="grid" className="mt-0">
              {/* Grid Size Control */}
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <Label className="text-sm font-medium text-gray-700">Grid Size</Label>
                  <span className="text-sm text-primary">{(settings as any).size}px</span>
                </div>
                <Slider 
                  min={5} 
                  max={100} 
                  step={1}
                  value={[(settings as any).size]} 
                  onValueChange={handleGridSizeChange}
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Fine</span>
                  <span>Coarse</span>
                </div>
              </div>
              
              {/* Grid Opacity Control */}
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <Label className="text-sm font-medium text-gray-700">Grid Opacity</Label>
                  <span className="text-sm text-primary">{(settings as any).opacity}%</span>
                </div>
                <Slider 
                  min={10} 
                  max={100} 
                  step={1}
                  value={[(settings as any).opacity]} 
                  onValueChange={handleGridOpacityChange}
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Subtle</span>
                  <span>Bold</span>
                </div>
              </div>
              
              {/* Grid Color Control */}
              <div className="mb-4">
                <Label className="text-sm font-medium text-gray-700 block mb-2">Grid Color</Label>
                <div className="flex space-x-2">
                  <button 
                    className={`w-8 h-8 rounded-full bg-black ${(settings as any).color === '#000000' ? 'ring-2 ring-primary ring-offset-2' : 'border-2 border-white shadow-sm'}`}
                    onClick={() => handleGridColorChange('#000000')}
                  ></button>
                  <button 
                    className={`w-8 h-8 rounded-full bg-blue-500 ${(settings as any).color === '#3b82f6' ? 'ring-2 ring-primary ring-offset-2' : 'border-2 border-white shadow-sm'}`}
                    onClick={() => handleGridColorChange('#3b82f6')}
                  ></button>
                  <button 
                    className={`w-8 h-8 rounded-full bg-red-500 ${(settings as any).color === '#ef4444' ? 'ring-2 ring-primary ring-offset-2' : 'border-2 border-white shadow-sm'}`}
                    onClick={() => handleGridColorChange('#ef4444')}
                  ></button>
                  <button 
                    className={`w-8 h-8 rounded-full bg-green-500 ${(settings as any).color === '#22c55e' ? 'ring-2 ring-primary ring-offset-2' : 'border-2 border-white shadow-sm'}`}
                    onClick={() => handleGridColorChange('#22c55e')}
                  ></button>
                </div>
              </div>
              
              {/* Grid Style Control */}
              <div className="mb-4">
                <Label className="text-sm font-medium text-gray-700 block mb-2">Grid Style</Label>
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    className={`p-2 rounded border text-center text-sm ${(settings as any).style === 'lines' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                    onClick={() => handleGridStyleChange('lines')}
                  >
                    Lines
                  </button>
                  <button 
                    className={`p-2 rounded border text-center text-sm ${(settings as any).style === 'dots' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                    onClick={() => handleGridStyleChange('dots')}
                  >
                    Dots
                  </button>
                  <button 
                    className={`p-2 rounded border text-center text-sm ${(settings as any).style === 'dashed' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                    onClick={() => handleGridStyleChange('dashed')}
                  >
                    Dashed
                  </button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="lineart" className="mt-0">
              {/* Threshold Control */}
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <Label className="text-sm font-medium text-gray-700">Detail Threshold</Label>
                  <span className="text-sm text-primary">{(settings as any).threshold || 128}</span>
                </div>
                <Slider 
                  min={0} 
                  max={255} 
                  step={1}
                  value={[(settings as any).threshold || 128]} 
                  onValueChange={handleLineartThresholdChange}
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>More Details</span>
                  <span>Less Details</span>
                </div>
              </div>
              
              {/* Line Thickness Control */}
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <Label className="text-sm font-medium text-gray-700">Line Thickness</Label>
                  <span className="text-sm text-primary">{(settings as any).lineThickness || 1}</span>
                </div>
                <Slider 
                  min={1} 
                  max={3} 
                  step={0.1}
                  value={[(settings as any).lineThickness || 1]} 
                  onValueChange={handleLineartThicknessChange}
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Thin</span>
                  <span>Thick</span>
                </div>
              </div>
              
              {/* Line Art Style Control */}
              <div className="mb-4">
                <Label className="text-sm font-medium text-gray-700 block mb-2">Style</Label>
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    className={`p-2 rounded border text-center text-sm ${(settings as any).style === 'normal' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                    onClick={() => handleLineartStyleChange('normal')}
                  >
                    Normal
                  </button>
                  <button 
                    className={`p-2 rounded border text-center text-sm ${(settings as any).style === 'detailed' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                    onClick={() => handleLineartStyleChange('detailed')}
                  >
                    Detailed
                  </button>
                  <button 
                    className={`p-2 rounded border text-center text-sm ${(settings as any).style === 'minimal' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                    onClick={() => handleLineartStyleChange('minimal')}
                  >
                    Minimal
                  </button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="sketch" className="mt-0">
              {/* Intensity Control */}
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <Label className="text-sm font-medium text-gray-700">Sketch Intensity</Label>
                  <span className="text-sm text-primary">{(settings as any).intensity || 50}%</span>
                </div>
                <Slider 
                  min={0} 
                  max={100} 
                  step={1}
                  value={[(settings as any).intensity || 50]} 
                  onValueChange={handleSketchIntensityChange}
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Subtle</span>
                  <span>Intense</span>
                </div>
              </div>
              
              {/* Pencil Type Control */}
              <div className="mb-4">
                <Label className="text-sm font-medium text-gray-700 block mb-2">Pencil Type</Label>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    className={`p-2 rounded border text-center text-sm ${(settings as any).pencilType === 'graphite' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                    onClick={() => handleSketchPencilTypeChange('graphite')}
                  >
                    Graphite
                  </button>
                  <button 
                    className={`p-2 rounded border text-center text-sm ${(settings as any).pencilType === 'charcoal' ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                    onClick={() => handleSketchPencilTypeChange('charcoal')}
                  >
                    Charcoal
                  </button>
                </div>
              </div>
              
              {/* Shading Level Control */}
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <Label className="text-sm font-medium text-gray-700">Shading Level</Label>
                  <span className="text-sm text-primary">{(settings as any).shadingLevel || 50}%</span>
                </div>
                <Slider 
                  min={0} 
                  max={100} 
                  step={1}
                  value={[(settings as any).shadingLevel || 50]} 
                  onValueChange={handleSketchShadingLevelChange}
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Light</span>
                  <span>Heavy</span>
                </div>
              </div>
            </TabsContent>
            
            <div className="mt-6">
              <Button onClick={onTransform} disabled={isTransforming} className="w-full">
                {isTransforming ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Transforming...
                  </>
                ) : (
                  <>
                    Apply Transformation
                  </>
                )}
              </Button>
            </div>
          </div>
          
          {/* Image Preview */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Preview</h3>
            <div className="transform-container rounded-xl overflow-hidden relative bg-gray-200">
              <img 
                src={transformedImagePath || originalImagePath} 
                alt="Preview" 
                className="w-full h-full object-contain"
              />
              
              {activeTab === 'grid' && !transformedImagePath && (
                <div 
                  className="grid-overlay"
                  style={{
                    backgroundSize: `${(settings as any).size}px ${(settings as any).size}px`,
                    opacity: (settings as any).opacity / 100,
                    backgroundImage: (settings as any).style === 'dots' 
                      ? `radial-gradient(${(settings as any).color} 1px, transparent 1px)`
                      : (settings as any).style === 'dashed'
                        ? `linear-gradient(to right, ${(settings as any).color} 1px, transparent 1px),
                           linear-gradient(to bottom, ${(settings as any).color} 1px, transparent 1px)`
                        : `linear-gradient(to right, ${(settings as any).color} 1px, transparent 1px),
                           linear-gradient(to bottom, ${(settings as any).color} 1px, transparent 1px)`
                  }}
                ></div>
              )}
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
