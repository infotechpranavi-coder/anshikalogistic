'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { services } from '@/lib/data';

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [scroll, setScroll] = useState(0);

  const scrollAmount = 350;
  const handleScroll = (direction: 'left' | 'right') => {
    const newScroll = direction === 'left' ? scroll - scrollAmount : scroll + scrollAmount;
    setScroll(newScroll);
  };

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-navy" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="mb-12">
          <p className="section-label">02 _ What We Offer</p>
        </div>

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl">
            Comprehensive Cold Logistics Services
          </h2>
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => handleScroll('left')}
              className="w-12 h-12 rounded-full bg-primary hover:opacity-80 text-white flex items-center justify-center transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-12 h-12 rounded-full bg-primary hover:opacity-80 text-white flex items-center justify-center transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Services Carousel */}
        <div className="relative overflow-x-auto scrollbar-hide">
          <motion.div
            className="flex gap-6 pb-4"
            animate={{ x: -scroll }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex-shrink-0 w-80 bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    {service.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary font-bold">-</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex mt-4 text-primary font-semibold hover:opacity-70 transition-opacity"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex gap-4 mt-6 justify-center">
          <button
            onClick={() => handleScroll('left')}
            className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
