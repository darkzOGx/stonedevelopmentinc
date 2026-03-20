import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Portfolio } from '@/components/sections/Portfolio';
import { CTABanner } from '@/components/sections/CTABanner';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Stone Development Inc | Luxury Construction & General Contractor',
  description: "Stone Development brings uncompromising craft to every residential and commercial project in Southern California. Premier licensed, bonded, and insured contractors.",
  alternates: { canonical: 'https://stonedevelopmentinc.com' }
};

export default function Home() {
  return (
    <main id="main-content">
      <h1 className="sr-only">Stone Development Inc. - Luxury General Contractors in Southern California</h1>
      <div className="speakable-summary sr-only">
        Stone Development Inc. is a premier, licensed, and insured general contractor in Southern California, specializing in luxury residential remodeling, new construction, ADUs, and commercial builds. We bring uncompromising craft from the first blueprint to the final finish.
      </div>
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Portfolio />
      <CTABanner />
      <ContactForm />
    </main>
  );
}
