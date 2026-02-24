import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const toolLinks = [
  { href: "/photo-to-grid", label: "Grid" },
  { href: "/photo-to-lineart", label: "Line Art" },
  { href: "/photo-to-sketch", label: "Sketch" },
  { href: "/photo-to-coloring-page", label: "Coloring Page" },
  { href: "/photo-to-paint-by-numbers", label: "Paint by Numbers" },
  { href: "/photo-to-pixel-art", label: "Pixel Art" },
  { href: "/photo-to-watercolor", label: "Watercolor" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/">
          <span className="flex items-center gap-2 text-lg font-semibold tracking-tight text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" className="flex-shrink-0">
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
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {toolLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors">
                {link.label}
              </a>
            </Link>
          ))}
          <Link href="/blog">
            <a className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors">Blog</a>
          </Link>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-500 hover:text-gray-900"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {toolLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="py-2 px-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </a>
              </Link>
            ))}
            <div className="border-t border-gray-100 my-1" />
            <Link href="/blog">
              <a className="py-2 px-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>Blog</a>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
