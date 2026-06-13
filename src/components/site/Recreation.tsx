import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Disc3, Waves, Music2, Mic2, Piano, Sparkles } from "lucide-react";

const layers = [
  { name: "Kick & Sub", icon: Disc3, color: "var(--neon-violet)", t: 0 },
  { name: "808 Bass", icon: Waves, color: "var(--neon-blue)", t: 600 },
  { name: "Lead Synth", icon: Music2, color: "var(--neon-green)", t: 1100 },
  { name: "Pad Chords", icon: Piano, color: "var(--neon-violet)", t: 1600 },
  { name: "Vocal Stack", icon: Mic2, color: "var(--neon-green)", t: 2100 },
  { name: "FX & Risers", icon: Sparkles, color: "var(--neon-blue)", t: 2600 },
];

export function Recreation() {
  const [active, setActive] = useState<number[]>([]);

  useEffect(() => {
    const timers = layers.map((l, i) =>
      setTimeout(() => setActive((a) => [...a, i]), l.t + 400)
    );
    const reset = setInterval(() => setActive([]), 5500);
    const restart = setInterval(() => {
      layers.forEach((l, i) =>
        setTimeout(() => setActive((a) => Array.from(new Set([...a, i]))), l.t)
      );
    }, 5500);
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(reset);
      clearInterval(restart);
    };
  }, []);

  return (
    <section id="sandbox" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs text-[var(--neon-blue)] tracking-[0.2em] uppercase"
            >
              Interactive Recreation
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]"
            >
              Watch a hit get <span className="text-gradient-neon">deconstructed.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-5 text-muted-foreground leading-relaxed"
            >
              Every track in the Sandbox is annotated layer-by-layer. Toggle
              stems, inspect chains, A/B against your own attempt — and
              understand exactly what makes the record move.
            </motion.p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ["120+", "Tracks decomposed"],
                ["1,400+", "Annotated stems"],
                ["72hr", "Avg. recreation time"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="font-display text-2xl font-semibold tracking-tight">{k}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="absolute -inset-6 -z-10 rounded-3xl blur-3xl opacity-40"
              style={{ background: "var(--gradient-neon)" }}
            />
            <div className="glass rounded-2xl p-5 md:p-6">
              <div className="flex items-center justify-between font-mono text-[10px] md:text-xs text-muted-foreground tracking-wider mb-4">
                <span>SESSION_042 · "MIDNIGHT CITY"</span>
                <span className="text-[var(--neon-green)]">DECONSTRUCTING…</span>
              </div>
              <div className="space-y-2">
                {layers.map((l, i) => {
                  const on = active.includes(i);
                  const Icon = l.icon;
                  return (
                    <div
                      key={l.name}
                      className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5 transition-all"
                      style={{
                        boxShadow: on
                          ? `0 0 0 1px ${l.color}55, 0 0 24px ${l.color}33`
                          : "none",
                      }}
                    >
                      <Icon
                        className="h-4 w-4 transition-colors"
                        style={{ color: on ? l.color : "rgb(120 120 130)" }}
                      />
                      <span
                        className={
                          "text-xs md:text-sm font-medium transition-colors " +
                          (on ? "text-foreground" : "text-muted-foreground")
                        }
                      >
                        {l.name}
                      </span>
                      <div className="ml-auto flex items-end gap-[2px] h-5 w-32">
                        {Array.from({ length: 24 }).map((_, j) => (
                          <div
                            key={j}
                            className="flex-1 rounded-sm transition-all duration-300"
                            style={{
                              background: on ? l.color : "rgb(60 60 70)",
                              height: on
                                ? `${30 + Math.sin(j * 0.7 + i) * 40 + 30}%`
                                : "20%",
                              opacity: on ? 0.85 : 0.3,
                            }}
                          />
                        ))}
                      </div>
                      <span
                        className="font-mono text-[10px] w-8 text-right"
                        style={{ color: on ? l.color : "rgb(100 100 110)" }}
                      >
                        {on ? "ON" : "OFF"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
