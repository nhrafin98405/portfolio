import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Code2, Cpu, Database, Gauge, Palette, Bug, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({ meta: [
    { title: "Services — Avijit Biswas" },
    { name: "description", content: "Services I offer to help your business grow." },
  ]}),
});

const services = [
  { icon: Code2, title: "Web Application Development", desc: "Full-stack web apps using modern technologies." },
  { icon: Cpu, title: "API Development", desc: "Robust and secure RESTful APIs." },
  { icon: Database, title: "Database Design", desc: "Optimized and scalable database solutions." },
  { icon: Gauge, title: "Performance Optimization", desc: "Make apps faster and better." },
  { icon: Palette, title: "UI/UX Implementation", desc: "Pixel-perfect and responsive designs." },
  { icon: Bug, title: "Bug Fixing & Maintenance", desc: "Ongoing support and bug fixes." },
];

function Services() {
  return (
    <PageShell>
      <section className="section">
        <div className="eyebrow">06. Services</div>
        <h1 className="h-display mt-3">Services I offer to help <br/> your <span className="neon-text">business grow.</span></h1>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="glass p-6 group hover:-translate-y-1 transition relative overflow-hidden">
              <span className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--color-neon)]/10 blur-3xl group-hover:bg-[var(--color-neon)]/30 transition" />
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-[var(--color-primary)]/15 ring-1 ring-[var(--color-neon)]/40 text-[var(--color-neon)]">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--color-muted-foreground)]">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-strong rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="planet-glow h-72 w-72 -right-20 -bottom-20" />
          <div>
            <h3 className="font-display text-2xl">Let's build something amazing together.</h3>
            <p className="text-[color:var(--color-muted-foreground)] mt-1">I'm available for freelance projects and full-time opportunities.</p>
          </div>
          <a href="/contact" className="btn-neon">Get in touch <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>
    </PageShell>
  );
}
