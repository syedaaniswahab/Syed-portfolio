"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number };

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, nodes: Node[] = [];
    let rafId = 0;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      w = canvas!.width = canvas!.offsetWidth * dpr;
      h = canvas!.height = canvas!.offsetHeight * dpr;
    }
    function initNodes() {
      const dpr = window.devicePixelRatio || 1;
      const count = Math.max(18, Math.floor((canvas!.offsetWidth * canvas!.offsetHeight) / 38000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18 * dpr,
        vy: (Math.random() - 0.5) * 0.18 * dpr,
        r: (Math.random() * 1.6 + 1) * dpr,
      }));
    }
    function draw() {
      ctx!.clearRect(0, 0, w, h);
      const dpr = window.devicePixelRatio || 1;
      const maxDist = 165 * dpr;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
        }
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x, dy = n.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const op = (1 - dist / maxDist) * 0.16;
            const grad = ctx!.createLinearGradient(n.x, n.y, m.x, m.y);
            grad.addColorStop(0, `rgba(255,157,108,${op})`);
            grad.addColorStop(1, `rgba(139,124,255,${op})`);
            ctx!.strokeStyle = grad;
            ctx!.lineWidth = dpr;
            ctx!.beginPath();
            ctx!.moveTo(n.x, n.y);
            ctx!.lineTo(m.x, m.y);
            ctx!.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx!.beginPath();
        ctx!.fillStyle = "rgba(200,200,255,0.45)";
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fill();
      }
      rafId = requestAnimationFrame(draw);
    }

    resize();
    initNodes();
    draw();

    const handleResize = () => { resize(); initNodes(); };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas id="hero-canvas" ref={canvasRef} aria-hidden="true" />;
}
