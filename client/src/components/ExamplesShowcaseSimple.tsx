import BeforeAfterComparison from "./BeforeAfterComparison";

export default function ExamplesShowcase() {
  // Example images for different transformation types with direct links
  const examples = [
    {
      id: 1,
      title: "Grid Transformation",
      description: "Perfect for artists to maintain proportions while drawing",
      // Portrait photo by Hassan Ouajbir from Unsplash
      beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
      // Grid version
      afterImage: "https://images.pexels.com/photos/3791136/pexels-photo-3791136.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=1&grid=true"
    },
    {
      id: 2,
      title: "Line Art Transformation",
      description: "Convert photos into clean line drawings for tracing or coloring",
      // Mountain landscape by Eberhard Grossgasteiger from Unsplash
      beforeImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      // Line art version - a known line art image that matches the theme
      afterImage: "https://live.staticflickr.com/65535/49768030888_e7bef4d671_c.jpg"
    },
    {
      id: 3,
      title: "Sketch Transformation",
      description: "Transform photos into sketch-style drawings for artistic reference",
      // Flower photo by Rodion Kutsaiev from Unsplash
      beforeImage: "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
      // Sketch version - a pencil sketch of flowers
      afterImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            See the Transformation
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Drag the slider to compare before and after images and discover the possibilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example) => (
            <div key={example.id} className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02]">
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{example.title}</h3>
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <BeforeAfterComparison
                    beforeImage={example.beforeImage}
                    afterImage={example.afterImage}
                    title=""
                    description=""
                  />
                </div>
                <p className="text-gray-600">{example.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}