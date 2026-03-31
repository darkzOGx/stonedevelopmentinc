import { Metadata } from 'next';
import PortfolioClient from './PortfolioClient';

export const metadata: Metadata = {
  title: 'Portfolio Case Studies | Stone Development Inc.',
  description: 'Explore Orange County remodeling, addition, ADU, and renovation case studies from Stone Development Inc.',
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
