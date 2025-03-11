
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ui/ProductCard';
import { getFeaturedProducts } from '@/lib/data';
import FadeIn from '@/components/animations/FadeIn';

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <FadeIn>
            <div className="mb-4 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                Handpicked selection of our top-selling fertilizers and garden solutions for optimal results.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <Button variant="outline" className="group" asChild>
              <Link to="/products">
                View all products
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product}
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
