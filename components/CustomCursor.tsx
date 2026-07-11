"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarsePointer) return;

    const ring = { x: 0, y: 0 };
    const dot = { x: 0, y: 0 };
    let target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    function onMove(e: MouseEvent) {
      target = { x: e.clientX, y: e.clientY };
    }

    let rafId: number;
    function animate() {
      dot.x = target.x;
      dot.y = target.y;
      ring.x += (target.x - ring.x) * 0.16;
      ring.y += (target.y - ring.y) * 0.16;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dot.x}px, ${dot.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(animate);

    const interactiveEls = document.querySelectorAll(
      "a, button, [data-cursor-hover]"
    );
    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot bg-accent"
        style={{ width: 6, height: 6 }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="cursor-ring border transition-[width,height,border-color] duration-200"
        style={{
          width: isHovering ? 52 : 32,
          height: isHovering ? 52 : 32,
          borderColor: isHovering ? "#8B5CF6" : "#A1A1AA",
          borderWidth: 1,
        }}
        aria-hidden="true"
      />
    </>
  );
}
