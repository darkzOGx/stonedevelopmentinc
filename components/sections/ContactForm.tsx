'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';
import { DropdownSelect } from '@/components/ui/DropdownSelect';

const projectTypes = [
  'Kitchen Remodeling',
  'Bathroom Remodeling',
  'Room Addition',
  'Full Home Renovation',
  'New Construction',
  'ADU',
  'Commercial',
  'Other'
];

const formSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().min(10, 'Please provide more details about your project'),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm({ isFullPage = false }: { isFullPage?: boolean }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xkoqyadd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`bg-background ${isFullPage ? '' : 'py-24 md:py-32'}`}>
      <div className={`max-w-7xl mx-auto ${isFullPage ? '' : 'px-6'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6">
              <span className="text-accent flex items-center gap-3 uppercase tracking-[0.2em] text-xs font-semibold">
                <div className="w-8 h-[1px] bg-accent" />
                Let's Talk
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-8 tracking-tight leading-[1.05]">Discuss Your<br/>Vision.</h2>
            <p className="text-xl text-foreground-secondary font-light leading-relaxed mb-12 max-w-lg">
              Fill out the form and a project director will be in touch within one business day to discuss your timeline and exact requirements.
            </p>

            <div className="hidden lg:block mt-8">
              <p className="text-foreground-secondary text-xs tracking-[0.2em] uppercase font-semibold">Your Information Stays With Us. Always.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-background-surface p-10 md:p-14 border border-border-subtle rounded-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full py-20 relative z-10"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="text-accent mb-6"
                  >
                    <CheckCircle2 size={72} strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-4xl font-serif text-foreground mb-4">Message Sent</h3>
                  <p className="text-foreground-secondary font-light text-lg">We'll be in touch with you shortly.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-8 relative z-10"
                >
                  <div className="relative border-b border-border-subtle focus-within:border-accent transition-colors duration-300 group">
                    <input 
                      {...register('fullName')}
                      className={`w-full bg-transparent px-0 py-3 text-foreground placeholder-foreground-secondary/50 outline-none text-base md:text-lg font-light ${errors.fullName ? 'border-destructive' : ''}`}
                      placeholder="Full Name"
                    />
                    {errors.fullName && <span className="absolute -bottom-6 left-0 text-destructive text-[10px] uppercase tracking-wider">{errors.fullName.message}</span>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative border-b border-border-subtle focus-within:border-accent transition-colors duration-300 group">
                      <input 
                        {...register('phone')}
                        className={`w-full bg-transparent px-0 py-3 text-foreground placeholder-foreground-secondary/50 outline-none text-base md:text-lg font-light`}
                        placeholder="Phone Number"
                      />
                      {errors.phone && <span className="absolute -bottom-6 left-0 text-destructive text-[10px] uppercase tracking-wider">{errors.phone.message}</span>}
                    </div>

                    <div className="relative border-b border-border-subtle focus-within:border-accent transition-colors duration-300 group">
                      <input 
                        {...register('email')}
                        className={`w-full bg-transparent px-0 py-3 text-foreground placeholder-foreground-secondary/50 outline-none text-base md:text-lg font-light`}
                        placeholder="Email Address"
                      />
                      {errors.email && <span className="absolute -bottom-6 left-0 text-destructive text-[10px] uppercase tracking-wider">{errors.email.message}</span>}
                    </div>
                  </div>

                  <DropdownSelect 
                    value={watch('projectType')}
                    onChange={(val) => setValue('projectType', val, { shouldValidate: true })}
                    options={projectTypes}
                    placeholder="Select Project Type"
                    error={errors.projectType?.message}
                  />

                  <div className="relative border-b border-border-subtle focus-within:border-accent transition-colors duration-300 group pt-2">
                    <textarea
                      {...register('message')}
                      rows={4}
                      className={`w-full bg-transparent px-0 py-3 text-foreground placeholder-foreground-secondary/50 outline-none text-base md:text-lg font-light resize-none`}
                      placeholder="Tell us about your timeline, design goals, and vision..."
                    />
                    {errors.message && <span className="absolute -bottom-6 left-0 text-destructive text-[10px] uppercase tracking-wider">{errors.message.message}</span>}
                  </div>

                  <div className="pt-8">
                    <Button type="submit" size="lg" className="w-full text-base tracking-widest shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1" disabled={isSubmitting}>
                      {isSubmitting ? 'SECURELY SENDING...' : 'DISCUSS YOUR PROJECT'}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
            <div className="lg:hidden mt-8 text-center relative z-10">
              <p className="text-foreground-secondary text-[10px] tracking-[0.2em] uppercase font-semibold">Your Information Stays With Us. Always.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
