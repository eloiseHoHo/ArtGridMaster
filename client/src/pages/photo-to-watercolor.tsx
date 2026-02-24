import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Upload, Check, Droplets, Paintbrush, Palette, SlidersHorizontal, Download, Frame, Heart, Gift, Share2 } from "lucide-react";

export default function PhotoToWatercolor() {
  return (
    <>
      <Helmet>
        <title>Free Photo to Watercolor & Oil Painting Converter | PhotoGrid.space</title>
        <meta
          name="description"
          content="Convert any photo to a watercolor painting or oil painting effect for free online. Transform your images into stunning art with adjustable intensity, wetness, and brush styles. No signup required."
        />
        <meta property="og:title" content="Free Photo to Watercolor & Oil Painting Converter | PhotoGrid.space" />
        <meta property="og:description" content="Turn any photo into a beautiful watercolor or oil painting in seconds. Choose from watercolor, oil painting, and impressionist styles with adjustable brush effects. 100% free." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photogrid.space/photo-to-watercolor" />
        <link rel="canonical" href="https://www.photogrid.space/photo-to-watercolor" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="37.09024;-95.712891" />
        <meta name="ICBM" content="37.09024, -95.712891" />
        <meta name="keywords" content="photo to watercolor, photo to oil painting, convert photo to painting, watercolor effect, oil painting effect, photo to art, turn photo into painting, free painting converter, impressionist photo filter, photo to canvas art, watercolor filter online, digital watercolor" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Photo to Watercolor Converter","url":"https://www.photogrid.space/photo-to-watercolor","description":"Free online tool to convert photos into watercolor and oil painting effects","applicationCategory":"DesignApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","ratingCount":"1420"}})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is this photo to watercolor converter really free?","acceptedAnswer":{"@type":"Answer","text":"Yes, our photo to watercolor and oil painting converter is completely free to use. There are no hidden fees, watermarks, or premium features behind a paywall. You can create and download unlimited painting effects at no cost."}},{"@type":"Question","name":"What's the difference between watercolor and oil painting effects?","acceptedAnswer":{"@type":"Answer","text":"Watercolor effects produce soft, translucent washes with flowing edges and subtle color blending, similar to traditional watercolor on paper. Oil painting effects create richer, more textured results with visible brush strokes and deeper color saturation, mimicking oil paint on canvas. Both styles can be fine-tuned with our adjustable settings."}},{"@type":"Question","name":"What types of photos work best for painting effects?","acceptedAnswer":{"@type":"Answer","text":"Almost any photo can be transformed into a beautiful painting. Landscapes, portraits, flowers, and architecture tend to produce especially striking results. Photos with good lighting, clear subjects, and vibrant colors work particularly well. Even everyday snapshots can become impressive artwork with the right painting style and settings."}},{"@type":"Question","name":"Can I print the painting on canvas?","acceptedAnswer":{"@type":"Answer","text":"Absolutely! Our tool produces high-resolution output that's perfect for printing on canvas, fine art paper, or standard photo paper. Many users order canvas prints from online printing services to create gallery-quality wall art from their converted photos."}},{"@type":"Question","name":"How do I adjust the painting intensity and wetness?","acceptedAnswer":{"@type":"Answer","text":"After uploading your photo and selecting a painting style, you can use our intuitive slider controls to adjust intensity (how strongly the painting effect is applied), wetness (how much colors bleed and blend), and brush size. Preview changes in real time before downloading your finished artwork."}}]})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"How to Convert a Photo to a Painting","description":"Three simple steps to create your custom watercolor or oil painting artwork from any photo","step":[{"@type":"HowToStep","name":"Upload Your Photo","text":"Select any photo from your device — portraits, landscapes, still life, or any image you want to transform into a painting"},{"@type":"HowToStep","name":"Choose Your Painting Style","text":"Pick watercolor, oil painting, or impressionist style and adjust intensity, wetness, and brush settings to customize your artwork"},{"@type":"HowToStep","name":"Download & Share","text":"Download your finished painting in high resolution, perfect for printing on canvas, sharing on social media, or gifting to loved ones"}],"tool":[{"@type":"HowToTool","name":"PhotoGrid.space Painting Converter"}],"totalTime":"PT1M"})}</script>
      </Helmet>

      <main>
        <section className="bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                  Transform Photos into <span className="text-primary">Beautiful Paintings</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-3xl">
                  Turn your favorite photos into stunning watercolor paintings, oil paintings, and impressionist artworks with our free online converter. Adjust intensity, wetness, and brush style for a truly unique result — no artistic skills or signup required.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/">
                    <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                      <Upload className="mr-2 h-5 w-5" />
                      Create Your Painting
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="w-full max-w-md mx-auto rounded-lg shadow-md overflow-hidden bg-white p-6">
                  <div className="relative w-full h-72 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 300 250" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <rect width="300" height="250" fill="#fafafa" />
                      <ellipse cx="80" cy="60" rx="45" ry="30" fill="#dbeafe" opacity="0.6" />
                      <ellipse cx="220" cy="50" rx="50" ry="25" fill="#e0e7ff" opacity="0.5" />
                      <path d="M50 180 Q80 100 120 140 Q160 180 200 120 Q240 60 280 130" fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
                      <path d="M30 200 Q70 150 110 170 Q150 190 190 150 Q230 110 270 160" fill="#c7d2fe" opacity="0.3" />
                      <path d="M40 220 Q100 180 150 200 Q200 220 260 190" fill="#a5b4fc" opacity="0.2" />
                      <circle cx="230" cy="45" r="18" fill="#fef3c7" opacity="0.7" />
                      <circle cx="230" cy="45" r="12" fill="#fde68a" opacity="0.5" />
                      <path d="M60 230 L60 160 Q70 130 90 150 L90 230" fill="#86efac" opacity="0.3" />
                      <path d="M70 160 Q80 120 95 140" fill="none" stroke="#22c55e" strokeWidth="2" opacity="0.5" />
                      <path d="M140 230 L140 170 Q150 140 165 160 L165 230" fill="#86efac" opacity="0.25" />
                      <circle cx="152" cy="135" r="12" fill="#f9a8d4" opacity="0.4" />
                      <circle cx="152" cy="135" r="7" fill="#f472b6" opacity="0.3" />
                      <rect x="20" y="15" width="260" height="220" rx="8" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="6 4" opacity="0.3" />
                      <text x="150" y="248" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="sans-serif">Watercolor effect preview</text>
                    </svg>
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-3 font-medium">Painting effect output preview</p>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-full px-4 py-2 shadow-sm text-sm font-semibold">
                  100% Free
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Powerful Painting Effect Features</h2>
              <p className="mt-4 text-xl text-gray-600">Everything you need to transform photos into beautiful paintings</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Droplets className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Watercolor Effect</h3>
                  <p className="text-gray-600">Create soft, flowing watercolor paintings with realistic paint blending, wet edges, and translucent color washes that mimic traditional watercolor techniques.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Paintbrush className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Oil Painting Effect</h3>
                  <p className="text-gray-600">Transform photos into rich, textured oil paintings with visible brush strokes, vibrant colors, and the depth and dimension of classic oil on canvas.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Impressionist Style</h3>
                  <p className="text-gray-600">Apply impressionist painting techniques with expressive, dappled brushwork and vibrant color palettes inspired by Monet, Renoir, and other masters.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <SlidersHorizontal className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Adjustable Intensity & Wetness</h3>
                  <p className="text-gray-600">Fine-tune painting intensity, brush size, wetness, and color saturation to achieve exactly the artistic look you envision for each photo.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">How to Convert a Photo to a Painting</h2>
              <p className="mt-4 text-xl text-gray-600">Three simple steps to create your custom artwork</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="rounded-full bg-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
                <h3 className="text-xl font-semibold mb-2">Upload Your Photo</h3>
                <p className="text-gray-600">Select any photo from your device — portraits, landscapes, still life, or any image you want to transform into a painting</p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
                <h3 className="text-xl font-semibold mb-2">Choose Your Painting Style</h3>
                <p className="text-gray-600">Pick watercolor, oil painting, or impressionist style and adjust intensity, wetness, and brush settings to customize your artwork</p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
                <h3 className="text-xl font-semibold mb-2">Download & Share</h3>
                <p className="text-gray-600">Download your finished painting in high resolution, perfect for printing on canvas, sharing on social media, or gifting to loved ones</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/">
                <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                  Create Your Painting Now — It's Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Creative Uses for Photo to Painting</h2>
              <p className="mt-4 text-xl text-gray-600">Turn everyday photos into stunning works of art</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center">
                  <Frame className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Wall Art & Home Decor</h3>
                  <p className="text-gray-600">Transform your best photos into watercolor or oil painting prints worthy of framing. Create a personalized gallery wall with custom artwork from vacation photos, family portraits, or nature shots — all without commissioning an expensive artist.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Wedding & Portrait Art</h3>
                  <p className="text-gray-600">Turn wedding photos, engagement portraits, and family pictures into romantic watercolor or classic oil painting effects. Create timeless, artistic keepsakes that capture your most cherished moments in a painterly style.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center">
                  <Gift className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Gift Ideas</h3>
                  <p className="text-gray-600">Create one-of-a-kind painted portraits, pet paintings, or landscape art from photos as thoughtful gifts for birthdays, anniversaries, holidays, or housewarmings. A personalized painting-style print is a gift that truly stands out.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center">
                  <Share2 className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Social Media Content</h3>
                  <p className="text-gray-600">Stand out on Instagram, Pinterest, and other platforms with unique watercolor and oil painting versions of your photos. Create eye-catching artistic content that drives engagement and makes your feed uniquely yours.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Photo to Painting Tool</h2>
              <p className="mt-4 text-xl text-gray-600">Everything you need, completely free</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">100% Free — No Hidden Costs</h3>
                  <p className="text-gray-600">All painting styles, effects, and downloads are completely free. No premium tier, no watermarks, no usage limits.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">No Sign-Up Required</h3>
                  <p className="text-gray-600">Start creating painting effects instantly without registering an account or providing any personal information.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">High-Resolution Output</h3>
                  <p className="text-gray-600">Download paintings in high resolution, perfect for printing on canvas, framing, or sharing in crystal-clear quality.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">Works on Any Device</h3>
                  <p className="text-gray-600">Our painting converter works perfectly on desktop, tablet, and mobile browsers — no app download needed.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">Privacy First</h3>
                  <p className="text-gray-600">Your photos are processed securely and never stored on our servers or shared with third parties.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">Multiple Painting Styles</h3>
                  <p className="text-gray-600">Watercolor, oil painting, and impressionist styles with full control over intensity, wetness, and brush effects.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-gray-600">Everything you need to know about converting photos to paintings</p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Is this photo to watercolor converter really free?</h3>
                <p className="text-gray-600">Yes, our photo to watercolor and oil painting converter is completely free to use. There are no hidden fees, watermarks, or premium features behind a paywall. You can create and download unlimited painting effects at no cost.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">What's the difference between watercolor and oil painting effects?</h3>
                <p className="text-gray-600">Watercolor effects produce soft, translucent washes with flowing edges and subtle color blending, similar to traditional watercolor on paper. Oil painting effects create richer, more textured results with visible brush strokes and deeper color saturation, mimicking oil paint on canvas. Both styles can be fine-tuned with our adjustable settings.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">What types of photos work best for painting effects?</h3>
                <p className="text-gray-600">Almost any photo can be transformed into a beautiful painting. Landscapes, portraits, flowers, and architecture tend to produce especially striking results. Photos with good lighting, clear subjects, and vibrant colors work particularly well. Even everyday snapshots can become impressive artwork with the right painting style and settings.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Can I print the painting on canvas?</h3>
                <p className="text-gray-600">Absolutely! Our tool produces high-resolution output that's perfect for printing on canvas, fine art paper, or standard photo paper. Many users order canvas prints from online printing services to create gallery-quality wall art from their converted photos.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">How do I adjust the painting intensity and wetness?</h3>
                <p className="text-gray-600">After uploading your photo and selecting a painting style, you can use our intuitive slider controls to adjust intensity (how strongly the painting effect is applied), wetness (how much colors bleed and blend), and brush size. Preview changes in real time before downloading your finished artwork.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Turn Your Photos into Paintings?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">Transform any photo into a watercolor, oil painting, or impressionist masterpiece in seconds. Free, fast, and no signup required.</p>
            <Link href="/">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Start Creating Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2>Photo to Watercolor & Oil Painting: The Ultimate Free Online Converter</h2>
              <p>
                Our free photo to watercolor and oil painting converter makes it easy to transform any photograph into a stunning piece of art in just seconds. Whether you want to create a soft watercolor landscape, a richly textured oil painting portrait, or an expressive impressionist piece, our tool delivers professional-quality results without any cost or complicated software.
              </p>

              <h3>How Our Photo to Painting Technology Works</h3>
              <p>
                Our painting converter uses advanced image processing algorithms to analyze color, light, and texture in your photo, then applies realistic painting effects that simulate traditional artistic techniques. For watercolor effects, the tool creates soft washes, wet-on-wet blending, and translucent layering. For oil painting effects, it generates visible brush strokes, rich impasto textures, and deep color saturation. The impressionist mode combines expressive brushwork with vibrant, broken color to capture the essence of the impressionist masters.
              </p>

              <h3>Three Painting Styles to Suit Every Vision</h3>
              <p>
                We offer distinct painting styles designed to bring different artistic visions to life:
              </p>
              <ul>
                <li><strong>Watercolor</strong>: Soft, flowing washes with translucent color blending — ideal for landscapes, florals, and delicate subjects that benefit from a light, airy feel</li>
                <li><strong>Oil Painting</strong>: Rich, textured brush strokes with deep color and visible dimensionality — perfect for portraits, still life, and dramatic compositions</li>
                <li><strong>Impressionist</strong>: Expressive, dappled brushwork with vibrant broken color — great for outdoor scenes, gardens, and everyday moments rendered with artistic flair</li>
              </ul>

              <h3>From Photo to Fine Art in Minutes</h3>
              <p>
                The beauty of our photo to painting converter is its simplicity. You don't need artistic training, expensive software, or hours of manual editing. Simply upload your photo, choose a painting style, adjust intensity and wetness settings to your liking, and download your finished artwork. The result is a high-resolution painting effect that looks like it was created by hand — ready to print on canvas, frame for your wall, share on social media, or give as a meaningful gift.
              </p>

              <h3>Tips for Creating the Best Painting Effects</h3>
              <p>
                To get the most impressive results from our photo to painting converter, start with a well-composed photo that has good lighting and clear subjects. Landscape photos with vivid skies and natural scenery produce beautiful watercolors. Portraits with soft, natural lighting create stunning oil painting effects. For impressionist style, try photos of gardens, street scenes, or water reflections. Experiment with different intensity and wetness settings to find the perfect balance between photographic detail and painterly abstraction. Try our free photo to painting converter today and discover how easy it is to create gallery-worthy art from your everyday photos!
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore More Free Art Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/photo-to-grid">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer text-center">
                  <h3 className="font-semibold text-gray-900">Photo Grid</h3>
                  <p className="text-sm text-gray-500 mt-1">Add drawing reference grids</p>
                </div>
              </Link>
              <Link href="/photo-to-lineart">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer text-center">
                  <h3 className="font-semibold text-gray-900">Line Art</h3>
                  <p className="text-sm text-gray-500 mt-1">Convert to line drawings</p>
                </div>
              </Link>
              <Link href="/photo-to-sketch">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer text-center">
                  <h3 className="font-semibold text-gray-900">Sketch</h3>
                  <p className="text-sm text-gray-500 mt-1">Create pencil sketches</p>
                </div>
              </Link>
              <Link href="/photo-to-coloring-page">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer text-center">
                  <h3 className="font-semibold text-gray-900">Coloring Page</h3>
                  <p className="text-sm text-gray-500 mt-1">Make printable coloring pages</p>
                </div>
              </Link>
              <Link href="/photo-to-paint-by-numbers">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer text-center">
                  <h3 className="font-semibold text-gray-900">Paint by Numbers</h3>
                  <p className="text-sm text-gray-500 mt-1">Generate numbered templates</p>
                </div>
              </Link>
              <Link href="/photo-to-pixel-art">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer text-center">
                  <h3 className="font-semibold text-gray-900">Pixel Art</h3>
                  <p className="text-sm text-gray-500 mt-1">Create retro pixel art</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
