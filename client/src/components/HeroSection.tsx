import { Button } from "@/components/ui/button";
import { useCallback } from "react";
import { useLocation } from "wouter";
import { Upload, Info } from "lucide-react";

export default function HeroSection() {
  const [, navigate] = useLocation();
  
  const handleUploadClick = useCallback(() => {
    // Redirect to image uploader
    navigate("/transform/new");
  }, [navigate]);

  return (
    <section className="bg-gradient-to-br from-primary to-primary-700 text-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Transform Your Art with Grid & Line Techniques</h1>
            <p className="text-lg sm:text-xl mb-6 text-white/90">Create grid overlays, line art, and sketches from your images. Perfect for artists looking to develop their drawing skills or create unique art.</p>
            <div className="flex flex-wrap gap-3 md:flex-nowrap">
              <Button 
                onClick={handleUploadClick}
                className="px-6 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-all font-medium"
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload Image
              </Button>
              <Button 
                variant="outline" 
                className="px-6 py-3 bg-primary-600 border border-white/30 text-white rounded-lg hover:bg-primary-700 transition-all font-medium"
              >
                <Info className="mr-2 h-4 w-4" />
                How It Works
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-3">
            {/* Artist sketching on canvas */}
            <img 
              src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=500" 
              alt="Artist sketching on canvas" 
              className="rounded-lg shadow-lg object-cover h-48" 
            />
            
            {/* Example of grid art transformation */}
            <img 
              src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=500" 
              alt="Example of grid art transformation" 
              className="rounded-lg shadow-lg object-cover h-48" 
            />
            
            {/* Detailed line art sample */}
            <img 
              src="https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=500" 
              alt="Detailed line art sample" 
              className="rounded-lg shadow-lg object-cover h-48" 
            />
            
            {/* Artist working on a sketch drawing */}
            <img 
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=500" 
              alt="Artist working on a sketch drawing" 
              className="rounded-lg shadow-lg object-cover h-48" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
