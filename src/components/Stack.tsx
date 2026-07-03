"use client";

import { useRef } from "react";
import Reveal from "./Reveal";
import { STACK } from "@/lib/data";

function StackTile({ name }: { name: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -10;
    const ry = ((x / rect.width) - 0.5) * 10;
    el.style.transform = `perspective(500px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  };
  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(500px) rotateX(0) rotateY(0)";
  };

  return (
    <div
      ref={ref}
      className="stack-item"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="stack-glyph">{name.slice(0, 2).toUpperCase()}</div>
      <span>{name}</span>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <h2>The toolkit</h2>
            <p>What I actually reach for, day to day — not a list of buzzwords.</p>
          </div>
        </Reveal>
        <div className="stack-grid">
          {STACK.map((s, i) => (
            <Reveal key={s} delay={(i % 6) * 0.03}>
              <StackTile name={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
