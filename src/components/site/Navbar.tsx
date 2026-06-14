import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Sandbox", href: "#sandbox" },
  { label: "Faculty", href: "#faculty" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 24));
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <motion.nav
        animate={{
          width: scrolled ? "min(880px, 100%)" : "min(1180px, 100%)",
          paddingTop: scrolled ? 8 : 14,
          paddingBottom: scrolled ? 8 : 14,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="glass relative flex items-center justify-between rounded-full px-5"
      >
        <a href="#top" className="flex items-center gap-2">
          <div className="relative h-7 w-7">
            <div className="absolute inset-0 rounded-md bg-[var(--gradient-neon)]" />
            <div className="absolute inset-[3px] rounded-[5px] bg-background grid place-items-center">
              <div className="h-2 w-2 rounded-full bg-[var(--neon-violet)] shadow-[0_0_8px_var(--neon-violet)]" />
            </div>
          </div>
          <span className="font-semibold tracking-tight">The Recreation Union</span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="#apply"
            className="relative inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-background bg-foreground hover:opacity-90 transition"
          >
            Apply
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 inset-x-4 glass rounded-2xl p-4 flex flex-col gap-3"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium"
          >
            Apply
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
