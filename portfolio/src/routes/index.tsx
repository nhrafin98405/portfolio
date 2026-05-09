import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ArrowRight, Download, MousePointer2, Sparkles, Star } from "lucide-react";
import planet from "@/assets/planet-hero.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({ meta: [{ title: "Avijit Biswas — Full Stack Developer" }] }),
});

const stack = ["React", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Tailwind CSS"];
const trusted = ["DevBoard", "cloudly", "CodeWagon", "gridsome", "Directus", "Nebula"];

function Home() {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="section pt-10 md:pt-16 grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up">
            <div className="eyebrow"><Sparkles className="h-3 w-3" /> Full Stack Developer</div>
            <h1 className="h-display mt-5">
              Hi, I'm Avijit <span className="inline-block animate-float">👋</span>
              <br /> I build <span className="neon-text">scalable, secure</span> &
              <br /> user-friendly <span className="neon-text">web applications.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[color:var(--color-muted-foreground)]">
              Full Stack Developer with 3+ years of experience building exceptional digital experiences across the MERN stack.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-neon">View My Work <ArrowRight className="h-4 w-4" /></Link>
              <a href="#" className="btn-ghost-neon"><Download className="h-4 w-4" /> Download CV</a>
            </div>
            <div className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted-foreground)]">
              <MousePointer2 className="h-3 w-3" /> Scroll to explore
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 planet-glow opacity-70" />
            <div className="relative aspect-square w-full max-w-[560px] mx-auto">
              <img
                src={planet}
                alt="Cosmic planet"
                width={1536}
                height={1280}
                className="absolute inset-0 h-full w-full rounded-full object-cover animate-spin-slow opacity-95"
              />
              <div className="absolute -inset-2 rounded-full ring-1 ring-[var(--color-neon)]/30 animate-pulse-glow" />
              {/* Floating stats */}
              <div className="glass absolute -left-6 top-10 px-5 py-4 animate-float">
                <div className="text-2xl font-bold neon-text">3+</div>
                <div className="text-xs text-[color:var(--color-muted-foreground)]">Years Experience</div>
              </div>
              <div className="glass absolute -right-4 top-1/3 px-5 py-4 animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-2xl font-bold neon-text">20+</div>
                <div className="text-xs text-[color:var(--color-muted-foreground)]">Projects Completed</div>
              </div>
              <div className="glass absolute -left-2 bottom-16 px-5 py-4 animate-float" style={{ animationDelay: "2s" }}>
                <div className="text-2xl font-bold neon-text">15+</div>
                <div className="text-xs text-[color:var(--color-muted-foreground)]">Happy Clients</div>
              </div>
              <div className="glass absolute right-6 bottom-4 px-5 py-4 animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="text-2xl font-bold neon-text inline-flex items-center gap-1">5<Star className="h-4 w-4 fill-current" /></div>
                <div className="text-xs text-[color:var(--color-muted-foreground)]">Client Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack marquee */}
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="glass overflow-hidden py-5">
            <div className="marquee text-sm uppercase tracking-[0.2em] text-[color:var(--color-muted-foreground)]">
              {[...stack, ...stack].map((s, i) => (
                <span key={i} className="inline-flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-neon)]" /> {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted */}
      <section className="section pt-10">
        <div className="glass-strong rounded-3xl p-8 md:p-10 text-center">
          <p className="eyebrow justify-center inline-flex">Trusted by clients worldwide</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[color:var(--color-muted-foreground)]">
            {trusted.map((t) => (
              <span key={t} className="font-display text-lg opacity-80 hover:opacity-100 hover:text-white transition">{t}</span>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
