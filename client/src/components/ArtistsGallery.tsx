import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Heart, Eye } from "lucide-react";

export default function ArtistsGallery() {
  const { data: galleryImages } = useQuery({
    queryKey: ['/api/images/gallery'],
    // Since we don't have real gallery data yet, we'll use fallback data
    enabled: false,
  });
  
  // Sample gallery items (would normally come from API)
  const galleryItems = [
    {
      id: 1,
      title: "Grid Portrait Study",
      author: "Maria Chen",
      likes: 256,
      views: 1200,
      imageUrl: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 2,
      title: "Urban Line Art",
      author: "James Wilson",
      likes: 124,
      views: 876,
      imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 3,
      title: "Botanical Sketch",
      author: "Sarah Park",
      likes: 185,
      views: 943,
      imageUrl: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 4,
      title: "Architectural Grid Study",
      author: "David Rodriguez",
      likes: 148,
      views: 752,
      imageUrl: "https://images.unsplash.com/photo-1575995872537-3793d29d972c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];
  
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Artist Gallery</h2>
      <p className="text-gray-600 mb-8 max-w-3xl">See how other artists have used our tools to create stunning artwork. Upload your own creations to be featured in our gallery.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500">by {item.author}</p>
              <div className="flex items-center mt-2 text-xs text-gray-400">
                <span className="flex items-center mr-3">
                  <Heart className="h-3 w-3 mr-1" /> {item.likes}
                </span>
                <span className="flex items-center">
                  <Eye className="h-3 w-3 mr-1" /> {item.views}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Button variant="outline">
          View Gallery
        </Button>
      </div>
    </section>
  );
}
