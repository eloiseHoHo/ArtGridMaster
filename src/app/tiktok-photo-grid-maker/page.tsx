import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Download, LayoutGrid, Smartphone } from "lucide-react";
import ClientGridCollageWrapper from "@/components/ClientGridCollageWrapper";

export const metadata: Metadata = {
  title: "TikTok Photo Grid Maker — Free 9:16 Portrait Grids, No App",
  description:
    "Build TikTok-ready photo grids in 10 seconds. Free online maker optimized for 9:16 vertical format, perfect for TikTok photo mode posts and Stories. No app, no signup, no watermark.",
  keywords: [
    "tiktok photo grid maker",
    "tiktok photo grid",
    "tiktok grid photo",
    "tiktok 9 photo grid",
    "tiktok photo post maker",
    "9:16 photo grid",
    "vertical photo grid",
    "tiktok collage maker",
    "tiktok photo carousel grid",
    "portrait photo grid online",
  ],
  alternates: { canonical: "https://photogrid.space/tiktok-photo-grid-maker" },
  openGraph: {
    title: "TikTok Photo Grid Maker — Free 9:16 Vertical Grids",
    description:
      "Build TikTok-optimized 9:16 photo grids in 10 seconds. In-browser, no app, no signup.",
    url: "https://photogrid.space/tiktok-photo-grid-maker",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What aspect ratio does TikTok use for photo posts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TikTok photo posts use 9:16 vertical (1080×1920). This tool's default 3×3 grid is already set to 9:16 portrait so your grid fits the TikTok feed without cropping.",
      },
    },
    {
      "@type": "Question",
      name: "How do I post a photo grid on TikTok?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Download the grid from this tool as a PNG, then open the TikTok app → + → Photo → upload the grid as a single photo, or upload multiple grid variants as a swipeable carousel.",
      },
    },
    {
      "@type": "Question",
      name: "Can I make a 3-photo horizontal TikTok strip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — once the tool loads, change the layout preset to 1×3 or any custom configuration. The 3×3 9:16 is just the default for TikTok photo grids.",
      },
    },
    {
      "@type": "Question",
      name: "Is the TikTok photo grid maker free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. No signup, no watermark, no usage cap. All rendering is done in your browser — your photos are not uploaded to any server.",
      },
    },
  ],
};

export default function TikTokPhotoGridMaker() {
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
                TikTok Photo Grid Maker
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Build 9:16 vertical photo grids optimized for TikTok photo mode.
                Upload, arrange, download — no app, no signup.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>No uploads to server</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>PNG ready for TikTok</span>
              </div>
              <div className="flex items-center gap-2">
                <LayoutGrid className="h-4 w-4" />
                <span>9:16 portrait by default</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                <span>Works on phone & desktop</span>
              </div>
            </div>
          </div>

          <ClientGridCollageWrapper
            initialTemplate={{ rows: 3, cols: 3, aspectW: 9, aspectH: 16, gap: 4 }}
          />
        </div>

        {/* TikTok post workflow */}
        <section className="py-16 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Post a photo grid on TikTok in 3 steps
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    1
                  </span>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                  Build the grid
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Drop 9 photos into the tool above. 9:16 aspect is preset.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    2
                  </span>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                  Download PNG
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Save the grid to your device. Full resolution, no watermark.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    3
                  </span>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                  Upload to TikTok
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Open TikTok → + → Photo → upload your grid as a single post
                  or carousel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-14 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Related tools &amp; guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <Link
                href="/blog/tiktok-photo-grid-guide"
                className="block p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-violet-400 dark:hover:border-violet-500 transition"
              >
                <div className="font-medium text-gray-900 dark:text-white mb-1">
                  TikTok Photo Grid Guide →
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  Best layouts, posting workflow, and tips for views.
                </div>
              </Link>
              <Link
                href="/3x3-photo-grid-maker"
                className="block p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-violet-400 dark:hover:border-violet-500 transition"
              >
                <div className="font-medium text-gray-900 dark:text-white mb-1">
                  3×3 Photo Grid →
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  Square 1:1 9-photo grid for Instagram feeds.
                </div>
              </Link>
              <Link
                href="/instagram-grid-splitter"
                className="block p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-violet-400 dark:hover:border-violet-500 transition"
              >
                <div className="font-medium text-gray-900 dark:text-white mb-1">
                  Instagram Grid Splitter →
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  Split one photo into 9 puzzle tiles for IG profile.
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
