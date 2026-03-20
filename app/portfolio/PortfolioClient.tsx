'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionLabel } from '@/components/ui/SectionLabel';

const filters = ['All', 'Remodeling', 'New Construction', 'ADU', 'Commercial'];

export default function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projects.filter(p => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Remodeling') return p.category.includes('Remodeling') || p.category.includes('Renovation');
    if (activeFilter === 'New Construction') return p.category.includes('New Construction');
    if (activeFilter === 'ADU') return p.category.includes('ADU') || p.category.includes('Accessory Dwelling');
    if (activeFilter === 'Commercial') return p.category.includes('Commercial');
    return false;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <SectionLabel>Our Work</SectionLabel>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif tracking-tight mb-6">Portfolio</h1>
          <p className="text-xl text-foreground-secondary font-light">
            A selection of our recent projects across Southern California. 
            Browse by category to see our specific expertise.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 ${activeFilter === filter ? 'bg-accent text-white' : 'bg-background-surface border border-border-subtle text-foreground-secondary hover:text-foreground hover:border-border-accent'}`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Gallery */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-foreground-secondary font-light text-lg">
            No projects found in this category yet.
          </div>
        )}
      </div>
    </div>
  );
}
