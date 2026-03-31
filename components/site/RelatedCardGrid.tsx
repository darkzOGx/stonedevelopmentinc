import Link from 'next/link';
import type { RelatedLink } from '@/lib/related-content';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function RelatedCardGrid({
  label,
  heading,
  items,
}: {
  label: string;
  heading: string;
  items: RelatedLink[];
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-foreground">
        {heading}
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-2xl border border-border-subtle bg-background-surface p-6 transition-colors hover:border-accent/40"
          >
            <h3 className="font-serif text-2xl text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-foreground-secondary">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
