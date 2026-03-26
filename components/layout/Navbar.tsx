'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Calculator, FileText, ClipboardCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Resources', href: '/resources', hasDropdown: true },
  { name: 'Contact', href: '/contact' },
];

const resourceColumns = [
  {
    title: 'Tools & Calculators',
    items: [
      {
        name: 'Budget Calculator',
        href: '/resources/budget-calculator',
        icon: Calculator,
        description: 'Instant project estimates',
      },
    ],
  },
  {
    title: 'Guides & Reports',
    items: [
      {
        name: 'Cost Guide',
        href: '/resources/cost-guide',
        icon: FileText,
        description: '2026 SoCal pricing',
      },
      {
        name: 'Contractor Checklist',
        href: '/resources/contractor-checklist',
        icon: ClipboardCheck,
        description: 'Vet any contractor',
      },
    ],
  },
];

const comingSoonItems = 'ADU Starter Kit \u00b7 ROI Report \u00b7 Permit Guide \u00b7 Project Timeline';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileResourcesExpanded, setIsMobileResourcesExpanded] = useState(false);
  const pathname = usePathname();
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isHomePage = pathname === '/';
  const isDarkText = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Close dropdown on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsResourcesOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsResourcesOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsResourcesOpen(false);
    }, 150);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsResourcesOpen(false);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-black/5 py-4 shadow-subtle'
            : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="relative z-50 flex items-center">
            <img
              src="/logo.png"
              alt="Stone Development"
              className={cn(
                'w-auto transition-all duration-300',
                isScrolled ? 'h-8 md:h-10' : 'h-10 md:h-12 drop-shadow-md',
                isDarkText ? '' : 'brightness-0 invert'
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={cn(
                      'text-sm uppercase tracking-widest transition-colors relative group font-medium flex items-center gap-1',
                      isDarkText
                        ? 'text-foreground hover:text-accent'
                        : 'text-white drop-shadow-md hover:text-white/80'
                    )}
                  >
                    {link.name}
                    <ChevronDown
                      size={14}
                      className={cn(
                        'transition-transform duration-200',
                        isResourcesOpen && 'rotate-180'
                      )}
                    />
                    <span
                      className={cn(
                        'absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full',
                        isDarkText ? 'bg-accent' : 'bg-white'
                      )}
                    />
                  </button>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-sm uppercase tracking-widest transition-colors relative group font-medium',
                    isDarkText
                      ? 'text-foreground hover:text-accent'
                      : 'text-white drop-shadow-md hover:text-white/80'
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      'absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full',
                      isDarkText ? 'bg-accent' : 'bg-white'
                    )}
                  />
                </Link>
              )
            )}
            <Link href="/contact" tabIndex={-1}>
              <Button
                size="sm"
                variant={isDarkText ? 'primary' : 'outline'}
                className={
                  isDarkText
                    ? ''
                    : 'border-white text-white font-medium hover:bg-white hover:text-black drop-shadow-md'
                }
              >
                Schedule Consultation
              </Button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={cn(
              'md:hidden relative z-50 p-2',
              isDarkText ? 'text-foreground' : 'text-white'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        <AnimatePresence>
          {isResourcesOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="hidden md:block absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-black/5 shadow-xl"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-3 gap-8">
                  {/* Column 1 & 2: Tools & Guides */}
                  {resourceColumns.map((column) => (
                    <div key={column.title}>
                      <h3 className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4 pb-2 border-b border-accent/20">
                        {column.title}
                      </h3>
                      <div className="space-y-1">
                        {column.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={closeDropdown}
                            className="flex items-start gap-3 rounded-lg p-3 hover:bg-accent/5 transition-colors"
                          >
                            <item.icon
                              className="text-accent w-5 h-5 mt-0.5 flex-shrink-0"
                              strokeWidth={1.5}
                            />
                            <div>
                              <div className="text-sm font-medium text-foreground">
                                {item.name}
                              </div>
                              <div className="text-xs text-foreground-secondary font-light">
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Column 3: Blog */}
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4 pb-2 border-b border-accent/20">
                      Blog
                    </h3>
                    <Link
                      href="/blog"
                      onClick={closeDropdown}
                      className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent transition-colors"
                    >
                      View All Posts &rarr;
                    </Link>
                  </div>
                </div>

                {/* Coming Soon row */}
                <div className="mt-6 pt-6 border-t border-black/5 flex items-center justify-between">
                  <div className="text-xs text-foreground-secondary font-light">
                    <span className="font-medium text-foreground/60">Coming Soon |</span>{' '}
                    {comingSoonItems}
                  </div>
                  <Link
                    href="/resources"
                    onClick={closeDropdown}
                    className="text-accent uppercase tracking-widest text-xs font-semibold hover:text-accent/80 transition-colors"
                  >
                    View All Resources &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center pointer-events-auto"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="flex flex-col items-center"
                >
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setIsMobileResourcesExpanded(!isMobileResourcesExpanded)
                        }
                        className="text-3xl font-serif text-foreground hover:text-accent transition-colors flex items-center gap-2"
                      >
                        {link.name}
                        <ChevronDown
                          size={24}
                          className={cn(
                            'transition-transform duration-200',
                            isMobileResourcesExpanded && 'rotate-180'
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {isMobileResourcesExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col items-center gap-4 pt-4">
                              <Link
                                href="/resources/budget-calculator"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg text-foreground-secondary hover:text-accent transition-colors font-light"
                              >
                                Budget Calculator
                              </Link>
                              <Link
                                href="/resources/cost-guide"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg text-foreground-secondary hover:text-accent transition-colors font-light"
                              >
                                Cost Guide
                              </Link>
                              <Link
                                href="/resources/contractor-checklist"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg text-foreground-secondary hover:text-accent transition-colors font-light"
                              >
                                Contractor Checklist
                              </Link>
                              <Link
                                href="/blog"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg text-foreground-secondary hover:text-accent transition-colors font-light"
                              >
                                Blog
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-3xl font-serif text-foreground hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button size="lg">Schedule Consultation</Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
