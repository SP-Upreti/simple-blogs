"use client"

import { Search, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = usePathname();

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image height={100} width={150} alt='logo blogs' src='/logo.svg' className='size-28' />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/')
                  ? 'text-purple-600'
                  : 'text-gray-600 hover:text-purple-600'
                  }`}
              >
                Home
              </Link>
              <Link
                href="/articles"
                className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/articles')
                  ? 'text-purple-600'
                  : 'text-gray-600 hover:text-purple-600'
                  }`}
              >
                Articles
              </Link>
              <Link href="/categories"
                className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/categories')
                  ? 'text-purple-600'
                  : 'text-gray-600 hover:text-purple-600'
                  }`}>
                Categories
              </Link>
              <Link href="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/about')
                  ? 'text-purple-600'
                  : 'text-gray-600 hover:text-purple-600'
                  }`}>
                About
              </Link>
              <Link
                href="/contact"
                className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/contact')
                  ? 'text-purple-600'
                  : 'text-gray-600 hover:text-purple-600'
                  }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Search and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                href="/"
                className={`block px-3 py-2 text-base font-medium ${isActive('/') ? 'text-purple-600' : 'text-gray-600'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/articles"
                className={`block px-3 py-2 text-base font-medium ${isActive('/articles') ? 'text-purple-600' : 'text-gray-600'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Articles
              </Link>
              <a href="#" className="text-gray-600 block px-3 py-2 text-base font-medium">Categories</a>
              <a href="#" className="text-gray-600 block px-3 py-2 text-base font-medium">About</a>
              <Link
                href="/contact"
                className={`block px-3 py-2 text-base font-medium ${isActive('/contact') ? 'text-purple-600' : 'text-gray-600'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
