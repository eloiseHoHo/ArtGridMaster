import BeforeAfterComparison from "./BeforeAfterComparison";

export default function ExamplesShowcase() {
  // Example images for different transformation types
  const examples = [
    {
      id: 1,
      title: "Grid Transformation",
      description: "Perfect for artists to maintain proportions while drawing",
      beforeImage: "/images/examples/real-portrait.jpg",
      afterImage: "/images/examples/processed/portrait-grid.svg"
    },
    {
      id: 2,
      title: "Line Art Transformation",
      description: "Convert photos into clean line drawings for tracing or coloring",
      beforeImage: "/images/examples/real-landscape.jpg",
      afterImage: "/images/examples/processed/landscape-lineart.svg"
    },
    {
      id: 3,
      title: "Sketch Transformation",
      description: "Transform photos into sketch-style drawings for artistic reference",
      beforeImage: "/images/examples/real-flower.jpg",
      afterImage: "/images/examples/processed/flower-sketch.svg"
    },
  ];

  return (
    <section className="py-16">
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