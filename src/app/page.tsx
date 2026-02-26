import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Download, Sliders, Users, ArrowRight } from "lucide-react";
import FeatureSection from "@/components/FeatureSection";
import FAQSection from "@/components/FAQSection";
import RealTransformationExamples from "@/components/RealTransformationExamples";
import ClientEditorWrapper from "@/components/ClientEditorWrapper";

export const metadata: Metadata = {
  title:
    "Free Photo Grid Maker, Line Art & Sketch Creator for Artists | PhotoGrid.space",
  description:
    "Transform photos into artist grids, line art, sketches, coloring pages, paint by numbers, pixel art & paintings. 100% free online tool, no signup required. Used by 10,000+ artists worldwide.",
  keywords: [
    "free photo grid maker",
    "photo to line art",
    "photo to sketch",
    "grid drawing tool",
    "artist grid generator",
    "coloring page maker",
    "paint by numbers generator",
    "pixel art converter",
    "free drawing grid",
    "grid method drawing",
  ],
  openGraph: {
    title:
      "Free Photo Grid Maker, Line Art & Sketch Creator for Artists | PhotoGrid.space",
    description:
      "Transform photos into artist grids, line art, sketches, coloring pages, paint by numbers, pixel art & paintings. 100% free, no signup.",
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
      name: "How does the grid transformation work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our grid tool overlays a customizable grid pattern on your image. You can adjust grid size, opacity, color, and style to create the perfect reference for transferring to canvas or paper. All processing happens in your browser for instant results.",
      },
    },
    {
      "@type": "Question",
      name: "Is PhotoGrid.space really 100% free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all 7 tools are completely free with no usage limits, no signup required, no watermarks, and no hidden fees.",
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
    "Free online photo transformation tools for artists - grids, line art, sketches, coloring pages, paint by numbers, pixel art, and painting effects",
  applicationCategory: "DesignApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "5200",
  },
  featureList:
    "Grid Overlay, Line Art Converter, Pencil Sketch, Coloring Page Generator, Paint by Numbers, Pixel Art Converter, Watercolor & Oil Painting Effects",
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
        <div className="pt-12 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
                Free Online Grid Maker & Photo Art Tools for Artists
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Transform your reference photos into drawing grids, line art,
                sketches, coloring pages, paint by numbers, pixel art, and
                watercolor paintings. 100% free, no signup needed.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-gray-500">
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
                <span>10,000+ artists use it</span>
              </div>
            </div>
          </div>
          <ClientEditorWrapper />
        </div>

        <RealTransformationExamples />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Why Artists Use the Grid Drawing Method
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>
                  The <strong>grid drawing method</strong> is one of the most
                  powerful techniques in an artist&apos;s toolkit, used by master
                  artists for centuries — from Renaissance painters like{" "}
                  <strong>Albrecht Durer</strong> and{" "}
                  <strong>Leonardo da Vinci</strong> to modern hyperrealists.
                </p>
                <p>
                  By overlaying a grid on a reference photo, you can focus on
                  reproducing one small section at a time, rather than being
                  overwhelmed by the whole image.
                </p>
                <p>
                  PhotoGrid.space transforms this traditional technique for the
                  digital age. Upload any photo, customize your{" "}
                  <strong>grid density, color, opacity, and line style</strong>,
                  then download the result instantly. Works perfectly for{" "}
                  <Link
                    href="/photo-to-grid"
                    className="text-gray-900 dark:text-gray-100 underline"
                  >
                    canvas transfers
                  </Link>
                  , mural planning, and art education.
                </p>
              </div>
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>
                  Beyond grids, our suite includes{" "}
                  <Link
                    href="/photo-to-lineart"
                    className="text-gray-900 dark:text-gray-100 underline"
                  >
                    line art conversion
                  </Link>
                  ,{" "}
                  <Link
                    href="/photo-to-sketch"
                    className="text-gray-900 dark:text-gray-100 underline"
                  >
                    pencil sketch effects
                  </Link>
                  ,{" "}
                  <Link
                    href="/photo-to-coloring-page"
                    className="text-gray-900 dark:text-gray-100 underline"
                  >
                    coloring page generation
                  </Link>
                  , and more — all processed instantly in your browser with zero
                  uploads to external servers.
                </p>
                <p>
                  Whether you&apos;re a professional illustrator, art student, or
                  hobbyist, these tools help you create accurate reference
                  materials for any medium: pencil, charcoal, watercolor, oil
                  painting, or digital art.
                </p>
              </div>
            </div>
          </section>

          <FeatureSection />
          <FAQSection />
        </div>
      </main>
    </>
  );
}
