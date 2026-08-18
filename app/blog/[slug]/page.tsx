import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { Calendar, User, ArrowLeft } from 'lucide-react';

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-64 w-full overflow-hidden bg-gray-300 md:h-[500px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-end p-5 text-white sm:p-8 md:p-12">
          <div className="mb-4">
            <span className="bg-primary px-4 py-1 rounded-full text-sm font-semibold inline-block">
              {post.category}
            </span>
          </div>
          <h1 className="mb-4 text-2xl font-bold sm:text-4xl md:text-5xl">{post.title}</h1>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={18} />
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <User size={18} />
                  <span>{post.author.name}</span>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none mb-12 text-text-body">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Tags */}
              <div className="mb-8 pb-8 border-t border-b border-gray-200">
                <p className="font-bold text-text-dark mb-4">Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-light-gray text-text-dark rounded-full text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="bg-light-gray rounded-lg p-8 mb-12">
                <div className="flex items-center gap-6">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-text-dark mb-2">{post.author.name}</h3>
                    <p className="text-text-body text-sm">
                      Expert in cold logistics and supply chain management with years of industry experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Back Link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary font-bold hover:opacity-70 transition-opacity"
              >
                <ArrowLeft size={18} />
                Back to Blog
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Posts */}
              <div className="bg-light-gray rounded-lg p-6">
                <h3 className="font-bold text-text-dark mb-6">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relPost) => (
                    <Link
                      key={relPost.id}
                      href={`/blog/${relPost.slug}`}
                      className="group block"
                    >
                      <p className="font-semibold text-text-dark group-hover:text-primary transition-colors line-clamp-2">
                        {relPost.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        {new Date(relPost.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-primary text-white rounded-lg p-8">
                <h3 className="font-bold mb-4">Need Cold Logistics Services?</h3>
                <p className="text-sm mb-6">
                  Contact our team for reliable refrigerated container services.
                </p>
                <Link href="/contact" className="inline-block btn-outline text-primary bg-white hover:bg-gray-100">
                  Get a Quote
                </Link>
              </div>

              {/* Share */}
              <div className="bg-light-gray rounded-lg p-6">
                <h3 className="font-bold text-text-dark mb-4">Share This Article</h3>
                <div className="space-y-2">
                  <button className="w-full text-center py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors text-sm font-semibold">
                    Share on LinkedIn
                  </button>
                  <button className="w-full text-center py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors text-sm font-semibold">
                    Share on Twitter
                  </button>
                  <button className="w-full text-center py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors text-sm font-semibold">
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
