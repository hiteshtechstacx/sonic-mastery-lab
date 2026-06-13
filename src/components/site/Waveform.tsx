import { useEffect, useRef } from "react";

interface Props {
  bars?: number;
  color?: string;
  className?: string;
}

export function Waveform({ bars = 64, color = "var(--neon-violet)", className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const dt = (t - start) / 1000;
      children.forEach((c, i) => {
        const v =
          0.3 +
          0.7 *
            (0.5 +
              0.5 *
                Math.sin(dt * 2 + i * 0.35) *
                Math.cos(dt * 0.7 + i * 0.12));
        c.style.transform = `scaleY(${v})`;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [bars]);

  return (
    <div
      ref={ref}
      className={
        "flex h-full w-full items-center justify-between gap-[2px] " + (className ?? "")
      }
    >
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className="flex-1 rounded-full origin-center"
          style={{
            height: "100%",
            background: `linear-gradient(180deg, ${color}, transparent)`,
            transition: "transform 80ms linear",
          }}
        />
      ))}
    </div>
  );
}
