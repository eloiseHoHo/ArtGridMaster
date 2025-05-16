import { CheckCircle } from "lucide-react";

export default function FeatureSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Transform Your Images Into Artist Tools</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Grid Transformation Feature */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
          <div className="p-1 bg-gradient-to-r from-primary to-accent"></div>
          <div className="p-6">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="3" y1="15" x2="21" y2="15"></line>
                <line x1="9" y1="3" x2="9" y2="21"></line>
                <line x1="15" y1="3" x2="15" y2="21"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Grid Transformation</h3>
            <p className="text-gray-600 mb-4">Convert images to grid patterns with adjustable density. Perfect for transferring images to canvas.</p>
            <ul className="text-gray-700 mb-4">
              <li className="flex items-center mb-1">
                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                Adjustable grid size
              </li>
              <li className="flex items-center mb-1">
                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                Custom grid color
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                Perfect for painting references
              </li>
            </ul>
          </div>
        </div>
        
        {/* Line Art Feature */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
          <div className="p-1 bg-gradient-to-r from-accent to-emerald-500"></div>
          <div className="p-6">
            <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Line Art Conversion</h3>
            <p className="text-gray-600 mb-4">Transform photos into clean line art drawings with adjustable detail levels.</p>
            <ul className="text-gray-700 mb-4">
              <li className="flex items-center mb-1">
                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                Edge detection algorithms
              </li>
              <li className="flex items-center mb-1">
                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                Adjustable line thickness
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                Multiple line styles
              </li>
            </ul>
          </div>
        </div>
        
        {/* Sketch Transformation Feature */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
          <div className="p-1 bg-gradient-to-r from-emerald-500 to-primary"></div>
          <div className="p-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Sketch Conversion</h3>
            <p className="text-gray-600 mb-4">Convert photos to pencil sketch style with customizable texture and detail levels.</p>
            <ul className="text-gray-700 mb-4">
              <li className="flex items-center mb-1">
                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                Realistic pencil textures
              </li>
              <li className="flex items-center mb-1">
                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                Control shading intensity
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                Charcoal and graphite styles
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
