'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    number: '01',
    title: 'Real-time Tracking',
    description: 'GPS-enabled containers with live tracking',
    progress: 95,
  },
  {
    number: '02',
    title: 'Temperature Control',
    description: 'Precise temperature management systems',
    progress: 98,
  },
  {
    number: '03',
    title: 'Certified Partners',
    description: 'ISO certified logistics providers',
    progress: 100,
  },
];

export default function FeatureCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div className="relative -mt-20 mb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ref" ref={ref}>
        {features.map((feature, idx) => (
          <motion.div
            key={feature.number}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="text-5xl font-bold text-primary mb-4">
              {feature.number}
            </div>
            <h3 className="text-xl font-bold text-text-dark mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-6">{feature.description}</p>
            
            {/* Progress Bar */}
            <div className="relative h-2 bg-light-gray rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${feature.progress}%` } : { width: 0 }}
                transition={{ duration: 1.5, delay: idx * 0.15 + 0.3 }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-3">{feature.progress}% Efficiency</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
