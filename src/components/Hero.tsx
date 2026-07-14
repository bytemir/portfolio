"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import GitHubIcon from "@/components/ui/GitHubIcon";
import { useEffect, useState } from "react";
import NBodyCanvas from "@/components/ui/NBodyCanvas";
import { navLinks, personalInfo } from "@/data/portfolioData";

function SplitText({ text }: { text: string }) {
  return (
    <span className="inline-flex flex-wrap">
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3 + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function Typewriter({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayed(text.slice(0, index));
        index++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="font-mono text-sm text-accent-green sm:text-base">
      <span className="text-muted">{"> "}</span>
      {displayed}
      {!done && <span className="cursor-blink text-accent-green">▌</span>}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <NBodyCanvas />

      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />

      <nav className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <motion.a
          href="#hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-sm tracking-wider text-foreground/90"
        >
          <span className="text-accent">~/</span>
          {personalInfo.handle}
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="hidden items-center gap-6 md:flex"
        >
          {navLinks.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-wide text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </nav>

      <div className="relative z-10 mx-auto flex flex-1 w-full max-w-6xl flex-col justify-center px-6 pb-24 pt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse" />
          <span className="font-mono text-xs text-muted">
            {personalInfo.technicalTagline}
          </span>
        </motion.div>

        <h1 className="max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
          <SplitText text={personalInfo.headline} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 min-h-[1.5rem]"
        >
          <Typewriter text={personalInfo.subheadline} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-6 py-3 font-mono text-sm text-accent transition-all hover:border-accent/50 hover:bg-accent/20"
          >
            View Projects
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-mono text-sm text-muted transition-all hover:border-foreground/20 hover:text-foreground"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-muted/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
