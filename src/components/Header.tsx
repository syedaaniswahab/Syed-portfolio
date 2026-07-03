"use client";

import { useUI } from "./UIProvider";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "timeline", label: "Path" },
  { id: "projects", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "writing", label: "Writing" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const { openCmdk } = useUI();

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div className="nav-inner">
        <a href="#top" className="logo" onClick={scrollTo("top")}>
          <span className="logo-dot" /> S. Aanis Wahab
        </a>
        <nav>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={scrollTo(item.id)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-right">
          <button className="kbd-hint" onClick={openCmdk} aria-label="Open command palette">
            ⌘ <span>K</span>
          </button>
        </div>
      </div>
    </header>
  );
}
