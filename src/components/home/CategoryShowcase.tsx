
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/lib/data';
import FadeIn from '@/components/animations/FadeIn';

const CategoryShowcase = () => {
  return (
    <section className="py-16 md:py-24 bg-earth-50 dark:bg-earth-950">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Discover our comprehensive range of fertilizers and garden solutions for all your agricultural needs.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <FadeIn key={category.id} delay={index * 100 + 200}>
              <Link
                to={`/products?category=${category.slug}`}
                className="group block relative overflow-hidden rounded-xl h-80 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/80 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-leaf-400 font-medium group-hover:text-leaf-300 transition-colors">
                    <span>View products</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
