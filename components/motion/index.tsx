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

const viewport = { once: true, amount: 0.2 } as const;

/* ----------------------------------------------------------------------- */

export function FadeIn({
  children,
  className = "",
  delay = 0,
  y = 32,
  duration = 0.7,
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
  const hidden = { opacity: 0, y, scale: 0.985 };
  const shown = { opacity: 1, y: 0, scale: 1 };
  const motionProps =
    start === "mount"
      ? { initial: hidden, animate: shown }
      : {
          initial: hidden,
          whileInView: shown,
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
  stagger = 0.1,
  delayChildren = 0.05,
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
  hidden: { opacity: 0, y: 26, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.62, ease: EASE },
  },
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
