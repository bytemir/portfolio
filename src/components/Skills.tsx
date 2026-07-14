"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import TerminalWindow from "@/components/ui/TerminalWindow";
import { personalInfo, skillCategories } from "@/data/portfolioData";

export default function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const activeCategory =
    skillCategories.find((c) => c.id === activeId) ?? skillCategories[0];

  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="02 — Technical Stack"
          title="System Architecture"
        />

        <TerminalWindow title="sysarch — zsh — 80×24">
          <div className="space-y-4">
            <p className="text-muted">
              <span className="text-accent-green">{personalInfo.handle}@arch</span>
              <span className="text-foreground/60">:</span>
              <span className="text-accent">~/portfolio</span>
              <span className="text-foreground/60">$ </span>
              <span className="text-foreground/80">./init_skills.sh</span>
            </p>

            <div className="flex flex-wrap gap-2 border-b border-border pb-4">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveId(category.id)}
                  className={`relative rounded-md px-3 py-1.5 font-mono text-xs transition-colors ${
                    activeId === category.id
                      ? "text-accent"
                      : "text-muted hover:text-foreground/80"
                  }`}
                >
                  {activeId === category.id && (
                    <motion.span
                      layoutId="skill-tab"
                      className="absolute inset-0 rounded-md border border-accent/25 bg-accent/10"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative">{category.label}</span>
                </button>
              ))}
            </div>

            <div className="min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="mb-3 text-accent-green/80">
                    $ {activeCategory.command}
                  </p>

                  <div className="space-y-1">
                    {activeCategory.skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.06,
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex items-center gap-3 py-1"
                      >
                        <span className="text-accent/60">
                          [{String(index + 1).padStart(2, "0")}]
                        </span>
                        <motion.span
                          layoutId={`skill-${activeCategory.id}-${index}`}
                          className="text-foreground/90"
                        >
                          {skill}
                        </motion.span>
                        <span className="ml-auto font-mono text-[10px] text-muted/50">
                          OK
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: activeCategory.skills.length * 0.06 + 0.2 }}
                    className="mt-4 text-accent-green/60"
                  >
                    → {activeCategory.skills.length} modules loaded successfully
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
