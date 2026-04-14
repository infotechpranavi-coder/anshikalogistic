import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import CTABanner from '@/components/home/CTABanner';
import { services } from '@/lib/data';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ id: service.id }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { id } = await params;
  const service = services.find((item) => item.id === id);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.id !== service.id).slice(0, 3);

  return (
    <>
      <PageHeader
        title={service.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title, href: '#' },
        ]}
      />

      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative h-80 md:h-[420px] rounded-xl overflow-hidden bg-gray-300">
              <Image src={service.image} alt={service.title} fill className="object-cover" priority />
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-sm font-bold text-primary mb-3">Service {service.number}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">{service.title}</h2>
              <p className="text-text-body text-lg leading-relaxed mb-8">{service.description}</p>

              <h3 className="text-xl font-bold text-text-dark mb-4">What You Get</h3>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-text-body">
                    <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-light-gray rounded-xl p-6">
              <h3 className="text-xl font-bold text-text-dark mb-4">Need This Service?</h3>
              <p className="text-text-body text-sm mb-5">
                Talk to our team to plan your temperature-controlled shipment.
              </p>
              <Link href="/contact" className="btn-primary block text-center">
                Get Free Quote
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-text-dark mb-4">Related Services</h3>
              <div className="space-y-4">
                {relatedServices.map((item) => (
                  <Link
                    key={item.id}
                    href={`/services/${item.id}`}
                    className="flex items-center justify-between gap-2 text-text-dark hover:text-primary transition-colors"
                  >
                    <span className="font-semibold">{item.title}</span>
                    <ArrowRight size={16} />
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-bold hover:opacity-70 transition-opacity"
            >
              <ArrowLeft size={18} />
              Back to Services
            </Link>
          </aside>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
