"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 950);
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="loader" className={hidden ? "hidden" : ""} aria-hidden={hidden}>
      <div className="loader-mark">
        <svg viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.1)" />
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="url(#lg)"
            strokeDasharray="176"
            strokeDashoffset={hidden ? "20" : "176"}
            style={{ transition: "stroke-dashoffset 1s ease" }}
          />
          <defs>
            <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff9d6c" />
              <stop offset="100%" stopColor="#8b7cff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="loader-label">Loading systems</div>
      <div className="loader-bar" />
    </div>
  );
}
