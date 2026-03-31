'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';
import bgRenovation from '@/src/assets/service-renovation.jpg';
import bgNewConstr from '@/src/assets/service-new-construction.jpg';

const services = [
  {
    label: "Remodeling & Renovation",
    heading: "Kitchen, Bath & Whole-Home Remodeling",
    body: "These are the pages Orange County homeowners actually search for when they are ready to compare contractors, costs, timelines, and scope decisions.",
    list: [
      { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
      { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
      { label: "Full Home Renovation", href: "/services/full-home-renovation" },
      { label: "Damage Restoration", href: "/services/damage-restoration" }
    ],
    cta: "Explore Remodeling Services →",
    link: "/services",
    image: bgRenovation
  },
  {
    label: "New Construction",
    heading: "ADUs, Additions & Custom Build Work",
    body: "These pages support the higher-intent homeowners comparing square footage strategy, lot fit, detached units, custom-home planning, and major expansion work.",
    list: [
      { label: "ADU Construction", href: "/services/adu-construction" },
      { label: "Home Additions", href: "/services/home-additions" },
      { label: "Custom Homes", href: "/services/custom-homes" }
    ],
    cta: "Explore Build Services →",
    link: "/services",
    image: bgNewConstr
  }
];

export function Services() {
  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mt-6 mb-8 tracking-tight">Services Homeowners Actually Search For.</h2>
          <p className="text-xl text-foreground-secondary leading-relaxed font-light">
            The clearest way to grow local visibility is to give each major service its own search-facing page and a cleaner path into the right kind of project.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-24 md:space-y-40">
        {services.map((service, i) => (
          <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24`}>
            
            <motion.div 
              className="w-full md:w-1/2 relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-background-surface overflow-hidden group"
              initial={{ opacity: 0, x: i % 2 !== 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image 
                src={service.image} 
                alt={service.heading}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                placeholder="blur"
              />
              <div className="absolute inset-0 border border-border-subtle pointer-events-none z-10" />
            </motion.div>

            <motion.div 
              className="w-full md:w-1/2 flex flex-col justify-center"
              initial={{ opacity: 0, x: i % 2 !== 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-6 block">
                {service.label}
              </span>
              <h3 className="text-4xl md:text-5xl font-serif mb-6">{service.heading}</h3>
              <p className="text-lg text-foreground-secondary leading-relaxed mb-10 font-light">
                {service.body}
              </p>
              
              <ul className="mb-12 space-y-4">
                {service.list.map((item, j) => (
                  <li key={item.href} className="flex items-center text-foreground font-light">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-4" />
                    <Link href={item.href} className="hover:text-accent transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <Link href={service.link} className="inline-flex items-center text-accent uppercase tracking-widest text-sm font-semibold hover:text-foreground transition-colors group">
                {service.cta}
              </Link>
            </motion.div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
