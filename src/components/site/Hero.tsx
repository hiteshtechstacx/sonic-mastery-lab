import { motion } from "motion/react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Waveform } from "./Waveform";
import { DawMockup } from "./DawMockup";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-24 overflow-hidden">
      {/* Aurora background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-aurora)" }}
      />
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Ambient waveform */}
      <div className="absolute inset-x-0 bottom-0 h-40 opacity-30 pointer-events-none">
        <Waveform bars={120} />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[var(--neon-violet)]" />
            <span className="font-mono">Cohort 01 · Applications open</span>
            <span className="h-1 w-1 rounded-full bg-[var(--neon-green)] shadow-[0_0_8px_var(--neon-green)]" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-6 text-center font-semibold tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient block">Deconstruct the Hits.</span>
          <span className="text-gradient-neon block">Master the Craft.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 mx-auto max-w-2xl text-center text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          A premium ecosystem treating music recreation as a rigorous discipline
          — through elite cohorts, an interactive sandbox, and AI-powered
          workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#apply"
            className="group relative inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium overflow-hidden"
          >
            <span
              className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "var(--gradient-neon)" }}
            />
            <span
              className="absolute -inset-1 -z-20 rounded-full opacity-60 blur-xl"
              style={{ background: "var(--gradient-neon)" }}
            />
            Apply for Cohort 1
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#sandbox"
            className="glass group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground hover:bg-white/5 transition"
          >
            <Play className="h-4 w-4 text-[var(--neon-green)]" />
            Explore the Sandbox
          </a>
        </motion.div>

        {/* DAW mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-20 animate-float"
        >
          <DawMockup />
        </motion.div>
      </div>
    </section>
  );
}
