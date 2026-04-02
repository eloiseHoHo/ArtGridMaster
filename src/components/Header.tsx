"use client";

import Link from "next/link";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const gridLinks = [
  { href: "/photo-grid-collage", label: "Collage", badge: "Popular" },
  { href: "/instagram-grid-splitter", label: "Splitter" },
  { href: "/photo-to-grid", label: "Grid Overlay" },
];

const artLinks = [
  { href: "/photo-to-lineart", label: "Line Art" },
  { href: "/photo-to-sketch", label: "Sketch" },
  { href: "/photo-to-coloring-page", label: "Coloring Page" },
  { href: "/photo-to-paint-by-numbers", label: "Paint by Numbers" },
  { href: "/photo-to-pixel-art", label: "Pixel Art" },
  { href: "/photo-to-watercolor", label: "Watercolor" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [artDropdownOpen, setArtDropdownOpen] = useState(false);
  const [mobileArtOpen, setMobileArtOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" className="flex-shrink-0">
            <rect width="32" height="32" rx="6" fill="#7C3AED"/>
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
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {gridLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-2.5 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center"
            >
              {link.label}
              {"badge" in link && link.badge && (
                <span className="ml-1 w-1.5 h-1.5 rounded-full bg-violet-500 inline-block" />
              )}
            </Link>
          ))}

          <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 mx-1" />

          <div
            className="relative"
            onMouseEnter={() => setArtDropdownOpen(true)}
            onMouseLeave={() => setArtDropdownOpen(false)}
          >
            <button className="px-2.5 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-1">
              Art Tools
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${artDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {artDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-3 min-w-[280px]">
                <div className="grid grid-cols-2 gap-1">
                  {artLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className="px-2.5 py-1.5 text-sm text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-1">
          <button
            onClick={toggleDarkMode}
            className="p-2 text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            <p className="px-3 pt-1 pb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
              Grid Tools
            </p>
            {gridLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 px-3 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
                {"badge" in link && link.badge && (
                  <span className="ml-1 w-1.5 h-1.5 rounded-full bg-violet-500 inline-block" />
                )}
              </Link>
            ))}

            <button
              onClick={() => setMobileArtOpen(!mobileArtOpen)}
              className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-wide text-gray-400 flex items-center gap-1 w-full text-left"
            >
              Art Tools
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mobileArtOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileArtOpen && (
              <div className="flex flex-col gap-1">
                {artLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-2 px-3 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <div className="border-t border-gray-100 dark:border-gray-800 my-2" />
            <Link
              href="/blog"
              className="py-2 px-3 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
