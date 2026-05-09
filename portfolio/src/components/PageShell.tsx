import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StarField } from "./StarField";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <StarField />
      <div className="planet-glow h-[420px] w-[420px] -top-32 -left-32" />
      <div className="planet-glow h-[520px] w-[520px] -bottom-40 -right-40" />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
