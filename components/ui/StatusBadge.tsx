import clsx from "clsx";
import type { ProjectStatus } from "@/lib/featured-work";

/**
 * Status pill shared by Featured Work and GitHub cards.
 * Values come from lib/featured-work.ts and lib/github-config.ts.
 */
export default function StatusBadge({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  const completed = status === "completed";

  return (
    <span
      className={clsx(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide",
        completed
          ? "border-accent-soft bg-lavender-tint text-accent-deep"
          : "border-blush bg-blush-tint text-[#A64A73]",
        className
      )}
    >
      <span
        aria-hidden="true"
        className={clsx(
          "h-1.5 w-1.5 rounded-full",
          completed ? "bg-accent" : "bg-[#D9789F]"
        )}
      />
      {completed ? "Completed" : "In Progress"}
    </span>
  );
}
