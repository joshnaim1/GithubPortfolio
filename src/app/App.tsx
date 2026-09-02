import { TopNav } from "./components/TopNav";
import { Hero } from "./components/Hero";
import { ProjectGrid } from "./components/ProjectGrid";
import { About } from "./components/About";
import { InteractiveFeature } from "./components/InteractiveFeature";
import { Swimming } from "./components/Swimming";
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
        <Swimming />
      </main>
      <Footer />
    </div>
  );
}
