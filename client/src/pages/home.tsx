import SimpleImageEditor from "@/components/SimpleImageEditorNew";
import FeatureSection from "@/components/FeatureSection";
import FAQSection from "@/components/FAQSection";
import ExamplesShowcase from "@/components/RealTransformationExamples";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Free Photo Grid, Line Art, Sketch & Coloring Tools - PhotoGrid.space</title>
        <meta name="description" content="Transform photos into grids, line art, sketches, coloring pages, paint by numbers, pixel art & paintings. 100% free, no signup. 7 tools for artists in one place." />
        <meta name="keywords" content="free photo grid, photo to line art, photo to sketch, photo to coloring page, paint by numbers generator, photo to pixel art, photo to watercolor, grid method drawing, artist tools, free drawing grid" />
        <meta property="og:title" content="Free Photo Grid, Line Art, Sketch & Coloring Tools - PhotoGrid.space" />
        <meta property="og:description" content="Transform photos into grids, line art, sketches, coloring pages, paint by numbers, pixel art & paintings. 100% free, no signup. 7 tools for artists in one place." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photogrid.space" />
        <link rel="canonical" href="https://www.photogrid.space" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="37.09024;-95.712891" />
        <meta name="ICBM" content="37.09024, -95.712891" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"PhotoGrid.space","url":"https://www.photogrid.space","description":"Free online photo transformation tools for artists - grids, line art, sketches, coloring pages, paint by numbers, pixel art, and painting effects","applicationCategory":"DesignApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","ratingCount":"5200"}})}</script>
      </Helmet>

      <main>
        <div className="pt-12 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
                Transform your photos into art
              </h1>
              <p className="text-lg text-gray-500 max-w-xl mx-auto">
                Grids, line art, sketches, coloring pages, pixel art, and more. Free, no signup needed.
              </p>
            </div>
          </div>
          <SimpleImageEditor />
        </div>

        <ExamplesShowcase />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Why artists use the grid method
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>
                  The <strong>grid method</strong> is one of the most reliable techniques for achieving accurate proportions in drawings and paintings. By overlaying a grid on a reference photo, you can focus on one small section at a time.
                </p>
                <p>
                  PhotoGrid makes this process instant and digital. Upload any photo, customize your grid density, color, and style, then download the result. Works for portraits, landscapes, still life, and more.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Break complex images into manageable sections",
                  "Maintain proportions when scaling to canvas",
                  "Train your eye for spatial relationships",
                  "Works with any subject matter",
                  "Customize grid size, color, and opacity",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
                <div className="pt-4">
                  <Link href="/categories">
                    <a className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
                      Browse grid categories
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <FeatureSection />
          <FAQSection />
        </div>
      </main>
    </>
  );
}
