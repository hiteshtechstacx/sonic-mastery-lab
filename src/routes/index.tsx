import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Philosophy } from "@/components/site/Philosophy";
import { Pillars } from "@/components/site/Pillars";
import { Recreation } from "@/components/site/Recreation";
import { Faculty } from "@/components/site/Faculty";
import { Inspiration } from "@/components/site/Inspiration";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Recreation Union — Deconstruct the Hits. Master the Craft." },
      {
        name: "description",
        content:
          "A premium ecosystem treating music recreation as a rigorous discipline — elite cohorts, an interactive sandbox, and AI-powered workflows for serious producers.",
      },
      { property: "og:title", content: "The Recreation Union" },
      {
        property: "og:description",
        content:
          "Deconstruct the hits. Master the craft. Cohort-based music production training led by working hit-makers.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Philosophy />
      <Pillars />
      <Recreation />
      <Faculty />
      <Inspiration />
      <FinalCTA />
      <Footer />
    </main>
  );
}
