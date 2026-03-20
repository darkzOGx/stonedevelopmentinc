'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { QuickLeadForm } from './QuickLeadForm';

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if mouse crosses out of viewport upwards
      if (e.clientY <= 15 && !sessionStorage.getItem('exitIntentShown')) {
        setIsOpen(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-foreground/30 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-5xl bg-background-surface shadow-[0_60px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row rounded-2xl md:rounded-3xl border border-white/50"
          >
            {/* Image Column */}
            <div className="w-full md:w-5/12 relative h-48 md:h-auto overflow-hidden group">
               <Image 
                 src="/exit-intent-picture.jpg"
                 alt="Construction" 
                 fill
                 className="object-cover transition-transform duration-1000 group-hover:scale-105" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent mix-blend-multiply"></div>
               <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay"></div>
               
               <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                 <h3 className="text-3xl lg:text-4xl font-serif mb-3 leading-tight">Uncompromising<br/>Craft.</h3>
                 <p className="text-white/80 font-light text-sm tracking-wide leading-relaxed">
                   Building Southern California's finest properties for over two decades.
                 </p>
               </div>
            </div>
            
            {/* Form Column */}
            <div className="w-full md:w-7/12 p-10 md:p-16 relative bg-background-surface">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-foreground-secondary hover:text-foreground hover:rotate-90 transition-all duration-300"
                aria-label="Close modal"
              >
                <X size={26} strokeWidth={1.5} />
              </button>

              <div className="mb-12">
                <span className="text-accent flex items-center gap-3 uppercase tracking-[0.2em] text-xs font-semibold mb-6">
                  <div className="w-8 h-[1px] bg-accent" />
                  Before You Go
                </span>
                <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6 text-foreground leading-[1.1]">Let's Discuss<br/>Your Vision.</h2>
                <p className="text-foreground-secondary font-light text-lg leading-relaxed max-w-md">
                  Leave your details below and a project director will reach out to schedule your private consultation.
                </p>
              </div>
              
              <QuickLeadForm onSuccess={() => setIsOpen(false)} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
