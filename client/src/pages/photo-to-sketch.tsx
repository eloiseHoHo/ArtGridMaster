import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Upload, Image, Check } from "lucide-react";
import RelatedTools from "@/components/RelatedTools";

export default function PhotoToSketch() {
  return (
    <>
      <Helmet>
        <title>Convert Photo to Sketch Online Free | PhotoGrid.space</title>
        <meta 
          name="description" 
          content="Transform your photos into beautiful pencil sketches and charcoal drawings with our free online photo to sketch converter. No signup required. Try it now!"
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="Convert Photo to Sketch Online Free | PhotoGrid.space" />
        <meta property="og:description" content="Transform your photos into beautiful sketches with our free online photo to sketch converter. No signup or installation needed." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://photogrid.space/photo-to-sketch" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://photogrid.space/photo-to-sketch" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="37.09024;-95.712891" />
        <meta name="ICBM" content="37.09024, -95.712891" />
        {/* Keywords */}
        <meta name="keywords" content="photo to sketch, photo to drawing, picture to sketch converter, photo to pencil sketch, photo to charcoal drawing, sketch maker, sketch generator, free sketch converter, online sketch tool, turn photos into drawings" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Photo to Sketch Converter","url":"https://photogrid.space/photo-to-sketch","description":"Free online tool to convert photos into pencil sketches and charcoal drawings","applicationCategory":"DesignApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","ratingCount":"1960"}})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is this photo to sketch converter really free?","acceptedAnswer":{"@type":"Answer","text":"Yes! Our photo to sketch converter is completely free to use. There are no hidden fees, in-app purchases, or premium features that require payment."}},{"@type":"Question","name":"What types of photos work best?","acceptedAnswer":{"@type":"Answer","text":"Our converter works well with most types of photos, but images with good lighting, clear subjects, and reasonable contrast typically produce the best results. Both color and black-and-white photos work equally well."}},{"@type":"Question","name":"Can I adjust how my sketch looks?","acceptedAnswer":{"@type":"Answer","text":"Absolutely! You can customize your sketch by adjusting the intensity, shading level, and choosing between different sketch styles like graphite pencil, charcoal, and more."}},{"@type":"Question","name":"What's the maximum file size I can upload?","acceptedAnswer":{"@type":"Answer","text":"You can upload images up to 10MB in size. We support common image formats including JPG, PNG, and WebP."}},{"@type":"Question","name":"How do I download my sketched image?","acceptedAnswer":{"@type":"Answer","text":"After your photo has been converted to a sketch, simply click the \"Download\" button. Your sketch will be saved to your device in high quality."}}]})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"How to Convert Photos to Sketches","description":"Learn how to convert any photo into a pencil sketch using PhotoGrid.space free online tool.","step":[{"@type":"HowToStep","name":"Upload Your Photo","text":"Select any photo from your device or use sample images to get started."},{"@type":"HowToStep","name":"Choose Your Style","text":"Select from various sketch styles like graphite pencil, charcoal, and more. Adjust settings like intensity and shading."},{"@type":"HowToStep","name":"Download Your Sketch","text":"Preview and download your finished sketch in high resolution."}],"tool":[{"@type":"HowToTool","name":"PhotoGrid.space Sketch Converter"}],"totalTime":"PT1M"})}</script>
      </Helmet>
      
      <main>
        {/* Hero Section */}
        <section className="bg-white dark:bg-gray-950 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Transform Photos into Beautiful Sketches <span className="text-primary">Free</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                  Create stunning pencil sketches and charcoal drawings from any photo with our easy-to-use online converter. No signup or downloads required.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/transform/new">
                    <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                      <Upload className="mr-2 h-5 w-5" />
                      Upload Your Photo
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg">
                    <Image className="mr-2 h-5 w-5" />
                    Try Sample Image
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=700"
                  alt="Original photo" 
                  className="rounded-lg shadow-md dark:shadow-gray-900/50 w-full max-w-md mx-auto"
                />
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=230"
                  alt="Sketch effect"
                  className="absolute -bottom-6 -right-6 rounded-lg shadow-sm border-4 border-white w-1/3 transform rotate-6"
                  style={{filter: "grayscale(100%) contrast(120%)"}}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Create Stunning Sketches in Seconds</h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Our advanced AI technology transforms your photos into realistic hand-drawn sketches</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-md dark:shadow-gray-900/50 transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary-50 dark:bg-primary-900/20 w-12 h-12 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Multiple Sketch Styles</h3>
                  <p className="text-gray-600 dark:text-gray-400">Choose from various sketch styles including graphite pencil, charcoal, and more to get the perfect look.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md dark:shadow-gray-900/50 transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary-50 dark:bg-primary-900/20 w-12 h-12 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Customizable Settings</h3>
                  <p className="text-gray-600 dark:text-gray-400">Fine-tune your sketch with adjustable settings for intensity, detail level, and shading to match your vision.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md dark:shadow-gray-900/50 transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary-50 dark:bg-primary-900/20 w-12 h-12 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Instant Download</h3>
                  <p className="text-gray-600 dark:text-gray-400">Download your sketches immediately in high-quality formats, perfect for printing or sharing online.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How to Convert Photos to Sketches</h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Three simple steps to transform your photos</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="rounded-full bg-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
                <h3 className="text-xl font-semibold mb-2">Upload Your Photo</h3>
                <p className="text-gray-600 dark:text-gray-400">Select any photo from your device or use our sample images to get started</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full bg-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
                <h3 className="text-xl font-semibold mb-2">Choose Your Style</h3>
                <p className="text-gray-600 dark:text-gray-400">Select from various sketch styles and adjust settings like intensity and shading</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full bg-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
                <h3 className="text-xl font-semibold mb-2">Download Your Sketch</h3>
                <p className="text-gray-600 dark:text-gray-400">Preview and download your finished sketch in high resolution</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/transform/new">
                <Button size="lg" className="bg-primary hover:bg-primary-600 text-white">
                  Try It Now - It's Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Sketch Styles Showcase */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Different Sketch Styles Available</h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Choose the perfect artistic style for your photos</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="overflow-hidden rounded-lg shadow-md dark:shadow-gray-900/50">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500" 
                  alt="Pencil sketch style" 
                  className="w-full h-64 object-cover filter grayscale contrast-125"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Graphite Pencil</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Classic graphite pencil look with subtle shading and clean lines</p>
                </div>
              </div>
              
              <div className="overflow-hidden rounded-lg shadow-md dark:shadow-gray-900/50">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500" 
                  alt="Charcoal sketch style" 
                  className="w-full h-64 object-cover filter grayscale contrast-150 brightness-90"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Charcoal Drawing</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Rich, dark charcoal effect with dramatic shadows and contrast</p>
                </div>
              </div>
              
              <div className="overflow-hidden rounded-lg shadow-md dark:shadow-gray-900/50">
                <img 
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500" 
                  alt="Detailed line sketch style" 
                  className="w-full h-64 object-cover filter grayscale contrast-110 brightness-110"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Detailed Line Sketch</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Fine line drawing with emphasis on details and textures</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/transform/new">
                <Button variant="outline" size="lg">
                  View More Sketch Styles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Use Our Photo to Sketch Converter</h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Enjoy these benefits with our free online tool</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">100% Free to Use</h3>
                  <p className="text-gray-600 dark:text-gray-400">No hidden fees, subscriptions, or premium features. All sketch styles and options are completely free.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">No Sign-up Required</h3>
                  <p className="text-gray-600 dark:text-gray-400">Get started immediately without creating an account or providing personal information.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">Professional Quality Results</h3>
                  <p className="text-gray-600 dark:text-gray-400">Our advanced algorithms produce high-quality sketches that look like they were hand-drawn by professional artists.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">Works with Any Photo</h3>
                  <p className="text-gray-600 dark:text-gray-400">Convert portraits, landscapes, animals, or any other photo into beautiful sketches with equally amazing results.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">Privacy Protected</h3>
                  <p className="text-gray-600 dark:text-gray-400">Your photos are processed securely on our servers and are never stored or shared with third parties.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold mb-1">No Software Installation</h3>
                  <p className="text-gray-600 dark:text-gray-400">Everything works right in your browser - no need to download or install anything on your device.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Everything you need to know about our photo to sketch converter</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Is this photo to sketch converter really free?</h3>
                <p className="text-gray-600 dark:text-gray-400">Yes! Our photo to sketch converter is completely free to use. There are no hidden fees, in-app purchases, or premium features that require payment.</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">What types of photos work best?</h3>
                <p className="text-gray-600 dark:text-gray-400">Our converter works well with most types of photos, but images with good lighting, clear subjects, and reasonable contrast typically produce the best results. Both color and black-and-white photos work equally well.</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Can I adjust how my sketch looks?</h3>
                <p className="text-gray-600 dark:text-gray-400">Absolutely! You can customize your sketch by adjusting the intensity, shading level, and choosing between different sketch styles like graphite pencil, charcoal, and more.</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">What's the maximum file size I can upload?</h3>
                <p className="text-gray-600 dark:text-gray-400">You can upload images up to 10MB in size. We support common image formats including JPG, PNG, and WebP.</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">How do I download my sketched image?</h3>
                <p className="text-gray-600 dark:text-gray-400">After your photo has been converted to a sketch, simply click the "Download" button. Your sketch will be saved to your device in high quality.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Photos into Sketches?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">Create beautiful sketch art from your photos in seconds with our free online tool. No signup required.</p>
            <Link href="/transform/new">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
        
        {/* SEO Content Section */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Create Beautiful Pencil Sketches from Photos Online</h2>
              <p>
                Our free online photo to sketch converter transforms your ordinary photos into stunning pencil sketches, charcoal drawings, and other artistic styles with just a few clicks. Whether you're looking to create a unique gift, add an artistic touch to your social media, or simply explore the creative possibilities of your photography, our sketch tool delivers professional-quality results without the need for complicated software or artistic skills.
              </p>
              
              <h3>Perfect for Artists and Non-Artists Alike</h3>
              <p>
                Traditional pencil drawing takes years of practice to master, but our photo to sketch converter makes it possible for anyone to create beautiful sketch art instantly. Artists can use these sketches as references or starting points for more detailed work, while non-artists can enjoy transforming their favorite photos into unique pieces of art.
              </p>
              
              <h3>Multiple Artistic Styles to Choose From</h3>
              <p>
                Our tool offers various sketch styles to suit different artistic preferences:
              </p>
              
              <ul>
                <li><strong>Classic Graphite Pencil</strong>: The traditional pencil sketch look with clean lines and subtle shading</li>
                <li><strong>Soft Graphite</strong>: A softer, more blended pencil effect with less defined lines</li>
                <li><strong>Charcoal Drawing</strong>: Dark, rich charcoal effect with dramatic shadows and contrast</li>
                <li><strong>Detailed Line Work</strong>: Fine line drawing that emphasizes outlines and details</li>
                <li><strong>Cross-Hatching</strong>: Traditional cross-hatching technique for shading and texture</li>
              </ul>
              
              <h3>Customize Your Sketch to Perfection</h3>
              <p>
                Beyond choosing a sketch style, our tool allows you to fine-tune your results with adjustable settings:
              </p>
              
              <ul>
                <li><strong>Intensity</strong>: Control how pronounced the sketch effect appears</li>
                <li><strong>Shading Level</strong>: Adjust the depth and amount of shading in your sketch</li>
                <li><strong>Detail Level</strong>: Determine how much fine detail is preserved in your sketch</li>
              </ul>
              
              <h3>Popular Uses for Photo to Sketch Conversion</h3>
              <p>
                Our users transform their photos into sketches for many creative purposes:
              </p>
              
              <ul>
                <li>Creating personalized gifts like sketch portraits of loved ones</li>
                <li>Designing unique social media profile pictures</li>
                <li>Developing custom art prints for home decor</li>
                <li>Producing sketch references for traditional art projects</li>
                <li>Making distinctive greeting cards and invitations</li>
                <li>Enhancing creative photography portfolios</li>
              </ul>
              
              <h3>Why Choose Our Photo to Sketch Converter</h3>
              <p>
                With many photo editing tools available online, our sketch converter stands out for several reasons:
              </p>
              
              <ul>
                <li>100% free with no hidden premium features</li>
                <li>No account creation or personal information required</li>
                <li>High-quality, realistic sketch results</li>
                <li>Multiple sketch styles and customization options</li>
                <li>Easy to use with no technical skills needed</li>
                <li>Works right in your browser - no downloads necessary</li>
                <li>Secure processing that respects your privacy</li>
              </ul>
              
              <h2>Start Creating Beautiful Sketches Today</h2>
              <p>
                Transform your photos into stunning sketch art in seconds with our free online photo to sketch converter. No signup, no downloads, and no artistic experience required. Simply upload a photo, choose your preferred sketch style, adjust settings to your liking, and download your finished sketch. Join thousands of users who have already discovered the creative possibilities of our photo to sketch tool!
              </p>
            </div>
          </div>
        </section>

        <RelatedTools currentTool="sketch" />
      </main>
    </>
  );
}