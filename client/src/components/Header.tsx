import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

const toolLinks = [
  { href: "/photo-to-grid", label: "Photo to Grid" },
  { href: "/photo-to-lineart", label: "Photo to Line Art" },
  { href: "/photo-to-sketch", label: "Photo to Sketch" },
  { href: "/photo-to-coloring-page", label: "Photo to Coloring Page" },
  { href: "/photo-to-paint-by-numbers", label: "Paint by Numbers" },
  { href: "/photo-to-pixel-art", label: "Photo to Pixel Art" },
  { href: "/photo-to-watercolor", label: "Watercolor & Oil Painting" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-2">
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
            <h1 className="text-xl font-bold text-gray-900">PhotoGrid.space</h1>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6 mr-4">
            <div className="relative" onMouseEnter={() => setToolsOpen(true)} onMouseLeave={() => setToolsOpen(false)}>
              <button className="text-gray-600 hover:text-primary transition-colors flex items-center gap-1">
                Tools <ChevronDown className="h-4 w-4" />
              </button>
              {toolsOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 py-2 w-56 z-50">
                  {toolLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-primary transition-colors">
                        {link.label}
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/blog">
              <a className="text-gray-600 hover:text-primary transition-colors">Blog</a>
            </Link>
          </nav>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex flex-col space-y-1 py-3">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-1">Tools</p>
              {toolLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a className="text-gray-600 hover:text-primary transition-colors py-2 px-2 rounded hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                    {link.label}
                  </a>
                </Link>
              ))}
              <div className="border-t border-gray-100 my-2"></div>
              <Link href="/blog">
                <a className="text-gray-600 hover:text-primary transition-colors py-2 px-2" onClick={() => setMobileMenuOpen(false)}>Blog</a>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
