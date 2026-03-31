'use client';

import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { projects } from '@/lib/projects';

export function Portfolio() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <SectionLabel>Recent Work</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mt-6 mb-6 tracking-tight">Project Proof That Can Actually Rank.</h2>
          <p className="text-xl text-foreground-secondary leading-relaxed font-light">
            These portfolio cards now lead to individual case-study pages, which gives Bing and homeowners much better context than a flat gallery alone.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link href="/portfolio">
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              View All Case Studies
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0, 6).map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
