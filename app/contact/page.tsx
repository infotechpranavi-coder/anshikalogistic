import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/forms/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    details: 'Bhiwandi, Maharashtra, India',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'info@dikshalogistics.com',
    href: 'mailto:info@dikshalogistics.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: '24/7 Available',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" />

      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-text-dark mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.href}
                    className="flex gap-4 group"
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0 group-hover:opacity-80 transition-opacity">
                      <info.icon size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-text-dark mb-1">{info.title}</p>
                      <p className="text-text-body group-hover:text-primary transition-colors">
                        {info.details}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Tips */}
              <div className="mt-12 bg-light-gray rounded-lg p-6">
                <h3 className="font-bold text-text-dark mb-4">Quick Tips</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Provide detailed shipment information for accurate quotes</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Mention your preferred pickup and delivery dates</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Include any special handling requirements</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <h2 className="text-3xl font-bold text-text-dark mb-2">Send us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-text-dark mb-8 text-center">Our Location</h2>
          <div className="relative w-full h-96 bg-gray-300 rounded-lg overflow-hidden">
            {/* Placeholder for Google Maps */}
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.3516827405923!2d73.06289!3d19.261842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc7c1c1c1c1c1c1%3A0x0!2sBhiwandi!5e0!3m2!1sen!2sin!4v1234567890"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
