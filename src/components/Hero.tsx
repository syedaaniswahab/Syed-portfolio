"use client";

import dynamic from "next/dynamic";
import HeroCanvas from "./HeroCanvas";
import ErrorBoundary from "./ErrorBoundary";
import { useUI } from "./UIProvider";
import { PROFILE } from "@/lib/data";

const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => <div className="hero-3d-fallback" />,
});

export default function Hero() {
  const { openChat } = useUI();

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="top">
      <HeroCanvas />
      <div className="wrap hero-inner">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="eyebrow">AI Automation Builder</div>
            <h1>
              Building AI that helps <span className="accent">people work better.</span>
            </h1>
            <p className="hero-sub">
              I design AI-powered workflows, customer success systems, and automation that help
              teams spend less time on repetitive work and more time creating value.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary" onClick={scrollTo("projects")}>
                View Projects
              </a>
              <a href="#resume" className="btn" onClick={scrollTo("resume")}>
                Download Resume
              </a>
              <button className="btn btn-ghost" onClick={openChat}>
                Ask AI About Me →
              </button>
            </div>
            <div className="hero-meta">
              <span>Focus <b>AI Agents · Automation · Customer Success</b></span>
              <span>Based <b>{PROFILE.location} (remote)</b></span>
              <span>Status <b>Open to opportunities</b></span>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <ErrorBoundary fallback={<div className="hero-3d-fallback" />}>
              <Hero3D />
            </ErrorBoundary>
          </div>
        </div>
      </div>
      <div className="scroll-cue">
        <span>SCROLL</span>
        <span className="line" />
      </div>
    </section>
  );
}
