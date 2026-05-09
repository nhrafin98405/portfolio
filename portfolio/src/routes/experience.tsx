import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/experience")({
  component: Experience,
  head: () => ({ meta: [
    { title: "Experience — Avijit Biswas" },
    { name: "description", content: "My professional journey as a developer." },
  ]}),
});

const exp = [
  { period: "2023 - Present", role: "Senior Full Stack Developer", company: "TechNova Solutions", desc: "Building scalable SaaS applications using MERN stack.", tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"] },
  { period: "2021 - 2023", role: "Full Stack Developer", company: "WebCraft Technologies", desc: "Developed and maintained multiple client projects.", tags: ["React", "Express.js", "MySQL", "Redis"] },
  { period: "2020 - 2021", role: "Frontend Developer", company: "CodePixel Studios", desc: "Built responsive and interactive UIs with React and Tailwind CSS.", tags: ["React", "JavaScript", "Tailwind CSS"] },
];
const stats = [{v:"3+",l:"Years Experience"},{v:"10+",l:"Projects Completed"},{v:"5+",l:"Technologies"},{v:"15+",l:"Happy Clients"}];

function Experience() {
  return (
    <PageShell>
      <section className="section">
        <div className="eyebrow">05. Experience</div>
        <h1 className="h-display mt-3">My professional journey <br/> as a <span className="neon-text">developer.</span></h1>

        <div className="mt-12 relative pl-8 md:pl-12">
          <span className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-neon)] via-[var(--color-neon)]/40 to-transparent" />
          <div className="space-y-8">
            {exp.map((e, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-6 md:-left-9 top-3 grid h-4 w-4 place-items-center rounded-full bg-[var(--color-neon)] shadow-[0_0_20px_rgba(168,85,247,0.8)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <div className="glass p-6 hover:-translate-y-1 transition">
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-neon)]">{e.period}</div>
                  <h3 className="mt-2 font-display text-xl">{e.role}</h3>
                  <div className="text-sm text-[color:var(--color-muted-foreground)]">{e.company}</div>
                  <p className="mt-3 text-sm text-[color:var(--color-muted-foreground)]">{e.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <span key={t} className="text-xs rounded-full px-3 py-1 bg-[var(--color-primary)]/15 ring-1 ring-[var(--color-neon)]/30 text-[var(--color-neon)]">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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
