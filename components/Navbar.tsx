'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const overHero = isHome && !scrolled && !isOpen;
  const linkClass = overHero
    ? 'text-white/90 hover:text-white transition-colors font-medium'
    : 'text-gray-600 hover:text-primary transition-colors font-medium';

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          overHero
            ? 'bg-transparent'
            : 'bg-white shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl relative z-10">
              <Image
                src="/logo/anishka%20logists.jpeg"
                alt="Anshika logo"
                width={86}
                height={86}
                className={`h-14 w-auto object-contain transition-all duration-500 ${
                  overHero ? 'brightness-110 drop-shadow-lg' : ''
                }`}
                priority
              />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className={linkClass}>
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                className={`hidden sm:flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                  overHero ? 'hover:bg-white/15' : 'hover:bg-light-gray'
                }`}
                aria-label="Search"
              >
                <Search
                  size={20}
                  className={overHero ? 'text-white' : 'text-gray-600'}
                />
              </button>
              <Link
                href="/contact"
                className="hidden sm:block btn-primary text-sm"
              >
                Free Quote
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X size={24} className="text-gray-800" />
                ) : (
                  <Menu size={24} className={overHero ? 'text-white' : 'text-gray-800'} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed inset-0 top-24 bg-white z-40 md:hidden overflow-y-auto"
        >
          <div className="p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="w-full btn-primary mt-6 block text-center">
              Free Quote
            </Link>
          </div>
        </motion.div>
      )}

      {/* Spacer only on non-home pages so hero can sit under transparent nav */}
      {!isHome && <div className="h-24" />}
    </>
  );
}
