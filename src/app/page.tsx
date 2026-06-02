import Hero from "@/components/home/Hero";
import PartiSection from "@/components/home/PartiSection";
import CandidatSection from "@/components/home/CandidatSection";
import PrioritesSection from "@/components/home/PrioritesSection";
import AppelSection from "@/components/home/AppelSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <PartiSection />
      <CandidatSection />
      <PrioritesSection />
      <AppelSection />
    </main>
  );
}
