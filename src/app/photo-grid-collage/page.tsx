import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Download, LayoutGrid, Smartphone } from "lucide-react";
import ClientGridCollageWrapper from "@/components/ClientGridCollageWrapper";

export const metadata: Metadata = {
  title:
    "Photo Grid Maker Online Free (No App Needed) — Create Photo Collage Grid in Seconds",
  description:
    "Make beautiful photo grid collages online for free. Upload photos, pick a grid layout (2×2, 3×3, or custom), adjust spacing and style, then download instantly. No app download required, no signup, no watermark.",
  keywords: [
    "photo grid maker",
    "photo grid collage",
    "photo grid online",
    "photo collage grid",
    "make photo grid",
    "photo grid maker free",
    "photo grid maker online",
    "create photo grid",
    "photo collage maker free",
    "grid collage maker",
    "photo grid layout",
    "combine photos into grid",
    "photo grid no app",
    "photo grid without app",
    "photo grid no download",
    "photogrid online alternative",
  ],
  alternates: {
    canonical: "https://www.photogrid.space/photo-grid-collage",
  },
  openGraph: {
    title:
      "Photo Grid Maker Online Free — Create Photo Collage Grid in Seconds",
    description:
      "Make beautiful photo grid collages for free. Upload photos, choose grid layout, download instantly.",
    url: "https://www.photogrid.space/photo-grid-collage",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I make a photo grid collage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload multiple photos, choose a grid layout (like 2×2 or 3×3), adjust spacing and background color, then download your collage. It's instant and completely free.",
      },
    },
    {
      "@type": "Question",
      name: "What grid sizes can I create?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can choose from preset layouts (1×2, 2×2, 3×3, 2×3, etc.) or create custom layouts with 1–5 rows and 1–5 columns. The maximum grid is 5×5 (25 photos).",
      },
    },
    {
      "@type": "Question",
      name: "Is this photo grid maker really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, completely free. No watermarks, no signup required, no usage limits. All processing happens in your browser — your photos are never uploaded to any server.",
      },
    },
    {
      "@type": "Question",
      name: "Can I customize the spacing and style?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! You can adjust the spacing between photos (0–30px), choose cell shapes (square, portrait, landscape), set background colors, and add rounded corners to each cell.",
      },
    },
  ],
};

export default function PhotoGridCollage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        <div className="pt-12 pb-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">
                Free Photo Grid Maker Online
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Combine multiple photos into a beautiful grid collage. Choose
                your layout, customize spacing and style, then download
                instantly.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>No uploads to server</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Instant download</span>
              </div>
              <div className="flex items-center gap-2">
                <LayoutGrid className="h-4 w-4" />
                <span>Up to 5×5 grid</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                <span>Works on any device</span>
              </div>
            </div>
          </div>

          {/* Visual Examples — shown before tool so users know what to expect */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-2 pb-10">
            <h2 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Example layouts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* 2x2 layout */}
              <div>
                <div className="grid grid-cols-2 gap-1 rounded-xl overflow-hidden mb-3 aspect-square">
                  <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&auto=format" alt="landscape" className="w-full h-full object-cover"/>
                  <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&h=400&fit=crop&auto=format" alt="flowers" className="w-full h-full object-cover"/>
                  <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=400&fit=crop&auto=format" alt="city" className="w-full h-full object-cover"/>
                  <img src="https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=400&h=400&fit=crop&auto=format" alt="beach" className="w-full h-full object-cover"/>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">2×2 Square Grid</p>
                <p className="text-xs text-gray-400 text-center mt-0.5">4 photos, equal cells</p>
              </div>

              {/* 1x3 horizontal strip */}
              <div>
                <div className="grid grid-cols-3 gap-1 rounded-xl overflow-hidden mb-3" style={{aspectRatio:"3/1"}}>
                  <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&auto=format" alt="landscape" className="w-full h-full object-cover"/>
                  <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&h=400&fit=crop&auto=format" alt="lake" className="w-full h-full object-cover"/>
                  <img src="https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=400&h=400&fit=crop&auto=format" alt="beach" className="w-full h-full object-cover"/>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">1×3 Horizontal Strip</p>
                <p className="text-xs text-gray-400 text-center mt-0.5">3 photos in a row</p>
              </div>

              {/* 3x3 layout */}
              <div>
                <div className="grid grid-cols-3 gap-0.5 rounded-xl overflow-hidden mb-3 aspect-square">
                  {[
                    "photo-1506905925346-21bda4d32df4",
                    "photo-1518173946687-a4c8892bbd9f",
                    "photo-1477959858617-67f85cf4f1df",
                    "photo-1470770841072-f978cf4d019e",
                    "photo-1505144808419-1957a94ca61e",
                    "photo-1444703686981-a3abbc4d4fe3",
                    "photo-1431440869543-efaf3388c585",
                    "photo-1447752875215-b2761acb3c5d",
                    "photo-1439853949212-36089060cc84",
                  ].map((id, i) => (
                    <img
                      key={i}
                      src={`https://images.unsplash.com/${id}?w=200&h=200&fit=crop&auto=format`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">3×3 Grid</p>
                <p className="text-xs text-gray-400 text-center mt-0.5">9 photos, compact layout</p>
              </div>
            </div>
          </div>

          <ClientGridCollageWrapper />
        </div>

        {/* How It Works */}
        <section className="py-16 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              How to Make a Photo Grid
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    1
                  </span>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                  Upload Photos
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Drag &amp; drop or select multiple photos from your device
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    2
                  </span>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                  Choose Layout
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Pick a grid preset or customize rows, columns, spacing, and
                  style
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    3
                  </span>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                  Download
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Preview your collage and download it as a high-quality image
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5 text-center">
              Learn More & Related Tools
            </h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              <p>
                Need to split one large image into tiles instead of combining
                photos? Try
                {" "}
                <Link
                  href="/instagram-grid-splitter"
                  className="text-gray-900 dark:text-white underline"
                >
                  Instagram Grid Splitter
                </Link>
                .
              </p>
              <p>
                Posting to TikTok? Read our
                {" "}
                <Link
                  href="/blog/tiktok-photo-grid-guide"
                  className="text-gray-900 dark:text-white underline"
                >
                  TikTok Photo Grid Guide
                </Link>
                {" "}
                for layout ideas and publishing tips.
              </p>
              <p>
                Comparing tools first? See
                {" "}
                <Link
                  href="/blog/best-photo-grid-makers"
                  className="text-gray-900 dark:text-white underline"
                >
                  Best Photo Grid Makers in 2026
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                    {faq.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
