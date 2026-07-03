import Reveal from "./Reveal";

const TAGS = [
  "Customer Support",
  "Digital Marketing",
  "AI Agents",
  "Workflow Automation",
  "Prompt Engineering",
  "Product Strategy",
];

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <Reveal>
          <h2>
            Hi, I&apos;m Syed Aanis Wahab.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="about-text">
            <p>
              I&apos;m interested in the intersection of <b>AI, automation, customer experience,
              and product development</b>. I enjoy understanding how systems work, identifying
              inefficiencies, and building practical solutions that reduce manual effort.
            </p>
            <p>
              Over the past few years I&apos;ve worked across <b>customer support, digital
              marketing, automation, and business operations</b>. More recently, my focus has
              shifted toward AI-powered workflows, SaaS products, and intelligent automation.
            </p>
            <p>
              I&apos;m continuously learning modern web technologies while exploring how AI can
              transform the way businesses operate. My goal is to build products and systems
              that are useful, reliable, and centered around real customer needs.
            </p>
            <div className="about-tags">
              {TAGS.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
