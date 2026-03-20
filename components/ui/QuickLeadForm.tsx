'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
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
});

type FormData = z.infer<typeof formSchema>;

export function QuickLeadForm({ onSuccess }: { onSuccess?: () => void }) {
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
        if (onSuccess) {
          setTimeout(onSuccess, 3000);
        }
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
    <div className="w-full relative">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-10 px-4 min-h-[300px]"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="text-accent mb-6"
            >
              <CheckCircle2 size={64} strokeWidth={1.5} />
            </motion.div>
            <h4 className="text-3xl font-serif text-foreground mb-4">Request Received</h4>
            <p className="text-foreground-secondary text-lg font-light text-center max-w-sm">
              Our project directing team has received your information. We will touch base shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="relative border-b border-border-subtle focus-within:border-accent transition-colors duration-300 group">
              <input 
                {...register('fullName')}
                className={`w-full bg-transparent px-0 py-3 text-foreground placeholder-foreground-secondary/50 outline-none text-sm md:text-base font-light ${errors.fullName ? 'border-destructive' : ''}`}
                placeholder="Full Name"
              />
              {errors.fullName && <span className="absolute -bottom-5 left-0 text-destructive text-[10px] uppercase tracking-wider">{errors.fullName.message}</span>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative border-b border-border-subtle focus-within:border-accent transition-colors duration-300 group">
                <input 
                  {...register('phone')}
                  className={`w-full bg-transparent px-0 py-3 text-foreground placeholder-foreground-secondary/50 outline-none text-sm md:text-base font-light`}
                  placeholder="Phone Number"
                />
                {errors.phone && <span className="absolute -bottom-5 left-0 text-destructive text-[10px] uppercase tracking-wider">{errors.phone.message}</span>}
              </div>

              <div className="relative border-b border-border-subtle focus-within:border-accent transition-colors duration-300 group">
                <input 
                  {...register('email')}
                  className={`w-full bg-transparent px-0 py-3 text-foreground placeholder-foreground-secondary/50 outline-none text-sm md:text-base font-light`}
                  placeholder="Email Address"
                />
                {errors.email && <span className="absolute -bottom-5 left-0 text-destructive text-[10px] uppercase tracking-wider">{errors.email.message}</span>}
              </div>
            </div>

            <DropdownSelect 
              value={watch('projectType')}
              onChange={(val) => setValue('projectType', val, { shouldValidate: true })}
              options={projectTypes}
              placeholder="Select Project Type"
              error={errors.projectType?.message}
            />

            <div className="pt-8">
              <Button type="submit" size="lg" className="w-full text-base tracking-widest shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1" disabled={isSubmitting}>
                {isSubmitting ? 'SECURELY SENDING...' : 'DISCUSS YOUR PROJECT'}
              </Button>
            </div>
            
            <p className="text-xs text-foreground-secondary text-center font-light pt-2">
              Licensed, bonded, and fully insured. Confidentiality guaranteed.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
