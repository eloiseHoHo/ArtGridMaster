import SimpleImageEditor from "@/components/SimpleImageEditorNew";
import FeatureSection from "@/components/FeatureSection";
import FAQSection from "@/components/FAQSection";
import ExamplesShowcase from "@/components/RealTransformationExamples";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { ArrowRight, Users, Download, Sliders, Shield } from "lucide-react";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How does the grid transformation work?", "acceptedAnswer": { "@type": "Answer", "text": "Our grid tool overlays a customizable grid pattern on your image. You can adjust grid size, opacity, color, and style to create the perfect reference for transferring to canvas or paper. All processing happens in your browser for instant results." } },
    { "@type": "Question", "name": "Is PhotoGrid.space really 100% free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, all 7 tools are completely free with no usage limits, no signup required, no watermarks, and no hidden fees. We believe artist tools should be accessible to everyone." } },
    { "@type": "Question", "name": "Are my photos safe when I use PhotoGrid.space?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. All image processing happens entirely in your browser using client-side technology. Your photos are never uploaded to our servers, ensuring complete privacy and security." } },
    { "@type": "Question", "name": "What image formats are supported?", "acceptedAnswer": { "@type": "Answer", "text": "We support JPEG, JPG, and PNG formats up to 10MB. For the best results, we recommend high-resolution images. All output can be downloaded as PNG files." } },
    { "@type": "Question", "name": "Can I use the transformed images commercially?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. You upload your own images and we provide the transformation tools. You retain all rights to the resulting artwork for both personal and commercial use." } },
    { "@type": "Question", "name": "What tools does PhotoGrid.space offer?", "acceptedAnswer": { "@type": "Answer", "text": "PhotoGrid.space offers 7 free tools: Grid Overlay for proportional drawing, Line Art converter, Pencil Sketch effect, Coloring Page generator, Paint by Numbers creator, Pixel Art converter, and Watercolor & Oil Painting effects." } },
    { "@type": "Question", "name": "Do I need to install any software?", "acceptedAnswer": { "@type": "Answer", "text": "No installation needed. PhotoGrid.space works entirely in your web browser on any device - desktop, tablet, or mobile. Simply visit the website, upload your image, and start transforming." } },
    { "@type": "Question", "name": "Can I use PhotoGrid for portrait drawing?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, PhotoGrid is excellent for portrait drawing. The grid overlay tool helps you capture accurate facial proportions, and the line art and sketch tools can create reference outlines for portrait work. Many portrait artists use grid methods to achieve accurate proportions." } },
  ]
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "PhotoGrid.space",
  "url": "https://photogrid.space",
  "description": "Free online photo transformation tools for artists - grids, line art, sketches, coloring pages, paint by numbers, pixel art, and painting effects",
  "applicationCategory": "DesignApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "5200" },
  "featureList": "Grid Overlay, Line Art Converter, Pencil Sketch, Coloring Page Generator, Paint by Numbers, Pixel Art Converter, Watercolor & Oil Painting Effects"
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Free Photo Grid Maker, Line Art & Sketch Creator for Artists | PhotoGrid.space</title>
        <meta name="description" content="Transform photos into artist grids, line art, sketches, coloring pages, paint by numbers, pixel art & paintings. 100% free online tool, no signup required. Used by 10,000+ artists worldwide." />
        <meta name="keywords" content="free photo grid maker, photo to line art, photo to sketch, grid drawing tool, artist grid generator, coloring page maker, paint by numbers generator, pixel art converter, free drawing grid, grid method drawing, drawing grid generator, art scaling grid, proportional grid maker" />
        <meta property="og:title" content="Free Photo Grid Maker, Line Art & Sketch Creator for Artists | PhotoGrid.space" />
        <meta property="og:description" content="Transform photos into artist grids, line art, sketches, coloring pages, paint by numbers, pixel art & paintings. 100% free, no signup. 7 tools for artists in one place." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://photogrid.space" />
        <link rel="canonical" href="https://photogrid.space" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="37.09024;-95.712891" />
        <meta name="ICBM" content="37.09024, -95.712891" />
        <script type="application/ld+json">{JSON.stringify(appSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main>
        <div className="pt-12 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
                Free Online Grid Maker & Photo Art Tools for Artists
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Transform your reference photos into drawing grids, line art, sketches, coloring pages, paint by numbers, pixel art, and watercolor paintings. 100% free, no signup needed.
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
          <SimpleImageEditor />
        </div>

        <ExamplesShowcase />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Why Artists Use the Grid Drawing Method
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>
                  The <strong>grid drawing method</strong> is one of the most powerful techniques in an artist's toolkit, used by master artists for centuries — from Renaissance painters like <strong>Albrecht Durer</strong> and <strong>Leonardo da Vinci</strong> to modern hyperrealists. This time-tested approach breaks complex images into manageable sections, allowing artists to accurately capture proportions and spatial relationships.
                </p>
                <p>
                  By overlaying a grid on a reference photo, you can focus on reproducing one small section at a time, rather than being overwhelmed by the whole image. This effectively bypasses the common struggle where your analytical mind tries to label what you're seeing rather than perceiving the actual shapes and relationships.
                </p>
                <p>
                  PhotoGrid.space transforms this traditional technique for the digital age. Upload any photo, customize your <strong>grid density, color, opacity, and line style</strong>, then download the result instantly. Works perfectly for <strong>portraits, landscapes, still life, wildlife, architecture</strong>, and any other subject.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Break complex images into manageable sections for accurate transfer",
                  "Maintain perfect proportions when scaling artwork to any size",
                  "Train your eye to recognize spatial relationships and shapes",
                  "Works with any subject — portraits, landscapes, animals, architecture",
                  "Customize grid size, line color, opacity, and style",
                  "Used by professional artists, students, and teachers worldwide",
                  "Download as high-quality PNG for print or digital use",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
                <div className="pt-4">
                  <Link href="/photo-to-grid">
                    <a className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
                      Try the Grid Maker tool
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Who Benefits from PhotoGrid.space?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Beginners", desc: "Master proportions and gain confidence tackling complex subjects with grid drawing. The grid method is the fastest way to improve your drawing accuracy." },
                { title: "Art Students", desc: "Practice observational skills and develop your artistic eye. Grid drawing teaches you to see shapes and values, not just outlines." },
                { title: "Teachers", desc: "Create custom worksheets, demonstrations, and coloring pages for art classes. Generate paint by numbers templates for student exercises." },
                { title: "Professional Artists", desc: "Save time on preliminary layout work for commissioned pieces. Scale designs from small sketches to large canvases with precision." },
                { title: "Illustrators & Designers", desc: "Convert reference photos to line art for tracing, create pixel art assets, or generate sketch references for digital illustration work." },
                { title: "Hobbyists & Crafters", desc: "Turn your favorite photos into coloring pages, paint by numbers kits, or watercolor references for relaxing creative projects." },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-lg border border-gray-100">
                  <h3 className="font-medium text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How to Use the Grid Drawing Method
            </h2>
            <div className="max-w-3xl space-y-6 text-gray-600 leading-relaxed">
              <div className="flex gap-4">
                <span className="text-lg font-bold text-gray-300 flex-shrink-0 w-8">1</span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Upload your reference photo</h3>
                  <p>Choose any photo you want to draw or paint. Our tool supports JPEG and PNG formats up to 10MB. For best results, use a clear, well-lit reference image.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-lg font-bold text-gray-300 flex-shrink-0 w-8">2</span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Choose your transformation</h3>
                  <p>Select from 7 tools: grid overlay for proportional drawing, line art for clean outlines, pencil sketch for artistic style, coloring page for printable outlines, paint by numbers for guided painting, pixel art for retro style, or watercolor/oil painting effects.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-lg font-bold text-gray-300 flex-shrink-0 w-8">3</span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Customize settings</h3>
                  <p>Adjust grid density, line thickness, colors, opacity, and other parameters to match your artistic style and medium. Preview changes in real-time before downloading.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-lg font-bold text-gray-300 flex-shrink-0 w-8">4</span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Download and create</h3>
                  <p>Download your transformed image as a high-quality PNG file. Print it out for traditional art, or use it digitally in any software. Your images are processed entirely in your browser — they never leave your device.</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/blog">
                <a className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
                  Read our drawing tutorials
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Link>
            </div>
          </section>

          <FeatureSection />

          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose PhotoGrid.space Over Other Grid Makers?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>
                  Unlike single-purpose grid makers, PhotoGrid.space gives you <strong>7 professional-grade tools in one place</strong> — completely free. Most alternatives offer only basic grid overlays, but we provide a complete artist toolkit including line art conversion, sketch effects, coloring page generation, paint by numbers templates, pixel art creation, and painting effects.
                </p>
                <p>
                  All processing happens <strong>entirely in your browser</strong>. Your images are never uploaded to any server, ensuring complete privacy. There are no watermarks, no usage limits, no account creation, and no hidden fees. Just upload, transform, and download.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "7 tools in one place — no need for multiple websites",
                  "100% browser-based — your images never leave your device",
                  "No watermarks on any downloads",
                  "No signup or account required",
                  "No usage limits — transform as many images as you want",
                  "Works on desktop, tablet, and mobile devices",
                  "High-quality PNG output for print and digital use",
                  "Instant results — no waiting for server processing",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Popular Uses for Our Photo Transformation Tools
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { use: "Portrait Drawing", link: "/photo-to-grid" },
                { use: "Landscape Art", link: "/photo-to-grid" },
                { use: "Wildlife Illustration", link: "/photo-to-lineart" },
                { use: "Tattoo Design", link: "/photo-to-lineart" },
                { use: "Adult Coloring Pages", link: "/photo-to-coloring-page" },
                { use: "Kids Coloring Books", link: "/photo-to-coloring-page" },
                { use: "Custom Paint by Numbers", link: "/photo-to-paint-by-numbers" },
                { use: "Retro Game Art", link: "/photo-to-pixel-art" },
                { use: "Watercolor Reference", link: "/photo-to-watercolor" },
                { use: "Architectural Drawing", link: "/photo-to-grid" },
                { use: "Comic Book Art", link: "/photo-to-sketch" },
                { use: "Art Therapy", link: "/photo-to-coloring-page" },
              ].map((item) => (
                <Link key={item.use} href={item.link}>
                  <a className="block p-3 text-sm text-gray-600 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-all">
                    {item.use}
                  </a>
                </Link>
              ))}
            </div>
          </section>

          <FAQSection />
        </div>
      </main>
    </>
  );
}
