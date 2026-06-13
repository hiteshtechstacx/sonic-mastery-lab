export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="relative h-6 w-6">
            <div className="absolute inset-0 rounded-md bg-[var(--gradient-neon)]" />
            <div className="absolute inset-[3px] rounded-[4px] bg-background" />
          </div>
          <span className="text-sm font-semibold tracking-tight">Recreation Union</span>
        </div>
        <p className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">
          © 2026 · Built for the practitioners
        </p>
        <div className="flex items-center gap-5 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
