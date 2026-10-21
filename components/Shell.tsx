import Link from "next/link";
import { links, navItems } from "@/data";
import ThemeToggle from "./ThemeToggle";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-[46rem] flex-col px-4 sm:px-6">
      <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-6 sm:py-8">
        <Link href="/" className="font-serif text-lg tracking-tight text-fg no-underline">
          John Zhang
        </Link>
        <nav className="flex items-center gap-4 text-sm text-muted sm:gap-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.link} className="no-underline hover:text-fg">
              {item.name}
            </Link>
          ))}
          <a href={links.cv} target="_blank" rel="noopener noreferrer" className="no-underline hover:text-fg">
            CV
          </a>
          <ThemeToggle />
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-20 flex flex-wrap justify-between gap-2 border-t border-line py-6 font-mono text-xs text-muted">
        <span>© {new Date().getFullYear()} John Zhang</span>
        <span>Waterloo · Toronto</span>
      </footer>
    </div>
  );
}
