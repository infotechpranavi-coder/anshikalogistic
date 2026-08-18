'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/data';

export default function BlogPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const displayPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-light-gray" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="mb-12">
          <p className="section-label">Blog & News</p>
        </div>

        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark">
            Latest News & Insights
          </h2>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 text-primary font-bold hover:opacity-70 transition-opacity"
          >
            View All Posts
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {displayPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-300">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {post.author.name}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-text-dark mb-3 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-text-body text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* CTA */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-70 transition-opacity"
                >
                  View Details
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button (Mobile) */}
        <div className="md:hidden text-center">
          <Link href="/blog" className="btn-primary inline-block">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
