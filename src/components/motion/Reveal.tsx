import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface RevealProps {
  children: ReactNode;
  /** Delay in seconds before the reveal begins. Default: 0. */
  delay?: number;
  /** Duration in seconds. Default: 0.5. */
  duration?: number;
  /** Initial vertical offset in pixels. Default: 16. */
  y?: number;
  /** Optional extra classes. */
  className?: string;
}

/**
 * Reveals its children with a fade and slide when they enter the viewport.
 * Motion for React handles the animation; reduced motion is respected.
 */
export default function Reveal({
  children,
  delay = 0,
  duration = 0.5,
  y = 16,
  className,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}