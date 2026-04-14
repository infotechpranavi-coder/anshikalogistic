import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4 font-bold text-lg">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                D
              </div>
              <span>DIKSHA COOL</span>
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
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
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
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
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
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
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
                <a href="mailto:info@dikshalogistics.com" className="hover:text-primary transition-colors">
                  info@dikshalogistics.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="font-bold mb-4">Subscribe to Our Newsletter</h4>
          <div className="flex gap-2 max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:border-primary focus:outline-none"
            />
            <button className="btn-primary px-6">Subscribe</button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Diksha Cool Container Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
