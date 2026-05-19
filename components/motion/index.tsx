"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Start = "mount" | "view";
type Tag = "div" | "li" | "ul" | "ol" | "span";

const tagMap = {
  div: motion.div,
  li: motion.li,
  ul: motion.ul,
  ol: motion.ol,
  span: motion.span,
} as const;

const viewport = { once: true, amount: 0.25 } as const;

/* ----------------------------------------------------------------------- */

export function FadeIn({
  children,
  className = "",
  delay = 0,
  y = 16,
  duration = 0.55,
  start = "view",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  start?: Start;
  as?: Tag;
}) {
  const MotionTag = tagMap[as];
  const motionProps =
    start === "mount"
      ? { initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y },
          whileInView: { opacity: 1, y: 0 },
          viewport,
        };

  return (
    <MotionTag
      className={className}
      {...motionProps}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

/* ----------------------------------------------------------------------- */

export function Stagger({
  children,
  className = "",
  start = "view",
  stagger = 0.08,
  delayChildren = 0.04,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  start?: Start;
  stagger?: number;
  delayChildren?: number;
  as?: Tag;
}) {
  const MotionTag = tagMap[as];
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
  const motionProps =
    start === "mount"
      ? { initial: "hidden" as const, animate: "show" as const }
      : {
          initial: "hidden" as const,
          whileInView: "show" as const,
          viewport,
        };

  return (
    <MotionTag className={className} variants={container} {...motionProps}>
      {children}
    </MotionTag>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function StaggerItem({
  children,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
}) {
  const MotionTag = tagMap[as];
  return (
    <MotionTag className={className} variants={itemVariants}>
      {children}
    </MotionTag>
  );
}
