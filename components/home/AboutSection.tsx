'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeUp, slideLeft, slideRight, staggerFast, viewportOnce } from './motionVariants';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Happy Clients' },
  { value: '10k+', label: 'Shipments Done' },
];

export default function AboutSection() {
  return (
    <section className="bg-white pb-10 pt-2 md:pb-12">
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideLeft}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="grid grid-cols-5 items-stretch gap-3 sm:gap-4">
              <div className="col-span-3 flex flex-col gap-3 sm:gap-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-sm">
                  <Image
                    src="/fleet/truck-01.jpg"
                    alt="Anshika Logistics refrigerated container"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 60vw, 30vw"
                  />
                </div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-sm">
                  <Image
                    src="/fleet/truck-02.jpg"
                    alt="Anshika Logistics reefer truck"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 60vw, 30vw"
                  />
                </div>
              </div>

              <div className="relative col-span-2 min-h-[220px] overflow-hidden rounded-2xl shadow-sm sm:min-h-[260px]">
                <Image
                  src="/fleet/truck-03.jpg"
                  alt="Anshika Logistics Eicher reefer fleet"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 40vw, 22vw"
                />
              </div>
            </div>

            <div className="absolute left-[60%] top-1/2 z-10 w-[5.75rem] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-primary px-3 py-3.5 text-center text-white shadow-[0_12px_28px_rgba(220,38,38,0.35)] sm:w-[6.5rem] sm:px-3.5 sm:py-4">
              <p className="text-2xl font-bold leading-none sm:text-[1.75rem]">15+</p>
              <p className="mt-1.5 text-[9px] font-semibold uppercase leading-tight tracking-[0.08em] text-white/90 sm:text-[10px]">
                Years Of
                <br />
                Experience
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideRight}
          >
            <p className="section-label mb-2">About Us</p>
            <h2 className="mb-3 max-w-lg text-2xl font-semibold tracking-tight text-text-dark md:text-3xl lg:text-[2.05rem] lg:leading-tight">
              Excellence in Cold Logistics
            </h2>
            <p className="mb-5 text-sm leading-relaxed text-text-body md:text-base">
              Anshika Cool Container Services delivers reliable cold-chain solutions for
              perishables, pharmaceuticals, and temperature-sensitive cargo. Our fleet,
              certified processes, and nationwide network keep your goods safe from pickup
              to delivery.
            </p>

            <motion.div
              className="mb-5 grid grid-cols-3 gap-2 rounded-xl bg-light-gray px-3 py-3.5 md:px-4"
              variants={staggerFast}
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} className="text-center" variants={fadeUp}>
                  <p className="text-xl font-bold text-primary md:text-2xl">{stat.value}</p>
                  <p className="mt-0.5 text-[9px] font-medium uppercase leading-tight tracking-wide text-text-light md:text-[10px]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex flex-wrap items-center gap-2.5">
              <Link href="/services" className="btn-primary px-5 py-2.5 text-sm">
                Explore Services
              </Link>
              <Link href="/contact" className="btn-outline px-5 py-2.5 text-sm">
                Contact Us
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1 text-sm font-semibold text-text-body transition hover:text-primary"
              >
                View Projects
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
