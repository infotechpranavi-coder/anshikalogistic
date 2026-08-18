import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import WorldMapOverlay from '@/components/WorldMapOverlay';

interface PageHeaderProps {
  title: string;
  breadcrumbs?: Array<{
    label: string;
    href: string;
  }>;
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  const defaultBreadcrumbs = breadcrumbs || [
    { label: 'Home', href: '/' },
    { label: title, href: '#' },
  ];

  return (
    <div className="relative overflow-hidden bg-dark-navy">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-primary/15 blur-3xl" />
      <WorldMapOverlay className="opacity-[0.18]" showMarkers />
      <div className="section-container relative py-8 md:py-16">
        <h1 className="mb-3 break-words text-2xl font-semibold tracking-tight text-white sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-1.5 text-xs text-white/60 sm:gap-2 sm:text-sm">
          {defaultBreadcrumbs.map((crumb, index) => (
            <div key={`${crumb.label}-${index}`} className="flex items-center gap-2">
              {index > 0 && <ChevronRight size={14} />}
              {crumb.href === '#' ? (
                <span className="font-semibold text-primary">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="transition-colors hover:text-white">
                  {crumb.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
