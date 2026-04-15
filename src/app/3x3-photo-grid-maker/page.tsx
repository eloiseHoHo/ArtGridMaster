import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Download, LayoutGrid, Smartphone } from "lucide-react";
import ClientGridCollageWrapper from "@/components/ClientGridCollageWrapper";

export const metadata: Metadata = {
  title: "3×3 Photo Grid Maker — Free 9-Photo Grid for Instagram, No App",
  description:
    "Make a perfect 3×3 photo grid in 10 seconds. Free online tool for Instagram profile grids, aesthetic 9-photo layouts, and social-ready collages. No app, no signup, no watermark — runs in your browser.",
  keywords: [
    "3x3 photo grid maker",
    "3x3 photo grid",
    "3 by 3 photo grid",
    "9 photo grid maker",
    "9 photo collage",
    "instagram 3x3 grid",
    "instagram profile grid maker",
    "aesthetic 9 grid",
    "3x3 collage online free",
    "nine photo grid",
  ],
  alternates: { canonical: "https://photogrid.space/3x3-photo-grid-maker" },
  openGraph: {
    title: "3×3 Photo Grid Maker — Free 9-Photo Grid Online",
    description:
      "Make a perfect 3×3 photo grid in 10 seconds. Instagram-ready, aesthetic-ready, in-browser. No app, no signup.",
    url: "https://photogrid.space/3x3-photo-grid-maker",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I make a 3×3 photo grid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload 9 photos, the layout is preset to 3 rows × 3 columns. Adjust the spacing, background color, and corner radius to taste, then download as PNG.",
      },
    },
    {
      "@type": "Question",
      name: "What size should my 3×3 grid images be for Instagram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For an Instagram profile 3×3, each cell should match Instagram's 1:1 square post format. Download at 1080×1080 per cell, or let the tool auto-size the grid image to the correct resolution.",
      },
    },
    {
      "@type": "Question",
      name: "Can I save the 3×3 grid as separate 9 images?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This tool outputs a single combined 3×3 grid image. If you want to split one photo into 9 separate tiles to post on your Instagram profile, use our Instagram Grid Splitter instead.",
      },
    },
    {
      "@type": "Question",
      name: "Is the 3×3 photo grid maker free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. No signup, no watermark, no usage limit. All processing happens in your browser — your photos never leave your device.",
      },
    },
  ],
};

export default function ThreeByThreePhotoGridMaker() {
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
                3×3 Photo Grid Maker Online Free
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Drop in 9 photos, get a perfectly arranged 3×3 grid in seconds.
                Ideal for Instagram profile feeds, aesthetic mood boards, and
                monthly recap posts.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>No uploads to server</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Instant PNG download</span>
              </div>
              <div className="flex items-center gap-2">
                <LayoutGrid className="h-4 w-4" />
                <span>Preset to 3×3 — 9 cells</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                <span>Works on phone & desktop</span>
              </div>
            </div>
          </div>

          <ClientGridCollageWrapper
            initialTemplate={{ rows: 3, cols: 3, aspectW: 1, aspectH: 1, gap: 4 }}
          />
        </div>

        {/* When to use a 3×3 grid */}
        <section className="py-16 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              When to use a 3×3 photo grid
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Instagram feed aesthetic
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Preview how your next 9 posts will look together on your
                  profile before you publish.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Monthly recap / year in photos
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Summarize a trip, year, or project in a clean 9-photo
                  story-ready grid.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Product / portfolio tile
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Show 9 variants, 9 clients, or 9 products in one unified
                  visual block.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related tools */}
        <section className="py-14 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Need a different grid?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <Link
                href="/photo-grid-collage"
                className="block p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-violet-400 dark:hover:border-violet-500 transition"
              >
                <div className="font-medium text-gray-900 dark:text-white mb-1">
                  Any-size Photo Grid →
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  2×2, 4×4, custom rows and columns up to 5×5.
                </div>
              </Link>
              <Link
                href="/instagram-grid-splitter"
                className="block p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-violet-400 dark:hover:border-violet-500 transition"
              >
                <div className="font-medium text-gray-900 dark:text-white mb-1">
                  Split 1 Photo into 9 →
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  Cut a single image into 9 tiles for the Instagram profile
                  puzzle look.
                </div>
              </Link>
              <Link
                href="/photo-to-grid"
                className="block p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-violet-400 dark:hover:border-violet-500 transition"
              >
                <div className="font-medium text-gray-900 dark:text-white mb-1">
                  Grid-method Overlay →
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  Add a drawing grid on top of a single reference photo.
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
