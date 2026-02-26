import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Grid Blog: Tips, Techniques & Tutorials for Artists",
  description: "Explore our Photo Grid blog with expert tips, step-by-step tutorials, and advanced techniques to enhance your artistic skills.",
  alternates: { canonical: "https://www.photogrid.space/blog" },
};

import Link from "next/link";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  // Blog posts data - in a real application, this would come from an API
  const blogPosts = [
    {
      id: 12,
      slug: "beginner-guide-to-pixel-art",
      title: "Beginner's Guide to Pixel Art: From Photos to Retro Masterpieces",
      excerpt: "Learn how to create pixel art from photos. Complete beginner's guide covering pixel art fundamentals, photo conversion, and creative uses for retro-style art.",
      date: "2026-02-10",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Tutorial"
    },
    {
      id: 11,
      slug: "how-to-create-coloring-pages-from-photos",
      title: "How to Create Custom Coloring Pages from Your Photos",
      excerpt: "Turn any photo into a printable coloring page. Step-by-step guide to making custom coloring books for kids and adults using free online tools.",
      date: "2026-02-05",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Tutorial"
    },
    {
      id: 10,
      slug: "line-art-vs-sketch-which-style-for-your-art",
      title: "Line Art vs Sketch: Which Drawing Style is Right for Your Art?",
      excerpt: "Compare line art and sketch drawing styles. Learn the key differences, when to use each, and how to convert photos to both styles.",
      date: "2026-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Guide"
    },
    {
      id: 9,
      slug: "perspective-grid-techniques-for-landscapes",
      title: "Perspective Grid Techniques for Landscape Painting",
      excerpt: "Master perspective in landscape art with our guide to grid techniques. Learn how to capture depth, distance, and scale in your landscape paintings and drawings.",
      date: "2023-06-29",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      category: "Tutorial"
    },
    {
      id: 8,
      slug: "grid-method-for-perfect-portraits",
      title: "How to Use Grid Method for Perfect Portraits",
      excerpt: "Learn how to master the grid method for portrait drawing with our step-by-step guide. Achieve perfect proportions and create stunning portrait artwork easily.",
      date: "2023-06-28",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      category: "Tutorial"
    },

    {
      id: 1,
      slug: "photo-grid-for-artists",
      title: "Photo Grid for Artists: The Complete Guide",
      excerpt: "Learn how to use photo grids to improve your artistic skills and create stunning artworks with perfect proportions.",
      date: "2023-05-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1510832842230-87253f48d74f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      category: "Tutorials"
    },
    {
      id: 2,
      slug: "portrait-photo-grid-techniques",
      title: "Portrait Photo Grid Techniques for Beginners",
      excerpt: "Discover how to use photo grids specifically for portrait drawings and paintings to achieve perfect facial proportions.",
      date: "2023-05-22",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      category: "Techniques"
    },
    {
      id: 3,
      slug: "landscape-photo-grid-mastery",
      title: "Landscape Photo Grid Mastery: From Photo to Canvas",
      excerpt: "Master the art of transforming landscape photographs into perfect grid references for your paintings and drawings.",
      date: "2023-05-29",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      category: "Techniques"
    },
    {
      id: 4,
      slug: "digital-art-with-photo-grid",
      title: "Digital Art with Photo Grid: Modern Techniques",
      excerpt: "Explore how digital artists are using photo grids to create stunning digital paintings and illustrations.",
      date: "2023-06-05",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1525373698358-041e3a460346?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      category: "Digital Art"
    },
    {
      id: 5,
      slug: "photo-grid-vs-traditional-methods",
      title: "Photo Grid vs Traditional Methods: What Works Best?",
      excerpt: "Compare the effectiveness of photo grid techniques with traditional art methods for accurate drawings and paintings.",
      date: "2023-06-12",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      category: "Techniques"
    },
    {
      id: 6,
      slug: "animal-photo-grid-reference",
      title: "Animal Photo Grid Reference: Tips and Tricks",
      excerpt: "Learn specialized techniques for creating grid references of animals for more accurate wildlife art.",
      date: "2023-06-19",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      category: "Tips & Tricks"
    }
  ];

  // Categories for filter
  const categories = ["All", "Tutorial", "Guide", "Tutorials", "Techniques", "Digital Art", "Tips & Tricks"];

  return (
    <>
      
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog</h1>
          <p className="text-gray-500">
            Tutorials, techniques, and tips for artists using grid transformations.
          </p>
        </div>
        
        {/* Blog post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-sm transition-shadow border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="bg-primary-100 text-primary-800 rounded-full px-3 py-1">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
                <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                  <Clock className="h-4 w-4 ml-3 mr-1" />
                  {post.readTime}
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" size="sm">
                    Read <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Helpful links section */}
        <div className="bg-gray-50 rounded-xl p-8 mt-16">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Free Resources for Artists</h2>
            <p className="text-gray-600 mb-6">Explore our completely free articles, tutorials, and tips about photo grid techniques to improve your art skills.</p>
            <Link href="/">
              <Button>
                Try PhotoGrid Tool Now
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}