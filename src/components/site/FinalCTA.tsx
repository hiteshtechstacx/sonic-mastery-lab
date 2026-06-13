import { motion } from "motion/react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    const value = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      toast.error("Enter a valid email");
      return;
    }
    setStatus("loading");
    const { error } = await supabase
      .from("waitlist")
      .insert({ email: value, source: "landing_cta" });

    if (error) {
      // 23505 = unique violation; treat already-joined as success UX
      if (error.code === "23505") {
        setStatus("success");
        toast.success("You're already on the list — see you in cohort 01.");
        return;
      }
      setStatus("idle");
      toast.error(error.message || "Something went wrong. Try again.");
      return;
    }

    setStatus("success");
    toast.success("You're in. Watch your inbox for cohort 01 access.");
  }

  return (
    <section id="apply" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--surface)] p-10 md:p-16"
        >
          <div
            className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[800px] blur-3xl opacity-60"
            style={{ background: "var(--gradient-neon)" }}
          />
          <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

          <div className="relative text-center">
            <p className="font-mono text-xs text-[var(--neon-green)] tracking-[0.2em] uppercase">
              Cohort 01 · 40 seats
            </p>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
              <span className="text-gradient">Join the union.</span>
              <br />
              <span className="text-gradient-neon">Build records that matter.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
              Apply now to lock your seat, or join the waitlist for early access
              to the Sandbox.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row items-stretch gap-2 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@studio.com"
                disabled={status !== "idle"}
                className="flex-1 rounded-full bg-black/40 border border-white/10 px-5 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-[var(--neon-violet)] focus:ring-2 focus:ring-[var(--neon-violet)]/30 transition disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status !== "idle"}
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium overflow-hidden disabled:opacity-80"
              >
                <span
                  className="absolute -inset-1 -z-10 rounded-full opacity-70 blur-xl"
                  style={{ background: "var(--gradient-neon)" }}
                />
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Joining…
                  </>
                ) : status === "success" ? (
                  <>
                    <Check className="h-4 w-4" />
                    You're in
                  </>
                ) : (
                  <>
                    Join the Elite
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>
            <p className="mt-4 font-mono text-[10px] text-muted-foreground tracking-wider">
              NO SPAM · UNSUBSCRIBE ANY TIME
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
