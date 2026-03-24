import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SupportBubble } from '@/components/ui/SupportBubble';
import { ExitIntentModal } from '@/components/ui/ExitIntentModal';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant' 
});

export const metadata: Metadata = {
  title: 'Stone Development Inc | Luxury Construction & General Contractor',
  description: "Stone Development brings uncompromising craft to every residential and commercial project in Southern California. Premier licensed, bonded, and insured contractors.",
  keywords: ['Luxury Construction', 'General Contractor', 'Southern California', 'Home Renovation', 'Commercial Build', 'ADU', 'Real Estate Development'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.stonedevelopmentinc.com',
    siteName: 'Stone Development Inc.',
    title: 'Stone Development Inc | Luxury Construction in Southern California',
    description: 'Uncompromising craft to every residential and commercial project — from the first blueprint to the final finish.',
    images: [{ url: '/exit-intent-picture.jpg', width: 1200, height: 630, alt: 'Stone Development Construction' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stone Development Inc | Luxury Construction',
    description: 'Premier licensed, bonded & insured general contractors in Southern California.',
    images: ['/exit-intent-picture.jpg']
  },
  alternates: {
    canonical: 'https://www.stonedevelopmentinc.com'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Stone Development Inc.',
  image: 'https://www.stonedevelopmentinc.com/logo.png',
  '@id': 'https://www.stonedevelopmentinc.com',
  url: 'https://www.stonedevelopmentinc.com',
  telephone: '+19495086763',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1 Jenner Suite 150',
    addressLocality: 'Irvine',
    addressRegion: 'CA',
    postalCode: '92618',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.6554862,
    longitude: -117.7478096
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00'
  },
  priceRange: '$$$$'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, cormorant.variable, 'bg-background text-foreground antialiased selection:bg-accent selection:text-white')}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <SupportBubble />
        <ExitIntentModal />
        <Analytics />
      </body>
    </html>
  );
}
