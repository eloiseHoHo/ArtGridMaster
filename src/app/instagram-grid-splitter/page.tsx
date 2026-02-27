import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Download, Scissors, Smartphone } from "lucide-react";
import ClientGridSplitterWrapper from "@/components/ClientGridSplitterWrapper";

export const metadata: Metadata = {
  title: "Free Instagram Grid Splitter - Split Photos into 3, 6, 9 Pieces Online",
  description:
    "Split your photos into perfect grid pieces for Instagram. Free online image splitter — create 3, 6, 9, or custom grid layouts. No signup, no watermark. Download all pieces as ZIP.",
  keywords: [
    "instagram grid splitter",
    "instagram grid maker",
    "split photo for instagram",
    "photo splitter for instagram",
    "instagram puzzle grid",
    "instagram carousel splitter",
    "image splitter online free",
    "photo grid cutter",
    "split image into 9 parts",
    "split image into 3 parts",
    "instagram profile grid",
    "photo grid splitter online",
  ],
  alternates: { canonical: "https://www.photogrid.space/instagram-grid-splitter" },
  openGraph: {
    title: "Free Instagram Grid Splitter - Split Photos into 3, 6, 9 Pieces Online",
    description:
      "Split photos into perfect grid pieces for Instagram. Create stunning profile layouts with our free online splitter tool.",
    url: "https://www.photogrid.space/instagram-grid-splitter",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I split a photo for Instagram grid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your photo, choose your grid size (e.g. 3×3 for 9 pieces), click Split, then download all pieces. Post them in reverse order on Instagram to display the complete image on your profile.",
      },
    },
    {
      "@type": "Question",
      name: "What order should I post Instagram grid photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Post in reverse order — start with the last piece (e.g. piece #9 for a 3×3 grid) and end with piece #1. This ensures the images appear in the correct order on your Instagram profile grid.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best image size for Instagram grid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a 3×3 grid, use at least a 1080×1080 pixel image. Each piece will be 360×360px, which Instagram displays well. Higher resolution images produce better results.",
      },
    },
    {
      "@type": "Question",
      name: "Is this Instagram grid splitter free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, completely free with no watermarks, no signup required, and no usage limits. All processing happens in your browser — your images are never uploaded to any server.",
      },
    },
  ],
};

export default function InstagramGridSplitter() {
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
                Free Instagram Grid Splitter
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Split any photo into perfectly sized pieces for your Instagram profile grid.
                Create stunning 3, 6, 9, or custom grid layouts instantly.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>No uploads to server</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Batch ZIP download</span>
              </div>
              <div className="flex items-center gap-2">
                <Scissors className="h-4 w-4" />
                <span>1–9 rows &amp; columns</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                <span>Works on any device</span>
              </div>
            </div>
          </div>

          {/* Visual Examples — before the tool */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-2 pb-10">
            <h2 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-1">
              How it looks on your profile
            </h2>
            <p className="text-sm text-gray-400 mb-6">One image → split into tiles → post in reverse order.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
              {/* 3x3 split */}
              <div>
                <div className="grid grid-cols-3 gap-0.5 rounded-xl overflow-hidden mb-3 aspect-square">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="relative aspect-square"
                      style={{
                        backgroundImage: "url(https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?w=900&h=900&fit=crop&auto=format)",
                        backgroundSize: "300% 300%",
                        backgroundPosition: `${(i % 3) * 50}% ${Math.floor(i / 3) * 50}%`,
                      }}
                    >
                      <span className="absolute bottom-0.5 right-0.5 text-white text-xs font-bold bg-black/50 rounded px-1 leading-tight">{i + 1}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">3×3 — 9 tiles</p>
                <p className="text-xs text-gray-400 text-center mt-0.5">Post tile 9 first, tile 1 last</p>
              </div>

              {/* 1x3 horizontal strip */}
              <div>
                <div className="grid grid-cols-3 gap-0.5 rounded-xl overflow-hidden mb-3" style={{ aspectRatio: "3/1" }}>
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="relative"
                      style={{
                        backgroundImage: "url(https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?w=900&h=300&fit=crop&auto=format)",
                        backgroundSize: "300% 100%",
                        backgroundPosition: `${i * 50}% 0%`,
                      }}
                    >
                      <span className="absolute bottom-0.5 right-0.5 text-white text-xs font-bold bg-black/50 rounded px-1 leading-tight">{i + 1}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">1×3 — 3 tiles</p>
                <p className="text-xs text-gray-400 text-center mt-0.5">A wide panorama split into 3</p>
              </div>

              {/* 2x3 split */}
              <div>
                <div className="grid grid-cols-3 gap-0.5 rounded-xl overflow-hidden mb-3" style={{ aspectRatio: "3/2" }}>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="relative aspect-square"
                      style={{
                        backgroundImage: "url(https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?w=900&h=600&fit=crop&auto=format)",
                        backgroundSize: "300% 200%",
                        backgroundPosition: `${(i % 3) * 50}% ${Math.floor(i / 3) * 100}%`,
                      }}
                    >
                      <span className="absolute bottom-0.5 right-0.5 text-white text-xs font-bold bg-black/50 rounded px-1 leading-tight">{i + 1}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">2×3 — 6 tiles</p>
                <p className="text-xs text-gray-400 text-center mt-0.5">Two rows, three columns</p>
              </div>
            </div>
          </div>

          <ClientGridSplitterWrapper />
        </div>

        <section className="py-14 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5 text-center">
              Learn More & Related Tools
            </h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              <p>
                Planning your profile look? Read our
                {" "}
                <Link
                  href="/blog/instagram-grid-layout-guide"
                  className="text-gray-900 dark:text-white underline"
                >
                  Instagram Grid Layout Guide
                </Link>
                {" "}
                for puzzle, checkerboard, and row-based grid styles.
              </p>
              <p>
                Need to combine multiple photos into one post instead of
                splitting one image? Try
                {" "}
                <Link
                  href="/photo-grid-collage"
                  className="text-gray-900 dark:text-white underline"
                >
                  Photo Grid Collage
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">{faq.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
