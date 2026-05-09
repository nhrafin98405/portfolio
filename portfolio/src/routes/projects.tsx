import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useState } from "react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({ meta: [
    { title: "Projects — Avijit Biswas" },
    { name: "description", content: "A showcase of projects that made an impact." },
  ]}),
});

const cats = ["All", "Web Apps", "E-commerce", "Dashboard", "Full Stack"] as const;

const projects = [
  { img: p1, title: "DevBoard", desc: "Project management tool for developers to manage tasks, collaborate and track progress.", tags: ["Next.js", "TypeScript", "PostgreSQL"], cat: "Dashboard" },
  { img: p2, title: "ShopHub", desc: "Full-featured e-commerce platform with cart, payments and admin dashboard.", tags: ["MERN Stack", "Stripe", "Redux"], cat: "E-commerce" },
  { img: p3, title: "Chatify", desc: "Real-time chat application with private rooms and authentication.", tags: ["Socket.io", "Express", "MongoDB"], cat: "Full Stack" },
  { img: p4, title: "TaskFlow", desc: "Task management app with drag & drop, kanban boards and team collaboration.", tags: ["React", "Tailwind CSS", "DnD Kit"], cat: "Web Apps" },
];

function Projects() {
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <PageShell>
      <section className="section">
        <div className="eyebrow">04. My Projects</div>
        <h1 className="h-display mt-3">A showcase of projects <br/> that made an <span className="neon-text">impact.</span></h1>

        <div className="mt-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 text-sm transition ${active === c ? "bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white shadow-[0_0_30px_-5px_rgba(168,85,247,0.7)]" : "bg-white/5 ring-1 ring-white/10 text-[color:var(--color-muted-foreground)] hover:text-white"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <article key={p.title} className="glass overflow-hidden group hover:-translate-y-1 transition relative">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={704} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-muted-foreground)]">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full px-3 py-1 bg-[var(--color-primary)]/15 ring-1 ring-[var(--color-neon)]/30 text-[color:var(--color-neon)]">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <a href="#" className="inline-flex items-center gap-2 text-sm text-[color:var(--color-neon)] hover:text-white">View Case Study <ArrowRight className="h-3.5 w-3.5" /></a>
                  <a href="#" className="inline-flex items-center gap-2 text-sm text-[color:var(--color-muted-foreground)] hover:text-white"><ExternalLink className="h-3.5 w-3.5" /> Live</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 glass-strong p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl">Have an idea for a project?</h3>
            <p className="text-[color:var(--color-muted-foreground)] mt-1">Let's bring your idea to life with clean code and great design.</p>
          </div>
          <a href="/contact" className="btn-neon">Let's Work Together <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>
    </PageShell>
  );
}
