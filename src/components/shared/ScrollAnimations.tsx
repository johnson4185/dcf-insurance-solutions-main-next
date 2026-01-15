"use client";

import { motion } from "framer-motion";
import { ReactNode, useMemo } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

const directionOffset = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

// Check for reduced motion preference
const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export const ScrollFadeIn = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
}: ScrollAnimationProps) => {
  const offset = directionOffset[direction];
  const reducedMotion = useMemo(() => prefersReducedMotion(), []);

  return (
    <motion.div
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, ...offset }}
      whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: reducedMotion ? 0 : duration,
        delay: reducedMotion ? 0 : delay,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScrollScale = ({
  children,
  className = "",
  delay = 0,
  duration = 0.65,
}: Omit<ScrollAnimationProps, "direction">) => {
  const reducedMotion = useMemo(() => prefersReducedMotion(), []);

  return (
    <motion.div
      initial={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
      whileInView={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: reducedMotion ? 0 : duration,
        delay: reducedMotion ? 0 : delay,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.12,
}: StaggerContainerProps) => {
  const reducedMotion = useMemo(() => prefersReducedMotion(), []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: reducedMotion ? 0 : staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export const StaggerItem = ({ children, className = "" }: StaggerItemProps) => {
  const reducedMotion = useMemo(() => prefersReducedMotion(), []);

  return (
    <motion.div
      variants={{
        hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: reducedMotion ? 0 : 0.6,
            ease: [0.2, 0.8, 0.2, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Alias for common use case
export const FadeInWhenVisible = ScrollFadeIn;
