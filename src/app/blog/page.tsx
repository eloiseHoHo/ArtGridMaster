import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Photo Grid Blog: Tutorials, Social Media Tips & Tool Guides",
  description:
    "Explore photo grid tutorials, TikTok and Instagram grid guides, plus practical tool comparisons and creator workflows.",
  alternates: { canonical: "https://www.photogrid.space/blog" },
};

type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
};

const socialPosts: BlogPost[] = [
  {
    id: 15,
    slug: "tiktok-photo-grid-guide",
    title: "TikTok Photo Grid Guide (2026): How to Create Grid Posts Step by Step",
    excerpt:
      "Learn TikTok photo grid feature basics, best layouts, posting workflow, and practical tips to increase views with grid content.",
    date: "2026-02-27",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Social Media",
  },
  {
    id: 14,
    slug: "best-photo-grid-makers",
    title: "Best Photo Grid Makers in 2026: 6 Tools Compared",
    excerpt:
      "Detailed comparison of top photo grid makers including PhotoGrid App alternatives, with focus on speed, watermark, and no-download workflow.",
    date: "2026-02-27",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Comparison",
  },
  {
    id: 13,
    slug: "instagram-grid-layout-guide",
    title: "Instagram Grid Layout Guide: How to Plan a Consistent Feed",
    excerpt:
      "A practical Instagram grid planner guide covering puzzle grids, checkerboard layouts, and collage workflows for stronger profile aesthetics.",
    date: "2026-02-27",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Instagram",
  },
];

const artPosts: BlogPost[] = [
  {
    id: 12,
    slug: "beginner-guide-to-pixel-art",
    title: "Beginner's Guide to Pixel Art: From Photos to Retro Masterpieces",
    excerpt:
      "Learn how to create pixel art from photos. Complete beginner's guide covering pixel art fundamentals, photo conversion, and creative uses for retro-style art.",
    date: "2026-02-10",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Tutorial",
  },
  {
    id: 11,
    slug: "how-to-create-coloring-pages-from-photos",
    title: "How to Create Custom Coloring Pages from Your Photos",
    excerpt:
      "Turn any photo into a printable coloring page. Step-by-step guide to making custom coloring books for kids and adults using free online tools.",
    date: "2026-02-05",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Tutorial",
  },
  {
    id: 10,
    slug: "line-art-vs-sketch-which-style-for-your-art",
    title: "Line Art vs Sketch: Which Drawing Style is Right for Your Art?",
    excerpt:
      "Compare line art and sketch drawing styles. Learn the key differences, when to use each, and how to convert photos to both styles.",
    date: "2026-01-15",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Guide",
  },
  {
    id: 9,
    slug: "perspective-grid-techniques-for-landscapes",
    title: "Perspective Grid Techniques for Landscape Painting",
    excerpt:
      "Master perspective in landscape art with our guide to grid techniques. Learn how to capture depth, distance, and scale in your landscape paintings and drawings.",
    date: "2023-06-29",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Tutorial",
  },
  {
    id: 8,
    slug: "grid-method-for-perfect-portraits",
    title: "How to Use Grid Method for Perfect Portraits",
    excerpt:
      "Learn how to master the grid method for portrait drawing with our step-by-step guide. Achieve perfect proportions and create stunning portrait artwork easily.",
    date: "2023-06-28",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Tutorial",
  },
];

function PostGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Card
          key={post.id}
          className="overflow-hidden hover:shadow-sm transition-shadow border border-gray-100"
        >
          <div className="h-48 overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
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
  );
}

export default function Blog() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog</h1>
        <p className="text-gray-500">
          Social growth playbooks and art tutorials for photo grid creators.
        </p>
      </div>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Social Growth</h2>
        <p className="text-gray-500 mb-8">
          Platform-specific guides for TikTok and Instagram plus tool-comparison content for faster publishing workflows.
        </p>
        <PostGrid posts={socialPosts} />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Art Tutorials</h2>
        <p className="text-gray-500 mb-8">
          Drawing and transformation techniques for creators who also use PhotoGrid.space for illustration practice.
        </p>
        <PostGrid posts={artPosts} />
      </section>

      <div className="bg-gray-50 rounded-xl p-8 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Start With the Right Tool</h2>
          <p className="text-gray-600 mb-6">
            For social posting speed, use Collage and Splitter first. For creative workflows, continue with our art conversion tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/photo-grid-collage">
              <Button>Try Photo Grid Collage</Button>
            </Link>
            <Link href="/instagram-grid-splitter">
              <Button variant="outline">Try Instagram Grid Splitter</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
