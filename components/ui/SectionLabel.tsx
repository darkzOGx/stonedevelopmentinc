import { cn } from "@/lib/utils";

export function SectionLabel({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("flex items-center gap-4 mb-4", className)}>
      <div className="h-[1px] w-8 bg-accent" />
      <span className="text-accent uppercase tracking-[0.2em] text-xs md:text-sm font-semibold">
        {children}
      </span>
    </div>
  );
}
