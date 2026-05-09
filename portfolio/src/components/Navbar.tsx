import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto mt-4 max-w-7xl px-4 md:px-6">
        <nav className="glass-strong flex items-center justify-between gap-4 rounded-full px-4 py-3 md:px-6">
          <Link to="/" className="flex items-center gap-2 font-display font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--color-primary)]/20 ring-1 ring-[var(--color-neon)]/40">
              <Code2 className="h-4 w-4 text-[var(--color-neon)]" />
            </span>
            <span className="text-base">
              <span className="neon-text">&lt;/&gt;</span> Avijit
            </span>
          </Link>
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="rounded-full px-4 py-2 text-sm text-[color:var(--color-muted-foreground)] transition-colors hover:text-white"
                  activeProps={{ className: "text-white bg-white/5" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Link to="/contact" className="hidden md:inline-flex btn-neon !py-2 !px-5 text-sm">
              Let's Talk
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full bg-white/5 ring-1 ring-white/10"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="glass mt-2 lg:hidden p-4 animate-fade-up">
            <ul className="grid grid-cols-2 gap-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-[color:var(--color-muted-foreground)] hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
