'use client';

import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ServiceCard from '@/components/cards/ServiceCard';
import CTABanner from '@/components/home/CTABanner';
import { services } from '@/lib/data';
import { Download, Phone, Mail } from 'lucide-react';

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Our Services" />

      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service) => (
                  <ServiceCard key={service.id} {...service} variant="large" />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="bg-light-gray rounded-lg p-8">
                <h3 className="text-xl font-bold text-text-dark mb-6">Need Help?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Call Us</p>
                      <a href="tel:+919876543210" className="text-primary font-bold">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Email Us</p>
                      <a href="mailto:info@accs.in.net" className="text-primary font-bold">
                        info@accs.in.net
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Brochure */}
              <Link href="/contact" className="w-full btn-primary flex items-center justify-center gap-2">
                <Download size={20} />
                Download Brochure
              </Link>

              {/* Info Box */}
              <div className="bg-primary text-white rounded-lg p-8">
                <h4 className="font-bold mb-3">Why Choose Us?</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>15+ years of industry experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>99.8% on-time delivery rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>ISO certified operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>24/7 customer support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
