'use client';

import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

export function ProjectCard({ 
  title, 
  category, 
  image 
}: { 
  title: string; 
  category: string; 
  image: string | StaticImageData; 
}) {
  return (
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
        <Image src={image} alt={title} fill className="object-cover" placeholder="blur" blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMzMzMiIC8+PC9zdmc+" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
        <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-3 block">{category}</span>
        <h3 className="text-white text-2xl md:text-3xl font-serif font-medium tracking-tight leading-tight">{title}</h3>
      </div>
    </motion.div>
  );
}
