
import Navbar from "@/components/navigation/Navbar";
import GoalixPredictionLanding from "@/components/landing/LandingPage";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <GoalixPredictionLanding />
      <Footer />
    </main>
  );
}

