import { Mail, MapPin, Phone, Twitter, Instagram, Youtube, Linkedin, Music2, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Programs",
    links: [
      { label: "Cohort 01 · Production", href: "#apply" },
      { label: "Recreation Intensive", href: "#sandbox" },
      { label: "Mix & Master Lab", href: "#ecosystem" },
      { label: "Songwriting Studio", href: "#ecosystem" },
      { label: "Scholarships", href: "#apply" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "The Sandbox", href: "#sandbox" },
      { label: "Faculty", href: "#faculty" },
      { label: "Philosophy", href: "#philosophy" },
      { label: "Alumni Network", href: "#faculty" },
      { label: "Open Sessions", href: "#sandbox" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Recreation Journal", href: "#" },
      { label: "Sample Library", href: "#" },
      { label: "Stem Archive", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Press Kit", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#philosophy" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "mailto:hello@therecreationunion.com" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

const socials = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Youtube, href: "#", label: "YouTube" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Music2, href: "#", label: "Spotify" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-20 pb-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.18]" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[120%] blur-3xl opacity-30"
        style={{ background: "var(--gradient-neon)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Logo size={40} />


            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-sm">
              A new-age music school treating production as a rigorous discipline.
              Cohort-based training in recreation, songwriting, mixing, and
              mastering — led by working hit-makers.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-[var(--neon-violet)] shrink-0" />
                <span>
                  Studio HQ · 14 Linking Road, Bandra West<br />
                  Mumbai, Maharashtra 400050, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[var(--neon-blue)] shrink-0" />
                <a href="mailto:hello@therecreationunion.com" className="hover:text-foreground transition-colors">
                  hello@therecreationunion.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[var(--neon-green)] shrink-0" />
                <a href="tel:+919000000000" className="hover:text-foreground transition-colors">
                  +91 90000 00000
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="glass h-9 w-9 grid place-items-center rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/80">
                  {col.title}
                </div>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {l.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter strip */}
        <div className="mt-16 glass rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <div className="text-base font-semibold tracking-tight">
              Signals from the studio.
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Monthly drops: breakdowns, sample packs, cohort updates. No spam.
            </p>
          </div>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition self-start md:self-auto"
          >
            Join the list
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Wordmark */}
        <div
          aria-hidden
          className="mt-14 select-none text-center font-semibold tracking-[-0.04em] leading-none text-[18vw] md:text-[12rem] text-gradient-neon opacity-[0.08]"
        >
          RECREATION
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-muted-foreground tracking-[0.18em] uppercase">
            © 2026 The Recreation Union · All rights reserved
          </p>
          <p className="font-mono text-[10px] text-muted-foreground tracking-[0.18em] uppercase">
            Crafted in Mumbai · For the practitioners
          </p>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
