import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-gray-100">
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
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-300 leading-relaxed">Free tools for artists to transform photos into drawing references.</p>
          </div>

          <div>
            <h3 className="text-xs font-medium text-gray-400 dark:text-gray-400 uppercase tracking-wider mb-3">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/photo-to-grid" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Grid</Link></li>
              <li><Link href="/photo-to-lineart" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Line Art</Link></li>
              <li><Link href="/photo-to-sketch" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Sketch</Link></li>
              <li><Link href="/photo-to-coloring-page" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Coloring Page</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium text-gray-400 dark:text-gray-400 uppercase tracking-wider mb-3">More Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/photo-to-paint-by-numbers" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Paint by Numbers</Link></li>
              <li><Link href="/photo-to-pixel-art" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Pixel Art</Link></li>
              <li><Link href="/photo-to-watercolor" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Watercolor</Link></li>
              <li><Link href="/instagram-grid-splitter" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Instagram Grid Splitter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium text-gray-400 dark:text-gray-400 uppercase tracking-wider mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Blog</Link></li>
              <li><Link href="/categories" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Categories</Link></li>
              <li><Link href="/privacy" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row justify-between gap-2 text-xs text-gray-400 dark:text-gray-400">
          <span>&copy; {new Date().getFullYear()} PhotoGrid.space</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-600 dark:hover:text-gray-200 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-600 dark:hover:text-gray-200 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
