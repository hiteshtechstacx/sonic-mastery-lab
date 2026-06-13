import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  return (
    <section id="apply" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--surface)] p-10 md:p-16"
        >
          {/* glow */}
          <div
            className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[800px] blur-3xl opacity-60"
            style={{ background: "var(--gradient-neon)" }}
          />
          <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

          <div className="relative text-center">
            <p className="font-mono text-xs text-[var(--neon-green)] tracking-[0.2em] uppercase">
              Cohort 01 · 40 seats
            </p>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
              <span className="text-gradient">Join the union.</span>
              <br />
              <span className="text-gradient-neon">Build records that matter.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
              Apply now to lock your seat, or join the waitlist for early access
              to the Sandbox.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="mt-8 flex flex-col sm:flex-row items-stretch gap-2 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@studio.com"
                className="flex-1 rounded-full bg-black/40 border border-white/10 px-5 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-[var(--neon-violet)] focus:ring-2 focus:ring-[var(--neon-violet)]/30 transition"
              />
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium overflow-hidden"
              >
                <span
                  className="absolute -inset-1 -z-10 rounded-full opacity-70 blur-xl"
                  style={{ background: "var(--gradient-neon)" }}
                />
                Join the Elite
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
            <p className="mt-4 font-mono text-[10px] text-muted-foreground tracking-wider">
              NO SPAM · UNSUBSCRIBE ANY TIME
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
