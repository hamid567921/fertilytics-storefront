
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 md:py-32">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">About Fertilytics</h1>
            
            <div className="prose prose-lg dark:prose-invert">
              <p className="lead text-xl text-gray-600 dark:text-gray-400 mb-8">
                Founded in 1995, Fertilytics has been at the forefront of agricultural innovation, 
                providing premium fertilizers and garden solutions to farmers and home gardeners alike.
              </p>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p>
                  At Fertilytics, our mission is to enhance soil health and crop productivity through 
                  innovative and sustainable fertilizer solutions. We are committed to empowering 
                  farmers and gardeners with the knowledge and products they need to grow healthier, 
                  more abundant crops while preserving our environment for future generations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-earth-50 dark:bg-earth-900 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-leaf-700 dark:text-leaf-400">Quality Commitment</h3>
                  <p>
                    Every product we offer undergoes rigorous testing to ensure it meets our high 
                    standards for effectiveness, safety, and sustainability. Our team of agronomists 
                    and soil scientists works tirelessly to develop formulations that deliver results.
                  </p>
                </div>
                
                <div className="bg-earth-50 dark:bg-earth-900 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-leaf-700 dark:text-leaf-400">Innovation Focus</h3>
                  <p>
                    We constantly research and develop new solutions to address the evolving needs 
                    of agriculture. By staying at the cutting edge of soil science, we help our 
                    customers stay ahead with products that maximize yield while minimizing 
                    environmental impact.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p>
                Fertilytics began as a small family-owned business with a passion for agriculture. 
                Over the decades, we've grown into a trusted name in the industry, serving customers 
                across the country. Despite our growth, we maintain the same commitment to quality 
                and personal service that defined us from the beginning.
              </p>
              <p>
                Today, we offer a comprehensive range of fertilizers, from traditional NPK formulations 
                to specialized micronutrient blends and organic options. Our product lineup continues 
                to evolve as we incorporate the latest research and respond to the changing needs of 
                modern agriculture.
              </p>
            </div>
          </div>
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
};

export default About;
