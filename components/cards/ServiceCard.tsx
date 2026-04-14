import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps extends Service {
  variant?: 'default' | 'large';
}

export default function ServiceCard({
  id,
  title,
  description,
  features,
  image,
  icon: _icon,
  number,
  variant = 'default',
}: ServiceCardProps) {
  if (variant === 'large') {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
        {/* Image */}
        <div className="relative h-64 overflow-hidden bg-gray-300">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
            {number}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-text-dark mb-3">{title}</h3>
          <p className="text-text-body mb-6">{description}</p>

          {/* Features */}
          <div className="mb-8">
            <h4 className="font-bold text-text-dark mb-4">Key Features:</h4>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-text-body">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <Link
            href={`/services/${id}`}
            className="inline-flex items-center gap-2 text-primary font-bold hover:opacity-70 transition-opacity"
          >
            View Details
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <div className="text-primary flex-shrink-0">
          {/* Icon would go here if available */}
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
            {number}
          </div>
        </div>
        <h3 className="text-lg font-bold text-text-dark">{title}</h3>
      </div>
      <p className="text-text-body text-sm mb-4">{description}</p>
      <Link href={`/services/${id}`} className="text-primary font-semibold hover:opacity-70">
        View Details
      </Link>
    </div>
  );
}
