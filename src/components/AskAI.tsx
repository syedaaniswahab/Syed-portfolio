"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useUI } from "./UIProvider";
import { SUGGESTIONS } from "@/lib/data";

type ChatMessage = { role: "user" | "assistant"; content: string };

export default function AskAI() {
  const { chatOpen, openChat, closeChat } = useUI();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi — I'm an assistant trained only on Aanis's portfolio. Ask me about his projects, background, or how he could help your team.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send(text?: string) {
    const value = (text ?? input).trim();
    if (!value || loading) return;
    setInput("");
    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: value }];
    setMessages(nextMessages);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      const reply = data.reply || "Sorry, I couldn't generate a response just now — try asking again.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I couldn't reach the AI service just now. Try again in a moment." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button className="ask-ai-fab" onClick={openChat}>
        <span className="dot" />
        <span>Ask AI about me</span>
      </button>

      <AnimatePresence>
        {chatOpen && (
          <motion.div
            className="chat-overlay open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => { if (e.target === e.currentTarget) closeChat(); }}
          >
            <motion.div
              className="chat-panel"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 0.84, 0.44, 1] }}
            >
              <div className="chat-head">
                <div className="title"><span className="dot" /> Ask about Aanis</div>
                <button className="modal-close" style={{ position: "static" }} onClick={closeChat} aria-label="Close chat">✕</button>
              </div>
              <div className="chat-body" ref={bodyRef}>
                {messages.map((m, i) => (
                  <div className={`msg ${m.role === "assistant" ? "bot" : "user"}`} key={i}>
                    {m.content}
                  </div>
                ))}
                {loading && (
                  <div className="msg bot typing"><span /><span /><span /></div>
                )}
              </div>
              {messages.length <= 1 && (
                <div className="chat-suggestions">
                  {SUGGESTIONS.map((s) => (
                    <button className="chip-btn" key={s} onClick={() => send(s)}>{s}</button>
                  ))}
                </div>
              )}
              <div className="chat-input">
                <input
                  type="text"
                  placeholder="Ask anything about Aanis..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") send(); }}
                />
                <button onClick={() => send()} aria-label="Send message">↑</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
