'use client';

import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from './motionVariants';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  light = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`mb-10 md:mb-14 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      <p className={`section-label ${light ? 'text-primary' : ''}`}>{label}</p>
      <h2
        className={`max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.65rem] lg:leading-[1.15] ${
          light ? 'text-white' : 'text-text-dark'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${
            light ? 'text-white/70' : 'text-text-body'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
