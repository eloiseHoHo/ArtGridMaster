import type { Metadata } from "next";
import { Shield, Download, Sliders, Users } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import VisualToolShowcase from "@/components/VisualToolShowcase";
import ClientGridCollageWrapper from "@/components/ClientGridCollageWrapper";

export const metadata: Metadata = {
  title:
    "PhotoGrid Online — Free Photo Collage & Instagram Grid Splitter",
  description:
    "Create social-ready photo grids online free. Make collages, split images for Instagram puzzle posts, and use art tools like grid overlay, line art, and sketch. No app, no signup, no watermark.",
  keywords: [
    "photogrid online",
    "add grid to photo online free",
    "grid drawing online",
    "grid drawing tool online free",
    "grid art online",
    "image to grid",
    "photo to grid converter",
    "grid image online",
    "free photo grid maker",
    "grid lines maker",
    "photo to line art",
    "photo to sketch",
    "pixel art converter",
    "photo grid collage",
    "photo grid maker online",
  ],
  openGraph: {
    title:
      "PhotoGrid Online — Free Photo Collage & Instagram Grid Splitter",
    description:
      "Create photo collages, split images for Instagram grids, and transform photos with free art tools — all in your browser.",
    url: "https://www.photogrid.space",
  },
  alternates: { canonical: "https://www.photogrid.space" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do PhotoGrid collage and splitter tools work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose Photo Grid Collage to combine multiple photos into one layout, or Instagram Grid Splitter to cut one image into grid tiles. You can customize layout and export instantly. All processing happens in your browser.",
      },
    },
    {
      "@type": "Question",
      name: "Is PhotoGrid.space really 100% free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all 9 tools are completely free with no usage limits, no signup required, no watermarks, and no hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "Are my photos safe when I use PhotoGrid.space?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. All image processing happens entirely in your browser. Your photos are never uploaded to our servers.",
      },
    },
    {
      "@type": "Question",
      name: "What image formats are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We support JPEG, JPG, and PNG formats up to 10MB. All output can be downloaded as PNG files.",
      },
    },
  ],
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "PhotoGrid.space",
  url: "https://www.photogrid.space",
  description:
    "Free online photo grid platform for social creators: collage maker, Instagram grid splitter, and art transformation tools",
  applicationCategory: "DesignApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "5200",
  },
  featureList:
    "Photo Grid Collage, Instagram Grid Splitter, Grid Overlay, Line Art Converter, Pencil Sketch, Coloring Page Generator, Paint by Numbers, Pixel Art Converter, Watercolor & Oil Painting Effects",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* Hero */}
        <div className="pt-12 pb-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
                Free Photo Grid Maker Online — Collage, Splitter & Art Tools
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Build social-ready photo grids in seconds, then explore drawing
                and art effects in one place. No app, no signup, no watermark.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>No registration</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Instant downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Sliders className="h-4 w-4" />
                <span>Fully customizable</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>10,000+ creators use it</span>
              </div>
            </div>

          </div>
        </div>

        {/* Visual tool gallery — hero の直下で全ツールを視覚的に紹介 */}
        <div className="pb-8 pt-6">
          <VisualToolShowcase />
        </div>

        {/* Quick-try collage tool */}
        <div className="pt-10 pb-16 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900">Try Photo Grid Collage</h2>
            <p className="text-sm text-gray-500 mt-1">Upload photos, pick a layout, download instantly — no signup.</p>
          </div>
          <ClientGridCollageWrapper />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <FAQSection />
        </div>
      </main>
    </>
  );
}
