"use client";

import GoalixBot from "./GoalixBot";
import LeagueCard from "./LeagueCard";

const leagues = [
  {
    name: "Premier League",
    country: "England",
    logo: "/leagues/premeirLeague.png",
  },
  {
    name: "La Liga",
    country: "Spain",
    logo: "/leagues/laLiga.png",
  },
  {
    name: "Serie A",
    country: "Italy",
    logo: "/leagues/SerieA.jpeg",
  },
  {
    name: "Bundesliga",
    country: "Germany",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg",
  },
  {
    name: "Ligue 1",
    country: "France",
    logo: "/leagues/Ligue1_logo.png",
  },
  {
    name: "Champions League",
    country: "Europe",
    logo: "/leagues/championsLeagues.svg.png",
  },
];

const LeagueMarquee = () => {
  return (
    <div
      className="
        relative

        overflow-hidden

        py-10
      "
    >
      {/* LEFT FADE */}

      <div
        className="
          pointer-events-none

          absolute
          left-0
          top-0
          z-20

          h-full
          w-32

          bg-gradient-to-r
          from-white
          to-transparent
        "
      />

      {/* RIGHT FADE */}

      <div
        className="
          pointer-events-none

          absolute
          right-0
          top-0
          z-20

          h-full
          w-32

          bg-gradient-to-l
          from-white
          to-transparent
        "
      />

      <div
        className="
          flex
          items-center
          gap-8
        "
      >
        <GoalixBot />

        <div
          className="
            marquee

            flex
            gap-6
          "
        >
          {[...leagues, ...leagues].map(
            (league, index) => (
              <LeagueCard
                key={`${league.name}-${index}`}
                {...league}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default LeagueMarquee;