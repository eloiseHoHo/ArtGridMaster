import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="text-base font-semibold text-gray-900">PhotoGrid</span>
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
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} PhotoGrid.space
        </div>
      </div>
    </footer>
  );
}
