import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface StaggerProps {
  children: ReactNode;
  /** Delay between each child's animation, in seconds. Default: 0.06. */
  staggerDelay?: number;
  /** Delay before the first child animates, in seconds. Default: 0. */
  initialDelay?: number;
  /** Optional extra classes on the container. */
  className?: string;
}

interface StaggerItemProps {
  children: ReactNode;
  /** Optional extra classes on the item. */
  className?: string;
}

const containerVariants = (
  staggerDelay: number,
  initialDelay: number,
) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: initialDelay,
    },
  },
});

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/**
 * Stagger container for list animations. Wrap each animated child in
 * <StaggerItem>. Respects reduced motion.
 */
export default function Stagger({
  children,
  staggerDelay = 0.06,
  initialDelay = 0,
  className,
}: StaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants(staggerDelay, initialDelay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}