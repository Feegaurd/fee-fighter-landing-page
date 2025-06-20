
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import DownloadSection from "@/components/DownloadSection";
import TeamSection from "@/components/TeamSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <DownloadSection />
      <TeamSection />
    </div>
  );
};

export default Index;
