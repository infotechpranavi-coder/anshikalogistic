'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { fleetProducts } from '@/lib/data';
import { ChevronRight, Zap, Ruler, Thermometer } from 'lucide-react';

export default function FleetProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-light-gray" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label text-primary font-bold text-xs tracking-widest uppercase mb-4">
            04 _ Our Fleet
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-4">
            State-of-the-Art Reefer Fleet
          </h2>
          <p className="text-text-body text-lg max-w-2xl leading-relaxed">
            Discover our premium fleet of temperature-controlled containers designed for optimal performance and reliability
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {fleetProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group h-full"
            >
              <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col border border-gray-100">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-light-gray" style={{ height: '224px' }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider"
                  >
                    {product.category}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-6 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* Specs Grid */}
                  <div className="space-y-4 mb-8 flex-grow">
                    {/* Capacity */}
                    <div className="flex items-start gap-3 pb-4 border-b border-gray-200 group-hover:border-primary/20 transition-colors">
                      <div className="flex-shrink-0 mt-1">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Capacity</p>
                        <p className="text-lg font-bold text-text-dark">{product.specs.capacity}</p>
                      </div>
                    </div>

                    {/* Dimensions */}
                    <div className="flex items-start gap-3 pb-4 border-b border-gray-200 group-hover:border-primary/20 transition-colors">
                      <div className="flex-shrink-0 mt-1">
                        <Ruler className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Dimensions</p>
                        <p className="text-sm font-bold text-text-dark">{product.specs.dimensions}</p>
                      </div>
                    </div>

                    {/* Temperature */}
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Thermometer className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Temperature Range</p>
                        <p className="text-sm font-bold text-text-dark">{product.specs.temperature}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/contact"
                      className="w-full btn-primary text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 group/btn"
                    >
                      Enquire Now
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 20 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-text-body mb-6">Need a custom solution? We offer specialized containers for unique requirements.</p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
          >
            View All Solutions
            <ChevronRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
