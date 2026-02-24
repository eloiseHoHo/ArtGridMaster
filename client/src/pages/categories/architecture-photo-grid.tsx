import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Image, Info, Check } from "lucide-react";

export default function ArchitecturePhotoGrid() {
  // Examples for this secondary keyword category
  const examples = [
    {
      id: 1,
      title: "Building Exterior Grid",
      description: "Precise grid overlay for capturing architectural facades with accurate perspective lines.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 2,
      title: "Interior Perspective Grid",
      description: "Specialized grid optimized for interior architectural spaces and vanishing points.",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 3,
      title: "Historical Architecture Grid",
      description: "Grid pattern designed for capturing ornate details in historical and classical architecture.",
      image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];

  // Subcategories (tertiary keywords) - these will redirect to the transform tool with specific presets
  const subcategories = [
    {
      id: "building-photo-grid",
      title: "Building Photo Grid",
      description: "Transform building photographs into grid references with precise perspective lines and architectural proportions.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "interior-photo-grid",
      title: "Interior Photo Grid",
      description: "Grid transformations optimized for interior spaces with multiple vanishing points and spatial depth.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "historic-architecture-photo-grid",
      title: "Historic Architecture Photo Grid",
      description: "Specialized grid patterns for capturing ornate details and classical proportions in historic buildings.",
      image: "https://images.unsplash.com/photo-1548248823-ce16a73b6d49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "modern-architecture-photo-grid",
      title: "Modern Architecture Photo Grid",
      description: "Grid references optimized for contemporary architectural forms with clean lines and geometric shapes.",
      image: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "urban-sketching-grid",
      title: "Urban Sketching Grid",
      description: "Grid transformations for urban environment sketching with emphasis on streetscapes and cityscapes.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: "architectural-detail-grid",
      title: "Architectural Detail Grid",
      description: "Ultra-detailed grid references for capturing ornate architectural elements and fine details.",
      image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];

  // Features of this grid type
  const features = [
    "Perspective alignment for accurate vanishing points",
    "Variable grid density for detailed architectural elements",
    "Special grid options for interior vs. exterior architecture",
    "Support for one-point, two-point, and three-point perspective",
    "Optimized for straight lines and geometric precision",
    "Customized templates for different architectural styles"
  ];

  return (
    <>
      <Helmet>
        <title>Architecture Photo Grid: Create Perfect Building References | PhotoGrid.space</title>
        <meta 
          name="description" 
          content="Transform architectural photos into perfect grid references for drawings and sketches. Our Architecture Photo Grid tool helps artists capture buildings with accurate perspective."
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="Architecture Photo Grid: Create Perfect Building References | PhotoGrid.space" />
        <meta property="og:description" content="Transform architectural photos into perfect grid references. Our Architecture Photo Grid tool helps artists capture buildings with accurate perspective." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://photogrid.space/categories/architecture-photo-grid" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://photogrid.space/categories/architecture-photo-grid" />
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
            <span className="font-medium text-gray-900">Architecture Photo Grid</span>
          </div>
        </div>
        
        {/* Hero section */}
        <div className="bg-gray-50 rounded-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Architecture Photo Grid</h1>
              <p className="text-lg text-gray-700 mb-6">
                Transform architectural photographs into perfect grid references for your drawings and sketches. Our specialized Architecture Photo Grid tool helps artists capture buildings and spaces with accurate perspective and proportion.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={() => window.location.href = "/transform/new?type=grid&preset=architecture"}
                  className="bg-primary hover:bg-primary-600 text-white"
                >
                  <Image className="mr-2 h-4 w-4" />
                  Create Architecture Grid
                </Button>
                <Button variant="outline">
                  <Info className="mr-2 h-4 w-4" />
                  Learn Perspective Techniques
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Architecture with grid overlay" 
                className="rounded-lg shadow-sm object-cover"
              />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-lg grid grid-cols-8 grid-rows-6 opacity-60"></div>
            </div>
          </div>
        </div>
        
        {/* Example grids */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Architecture Grid Examples</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Architecture Photo Grid Features</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Specialized Architecture Photo Grid Types</h2>
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
          <h2>Why Use an Architecture Photo Grid?</h2>
          <p>
            Architectural drawing presents unique challenges for artists. Buildings and interior spaces have precise perspective relationships, straight lines, and geometric elements that can be difficult to capture accurately. This makes the architecture photo grid an invaluable tool for artists and architects of all skill levels.
          </p>
          
          <h3>Benefits of Using Architecture Photo Grids</h3>
          <p>
            A well-designed architecture photo grid helps artists maintain accurate perspective, capture the relationship between structural elements, and simplify complex architectural details. Our specialized architecture grid tools are optimized specifically for built environments and their unique characteristics.
          </p>
          
          <h3>How Architecture Photo Grids Differ From Standard Grids</h3>
          <p>
            While standard grid references divide an image into uniform squares, architecture-specific grids often incorporate perspective guidelines that align with vanishing points. Our architecture grids can use variable density and perspective-based distortion to help artists maintain accurate spatial relationships.
          </p>
          
          <h3>Architecture Grid Techniques for Beginners</h3>
          <p>
            For those new to using architecture grids, we recommend starting with a one-point perspective structure with clear geometric forms. This provides the clearest reference for establishing perspective relationships. As you become more comfortable with the technique, you can move on to more complex structures with multiple vanishing points and intricate details.
          </p>
          
          <h3>Advanced Architecture Grid Applications</h3>
          <p>
            Experienced artists and architects often use architecture grids to solve specific challenges rather than as a constant guide. For example, you might use our architecture grid tool to verify the perspective of particularly challenging viewpoints, or to help establish accurate spatial relationships in complex interior scenes.
          </p>
          
          <h2>Architecture Photo Grid vs. Other Drawing Methods</h2>
          <p>
            While there are many approaches to architectural drawing, including freehand perspective, technical drafting, and 3D modeling, the architecture photo grid offers several distinct advantages:
          </p>
          
          <ul>
            <li>Systematically breaks down complex structures into manageable sections</li>
            <li>Provides clear reference points for maintaining proper perspective</li>
            <li>Helps maintain consistent proportions across complex structural elements</li>
            <li>Works effectively with both exterior and interior spaces</li>
            <li>Adapts to various architectural styles from classical to contemporary</li>
          </ul>
          
          <h2>How to Create the Perfect Architecture Photo Grid</h2>
          <p>
            With our Architecture Photo Grid tool, creating the ideal reference for your architectural artwork is simple:
          </p>
          
          <ol>
            <li>Upload a high-quality architectural photograph</li>
            <li>Select the "Architecture" specialization from our grid options</li>
            <li>Choose the specific architectural style or space type</li>
            <li>Adjust grid density to match the complexity of your subject</li>
            <li>Use perspective alignment features to ensure accurate vanishing points</li>
            <li>Download or print your architecture grid reference</li>
          </ol>
          
          <p>
            The result is a perfectly proportioned grid overlay that helps you capture the precise perspective and details of any architectural subject.
          </p>
          
          <h2>Conclusion</h2>
          <p>
            Whether you're a beginning artist learning perspective drawing or a professional architect seeking to enhance your sketching workflow, our specialized Architecture Photo Grid tool provides the precision and flexibility you need. By breaking down complex structures into manageable sections with proper perspective, you can focus on one area at a time while maintaining perfect proportions throughout your architectural drawing.
          </p>
          
          <p>
            Ready to transform your architectural artwork? Try our Architecture Photo Grid tool today and experience the difference that proper perspective and proportion can make in your drawing process.
          </p>
        </div>
        
        {/* CTA section */}
        <div className="bg-gray-900 rounded-lg text-white p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Create Your Architecture Grid Now</h2>
            <p className="text-white/90 mb-8">Transform your architectural photography into the perfect artist reference with our specialized grid tools.</p>
            <Button 
              variant="secondary" 
              className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all font-medium"
              onClick={() => window.location.href = "/transform/new?type=grid&preset=architecture"}
            >
              Start Creating Architecture Grids
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