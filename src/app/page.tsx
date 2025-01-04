import Header from "@/components/Header";
import About from "@/components/sections/About";
import Library from "@/components/sections/library/Library";
import Projects from "@/components/sections/projects/Projects";
import Spotify from "@/components/sections/spotify/Spotify";
import Work from "@/components/sections/work/Work";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto w-full">
      <Header />
      <About />
      <Work />
      <Projects />
      <Library />
      <Spotify />
    </main>
  );
}
