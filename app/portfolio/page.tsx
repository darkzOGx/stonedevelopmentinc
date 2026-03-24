import { Metadata } from 'next';
import PortfolioClient from './PortfolioClient';

export const metadata: Metadata = {
  title: 'Our Portfolio | Stone Development Inc.',
  description: 'Explore our recent luxury residential and commercial construction projects across Southern California. Browse by remodeling, new construction, and ADUs.',
  alternates: { canonical: 'https://www.stonedevelopmentinc.com/portfolio' }
}

export default function PortfolioPage() {
  return (
    <main>
      <div className="speakable-summary sr-only">
        Stone Development's portfolio showcases premier luxury residential remodeling, new construction, ADUs, and commercial projects across Southern California.
      </div>
      <PortfolioClient />
    </main>
  );
}
