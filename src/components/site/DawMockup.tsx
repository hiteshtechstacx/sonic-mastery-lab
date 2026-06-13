import { motion } from "motion/react";
import { Disc3, Music2, Mic2, Waves } from "lucide-react";
import { Waveform } from "./Waveform";

const tracks = [
  { name: "Drums", icon: Disc3, color: "var(--neon-violet)", level: 0.92 },
  { name: "Bass", icon: Waves, color: "var(--neon-blue)", level: 0.74 },
  { name: "Synths", icon: Music2, color: "var(--neon-green)", level: 0.85 },
  { name: "Vocals", icon: Mic2, color: "var(--neon-violet)", level: 0.6 },
];

export function DawMockup() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* glow */}
      <div
        className="absolute -inset-8 -z-10 rounded-[40px] blur-3xl opacity-60"
        style={{ background: "var(--gradient-neon)" }}
      />
      <div className="glass rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-[var(--shadow-elevated)]">
        {/* top bar */}
        <div className="flex items-center justify-between px-2 pb-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <div className="font-mono text-[10px] md:text-xs text-muted-foreground tracking-wider">
            RECREATION.SESSION — "BLINDING LIGHTS" / 171 BPM / F MINOR
          </div>
          <div className="font-mono text-[10px] md:text-xs text-[var(--neon-green)]">
            ● REC
          </div>
        </div>

        <div className="rounded-xl md:rounded-2xl bg-[var(--surface)] p-3 md:p-4 border border-white/5">
          <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-2 md:gap-3">
            {tracks.map((t, i) => (
              <RowGroup key={t.name} track={t} index={i} />
            ))}
          </div>

          {/* transport */}
          <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
            <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs text-muted-foreground">
              <span>00:00:42</span>
              <span className="opacity-40">/</span>
              <span>00:03:20</span>
            </div>
            <div className="flex items-center gap-1.5">
              {["A", "B", "C", "D"].map((k) => (
                <div
                  key={k}
                  className="font-mono text-[10px] px-2 py-1 rounded bg-white/5 text-muted-foreground"
                >
                  {k}
                </div>
              ))}
            </div>
            <div className="font-mono text-[10px] md:text-xs text-[var(--neon-violet)]">
              ANALYZING…
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RowGroup({
  track,
  index,
}: {
  track: (typeof tracks)[number];
  index: number;
}) {
  const Icon = track.icon;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 + index * 0.08 }}
        className="flex items-center gap-2 rounded-lg bg-white/5 px-2 md:px-3 py-2"
      >
        <Icon
          className="h-3.5 w-3.5 md:h-4 md:w-4"
          style={{ color: track.color }}
        />
        <span className="text-[11px] md:text-xs font-medium">{track.name}</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0.5 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.45 + index * 0.08, duration: 0.6 }}
        style={{ originX: 0 }}
        className="relative h-9 md:h-11 rounded-lg overflow-hidden bg-black/30 border border-white/5"
      >
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background: `linear-gradient(90deg, ${track.color}22, transparent)`,
          }}
        />
        <div className="absolute inset-2">
          <Waveform bars={48} color={track.color} />
        </div>
      </motion.div>
    </>
  );
}
