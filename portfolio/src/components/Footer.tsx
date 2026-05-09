import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-[color:var(--color-muted-foreground)]">
          © {new Date().getFullYear()} Avijit Biswas. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 text-[color:var(--color-muted-foreground)] hover:text-white hover:ring-[var(--color-neon)]/60 transition"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <Link to="/" className="text-sm inline-flex items-center gap-2 text-[color:var(--color-muted-foreground)] hover:text-white">
          Back to Top <ArrowUp className="h-4 w-4" />
        </Link>
      </div>
    </footer>
  );
}
