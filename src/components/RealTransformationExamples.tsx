"use client";

import { useEffect, useState, useRef } from "react";
import BeforeAfterComparison from "./BeforeAfterComparison";
import { generateGridEffect, generateLineArtEffect, generateSketchEffect } from "@/lib/imageEffects";

export default function RealTransformationExamples() {
  const examples = [
    {
      id: 1,
      title: "Grid overlay",
      description: "Proportional drawing reference",
      beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&h=800&q=80"
    },
    {
      id: 2,
      title: "Line art",
      description: "Clean outlines for tracing",
      beforeImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=533&q=80"
    },
    {
      id: 3,
      title: "Pencil sketch",
      description: "Artistic sketch style",
      beforeImage: "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?auto=format&fit=crop&w=800&h=800&q=80"
    },
  ];

  const [processedImages, setProcessedImages] = useState<{[key: number]: string}>({});
  const [loading, setLoading] = useState<{[key: number]: boolean}>({ 1: true, 2: true, 3: true });
  const isMounted = useRef(true);

  useEffect(() => {
    return () => { isMounted.current = false; };
  }, []);

  useEffect(() => {
    const process = async (id: number, fn: () => Promise<string>) => {
      try {
        const result = await fn();
        if (isMounted.current) {
          setProcessedImages(prev => ({...prev, [id]: result}));
          setLoading(prev => ({...prev, [id]: false}));
        }
      } catch {
        if (isMounted.current) setLoading(prev => ({...prev, [id]: false}));
      }
    };

    const loadAndProcess = (src: string, id: number, fn: (url: string) => Promise<string>) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => { if (isMounted.current) process(id, () => fn(src)); };
      img.onerror = () => { if (isMounted.current) setLoading(prev => ({...prev, [id]: false})); };
      img.src = src;
    };

    loadAndProcess(examples[0].beforeImage, 1, (url) => generateGridEffect(url, 50, "#000000", 0.4));
    loadAndProcess(examples[1].beforeImage, 2, (url) => generateLineArtEffect(url, 10, 1));
    loadAndProcess(examples[2].beforeImage, 3, (url) => generateSketchEffect(url, 5, "graphite"));
  }, []);

  return (
    <section className="py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">See it in action</h2>
        <p className="text-gray-500 mb-8">Drag the slider to compare before and after.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {examples.map((example) => (
            <div key={example.id}>
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-50 border border-gray-100">
                {loading[example.id] ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-2 border-gray-300 border-t-gray-600"></div>
                  </div>
                ) : processedImages[example.id] ? (
                  <BeforeAfterComparison
                    beforeImage={example.beforeImage}
                    afterImage={processedImages[example.id]}
                    title=""
                    description=""
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm text-gray-400">
                    Failed to load
                  </div>
                )}
              </div>
              <div className="mt-3">
                <h3 className="font-medium text-gray-900 text-sm">{example.title}</h3>
                <p className="text-sm text-gray-500">{example.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
