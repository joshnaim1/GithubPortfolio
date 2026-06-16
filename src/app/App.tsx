import { TopNav } from "./components/TopNav";
import { Hero } from "./components/Hero";
import { ProjectGrid } from "./components/ProjectGrid";
import { About } from "./components/About";
import { InteractiveFeature } from "./components/InteractiveFeature";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-['Roboto',sans-serif]">
      <TopNav />
      <main>
        <Hero />
        <ProjectGrid />
        <About />
        <InteractiveFeature />
      </main>
      <Footer />
    </div>
  );
}
