import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
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
              <h2 className="text-lg font-bold">PhotoGrid.space</h2>
            </div>
            <p className="mb-4 text-sm">100% free online tools for artists to transform images into grids, line art, sketches, coloring pages, paint by numbers, pixel art, and paintings.</p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/photo-to-grid"><a className="hover:text-white transition-colors">Photo to Grid</a></Link></li>
              <li><Link href="/photo-to-lineart"><a className="hover:text-white transition-colors">Photo to Line Art</a></Link></li>
              <li><Link href="/photo-to-sketch"><a className="hover:text-white transition-colors">Photo to Sketch</a></Link></li>
              <li><Link href="/photo-to-coloring-page"><a className="hover:text-white transition-colors">Photo to Coloring Page</a></Link></li>
              <li><Link href="/photo-to-paint-by-numbers"><a className="hover:text-white transition-colors">Paint by Numbers</a></Link></li>
              <li><Link href="/photo-to-pixel-art"><a className="hover:text-white transition-colors">Photo to Pixel Art</a></Link></li>
              <li><Link href="/photo-to-watercolor"><a className="hover:text-white transition-colors">Watercolor & Oil Painting</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog"><a className="hover:text-white transition-colors">Blog</a></Link></li>
              <li><Link href="/categories"><a className="hover:text-white transition-colors">Categories</a></Link></li>
              <li><Link href="/blog/grid-method-for-perfect-portraits"><a className="hover:text-white transition-colors">Grid Method Guide</a></Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center md:text-left text-sm">
          <p>&copy; {new Date().getFullYear()} PhotoGrid.space. All rights reserved. Free to use for everyone.</p>
        </div>
      </div>
    </footer>
  );
}
