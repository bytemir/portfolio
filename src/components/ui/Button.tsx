"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: "primary" | "ghost" | "outline";
  children: ReactNode;
  href?: string;
};

const variants = {
  primary:
    "bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 hover:border-accent/50",
  ghost: "bg-transparent text-foreground/80 hover:text-accent hover:bg-accent/5",
  outline:
    "bg-transparent text-foreground border border-border hover:border-accent/40 hover:text-accent",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 font-mono text-sm transition-colors ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      {...props}
    >
      {children}
    </motion.button>
  );
}
