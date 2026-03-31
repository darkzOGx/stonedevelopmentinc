'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, MapPin, BadgeCheck } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { StatBadge } from '@/components/ui/StatBadge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function About() {
  return (
    <section className="py-24 md:py-32 bg-background-surface text-foreground relative z-30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel className="[&>span]:text-accent [&>div]:bg-accent">Why Stone Development</SectionLabel>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mt-6 mb-8 text-foreground tracking-tight">Local Context Matters More Than Generic Craft Talk.</h2>
            <p className="text-xl md:text-2xl text-foreground-secondary leading-relaxed mb-10 font-light">
              Our Irvine office, Orange County service footprint, and planning-first
              process give homeowners clearer answers before a project gets too far
              down the wrong path. That matters just as much as the field execution.
            </p>
            <Link href="/about">
              <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background">
                Learn More About Us
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <StatBadge text="Licensed & Bonded" icon={Shield} />
            <StatBadge num={20} text="Years Experience" suffix="+" />
            <StatBadge text="Local Expertise" icon={MapPin} />
            <StatBadge text="Fully Insured" icon={BadgeCheck} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
