"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger helper — delay in seconds. */
  delay?: number;
  /** Direction the element travels in from. */
  from?: "bottom" | "left" | "right";
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
};

const OFFSET = 22;

/**
 * Single reveal-on-scroll wrapper used by every section, so the motion
 * language stays consistent and `prefers-reduced-motion` is handled once.
 */
export default function Reveal({
  children,
  delay = 0,
  from = "bottom",
  className,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  const hidden = reduceMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: from === "bottom" ? OFFSET : 0,
        x: from === "left" ? -OFFSET : from === "right" ? OFFSET : 0,
      };

  return (
    <MotionTag
      className={className}
      initial={hidden}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: reduceMotion ? 0.25 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
