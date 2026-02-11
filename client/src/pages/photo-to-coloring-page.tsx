import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Upload, Check, Palette, Pencil, SlidersHorizontal, Download, BookOpen, Heart, Gift, GraduationCap } from "lucide-react";

export default function PhotoToColoringPage() {
  return (
    <>
      <Helmet>
        <title>Free Photo to Coloring Page Converter Online | PhotoGrid.space</title>
        <meta
          name="description"
          content="Convert any photo to a coloring page for free online. Create custom coloring pages from your photos with adjustable detail levels, multiple styles, and instant download. No signup required."
        />
        <meta property="og:title" content="Free Photo to Coloring Page Converter Online | PhotoGrid.space" />
        <meta property="og:description" content="Turn any photo into a printable coloring page in seconds. Choose from multiple styles including Classic, Detailed, Simple, Bold, and Kids. 100% free." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photogrid.space/photo-to-coloring-page" />
        <link rel="canonical" href="https://www.photogrid.space/photo-to-coloring-page" />
        <meta name="keywords" content="photo to coloring page, convert photo to coloring page, coloring page maker, coloring page generator, turn photo into coloring page, free coloring page converter, custom coloring pages, printable coloring pages, photo coloring book, coloring page from picture" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Photo to Coloring Page Converter","url":"https://www.photogrid.space/photo-to-coloring-page","description":"Free online tool to convert photos into printable coloring pages","applicationCategory":"DesignApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","ratingCount":"1540"}})}</script>
      </Helmet>

      <main>
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                  Turn Any Photo into a <span className="text-primary">Coloring Page</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-3xl">
                  Transform your favorite photos into beautiful, printable coloring pages with our free online converter. Choose from multiple styles, adjust detail levels, and download instantly. Perfect for kids, adults, and art therapy — no signup required.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/">
                    <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                      <Upload className="mr-2 h-5 w-5" />
                      Create Your Coloring Page
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="w-full max-w-md mx-auto rounded-lg shadow-md overflow-hidden bg-white p-6">
                  <div className="relative w-full h-72 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 300 250" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <rect width="300" height="250" fill="#fafafa" />
                      <circle cx="150" cy="90" r="40" fill="none" stroke="#6366f1" strokeWidth="2.5" />
                      <ellipse cx="150" cy="85" rx="25" ry="20" fill="none" stroke="#6366f1" strokeWidth="1.5" />
                      <circle cx="138" cy="82" r="3" fill="none" stroke="#6366f1" strokeWidth="1.5" />
                      <circle cx="162" cy="82" r="3" fill="none" stroke="#6366f1" strokeWidth="1.5" />
                      <path d="M142 95 Q150 102 158 95" fill="none" stroke="#6366f1" strokeWidth="1.5" />
                      <path d="M110 130 Q150 180 190 130" fill="none" stroke="#6366f1" strokeWidth="2" />
                      <rect x="115" y="130" width="70" height="50" rx="5" fill="none" stroke="#6366f1" strokeWidth="2" />
                      <line x1="105" y1="130" x2="85" y2="170" stroke="#6366f1" strokeWidth="2" />
                      <line x1="195" y1="130" x2="215" y2="170" stroke="#6366f1" strokeWidth="2" />
                      <line x1="135" y1="180" x2="130" y2="230" stroke="#6366f1" strokeWidth="2" />
                      <line x1="165" y1="180" x2="170" y2="230" stroke="#6366f1" strokeWidth="2" />
                      <path d="M30 200 Q50 170 70 200 Q90 170 110 200" fill="none" stroke="#a5b4fc" strokeWidth="1.5" />
                      <path d="M190 200 Q210 170 230 200 Q250 170 270 200" fill="none" stroke="#a5b4fc" strokeWidth="1.5" />
                      <circle cx="250" cy="40" r="20" fill="none" stroke="#fbbf24" strokeWidth="2" />
                      <line x1="250" y1="15" x2="250" y2="8" stroke="#fbbf24" strokeWidth="1.5" />
                      <line x1="250" y1="65" x2="250" y2="72" stroke="#fbbf24" strokeWidth="1.5" />
                      <line x1="225" y1="40" x2="218" y2="40" stroke="#fbbf24" strokeWidth="1.5" />
                      <line x1="275" y1="40" x2="282" y2="40" stroke="#fbbf24" strokeWidth="1.5" />
                      <path d="M40 30 Q55 10 70 30 Q55 20 40 30Z" fill="none" stroke="#a5b4fc" strokeWidth="1.5" />
                      <path d="M80 25 Q95 5 110 25 Q95 15 80 25Z" fill="none" stroke="#a5b4fc" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-3 font-medium">Coloring page output preview</p>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-full px-4 py-2 shadow-lg text-sm font-semibold">
                  100% Free
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Powerful Coloring Page Features</h2>
              <p className="mt-4 text-xl text-gray-600">Everything you need to create perfect coloring pages from any photo</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <SlidersHorizontal className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Adjustable Detail Levels</h3>
                  <p className="text-gray-600">Fine-tune the amount of detail in your coloring page — from simple outlines to intricate designs with precise edge detection.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Multiple Coloring Styles</h3>
                  <p className="text-gray-600">Choose from Classic, Detailed, Simple, Bold, and Kids styles to match any age group or coloring preference.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Pencil className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Line Thickness Control</h3>
                  <p className="text-gray-600">Adjust line thickness from thin, delicate outlines to thick, bold lines perfect for younger children or bold art styles.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Instant Download</h3>
                  <p className="text-gray-600">Download your coloring page immediately in high resolution, ready to print on standard letter or A4 paper.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">How to Convert a Photo to a Coloring Page</h2>
              <p className="mt-4 text-xl text-gray-600">Three simple steps to create your custom coloring page</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="rounded-full bg-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
                <h3 className="text-xl font-semibold mb-2">Upload Your Photo</h3>
                <p className="text-gray-600">Select any photo from your device — portraits, pets, landscapes, or any image you want to turn into a coloring page</p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
                <h3 className="text-xl font-semibold mb-2">Choose Your Style</h3>
                <p className="text-gray-600">Pick a coloring style and adjust detail level, line thickness, and other settings to get the perfect coloring page</p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
                <h3 className="text-xl font-semibold mb-2">Download & Print</h3>
                <p className="text-gray-600">Download your finished coloring page in high resolution and print it at home or at any print shop</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/">
                <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                  Make a Coloring Page Now — It's Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Who Uses Photo to Coloring Page?</h2>
              <p className="mt-4 text-xl text-gray-600">Custom coloring pages for every occasion and audience</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">For Teachers & Parents</h3>
                  <p className="text-gray-600">Create personalized coloring pages from educational photos, family portraits, or classroom activities. Keep kids engaged with coloring pages featuring familiar faces, favorite animals, or places they love.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center">
                  <BookOpen className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">For Adult Coloring Enthusiasts</h3>
                  <p className="text-gray-600">Turn your own photography into detailed coloring pages with intricate line work. Create challenging designs from architecture, nature, or abstract photos perfect for stress relief and mindful coloring.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">For Art Therapy</h3>
                  <p className="text-gray-600">Use familiar, meaningful images as coloring therapy tools. Therapists and counselors can create custom coloring pages from photos that resonate with their clients for calming, expressive activities.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center">
                  <Gift className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">For Custom Gifts</h3>
                  <p className="text-gray-600">Create one-of-a-kind coloring books from vacation photos, wedding pictures, or pet portraits. A thoughtful, personalized gift for birthdays, holidays, or special occasions that anyone will enjoy.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Photo to Coloring Page Tool</h2>
              <p className="mt-4 text-xl text-gray-600">Everything you need, completely free</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">100% Free — No Hidden Costs</h3>
                  <p className="text-gray-600">All styles, features, and downloads are completely free. No premium tier, no watermarks, no limits.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">No Sign-Up Required</h3>
                  <p className="text-gray-600">Start creating coloring pages instantly without registering an account or providing any personal information.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">Print-Ready Quality</h3>
                  <p className="text-gray-600">Download high-resolution coloring pages that look crisp and clean when printed on standard paper sizes.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">Works on Any Device</h3>
                  <p className="text-gray-600">Our coloring page converter works perfectly on desktop, tablet, and mobile — no app download needed.</p>
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
                  <h3 className="text-lg font-semibold mb-1">Multiple Output Styles</h3>
                  <p className="text-gray-600">Five distinct coloring page styles to match any age group, skill level, or creative preference.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-gray-600">Everything you need to know about converting photos to coloring pages</p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Is this photo to coloring page converter really free?</h3>
                <p className="text-gray-600">Yes, our photo to coloring page converter is completely free to use. There are no hidden fees, watermarks, or premium features behind a paywall. You can create and download unlimited coloring pages at no cost.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">What types of photos make the best coloring pages?</h3>
                <p className="text-gray-600">Photos with clear subjects and good contrast work best — think portraits, animals, flowers, buildings, and landscapes. Images with strong outlines and distinct shapes produce the most satisfying coloring pages. Avoid very dark or blurry photos for the best results.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">What coloring page styles are available?</h3>
                <p className="text-gray-600">We offer five distinct styles: Classic (clean, balanced outlines), Detailed (intricate lines for advanced colorists), Simple (bold outlines for young children), Bold (thick, prominent lines), and Kids (extra-simple designs perfect for toddlers and preschoolers).</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Can I print the coloring pages at home?</h3>
                <p className="text-gray-600">Absolutely! Our coloring pages are designed to be print-ready. Simply download the image and print it on standard letter (8.5" × 11") or A4 paper using any home printer. For best results, use a slightly heavier paper stock.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">What file formats can I upload and download?</h3>
                <p className="text-gray-600">You can upload photos in JPG, PNG, and WebP formats up to 10MB in size. Your finished coloring page is available for download as a high-resolution image file that's ready for printing or digital use.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-primary to-primary-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Custom Coloring Page?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">Turn any photo into a printable coloring page in seconds. Free, fast, and no signup required.</p>
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
              <h2>Photo to Coloring Page: The Ultimate Free Online Converter</h2>
              <p>
                Our free photo to coloring page converter makes it easy to transform any photograph into a beautiful, printable coloring page in just seconds. Whether you're a parent looking for personalized coloring activities for your kids, a teacher creating custom classroom materials, or an adult coloring enthusiast who wants to color your own photos, our tool delivers professional-quality results without any cost or complicated software.
              </p>

              <h3>How Our Photo to Coloring Page Technology Works</h3>
              <p>
                Our coloring page generator uses advanced edge detection and image processing algorithms to analyze your photo and extract the most important outlines and shapes. The result is a clean, black-and-white line drawing that preserves the recognizable features of your original image while providing clear, well-defined areas to color in. You can control the level of detail, line thickness, and overall style to create the perfect coloring page for any skill level.
              </p>

              <h3>Five Coloring Page Styles for Every Need</h3>
              <p>
                We offer a range of coloring page styles to suit different preferences and age groups:
              </p>
              <ul>
                <li><strong>Classic</strong>: Balanced outlines with moderate detail — great for all ages and the most popular choice</li>
                <li><strong>Detailed</strong>: Intricate line work that captures fine details — ideal for adult coloring enthusiasts who enjoy complex designs</li>
                <li><strong>Simple</strong>: Clean, straightforward outlines — perfect for younger children who are still developing motor skills</li>
                <li><strong>Bold</strong>: Thick, prominent lines — easy to see and stay within, great for beginners of any age</li>
                <li><strong>Kids</strong>: Extra-simple designs with large coloring areas — specifically designed for toddlers and preschoolers</li>
              </ul>

              <h3>Creative Ways to Use Custom Coloring Pages</h3>
              <p>
                The possibilities are endless when you can turn any photo into a coloring page. Teachers use our tool to create educational coloring worksheets from photos of historical landmarks, animals, or scientific diagrams. Parents make personalized coloring books featuring family photos, vacation memories, or their child's favorite things. Therapists use familiar images as calming coloring activities for clients. And crafters create unique coloring pages for handmade cards, scrapbooks, and party favors.
              </p>

              <h3>Tips for Creating the Best Coloring Pages</h3>
              <p>
                To get the best results from our photo to coloring page converter, start with a well-lit photo that has a clear subject and good contrast between the subject and background. Photos with strong, defined edges — like buildings, animals, flowers, and portraits — tend to produce the most satisfying coloring pages. Experiment with different style and detail settings to find the perfect balance for your intended audience.
              </p>

              <h2>Start Making Custom Coloring Pages Today</h2>
              <p>
                Join thousands of parents, teachers, therapists, and coloring enthusiasts who use our free photo to coloring page converter every day. No signup, no downloads, and no artistic skills required — just upload a photo, customize your settings, and download your printable coloring page in seconds. Try it now and discover how easy it is to create personalized coloring pages from any photo!
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore More Free Art Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/photo-to-grid">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer text-center">
                  <h3 className="font-semibold text-gray-900">Photo Grid</h3>
                  <p className="text-sm text-gray-500 mt-1">Add drawing reference grids</p>
                </div>
              </Link>
              <Link href="/photo-to-lineart">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer text-center">
                  <h3 className="font-semibold text-gray-900">Line Art</h3>
                  <p className="text-sm text-gray-500 mt-1">Convert to line drawings</p>
                </div>
              </Link>
              <Link href="/photo-to-sketch">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer text-center">
                  <h3 className="font-semibold text-gray-900">Sketch</h3>
                  <p className="text-sm text-gray-500 mt-1">Create pencil sketches</p>
                </div>
              </Link>
              <Link href="/photo-to-paint-by-numbers">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer text-center">
                  <h3 className="font-semibold text-gray-900">Paint by Numbers</h3>
                  <p className="text-sm text-gray-500 mt-1">Generate numbered templates</p>
                </div>
              </Link>
              <Link href="/photo-to-pixel-art">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer text-center">
                  <h3 className="font-semibold text-gray-900">Pixel Art</h3>
                  <p className="text-sm text-gray-500 mt-1">Create retro pixel art</p>
                </div>
              </Link>
              <Link href="/photo-to-watercolor">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer text-center">
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
