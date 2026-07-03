"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useUI } from "./UIProvider";

type Command = { label: string; key: string; action: () => void };

export default function CommandPalette() {
  const { cmdkOpen, closeCmdk, openChat, showToast } = useUI();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    setQuery("");
    setActive(0);
    closeCmdk();
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    handleClose();
  };

  const commands: Command[] = useMemo(
    () => [
      { label: "Go to About", key: "A", action: () => scrollTo("about") },
      { label: "Go to Path / Timeline", key: "T", action: () => scrollTo("timeline") },
      { label: "Go to Projects", key: "P", action: () => scrollTo("projects") },
      { label: "Go to Stack", key: "S", action: () => scrollTo("stack") },
      { label: "Go to Writing", key: "W", action: () => scrollTo("writing") },
      { label: "Go to Resume", key: "R", action: () => scrollTo("resume") },
      { label: "Go to Contact", key: "C", action: () => scrollTo("contact") },
      { label: "Ask AI about Aanis", key: "⏎", action: () => { handleClose(); openChat(); } },
      { label: "Toggle theme (light mode coming soon)", key: "L", action: () => { handleClose(); showToast("Light mode is on the roadmap."); } },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (!cmdkOpen) return;
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    return () => clearTimeout(t);
  }, [cmdkOpen]);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setActive(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, filtered.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    if (e.key === "Enter") { filtered[active]?.action(); }
    if (e.key === "Escape") { handleClose(); }
  };

  return (
    <AnimatePresence>
      {cmdkOpen && (
        <motion.div
          className="cmdk-overlay open"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <motion.div
            className="cmdk-box"
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            exit={{ y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 0.84, 0.44, 1] }}
          >
            <div className="cmdk-input-wrap">
              <span style={{ color: "var(--muted-2)" }}>⌘K</span>
              <input
                ref={inputRef}
                type="text"
                placeholder="Jump to a section, or type a command..."
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="cmdk-list">
              {filtered.length === 0 && <div className="cmdk-item">No matches</div>}
              {filtered.map((c, i) => (
                <button
                  key={c.label}
                  className={`cmdk-item${i === active ? " active" : ""}`}
                  onClick={c.action}
                  onMouseEnter={() => setActive(i)}
                >
                  <span>{c.label}</span>
                  <span className="k">{c.key}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
