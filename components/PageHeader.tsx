import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

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
    <div className="bg-light-gray py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
          {title}
        </h1>
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-gray-600">
          {defaultBreadcrumbs.map((crumb, index) => (
            <div key={crumb.label} className="flex items-center gap-2">
              {index > 0 && <ChevronRight size={16} />}
              {crumb.href === '#' ? (
                <span className="text-primary font-semibold">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="hover:text-primary transition-colors">
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
