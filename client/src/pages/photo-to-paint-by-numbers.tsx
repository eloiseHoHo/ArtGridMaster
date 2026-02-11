import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Upload, Check, Palette, Hash, ScanLine, BookImage, Home, Gift, GraduationCap, Heart } from "lucide-react";

export default function PhotoToPaintByNumbers() {
  return (
    <>
      <Helmet>
        <title>Free Photo to Paint by Numbers Generator | PhotoGrid.space</title>
        <meta
          name="description"
          content="Turn any photo into a paint by numbers template for free. Generate custom paint by numbers kits with adjustable color palettes, numbered regions, and printable color legends. No signup required."
        />
        <meta property="og:title" content="Free Photo to Paint by Numbers Generator | PhotoGrid.space" />
        <meta property="og:description" content="Transform any photo into a paint by numbers template in seconds. Choose 4-24 colors, get numbered regions and a printable color legend. 100% free." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photogrid.space/photo-to-paint-by-numbers" />
        <link rel="canonical" href="https://www.photogrid.space/photo-to-paint-by-numbers" />
        <meta name="keywords" content="photo to paint by numbers, paint by numbers generator, custom paint by numbers, turn photo into paint by numbers, free paint by numbers maker, paint by numbers from photo, DIY paint by numbers, personalized paint by numbers, paint by numbers template, create paint by numbers" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Paint by Numbers Generator","url":"https://www.photogrid.space/photo-to-paint-by-numbers","description":"Free online tool to create paint by numbers templates from photos","applicationCategory":"DesignApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.7","ratingCount":"1280"}})}</script>
      </Helmet>

      <main>
        <section className="bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                  Create <span className="text-primary">Paint by Numbers</span> from Any Photo
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-3xl">
                  Transform your favorite photos into beautiful paint by numbers templates with our free online generator. Choose your color palette, get numbered regions with a printable legend, and start painting. Perfect for beginners, hobbyists, and gift-givers — no signup required.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/">
                    <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                      <Upload className="mr-2 h-5 w-5" />
                      Create Your Paint by Numbers
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="w-full max-w-md mx-auto rounded-lg shadow-md overflow-hidden bg-white p-6">
                  <div className="relative w-full h-72 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 300 250" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <rect width="300" height="250" fill="#fafafa" />
                      <rect x="30" y="30" width="80" height="70" fill="none" stroke="#6366f1" strokeWidth="2" rx="3" />
                      <text x="70" y="72" textAnchor="middle" fill="#6366f1" fontSize="18" fontWeight="bold">1</text>
                      <rect x="110" y="30" width="80" height="70" fill="none" stroke="#6366f1" strokeWidth="2" rx="3" />
                      <text x="150" y="72" textAnchor="middle" fill="#6366f1" fontSize="18" fontWeight="bold">2</text>
                      <rect x="190" y="30" width="80" height="70" fill="none" stroke="#6366f1" strokeWidth="2" rx="3" />
                      <text x="230" y="72" textAnchor="middle" fill="#6366f1" fontSize="18" fontWeight="bold">3</text>
                      <path d="M30 120 Q90 100 150 130 Q210 160 270 120" fill="none" stroke="#6366f1" strokeWidth="2" />
                      <text x="90" y="118" textAnchor="middle" fill="#a5b4fc" fontSize="14" fontWeight="bold">4</text>
                      <text x="210" y="145" textAnchor="middle" fill="#a5b4fc" fontSize="14" fontWeight="bold">5</text>
                      <circle cx="80" cy="190" r="35" fill="none" stroke="#6366f1" strokeWidth="2" />
                      <text x="80" y="196" textAnchor="middle" fill="#6366f1" fontSize="16" fontWeight="bold">6</text>
                      <rect x="140" y="160" width="60" height="55" fill="none" stroke="#6366f1" strokeWidth="2" rx="3" />
                      <text x="170" y="193" textAnchor="middle" fill="#6366f1" fontSize="16" fontWeight="bold">7</text>
                      <path d="M220 165 L250 210 L190 210 Z" fill="none" stroke="#6366f1" strokeWidth="2" />
                      <text x="220" y="200" textAnchor="middle" fill="#6366f1" fontSize="14" fontWeight="bold">8</text>
                      <rect x="30" y="225" width="12" height="12" fill="#6366f1" rx="2" />
                      <text x="48" y="235" fill="#6366f1" fontSize="9">1-Blue</text>
                      <rect x="90" y="225" width="12" height="12" fill="#a5b4fc" rx="2" />
                      <text x="108" y="235" fill="#a5b4fc" fontSize="9">2-Lilac</text>
                      <rect x="155" y="225" width="12" height="12" fill="#fbbf24" rx="2" />
                      <text x="173" y="235" fill="#fbbf24" fontSize="9">3-Gold</text>
                      <rect x="220" y="225" width="12" height="12" fill="#34d399" rx="2" />
                      <text x="238" y="235" fill="#34d399" fontSize="9">4-Green</text>
                    </svg>
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-3 font-medium">Paint by numbers output preview</p>
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
              <h2 className="text-3xl font-bold text-gray-900">Powerful Paint by Numbers Features</h2>
              <p className="mt-4 text-xl text-gray-600">Everything you need to create custom paint by numbers from any photo</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Color Palette Control</h3>
                  <p className="text-gray-600">Choose anywhere from 4 to 24 colors for your paint by numbers template. Fewer colors for a simpler project, more for detailed artwork.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Hash className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Numbered Regions</h3>
                  <p className="text-gray-600">Each region is clearly numbered to match your color legend, making it easy to know exactly which color goes where.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <ScanLine className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Outline Detection</h3>
                  <p className="text-gray-600">Advanced edge detection algorithms identify shapes and boundaries in your photo to create clean, paintable regions.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <BookImage className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Color Legend</h3>
                  <p className="text-gray-600">Download a printable color legend that shows each numbered color with its exact shade, so you can mix or buy the right paints.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">How to Turn a Photo into Paint by Numbers</h2>
              <p className="mt-4 text-xl text-gray-600">Three simple steps to create your custom paint by numbers template</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="rounded-full bg-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
                <h3 className="text-xl font-semibold mb-2">Upload Your Photo</h3>
                <p className="text-gray-600">Select any photo from your device — portraits, landscapes, pets, or any image you want to transform into a paint by numbers project</p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
                <h3 className="text-xl font-semibold mb-2">Customize Your Palette</h3>
                <p className="text-gray-600">Choose the number of colors (4–24), adjust detail level, and fine-tune the settings to get the perfect paint by numbers template</p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
                <h3 className="text-xl font-semibold mb-2">Download & Paint</h3>
                <p className="text-gray-600">Download your numbered template and color legend, print them out, and start painting your masterpiece</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/">
                <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                  Make a Paint by Numbers Now — It's Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Who Uses Photo to Paint by Numbers?</h2>
              <p className="mt-4 text-xl text-gray-600">Custom paint by numbers for every occasion and skill level</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center">
                  <Home className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">DIY Home Decor</h3>
                  <p className="text-gray-600">Turn your favorite vacation photos, family portraits, or landscape shots into stunning wall art. Paint by numbers lets you create custom artwork that matches your home decor and holds personal meaning.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center">
                  <Gift className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Personal Gifts</h3>
                  <p className="text-gray-600">Create one-of-a-kind paint by numbers kits from meaningful photos. A personalized painting project makes a thoughtful gift for birthdays, anniversaries, weddings, or any special occasion.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Art Learning</h3>
                  <p className="text-gray-600">Paint by numbers is an excellent way to learn color theory, brush control, and painting techniques. Students and beginners can practice with real images while building confidence in their artistic skills.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Relaxation & Mindfulness</h3>
                  <p className="text-gray-600">Painting by numbers is a meditative activity that helps reduce stress and anxiety. Focus on one numbered section at a time and enjoy the calming, therapeutic process of bringing a photo to life with paint.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Photo to Paint by Numbers Tool</h2>
              <p className="mt-4 text-xl text-gray-600">Everything you need, completely free</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">100% Free — No Hidden Costs</h3>
                  <p className="text-gray-600">All features, color palettes, and downloads are completely free. No premium tier, no watermarks, no limits.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">No Sign-Up Required</h3>
                  <p className="text-gray-600">Start creating paint by numbers templates instantly without registering an account or providing any personal information.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">Print-Ready Quality</h3>
                  <p className="text-gray-600">Download high-resolution templates and color legends that look crisp and clean when printed on standard paper sizes.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">Works on Any Device</h3>
                  <p className="text-gray-600">Our paint by numbers generator works perfectly on desktop, tablet, and mobile — no app download needed.</p>
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
                  <h3 className="text-lg font-semibold mb-1">Flexible Color Palettes</h3>
                  <p className="text-gray-600">From 4 simple colors to 24 detailed shades, customize the complexity to match any skill level or artistic vision.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-gray-600">Everything you need to know about converting photos to paint by numbers</p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Is this photo to paint by numbers generator really free?</h3>
                <p className="text-gray-600">Yes, our photo to paint by numbers generator is completely free to use. There are no hidden fees, watermarks, or premium features behind a paywall. You can create and download unlimited paint by numbers templates at no cost.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">What types of photos work best for paint by numbers?</h3>
                <p className="text-gray-600">Photos with clear subjects, good lighting, and distinct color areas work best. Landscapes, portraits, flowers, animals, and architecture all produce excellent results. Avoid very dark, blurry, or overly busy images for the cleanest numbered regions.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">How many colors can I use in my paint by numbers?</h3>
                <p className="text-gray-600">You can choose anywhere from 4 to 24 colors. Fewer colors (4–8) create simpler projects perfect for beginners and children. More colors (12–24) produce detailed, realistic results ideal for experienced painters looking for a challenge.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">What do I need to start painting after downloading?</h3>
                <p className="text-gray-600">Print your numbered template on canvas paper or regular paper, then use the included color legend to match acrylic paints, watercolors, or any painting medium. You can find matching paint colors at any art supply store using the hex codes provided in the legend.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Can I print the paint by numbers template on canvas?</h3>
                <p className="text-gray-600">Absolutely! For the best painting experience, print your template on canvas paper or have it printed on a stretched canvas at a local print shop. You can also use heavyweight paper or cardstock for a more affordable option that still works great with acrylic paints.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Custom Paint by Numbers?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">Turn any photo into a paintable masterpiece in seconds. Free, fast, and no signup required.</p>
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
              <h2>Photo to Paint by Numbers: The Ultimate Free Online Generator</h2>
              <p>
                Our free photo to paint by numbers generator makes it easy to transform any photograph into a beautiful, numbered painting template in just seconds. Whether you're a beginner looking for a relaxing creative activity, a parent searching for fun projects for your kids, or an experienced painter who wants to recreate your own photos on canvas, our tool delivers professional-quality results without any cost or complicated software.
              </p>

              <h3>How Our Photo to Paint by Numbers Technology Works</h3>
              <p>
                Our paint by numbers generator uses advanced color quantization and edge detection algorithms to analyze your photo and break it down into distinct color regions. Each region is assigned a number that corresponds to a specific color in your legend. The result is a clean, numbered template that guides you through the painting process step by step. You can control the number of colors, region size, and detail level to create the perfect template for any skill level.
              </p>

              <h3>Choosing the Right Number of Colors</h3>
              <p>
                The number of colors you select dramatically affects the difficulty and appearance of your finished painting:
              </p>
              <ul>
                <li><strong>4–6 Colors</strong>: Simple, bold designs perfect for young children and absolute beginners who want quick, satisfying results</li>
                <li><strong>8–12 Colors</strong>: Balanced complexity that captures the essence of your photo while remaining approachable for most painters</li>
                <li><strong>14–18 Colors</strong>: Detailed templates that produce realistic results, ideal for intermediate painters who enjoy a moderate challenge</li>
                <li><strong>20–24 Colors</strong>: Highly detailed, gallery-worthy templates for experienced painters seeking a true artistic challenge</li>
              </ul>

              <h3>Creative Ways to Use Custom Paint by Numbers</h3>
              <p>
                The possibilities are endless when you can turn any photo into a paint by numbers template. Create personalized wall art from your favorite travel photos, wedding pictures, or pet portraits. Design unique gifts that combine a fun activity with a meaningful keepsake. Teachers use paint by numbers to help students learn color mixing and brush techniques. Therapists recommend it as a calming, mindful activity that reduces stress and improves focus.
              </p>

              <h3>Tips for Creating the Best Paint by Numbers Templates</h3>
              <p>
                To get the best results from our photo to paint by numbers generator, start with a well-lit photo that has clear color separation between different areas. Photos with distinct subjects — like a flower against a green background, a pet on a solid-colored surface, or a landscape with a clear sky — tend to produce the cleanest numbered regions. Start with fewer colors if you're new to painting, and gradually increase the complexity as you build confidence. For the best painting experience, print your template on canvas paper and use acrylic paints for vibrant, long-lasting results.
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
              <Link href="/photo-to-pixel-art">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer text-center">
                  <h3 className="font-semibold text-gray-900">Pixel Art</h3>
                  <p className="text-sm text-gray-500 mt-1">Create retro pixel art</p>
                </div>
              </Link>
              <Link href="/photo-to-watercolor">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer text-center">
                  <h3 className="font-semibold text-gray-900">Watercolor & Oil</h3>
                  <p className="text-sm text-gray-500 mt-1">Apply painting effects</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
