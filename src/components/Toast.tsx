"use client";

import { useUI } from "./UIProvider";

export default function Toast() {
  const { toastMsg } = useUI();
  return (
    <div className={`toast${toastMsg ? " show" : ""}`} role="status" aria-live="polite">
      {toastMsg}
    </div>
  );
}
