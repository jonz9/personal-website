import { earlierProjects, experience, links, news, projects, publications } from "@/data";
import portrait from "@/public/assets/images/portrait.jpg";
import PixelPortrait from "./PixelPortrait";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-8 pt-14">
      <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-muted">{title}</h2>
      {children}
    </section>
  );
}

export function Intro() {
  return (
    <section className="flex flex-col-reverse gap-8 pt-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10 sm:pt-10">
      <div className="max-w-[30rem] space-y-4 leading-relaxed">
        <p>
          I&apos;m a Computer Engineering student at the{" "}
          <a href="https://uwaterloo.ca/engineering" {...ext}>
            University of Waterloo
          </a>{" "}
          and a machine learning engineer at Mecka AI, where I work on egocentric video and hand
          pose.
        </p>
        <p>
          I&apos;m interested in computer vision, multimodal models, and robotics. Before this I was
          a research assistant at <a href="https://www.amii.ca" {...ext}>Amii</a> with Prof.
          Grzegorz Kondrak, working on language models and machine translation.
        </p>
        <p className="text-muted">Away from a screen: guitar, music, and books.</p>
        <p className="flex flex-wrap gap-x-4 gap-y-1 pt-1 font-mono text-[13px]">
          <a href={links.email}>Email</a>
          <a href={links.cv} {...ext}>CV</a>
          <a href={links.github} {...ext}>GitHub</a>
          <a href={links.linkedin} {...ext}>LinkedIn</a>
        </p>
      </div>
      <PixelPortrait src={portrait} alt="Portrait of John Zhang, pixelated" />
    </section>
  );
}

export function News() {
  return (
    <Section id="news" title="News">
      <ul className="space-y-2">
        {news.map((item) => (
          <li key={item.text} className="grid grid-cols-[4.5rem_1fr] gap-3 text-[15px]">
            <span className="pt-[3px] font-mono text-xs text-muted">{item.date}</span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Publications() {
  return (
    <Section id="publications" title="Publications">
      <ul className="space-y-5">
        {publications.map((pub) => (
          <li key={pub.title}>
            <a href={pub.link} {...ext} className="font-medium no-underline hover:underline">
              {pub.title}
            </a>
            <p className="mt-1 text-sm text-muted">
              {pub.authors.map((a, i) => (
                <span key={a}>
                  {a === "John Zhang" ? <span className="text-fg underline decoration-line underline-offset-2">{a}</span> : a}
                  {i < pub.authors.length - 1 && ", "}
                </span>
              ))}
            </p>
            <p className="mt-1 font-mono text-xs text-muted">
              <span className="text-fg">{pub.venue}</span>
              {pub.note && <> · {pub.note}</>}
              {" · "}
              <a href={pub.link} {...ext}>paper</a>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ul className="space-y-5">
        {experience.map((job) => (
          <li key={job.org} className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-x-6">
            <p>
              <span className="font-medium">{job.org}</span>
              <span className="text-muted"> · {job.role}</span>
            </p>
            <span className="font-mono text-xs text-muted sm:pt-1 sm:text-right">{job.date}</span>
            <p className="text-sm leading-relaxed text-muted sm:col-span-2">{job.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="space-y-5">
        {projects.map((p) => (
          <li key={p.name}>
            <p className="flex flex-wrap items-baseline gap-x-3">
              <a href={p.link} {...ext} className="font-medium no-underline hover:underline">
                {p.name}
              </a>
              <span className="font-mono text-xs text-muted">{p.tags}</span>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{p.text}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-muted">
        Earlier:{" "}
        {earlierProjects.map((p, i) => (
          <span key={p.name}>
            <a href={p.link} {...ext}>{p.name}</a>
            {i < earlierProjects.length - 1 && ", "}
          </span>
        ))}
        .
      </p>
    </Section>
  );
}
