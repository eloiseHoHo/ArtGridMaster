import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Image, Info, Check } from "lucide-react";

export default function MenPortraitPhotoGrid() {
  // Example images for this tertiary keyword page
  const exampleImages = [
    {
      id: 1,
      title: "Fine Detail Male Portrait",
      description: "High-density grid optimized for male facial features and proportions.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 2,
      title: "Three-Quarter View Male Portrait",
      description: "Grid reference for the popular three-quarter view in male portraiture.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 3,
      title: "Profile Male Portrait",
      description: "Side-view grid reference for capturing male profile portraits.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];

  // Features specific to men portrait grids
  const features = [
    "Optimized for male facial proportions",
    "Specialized grid density for detailed features",
    "Enhanced alignment for masculine facial structure",
    "Perfect for capturing strong facial characteristics",
    "Ideal for portrait paintings and drawings",
    "Grid styles for different artistic techniques"
  ];

  // Related tertiary keywords
  const relatedSubcategories = [
    {
      id: "women-portrait-photo-grid",
      title: "Women Portrait Photo Grid"
    },
    {
      id: "children-portrait-photo-grid",
      title: "Children Portrait Photo Grid"
    },
    {
      id: "elderly-portrait-photo-grid",
      title: "Elderly Portrait Photo Grid"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Men Portrait Photo Grid: Male Reference Guide for Artists | PhotoGrid</title>
        <meta 
          name="description" 
          content="Transform male portrait photos into perfect grid references for drawings and paintings. Our Men Portrait Photo Grid tool helps artists capture accurate facial proportions and masculine features."
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="Men Portrait Photo Grid: Male Reference Guide for Artists | PhotoGrid" />
        <meta property="og:description" content="Transform male portrait photos into perfect grid references. Our Men Portrait Photo Grid tool helps artists capture accurate facial proportions and masculine features." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://photogrid.app/categories/portrait-photo-grid/men-portrait-photo-grid" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://photogrid.app/categories/portrait-photo-grid/men-portrait-photo-grid" />
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
            <Link href="/categories/portrait-photo-grid">
              <a className="hover:text-primary">Portrait Photo Grid</a>
            </Link>
            <span className="mx-2">→</span>
            <span className="font-medium text-gray-900">Men Portrait Photo Grid</span>
          </div>
        </div>
        
        {/* Hero section */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Men Portrait Photo Grid</h1>
              <p className="text-lg text-gray-700 mb-6">
                Transform male portrait photographs into perfect grid references for your drawings and paintings. Our specialized Men Portrait Photo Grid tool helps artists capture accurate facial proportions and masculine features.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={() => window.location.href = "/transform"}
                  className="bg-primary hover:bg-primary-600 text-white"
                >
                  <Image className="mr-2 h-4 w-4" />
                  Create Male Portrait Grid
                </Button>
                <Button variant="outline">
                  <Info className="mr-2 h-4 w-4" />
                  View Examples
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Male portrait with grid overlay" 
                className="rounded-lg shadow-lg object-cover"
              />
              <div className="grid-overlay rounded-lg"></div>
            </div>
          </div>
        </div>
        
        {/* Example grids */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Men Portrait Grid Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exampleImages.map((example) => (
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Men Portrait Photo Grid Features</h2>
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
        
        {/* Content for SEO */}
        <div className="prose max-w-none mb-16">
          <h2>The Art of Male Portrait Drawing with Grid References</h2>
          <p>
            Creating accurate male portraits presents unique challenges for artists. Male facial structure typically features more angular elements, pronounced jawlines, and distinctive patterns of facial hair. A specialized male portrait photo grid provides the precise reference needed to capture these masculine characteristics.
          </p>
          
          <h3>Understanding Male Facial Proportions</h3>
          <p>
            Successful male portrait drawing relies on understanding the distinctive proportions of masculine facial features. These often include:
          </p>
          <ul>
            <li>Stronger, more defined jawlines</li>
            <li>More prominent brow ridges</li>
            <li>Broader nose structure</li>
            <li>Different eye-to-face proportions than female portraits</li>
            <li>Characteristic facial hair patterns</li>
          </ul>
          
          <p>
            Our Men Portrait Photo Grid tool is specifically optimized to help artists navigate these distinctive features while maintaining accurate proportions throughout the drawing process.
          </p>
          
          <h3>Approaches to Male Portrait Drawing</h3>
          <div className="mt-4 mb-8">
            <h4>Front-facing Portraits</h4>
            <p>
              The most straightforward approach, front-facing portraits benefit from our symmetrical grid overlay that helps maintain proper alignment and balance between facial features.
            </p>
            
            <h4>Three-quarter View</h4>
            <p>
              This popular angle provides depth while revealing the structure of the face. Our specialized three-quarter grid guides artists through the foreshortening challenges presented by this angle.
            </p>
            
            <h4>Profile Portraits</h4>
            <p>
              The male profile has distinctive proportions and contours. Our profile-specific grid helps artists capture the strong lines of the forehead, nose, and jawline from this challenging angle.
            </p>
          </div>
          
          <h3>Tips for Using Male Portrait Photo Grids</h3>
          <p>
            To get the most from our Men Portrait Photo Grid tool, consider these professional tips:
          </p>
          <ul>
            <li>Choose the grid density appropriate for your skill level and intended detail</li>
            <li>Pay special attention to the proportional relationships between features</li>
            <li>Use a lighter grid overlay for realistic portrait styles</li>
            <li>Take time to accurately capture the unique proportions of your specific subject</li>
          </ul>
          
          <p>
            While the grid helps with proportions, developing skill in rendering textures like facial hair and skin is equally important for compelling male portraits. Our grid opacity can be adjusted to provide structure without interfering with subtle tonal work.
          </p>
          
          <h3>Conclusion</h3>
          <p>
            The Men Portrait Photo Grid provides an invaluable reference tool for artists at all skill levels who want to create accurate, expressive, and realistic male portraits. By breaking down complex facial structures into manageable sections, our specialized grid system helps you focus on one area at a time while maintaining perfect proportions throughout your portrait.
          </p>
          
          <p>
            Ready to transform your male portrait art? Try our free Men Portrait Photo Grid tool today and experience the difference that proper proportions and precision can make in your artistic process.
          </p>
        </div>
        
        {/* Related subcategories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Portrait Grid Categories</h2>
          <div className="flex flex-wrap gap-4">
            {relatedSubcategories.map((subcat) => (
              <Link key={subcat.id} href={`/categories/portrait-photo-grid/${subcat.id}`}>
                <Button variant="outline" size="lg">
                  {subcat.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
        
        {/* CTA section */}
        <div className="bg-gradient-to-r from-primary to-primary-700 rounded-2xl text-white p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Create Your Male Portrait Grid Now</h2>
            <p className="text-white/90 mb-8">Transform your male portrait photography into the perfect artist reference with our free specialized grid tools.</p>
            <Button 
              variant="secondary" 
              className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all font-medium"
              onClick={() => window.location.href = "/transform"}
            >
              Try It Free
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}