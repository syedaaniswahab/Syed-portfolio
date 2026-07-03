import Reveal from "./Reveal";
import { BLOG } from "@/lib/data";

export default function Writing() {
  return (
    <section id="writing">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <h2>Writing</h2>
            <p>Notes from building — what worked, what broke, what I&apos;d do differently.</p>
          </div>
        </Reveal>
        <div className="blog-grid">
          {BLOG.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.06}>
              <div className="blog-card">
                <span className="blog-cat">{b.cat}</span>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
                <div className="blog-meta">
                  <span>{b.date}</span>
                  <span>{b.time} read</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
