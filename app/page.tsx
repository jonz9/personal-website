import Shell from "@/components/Shell";
import { Experience, Intro, News, Projects, Publications } from "@/components/Sections";

export default function Home() {
  return (
    <Shell>
      <Intro />
      <News />
      <Publications />
      <Experience />
      <Projects />
    </Shell>
  );
}
