'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const slides = [
  {
    id: 1,
    eyebrow: 'Cold Chain · Nationwide',
    title: 'Refrigerated',
    accent: 'Container Transport',
    description:
      'Temperature-controlled logistics built for perishables, pharma, and time-critical cargo across India.',
    image: '/images/hero-1.jpg',
  },
  {
    id: 2,
    eyebrow: 'Compliant · Monitored',
    title: 'Pharmaceutical',
    accent: 'Cold Logistics',
    description:
      'Certified handling with live temperature logs and secure transit for sensitive medical shipments.',
    image: '/images/hero-2.jpg',
  },
  {
    id: 3,
    eyebrow: 'Storage · Distribution',
    title: 'Cold Storage',
    accent: 'Solutions',
    description:
      'Modern warehousing for perishable goods—precise climate control from dock to delivery.',
    image: '/images/hero-3.jpg',
  },
];

const stats = [
  { value: '15+', label: 'Years' },
  { value: '500+', label: 'Clients' },
  { value: '10k+', label: 'Shipments' },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const { scrollY } = useScroll();
  const rawScale = useTransform(scrollY, [0, 700], [1, 1.2]);
  const rawY = useTransform(scrollY, [0, 700], [0, 120]);
  const rawOpacity = useTransform(scrollY, [0, 500], [1, 0.45]);
  const scale = useSpring(rawScale, { stiffness: 80, damping: 28 });
  const y = useSpring(rawY, { stiffness: 80, damping: 28 });
  const opacity = useSpring(rawOpacity, { stiffness: 80, damping: 28 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="sticky top-0 z-0 h-[100svh] w-full overflow-hidden">
      {/* Background + scroll motion */}
      <motion.div
        style={{ scale, y, opacity }}
        className="absolute inset-0 will-change-transform"
      >
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === current ? 1 : 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          >
            <Image
              src={slide.image}
              alt={`${slide.title} ${slide.accent}`}
              fill
              className="object-cover object-center"
              priority={index === 0}
              sizes="100vw"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Left translucent scrim → fully transparent on the empty right */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(90deg, rgba(14,16,28,0.92) 0%, rgba(14,16,28,0.78) 28%, rgba(14,16,28,0.42) 52%, rgba(14,16,28,0.12) 72%, rgba(14,16,28,0) 100%)',
        }}
      />
      {/* Soft bottom fade for controls */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40"
        style={{
          background:
            'linear-gradient(180deg, rgba(14,16,28,0) 0%, rgba(14,16,28,0.45) 100%)',
        }}
      />

      {/* Left-aligned content */}
      <div className="pointer-events-none absolute inset-0 z-30 flex items-center">
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 pb-28 sm:px-8 lg:px-12">
          <div className="relative min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.id}
                initial={false}
                animate={{
                  opacity: index === current ? 1 : 0,
                  x: index === current ? 0 : -24,
                }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute inset-0 max-w-xl lg:max-w-2xl ${
                  index === current ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
                aria-hidden={index !== current}
              >
                <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75 md:text-xs">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                  {slide.eyebrow}
                </p>

                <h1 className="mb-6 text-left font-bold leading-[0.95] tracking-tight text-white">
                  <span className="block text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                    {slide.title}
                  </span>
                  <span className="mt-1 block font-hero-accent text-[2.75rem] italic font-normal leading-none text-primary sm:text-5xl md:text-6xl lg:text-[4.65rem]">
                    {slide.accent}
                  </span>
                </h1>

                <p className="mb-9 max-w-md text-left text-base leading-relaxed text-white/80 sm:text-lg md:mb-10 md:max-w-lg md:text-xl md:leading-relaxed">
                  {slide.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-[#d11c24] hover:shadow-primary/35 sm:px-8 sm:py-4 sm:text-base"
                  >
                    Get Free Quote
                  </Link>
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-2 rounded-md border border-white/60 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-dark-navy sm:px-8 sm:py-4 sm:text-base"
                  >
                    View Details
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Side arrows — stay at edges so CTAs stay clickable */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 hidden md:block">
        <button
          onClick={prev}
          className="pointer-events-auto absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:border-primary hover:bg-primary lg:left-5 lg:h-12 lg:w-12"
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={next}
          className="pointer-events-auto absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:border-primary hover:bg-primary lg:right-5 lg:h-12 lg:w-12"
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Bottom bar: stats · counter · dots */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-6 pb-7 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex gap-8 sm:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-left">
                <p className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55 md:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 sm:gap-8">
            <p className="text-sm font-semibold tracking-[0.2em] text-white/90">
              {String(current + 1).padStart(2, '0')}
              <span className="text-white/40"> / </span>
              {String(slides.length).padStart(2, '0')}
            </p>
            <div className="flex items-center gap-2.5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'w-10 bg-primary'
                      : 'w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
