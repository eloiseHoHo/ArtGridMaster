import { useEffect, useState } from "react";
import { useParams, useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import ImageUploader from "@/components/ImageUploader";
import TransformControls from "@/components/TransformControls";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeftIcon, DownloadIcon, RefreshCcwIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";
import { type Image, type TransformationType, type TransformationSettings } from "@shared/schema";

export default function Transform() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<TransformationType>("grid");
  const [transformSettings, setTransformSettings] = useState<TransformationSettings>({
    size: 20,
    opacity: 70,
    color: "#000000",
    style: "lines"
  } as any);

  // Fetch image data
  const { data: image, isLoading, isError } = useQuery<Image>({
    queryKey: [`/api/images/${id}`],
    enabled: !!id,
  });

  // Transform image mutation
  const transformMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest(
        "POST", 
        `/api/images/${id}/transform`, 
        {
          transformationType: activeTab,
          settings: transformSettings
        }
      );
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [`/api/images/${id}`] });
      toast({
        title: "Image Transformed",
        description: "Your image has been successfully transformed",
      });
    },
    onError: (error) => {
      toast({
        title: "Transformation Failed",
        description: error.message || "There was an error transforming your image",
        variant: "destructive",
      });
    }
  });

  // Reset transformation
  const handleReset = () => {
    if (activeTab === "grid") {
      setTransformSettings({
        size: 20,
        opacity: 70,
        color: "#000000",
        style: "lines"
      });
    } else if (activeTab === "lineart") {
      setTransformSettings({
        threshold: 128,
        lineThickness: 1,
        style: "normal"
      });
    } else if (activeTab === "sketch") {
      setTransformSettings({
        intensity: 50,
        pencilType: "graphite",
        shadingLevel: 50
      });
    }
  };

  // Download transformed image
  const handleDownload = () => {
    if (!image?.transformedPath) {
      toast({
        title: "No transformed image",
        description: "Please transform the image first",
        variant: "destructive",
      });
      return;
    }
    
    const link = document.createElement("a");
    link.href = image.transformedPath;
    link.download = `${image.originalFilename.split('.')[0]}-${activeTab}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Effect to set initial transform settings based on tab
  useEffect(() => {
    if (activeTab === "grid") {
      setTransformSettings({
        size: 20,
        opacity: 70,
        color: "#000000",
        style: "lines"
      });
    } else if (activeTab === "lineart") {
      setTransformSettings({
        threshold: 128,
        lineThickness: 1,
        style: "normal"
      });
    } else if (activeTab === "sketch") {
      setTransformSettings({
        intensity: 50,
        pencilType: "graphite",
        shadingLevel: 50
      });
    }
  }, [activeTab]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="p-6">
          <div className="animate-pulse flex flex-col space-y-4">
            <div className="h-10 bg-gray-200 rounded w-1/4"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded w-1/3"></div>
          </div>
        </Card>
      </div>
    );
  }

  if (isError || !image) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Image</h2>
          <p className="text-gray-600 mb-6">There was an error loading the image. Please try again.</p>
          <Button onClick={() => navigate("/")}>Return to Home</Button>
        </Card>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Transform Image - PhotoGrid.space</title>
        <meta name="description" content="Transform your image into grid, line art, or sketch format with customizable settings." />
        <link rel="canonical" href="https://www.photogrid.space/transform" />
        <meta property="og:title" content="Transform Image - PhotoGrid.space" />
        <meta property="og:description" content="Transform your image into grid, line art, or sketch format with customizable settings." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photogrid.space/transform" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="37.09024;-95.712891" />
        <meta name="ICBM" content="37.09024, -95.712891" />
      </Helmet>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="bg-white rounded-2xl shadow-md p-6 mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Image Transformation Studio</h2>
            <Button variant="outline" onClick={() => navigate("/")}>
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
          
          {!image.originalPath ? (
            <ImageUploader />
          ) : (
            <>
              <div className="mb-8">
                <img 
                  src={image.originalPath} 
                  alt="Original image" 
                  className="max-h-96 mx-auto rounded-lg object-contain"
                />
              </div>
            
              <TransformControls 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                settings={transformSettings}
                setSettings={setTransformSettings}
                originalImagePath={image.originalPath}
                transformedImagePath={image.transformedPath}
                isTransforming={transformMutation.isPending}
                onTransform={() => transformMutation.mutate()}
              />
              
              {image.transformedPath && (
                <BeforeAfterComparison 
                  beforeImage={image.originalPath}
                  afterImage={image.transformedPath}
                />
              )}
              
              <div className="flex justify-center space-x-4 mt-8">
                <Button variant="outline" onClick={handleReset}>
                  <RefreshCcwIcon className="mr-2 h-4 w-4" />
                  Reset Settings
                </Button>
                <Button onClick={handleDownload} disabled={!image.transformedPath}>
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Download Image
                </Button>
              </div>
            </>
          )}
        </Card>
      </main>
    </>
  );
}
