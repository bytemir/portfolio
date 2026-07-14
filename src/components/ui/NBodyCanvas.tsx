"use client";

import { useEffect, useRef, useCallback } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  mass: number;
  radius: number;
};

const PARTICLE_COUNT = 48;
const G = 0.8;
const DAMPING = 0.9995;
const SOFTENING = 40;

function createParticles(width: number, height: number): Particle[] {
  const particles: Particle[] = [];
  const cx = width / 2;
  const cy = height / 2;

  particles.push({
    x: cx,
    y: cy,
    vx: 0,
    vy: 0,
    mass: 120,
    radius: 6,
  });

  for (let i = 1; i < PARTICLE_COUNT; i++) {
    const angle = (i / (PARTICLE_COUNT - 1)) * Math.PI * 2;
    const orbit = 80 + (i % 5) * 35;
    const speed = Math.sqrt((G * 120) / orbit) * 0.85;

    particles.push({
      x: cx + Math.cos(angle) * orbit,
      y: cy + Math.sin(angle) * orbit,
      vx: -Math.sin(angle) * speed,
      vy: Math.cos(angle) * speed,
      mass: 1 + (i % 3),
      radius: 1.5 + (i % 3) * 0.5,
    });
  }

  return particles;
}

export default function NBodyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const frameRef = useRef<number>(0);
  const sizeRef = useRef({ width: 0, height: 0 });

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio, 2);
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    sizeRef.current = { width, height };
    particlesRef.current = createParticles(width, height);
  }, []);

  useEffect(() => {
    initCanvas();

    const handleResize = () => initCanvas();
    window.addEventListener("resize", handleResize);

    const canvas = canvasRef.current;
    if (!canvas) return () => window.removeEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const ctx = canvas.getContext("2d");
    if (!ctx) return () => window.removeEventListener("resize", handleResize);

    const simulate = () => {
      const { width, height } = sizeRef.current;
      const dpr = Math.min(window.devicePixelRatio, 2);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        let fx = 0;
        let fy = 0;

        for (let j = 0; j < particles.length; j++) {
          if (i === j) continue;

          const dx = particles[j].x - particles[i].x;
          const dy = particles[j].y - particles[i].y;
          const distSq = dx * dx + dy * dy + SOFTENING;
          const dist = Math.sqrt(distSq);
          const force = (G * particles[i].mass * particles[j].mass) / distSq;

          fx += (force * dx) / dist;
          fy += (force * dy) / dist;
        }

        if (mouse.active) {
          const mdx = mouse.x - particles[i].x;
          const mdy = mouse.y - particles[i].y;
          const mDistSq = mdx * mdx + mdy * mdy + 2000;
          const mDist = Math.sqrt(mDistSq);
          const mForce = 800 / mDistSq;

          fx += (mForce * mdx) / mDist;
          fy += (mForce * mdy) / mDist;
        }

        particles[i].vx += fx / particles[i].mass;
        particles[i].vy += fy / particles[i].mass;
        particles[i].vx *= DAMPING;
        particles[i].vy *= DAMPING;
        particles[i].x += particles[i].vx;
        particles[i].y += particles[i].vy;

        if (particles[i].x < 0 || particles[i].x > width) {
          particles[i].vx *= -0.8;
          particles[i].x = Math.max(0, Math.min(width, particles[i].x));
        }
        if (particles[i].y < 0 || particles[i].y > height) {
          particles[i].vy *= -0.8;
          particles[i].y = Math.max(0, Math.min(height, particles[i].y));
        }
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particles[i].x;
          const dy = particles[j].y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const glow = Math.min(speed / 3, 1);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius + glow * 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${0.04 + glow * 0.06})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle =
          p.mass > 50
            ? "rgba(255, 255, 255, 0.9)"
            : `rgba(0, 229, 255, ${0.5 + glow * 0.5})`;
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(simulate);
    };

    frameRef.current = requestAnimationFrame(simulate);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(frameRef.current);
    };
  }, [initCanvas]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
