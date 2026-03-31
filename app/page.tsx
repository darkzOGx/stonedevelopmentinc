import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Portfolio } from '@/components/sections/Portfolio';
import { CTABanner } from '@/components/sections/CTABanner';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Orange County General Contractor | Stone Development Inc.',
  description:
    'Irvine-based general contractor for Orange County kitchen remodeling, bathroom remodeling, ADUs, home additions, whole-home renovation, custom homes, and restoration.',
  alternates: { canonical: 'https://www.stonedevelopmentinc.com' }
};

export default function Home() {
  return (
    <main id="main-content">
      <div className="speakable-summary sr-only">
        Stone Development Inc. is an Irvine-based general contractor serving Orange County with kitchen remodeling, bathroom remodeling, ADUs, home additions, whole-home renovation, custom homes, and restoration work.
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
