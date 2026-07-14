"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { research } from "@/data/portfolioData";

export default function Research() {
  return (
    <section id="research" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="04 — Independent Research"
          title="Preprints & Publications"
        />

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel-glow relative overflow-hidden rounded-xl"
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent via-accent-green to-transparent" />

          <div className="border-b border-border px-8 py-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded border border-border bg-surface px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                Preprint
              </span>
              <span className="font-mono text-xs text-accent/70">
                {research.focus}
              </span>
            </div>
          </div>

          <div className="space-y-6 px-8 py-8">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {research.title}
              </h3>
              <p className="mt-2 font-mono text-sm text-muted">
                Independent Research · Theoretical Physics
              </p>
            </div>

            <div className="space-y-4 border-l border-border pl-6">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Abstract
              </p>
              <ul className="space-y-4">
                {research.summaryPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="relative text-sm leading-relaxed text-muted"
                  >
                    <span className="absolute -left-6 top-2 h-1.5 w-1.5 rounded-full bg-accent/60" />
                    {point.split(/(\[[^\]]+\]|ℏ)/g).map((part, i) => {
                      if (part === "ℏ") {
                        return (
                          <span key={i} className="text-accent">
                            ℏ
                          </span>
                        );
                      }
                      if (part.startsWith("[") && part.endsWith("]")) {
                        return (
                          <span key={i} className="font-mono text-accent-green">
                            {part}
                          </span>
                        );
                      }
                      return part;
                    })}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <motion.a
                href={research.preprintUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 rounded-lg border border-accent/30 bg-accent/10 px-6 py-3 font-mono text-sm text-accent transition-all hover:border-accent/50 hover:bg-accent/20"
              >
                <FileText className="h-4 w-4" />
                Read Preprint PDF
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </motion.span>
              </motion.a>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
