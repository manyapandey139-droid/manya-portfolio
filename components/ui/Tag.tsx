import type { ReactNode } from "react";
import clsx from "clsx";

/** Small pill used for technologies, languages and topics. */
export default function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-border bg-lavender-tint/70 px-3 py-1 text-xs font-medium text-body",
        className
      )}
    >
      {children}
    </span>
  );
}
