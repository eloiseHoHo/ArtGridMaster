import SimpleImageEditor from "@/components/SimpleImageEditor";
import FeatureSection from "@/components/FeatureSection";
import ArtistsGallery from "@/components/ArtistsGallery";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
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
        <SimpleImageEditor />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* SEO optimized section for main keyword "Photo Grid" */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-6">Photo Grid: The Essential Tool for Artists</h2>
            <div className="prose max-w-none">
              <p>
                A <strong>photo grid</strong> is one of the most powerful techniques an artist can use to improve accuracy and proportion in their drawings and paintings. By overlaying a grid on a reference photo, artists can focus on one section at a time, making complex subjects more manageable and ensuring correct proportions.
              </p>
              <p>
                At GridArt Studio, we've revolutionized the traditional <strong>photo grid</strong> method by offering digital tools that create customized grid overlays instantly. Whether you're a beginner learning to draw or a professional artist working on commissioned portraits, our <strong>photo grid</strong> transformations will enhance your artistic process.
              </p>
              <h3>Benefits of Using Photo Grid Techniques</h3>
              <ul>
                <li><strong>Improved Accuracy</strong> - Break down complex images into manageable sections for better precision</li>
                <li><strong>Perfect Proportions</strong> - Maintain correct proportions throughout your artwork</li>
                <li><strong>Simplified Complexity</strong> - Make challenging subjects more approachable</li>
                <li><strong>Scale with Ease</strong> - Easily transfer images to different sizes while maintaining proportions</li>
                <li><strong>Enhanced Learning</strong> - Train your artistic eye as you work with the grid reference</li>
              </ul>
              <p>
                Our <strong>photo grid</strong> tools offer customizable options including grid density, color, opacity, and style. We've also developed specialized grid transformations for different subject matters like portraits, landscapes, and still life.
              </p>
              <div className="flex justify-center mt-8">
                <Link href="/categories">
                  <Button className="bg-primary hover:bg-primary-600 text-white">
                    Explore Photo Grid Categories
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <FeatureSection />
          <ArtistsGallery />
          <Testimonials />
          <FAQSection />
          <CTASection />
        </div>
      </main>
    </>
  );
}
