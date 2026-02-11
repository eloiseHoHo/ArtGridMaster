import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Image, Info, Check } from "lucide-react";

export default function LandscapePhotoGrid() {
  // Examples for this secondary keyword category
  const examples = [
    {
      id: 1,
      title: "Mountain Landscape Grid",
      description: "High-density grid perfect for capturing the majestic details of mountain landscapes.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 2,
      title: "Seascape Grid",
      description: "Specialized grid optimized for ocean scenes with horizon and wave details.",
      image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 3,
      title: "Forest Landscape Grid",
      description: "Grid pattern designed for intricate forest and foliage details with natural perspective.",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];

  // Subcategories (tertiary keywords) - these will redirect to the transform tool with specific presets
  const subcategories = [
    {
      id: "mountain-photo-grid",
      title: "Mountain Photo Grid",
      description: "Transform mountain landscapes into grid references with accurate terrain details and elevation.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "seascape-photo-grid",
      title: "Seascape Photo Grid",
      description: "Grid transformations optimized for ocean scenes, waves, and coastal landscapes.",
      image: "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "urban-landscape-photo-grid",
      title: "Urban Landscape Photo Grid",
      description: "Specialized grid patterns for cityscape drawing with architectural perspective lines.",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "desert-landscape-photo-grid",
      title: "Desert Landscape Photo Grid",
      description: "Grid references optimized for capturing the subtle textures and vast perspectives of desert scenes.",
      image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "sunset-landscape-photo-grid",
      title: "Sunset Landscape Photo Grid",
      description: "Grid transformations for dramatic sky and light conditions in sunset and sunrise scenes.",
      image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "river-landscape-photo-grid",
      title: "River & Lake Photo Grid",
      description: "Specialized grid references for river, lake and waterfall scenes with fluid perspective.",
      image: "https://images.unsplash.com/photo-1444312645910-ffa973656eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];

  // Features of this grid type
  const features = [
    "Horizon line alignment for accurate perspective",
    "Variable grid density for foreground vs background details",
    "Specialized settings for atmospheric perspective",
    "Optimized for capturing natural terrain features",
    "Support for panoramic landscape formats",
    "Custom grid styles for different landscape types"
  ];

  return (
    <>
      <Helmet>
        <title>Landscape Photo Grid: Transform Nature Photos for Artists | PhotoGrid.space</title>
        <meta 
          name="description" 
          content="Transform landscape photos into perfect grid references for paintings and drawings. Our Landscape Photo Grid tool helps artists capture natural scenes with accurate perspective."
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="Landscape Photo Grid: Transform Nature Photos for Artists | PhotoGrid.space" />
        <meta property="og:description" content="Transform landscape photos into perfect grid references. Our Landscape Photo Grid tool helps artists capture natural scenes with accurate perspective." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://photogrid.space/categories/landscape-photo-grid" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://photogrid.space/categories/landscape-photo-grid" />
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
            <span className="font-medium text-gray-900">Landscape Photo Grid</span>
          </div>
        </div>
        
        {/* Hero section */}
        <div className="bg-gray-50 rounded-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Landscape Photo Grid</h1>
              <p className="text-lg text-gray-700 mb-6">
                Transform landscape photographs into perfect grid references for your paintings and drawings. Our specialized Landscape Photo Grid tool helps artists capture the beauty of natural scenes with accurate perspective and proportion.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={() => window.location.href = "/transform/new?type=grid&preset=landscape"}
                  className="bg-primary hover:bg-primary-600 text-white"
                >
                  <Image className="mr-2 h-4 w-4" />
                  Create Landscape Grid
                </Button>
                <Button variant="outline">
                  <Info className="mr-2 h-4 w-4" />
                  Learn Landscape Techniques
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Landscape with grid overlay" 
                className="rounded-lg shadow-sm object-cover"
              />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-lg grid grid-cols-8 grid-rows-6 opacity-60"></div>
            </div>
          </div>
        </div>
        
        {/* Example grids */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Landscape Grid Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {examples.map((example) => (
              <Card key={example.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={example.image} 
                    alt={example.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 border-2 border-primary/20 grid grid-cols-6 grid-rows-4 opacity-60"></div>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Landscape Photo Grid Features</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Specialized Landscape Photo Grid Types</h2>
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
                  <Link href={`/transform/new?type=grid&preset=${subcat.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Create Grid
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
          <h2>Why Use a Landscape Photo Grid?</h2>
          <p>
            Landscape drawing and painting presents unique challenges for artists. Natural scenes contain complex elements, vast perspectives, and subtle details that can be difficult to capture accurately. This makes the landscape photo grid an invaluable tool for artists of all skill levels.
          </p>
          
          <h3>Benefits of Using Landscape Photo Grids</h3>
          <p>
            A well-designed landscape photo grid helps artists maintain accurate proportions across wide scenes, capture the relationship between foreground and background elements, and simplify complex natural environments. Our specialized landscape grid tools are optimized specifically for natural terrain features and perspective.
          </p>
          
          <h3>How Landscape Photo Grids Differ From Standard Grids</h3>
          <p>
            While standard grid references divide an image into uniform squares, landscape-specific grids often incorporate variations that align with horizon lines and perspective points. Our landscape grids can use variable density, with finer grid lines in areas of interest and detail.
          </p>
          
          <h3>Landscape Grid Techniques for Beginners</h3>
          <p>
            For those new to using landscape grids, we recommend starting with a simple scene featuring a clear horizon line and distinct foreground elements. This provides the clearest reference for establishing perspective relationships. As you become more comfortable with the technique, you can move on to more complex landscapes with multiple focal points and atmospheric conditions.
          </p>
          
          <h3>Advanced Landscape Grid Applications</h3>
          <p>
            Experienced artists often use landscape grids to solve specific challenges rather than as a constant guide. For example, you might use our landscape grid tool to verify the proportions of complex terrain features, or to help establish accurate atmospheric perspective across distant mountain ranges.
          </p>
          
          <h2>Landscape Photo Grid vs. Other Drawing Methods</h2>
          <p>
            While there are many approaches to landscape drawing, including linear perspective, atmospheric perspective, and plein air observation, the landscape photo grid offers several distinct advantages:
          </p>
          
          <ul>
            <li>Systematically breaks down vast scenes into manageable sections</li>
            <li>Provides clear reference points for placing features accurately</li>
            <li>Helps maintain consistent proportions across wide panoramas</li>
            <li>Works effectively with atmospheric perspective and depth</li>
            <li>Adapts to various landscape formats from wide panoramas to vertical compositions</li>
          </ul>
          
          <h2>How to Create the Perfect Landscape Photo Grid</h2>
          <p>
            With our Landscape Photo Grid tool, creating the ideal reference for your landscape artwork is simple:
          </p>
          
          <ol>
            <li>Upload a high-quality landscape photograph</li>
            <li>Select the "Landscape" specialization from our grid options</li>
            <li>Adjust grid density to match the complexity of your scene</li>
            <li>Customize grid color and opacity to work with your reference photo</li>
            <li>Use horizon alignment features to ensure accurate perspective</li>
            <li>Download or print your landscape grid reference</li>
          </ol>
          
          <p>
            The result is a perfectly proportioned grid overlay that helps you capture the beauty and grandeur of natural landscapes with unprecedented accuracy.
          </p>
          
          <h2>Conclusion</h2>
          <p>
            Whether you're a beginning artist looking to improve your landscape skills or a professional seeking to enhance your workflow, our specialized Landscape Photo Grid tool provides the precision and flexibility you need. By breaking down complex natural scenes into manageable sections, you can focus on one area at a time while maintaining perfect proportions throughout your landscape.
          </p>
          
          <p>
            Ready to transform your landscape artwork? Try our Landscape Photo Grid tool today and experience the difference that proper proportions and perspective can make in your artistic process.
          </p>
        </div>
        
        {/* CTA section */}
        <div className="bg-gray-900 rounded-lg text-white p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Create Your Landscape Grid Now</h2>
            <p className="text-white/90 mb-8">Transform your landscape photography into the perfect artist reference with our specialized grid tools.</p>
            <Button 
              variant="secondary" 
              className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all font-medium"
              onClick={() => window.location.href = "/transform/new?type=grid&preset=landscape"}
            >
              Start Creating Landscape Grids
            </Button>
          </div>
        </div>
        
        {/* Link back to categories */}
        <div className="mt-10 text-center">
          <Link href="/categories">
            <Button variant="outline" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Categories
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
}