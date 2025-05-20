import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Categories() {
  // Categories for SEO optimization - Main keyword is "Photo Grid"
  // These are secondary keywords
  const categories = [
    {
      id: "portrait-photo-grid",
      title: "Portrait Photo Grid",
      description: "Transform portrait photos into perfect grid references for accurate drawings and paintings. Ideal for portrait artists and students.",
      image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      subcategories: [
        "Women Portrait Photo Grid",
        "Men Portrait Photo Grid", 
        "Children Portrait Photo Grid"
      ]
    },
    {
      id: "landscape-photo-grid",
      title: "Landscape Photo Grid",
      description: "Create precise grid overlays for landscape paintings and drawings. Perfect for capturing complex natural scenes with accuracy.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      subcategories: [
        "Mountain Photo Grid",
        "Seascape Photo Grid", 
        "Urban Landscape Photo Grid"
      ]
    },
    {
      id: "animal-photo-grid",
      title: "Animal Photo Grid",
      description: "Transform animal photos into accurate grid references for wildlife art. Specially optimized for capturing animal proportions and details.",
      image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      subcategories: [
        "Wildlife Photo Grid",
        "Pet Photo Grid", 
        "Birds Photo Grid"
      ]
    },
    {
      id: "still-life-photo-grid",
      title: "Still Life Photo Grid",
      description: "Create precise grid references for still life artwork. Ideal for capturing complex arrangements of objects with perfect proportions.",
      image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      subcategories: [
        "Floral Photo Grid",
        "Food Photo Grid", 
        "Object Photo Grid"
      ]
    },
    {
      id: "architecture-photo-grid",
      title: "Architecture Photo Grid",
      description: "Transform architectural photos into grid references with accurate perspective. Perfect for urban sketching and architectural drawings.",
      image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      subcategories: [
        "Building Photo Grid",
        "Interior Photo Grid", 
        "Historic Architecture Photo Grid"
      ]
    },
    {
      id: "figure-photo-grid",
      title: "Figure Photo Grid",
      description: "Create accurate grid references for figure drawing and painting. Ideal for artists studying human form and proportions.",
      image: "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      subcategories: [
        "Gesture Photo Grid",
        "Anatomical Photo Grid", 
        "Artistic Pose Photo Grid"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Photo Grid Categories for Artists: Portrait, Landscape, Animal & More | GridArt Studio</title>
        <meta 
          name="description" 
          content="Explore our specialized Photo Grid categories for artists: Portrait Photo Grid, Landscape Photo Grid, Animal Photo Grid, and more. Find the perfect grid references for your art."
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="Photo Grid Categories for Artists | GridArt Studio" />
        <meta property="og:description" content="Explore our specialized Photo Grid categories for artists: Portrait, Landscape, Animal, Still Life, Architecture, and Figure grid references." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gridart.studio/categories" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://gridart.studio/categories" />
      </Helmet>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Photo Grid Categories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our specialized Photo Grid categories to find the perfect grid references for your artistic projects
          </p>
        </div>
        
        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => (
            <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{category.description}</p>
                <div className="mt-4">
                  <p className="font-medium text-gray-800 mb-2">Popular subcategories:</p>
                  <ul className="list-disc pl-5 text-gray-600 text-sm">
                    {category.subcategories.map((sub, index) => (
                      <li key={index}>
                        <Link href={`/transform/new?type=grid&preset=${sub.toLowerCase().replace(/\s+/g, '-')}`}>
                          <a className="hover:text-primary hover:underline">{sub}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/categories/${category.id}`}>
                  <Button className="w-full">
                    Explore {category.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* SEO text section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Photo Grid for Every Artist</h2>
            <p className="mb-4 text-gray-700">
              A photo grid is a powerful technique used by artists to improve accuracy and proportions in their drawings and paintings. By overlaying a grid on a reference photo, artists can focus on small sections at a time, making complex subjects more manageable and ensuring correct proportions.
            </p>
            <p className="mb-4 text-gray-700">
              At GridArt Studio, we've optimized our photo grid tools for different artistic subjects. Whether you're creating portrait art, landscape paintings, wildlife illustrations, still life compositions, architectural sketches, or figure drawings, we have specialized grid transformations to enhance your artistic process.
            </p>
            <p className="mb-4 text-gray-700">
              Our categories offer different grid densities, styles, and optimizations based on the subject matter. For example, portrait photo grids focus on facial proportions, while landscape photo grids help manage perspective and spatial relationships in natural scenes.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Why Use Different Photo Grid Types?</h2>
            <p className="mb-4 text-gray-700">
              Different subjects require different approaches when using the grid method:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong>Portrait Photo Grids</strong> - Help capture accurate facial proportions and expressions that are crucial for recognizable portraits.</li>
              <li><strong>Landscape Photo Grids</strong> - Assist with complex natural elements and maintaining perspective across wide scenes.</li>
              <li><strong>Animal Photo Grids</strong> - Optimized for capturing animal proportions and distinctive features.</li>
              <li><strong>Still Life Photo Grids</strong> - Perfect for precise arrangement of objects and capturing subtle details.</li>
              <li><strong>Architecture Photo Grids</strong> - Designed to maintain straight lines and correct perspective in structural drawings.</li>
              <li><strong>Figure Photo Grids</strong> - Help artists master human proportions and anatomy for life drawing.</li>
            </ul>
            <p className="text-gray-700">
              Explore our specialized categories to find the perfect photo grid transformation for your next artistic project, and take your drawing and painting skills to the next level.
            </p>
          </div>
        </div>
        
        {/* CTA section */}
        <div className="bg-gradient-to-r from-primary to-primary-700 rounded-2xl text-white p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Photos?</h2>
            <p className="text-white/90 mb-8">Create custom photo grids for any artistic subject with our easy-to-use tools.</p>
            <Button 
              variant="secondary" 
              className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all font-medium"
              onClick={() => window.location.href = "/transform/new"}
            >
              Create Your First Photo Grid
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}