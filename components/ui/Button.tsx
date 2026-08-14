import type { AnchorHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  /** Adds target/rel automatically for absolute URLs. */
  external?: boolean;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-soft hover:bg-accent-deep hover:shadow-lift hover:-translate-y-0.5",
  secondary:
    "border border-border-strong bg-white/70 text-ink backdrop-blur-sm hover:border-accent hover:text-accent hover:-translate-y-0.5 hover:shadow-soft",
  ghost:
    "text-accent hover:text-accent-deep hover:gap-3",
};

const sizes: Record<Size, string> = {
  md: "px-7 py-3.5 text-sm",
  sm: "px-5 py-2.5 text-sm",
};

/**
 * All call-to-actions on the site are links, so this is a single anchor
 * component rather than a <button>. Keyboard focus is handled globally
 * in globals.css.
 */
export default function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  external,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const isExternal = external ?? /^https?:\/\//i.test(href);
  const isGhost = variant === "ghost";

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={clsx(base, variants[variant], !isGhost && sizes[size], className)}
      {...rest}
    >
      {children}
    </a>
  );
}
