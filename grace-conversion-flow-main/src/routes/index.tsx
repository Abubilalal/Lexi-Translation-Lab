import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { LogoWall } from "@/components/site/LogoWall";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Pricing } from "@/components/site/Pricing";
import { Proof } from "@/components/site/Proof";
import { Security } from "@/components/site/Security";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

const TITLE = "Lexi Translation Lab — Court-certified legal translation";
const DESC =
  "Court-certified Hindi ↔ English legal translation, true-type copies, and forensic audio/video transcription. Binding quote in 15 minutes. 24-hour turnaround.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <LogoWall />
        <Services />
        <Process />
        <Pricing />
        <Proof />
        <Security />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
