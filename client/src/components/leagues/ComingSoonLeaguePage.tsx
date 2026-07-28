"use client";

import Link from "next/link";

interface Props {
  slug: string;
}

const competitions = {
  "champions-league": {
    title: "UEFA Champions League",
    emoji: "🏆",
    colour: "text-green-400",
    date: "16 September 2026",
    description:
      "Europe's biggest club competition.",
  },

  "europa-league": {
    title: "UEFA Europa League",
    emoji: "🟠",
    colour: "text-orange-400",
    date: "17 September 2026",
    description:
      "The road to European glory continues.",
  },

  "conference-league": {
    title: "UEFA Conference League",
    emoji: "🟢",
    colour: "text-emerald-400",
    date: "17 September 2026",
    description:
      "The newest UEFA club competition.",
  },
} as const;

const ComingSoonLeaguePage = ({
  slug,
}: Props) => {
  const league =
    competitions[
      slug as keyof typeof competitions
    ];

  if (!league) return null;

  return (
    <main
      className="
        min-h-screen

        bg-[#0b0b0b]

        px-6
        py-20

        text-white
      "
    >
      <div
        className="
          mx-auto

          max-w-4xl
        "
      >
        <div
          className="
            rounded-[40px]

            border
            border-white/10

            bg-[#141414]

            p-10

            text-center
          "
        >
          <div className="text-7xl">
            {league.emoji}
          </div>

          <h1
            className="
              mt-8

              text-5xl
              font-black
            "
          >
            {league.title}
          </h1>

          <p
            className="
              mt-5

              text-zinc-400
            "
          >
            {league.description}
          </p>

          <div
            className="
              mt-10

              rounded-3xl

              bg-black/40

              p-8
            "
          >
            <p
              className="
                text-sm
                uppercase

                tracking-[0.2em]

                text-zinc-500
              "
            >
              Competition Starts
            </p>

            <h2
              className={`
                mt-5

                text-4xl
                font-black

                ${league.colour}
              `}
            >
              {league.date}
            </h2>
          </div>

          <div className="mt-12">
            <h3
              className="
                text-2xl
                font-black
              "
            >
              Goalix will include
            </h3>

            <div
              className="
                mt-8

                grid

                gap-4

                md:grid-cols-2
              "
            >
              {[
                "AI Predictions",
                "Live Scores",
                "Match Insights",
                "xG Analytics",
                "Lineups",
                "League Table",
                "Team News",
                "H2H Statistics",
              ].map((feature) => (
                <div
                  key={feature}
                  className="
                    rounded-2xl

                    border
                    border-white/10

                    bg-white/5

                    p-4
                  "
                >
                  ✓ {feature}
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/leagues"
            className="
              mt-12

              inline-flex

              rounded-2xl

              bg-white

              px-8
              py-4

              font-black

              text-black
            "
          >
            Back to Leagues
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ComingSoonLeaguePage;