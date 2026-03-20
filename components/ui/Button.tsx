import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    const variants = {
      primary: "bg-accent text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-accent/90 active:scale-[0.98] border border-transparent",
      secondary: "bg-background-surface text-foreground shadow-sm hover:shadow-md border border-border-subtle hover:border-black/20 hover:-translate-y-0.5 active:scale-[0.98]",
      outline: "border border-border-accent bg-transparent text-accent hover:bg-accent hover:text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]",
      ghost: "hover:bg-accent/10 hover:text-accent text-foreground transition-colors",
      link: "text-accent underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "h-12 px-8 py-2 md:px-10",
      sm: "h-10 px-6 text-xs md:text-sm",
      lg: "h-14 px-12 text-sm md:text-base",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex uppercase tracking-[0.2em] items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-full",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
