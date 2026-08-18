'use client';

import { motion } from 'framer-motion';
import { Globe, Thermometer, Truck, ShieldCheck } from 'lucide-react';

const highlights = [
  {
    icon: Globe,
    title: 'Pan-India Cold Chain',
    text: 'Integrated logistics from metros to Tier-2 and Tier-3 locations, with one accountable network.',
  },
  {
    icon: Thermometer,
    title: 'Live Temperature Control',
    text: 'Real-time monitoring at ±0.5°C accuracy, with refrigeration systems matched to cargo type.',
  },
  {
    icon: Truck,
    title: 'Right-Sized Reefer Fleet',
    text: 'Dedicated vehicles from 9 ft to 24 ft, so every load gets the capacity and route it needs.',
  },
  {
    icon: ShieldCheck,
    title: 'Traceable On-Time Dispatch',
    text: '99.8% on-time delivery with documented handling and 24/7 operational support.',
  },
];

export default function FeatureCards() {
  return (
    <section className="relative -mt-4 bg-white pt-8 pb-12 sm:-mt-10 sm:pt-12 sm:pb-16 md:pb-20">
      <div className="section-container">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <p className="section-label mb-3 justify-center">Why Choose Anshika</p>
          <h2 className="text-2xl font-semibold tracking-tight text-text-dark md:text-4xl md:leading-tight">
            Built for outcomes, not just movement
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-body">
            Nationwide reach, precise temperature control, and dependable delivery —
            engineered around the cargo you cannot afford to lose.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {highlights.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl bg-primary p-5 text-white shadow-[0_14px_32px_rgba(232,33,42,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(232,33,42,0.32)] sm:p-6"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10" />
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white">
                <item.icon size={20} strokeWidth={1.75} />
              </span>
              <h3 className="text-[15px] font-semibold text-white md:text-base">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/90">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
