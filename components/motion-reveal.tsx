"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  fromX?: number;
}

const makeVariants = (fromX?: number): Variants => ({
  hidden: {
    opacity: 0,
    y: fromX ? 0 : 18,
    x: fromX ?? 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

export function MotionReveal({
  children,
  className,
  delay = 0,
  fromX,
}: MotionRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={makeVariants(fromX)}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
