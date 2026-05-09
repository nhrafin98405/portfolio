import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/skills")({
  component: Skills,
  head: () => ({ meta: [
    { title: "Skills — Avijit Biswas" },
    { name: "description", content: "Modern technologies & tools I use to ship high-quality products." },
  ]}),
});

const skills = [
  { name: "Next.js", value: 90 }, { name: "Node.js", value: 92 },
  { name: "TypeScript", value: 88 }, { name: "Express.js", value: 86 },
  { name: "MongoDB", value: 85 }, { name: "Tailwind CSS", value: 95 },
  { name: "PostgreSQL", value: 80 }, { name: "React", value: 95 },
  { name: "GraphQL", value: 78 },
];
const tools = ["Git", "GitHub", "VS Code", "Figma", "Docker", "AWS", "Jest", "Postman"];

function Skills() {
  return (
    <PageShell>
      <section className="section">
        <div className="eyebrow">01. Skills</div>
        <h1 className="h-display mt-3">Technologies I work with <br/> to bring ideas to life.</h1>
        <p className="mt-4 max-w-2xl text-[color:var(--color-muted-foreground)]">
          I love working with modern technologies and tools to build high-quality products.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s) => (
            <div key={s.name} className="glass p-6 group hover:-translate-y-1 transition">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-primary)]/20 ring-1 ring-[var(--color-neon)]/40 text-[var(--color-neon)] font-bold">
                    {s.name[0]}
                  </span>
                  <span className="font-display text-lg">{s.name}</span>
                </div>
                <span className="text-[color:var(--color-neon)] font-semibold">{s.value}%</span>
              </div>
              <div className="mt-5 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-shadow" style={{ width: `${s.value}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass p-8">
          <h3 className="font-display text-xl">Other Technologies</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {tools.map((t) => (
              <span key={t} className="rounded-full px-4 py-2 text-sm bg-white/5 ring-1 ring-white/10 hover:ring-[var(--color-neon)]/60 transition">{t}</span>
            ))}
          </div>
        </div>

        <div className="mt-10 glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div className="planet-glow h-80 w-80 -right-20 -bottom-20" />
          <h3 className="font-display text-2xl">Always learning, always growing.</h3>
          <p className="mt-2 text-[color:var(--color-muted-foreground)] max-w-xl">
            I'm constantly exploring new technologies and improving my skills to stay ahead in this fast-paced world.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
