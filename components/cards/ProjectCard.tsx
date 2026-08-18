'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/lib/types';

export default function ProjectCard({ id, title, image, category, description }: Project) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_32px_rgba(26,26,46,0.07)] ring-1 ring-black/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(26,26,46,0.1)]">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
          {category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold text-text-dark">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-text-body">{description}</p>
        <Link
          href={`/projects/${id}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
        >
          View Details
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}
