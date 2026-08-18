import Image from 'next/image';
import Link from 'next/link';
import { ServiceCategory } from '@/lib/types';
import { ArrowUpRight } from 'lucide-react';

interface IndustryCardProps extends ServiceCategory {
  number: string;
}

export default function IndustryCard({
  id,
  title,
  description,
  features,
  image,
  number,
}: IndustryCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_32px_rgba(26,26,46,0.07)] ring-1 ring-black/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(26,26,46,0.1)]">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold tracking-wider text-white">
          {number}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-semibold text-text-dark">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-text-body">{description}</p>
        <ul className="mb-5 space-y-1.5">
          {features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-text-body">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
        <Link
          href={`/industries/${id}`}
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
        >
          View Details
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}
