
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui/ProductCard';
import { products, categories } from '@/lib/data';
import { Product, ProductCategory, ProductType } from '@/types';
import FadeIn from '@/components/animations/FadeIn';

const Products = () => {
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [selectedType, setSelectedType] = useState<ProductType | 'all'>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Parse query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category') as ProductCategory | null;

    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('all');
    }
  }, [location.search]);

  // Filter products
  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(product => product.type === selectedType);
    }

    // Filter by price range
    filtered = filtered.filter(product => {
      const price = product.discountedPrice || product.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedType, priceRange]);

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);
  
  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedType('all');
    setPriceRange([0, 100]);
  };

  const getCategoryName = (slug: ProductCategory | 'all') => {
    if (slug === 'all') return 'All Products';
    const category = categories.find(cat => cat.slug === slug);
    return category ? category.name : 'All Products';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Page Header */}
        <div className="bg-earth-50 dark:bg-earth-950 py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {getCategoryName(selectedCategory)}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Explore our high-quality fertilizers and garden solutions for optimal plant growth and health.
              </p>
            </div>
          </div>
        </div>

        {/* Product Listing */}
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar (Desktop) */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                        selectedCategory === 'all'
                          ? 'bg-leaf-100 text-leaf-800 dark:bg-leaf-900 dark:text-leaf-200'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      All Products
                    </button>
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.slug)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                          selectedCategory === category.slug
                            ? 'bg-leaf-100 text-leaf-800 dark:bg-leaf-900 dark:text-leaf-200'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Product Type</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedType('all')}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                        selectedType === 'all'
                          ? 'bg-leaf-100 text-leaf-800 dark:bg-leaf-900 dark:text-leaf-200'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      All Types
                    </button>
                    {['organic', 'synthetic', 'hybrid'].map(type => (
                      <button
                        key={type}
                        onClick={() => setSelectedType(type as ProductType)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                          selectedType === type
                            ? 'bg-leaf-100 text-leaf-800 dark:bg-leaf-900 dark:text-leaf-200'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <Separator className="my-6" />

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={clearFilters}
                >
                  Clear Filters
                </Button>
              </div>
            </div>

            {/* Mobile Filter Button */}
            <div className="lg:hidden flex justify-between items-center mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Showing {filteredProducts.length} products
              </p>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                onClick={toggleFilter}
              >
                <SlidersHorizontal size={16} />
                Filters
              </Button>
            </div>

            {/* Mobile Filter Panel */}
            <div
              className={`lg:hidden fixed inset-0 z-50 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out ${
                isFilterOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="h-full flex flex-col overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
                  <h2 className="text-lg font-medium">Filters</h2>
                  <Button variant="ghost" size="icon" onClick={toggleFilter}>
                    <X size={24} />
                  </Button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Categories</h3>
                    <div className="space-y-2">
                      <button
                        onClick={() => setSelectedCategory('all')}
                        className={`w-full text-left px-3 py-2 rounded-md ${
                          selectedCategory === 'all'
                            ? 'bg-leaf-100 text-leaf-800 dark:bg-leaf-900 dark:text-leaf-200'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        All Products
                      </button>
                      {categories.map(category => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.slug)}
                          className={`w-full text-left px-3 py-2 rounded-md ${
                            selectedCategory === category.slug
                              ? 'bg-leaf-100 text-leaf-800 dark:bg-leaf-900 dark:text-leaf-200'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-3">Product Type</h3>
                    <div className="space-y-2">
                      <button
                        onClick={() => setSelectedType('all')}
                        className={`w-full text-left px-3 py-2 rounded-md ${
                          selectedType === 'all'
                            ? 'bg-leaf-100 text-leaf-800 dark:bg-leaf-900 dark:text-leaf-200'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        All Types
                      </button>
                      {['organic', 'synthetic', 'hybrid'].map(type => (
                        <button
                          key={type}
                          onClick={() => setSelectedType(type as ProductType)}
                          className={`w-full text-left px-3 py-2 rounded-md ${
                            selectedType === type
                              ? 'bg-leaf-100 text-leaf-800 dark:bg-leaf-900 dark:text-leaf-200'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`}
                        >
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t dark:border-gray-800">
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={clearFilters}
                    >
                      Clear
                    </Button>
                    <Button 
                      className="flex-1 bg-leaf-600 hover:bg-leaf-700"
                      onClick={toggleFilter}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="py-12 text-center">
                  <h3 className="text-xl font-medium mb-4">No products found</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Try changing your filter settings or browse all our products.
                  </p>
                  <Button
                    onClick={clearFilters}
                    className="bg-leaf-600 hover:bg-leaf-700"
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <>
                  <div className="hidden lg:flex justify-between items-center mb-6">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Showing {filteredProducts.length} products
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Sort by:
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1"
                      >
                        <span>Newest</span>
                        <ChevronDown size={16} />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product, index) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        index={index}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
