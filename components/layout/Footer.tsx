import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background-surface pt-20 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <img src="/logo.png" alt="Stone Development" className="h-10 w-auto" />
            </Link>
            <p className="text-foreground-secondary text-lg max-w-md font-serif italic mb-8">
              "Licensed, insured, and built on 20+ years of delivering exceptional construction across Southern California."
            </p>
          </div>

          <div>
            <h4 className="text-foreground uppercase tracking-widest text-sm font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-foreground-secondary hover:text-accent transition-colors text-sm">About</Link></li>
              <li><Link href="/services" className="text-foreground-secondary hover:text-accent transition-colors text-sm">Services</Link></li>
              <li><Link href="/locations" className="text-foreground-secondary hover:text-accent transition-colors text-sm">Service Areas</Link></li>
              <li><Link href="/portfolio" className="text-foreground-secondary hover:text-accent transition-colors text-sm">Portfolio</Link></li>
              <li><Link href="/contact" className="text-foreground-secondary hover:text-accent transition-colors text-sm">Schedule Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground uppercase tracking-widest text-sm font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services/kitchen-remodeling" className="text-foreground-secondary hover:text-accent transition-colors text-sm">Kitchen Remodeling</Link></li>
              <li><Link href="/services/bathroom-remodeling" className="text-foreground-secondary hover:text-accent transition-colors text-sm">Bathroom Remodeling</Link></li>
              <li><Link href="/services/adu-construction" className="text-foreground-secondary hover:text-accent transition-colors text-sm">ADU Construction</Link></li>
              <li><Link href="/services/home-additions" className="text-foreground-secondary hover:text-accent transition-colors text-sm">Home Additions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground uppercase tracking-widest text-sm font-semibold mb-6">Markets</h4>
            <ul className="space-y-4">
              <li><Link href="/locations/irvine" className="text-foreground-secondary hover:text-accent transition-colors text-sm">Irvine</Link></li>
              <li><Link href="/locations/newport-beach" className="text-foreground-secondary hover:text-accent transition-colors text-sm">Newport Beach</Link></li>
              <li><Link href="/locations/huntington-beach" className="text-foreground-secondary hover:text-accent transition-colors text-sm">Huntington Beach</Link></li>
              <li><Link href="/locations/costa-mesa" className="text-foreground-secondary hover:text-accent transition-colors text-sm">Costa Mesa</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground uppercase tracking-widest text-sm font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/resources" className="text-foreground-secondary hover:text-accent transition-colors text-sm">Resource Hub</Link></li>
              <li><Link href="/resources/cost-guide" className="text-foreground-secondary hover:text-accent transition-colors text-sm">Cost Guide</Link></li>
              <li><Link href="/blog" className="text-foreground-secondary hover:text-accent transition-colors text-sm">Blog</Link></li>
              <li><Link href="/contact" className="text-foreground-secondary hover:text-accent transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-border-subtle py-8 text-center text-xs text-foreground-secondary uppercase tracking-wider px-6 flex flex-col md:flex-row items-center justify-center gap-4">
        <span>&copy; 2026 Stone Development Inc. All rights reserved.</span>
        <span className="hidden md:inline text-accent">|</span>
        <span>License #1146382</span>
        <span className="hidden md:inline text-accent">|</span>
        <span>Licensed, Bonded & Insured</span>
      </div>
    </footer>
  );
}
