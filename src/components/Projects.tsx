"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import GitHubIcon from "@/components/ui/GitHubIcon";
import { useRef, type MouseEvent } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/data/portfolioData";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
    >
      <div className="glass-panel relative h-full overflow-hidden rounded-xl p-6 transition-colors duration-300 group-hover:border-accent/20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative" style={{ transform: "translateZ(20px)" }}>
          <div className="mb-3 flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground">
              {project.title}
            </h3>
            <span className="shrink-0 font-mono text-[10px] text-accent/60">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <p className="mb-4 font-mono text-xs text-accent-green">
            {project.techStack}
          </p>

          <p className="mb-6 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mb-6 grid grid-cols-3 gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-md border border-border bg-surface/80 px-2 py-2 text-center"
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  {metric.label}
                </p>
                <p className="mt-0.5 font-mono text-xs text-accent">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
                >
                  {link.label.includes("GitHub") ||
                  link.url.includes("github") ? (
                    <GitHubIcon className="h-3.5 w-3.5" />
                  ) : (
                    <ExternalLink className="h-3.5 w-3.5" />
                  )}
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label="Selected Work"
          title="My Projects"
        />

        <div
          className="grid gap-6 md:grid-cols-2"
          style={{ perspective: "1200px" }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
