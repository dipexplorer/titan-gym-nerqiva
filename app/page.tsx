import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import TrainingZonesSection from '@/components/sections/TrainingZonesSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import TrainersSection from '@/components/sections/TrainersSection';
import PricingSection from '@/components/sections/PricingSection';
import PassClaimSection from '@/components/sections/PassClaimSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-white selection:bg-gold selection:text-obsidian">
      <Navbar />
      <HeroSection />
      <TrainingZonesSection />
      <ProgramsSection />
      <TrainersSection />
      <PricingSection />
      <PassClaimSection />
      <Footer />
    </main>
  );
}
