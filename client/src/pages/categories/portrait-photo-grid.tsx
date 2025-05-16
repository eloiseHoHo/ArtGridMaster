import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Image, Info, Check } from "lucide-react";

export default function PortraitPhotoGrid() {
  // Examples for this secondary keyword category
  const examples = [
    {
      id: 1,
      title: "Fine Detail Portrait Grid",
      description: "High-density grid perfect for detailed portrait work with emphasis on facial features.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 2,
      title: "Classic Portrait Grid",
      description: "Standard grid pattern ideal for most portrait drawing and painting projects.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 3,
      title: "Facial Proportion Grid",
      description: "Specialized grid focused on capturing accurate facial proportions and features.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];

  // Subcategories (tertiary keywords)
  const subcategories = [
    {
      id: "women-portrait-photo-grid",
      title: "Women Portrait Photo Grid",
      description: "Specialized grid references for female portrait art with optimal proportions.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "men-portrait-photo-grid",
      title: "Men Portrait Photo Grid",
      description: "Grid transformations optimized for male portrait features and proportions.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "children-portrait-photo-grid",
      title: "Children Portrait Photo Grid",
      description: "Special grid references for capturing the unique proportions of children's portraits.",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "elderly-portrait-photo-grid",
      title: "Elderly Portrait Photo Grid",
      description: "Grid references optimized for capturing the character and details in elderly portraits.",
      image: "https://images.unsplash.com/photo-1442458370899-ae20e367c5d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "expressive-portrait-photo-grid",
      title: "Expressive Portrait Photo Grid",
      description: "Grid transformations for portraits with dynamic expressions and emotions.",
      image: "https://images.unsplash.com/photo-1499651681375-8afc5a4db253?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "profile-portrait-photo-grid",
      title: "Profile Portrait Photo Grid",
      description: "Specialized grid references for side-view and profile portrait drawings.",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];

  // Features of this grid type
  const features = [
    "Variable density grids for detailed facial features",
    "Automatic alignment with key facial landmarks",
    "Optimized proportions for human faces",
    "Custom grid styles for different portrait techniques",
    "Specialized settings for different lighting conditions",
    "Support for various portrait orientations and angles"
  ];

  return (
    <>
      <Helmet>
        <title>Portrait Photo Grid: Expert Guide for Artist References | GridArt Studio</title>
        <meta 
          name="description" 
          content="Transform portrait photos into perfect grid references for drawings and paintings. Our Portrait Photo Grid tool helps artists capture accurate facial proportions and details."
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="Portrait Photo Grid: Expert Guide for Artist References | GridArt Studio" />
        <meta property="og:description" content="Transform portrait photos into perfect grid references. Our Portrait Photo Grid tool helps artists capture accurate facial proportions and details." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gridart.studio/categories/portrait-photo-grid" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://gridart.studio/categories/portrait-photo-grid" />
      </Helmet>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/">
              <a className="hover:text-primary">Home</a>
            </Link>
            <span className="mx-2">→</span>
            <Link href="/categories">
              <a className="hover:text-primary">Categories</a>
            </Link>
            <span className="mx-2">→</span>
            <span className="font-medium text-gray-900">Portrait Photo Grid</span>
          </div>
        </div>
        
        {/* Hero section */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portrait Photo Grid</h1>
              <p className="text-lg text-gray-700 mb-6">
                Transform portrait photographs into perfect grid references for your drawings and paintings. Our specialized Portrait Photo Grid tool helps artists capture accurate facial proportions and details.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={() => window.location.href = "/transform/new"}
                  className="bg-primary hover:bg-primary-600 text-white"
                >
                  <Image className="mr-2 h-4 w-4" />
                  Create Portrait Grid
                </Button>
                <Button variant="outline">
                  <Info className="mr-2 h-4 w-4" />
                  Learn Portrait Techniques
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Portrait with grid overlay" 
                className="rounded-lg shadow-lg object-cover"
              />
              <div className="grid-overlay rounded-lg"></div>
            </div>
          </div>
        </div>
        
        {/* Example grids */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Portrait Grid Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {examples.map((example) => (
              <Card key={example.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={example.image} 
                    alt={example.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="grid-overlay opacity-70"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{example.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{example.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Features section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Portrait Photo Grid Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-emerald-500" />
                </div>
                <p className="ml-3 text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Subcategories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Specialized Portrait Photo Grid Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategories.map((subcat) => (
              <Card key={subcat.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={subcat.image} 
                    alt={subcat.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{subcat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{subcat.description}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/categories/portrait-photo-grid/${subcat.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Content for SEO */}
        <div className="prose max-w-none mb-16">
          <h2>Why Use a Portrait Photo Grid?</h2>
          <p>
            Portrait drawing and painting presents unique challenges for artists. The human face is not only anatomically complex, but we're also naturally attuned to recognize even slight inaccuracies in facial proportions. This makes the portrait photo grid an invaluable tool for artists of all skill levels.
          </p>
          
          <h3>Benefits of Using Portrait Photo Grids</h3>
          <p>
            A well-designed portrait photo grid helps artists maintain accurate proportions between facial features, capture the unique characteristics that make each person recognizable, and simplify the complex task of reproducing a human face. Our specialized portrait grid tools are optimized specifically for human facial proportions.
          </p>
          
          <h3>How Portrait Photo Grids Differ From Standard Grids</h3>
          <p>
            While standard grid references divide an image into uniform squares, portrait-specific grids often incorporate variations that align with key facial landmarks. For example, our portrait grids can use variable density, with finer grid lines around the eyes, nose, and mouth where precision is most critical.
          </p>
          
          <h3>Portrait Grid Techniques for Beginners</h3>
          <p>
            For those new to using portrait grids, we recommend starting with a standard grid on a forward-facing portrait with neutral lighting. This provides the clearest reference for key proportional relationships. As you become more comfortable with the technique, you can move on to more challenging poses, lighting conditions, and expressions.
          </p>
          
          <h3>Advanced Portrait Grid Applications</h3>
          <p>
            Experienced artists often use portrait grids for specific purposes rather than as a constant guide. For example, you might use our portrait grid tool to verify the proportions of particularly challenging features, or to help scale a portrait to a different size while maintaining perfect proportions.
          </p>
          
          <h2>Portrait Photo Grid vs. Other Drawing Methods</h2>
          <p>
            While there are many approaches to portrait drawing, including sight-size method, comparative measurement, and constructive anatomy, the portrait photo grid offers several distinct advantages:
          </p>
          
          <ul>
            <li>Systematically breaks down complex features into manageable sections</li>
            <li>Provides clear reference points for placing features accurately</li>
            <li>Helps maintain consistent proportions throughout the portrait</li>
            <li>Works effectively across different artistic media (pencil, charcoal, paint, digital)</li>
            <li>Scales easily for different sizes of artwork</li>
          </ul>
          
          <h2>How to Create the Perfect Portrait Photo Grid</h2>
          <p>
            With our Portrait Photo Grid tool, creating the ideal reference for your portrait artwork is simple:
          </p>
          
          <ol>
            <li>Upload a high-quality portrait photograph</li>
            <li>Select the "Portrait" specialization from our grid options</li>
            <li>Adjust grid density to match your skill level and the complexity of your subject</li>
            <li>Customize grid color and opacity to work with your reference photo</li>
            <li>Download or print your portrait grid reference</li>
          </ol>
          
          <p>
            The result is a perfectly proportioned grid overlay that helps you capture the essence and likeness of your portrait subject with unprecedented accuracy.
          </p>
          
          <h2>Conclusion</h2>
          <p>
            Whether you're a beginning artist looking to improve your portrait skills or a professional seeking to enhance your workflow, our specialized Portrait Photo Grid tool provides the precision and flexibility you need. By breaking down complex facial structures into manageable sections, you can focus on one area at a time while maintaining perfect proportions throughout your portrait.
          </p>
          
          <p>
            Ready to transform your portrait artwork? Try our Portrait Photo Grid tool today and experience the difference that proper proportions and precision can make in your artistic process.
          </p>
        </div>
        
        {/* CTA section */}
        <div className="bg-gradient-to-r from-primary to-primary-700 rounded-2xl text-white p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Create Your Portrait Grid Now</h2>
            <p className="text-white/90 mb-8">Transform your portrait photography into the perfect artist reference with our specialized grid tools.</p>
            <Button 
              variant="secondary" 
              className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all font-medium"
              onClick={() => window.location.href = "/transform/new"}
            >
              Start Creating Portrait Grids
            </Button>
          </div>
        </div>
        
        {/* Related categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Related Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/categories/figure-photo-grid">
              <a className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-center transition-colors">
                Figure Photo Grid
              </a>
            </Link>
            <Link href="/categories/landscape-photo-grid">
              <a className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-center transition-colors">
                Landscape Photo Grid
              </a>
            </Link>
            <Link href="/categories/still-life-photo-grid">
              <a className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-center transition-colors">
                Still Life Photo Grid
              </a>
            </Link>
            <Link href="/categories">
              <a className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-center transition-colors">
                All Categories
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}