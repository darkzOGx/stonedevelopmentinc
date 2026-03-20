'use client';
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { type LucideIcon } from "lucide-react";

export function StatBadge({ text, num, suffix = "", icon: Icon }: { text: string; num?: number; suffix?: string; icon?: LucideIcon; }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView && num !== undefined) {
      animate(0, num, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.round(latest))
      });
    }
  }, [isInView, num]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      ref={ref} 
      className="border border-border-subtle p-8 bg-background-surface/50 backdrop-blur-sm flex flex-col items-center justify-center text-center h-full hover:border-border-accent transition-colors duration-300 group"
    >
      {num !== undefined ? (
        <div className="text-5xl md:text-6xl font-serif text-accent mb-3 font-light tracking-tight group-hover:scale-105 transition-transform duration-500">
          {count}
          <span className="text-3xl">{suffix}</span>
        </div>
      ) : Icon ? (
        <Icon size={32} strokeWidth={1.5} className="text-accent mb-4 group-hover:scale-110 transition-transform duration-500" />
      ) : (
        <div className="h-2 w-12 bg-accent mb-6 group-hover:w-16 transition-all duration-500" />
      )}
      <div className="text-foreground-secondary uppercase tracking-[0.15em] text-xs font-medium leading-relaxed max-w-[200px]">{text}</div>
    </motion.div>
  );
}
