import BeforeAfterComparison from "./BeforeAfterComparison";

export default function ExamplesShowcase() {
  // Example images for different transformation types
  // Example images for different transformation types with their processed versions
  const examples = [
    {
      id: 1,
      title: "Grid Transformation",
      description: "Perfect for artists to maintain proportions while drawing",
      beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
      afterImage: "/images/examples/processed/portrait-grid.svg"
    },
    {
      id: 2,
      title: "Line Art Transformation",
      description: "Convert photos into clean line drawings for tracing or coloring",
      beforeImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      afterImage: "/images/examples/processed/landscape-lineart-new.svg"
    },
    {
      id: 3,
      title: "Sketch Transformation",
      description: "Transform photos into sketch-style drawings for artistic reference",
      beforeImage: "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
      afterImage: "/images/examples/processed/flower-sketch-new.svg"
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            See the Transformation
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Drag the slider to compare before and after images and discover the possibilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example) => (
            <div key={example.id} className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300">
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