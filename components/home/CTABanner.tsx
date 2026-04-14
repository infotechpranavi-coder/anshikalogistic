'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Ship Your Cold Cargo?
          </h2>
          <p className="text-lg text-white/90">
            Get a free quote from our logistics experts today. We handle temperature-sensitive shipments with care and precision.
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-primary transition-all whitespace-nowrap"
          >
            Get Free Quote
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
