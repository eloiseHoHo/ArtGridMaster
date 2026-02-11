import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Image, Info, Check } from "lucide-react";

export default function AnimalPhotoGrid() {
  // Examples for this secondary keyword category
  const examples = [
    {
      id: 1,
      title: "Wildlife Grid Reference",
      description: "High-detail grid for capturing wild animals in their natural habitat with accurate proportions.",
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 2,
      title: "Pet Portrait Grid",
      description: "Specialized grid optimized for domestic animals with focus on facial features and expressions.",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 3,
      title: "Bird Study Grid",
      description: "Fine grid pattern designed for capturing intricate feather details and avian anatomy.",
      image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];

  // Subcategories (tertiary keywords) - these will redirect to the transform tool with specific presets
  const subcategories = [
    {
      id: "wildlife-photo-grid",
      title: "Wildlife Photo Grid",
      description: "Transform wildlife photos into detailed grid references ideal for capturing animals in their natural habitat.",
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "pet-photo-grid",
      title: "Pet Photo Grid",
      description: "Grid transformations optimized for pet portraits with focus on capturing personality and character.",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "birds-photo-grid",
      title: "Birds Photo Grid",
      description: "Specialized grid patterns for avian subjects with emphasis on feather detail and beak structure.",
      image: "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "horse-photo-grid",
      title: "Horse Photo Grid",
      description: "Grid references optimized for equine anatomy and muscular structure for both portraits and action poses.",
      image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "marine-photo-grid",
      title: "Marine Life Photo Grid",
      description: "Grid transformations for underwater creatures with specialized transparency and fluid motion adaptations.",
      image: "https://images.unsplash.com/photo-1544552866-d3ed42536f23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "insect-photo-grid",
      title: "Insect Photo Grid",
      description: "Ultra-detailed grid references for macro insect photography with emphasis on tiny anatomical details.",
      image: "https://images.unsplash.com/photo-1557980664-9d3b3e6f23c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];

  // Features of this grid type
  const features = [
    "Anatomically optimized grid patterns for different species",
    "Variable density for detailed fur, feathers, and features",
    "Quick selection of common animal proportions",
    "Support for action poses and movement studies",
    "Special grid options for macro animal details",
    "Customized templates for different animal categories"
  ];

  return (
    <>
      <Helmet>
        <title>Animal Photo Grid: Transform Wildlife Photos for Artists | PhotoGrid.space</title>
        <meta 
          name="description" 
          content="Transform animal photos into perfect grid references for wildlife art. Our Animal Photo Grid tool helps artists capture accurate proportions and details of any species."
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="Animal Photo Grid: Transform Wildlife Photos for Artists | PhotoGrid.space" />
        <meta property="og:description" content="Transform animal photos into perfect grid references. Our Animal Photo Grid tool helps artists capture accurate proportions and details of any species." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photogrid.space/categories/animal-photo-grid" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.photogrid.space/categories/animal-photo-grid" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="37.09024;-95.712891" />
        <meta name="ICBM" content="37.09024, -95.712891" />
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
            <span className="font-medium text-gray-900">Animal Photo Grid</span>
          </div>
        </div>
        
        {/* Hero section */}
        <div className="bg-gray-50 rounded-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Animal Photo Grid</h1>
              <p className="text-lg text-gray-700 mb-6">
                Transform animal photographs into perfect grid references for wildlife art and animal portraits. Our specialized Animal Photo Grid tool helps artists capture the precise details and unique proportions of any species.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={() => window.location.href = "/transform/new?type=grid&preset=animal"}
                  className="bg-primary hover:bg-primary-600 text-white"
                >
                  <Image className="mr-2 h-4 w-4" />
                  Create Animal Grid
                </Button>
                <Button variant="outline">
                  <Info className="mr-2 h-4 w-4" />
                  Learn Animal Drawing Techniques
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Wildlife with grid overlay" 
                className="rounded-lg shadow-sm object-cover"
              />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-lg grid grid-cols-8 grid-rows-6 opacity-60"></div>
            </div>
          </div>
        </div>
        
        {/* Example grids */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Animal Grid Examples</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Animal Photo Grid Features</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Specialized Animal Photo Grid Types</h2>
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
          <h2>Why Use an Animal Photo Grid?</h2>
          <p>
            Animal drawing and painting presents unique challenges for artists. Each species has distinct proportions, anatomical features, and characteristic movements that can be difficult to capture accurately. This makes the animal photo grid an invaluable tool for wildlife artists of all skill levels.
          </p>
          
          <h3>Benefits of Using Animal Photo Grids</h3>
          <p>
            A well-designed animal photo grid helps artists maintain accurate proportions specific to each species, capture the unique anatomical features of different animals, and simplify complex structures like feathers, fur, and scales. Our specialized animal grid tools are optimized specifically for different animal types and their distinctive features.
          </p>
          
          <h3>How Animal Photo Grids Differ From Standard Grids</h3>
          <p>
            While standard grid references divide an image into uniform squares, animal-specific grids often incorporate variations that align with key anatomical landmarks. Our animal grids can use variable density, with finer grid lines in areas of intricate detail like eyes, beaks, or paws where precision is most critical.
          </p>
          
          <h3>Animal Grid Techniques for Beginners</h3>
          <p>
            For those new to using animal grids, we recommend starting with a forward-facing animal portrait with clear features. This provides the clearest reference for establishing proportional relationships. As you become more comfortable with the technique, you can move on to more challenging poses, dynamic movements, and complex species.
          </p>
          
          <h3>Advanced Animal Grid Applications</h3>
          <p>
            Experienced wildlife artists often use animal grids to solve specific challenges rather than as a constant guide. For example, you might use our animal grid tool to verify the proportions of particularly challenging anatomical features, or to help capture the dynamic movement of an animal in action.
          </p>
          
          <h2>Animal Photo Grid vs. Other Drawing Methods</h2>
          <p>
            While there are many approaches to animal drawing, including constructive anatomy, gesture drawing, and direct observation, the animal photo grid offers several distinct advantages:
          </p>
          
          <ul>
            <li>Systematically breaks down complex anatomical structures into manageable sections</li>
            <li>Provides clear reference points for placing features accurately</li>
            <li>Helps maintain consistent proportions across different species</li>
            <li>Works effectively with both still poses and movement studies</li>
            <li>Adapts to various animal types from tiny insects to large mammals</li>
          </ul>
          
          <h2>How to Create the Perfect Animal Photo Grid</h2>
          <p>
            With our Animal Photo Grid tool, creating the ideal reference for your wildlife artwork is simple:
          </p>
          
          <ol>
            <li>Upload a high-quality animal photograph</li>
            <li>Select the "Animal" specialization from our grid options</li>
            <li>Choose the specific animal type for optimized settings</li>
            <li>Adjust grid density to match the detail level of your subject</li>
            <li>Customize grid color and opacity to work with your reference photo</li>
            <li>Download or print your animal grid reference</li>
          </ol>
          
          <p>
            The result is a perfectly proportioned grid overlay that helps you capture the distinctive characteristics of any animal species with unprecedented accuracy.
          </p>
          
          <h2>Conclusion</h2>
          <p>
            Whether you're a beginning artist looking to improve your wildlife drawing skills or a professional seeking to enhance your animal artwork, our specialized Animal Photo Grid tool provides the precision and flexibility you need. By breaking down complex animal forms into manageable sections, you can focus on one area at a time while maintaining perfect proportions throughout your wildlife art.
          </p>
          
          <p>
            Ready to transform your animal artwork? Try our Animal Photo Grid tool today and experience the difference that proper proportions and anatomical accuracy can make in your artistic process.
          </p>
        </div>
        
        {/* CTA section */}
        <div className="bg-gray-900 rounded-lg text-white p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Create Your Animal Grid Now</h2>
            <p className="text-white/90 mb-8">Transform your wildlife photography into the perfect artist reference with our specialized grid tools.</p>
            <Button 
              variant="secondary" 
              className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all font-medium"
              onClick={() => window.location.href = "/transform/new?type=grid&preset=animal"}
            >
              Start Creating Animal Grids
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