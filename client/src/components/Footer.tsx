import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="flex items-center gap-2 text-base font-semibold text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" className="flex-shrink-0">
                <rect width="32" height="32" rx="6" fill="#1a1a1a"/>
                <g fill="white" opacity="0.95">
                  <rect x="5" y="5" width="6" height="6" rx="1.2"/>
                  <rect x="13" y="5" width="6" height="6" rx="1.2"/>
                  <rect x="21" y="5" width="6" height="6" rx="1.2"/>
                  <rect x="5" y="13" width="6" height="6" rx="1.2"/>
                  <rect x="13" y="13" width="6" height="6" rx="1.2"/>
                  <rect x="21" y="13" width="6" height="6" rx="1.2"/>
                  <rect x="5" y="21" width="6" height="6" rx="1.2"/>
                  <rect x="13" y="21" width="6" height="6" rx="1.2"/>
                  <rect x="21" y="21" width="6" height="6" rx="1.2"/>
                </g>
              </svg>
              PhotoGrid
            </span>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">Free tools for artists to transform photos into drawing references.</p>
          </div>

          <div>
            <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/photo-to-grid"><a className="text-gray-500 hover:text-gray-900 transition-colors">Grid</a></Link></li>
              <li><Link href="/photo-to-lineart"><a className="text-gray-500 hover:text-gray-900 transition-colors">Line Art</a></Link></li>
              <li><Link href="/photo-to-sketch"><a className="text-gray-500 hover:text-gray-900 transition-colors">Sketch</a></Link></li>
              <li><Link href="/photo-to-coloring-page"><a className="text-gray-500 hover:text-gray-900 transition-colors">Coloring Page</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">More Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/photo-to-paint-by-numbers"><a className="text-gray-500 hover:text-gray-900 transition-colors">Paint by Numbers</a></Link></li>
              <li><Link href="/photo-to-pixel-art"><a className="text-gray-500 hover:text-gray-900 transition-colors">Pixel Art</a></Link></li>
              <li><Link href="/photo-to-watercolor"><a className="text-gray-500 hover:text-gray-900 transition-colors">Watercolor</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog"><a className="text-gray-500 hover:text-gray-900 transition-colors">Blog</a></Link></li>
              <li><Link href="/categories"><a className="text-gray-500 hover:text-gray-900 transition-colors">Categories</a></Link></li>
              <li><Link href="/privacy"><a className="text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</a></Link></li>
              <li><Link href="/terms"><a className="text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</a></Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between gap-2 text-xs text-gray-400">
          <span>&copy; {new Date().getFullYear()} PhotoGrid.space</span>
          <div className="flex gap-4">
            <Link href="/privacy"><a className="hover:text-gray-600 transition-colors">Privacy</a></Link>
            <Link href="/terms"><a className="hover:text-gray-600 transition-colors">Terms</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
