import { useEffect, useState } from "react";
import BeforeAfterComparison from "./BeforeAfterComparison";
import { generateGridEffect, generateLineArtEffect, generateSketchEffect } from "@/lib/imageEffects";

export default function ExamplesShowcase() {
  // 定义示例数据结构
  const examples = [
    {
      id: 1,
      title: "Grid Transformation",
      description: "Perfect for artists to maintain proportions while drawing",
      beforeImage: "/images/before/portrait.jpg",
      afterImageGenerator: (beforeUrl: string) => generateGridEffect(beforeUrl, 50, "#3B82F6", 0.6)
    },
    {
      id: 2,
      title: "Line Art Transformation",
      description: "Convert photos into clean line drawings for tracing or coloring",
      beforeImage: "/images/before/landscape.jpg",
      afterImageGenerator: (beforeUrl: string) => generateLineArtEffect(beforeUrl, 10, 1)
    },
    {
      id: 3,
      title: "Sketch Transformation",
      description: "Transform photos into sketch-style drawings for artistic reference",
      beforeImage: "/images/before/flower.jpg",
      afterImageGenerator: (beforeUrl: string) => generateSketchEffect(beforeUrl, 5, "graphite")
    },
  ];

  // 状态存储处理后的图片
  const [processedImages, setProcessedImages] = useState<{[key: number]: string}>({});
  const [loading, setLoading] = useState<{[key: number]: boolean}>({
    1: true, 2: true, 3: true
  });

  // 生成处理后的图片
  useEffect(() => {
    const generateImages = async () => {
      const newProcessedImages: {[key: number]: string} = {};
      
      for (const example of examples) {
        try {
          // 获取图片的完整URL
          const baseUrl = window.location.origin;
          const fullImageUrl = `${baseUrl}${example.beforeImage}`;
          
          // 生成处理后的图片
          const processedImageUrl = await example.afterImageGenerator(fullImageUrl);
          newProcessedImages[example.id] = processedImageUrl;
        } catch (error) {
          console.error(`处理示例图片 ${example.id} 时出错:`, error);
          // 失败时使用占位图
          newProcessedImages[example.id] = example.beforeImage;
        } finally {
          // 更新加载状态
          setLoading(prev => ({...prev, [example.id]: false}));
        }
      }
      
      setProcessedImages(newProcessedImages);
    };

    generateImages();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            See the Transformation
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Drag the slider to compare before and after images and discover the possibilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example) => (
            <div key={example.id} className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02]">
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{example.title}</h3>
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-gray-100 relative">
                  {loading[example.id] ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                    </div>
                  ) : (
                    <BeforeAfterComparison
                      beforeImage={example.beforeImage}
                      afterImage={processedImages[example.id] || example.beforeImage}
                      title=""
                      description=""
                    />
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