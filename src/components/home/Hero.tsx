
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/animations/FadeIn';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000&auto=format&fit=crop"
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-24">
        <div className="max-w-3xl">
          <FadeIn delay={100}>
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-leaf-100 text-leaf-800 dark:bg-leaf-900 dark:text-leaf-300 rounded-full">
              Trusted by farmers worldwide
            </span>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nurture Your Soil, <br />
              <span className="text-leaf-400">Grow Your Success</span>
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Premium fertilizers and garden solutions for optimal plant growth, higher yields, and healthier crops.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-leaf-600 hover:bg-leaf-700 text-white"
                asChild
              >
                <Link to="/products">
                  Explore Products
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
