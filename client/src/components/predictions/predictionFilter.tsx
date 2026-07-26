"use client";

interface PredictionFiltersProps {
  selectedLeague: string;

  onLeagueChange: (
    league: string
  ) => void;
}

const leagues = [
  "All",

  "Premier League",

  "La Liga",

  "Bundesliga",

  "Serie A",

  "Ligue 1",
];

export default function PredictionFilters({
  selectedLeague,
  onLeagueChange,
}: PredictionFiltersProps) {
  return (
    <section className="mt-10">
      <p
        className="
          mb-5

          text-sm
          font-semibold

          uppercase

          tracking-[0.2em]

          text-zinc-500
        "
      >
        Filter By League
      </p>

      <div
        className="
          flex
          flex-wrap

          gap-3
        "
      >
        {leagues.map(
          (league) => (
            <button
              key={league}
              onClick={() =>
                onLeagueChange(
                  league
                )
              }
              className={`
                rounded-full

                border

                px-6
                py-3

                text-sm
                font-bold

                transition-all
                duration-300

                ${
                  selectedLeague ===
                  league
                    ? `
                      border-green-500
                      bg-green-500
                      text-black
                      shadow-lg
                      shadow-green-500/30
                    `
                    : `
                      border-white/10
                      bg-[#151515]
                      text-zinc-300

                      hover:border-green-500/40
                      hover:text-white
                    `
                }
              `}
            >
              {league}
            </button>
          )
        )}
      </div>
    </section>
  );
}