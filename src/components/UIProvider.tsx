"use client";

import { createContext, useCallback, useContext, useRef, useState, ReactNode } from "react";
import type { Project } from "@/lib/data";

type UIContextType = {
  chatOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
  cmdkOpen: boolean;
  openCmdk: () => void;
  closeCmdk: () => void;
  toggleCmdk: () => void;
  activeProject: Project | null;
  openProject: (p: Project) => void;
  closeProject: () => void;
  toastMsg: string | null;
  showToast: (msg: string) => void;
};

const UIContext = createContext<UIContextType | null>(null);

export function UIProvider({ children }: { children: ReactNode }) {
  const [chatOpen, setChatOpen] = useState(false);
  const [cmdkOpen, setCmdkOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const lockScroll = (lock: boolean) => {
    document.body.style.overflow = lock ? "hidden" : "";
  };

  const openChat = useCallback(() => { setChatOpen(true); lockScroll(true); }, []);
  const closeChat = useCallback(() => { setChatOpen(false); lockScroll(false); }, []);
  const openCmdk = useCallback(() => setCmdkOpen(true), []);
  const closeCmdk = useCallback(() => setCmdkOpen(false), []);
  const toggleCmdk = useCallback(() => setCmdkOpen((v) => !v), []);
  const openProject = useCallback((p: Project) => { setActiveProject(p); lockScroll(true); }, []);
  const closeProject = useCallback(() => { setActiveProject(null); lockScroll(false); }, []);

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastMsg(null), 2600);
  }, []);

  return (
    <UIContext.Provider
      value={{
        chatOpen, openChat, closeChat,
        cmdkOpen, openCmdk, closeCmdk, toggleCmdk,
        activeProject, openProject, closeProject,
        toastMsg, showToast,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
}
