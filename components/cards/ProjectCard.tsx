'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Project } from '@/lib/types';

export default function ProjectCard({ id, title, image, category, description }: Project) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all bg-gray-900"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="bg-primary px-4 py-1 rounded-full text-sm font-semibold inline-block">
            {category}
          </span>
        </div>

        {/* Title & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-200 mb-4">{description}</p>
          <Link
            href={`/projects/${id}`}
            className="inline-flex items-center gap-2 text-primary font-bold hover:opacity-70 transition-opacity"
          >
            View Details
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
