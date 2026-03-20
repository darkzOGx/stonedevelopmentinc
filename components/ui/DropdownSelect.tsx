'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DropdownSelectProps {
  value?: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder: string;
  error?: string;
}

export function DropdownSelect({ value, onChange, options, placeholder, error }: DropdownSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative border-b border-border-subtle focus-within:border-accent transition-colors duration-300 group" ref={dropdownRef}>
      <div 
        className="w-full bg-transparent px-0 py-3 flex items-center justify-between cursor-pointer outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={cn("text-base md:text-lg font-light transition-colors", value ? "text-foreground" : "text-foreground-secondary/50")}>
          {value || placeholder}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
          <ChevronDown className="w-5 h-5 text-accent" strokeWidth={1.5} />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 mt-2 bg-background-surface border border-border-subtle shadow-2xl z-50 overflow-hidden origin-top"
          >
            <div className="max-h-60 overflow-y-auto py-2">
              {options.map((option) => (
                <div
                  key={option}
                  className={cn(
                    "px-5 py-3 cursor-pointer transition-colors text-sm md:text-base font-light",
                    value === option ? "bg-accent/10 text-accent font-medium border-l-2 border-accent" : "text-foreground hover:bg-black/5 border-l-2 border-transparent"
                  )}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {error && <span className="absolute -bottom-6 left-0 text-destructive text-[10px] uppercase tracking-wider">{error}</span>}
    </div>
  );
}
