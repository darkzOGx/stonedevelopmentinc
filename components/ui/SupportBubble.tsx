'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';
import { QuickLeadForm } from './QuickLeadForm';

export function SupportBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={wrapperRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="mb-6 w-[calc(100vw-3rem)] sm:w-[420px] bg-background-surface/95 backdrop-blur-2xl border border-border-subtle rounded-3xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]"
          >
            <div className="bg-foreground text-background p-10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 noise-bg mix-blend-overlay"></div>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent rounded-full blur-3xl opacity-20 pointer-events-none"></div>
              
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-background/50 hover:text-background hover:rotate-90 transition-all duration-300 z-10"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
              
              <h4 className="text-3xl font-serif mb-3 relative z-10 leading-tight">Start Your<br/>Project.</h4>
              <p className="text-background/80 font-light relative z-10 leading-relaxed text-sm pr-10">
                Connect with our specialists. We respond to all serious inquiries within 24 hours.
              </p>
            </div>
            
            <div className="p-8 md:p-10">
              <QuickLeadForm />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen);
          if (!hasInteracted) setHasInteracted(true);
        }}
        className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center shadow-[0_15px_30px_-5px_rgba(184,137,42,0.4)] relative"
        aria-label="Toggle support form"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} strokeWidth={1.5} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare size={26} strokeWidth={1.5} />
              {!hasInteracted && (
                <span className="absolute top-0 right-0 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-accent"></span>
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
