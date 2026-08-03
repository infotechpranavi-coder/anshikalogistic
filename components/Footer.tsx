import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-dark-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4 font-bold text-lg">
              <Image
                src="/logo/anishka%20logists.jpeg"
                alt="Anshika logo"
                width={96}
                height={96}
                className="h-14 w-auto object-contain"
              />
              <span></span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Leading provider of refrigerated container services and cold logistics solutions across India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Reefer Transport
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Cold Storage
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Pharma Logistics
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Express Delivery
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Pan-India Coverage
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex gap-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Bhiwandi, Maharashtra</p>
                  <p className="text-sm">India</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex gap-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a href="mailto:info@accs.in.net" className="hover:text-primary transition-colors">
                  info@accs.in.net
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Anshika Cool Container Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
