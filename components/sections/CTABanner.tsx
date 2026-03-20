'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function CTABanner() {
  return (
    <section className="relative py-32 bg-background-surface overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 pointer-events-none noise-bg" />
      <div className="absolute inset-0 border-y border-accent/20" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-foreground tracking-tight">Your Next Project Starts Here.</h2>
          <p className="text-xl md:text-2xl text-foreground-secondary font-light mb-12">
            Tell us what you're building. We'll take it from there.
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-12">
              Schedule a Consultation
            </Button>
          </Link>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-[40vw] h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[40vw] h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </section>
  );
}
