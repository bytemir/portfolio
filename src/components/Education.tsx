"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-24">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label="Academic Path"
          title="Education"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel max-w-2xl rounded-xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10">
              <GraduationCap className="h-6 w-6 text-accent" />
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  Degree
                </p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight">
                  {education.degree} (Expected {education.expectedGraduation})
                </h3>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  Current Status
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {education.status}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
