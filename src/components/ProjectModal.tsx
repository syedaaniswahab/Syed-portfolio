"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useUI } from "./UIProvider";

export default function ProjectModal() {
  const { activeProject, closeProject } = useUI();

  return (
    <AnimatePresence>
      {activeProject && (
        <motion.div
          className="modal-overlay open"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => { if (e.target === e.currentTarget) closeProject(); }}
        >
          <motion.div
            className="modal"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 0.84, 0.44, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button className="modal-close" onClick={closeProject} aria-label="Close">
              ✕
            </button>
            <h3 id="project-modal-title">{activeProject.title}</h3>
            <div className="modal-sub">{activeProject.stack.join(" · ")}</div>
            <div className="modal-block">
              <div className="label">Problem</div>
              <p>{activeProject.problem}</p>
            </div>
            <div className="modal-block">
              <div className="label">Approach</div>
              <p>{activeProject.approach}</p>
            </div>
            <div className="modal-block">
              <div className="label">Challenges</div>
              <p>{activeProject.challenges}</p>
            </div>
            <div className="modal-block">
              <div className="label">Outcome</div>
              <p>{activeProject.outcome}</p>
            </div>
            <div className="modal-block">
              <div className="label">Lessons</div>
              <p>{activeProject.lessons}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
