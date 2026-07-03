import Reveal from "./Reveal";
import { TIMELINE } from "@/lib/data";

export default function Timeline() {
  return (
    <section id="timeline">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <h2>How I got here</h2>
            <p>Not a straight line — a series of &quot;why is this still done by hand?&quot; moments.</p>
          </div>
        </Reveal>
        <div className="timeline-track">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.05}>
              <div className={`tl-item${t.current ? " active" : ""}`}>
                <div className="tl-year">{t.year}</div>
                <div className="tl-dot" />
                <div>
                  <h4>
                    {t.title}{" "}
                    {t.current && <span className="tl-current">● CURRENT</span>}
                  </h4>
                  <p>{t.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
