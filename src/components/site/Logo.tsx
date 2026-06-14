import { motion } from "motion/react";

type Props = {
  size?: number;
  withWordmark?: boolean;
  className?: string;
};

export function Logo({ size = 36, withWordmark = true, className = "" }: Props) {
  return (
    <a href="#top" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <motion.div
        whileHover={{ rotate: [0, -6, 6, -3, 0] }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative shrink-0"
        style={{ width: size, height: size }}
      >
        {/* Outer glow */}
        <div
          className="absolute -inset-1.5 rounded-[14px] opacity-50 blur-md group-hover:opacity-80 transition-opacity"
          style={{ background: "var(--gradient-neon)" }}
        />
        {/* Sticker squircle */}
        <div
          className="absolute inset-0 rounded-[12px] shadow-[0_4px_20px_-4px_rgba(167,85,247,0.6)]"
          style={{
            background:
              "conic-gradient(from 220deg, var(--neon-violet), var(--neon-blue), var(--neon-green), var(--neon-violet))",
          }}
        />
        {/* Inner dark face */}
        <div className="absolute inset-[2px] rounded-[10px] bg-background grid place-items-center overflow-hidden">
          <svg
            viewBox="0 0 40 40"
            className="h-[78%] w-[78%]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Play triangle / "R" hybrid */}
            <path
              d="M11 8 L11 32 L31 20 Z"
              fill="url(#g1)"
              stroke="url(#g1)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Mini smile / waveform under */}
            <g stroke="var(--neon-green)" strokeWidth="2" strokeLinecap="round">
              <line x1="14" y1="34" x2="14" y2="36" />
              <line x1="18" y1="33" x2="18" y2="37" />
              <line x1="22" y1="34" x2="22" y2="36" />
              <line x1="26" y1="32" x2="26" y2="38" />
            </g>
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="40" y2="40">
                <stop offset="0%" stopColor="oklch(0.7 0.27 300)" />
                <stop offset="60%" stopColor="oklch(0.78 0.18 230)" />
                <stop offset="100%" stopColor="oklch(0.82 0.22 150)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* Sparkle dot */}
        <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[var(--neon-green)] shadow-[0_0_8px_var(--neon-green)] animate-pulse" />
      </motion.div>

      {withWordmark && (
        <div className="flex flex-col leading-none">
          <span className="font-semibold tracking-tight text-[0.95rem]">
            The Recreation Union
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground mt-1">
            new-age music school
          </span>
        </div>
      )}
    </a>
  );
}
