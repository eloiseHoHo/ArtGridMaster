import BeforeAfterComparison from "./BeforeAfterComparison";

export default function ExamplesShowcase() {
  // Example images for different transformation types
  const examples = [
    {
      id: 1,
      title: "Grid Transformation",
      description: "Perfect for artists to maintain proportions while drawing",
      beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      afterImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800&grid=true"
    },
    {
      id: 2,
      title: "Line Art Transformation",
      description: "Convert photos into clean line drawings for tracing or coloring",
      beforeImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      afterImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800&lineart=true"
    },
    {
      id: 3,
      title: "Sketch Transformation",
      description: "Transform photos into sketch-like images for artistic reference",
      beforeImage: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      afterImage: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800&sketch=true"
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