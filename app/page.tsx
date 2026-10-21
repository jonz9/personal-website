import Shell from "@/components/Shell";
import { Experience, Intro, Projects, Publications } from "@/components/Sections";

export default function Home() {
  return (
    <Shell>
      <Intro />
      <Publications />
      <Experience />
      <Projects />
    </Shell>
  );
}
