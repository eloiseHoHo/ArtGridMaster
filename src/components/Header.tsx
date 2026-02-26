"use client";

import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const toolLinks = [
  { href: "/photo-to-grid", label: "Grid" },
  { href: "/photo-to-lineart", label: "Line Art" },
  { href: "/photo-to-sketch", label: "Sketch" },
  { href: "/photo-to-coloring-page", label: "Coloring Page" },
  { href: "/photo-to-paint-by-numbers", label: "Paint by Numbers" },
  { href: "/photo-to-pixel-art", label: "Pixel Art" },
  { href: "/photo-to-watercolor", label: "Watercolor" },
  { href: "/instagram-grid-splitter", label: "Split" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

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
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {toolLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/blog"
            className="px-3 py-1.5 text-sm text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
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
            {toolLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 px-3 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-100 dark:border-gray-800 my-1" />
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
