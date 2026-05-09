import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import astronaut from "@/assets/astronaut.jpg";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({ meta: [
    { title: "Contact — Avijit Biswas" },
    { name: "description", content: "Let's create something great together." },
  ]}),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <section className="section">
        <div className="eyebrow">08. Contact</div>
        <h1 className="h-display mt-3">Let's create something <br/> <span className="neon-text">great together.</span></h1>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            <p className="text-[color:var(--color-muted-foreground)] max-w-md">
              Feel free to reach out for project inquiries or just a friendly hello!
            </p>
            <div className="glass p-5 flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--color-primary)]/15 ring-1 ring-[var(--color-neon)]/40 text-[var(--color-neon)]"><Mail className="h-4 w-4" /></span>
              <div><div className="text-xs text-[color:var(--color-muted-foreground)]">Email</div><div className="text-sm">hello@avijitbiswas.dev</div></div>
            </div>
            <div className="glass p-5 flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--color-primary)]/15 ring-1 ring-[var(--color-neon)]/40 text-[var(--color-neon)]"><Phone className="h-4 w-4" /></span>
              <div><div className="text-xs text-[color:var(--color-muted-foreground)]">Phone</div><div className="text-sm">+91 98765 43210</div></div>
            </div>
            <div className="glass p-5 flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--color-primary)]/15 ring-1 ring-[var(--color-neon)]/40 text-[var(--color-neon)]"><MapPin className="h-4 w-4" /></span>
              <div><div className="text-xs text-[color:var(--color-muted-foreground)]">Location</div><div className="text-sm">Kolkata, India</div></div>
            </div>
            <div className="flex items-center gap-3">
              {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="grid h-11 w-11 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:ring-[var(--color-neon)]/60 hover:text-white transition text-[color:var(--color-muted-foreground)]"><Icon className="h-4 w-4" /></a>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="glass p-6 md:p-8 space-y-4"
          >
            <input required placeholder="Your Name" className="w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-3 text-sm focus:outline-none focus:ring-[var(--color-neon)]/60" />
            <input required type="email" placeholder="Your Email" className="w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-3 text-sm focus:outline-none focus:ring-[var(--color-neon)]/60" />
            <input placeholder="Subject" className="w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-3 text-sm focus:outline-none focus:ring-[var(--color-neon)]/60" />
            <textarea required placeholder="Your Message" rows={5} className="w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-3 text-sm focus:outline-none focus:ring-[var(--color-neon)]/60" />
            <button className="btn-neon w-full justify-center">{sent ? "Message Sent ✨" : <>Send Message <Send className="h-4 w-4" /></>}</button>
          </form>
        </div>

        <div className="mt-12 glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden grid md:grid-cols-2 items-center gap-8">
          <div>
            <div className="eyebrow">Available for new projects</div>
            <h3 className="mt-3 font-display text-2xl">I'm currently available for freelance projects and full-time opportunities.</h3>
            <a href="#" className="mt-5 btn-neon inline-flex">Hire Me <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="relative h-72">
            <div className="absolute inset-0 planet-glow opacity-70" />
            <img src={astronaut} alt="Astronaut" loading="lazy" width={1024} height={1024} className="relative h-full w-full object-contain animate-float" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
