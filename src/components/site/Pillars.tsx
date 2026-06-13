import { motion, useMotionValue, useTransform } from "motion/react";
import { GraduationCap, FlaskConical, Cpu, ArrowUpRight } from "lucide-react";
import { Waveform } from "./Waveform";
import type { PointerEvent, ReactNode } from "react";

export function Pillars() {
  return (
    <section id="ecosystem" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-[var(--neon-green)] tracking-[0.2em] uppercase"
          >
            The Ecosystem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Three pillars. <span className="text-gradient-neon">One discipline.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-5 text-muted-foreground"
          >
            A vertically integrated stack for producers who treat music as craft.
          </motion.p>
        </div>

        <div className="mt-14 grid md:grid-cols-6 grid-rows-[auto] gap-4 auto-rows-[minmax(260px,auto)]">
          {/* Academy - large */}
          <BentoCard className="md:col-span-4 md:row-span-2 min-h-[400px]">
            <div className="absolute inset-0 opacity-40">
              <div className="absolute inset-x-8 top-8 bottom-1/2 grid grid-cols-7 gap-1 opacity-50">
                {Array.from({ length: 7 * 7 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-sm bg-[var(--neon-violet)]/30"
                    style={{
                      opacity: Math.random() > 0.55 ? 1 : 0.15,
                    }}
                  />
                ))}
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
            </div>
            <div className="relative flex flex-col h-full">
              <Tag icon={GraduationCap}>The Academy</Tag>
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  Cohort-based mastery, taught by working hit-makers.
                </h3>
                <p className="mt-3 text-sm text-muted-foreground max-w-md">
                  12-week intensives with elite practitioners. Live recreations,
                  weekly critiques, a private peer network — no recorded
                  fluff.
                </p>
                <CardCTA>View curriculum</CardCTA>
              </div>
            </div>
          </BentoCard>

          {/* Sandbox */}
          <BentoCard className="md:col-span-2 md:row-span-1 min-h-[260px]">
            <Tag icon={FlaskConical}>The Sandbox</Tag>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">
              A browser-native production playground.
            </h3>
            <p className="mt-2 text-xs text-muted-foreground">
              Spin up an experiment. Swap chains. Diff your mix against the
              reference in seconds.
            </p>
            <div className="mt-4 rounded-lg bg-black/30 border border-white/5 p-2 h-14 overflow-hidden">
              <Waveform bars={36} color="var(--neon-green)" />
            </div>
          </BentoCard>

          {/* Factory */}
          <BentoCard className="md:col-span-2 md:row-span-1 min-h-[260px]">
            <Tag icon={Cpu}>The Factory</Tag>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">
              AI workflows that ship records faster.
            </h3>
            <p className="mt-2 text-xs text-muted-foreground">
              Stem separation, lyric scaffolds, reference matching, master-bus
              QA. The boring work, automated.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-1.5">
              {["STEMS", "MATCH", "MASTER"].map((s) => (
                <div
                  key={s}
                  className="rounded-md border border-white/10 bg-white/5 px-2 py-1.5 font-mono text-[10px] text-center text-muted-foreground"
                >
                  {s}
                </div>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

function Tag({ icon: Icon, children }: { icon: any; children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-muted-foreground uppercase">
      <Icon className="h-3.5 w-3.5 text-[var(--neon-violet)]" />
      {children}
    </div>
  );
}

function CardCTA({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground">
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </div>
  );
}

function BentoCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const rotateX = useTransform(my, [0, 100], [4, -4]);
  const rotateY = useTransform(mx, [0, 100], [-4, 4]);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };
  const onLeave = () => {
    mx.set(50);
    my.set(50);
  };

  return (
    <motion.div
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={
        "group relative overflow-hidden rounded-2xl glass p-6 md:p-7 " +
        (className ?? "")
      }
    >
      {/* mouse-follow glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: useTransform(
            [mx, my],
            ([x, y]) =>
              `radial-gradient(420px circle at ${x}% ${y}%, oklch(0.7 0.27 300 / 0.18), transparent 50%)`
          ),
        }}
      />
      {/* border gradient on hover */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: useTransform(
            [mx, my],
            ([x, y]) =>
              `radial-gradient(300px circle at ${x}% ${y}%, oklch(0.7 0.27 300 / 0.5), transparent 60%)`
          ),
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: 1,
        }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}
