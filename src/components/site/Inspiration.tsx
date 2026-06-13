import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

const people = [
  {
    name: "Sashwat Sachdev",
    role: "Producer · Sonic Architect",
    note: "For proving that obsession with craft scales into a movement.",
  },
  {
    name: "Tanish Bagchi",
    role: "Composer · Hit-maker",
    note: "For showing the discipline behind every record that moves a generation.",
  },
];

export function Inspiration() {
  return (
    <section id="inspiration" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.25]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 font-mono text-xs text-[var(--neon-green)] tracking-[0.2em] uppercase glass rounded-full px-3 py-1"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Inspired By
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Standing on the shoulders of{" "}
            <span className="text-gradient-neon">artists who built the blueprint.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-5 text-muted-foreground"
          >
            Recreation Union exists because of the producers who taught us that taste, technique, and
            relentless iteration are the only real shortcuts.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {people.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative glass rounded-2xl p-7 overflow-hidden hover:bg-white/[0.04] transition-colors"
            >
              <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, var(--neon-violet), transparent 40%, var(--neon-blue))",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "1px",
                }}
              />
              <div className="flex items-center gap-4">
                <div
                  className="h-14 w-14 rounded-2xl shrink-0 shadow-[0_0_30px_rgba(167,85,247,0.35)]"
                  style={{
                    background:
                      "conic-gradient(from 140deg, var(--neon-violet), var(--neon-blue), var(--neon-green), var(--neon-violet))",
                  }}
                />
                <div className="min-w-0">
                  <div className="text-lg font-semibold tracking-tight">{p.name}</div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
                    {p.role}
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                "{p.note}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground"
        >
          — A tribute, not an endorsement.
        </motion.p>
      </div>
    </section>
  );
}
