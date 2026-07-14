"use client";

import { motion } from "framer-motion";
import { Dumbbell, Trophy, Zap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements } from "@/data/portfolioData";

function ChessBoard() {
  const squares = Array.from({ length: 64 }, (_, i) => {
    const row = Math.floor(i / 8);
    const col = i % 8;
    return (row + col) % 2 === 0;
  });

  return (
    <svg
      viewBox="0 0 80 80"
      className="h-16 w-16 shrink-0 opacity-80"
      aria-hidden="true"
    >
      {squares.map((isLight, i) => {
        const row = Math.floor(i / 8);
        const col = i % 8;
        return (
          <motion.rect
            key={i}
            x={col * 10}
            y={row * 10}
            width={10}
            height={10}
            fill={isLight ? "rgba(255,255,255,0.08)" : "rgba(0,229,255,0.12)"}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.008, duration: 0.2 }}
          />
        );
      })}
      <motion.circle
        cx="25"
        cy="25"
        r="3.5"
        fill="rgba(255,255,255,0.9)"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
      />
      <motion.circle
        cx="55"
        cy="55"
        r="3"
        fill="rgba(0,229,255,0.9)"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, type: "spring", stiffness: 300 }}
      />
    </svg>
  );
}

const cards = [
  {
    key: "athletics",
    icon: Dumbbell,
    data: achievements.athletics,
    accent: "text-accent-green",
  },
  {
    key: "strategic",
    icon: Trophy,
    data: achievements.strategic,
    accent: "text-accent",
    customVisual: true,
  },
  {
    key: "hackathons",
    icon: Zap,
    data: achievements.hackathons,
    accent: "text-accent-green",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Beyond Programming"
          title="Achievements & Interests"
        />

        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-panel group flex flex-col rounded-xl p-6 transition-colors hover:border-accent/15"
            >
              <div className="mb-4 flex items-start justify-between">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface ${card.accent}`}
                >
                  <card.icon className="h-5 w-5" />
                </div>
                {card.customVisual && <ChessBoard />}
              </div>

              <h3 className="mb-2 font-semibold tracking-tight text-foreground">
                {card.data.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {card.data.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
