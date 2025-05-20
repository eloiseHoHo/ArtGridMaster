export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4H8V8H4V4Z"></path>
                <path d="M10 4H14V8H10V4Z"></path>
                <path d="M16 4H20V8H16V4Z"></path>
                <path d="M4 10H8V14H4V10Z"></path>
                <path d="M10 10H14V14H10V10Z"></path>
                <path d="M16 10H20V14H16V10Z"></path>
                <path d="M4 16H8V20H4V16Z"></path>
                <path d="M10 16H14V20H10V16Z"></path>
                <path d="M16 16H20V20H16V16Z"></path>
              </svg>
              <h2 className="text-lg font-bold">PhotoGrid</h2>
            </div>
            <p className="mb-4">Free online tool for artists to transform images into grids, line art, and sketches.</p>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Features</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Grid Transformation</a></li>
              <li><a href="#" className="hover:text-white">Line Art Conversion</a></li>
              <li><a href="#" className="hover:text-white">Sketch Generation</a></li>
              <li><a href="#" className="hover:text-white">URL Image Import</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center md:text-left">
          <p>© {new Date().getFullYear()} PhotoGrid. All rights reserved. Free to use for everyone.</p>
        </div>
      </div>
    </footer>
  );
}
