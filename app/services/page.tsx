import PageHeader from '@/components/PageHeader';
import ServiceCard from '@/components/cards/ServiceCard';
import PageSidebar from '@/components/listing/PageSidebar';
import CTABanner from '@/components/home/CTABanner';
import { services } from '@/lib/data';

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Our Services" />

      <section className="section-padding bg-surface-muted">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {services.map((service) => (
                  <ServiceCard key={service.id} {...service} variant="large" />
                ))}
              </div>
            </div>

            <PageSidebar />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
