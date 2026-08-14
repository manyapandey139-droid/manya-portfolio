import type { ReactNode } from "react";
import clsx from "clsx";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Optional action rendered on the right (desktop) / below (mobile). */
  action?: ReactNode;
  className?: string;
};

/** Shared section header: eyebrow + serif title + optional supporting copy. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={clsx(
        "mb-14 flex flex-col gap-6 md:mb-16",
        !centered && action && "md:flex-row md:items-end md:justify-between",
        className
      )}
    >
      <Reveal className={clsx("max-w-2xl", centered && "mx-auto text-center")}>
        <p className={clsx("section-eyebrow mb-5", centered && "justify-center")}>
          {eyebrow}
        </p>

        <h2 className="font-display text-[clamp(2rem,4.4vw,3.1rem)] font-semibold leading-[1.12] tracking-tight text-ink text-balance">
          {title}
        </h2>

        {description ? (
          <p className="mt-5 text-base leading-relaxed text-secondary md:text-lg">
            {description}
          </p>
        ) : null}
      </Reveal>

      {action ? (
        <Reveal delay={0.1} className={clsx("shrink-0", centered && "mx-auto")}>
          {action}
        </Reveal>
      ) : null}
    </div>
  );
}
