'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/lib/types';

export default function BlogCard({ 
  slug,
  title, 
  excerpt, 
  image, 
  date, 
  author, 
  category 
}: BlogPost) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-300">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 flex-wrap">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </div>
          <div className="flex items-center gap-1">
            <User size={14} />
            {author.name}
          </div>
        </div>

        {/* Title */}
        <Link href={`/blog/${slug}`}>
          <h3 className="text-lg font-bold text-text-dark mb-3 hover:text-primary transition-colors line-clamp-2 cursor-pointer">
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-text-body text-sm mb-4 line-clamp-2">
          {excerpt}
        </p>

        {/* CTA */}
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-70 transition-opacity"
        >
          View Details
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}
