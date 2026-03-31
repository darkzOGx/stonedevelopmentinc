import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SupportBubble } from '@/components/ui/SupportBubble';
import { ExitIntentModal } from '@/components/ui/ExitIntentModal';
import { Analytics } from '@vercel/analytics/next';
import { COMPANY, SITE_URL, absoluteUrl, buildOrganizationSchema } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant' 
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Orange County General Contractor | Stone Development Inc.',
  description:
    'Irvine-based general contractor for Orange County kitchen remodeling, bathroom remodeling, ADUs, home additions, whole-home renovation, custom homes, and restoration.',
  keywords: [
    'Orange County general contractor',
    'Irvine general contractor',
    'kitchen remodeling Orange County',
    'bathroom remodeling Orange County',
    'ADU builder Orange County',
    'home additions Orange County',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: COMPANY.name,
    title: 'Orange County General Contractor | Stone Development Inc.',
    description:
      'Irvine-based contractor for Orange County kitchens, bathrooms, ADUs, additions, whole-home renovation, and custom construction.',
    images: [{ url: '/exit-intent-picture.jpg', width: 1200, height: 630, alt: 'Stone Development Construction' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orange County General Contractor | Stone Development Inc.',
    description:
      'Irvine-based contractor for Orange County kitchens, bathrooms, ADUs, additions, and whole-home renovation.',
    images: ['/exit-intent-picture.jpg']
  },
  alternates: {
    canonical: SITE_URL
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    buildOrganizationSchema(),
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: COMPANY.name,
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
      image: absoluteUrl('/logo.png'),
    },
  ],
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
