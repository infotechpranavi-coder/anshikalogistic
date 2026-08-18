'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import BlogCard from '@/components/cards/BlogCard';
import CTABanner from '@/components/home/CTABanner';
import { blogPosts } from '@/lib/data';
import { Search } from 'lucide-react';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(blogPosts.map(p => p.category))];

  const filtered = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageHeader title="Blog & News" />

      <section className="section-padding bg-surface-muted">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Search */}
              <div className="relative mb-8">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search size={20} className="absolute left-4 top-3 text-gray-400" />
              </div>

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {filtered.map((post) => (
                  <BlogCard key={post.id} {...post} />
                ))}
              </div>

              {/* Empty State */}
              {filtered.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-lg font-bold text-text-dark mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-4 py-2 rounded transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary text-white'
                          : 'text-gray-700 hover:bg-light-gray'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-light-gray rounded-lg p-6">
                <h3 className="text-lg font-bold text-text-dark mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <a
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group"
                    >
                      <p className="font-semibold text-text-dark group-hover:text-primary transition-colors text-sm line-clamp-2">
                        {post.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-light-gray rounded-lg p-6">
                <h3 className="text-lg font-bold text-text-dark mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Cold Chain', 'Technology', 'Logistics', 'Best Practices', 'Compliance'].map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs font-semibold text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
