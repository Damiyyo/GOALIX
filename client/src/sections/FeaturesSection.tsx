import Container from "@/components/ui/Container";
import FeatureCarousel from "@/components/home/FeatureCarousel";

const features = [
  {
    title: "Match Predictions",
    description:
      "Predict winners, over/under goals, both teams to score and correct scores using our AI-powered football intelligence built from club form, player performance, historical meetings and advanced statistics.",
    icon: "📊",
  },
  {
    title: "Live Scores",
    description:
      "Follow every goal, card, substitution and key match event in real time.",
    icon: "⚽",
  },
  {
    title: "League Coverage",
    description:
      "Track the biggest football leagues around the world with fixtures, standings, statistics and season updates all in one place.",
    icon: "🏆",
  },
  {
    title: "Club News",
    description:
      "Stay informed with the latest transfer news, injury reports, manager updates and everything happening around your favourite clubs.",
    icon: "📰",
  },
  {
    title: "AI Match Insights",
    description:
      "Our AI evaluates recent performances, tactical trends, injuries and historical data to provide intelligent match insights before kick-off.",
    icon: "🤖",
  },
  {
    title: "Advanced Statistics",
    description:
      "Dive deeper into football with xG, possession trends, shots, momentum graphs and detailed match analytics.",
    icon: "📈",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-24">
      <Container>
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          </p>

          <h2 className="text-4xl font-black leading-tight text-black md:text-5xl">
            Everything You Need
            <br />
            In One Football Platform
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-500">
            Goalix combines AI-powered predictions,
            live football scores, league coverage and
            advanced analytics into one premium football
            experience.
          </p>
        </div>

        {/* Carousel */}

        <FeatureCarousel features={features} />
      </Container>
    </section>
  );
};

export default FeaturesSection;
