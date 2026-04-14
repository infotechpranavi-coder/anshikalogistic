'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  const ref = useRef(null);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const active = testimonials[current];

  return (
    <section
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-light-gray via-white to-light-gray"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="section-label">05 _ What Clients Say</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">Client Testimonials</h2>
            <p className="text-text-body text-lg mb-8">
              Real feedback from clients who trust us for time-sensitive, temperature-controlled logistics.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-primary text-white hover:opacity-90 transition-all flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active.id}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl rounded-2xl p-8 md:p-10"
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex gap-1">
                      {Array(active.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} size={18} className="fill-primary text-primary" />
                        ))}
                    </div>
                    <Quote className="text-primary/30 w-10 h-10" />
                  </div>

                  <p className="text-xl md:text-2xl text-text-dark leading-relaxed mb-8">"{active.quote}"</p>

                  <div className="flex items-center gap-4">
                    <Image
                      src={active.avatar}
                      alt={active.author}
                      width={64}
                      height={64}
                      className="rounded-full ring-2 ring-primary/20"
                    />
                    <div>
                      <p className="font-bold text-text-dark">{active.author}</p>
                      <p className="text-sm text-text-body">{active.designation}</p>
                      <p className="text-sm text-primary font-semibold">{active.company}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex gap-2 mt-6 justify-center">
              {testimonials.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setDirection(idx > current ? 1 : -1);
                    setCurrent(idx);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    idx === current ? 'bg-primary w-10' : 'bg-gray-300 hover:bg-gray-400 w-2'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
