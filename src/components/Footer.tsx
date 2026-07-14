"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import GitHubIcon from "@/components/ui/GitHubIcon";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center sm:text-left"
        >
          <p className="font-mono text-sm text-foreground/80">
            <span className="text-accent">~/</span>
            {personalInfo.handle}
          </p>
          <p className="mt-1 font-mono text-xs text-muted">
            © 2026 · Emir Alam
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent/30 hover:text-accent"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent/30 hover:text-accent"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
