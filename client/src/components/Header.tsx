import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { UserIcon, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <h1 className="text-xl font-bold text-gray-900">GridArt Studio</h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6 mr-4">
            <Link href="/categories">
              <a className="text-gray-600 hover:text-primary transition-colors">Categories</a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-600 hover:text-primary transition-colors">Blog</a>
            </Link>
            <Link href="/transform/new">
              <a className="text-gray-600 hover:text-primary transition-colors">Transform</a>
            </Link>
          </nav>
          <Button className="px-4 py-2 rounded-lg flex items-center">
            <UserIcon className="mr-2 h-4 w-4" />
            <span>Try Pro Version</span>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex flex-col space-y-3 py-3">
              <Link href="/categories">
                <a className="text-gray-600 hover:text-primary transition-colors py-2">Categories</a>
              </Link>
              <Link href="/blog">
                <a className="text-gray-600 hover:text-primary transition-colors py-2">Blog</a>
              </Link>
              <Link href="/transform/new">
                <a className="text-gray-600 hover:text-primary transition-colors py-2">Transform</a>
              </Link>
              <Button className="mt-2 w-full justify-center">
                <UserIcon className="mr-2 h-4 w-4" />
                Try Pro Version
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
