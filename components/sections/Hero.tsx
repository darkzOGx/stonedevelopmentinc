'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative h-dvh w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Static image on mobile, video on desktop */}
      <img
        src="/hero-still.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 md:hidden"
      />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/50 z-10 noise-bg" />
      
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 flex flex-col items-center text-center mt-24 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white drop-shadow-md uppercase tracking-[0.2em] font-semibold text-xs md:text-sm mb-6 block">
            Licensed & Insured &middot; Southern California
          </span>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-7xl lg:text-[90px] xl:text-[100px] leading-[1.05] font-serif font-light tracking-tight text-white mb-4 md:mb-8 max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={{
             hidden: { opacity: 0 },
             visible: {
               opacity: 1,
               transition: { staggerChildren: 0.1 }
             }
          }}
        >
          {["We Don't Just Build.", "We Define."].map((line, i) => (
             <motion.span 
               key={i} 
               className="block"
               variants={{
                 hidden: { opacity: 0, y: 40 },
                 visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
               }}
             >
               {line}
             </motion.span>
          ))}
        </motion.h1>

        <motion.p 
          className="text-base md:text-xl md:text-2xl text-white/80 max-w-3xl mb-6 md:mb-12 font-light tracking-wide leading-relaxed drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Stone Development brings uncompromising craft to every residential 
          and commercial project — from the first blueprint to the final finish.
        </motion.p>

        <motion.div 
          className="mb-4 md:mb-8 w-24 md:w-40 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img src="/logo-hero.png" alt="Stone Development" className="w-full h-auto object-contain drop-shadow-2xl" />
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full">
              Book a Consultation
            </Button>
          </Link>
          <Link href="/portfolio" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full border-white/20 text-white hover:bg-white/10 hover:border-white">
              See Our Work
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
