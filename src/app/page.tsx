import type { Metadata } from "next";
import { Shield, Download, Zap, Users } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import SocialProofStrip from "@/components/SocialProofStrip";
import MoreToolsSection from "@/components/MoreToolsSection";
import HomeHero from "@/components/HomeHero";

export const metadata: Metadata = {
  title:
    "Photo Grid Maker Online | Free, No Watermark",
  description:
    "Create a photo grid online in seconds. Upload photos, choose 2x2, 3x3, or custom layouts, and download PNG. Free, no signup, no watermark.",
  keywords: [
    "photo grid",
    "grid photo",
    "photo grid maker",
    "photo grid online",
    "photo grid maker online free",
    "photo collage grid",
    "make photo grid",
    "photo grid free",
    "grid collage maker",
    "photo grid collage",
    "instagram grid maker",
    "photo grid app online",
  ],
  openGraph: {
    title:
      "Photo Grid Maker Online | Free, No Watermark",
    description:
      "Create a photo grid online in seconds. Choose a layout, adjust spacing, and download PNG. Free, no signup, no watermark.",
    url: "https://photogrid.space",
  },
  alternates: { canonical: "https://photogrid.space" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I make a photo grid online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your photos, choose a grid layout (2×2, 3×3, or custom), adjust spacing and style, then download your grid as a PNG. All processing happens in your browser — no signup required.",
      },
    },
    {
      "@type": "Question",
      name: "Is PhotoGrid.space really 100% free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all tools are completely free with no usage limits, no signup required, no watermarks, and no hidden fees.",
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
      name: "What image formats and sizes are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We support JPEG, PNG, and WebP formats up to 10MB. Output is downloaded as high-quality PNG at 1080px resolution.",
      },
    },
  ],
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "PhotoGrid.space",
  url: "https://photogrid.space",
  description:
    "Free online photo grid maker for creating collages, splitting images for Instagram, and art transformation tools.",
  applicationCategory: "DesignApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "5200",
  },
  featureList:
    "Photo Grid Collage, Instagram Grid Splitter, Grid Overlay, Line Art Converter, Pencil Sketch, Coloring Page Generator, Paint by Numbers, Pixel Art Converter, Watercolor Effects",
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
        {/* Compact Hero */}
        <div className="pt-6 pb-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-5">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-2">
                Free Photo Grid Maker Online
              </h1>
              <p className="text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                Upload photos, pick a layout, download your grid. No app, no signup, no watermark.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
              {[
                { icon: Shield, text: "No registration" },
                { icon: Download, text: "Instant download" },
                { icon: Zap, text: "Browser-based" },
                { icon: Users, text: "50,000+ grids made" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-gray-800/60 text-sm text-gray-600 dark:text-gray-300">
                  <Icon className="h-3.5 w-3.5 text-violet-500" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Template strip + Collage tool (above the fold) */}
        <HomeHero />

        {/* Social proof */}
        <SocialProofStrip />

        {/* More tools (Splitter, Grid Overlay, Art tools collapsed) */}
        <div className="py-16 bg-gray-50/50 dark:bg-gray-900/30">
          <MoreToolsSection />
        </div>

        {/* FAQ */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <FAQSection />
        </div>
      </main>
    </>
  );
}
