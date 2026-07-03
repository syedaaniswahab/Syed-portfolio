"use client";

import { useRef } from "react";
import Reveal from "./Reveal";
import { useUI } from "./UIProvider";
import { PROJECTS, type Project } from "@/lib/data";

const NODE_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <circle cx="6" cy="6" r="2.4" />
    <circle cx="18" cy="6" r="2.4" />
    <circle cx="12" cy="18" r="2.4" />
    <path d="M8.1 7.2 L10.5 16.2 M15.9 7.2 L13.5 16.2 M8.4 6 H15.6" />
  </svg>
);

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { openProject } = useUI();
  const cardRef = useRef<HTMLButtonElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -6;
    const ry = ((x / rect.width) - 0.5) * 6;
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  };
  const handleLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
  };

  return (
    <Reveal delay={(index % 2) * 0.06}>
      <button
        ref={cardRef}
        className="proj-card"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={() => openProject(project)}
      >
        <div className="proj-top">
          <span className="proj-index">
            {String(index + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
          </span>
          <div className="proj-node">{NODE_ICON}</div>
        </div>
        <h3>{project.title}</h3>
        <p className="proj-problem">{project.problem}</p>
        <div className="proj-stack">
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <div className="proj-outcome">→ {project.outcome}</div>
      </button>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <h2>Selected work</h2>
            <p>Each one started as a real, specific annoyance. Click a card for the full case study.</p>
          </div>
        </Reveal>
        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
