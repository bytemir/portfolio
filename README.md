# Portfolio — Physics & Low-Level Systems

A bespoke, single-page portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Features

- **N-Body Canvas Hero** — Real-time gravitational simulation with cursor interaction
- **System Architecture Terminal** — Interactive skills panel with `layoutId` tab transitions
- **3D Project Cards** — Mouse-driven tilt with technical metrics on hover
- **Research Preprint** — Academic arXiv-style layout
- **Education Timeline** — Circular progress tracker for degree completion
- **Achievements** — Animated chessboard micro-interaction

## Getting Started

```bash
cd portfolio-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```text
src/
  app/           # Layout, globals, main page
  components/    # Hero, Skills, Projects, Research, etc.
  components/ui/ # Reusable atoms (Canvas, Terminal, Button)
  data/          # portfolioData.ts — single source of truth
```

## Customization

Edit `src/data/portfolioData.ts` to update all copy, projects, skills, and links.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
