'use client';
import { motion } from 'framer-motion';

const items = [
  "Licensed & Bonded",
  "20+ Years Experience",
  "Local Expertise",
  "Fully Insured"
];

export function TrustBar() {
  return (
    <section className="bg-background-surface py-16 md:py-24 border-b border-border-subtle relative z-30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 md:divide-x divide-border-subtle">
          {items.map((item, i) => (
            <motion.div 
              key={item}
              className="flex flex-col items-center justify-center text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="w-8 h-[1px] bg-accent mb-6" />
              <h4 className="text-foreground-secondary font-serif text-2xl font-medium tracking-wider">{item}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
