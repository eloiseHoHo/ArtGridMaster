import type { Metadata } from "next";
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

          <ClientGridSplitterWrapper />
        </div>

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
