import SimpleImageEditor from "@/components/SimpleImageEditorNew";
import FeatureSection from "@/components/FeatureSection";
import ArtistsGallery from "@/components/ArtistsGallery";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ExamplesShowcase from "@/components/RealTransformationExamples";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Photo Grid for Artists | Transform Images with GridArt Studio</title>
        <meta name="description" content="Create customized Photo Grid transformations for artists. Transform your images into grid references, line art, and sketches to improve your artistic skills." />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Photo Grid for Artists | Transform Images with GridArt Studio" />
        <meta property="og:description" content="Create customized Photo Grid transformations. Transform your images into grid references, line art, and sketches to improve your artistic skills." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gridart.studio" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://gridart.studio" />
      </Helmet>
      
      <main>
        {/* Hero section with eye-catching gradient background */}
        <div className="bg-gradient-to-b from-indigo-500/10 via-purple-200/10 to-gray-50 pt-8 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
                Transform Your Photos for Art
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Create grid overlays, line art, and sketches from your photos to improve your drawing skills
              </p>
            </div>
          </div>
          <SimpleImageEditor />
        </div>
        
        {/* Example Showcase - with nicer styling */}
        <div className="bg-white py-16">
          <ExamplesShowcase />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
          {/* SEO optimized section for main keyword "Photo Grid" with improved styling */}
          <div className="mb-20 bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Photo Grid: The Essential Tool for Artists
            </h2>
            <div className="prose max-w-none">
              <p className="text-lg">
                A <strong>photo grid</strong> is one of the most powerful techniques an artist can use to improve accuracy and proportion in their drawings and paintings. By overlaying a grid on a reference photo, artists can focus on one section at a time, making complex subjects more manageable and ensuring correct proportions.
              </p>
              <p className="text-lg">
                At GridArt Studio, we've revolutionized the traditional <strong>photo grid</strong> method by offering digital tools that create customized grid overlays instantly. Whether you're a beginner learning to draw or a professional artist working on commissioned portraits, our <strong>photo grid</strong> transformations will enhance your artistic process.
              </p>
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Benefits of Using Photo Grid Techniques</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Improved Accuracy</strong> - Break down complex images into manageable sections for better precision</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Perfect Proportions</strong> - Maintain correct proportions throughout your artwork</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Simplified Complexity</strong> - Make challenging subjects more approachable</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Scale with Ease</strong> - Easily transfer images to different sizes while maintaining proportions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Enhanced Learning</strong> - Train your artistic eye as you work with the grid reference</span>
                </li>
              </ul>
              <p className="text-lg mt-6">
                Our <strong>photo grid</strong> tools offer customizable options including grid density, color, opacity, and style. We've also developed specialized grid transformations for different subject matters like portraits, landscapes, and still life.
              </p>
              <div className="flex justify-center mt-8">
                <Link href="/categories">
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg px-6 py-3 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
                    Explore Photo Grid Categories
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
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
