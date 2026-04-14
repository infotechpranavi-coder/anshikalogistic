'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: 'Refrigerated Container Transport',
    description: 'Reliable cold logistics solutions for temperature-sensitive cargo',
    image: '/images/hero-1.jpg',
    cta: 'Get Free Quote',
    href: '/contact',
  },
  {
    id: 2,
    title: 'Pharmaceutical Logistics',
    description: 'Certified and compliant transport for sensitive pharmaceutical products',
    image: '/images/hero-2.jpg',
    cta: 'View Services',
    href: '/services',
  },
  {
    id: 3,
    title: 'Cold Storage Solutions',
    description: 'State-of-the-art warehousing for perishable goods and food products',
    image: '/images/hero-3.jpg',
    cta: 'Explore Services',
    href: '/services',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-dark-overlay" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: index === current ? 1 : 0, y: index === current ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-xl px-6 py-8 md:px-10 md:py-12"
              >
                <p className="text-yellow-300 font-bold text-sm md:text-lg mb-4 uppercase tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  Cold Logistics Excellence
                </p>
                <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                  {slide.description}
                </p>
                <Link href={slide.href} className="btn-primary text-lg px-8 py-4 inline-block">
                  {slide.cta}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
        <button
          onClick={prev}
          className="pointer-events-auto w-14 h-14 rounded-full bg-white/20 hover:bg-primary transition-colors flex items-center justify-center backdrop-blur-sm"
        >
          <ChevronLeft size={28} className="text-white" />
        </button>
        <button
          onClick={next}
          className="pointer-events-auto w-14 h-14 rounded-full bg-white/20 hover:bg-primary transition-colors flex items-center justify-center backdrop-blur-sm"
        >
          <ChevronRight size={28} className="text-white" />
        </button>
      </div>

      {/* Slide Counter & Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-6 md:px-12">
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <motion.div
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 cursor-pointer rounded-full transition-all ${
                index === current ? 'bg-primary w-12' : 'bg-white/50 w-2'
              }`}
            />
          ))}
        </div>
        <p className="text-white font-bold text-lg">
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </p>
      </div>
    </div>
  );
}
