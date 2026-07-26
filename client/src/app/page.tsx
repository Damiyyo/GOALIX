import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/sections/HeroSection";
import FeaturesSection from "@/sections/FeaturesSection";
import LeaguesSection from "@/sections/LeaguesSection";
import NewsSection from "@/sections/NewsSection";
import CTASection from "@/sections/CTASection";
import Footer from "@/components/layout/Footer";




export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <LeaguesSection />
      <NewsSection />
      <CTASection />
      <Footer />
    </main>
  );
}