export const PROFILE = {
  name: "Syed Aanis Wahab",
  tagline: "AI Automation • Customer Success • Technical Support • Product Thinking",
  email: "workmail.syed@gmail.com",
  linkedin: "https://linkedin.com/in/syedaanis",
  github: "https://github.com/syedaaniswahab",
  location: "Bhopal, India",
  siteUrl: "https://syed-portfolio-delta.vercel.app/", // TODO: replace with your real deployed domain
  bio: "Works at the intersection of AI, automation, customer experience, and product development. Background spans customer support, digital marketing, automation, and business operations; recent focus is AI-powered workflows, SaaS products, and intelligent automation. Based in Bhopal, India, open to remote roles.",
  summary: "I'm passionate about building AI-powered workflows that simplify business operations and improve customer experiences. My background spans customer support, automation, SaaS, digital marketing, and product strategy. I enjoy solving operational problems, designing scalable processes, and exploring how AI can make businesses more efficient.",
};

export type TimelineEntry = {
  year: string;
  title: string;
  desc: string;
  current?: boolean;
};

export const TIMELINE: TimelineEntry[] = [
  { year: "Year 1", title: "Customer Support", desc: "Answered the same questions on repeat. Learned exactly where a business's process breaks down, because customers tell you immediately." },
  { year: "Year 2", title: "Automation", desc: "Started connecting tools that didn't talk to each other. Replaced copy-paste handoffs with workflows in n8n and Apps Script." },
  { year: "Year 3", title: "AI Systems", desc: "Brought AI into the workflows themselves — tailoring content, scoring leads, summarizing calls, drafting first-pass replies." },
  { year: "Now", title: "Building AI Products", desc: "Designing full systems end-to-end: data sources, AI processing, human review, and tracking — not just one-off scripts.", current: true },
  { year: "Next", title: "Future", desc: "Looking to bring this approach in-house at a team that wants customer success and operations to scale without losing the human touch." },
];

export type Project = {
  title: string;
  problem: string;
  approach: string;
  stack: string[];
  challenges: string;
  outcome: string;
  lessons: string;
};

export const PROJECTS: Project[] = [
  {
    title: "AI Resume & Job Application Assistant",
    problem: "Applying to multiple companies required tailoring resumes, cover letters, and interview answers manually, which consumed significant time.",
    approach: "Built an AI-assisted workflow that analyzes a job description, optimizes the resume for ATS systems, generates a customized cover letter, prepares likely interview answers, and produces a full set of application assets — tuned specifically for Customer Success, Technical Support, and SaaS roles.",
    stack: ["ChatGPT", "Claude", "Gemini", "Markdown", "ATS Optimization", "Prompt Engineering"],
    challenges: "Every company phrased the same requirements differently, so a single resume template wasn't enough — the workflow had to re-emphasize different parts of the same experience depending on what each posting actually asked for.",
    outcome: "Used it to customize resumes for dozens of SaaS companies, generate interview responses, and keep personal branding consistent across every application, instead of starting from a blank page each time.",
    lessons: "Prompt engineering is only effective when combined with an understanding of what hiring managers actually evaluate.",
  },
  {
    title: "Ductocool Industries — Digital Transformation",
    problem: "A traditional HVAC manufacturing company had limited online visibility and lacked a modern digital presence.",
    approach: "Led digital marketing and branding initiatives — website planning, a redesigned company profile, improved proposals, AI-assisted marketing ideas, customer communication templates, and a broader set of digital assets.",
    stack: ["Google Workspace", "Canva", "ChatGPT", "AI Content Generation", "Digital Marketing", "Branding"],
    challenges: "The company's strengths lived in decades of manufacturing experience that had never been written down anywhere — turning that into a clear, modern company profile took a lot of structured back-and-forth before any design work could start.",
    outcome: "Delivered a redesigned company profile, marketing collateral, a lead-generation strategy, website plans, and client communication templates the team could reuse going forward.",
    lessons: "Digital transformation begins with clear communication before advanced technology.",
  },
  {
    title: "AI Automation Workflows",
    problem: "Small businesses spend excessive time on repetitive operational tasks.",
    approach: "Designed automation workflows using n8n and AI tools to handle lead generation, CRM updates, notifications, prospect research, and other recurring business processes.",
    stack: ["n8n", "APIs", "Google Sheets", "AI Agents", "Zapier", "Cloudflare", "Oracle Cloud"],
    challenges: "Different tools in the stack expected data in different shapes, so a fair amount of the work was building reliable handoffs between systems that were never designed to talk to each other.",
    outcome: "Automated prospect enrichment and CRM updates, orchestrated multi-step workflows end-to-end, and freed up hours previously spent on manual data entry and follow-ups.",
    lessons: "The biggest automation wins come from simplifying processes before automating them.",
  },
  {
    title: "QuikIt — Hyperlocal Fashion Platform (Startup Concept)",
    problem: "Local fashion stores struggle to compete with fast-commerce platforms.",
    approach: "Designed the business model, MVP roadmap, customer journey, vendor onboarding strategy, marketing plan, and an AI-powered shopping experience for a hyperlocal fashion delivery platform.",
    stack: ["Product Design", "Figma (Planning)", "AI", "Business Strategy", "UX Planning"],
    challenges: "Hyperlocal delivery only works if vendors actually want to participate, so the harder design problem wasn't the shopping experience — it was a vendor onboarding strategy local stores would realistically say yes to.",
    outcome: "Produced a complete MVP specification, a vendor acquisition strategy, a revenue model, and a product roadmap ready to take into validation conversations.",
    lessons: "Successful products solve local problems before trying to scale globally.",
  },
  {
    title: "AI Portfolio & Personal Brand",
    problem: "Traditional portfolios fail to demonstrate technical thinking and AI capabilities.",
    approach: "Designed this site — a developer-style portfolio built around AI, automation, customer success, and product thinking, including a chat assistant that can answer questions using my own background and project history.",
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel AI SDK", "Supabase", "RAG", "OpenAI"],
    challenges: "The current assistant answers from a fixed summary of my background rather than a full retrieval pipeline — getting it to stay accurate without a real knowledge base took prompt-level constraints instead of infrastructure.",
    outcome: "Shipped a working AI-first portfolio with an interactive assistant; a RAG-based knowledge layer over my full resume and project history is the planned next iteration.",
    lessons: "A portfolio should explain how you think, not just what you've done.",
  },
];

export const STACK: string[] = [
  "Claude", "ChatGPT", "Gemini", "OpenAI", "n8n", "Notion",
  "Google Workspace", "Zapier", "Cloudflare", "Oracle Cloud", "GitHub", "Cursor",
  "VS Code", "React", "Next.js", "Tailwind", "Postgres", "Supabase",
  "Figma", "Canva", "RAG", "Vercel AI SDK",
];

export type BlogPost = {
  cat: string;
  title: string;
  desc: string;
  date: string;
  time: string;
};

export const BLOG: BlogPost[] = [
  { cat: "Automation", title: "What I learned wiring seven job boards into one workflow", desc: "On deduplication, regex filters that almost worked, and why a sheet-read beats loop accumulation in n8n.", date: "Add date", time: "6 min" },
  { cat: "Prompt Engineering", title: "Getting an AI assistant to say 'I don't know'", desc: "Why teaching a model its limits matters more than teaching it answers.", date: "Add date", time: "5 min" },
  { cat: "Customer Success", title: "The support ticket is the most honest user research you'll get", desc: "Patterns I noticed answering the same five questions, over and over, for two years.", date: "Add date", time: "4 min" },
];

export type ExperienceEntry = {
  role: string;
  org: string;
  when: string;
  desc: string;
};

export const EXPERIENCE: ExperienceEntry[] = [
  { role: "Add your most recent role", org: "Add company", when: "Add dates", desc: "Add 1–2 lines on what you owned and shipped." },
  { role: "Add previous role", org: "Add company", when: "Add dates", desc: "Add 1–2 lines on what you owned and shipped." },
  { role: "Add earlier role", org: "Add company", when: "Add dates", desc: "Add 1–2 lines on what you owned and shipped." },
];

export const EDUCATION = {
  program: "Add your degree / program",
  institution: "Add your institution",
  when: "Add years",
};

export type SkillCategory = { category: string; items: string[] };

export const SKILLS: SkillCategory[] = [
  { category: "AI", items: ["Prompt Engineering", "AI Agents", "OpenAI", "Claude", "Gemini", "RAG", "Vercel AI SDK (learning)"] },
  { category: "Automation", items: ["n8n", "Zapier", "Google Workspace", "Google Sheets", "APIs", "Workflow Automation"] },
  { category: "Customer Success", items: ["Customer Support", "Technical Support", "CRM", "Client Communication", "Process Documentation"] },
  { category: "Web", items: ["HTML", "CSS", "JavaScript", "React (beginner)", "Next.js (learning)", "Tailwind CSS"] },
  { category: "Business", items: ["Product Strategy", "SaaS", "Digital Marketing", "Process Improvement", "Project Coordination"] },
];

export const SUGGESTIONS = [
  "Who is Aanis?",
  "What projects has he built?",
  "Why AI?",
  "How can he help our company?",
];

export function buildSystemPrompt(): string {
  return `You are an assistant embedded in ${PROFILE.name}'s portfolio website. You ONLY answer questions about him using the information below. Be concise (2-4 sentences), warm, and specific — never generic. If asked something unrelated to him or not covered below, politely say you can only answer questions about his background and work, and suggest what you *can* answer. Never invent facts not present below.

PROFILE: ${PROFILE.bio} ${PROFILE.summary}

TIMELINE: ${TIMELINE.map((t) => `${t.year}: ${t.title} — ${t.desc}`).join(" | ")}

PROJECTS: ${PROJECTS.map((p) => `${p.title}: Problem — ${p.problem} Approach — ${p.approach} Outcome — ${p.outcome}`).join(" || ")}

SKILLS: ${SKILLS.map((s) => `${s.category}: ${s.items.join(", ")}`).join(" | ")}

STACK: ${STACK.join(", ")}

He is based in ${PROFILE.location} and is currently looking for remote roles in customer success, automation, and AI systems, and is also open to project work.`;
}
