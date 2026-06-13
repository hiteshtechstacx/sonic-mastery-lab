import { motion } from "motion/react";
import { Layers, GitBranch, Brain, Target } from "lucide-react";

const items = [
  {
    icon: Layers,
    title: "Decompose, then compose",
    body: "Tear a hit down to its primitives — arrangement, sound design, mix decisions — then rebuild from scratch. The fastest known route to producer fluency.",
  },
  {
    icon: GitBranch,
    title: "Study lineage, not loops",
    body: "Every modern record stands on dozens of techniques. We trace them — who invented them, why they work, and where they break.",
  },
  {
    icon: Brain,
    title: "Train your ears like an engineer",
    body: "Critical listening drills, A/B blind tests, and reference-matching turn vague taste into precise, repeatable judgement.",
  },
  {
    icon: Target,
    title: "Ship to a brief",
    body: "Every cohort week ends with a recreation deliverable, reviewed by working practitioners. No theory without output.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-xs text-[var(--neon-violet)] tracking-[0.2em] uppercase">
                The Philosophy
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
                Recreation is the <span className="text-gradient-neon">shortest path</span> to mastery.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Every elite producer learned by reverse-engineering the records
                that moved them. We turn that informal apprenticeship into a
                rigorous, measurable curriculum.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass rounded-2xl p-5"
              >
                <div className="h-9 w-9 rounded-lg bg-white/5 grid place-items-center mb-4">
                  <it.icon className="h-4.5 w-4.5 text-[var(--neon-violet)]" />
                </div>
                <h3 className="font-semibold tracking-tight">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {it.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
