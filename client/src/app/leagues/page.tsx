import Link from "next/link";

import Navbar from "@/components/navigation/Navbar";

const leagues = [
  {
    name: "Premier League",
    slug: "premier-league",
    logo: "/leagues/premeirLeague.png",
  },
  {
    name: "La Liga",
    slug: "la-liga",
    logo: "/leagues/laLiga.png",
  },
  {
    name: "Bundesliga",
    slug: "bundesliga",
    logo: "/leagues/bundesliga..png",
  },
  {
    name: "Serie A",
    slug: "serie-a",
    logo: "/leagues/SerieA.jpeg",
  },
  {
    name: "Ligue 1",
    slug: "ligue-1",
    logo: "/leagues/Ligue1_logo.png",
  },
  // {
  //   name: "Champions League",
  //   slug: "Champe",
  //   logo: "/leagues/Ligue1_logo.png",
  // },
  // {
  //   name: "Europa Conference League",
  //   slug: "europacon",
  //   logo: "/leagues/Ligue1_logo.png",
  // },
  // {
  //   name: "Europa League",
  //   slug: "europa",
  //   logo: "/leagues/Ligue1_logo.png",
  // },
];

export default function LeaguesPage() {
  return (
    <main
      className="
        min-h-screen

        bg-[#0b0b0b]

        text-white
      "
    >
      {/* NAVBAR */}

      <Navbar />

      {/* PAGE */}

      <div
        className="
          mx-auto

          max-w-7xl

          px-4

          pt-36
          pb-12

          lg:px-8
          lg:pt-28
        "
      >
        {/* HERO */}

        <section className="mb-12">
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]

              text-green-400
            "
          >
          </p>

          <h1
            className="
              mt-4

              text-4xl
              font-black
              tracking-tight

              lg:text-6xl
            "
          >
          League Tables
          </h1>

          <p
            className="
              mt-4

              max-w-2xl

              text-zinc-400
            "
          >
            Browse league tables from
            Europe's biggest
            competitions.
          </p>
        </section>

        {/* LEAGUES */}

        <section
          className="
            grid
            gap-6

            md:grid-cols-2

            xl:grid-cols-3
          "
        >
          {leagues.map(
            (league) => (
              <Link
                key={league.slug}
                href={`/leagues/${league.slug}`}
                className="
                  group

                  rounded-[30px]

                  border
                  border-white/10

                  bg-white/[0.03]

                  p-7

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-green-500/30
                  hover:bg-white/[0.05]
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-5
                  "
                >
                  <img
                    src={league.logo}
                    alt={league.name}
                    className="
                      h-16
                      w-16

                      object-contain
                    "
                  />

                  <div>
                    <h2
                      className="
                        text-2xl
                        font-black

                        transition-colors

                        group-hover:text-green-400
                      "
                    >
                      {league.name}
                    </h2>

                    <p
                      className="
                        mt-2

                        text-sm

                        text-zinc-500
                      "
                    >
                      View standings →
                    </p>
                  </div>
                </div>
              </Link>
            )
          )}
        </section>
      </div>
    </main>
  );
}