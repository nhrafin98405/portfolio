import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

export const Route = createFileRoute("/blog")({
  component: Blog,
  head: () => ({ meta: [
    { title: "Blog — Avijit Biswas" },
    { name: "description", content: "Thoughts, tutorials and things I love to share." },
  ]}),
});

const cats = ["All Posts", "Web Development", "Tutorials", "Career", "Tech News"] as const;
const posts = [
  { img: b1, title: "Understanding Server Components in Next.js 14", desc: "A deep dive into React Server Components and how they improve performance.", date: "May 12, 2024", read: "5 min read", cat: "Web Development" },
  { img: b2, title: "Authentication in MERN Stack with JWT", desc: "Learn how to implement secure authentication using JWT in a MERN stack application.", date: "Apr 28, 2024", read: "7 min read", cat: "Tutorials" },
  { img: b3, title: "10 Tips to Write Clean and Better Code", desc: "Simple tips that help me write clean, maintainable and scalable code every day.", date: "Apr 15, 2024", read: "4 min read", cat: "Career" },
];

function Blog() {
  const [active, setActive] = useState<(typeof cats)[number]>("All Posts");
  const filtered = active === "All Posts" ? posts : posts.filter((p) => p.cat === active);

  return (
    <PageShell>
      <section className="section">
        <div className="eyebrow">07. Blog</div>
        <h1 className="h-display mt-3">Thoughts, tutorials & <br/> things I <span className="neon-text">love to share.</span></h1>

        <div className="mt-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setActive(c)} className={`rounded-full px-5 py-2 text-sm transition ${active === c ? "bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white shadow-[0_0_30px_-5px_rgba(168,85,247,0.7)]" : "bg-white/5 ring-1 ring-white/10 text-[color:var(--color-muted-foreground)] hover:text-white"}`}>{c}</button>
          ))}
        </div>

        <div className="mt-10 space-y-5">
          {filtered.map((p) => (
            <article key={p.title} className="glass p-4 md:p-6 grid md:grid-cols-[280px_1fr] gap-6 group hover:-translate-y-0.5 transition">
              <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden rounded-2xl">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={640} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-display text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-muted-foreground)]">{p.desc}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-[color:var(--color-muted-foreground)]">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {p.read}</span>
                  <span className="rounded-full px-3 py-1 bg-[var(--color-primary)]/15 ring-1 ring-[var(--color-neon)]/30 text-[var(--color-neon)]">{p.cat}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div className="planet-glow h-80 w-80 -right-20 -bottom-20" />
          <h3 className="font-display text-2xl">Stay curious, keep learning.</h3>
          <p className="text-[color:var(--color-muted-foreground)] mt-1 max-w-xl">Subscribe to get updates on new posts and tutorials.</p>
          <form className="mt-5 flex flex-col sm:flex-row gap-3 max-w-lg" onSubmit={(e) => e.preventDefault()}>
            <input type="email" required placeholder="Enter your email" className="flex-1 rounded-full bg-white/5 ring-1 ring-white/10 px-5 py-3 text-sm focus:outline-none focus:ring-[var(--color-neon)]/60" />
            <button className="btn-neon">Subscribe <ArrowRight className="h-4 w-4" /></button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
