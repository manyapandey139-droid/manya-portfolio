"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 22, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = "";
          }, 400);
        }
        return next;
      });
    }, 140);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <div className="font-display text-sm tracking-[0.3em] text-secondary uppercase mb-6">
            Manya Pandey
          </div>
          <div className="w-56 h-px bg-border relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-accent"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-4 font-mono text-xs text-secondary">
            {Math.floor(progress)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
