'use client';

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/sections/ContactForm';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactClient() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 mb-16 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <SectionLabel>Get In Touch</SectionLabel>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif tracking-tight mb-6">Let's Build Something.</h1>
          <p className="text-xl text-foreground-secondary font-light">
            Ready to start your next project? Contact us today to schedule a consultation with our expert team.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12 mb-24">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-2xl font-serif mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-foreground-secondary font-light">
                <MapPin className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <strong className="block text-foreground font-medium mb-1">Office</strong>
                  1 Jenner Suite 150<br />
                  Irvine, CA 92618
                </div>
              </div>
              <div className="flex items-start gap-4 text-foreground-secondary font-light">
                <Phone className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <strong className="block text-foreground font-medium mb-1">Phone</strong>
                  (949) 508-6763
                </div>
              </div>
              <div className="flex items-start gap-4 text-foreground-secondary font-light">
                <Mail className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <strong className="block text-foreground font-medium mb-1">Email</strong>
                  info@stonedevelopmentinc.com
                </div>
              </div>
              <div className="flex items-start gap-4 text-foreground-secondary font-light">
                <Clock className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <strong className="block text-foreground font-medium mb-1">Business Hours</strong>
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday - Sunday: Closed
                </div>
              </div>
            </div>
          </div>

          <div className="border border-border-subtle p-6 bg-background-surface">
            <h3 className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">License</h3>
            <p className="text-xl font-serif">#1146382</p>
            <p className="text-foreground-secondary mt-2 text-sm font-light">Licensed, Bonded & Insured</p>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-2 h-[400px] lg:h-auto min-h-[400px] border border-border-subtle relative overflow-hidden bg-background-surface"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.063264426569!2d-117.747809623588!3d33.65548623723381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce7ebc6f37ed1%3A0xc3afbf54eefca522!2s1%20Jenner%20Ste%20150%2C%20Irvine%2C%20CA%2092618!5e0!3m2!1sen!2sus!4v1709923842103!5m2!1sen!2sus" 
            className="absolute inset-0 w-full h-full border-0" 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            style={{ filter: 'grayscale(100%) opacity(80%)' }}
          />
        </motion.div>

      </div>

      <div className="border-t border-border-subtle pt-24 bg-background">
        <ContactForm isFullPage />
      </div>

    </div>
  );
}
