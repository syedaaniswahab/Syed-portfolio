import Reveal from "./Reveal";
import { PROFILE } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal>
          <div className="contact-box">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Let&apos;s talk</div>
            <h2>Have a process that&apos;s still done by hand?</h2>
            <p>
              I&apos;m currently looking for remote roles in customer success, automation, and AI
              systems — and open to project work in the meantime.
            </p>
            <div className="contact-links">
              <a href={`mailto:${PROFILE.email}`} className="btn btn-primary">Email me</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
            </div>
            <p style={{ marginTop: 28, marginBottom: 0, fontSize: 12.5, fontFamily: "var(--font-mono)", color: "var(--muted-2)" }}>
              Based in {PROFILE.location} — open to remote work worldwide.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
