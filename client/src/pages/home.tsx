import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import ArtistsGallery from "@/components/ArtistsGallery";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>GridArt Studio - Transform Images for Artists</title>
        <meta name="description" content="Transform your images into grids, line art, and sketches. Perfect for artists looking to develop their drawing skills or create unique art." />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="GridArt Studio - Transform Images for Artists" />
        <meta property="og:description" content="Transform your images into grids, line art, and sketches. Perfect for artists looking to develop their drawing skills or create unique art." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gridart.studio" />
      </Helmet>
      
      <main>
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
