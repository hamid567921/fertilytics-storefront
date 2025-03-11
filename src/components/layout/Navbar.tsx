
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { categories } from '@/lib/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProductsDropdown = () => setIsProductsDropdownOpen(!isProductsDropdownOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products', hasDropdown: true },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4',
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-leaf-700 dark:text-leaf-400">
              Fertilytics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="relative group">
                    <button
                      onClick={toggleProductsDropdown}
                      className={cn(
                        'flex items-center gap-1 px-1 py-2 text-sm font-medium transition-colors',
                        location.pathname === link.path
                          ? 'text-leaf-700 dark:text-leaf-400'
                          : 'text-gray-700 hover:text-leaf-600 dark:text-gray-300 dark:hover:text-leaf-400'
                      )}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div
                      className={cn(
                        'absolute top-full left-0 min-w-[200px] bg-white dark:bg-gray-900 shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out transform',
                        isProductsDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                      )}
                    >
                      <div className="p-2">
                        <Link
                          to="/products"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded-md"
                        >
                          All Products
                        </Link>
                        {categories.map((category) => (
                          <Link
                            key={category.id}
                            to={`/products?category=${category.slug}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded-md"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'px-1 py-2 text-sm font-medium transition-colors',
                    location.pathname === link.path
                      ? 'text-leaf-700 dark:text-leaf-400'
                      : 'text-gray-700 hover:text-leaf-600 dark:text-gray-300 dark:hover:text-leaf-400'
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="outline" size="icon" className="rounded-full relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-leaf-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="default" className="bg-leaf-600 hover:bg-leaf-700">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Link to="/cart">
              <Button variant="outline" size="icon" className="rounded-full relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-leaf-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 dark:text-gray-300"
              onClick={toggleMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white dark:bg-gray-900 z-40 transition-transform duration-300 ease-in-out transform md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="container mx-auto px-4 py-20">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="space-y-3">
                    <button
                      onClick={toggleProductsDropdown}
                      className="flex items-center justify-between w-full text-lg font-medium"
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          'h-5 w-5 transition-transform',
                          isProductsDropdownOpen && 'rotate-180'
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        'space-y-2 pl-4 transition-all duration-300',
                        isProductsDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                      )}
                    >
                      <Link
                        to="/products"
                        className="block py-2 text-gray-700 dark:text-gray-300"
                      >
                        All Products
                      </Link>
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          to={`/products?category=${category.slug}`}
                          className="block py-2 text-gray-700 dark:text-gray-300"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-medium"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 border rounded-md bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Link to="/login">
              <Button variant="default" className="w-full bg-leaf-600 hover:bg-leaf-700">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
