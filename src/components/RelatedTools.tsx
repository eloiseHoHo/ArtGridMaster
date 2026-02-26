"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Tool {
  name: string;
  path: string;
  description: string;
}

const allTools: Record<string, Tool> = {
  grid: {
    name: "Photo Grid Maker",
    path: "/photo-to-grid",
    description: "Add customizable grid overlays to photos for accurate drawing references",
  },
  lineart: {
    name: "Photo to Line Art",
    path: "/photo-to-lineart",
    description: "Convert photos into clean line drawings for coloring pages and illustrations",
  },
  sketch: {
    name: "Photo to Sketch",
    path: "/photo-to-sketch",
    description: "Transform photos into realistic pencil sketches and charcoal drawings",
  },
  coloring: {
    name: "Coloring Page Maker",
    path: "/photo-to-coloring-page",
    description: "Create printable coloring pages from any photo for kids and adults",
  },
  paintbynumbers: {
    name: "Paint by Numbers",
    path: "/photo-to-paint-by-numbers",
    description: "Generate custom paint by numbers templates with numbered color regions",
  },
  pixelart: {
    name: "Pixel Art Converter",
    path: "/photo-to-pixel-art",
    description: "Convert photos into retro pixel art with customizable pixel size",
  },
  watercolor: {
    name: "Watercolor & Oil Painting",
    path: "/photo-to-watercolor",
    description: "Apply beautiful watercolor and oil painting effects to your photos",
  },
  splitter: {
    name: "Instagram Grid Splitter",
    path: "/instagram-grid-splitter",
    description: "Split photos into perfect grid pieces for stunning Instagram profile layouts",
  },
};

interface RelatedToolsProps {
  currentTool: string;
}

export default function RelatedTools({ currentTool }: RelatedToolsProps) {
  const relatedTools = Object.entries(allTools)
    .filter(([key]) => key !== currentTool)
    .map(([, tool]) => tool);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Explore Our Other Free Tools
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Discover more ways to transform your photos into beautiful artwork
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {relatedTools.map((tool) => (
            <Link key={tool.path} href={tool.path}>
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {tool.description}
                  </p>
                  <div className="flex items-center text-primary hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <span className="text-sm font-medium">Try Now</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/">
            <Button size="lg" className="bg-primary hover:bg-primary-600 dark:hover:bg-primary-700 text-white">
              Start Creating Now - It&apos;s Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
