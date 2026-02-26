"use client";
import Link from "next/link";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Image, Info, Check } from "lucide-react";

export default function ChildrenPortraitPhotoGrid() {
  // Example images for this tertiary keyword page
  const exampleImages = [
    {
      id: 1,
      title: "Children Portrait Fine Grid",
      description: "High-density grid optimized for children's facial proportions and features.",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 2,
      title: "Three-Quarter Child Portrait",
      description: "Grid reference for three-quarter view in children's portraiture.",
      image: "https://images.unsplash.com/photo-1588779180563-d1c68e64b6e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 3,
      title: "Profile Child Portrait",
      description: "Side-view grid reference for capturing children's profile portraits.",
      image: "https://images.unsplash.com/photo-1513709630908-2fbc54f82fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];

  // Features specific to children portrait grids
  const features = [
    "Optimized for children's unique facial proportions",
    "Specialized grid for capturing youthful features",
    "Enhanced alignment for softer facial contours",
    "Perfect for capturing expressions and emotions",
    "Ideal for portrait paintings and drawings of children",
    "Adjustable grid density for different age groups"
  ];

  // Related tertiary keywords
  const relatedSubcategories = [
    {
      id: "women-portrait-photo-grid",
      title: "Women Portrait Photo Grid"
    },
    {
      id: "men-portrait-photo-grid",
      title: "Men Portrait Photo Grid"
    },
    {
      id: "elderly-portrait-photo-grid",
      title: "Elderly Portrait Photo Grid"
    }
  ];

  return (
    <>
      
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/">
              <span className="hover:text-primary">Home</span>
            </Link>
            <span className="mx-2">→</span>
            <Link href="/categories">
              <span className="hover:text-primary">Categories</span>
            </Link>
            <span className="mx-2">→</span>
            <Link href="/categories/portrait-photo-grid">
              <span className="hover:text-primary">Portrait Photo Grid</span>
            </Link>
            <span className="mx-2">→</span>
            <span className="font-medium text-gray-900">Children Portrait Photo Grid</span>
          </div>
        </div>
        
        {/* Hero section */}
        <div className="bg-gray-50 rounded-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Children Portrait Photo Grid</h1>
              <p className="text-lg text-gray-700 mb-6">
                Transform children's portrait photographs into perfect grid references for your drawings and paintings. Our specialized Children Portrait Photo Grid tool helps artists capture youthful proportions and expressions.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={() => window.location.href = "/transform"}
                  className="bg-primary hover:bg-primary-600 text-white"
                >
                  <Image className="mr-2 h-4 w-4" />
                  Create Children Portrait Grid
                </Button>
                <Button variant="outline">
                  <Info className="mr-2 h-4 w-4" />
                  View Examples
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Child portrait with grid overlay" 
                className="rounded-lg shadow-sm object-cover"
              />
              <div className="grid-overlay rounded-lg"></div>
            </div>
          </div>
        </div>
        
        {/* Example grids */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Children Portrait Grid Examples</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Children Portrait Photo Grid Features</h2>
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
          <h2>The Art of Children's Portrait Drawing with Grid References</h2>
          <p>
            Creating portraits of children presents unique challenges and rewards for artists. Children's proportions differ significantly from adults, with larger eyes relative to the face, softer jawlines, and different proportional relationships between facial features. A specialized children's portrait photo grid provides the precise reference needed to capture these youthful characteristics accurately.
          </p>
          
          <h3>Understanding Children's Facial Proportions</h3>
          <p>
            Successful children's portrait drawing relies on understanding the distinctive proportions of young faces. These often include:
          </p>
          <ul>
            <li>Larger eyes in proportion to the face</li>
            <li>Higher positioned features on the face</li>
            <li>Rounder, softer facial contours</li>
            <li>Smaller nose and chin proportions</li>
            <li>More prominent foreheads</li>
          </ul>
          
          <p>
            Our Children Portrait Photo Grid tool is specifically optimized to help artists navigate these distinctive features while maintaining accurate proportions throughout the drawing process.
          </p>
          
          <h3>Approaches to Children's Portrait Drawing</h3>
          <div className="mt-4 mb-8">
            <h4>Front-facing Portraits</h4>
            <p>
              The most straightforward approach for children's portraits, front-facing views benefit from our symmetrical grid overlay that helps maintain proper alignment and correct proportions of their facial features.
            </p>
            
            <h4>Three-quarter View</h4>
            <p>
              This engaging angle captures personality while showing facial structure. Our specialized three-quarter grid guides artists through the challenges of depicting children's softer facial contours from this perspective.
            </p>
            
            <h4>Profile Portraits</h4>
            <p>
              Children's profiles have distinctive proportions. Our profile-specific grid helps artists capture the gentle curves of the forehead, nose, and chin that characterize a child's face from this angle.
            </p>
          </div>
          
          <h3>Tips for Using Children's Portrait Photo Grids</h3>
          <p>
            To get the most from our Children Portrait Photo Grid tool, consider these professional tips:
          </p>
          <ul>
            <li>Select an appropriate grid density that matches your subject's age and your artistic style</li>
            <li>Pay special attention to the larger eye-to-face ratio in children</li>
            <li>Note that facial features sit higher on a child's face than on an adult's</li>
            <li>Remember that children's proportions change rapidly with age - a toddler's proportions differ from those of a 10-year-old</li>
          </ul>
          
          <p>
            While the grid helps with proportions, capturing a child's expression and personality is equally important for a successful portrait. Our grid opacity can be adjusted to provide structure without interfering with the expressive qualities of your work.
          </p>
          
          <h3>Conclusion</h3>
          <p>
            The Children Portrait Photo Grid provides an invaluable reference tool for artists at all skill levels who want to create accurate, engaging, and lifelike portraits of children. By breaking down complex facial structures into manageable sections, our specialized grid system helps you focus on one area at a time while maintaining perfect proportions throughout your portrait.
          </p>
          
          <p>
            Ready to transform your children's portrait art? Try our free Children Portrait Photo Grid tool today and experience the difference that proper proportions and precision can make in your artistic process.
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
        <div className="bg-gray-900 rounded-lg text-white p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Create Your Children Portrait Grid Now</h2>
            <p className="text-white/90 mb-8">Transform your children's portrait photography into the perfect artist reference with our free specialized grid tools.</p>
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