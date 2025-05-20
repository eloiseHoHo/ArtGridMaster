import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  // Blog posts data - in a real application, this would come from an API
  const blogPosts = [
    {
      id: 7,
      slug: "how-to-use-grid-for-perfect-portraits",
      title: "如何使用网格法绘制完美肖像画",
      excerpt: "学习如何使用网格法绘制准确的肖像画。这份详细指南将帮助您掌握肖像绘画的比例和细节，从而创作出令人惊叹的肖像作品。",
      date: "2023-06-25",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      category: "教程"
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
  const categories = ["All", "Tutorials", "Techniques", "Digital Art", "Tips & Tricks"];

  return (
    <>
      <Helmet>
        <title>Photo Grid Blog: Tips, Techniques & Tutorials for Artists | GridArt Studio</title>
        <meta 
          name="description" 
          content="Explore our Photo Grid blog with expert tips, step-by-step tutorials, and advanced techniques to enhance your artistic skills using grid, line art, and sketch transformations."
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="Photo Grid Blog: Tips, Techniques & Tutorials | GridArt Studio" />
        <meta property="og:description" content="Explore our Photo Grid blog with expert tips, step-by-step tutorials, and advanced techniques to enhance your artistic skills." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gridart.studio/blog" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://gridart.studio/blog" />
      </Helmet>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Photo Grid Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert tips, step-by-step tutorials, and advanced techniques to enhance your artistic skills using grid transformations
          </p>
        </div>
        
        {/* Categories filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <Button 
              key={category} 
              variant={category === "All" ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Blog post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
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
            <Button onClick={() => window.location.href='/'}>
              Try PhotoGrid Tool Now
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}