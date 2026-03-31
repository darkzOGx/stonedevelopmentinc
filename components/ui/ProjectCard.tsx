'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function ProjectCard({ 
  slug,
  title, 
  category, 
  image,
  imageAlt,
  market,
  summary,
}: { 
  slug: string;
  title: string; 
  category: string; 
  image: string | StaticImageData; 
  imageAlt?: string;
  market?: string;
  summary?: string;
}) {
  return (
    <Link href={`/portfolio/${slug}`} className="block">
      <motion.div 
        className="group relative overflow-hidden bg-background-surface h-[350px] md:h-[450px]"
        whileHover="hover"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="absolute inset-0 z-0"
          variants={{
            hover: { scale: 1.05, filter: 'brightness(1.15)' }
          }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        >
          <Image src={image} alt={imageAlt ?? title} fill className="object-cover" placeholder="blur" blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMzMzMiIC8+PC9zdmc+" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 block">{category}</span>
          <h3 className="text-white text-2xl md:text-3xl font-serif font-medium tracking-tight leading-tight">{title}</h3>
          {(market || summary) && (
            <p className="mt-3 text-sm leading-6 text-white/75 max-w-md">
              {summary ?? market}
            </p>
          )}
          <span className="mt-4 inline-block text-xs uppercase tracking-[0.2em] text-white/80">
            View case study
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
