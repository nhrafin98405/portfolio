import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Check, ArrowRight, Trophy, Star, Code, Users } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({ meta: [
    { title: "About — Avijit Biswas" },
    { name: "description", content: "Designing and building digital solutions that make a difference." },
  ]}),
});

const features = ["Clean Code", "Problem Solver", "Team Player", "Tech Enthusiast", "Always Curious"];
const skills = [
  { name: "React.js", value: 95 },
  { name: "Next.js", value: 90 },
  { name: "TypeScript", value: 88 },
  { name: "Node.js", value: 92 },
  { name: "MongoDB", value: 85 },
];
const achievements = [
  { icon: Trophy, title: "Top 1% on LeetCode", desc: "Solved 500+ DSA problems" },
  { icon: Star, title: "5★ Rated Developer", desc: "On multiple freelance platforms" },
  { icon: Code, title: "Built 20+ Production Apps", desc: "Used by real customers" },
  { icon: Users, title: "Open Source Contributor", desc: "Actively contributing to OSS" },
];
const stats = [
  { v: "3+", l: "Years Experience" },
  { v: "20+", l: "Projects Completed" },
  { v: "15+", l: "Happy Clients" },
  { v: "5★", l: "Client Rating" },
];

function About() {
  return (
    <PageShell>
      <section className="section">
        <div className="eyebrow">01. About Me</div>
        <h1 className="h-display mt-3">
          Designing & building <br /> digital solutions that <span className="neon-text">make a difference.</span>
        </h1>

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          {/* Left */}
          <div className="lg:col-span-4 space-y-6 animate-fade-up">
            <p className="text-[color:var(--color-muted-foreground)]">
              I'm a passionate Full Stack Developer who loves building efficient, scalable and user-friendly web applications.
            </p>
            <p className="text-[color:var(--color-muted-foreground)]">
              I specialize in the MERN stack and modern web technologies to create fast, secure and beautiful products.
            </p>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--color-primary)]/20 ring-1 ring-[var(--color-neon)]/40">
                    <Check className="h-3 w-3 text-[var(--color-neon)]" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-neon">More about me <ArrowRight className="h-4 w-4" /></Link>
          </div>

          {/* Center portrait */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full planet-glow" />
              <div className="relative h-72 w-72 md:h-80 md:w-80 rounded-3xl overflow-hidden ring-2 ring-[var(--color-neon)]/40 animate-pulse-glow">
                <img src={portrait} alt="Portrait" loading="lazy" width={896} height={1152} className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-8 w-56 rounded-[50%] bg-[var(--color-neon)]/40 blur-2xl" />
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass p-6">
              <h3 className="font-display text-lg">Technologies I work with</h3>
              <div className="mt-5 space-y-4">
                {skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm">
                      <span>{s.name}</span>
                      <span className="text-[color:var(--color-neon)]">{s.value}%</span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7]" style={{ width: `${s.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass p-6 space-y-4">
              <h3 className="font-display text-lg">Achievements</h3>
              {achievements.map((a) => (
                <div key={a.title} className="flex items-start gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--color-primary)]/15 ring-1 ring-[var(--color-neon)]/40 text-[var(--color-neon)]">
                    <a.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-sm font-medium">{a.title}</div>
                    <div className="text-xs text-[color:var(--color-muted-foreground)]">{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.l} className="glass p-6 text-center">
              <div className="text-3xl font-bold neon-text">{s.v}</div>
              <div className="text-xs text-[color:var(--color-muted-foreground)] mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
