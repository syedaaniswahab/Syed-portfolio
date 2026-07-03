import { UIProvider } from "@/components/UIProvider";
import CursorGlow from "@/components/CursorGlow";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import ProjectModal from "@/components/ProjectModal";
import Stack from "@/components/Stack";
import Writing from "@/components/Writing";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AskAI from "@/components/AskAI";
import CommandPalette from "@/components/CommandPalette";
import KeyboardShortcuts from "@/components/KeyboardShortcuts";
import Toast from "@/components/Toast";

export default function Home() {
  return (
    <UIProvider>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="grain" aria-hidden="true" />
      <CursorGlow />
      <Loader />
      <Header />

      <main id="main">
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Stack />
        <Writing />
        <Resume />
        <Contact />
      </main>

      <Footer />

      <AskAI />
      <ProjectModal />
      <CommandPalette />
      <KeyboardShortcuts />
      <Toast />
    </UIProvider>
  );
}
