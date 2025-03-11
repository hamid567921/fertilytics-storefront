
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { categories } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'contact@fertilytics.com', href: 'mailto:contact@fertilytics.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: '123 Agriculture Way, Farmington, CA 94043', href: '#' },
  ];

  return (
    <footer className="bg-earth-50 dark:bg-earth-950">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-serif font-bold text-leaf-700 dark:text-leaf-400">
                Fertilytics
              </h2>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Providing high-quality fertilizers and garden solutions for farmers and home gardeners since 1995.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="bg-white dark:bg-gray-800 p-2 rounded-full text-leaf-600 dark:text-leaf-400 hover:text-leaf-700 dark:hover:text-leaf-300 transition-colors"
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-leaf-600 dark:hover:text-leaf-400 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-leaf-600 dark:hover:text-leaf-400 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 dark:text-gray-400 hover:text-leaf-600 dark:hover:text-leaf-400 text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-leaf-600 dark:hover:text-leaf-400 text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-leaf-600 dark:hover:text-leaf-400 text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    to={`/products?category=${category.slug}`} 
                    className="text-gray-600 dark:text-gray-400 hover:text-leaf-600 dark:hover:text-leaf-400 text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <item.icon size={16} className="text-leaf-600 dark:text-leaf-400" />
                  </div>
                  <a href={item.href} className="text-sm text-gray-600 dark:text-gray-400 hover:text-leaf-600 dark:hover:text-leaf-400">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} Fertilytics. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-leaf-600 dark:hover:text-leaf-400">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-leaf-600 dark:hover:text-leaf-400">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
