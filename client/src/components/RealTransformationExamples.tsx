import { useEffect, useState, useRef } from "react";
import BeforeAfterComparison from "./BeforeAfterComparison";
import { generateGridEffect, generateLineArtEffect, generateSketchEffect } from "@/lib/imageEffects";

export default function RealTransformationExamples() {
  // Example images for different transformation types
  const examples = [
    {
      id: 1,
      title: "Grid Transformation",
      description: "Perfect for artists to maintain proportions while drawing",
      beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&h=800&q=80"
    },
    {
      id: 2,
      title: "Line Art Transformation",
      description: "Convert photos into clean line drawings for tracing or coloring",
      beforeImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=533&q=80"
    },
    {
      id: 3,
      title: "Sketch Transformation",
      description: "Transform photos into sketch-style drawings for artistic reference",
      beforeImage: "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?auto=format&fit=crop&w=800&h=800&q=80"
    },
  ];

  // Store processed images and loading state
  const [processedImages, setProcessedImages] = useState<{[key: number]: string}>({});
  const [loading, setLoading] = useState<{[key: number]: boolean}>({
    1: true, 2: true, 3: true
  });
  
  // Reference to mounted state to prevent memory leaks
  const isMounted = useRef(true);
  
  useEffect(() => {
    // Set up cleanup function
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Process each example image
  useEffect(() => {
    const processImages = async () => {
      try {
        // Example 1: Grid Effect
        const img1 = new Image();
        img1.crossOrigin = "anonymous";
        img1.onload = async () => {
          if (!isMounted.current) return;
          
          try {
            const gridResult = await generateGridEffect(
              examples[0].beforeImage, 
              50,  // grid size in pixels
              "#3B82F6",  // blue color
              0.6   // opacity
            );
            
            if (isMounted.current) {
              setProcessedImages(prev => ({...prev, 1: gridResult}));
              setLoading(prev => ({...prev, 1: false}));
            }
          } catch (err) {
            console.error("Error generating grid effect:", err);
            if (isMounted.current) {
              setLoading(prev => ({...prev, 1: false}));
            }
          }
        };
        img1.onerror = () => {
          console.error("Error loading image 1");
          if (isMounted.current) {
            setLoading(prev => ({...prev, 1: false}));
          }
        };
        img1.src = examples[0].beforeImage;
        
        // Example 2: Line Art Effect
        const img2 = new Image();
        img2.crossOrigin = "anonymous";
        img2.onload = async () => {
          if (!isMounted.current) return;
          
          try {
            const lineArtResult = await generateLineArtEffect(
              examples[1].beforeImage, 
              10,  // threshold
              1    // line thickness
            );
            
            if (isMounted.current) {
              setProcessedImages(prev => ({...prev, 2: lineArtResult}));
              setLoading(prev => ({...prev, 2: false}));
            }
          } catch (err) {
            console.error("Error generating line art effect:", err);
            if (isMounted.current) {
              setLoading(prev => ({...prev, 2: false}));
            }
          }
        };
        img2.onerror = () => {
          console.error("Error loading image 2");
          if (isMounted.current) {
            setLoading(prev => ({...prev, 2: false}));
          }
        };
        img2.src = examples[1].beforeImage;
        
        // Example 3: Sketch Effect
        const img3 = new Image();
        img3.crossOrigin = "anonymous";
        img3.onload = async () => {
          if (!isMounted.current) return;
          
          try {
            const sketchResult = await generateSketchEffect(
              examples[2].beforeImage, 
              5,          // intensity
              "graphite"  // pencil type
            );
            
            if (isMounted.current) {
              setProcessedImages(prev => ({...prev, 3: sketchResult}));
              setLoading(prev => ({...prev, 3: false}));
            }
          } catch (err) {
            console.error("Error generating sketch effect:", err);
            if (isMounted.current) {
              setLoading(prev => ({...prev, 3: false}));
            }
          }
        };
        img3.onerror = () => {
          console.error("Error loading image 3");
          if (isMounted.current) {
            setLoading(prev => ({...prev, 3: false}));
          }
        };
        img3.src = examples[2].beforeImage;
        
      } catch (error) {
        console.error("Error in processImages:", error);
      }
    };

    processImages();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            See the Transformation
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Drag the slider to compare before and after images. These transformations are processed in real-time!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example) => (
            <div key={example.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02]">
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{example.title}</h3>
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-gray-100 relative">
                  {loading[example.id] ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                        <p className="mt-3 text-sm text-gray-500">Processing image...</p>
                      </div>
                    </div>
                  ) : (
                    processedImages[example.id] ? (
                      <BeforeAfterComparison
                        beforeImage={example.beforeImage}
                        afterImage={processedImages[example.id]}
                        title=""
                        description=""
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-sm text-red-500">Image processing failed</p>
                      </div>
                    )
                  )}
                </div>
                <p className="text-gray-600">{example.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}