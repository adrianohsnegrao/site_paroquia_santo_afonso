import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-gold text-brand-green-deep hover:bg-brand-gold-light shadow-soft",
  secondary:
    "bg-brand-green text-white hover:bg-brand-green-dark shadow-soft",
  outline:
    "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white",
  ghost: "text-brand-green hover:bg-brand-green/10",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface ButtonProps {
  as?: "a" | "button";
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  "aria-label"?: string;
}

/** Botão/Link reutilizável com variantes de cor e tamanho. */
export function Button({
  as = "a",
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-200",
    variants[variant],
    sizes[size],
    className,
  );

  if (as === "a") {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
