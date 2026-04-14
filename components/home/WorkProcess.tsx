'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Package, Truck, BarChart3, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Package,
    number: '01',
    title: 'Order Placement',
    description: 'Submit your shipment details and requirements',
  },
  {
    icon: Truck,
    number: '02',
    title: 'Pickup & Loading',
    description: 'We pick up your cargo and load safely',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Real-time Tracking',
    description: 'Monitor your shipment throughout transit',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Safe Delivery',
    description: 'Deliver your goods in perfect condition',
  },
];

const stats = [
  { label: 'On-time Delivery Rate', value: '99.8%' },
  { label: 'Temperature Accuracy', value: '±0.5°C' },
];

export default function WorkProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-light-gray" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="mb-12">
          <p className="section-label">03 _ Work Process</p>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-16">
          How We Deliver Excellence
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-lg p-8 h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mb-4">
                  <step.icon size={32} />
                </div>

                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-text-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-text-body">{step.description}</p>
              </div>

              {/* Connecting Line (hidden on last item) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-12 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: idx === 0 ? -40 : 40 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg p-8 flex items-center justify-between border-l-4 border-primary"
            >
              <div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
