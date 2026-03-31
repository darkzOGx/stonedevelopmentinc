export interface StatItem {
  label: string;
  value: string;
  detail: string;
}

export function StatGrid({ items }: { items: StatItem[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-border-subtle bg-background-surface p-6"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
            {item.label}
          </p>
          <p className="mt-3 text-2xl font-serif text-foreground">{item.value}</p>
          <p className="mt-3 text-sm leading-6 text-foreground-secondary">
            {item.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
