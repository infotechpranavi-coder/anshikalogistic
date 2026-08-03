'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { fleetProducts } from '@/lib/data';
import { ArrowUpRight, Box, Maximize2, Thermometer } from 'lucide-react';

const specMeta = [
  { key: 'capacity' as const, label: 'Capacity', Icon: Box },
  { key: 'dimensions' as const, label: 'Dimensions', Icon: Maximize2 },
  { key: 'temperature' as const, label: 'Temp. Range', Icon: Thermometer },
];

export default function FleetProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.25 });

  return (
    <section
      className="bg-[#f6f7f9] px-4 py-20 sm:px-6 md:py-28 lg:px-8"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-14"
        >
          <p className="section-label mb-3">04 _ Our Fleet</p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-text-dark md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            State-of-the-Art Reefer Fleet
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-body md:text-lg">
            Temperature-controlled units sized for every cold-chain route—from city vans to full containers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {fleetProducts.map((product, idx) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_8px_30px_rgba(26,26,46,0.06)] ring-1 ring-black/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(26,26,46,0.1)]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-light-gray">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/35 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-text-dark shadow-sm backdrop-blur-sm">
                  {product.category}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
                <h3 className="text-[1.05rem] font-semibold leading-snug tracking-tight text-text-dark transition-colors group-hover:text-primary md:text-lg">
                  {product.name}
                </h3>

                <ul className="mt-5 flex-1 space-y-0 border-t border-gray-100">
                  {specMeta.map(({ key, label, Icon }) => (
                    <li
                      key={key}
                      className="flex items-center gap-3 border-b border-gray-100 py-3 last:border-b-0"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-light">
                          {label}
                        </p>
                        <p className="mt-0.5 truncate text-sm font-medium text-text-dark">
                          {product.specs[key]}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d11c24]"
                >
                  Enquire Now
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="mt-12 text-center md:mt-14"
        >
          <p className="mb-3 text-sm text-text-body md:text-base">
            Need a custom unit? We configure reefers for specialised cargo.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2.5"
          >
            Talk to our fleet team
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
