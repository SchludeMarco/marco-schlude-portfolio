"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
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
