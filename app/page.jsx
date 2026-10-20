import Hero from "@/components/home/Hero";
import ProofMarquee from "@/components/home/ProofMarquee";
import About from "@/components/home/About";
import FeaturedWork from "@/components/home/FeaturedWork";
import Capabilities from "@/components/home/Capabilities";
import Process from "@/components/home/Process";
import AiCollaboration from "@/components/home/AiCollaboration";
import Experience from "@/components/home/Experience";
import Recognition from "@/components/home/Recognition";
import ClosingCta from "@/components/home/ClosingCta";

// Order follows what a recruiter looks for: who is this (hero, proof row),
// show me the work, who are you (about + numbers), what can you do for us
// (capabilities, process, working with AI), track record (experience, recognition), contact.
export default function Home() {
  return (
    <>
      <Hero />
      <ProofMarquee />
      <FeaturedWork />
      <About />
      <Capabilities />
      <Process />
      <AiCollaboration />
      <Experience />
      <Recognition />
      <ClosingCta />
    </>
  );
}
