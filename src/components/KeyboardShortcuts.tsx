"use client";

import { useEffect } from "react";
import { useUI } from "./UIProvider";

const KONAMI_SEQUENCE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

function confettiBurst() {
  const colors = ["#ff9d6c", "#8b7cff", "#6fe3ff", "#ffc18a"];
  for (let i = 0; i < 60; i++) {
    const p = document.createElement("div");
    const size = Math.random() * 8 + 4;
    p.style.cssText = `position:fixed; z-index:700; left:50vw; top:40vh; width:${size}px; height:${size}px; background:${colors[i % colors.length]}; border-radius:${Math.random() > 0.5 ? "50%" : "2px"}; pointer-events:none;`;
    document.body.appendChild(p);
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * 400 + 150;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist - 150;
    p.animate(
      [
        { transform: "translate(0,0) rotate(0deg)", opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) rotate(${Math.random() * 720}deg)`, opacity: 0 },
      ],
      { duration: 1400 + Math.random() * 600, easing: "cubic-bezier(.16,.84,.44,1)" }
    );
    setTimeout(() => p.remove(), 2100);
  }
}

export default function KeyboardShortcuts() {
  const { cmdkOpen, openCmdk, closeCmdk, closeChat, closeProject, showToast } = useUI();

  useEffect(() => {
    let pos = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (cmdkOpen) { closeCmdk(); } else { openCmdk(); }
      }
      if (e.key === "Escape") {
        closeCmdk();
        closeChat();
        closeProject();
      }

      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === KONAMI_SEQUENCE[pos]) {
        pos++;
        if (pos === KONAMI_SEQUENCE.length) {
          pos = 0;
          showToast("🎉 You found the easter egg. Hire this person.");
          document.documentElement.style.transition = "filter .6s ease";
          document.documentElement.style.filter = "invert(1) hue-rotate(180deg)";
          confettiBurst();
          setTimeout(() => { document.documentElement.style.filter = ""; }, 1800);
        }
      } else {
        pos = key === KONAMI_SEQUENCE[0] ? 1 : 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [cmdkOpen, openCmdk, closeCmdk, closeChat, closeProject, showToast]);

  return null;
}
