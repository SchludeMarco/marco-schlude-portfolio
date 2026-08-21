"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** "view" animiert beim Scrollen ins Bild, "mount" sofort beim Rendern (z.B. Hero). */
  mode?: "view" | "mount";
}

export function StaggerGroup({ children, className, mode = "view" }: StaggerProps) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // See Reveal for why this is gated on `mounted`: shouldReduceMotion
  // differs between server (always null) and the client's first render,
  // so branching on it immediately would cause a hydration mismatch.
  if (mounted && shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      {...(mode === "mount"
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, margin: "-60px" } })}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: StaggerProps) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (mounted && shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
