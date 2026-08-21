"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // shouldReduceMotion reads matchMedia synchronously on the client but is
  // always null during SSR — branching on it before mount would render a
  // different element on the client's first pass than the server sent,
  // which React flags as a hydration mismatch. Gating on `mounted` keeps
  // the first client render identical to the server, then swaps after.
  if (mounted && shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
