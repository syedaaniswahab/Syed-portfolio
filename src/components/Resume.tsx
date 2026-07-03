"use client";

import Reveal from "./Reveal";
import { useUI } from "./UIProvider";
import { EXPERIENCE, EDUCATION, SKILLS, PROFILE } from "@/lib/data";

export default function Resume() {
  const { showToast } = useUI();

  return (
    <section id="resume">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <h2>Resume</h2>
            <p>The short version. Full PDF below.</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="resume-panel">
            <div className="resume-top">
              <div>
                <h3 style={{ fontSize: 24, marginBottom: 6 }}>{PROFILE.name}</h3>
                <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 4 }}>{PROFILE.tagline}</p>
                <p style={{ color: "var(--muted-2)", fontSize: 12.5, fontFamily: "var(--font-mono)" }}>{PROFILE.location}</p>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => showToast("Add a resume PDF link to wire this button up.")}
              >
                Download PDF ↓
              </button>
            </div>

            <p style={{ color: "var(--muted)", fontSize: 15, maxWidth: 720, marginBottom: 46 }}>
              {PROFILE.summary}
            </p>

            <div className="resume-cols">
              <div className="resume-col">
                <h5>Experience</h5>
                {EXPERIENCE.map((e) => (
                  <div className="exp-item" key={e.role}>
                    <div className="role">{e.role}</div>
                    <div className="org">{e.org}</div>
                    <div className="when">{e.when}</div>
                    <div className="desc">{e.desc}</div>
                  </div>
                ))}
                <h5 style={{ marginTop: 36 }}>Education</h5>
                <div className="exp-item">
                  <div className="role">{EDUCATION.program}</div>
                  <div className="org">{EDUCATION.institution}</div>
                  <div className="when">{EDUCATION.when}</div>
                </div>
              </div>
              <div className="resume-col">
                <h5>Skills</h5>
                <div className="skill-categories">
                  {SKILLS.map((group) => (
                    <div className="skill-category" key={group.category}>
                      <div className="skill-category-title">{group.category}</div>
                      <div className="skill-chips">
                        {group.items.map((item) => (
                          <span className="tag" key={item}>{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
