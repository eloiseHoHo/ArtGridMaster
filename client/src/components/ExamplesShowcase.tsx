import BeforeAfterComparison from "./BeforeAfterComparison";

export default function ExamplesShowcase() {
  // Example images for different transformation types
  const examples = [
    {
      id: 1,
      title: "Grid Transformation",
      description: "Perfect for artists to maintain proportions while drawing",
      beforeImage: "/images/examples/portrait.jpg",
      afterImage: "/images/examples/grid/portrait-grid.svg"
    },
    {
      id: 2,
      title: "Line Art Transformation",
      description: "Convert photos into clean line drawings for tracing or coloring",
      beforeImage: "/images/examples/man-portrait.jpg",
      afterImage: "/images/examples/lineart/man-portrait-lineart.svg"
    },
    {
      id: 3,
      title: "Sketch Transformation",
      description: "Transform photos into sketch-like images for artistic reference",
      beforeImage: "/images/examples/flower.jpg",
      afterImage: "/images/examples/sketch/flower-sketch.svg"
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">See the Transformation</h2>
          <p className="mt-4 text-xl text-gray-600">
            Drag the slider to compare before and after images
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example) => (
            <div key={example.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-4">
                <BeforeAfterComparison
                  beforeImage={example.beforeImage}
                  afterImage={example.afterImage}
                  title={example.title}
                  description={example.description}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}