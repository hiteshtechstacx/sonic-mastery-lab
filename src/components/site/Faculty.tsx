import { motion } from "motion/react";

const faculty = [
  { name: "Aria Voss", role: "Grammy-nominated Producer", tag: "Pop · Hyperpop" },
  { name: "Kenji Mori", role: "Mix Engineer, 14× Platinum", tag: "Hip-Hop · R&B" },
  { name: "Lila Marchetti", role: "Sound Designer · A24 Scores", tag: "Cinematic" },
  { name: "Dre Okonkwo", role: "Founder, Subline Records", tag: "Afrobeats · House" },
  { name: "Nora Steen", role: "Mastering Engineer", tag: "Electronic" },
  { name: "Ravi Chandra", role: "Synth Programmer", tag: "Modular · Ambient" },
  { name: "Mira Halvorsen", role: "A&R · Major Label", tag: "Strategy" },
  { name: "Yusuf El-Amin", role: "Drum Programmer", tag: "Trap · Drill" },
];

const doubled = [...faculty, ...faculty];

export function Faculty() {
  return (
    <section id="faculty" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-[var(--neon-violet)] tracking-[0.2em] uppercase"
          >
            The Faculty
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Taught by people who <span className="text-gradient-neon">actually make the records.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-5 text-muted-foreground"
          >
            Working producers, mixers, and engineers — not career educators.
          </motion.p>
        </div>
      </div>

      <div className="mt-14 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee gap-4 w-max">
          {doubled.map((f, i) => (
            <FacultyCard key={i} f={f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FacultyCard({ f }: { f: (typeof faculty)[number] }) {
  return (
    <div className="glass w-[280px] shrink-0 rounded-2xl p-5 hover:bg-white/[0.04] transition-colors">
      <div className="flex items-center gap-3">
        <div
          className="h-12 w-12 rounded-xl shrink-0"
          style={{
            background:
              "conic-gradient(from 180deg, var(--neon-violet), var(--neon-blue), var(--neon-green), var(--neon-violet))",
          }}
        />
        <div className="min-w-0">
          <div className="font-semibold tracking-tight truncate">{f.name}</div>
          <div className="text-xs text-muted-foreground truncate">{f.role}</div>
        </div>
      </div>
      <div className="mt-4 inline-flex items-center font-mono text-[10px] tracking-wider uppercase text-muted-foreground border border-white/10 rounded-full px-2 py-1">
        {f.tag}
      </div>
    </div>
  );
}
