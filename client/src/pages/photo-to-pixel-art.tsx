import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Upload, Check, Grid3X3, Palette, Layers, Download, Gamepad2, Image, SmilePlus, Gem } from "lucide-react";

export default function PhotoToPixelArt() {
  return (
    <>
      <Helmet>
        <title>Free Photo to Pixel Art Converter Online | PhotoGrid.space</title>
        <meta
          name="description"
          content="Convert any photo to pixel art for free online. Transform your images into retro-style pixel art with adjustable pixel size, color palette control, multiple styles, and instant export. No signup required."
        />
        <meta property="og:title" content="Free Photo to Pixel Art Converter Online | PhotoGrid.space" />
        <meta property="og:description" content="Turn any photo into stunning pixel art in seconds. Choose from Classic, Rounded, Outline, and Isometric styles. Adjust pixel size and color palettes. 100% free." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photogrid.space/photo-to-pixel-art" />
        <link rel="canonical" href="https://www.photogrid.space/photo-to-pixel-art" />
        <meta name="keywords" content="photo to pixel art, convert photo to pixel art, pixel art converter, pixel art maker, turn photo into pixel art, free pixel art converter, pixel art generator, pixelate photo, retro pixel art, 8-bit art converter" />
      </Helmet>

      <main>
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                  Convert Photos to <span className="text-primary">Pixel Art</span> Instantly
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-3xl">
                  Transform your favorite photos into stunning pixel art with our free online converter. Choose from multiple styles, adjust pixel size and color palettes, and download instantly. Perfect for game assets, retro art, and digital creations — no signup required.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/">
                    <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                      <Upload className="mr-2 h-5 w-5" />
                      Create Your Pixel Art
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="w-full max-w-md mx-auto rounded-lg shadow-md overflow-hidden bg-white p-6">
                  <div className="relative w-full h-72 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 300 250" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <rect width="300" height="250" fill="#fafafa" />
                      <rect x="60" y="30" width="20" height="20" fill="#6366f1" />
                      <rect x="80" y="30" width="20" height="20" fill="#6366f1" />
                      <rect x="100" y="30" width="20" height="20" fill="#6366f1" />
                      <rect x="120" y="30" width="20" height="20" fill="#6366f1" />
                      <rect x="40" y="50" width="20" height="20" fill="#6366f1" />
                      <rect x="60" y="50" width="20" height="20" fill="#818cf8" />
                      <rect x="80" y="50" width="20" height="20" fill="#a5b4fc" />
                      <rect x="100" y="50" width="20" height="20" fill="#a5b4fc" />
                      <rect x="120" y="50" width="20" height="20" fill="#818cf8" />
                      <rect x="140" y="50" width="20" height="20" fill="#6366f1" />
                      <rect x="40" y="70" width="20" height="20" fill="#818cf8" />
                      <rect x="60" y="70" width="20" height="20" fill="#c7d2fe" />
                      <rect x="80" y="70" width="20" height="20" fill="#1e1b4b" />
                      <rect x="100" y="70" width="20" height="20" fill="#c7d2fe" />
                      <rect x="120" y="70" width="20" height="20" fill="#1e1b4b" />
                      <rect x="140" y="70" width="20" height="20" fill="#818cf8" />
                      <rect x="40" y="90" width="20" height="20" fill="#818cf8" />
                      <rect x="60" y="90" width="20" height="20" fill="#c7d2fe" />
                      <rect x="80" y="90" width="20" height="20" fill="#c7d2fe" />
                      <rect x="100" y="90" width="20" height="20" fill="#c7d2fe" />
                      <rect x="120" y="90" width="20" height="20" fill="#c7d2fe" />
                      <rect x="140" y="90" width="20" height="20" fill="#818cf8" />
                      <rect x="60" y="110" width="20" height="20" fill="#818cf8" />
                      <rect x="80" y="110" width="20" height="20" fill="#f9a8d4" />
                      <rect x="100" y="110" width="20" height="20" fill="#f9a8d4" />
                      <rect x="120" y="110" width="20" height="20" fill="#818cf8" />
                      <rect x="60" y="130" width="20" height="20" fill="#6366f1" />
                      <rect x="80" y="130" width="20" height="20" fill="#6366f1" />
                      <rect x="100" y="130" width="20" height="20" fill="#6366f1" />
                      <rect x="120" y="130" width="20" height="20" fill="#6366f1" />
                      <rect x="180" y="160" width="15" height="15" fill="#34d399" />
                      <rect x="195" y="160" width="15" height="15" fill="#6ee7b7" />
                      <rect x="210" y="160" width="15" height="15" fill="#34d399" />
                      <rect x="225" y="160" width="15" height="15" fill="#6ee7b7" />
                      <rect x="240" y="160" width="15" height="15" fill="#34d399" />
                      <rect x="180" y="175" width="15" height="15" fill="#6ee7b7" />
                      <rect x="195" y="175" width="15" height="15" fill="#34d399" />
                      <rect x="210" y="175" width="15" height="15" fill="#059669" />
                      <rect x="225" y="175" width="15" height="15" fill="#34d399" />
                      <rect x="240" y="175" width="15" height="15" fill="#6ee7b7" />
                      <rect x="180" y="190" width="15" height="15" fill="#34d399" />
                      <rect x="195" y="190" width="15" height="15" fill="#059669" />
                      <rect x="210" y="190" width="15" height="15" fill="#34d399" />
                      <rect x="225" y="190" width="15" height="15" fill="#059669" />
                      <rect x="240" y="190" width="15" height="15" fill="#34d399" />
                      <rect x="15" y="180" width="12" height="12" fill="#fbbf24" />
                      <rect x="27" y="180" width="12" height="12" fill="#fcd34d" />
                      <rect x="39" y="180" width="12" height="12" fill="#fbbf24" />
                      <rect x="15" y="192" width="12" height="12" fill="#f59e0b" />
                      <rect x="27" y="192" width="12" height="12" fill="#fbbf24" />
                      <rect x="39" y="192" width="12" height="12" fill="#f59e0b" />
                      <rect x="15" y="204" width="12" height="12" fill="#fbbf24" />
                      <rect x="27" y="204" width="12" height="12" fill="#f59e0b" />
                      <rect x="39" y="204" width="12" height="12" fill="#fbbf24" />
                    </svg>
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-3 font-medium">Pixel art output preview</p>
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
              <h2 className="text-3xl font-bold text-gray-900">Powerful Pixel Art Features</h2>
              <p className="mt-4 text-xl text-gray-600">Everything you need to create stunning pixel art from any photo</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Grid3X3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Adjustable Pixel Size</h3>
                  <p className="text-gray-600">Fine-tune the pixel grid resolution from large, chunky blocks for a retro 8-bit look to small, detailed pixels for high-fidelity art.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Color Palette Control</h3>
                  <p className="text-gray-600">Choose the number of colors in your palette or use preset retro palettes like NES, Game Boy, and SNES for authentic pixel art vibes.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Multiple Pixel Styles</h3>
                  <p className="text-gray-600">Choose from Classic, Rounded, Outline, and Isometric styles to create pixel art that matches your creative vision.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Instant Export</h3>
                  <p className="text-gray-600">Download your pixel art instantly in high-resolution PNG format, ready for games, social media, or print projects.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">How to Convert a Photo to Pixel Art</h2>
              <p className="mt-4 text-xl text-gray-600">Three simple steps to create your custom pixel art</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="rounded-full bg-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
                <h3 className="text-xl font-semibold mb-2">Upload Your Photo</h3>
                <p className="text-gray-600">Select any photo from your device — portraits, landscapes, characters, or any image you want to pixelate</p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
                <h3 className="text-xl font-semibold mb-2">Customize Your Style</h3>
                <p className="text-gray-600">Pick a pixel art style, adjust the pixel size, choose your color palette, and fine-tune the output to perfection</p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
                <h3 className="text-xl font-semibold mb-2">Export & Use</h3>
                <p className="text-gray-600">Download your finished pixel art in high resolution and use it in games, social media, or any creative project</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/">
                <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                  Make Pixel Art Now — It's Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Who Uses Photo to Pixel Art?</h2>
              <p className="mt-4 text-xl text-gray-600">Pixel art for every creative need and industry</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center">
                  <Gamepad2 className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Game Development</h3>
                  <p className="text-gray-600">Quickly generate pixel art sprites, backgrounds, and textures from reference photos. Ideal for indie game developers, retro game projects, and rapid prototyping of game assets with authentic pixel art aesthetics.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center">
                  <Image className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Retro Art & Nostalgia</h3>
                  <p className="text-gray-600">Transform modern photos into retro 8-bit and 16-bit style artwork. Perfect for creating nostalgic art prints, vintage-themed decorations, and pixel art tributes to classic gaming eras.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center">
                  <SmilePlus className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Social Media Avatars</h3>
                  <p className="text-gray-600">Create unique, eye-catching pixel art profile pictures and avatars from your selfies. Stand out on social platforms with a distinctive pixelated look that's fun, creative, and instantly recognizable.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center">
                  <Gem className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">NFT & Digital Art</h3>
                  <p className="text-gray-600">Generate pixel art for NFT collections, digital art galleries, and blockchain projects. Create unique pixelated artwork from photographs that can be minted, traded, or showcased in virtual exhibitions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Photo to Pixel Art Tool</h2>
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
                  <p className="text-gray-600">Start creating pixel art instantly without registering an account or providing any personal information.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">High-Resolution Output</h3>
                  <p className="text-gray-600">Export crisp pixel art at any resolution, perfect for game sprites, social media posts, or large-format prints.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">Works on Any Device</h3>
                  <p className="text-gray-600">Our pixel art converter works perfectly on desktop, tablet, and mobile — no app download needed.</p>
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
                  <h3 className="text-lg font-semibold mb-1">Multiple Pixel Art Styles</h3>
                  <p className="text-gray-600">Four distinct pixel art styles to match any creative vision, from classic square pixels to isometric 3D effects.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-gray-600">Everything you need to know about converting photos to pixel art</p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Is this photo to pixel art converter really free?</h3>
                <p className="text-gray-600">Yes, our photo to pixel art converter is completely free to use. There are no hidden fees, watermarks, or premium features behind a paywall. You can create and download unlimited pixel art at no cost.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">What pixel art styles are available?</h3>
                <p className="text-gray-600">We offer four distinct styles: Classic (traditional square pixels for an authentic retro look), Rounded (softer pixels with rounded edges), Outline (pixel art with emphasized outlines for a bold effect), and Isometric (3D-perspective pixel blocks for a unique dimensional look).</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">What types of photos work best for pixel art?</h3>
                <p className="text-gray-600">Photos with clear subjects and strong colors work best for pixel art conversion. Portraits, characters, simple objects, and iconic scenes produce great results. Images with good contrast and distinct color areas will give you the most recognizable and appealing pixel art.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Can I control the pixel size and color palette?</h3>
                <p className="text-gray-600">Absolutely! You can adjust the pixel grid size from very large pixels (for a chunky 8-bit look) to small pixels (for more detailed artwork). You can also control the number of colors in your palette and choose from preset retro color schemes inspired by classic gaming consoles.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Can I use the pixel art for commercial projects?</h3>
                <p className="text-gray-600">Yes! The pixel art you create from your own photos is yours to use however you like, including commercial projects such as games, merchandise, social media content, and digital art sales. Just make sure you have the rights to the original photo.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-primary to-primary-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Own Pixel Art?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">Turn any photo into stunning pixel art in seconds. Free, fast, and no signup required.</p>
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
              <h2>Photo to Pixel Art: The Ultimate Free Online Converter</h2>
              <p>
                Our free photo to pixel art converter makes it easy to transform any photograph into beautiful, retro-inspired pixel art in just seconds. Whether you're a game developer looking for quick sprite assets, a digital artist exploring the pixel art aesthetic, or someone who loves the nostalgic charm of 8-bit and 16-bit graphics, our tool delivers professional-quality results without any cost or complicated software.
              </p>

              <h3>How Our Photo to Pixel Art Technology Works</h3>
              <p>
                Our pixel art generator uses intelligent downsampling and color quantization algorithms to analyze your photo and convert it into a grid of discrete color blocks. The process preserves the essential shapes, colors, and features of your original image while applying the characteristic blocky aesthetic of pixel art. You can control the pixel grid resolution, the number of colors in the palette, and the rendering style to achieve exactly the look you want.
              </p>

              <h3>Four Pixel Art Styles for Every Creative Vision</h3>
              <p>
                We offer a range of pixel art styles to suit different use cases and creative preferences:
              </p>
              <ul>
                <li><strong>Classic</strong>: Traditional square pixels with clean edges — the iconic pixel art look inspired by retro video games and 8-bit computing</li>
                <li><strong>Rounded</strong>: Softer pixels with slightly rounded corners — a modern take on pixel art that feels friendly and approachable</li>
                <li><strong>Outline</strong>: Pixel art with emphasized dark outlines around color regions — great for sprites, characters, and artwork that needs to pop</li>
                <li><strong>Isometric</strong>: 3D-perspective pixel blocks that add depth and dimension — perfect for isometric game assets and architectural visualizations</li>
              </ul>

              <h3>Creative Uses for Pixel Art</h3>
              <p>
                The possibilities are vast when you can turn any photo into pixel art. Game developers use our tool to rapidly prototype sprites, textures, and background tiles from reference photographs. Digital artists create pixel art portraits and landscapes for online galleries and social media. Content creators generate unique pixel art avatars and thumbnails that stand out. And collectors produce one-of-a-kind pixelated artwork for NFT collections and digital exhibitions.
              </p>

              <h3>Tips for Creating the Best Pixel Art</h3>
              <p>
                To get the best results from our photo to pixel art converter, start with a photo that has a clear, well-defined subject and strong color contrast. Portraits, characters, simple objects, and iconic scenes tend to produce the most recognizable pixel art. Experiment with different pixel sizes — larger pixels give you that classic retro 8-bit feel, while smaller pixels preserve more detail. Try different color palette sizes to find the sweet spot between simplicity and accuracy. Our converter handles all the heavy lifting, so you can focus on being creative!
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
