import { motion } from "motion/react";
import { TrendingUp, DollarSign, BarChart3, Briefcase, ArrowUpRight } from "lucide-react";

const cases = [
  {
    tag: "Royalties 101",
    title: "How a sync placement turned ₹0 into ₹14L in 18 months",
    summary:
      "Breakdown of master vs publishing splits, PRO registration, and the negotiation that 3x'd backend payouts.",
    stat: "₹14,00,000",
    statLabel: "Lifetime payout",
    Icon: DollarSign,
    accent: "var(--neon-green)",
  },
  {
    tag: "Release Strategy",
    title: "Independent EP → 2.1M streams without a label",
    summary:
      "Distribution math, playlist pitching ROI, ad spend per stream, and when to reinvest vs cash out.",
    stat: "2.1M",
    statLabel: "Streams · 90 days",
    Icon: TrendingUp,
    accent: "var(--neon-violet)",
  },
  {
    tag: "Studio Economics",
    title: "Bedroom producer to ₹3L/month: a P&L teardown",
    summary:
      "Pricing tiers, client retention, gear amortization, and the tax structure most producers get wrong.",
    stat: "₹3L/mo",
    statLabel: "Net revenue",
    Icon: BarChart3,
    accent: "var(--neon-blue)",
  },
  {
    tag: "Brand Deals",
    title: "Why a ₹50K beat sold for ₹8L as a brand asset",
    summary:
      "Reframing music as IP. Licensing structures, exclusivity windows, and the contract clauses that matter.",
    stat: "16×",
    statLabel: "Value multiplier",
    Icon: Briefcase,
    accent: "var(--neon-green)",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.2]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-4xl">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 font-mono text-xs text-[var(--neon-green)] tracking-[0.2em] uppercase glass rounded-full px-3 py-1"
            >
              <Briefcase className="h-3.5 w-3.5" />
              Business Case Studies
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl"
            >
              Make music like an artist.{" "}
              <span className="text-gradient-neon">Think like an operator.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground md:max-w-sm md:text-right"
          >
            Real teardowns of how producers, songwriters, and labels actually
            make money — so your craft compounds into a career.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group relative glass rounded-2xl p-7 overflow-hidden hover:bg-white/[0.04] transition-colors"
            >
              <div
                className="absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-700"
                style={{ background: c.accent }}
              />
              <div className="relative flex items-start justify-between gap-4">
                <div
                  className="h-11 w-11 rounded-xl grid place-items-center"
                  style={{
                    background: `color-mix(in oklab, ${c.accent} 18%, transparent)`,
                    boxShadow: `0 0 24px -6px ${c.accent}`,
                  }}
                >
                  <c.Icon className="h-5 w-5" style={{ color: c.accent }} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {c.tag}
                </span>
              </div>

              <h3 className="relative mt-6 text-xl md:text-[1.35rem] font-semibold tracking-tight leading-snug">
                {c.title}
              </h3>
              <p className="relative mt-3 text-sm text-muted-foreground leading-relaxed">
                {c.summary}
              </p>

              <div className="relative mt-7 flex items-end justify-between gap-4 pt-5 border-t border-white/5">
                <div>
                  <div
                    className="font-display text-3xl font-semibold tracking-tight"
                    style={{ color: c.accent }}
                  >
                    {c.stat}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
                    {c.statLabel}
                  </div>
                </div>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-1 text-xs font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  Read teardown
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center justify-between gap-5"
        >
          <div className="flex items-center gap-4">
            <div
              className="h-10 w-10 rounded-xl grid place-items-center shrink-0"
              style={{ background: "var(--gradient-neon)" }}
            >
              <TrendingUp className="h-5 w-5 text-background" />
            </div>
            <div>
              <div className="text-sm md:text-base font-semibold tracking-tight">
                Every cohort ships with a Money Module.
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                Live P&L reviews, contract clinics, and tax playbooks built for
                Indian music creators.
              </p>
            </div>
          </div>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition self-start md:self-auto"
          >
            See the curriculum
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
