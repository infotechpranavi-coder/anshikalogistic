'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Zap } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const stats = [
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Zap, label: 'Shipments Completed', value: '10k+' },
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Label */}
        <div className="mb-12">
          <p className="section-label">01 _ More About Us</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 md:h-[500px]"
          >
            <div className="absolute top-0 left-0 w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/images/about-1.jpg"
                alt="Cold Logistics"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/images/about-2.jpg"
                alt="Fleet Management"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-32 right-0 md:top-40 md:right-0 bg-primary text-white px-6 py-3 rounded-lg shadow-lg"
            >
              <p className="font-bold">15+ Years</p>
              <p className="text-sm">Industry Experience</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
              Excellence in Cold Logistics
            </h2>
            <p className="text-lg text-text-body mb-8 leading-relaxed">
              With over 15 years of experience in the cold logistics industry, Anshika Cool Container Services has established itself as a trusted partner for businesses requiring reliable refrigerated transport and storage solutions. Our commitment to quality and customer satisfaction drives everything we do.
            </p>

            {/* Stats */}
            <div className="space-y-4 mb-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="text-primary flex-shrink-0">
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-text-dark text-lg">{stat.value}</p>
                    <p className="text-text-body text-sm">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <Link href="/services" className="btn-primary">Explore Services</Link>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
