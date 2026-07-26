
import Link from "next/link";

const fixtures = [
  {
    home: "Manchester City",
    away: "AFC Bournemouth",
    time: "20:00",
    league: "Premier League",
  },

  {
    home: "Barcelona",
    away: "Atletic Bilbao",
    time: "20:00",
    league: "LaLiga",
  },

  {
    home: "Bayern Munich",
    away: "Stuttgart",
    time: "19:30",
    league: "Bundesliga",
  },

  {
    home: "Inter Milan",
    away: "AC Monza",
    time: "17:30",
    league: "Serie A",
  },
  {
    home: "PSG",
    away: "Rennes",
    time: "19:45",
    league: "Ligue1",
  },
];

const UpcomingFixtures = () => {
  return (
    <section
      className="
        mt-10

        rounded-[35px]

        border border-white/[0.08]

        bg-white/[0.03]
        backdrop-blur-xl

        p-7

        shadow-[0_0_40px_rgba(255,255,255,0.02)]
      "
    >
      {/* HEADER */}
      <div
        className="
          flex items-center
          justify-between
        "
      >
        <div>
          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.15em]
              text-zinc-500
            "
          >
            Match Schedule
          </p>

          <h2
            className="
              mt-3

              text-3xl
              font-black
              tracking-tight
              text-white
            "
          >
            Upcoming Fixtures
          </h2>
        </div>

        {/* FULL SCHEDULE */}
        <Link href="/predictions">
          <button
            className="
              rounded-2xl

              border border-white/[0.08]

              px-5 py-3

              text-sm
              font-semibold
              text-white

              transition-all
              duration-300

              hover:bg-white/[0.05]
              hover:border-white/20
            "
          >
            Full Schedule
          </button>
        </Link>
      </div>

      {/* FIXTURES */}
      <div className="mt-10 space-y-5">
        {fixtures.map((fixture, index) => (
          <div
            key={index}
            className="
              flex flex-col
              gap-5

              rounded-[28px]

              border border-white/[0.08]

              bg-white/[0.03]

              p-5

              transition-all
              duration-500

              hover:bg-white/[0.05]
              hover:border-white/20
              hover:-translate-y-1

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* LEFT */}
            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-zinc-500
                "
              >
                {fixture.league}
              </p>

              <h3
                className="
                  mt-3

                  text-xl
                  font-black
                  text-white
                "
              >
                {fixture.home}
              </h3>

              <p
                className="
                  mt-1
                  text-zinc-500
                "
              >
                vs
              </p>

              <h3
                className="
                  mt-1

                  text-xl
                  font-black
                  text-white
                "
              >
                {fixture.away}
              </h3>
            </div>

            {/* RIGHT */}
            <div
              className="
                flex items-center
                gap-4
              "
            >
              {/* TIME */}
              <div
                className="
                  rounded-2xl
                  bg-black/20

                  px-5 py-4
                "
              >
                <span
                  className="
                    text-lg
                    font-black
                    text-white
                  "
                >
                  {fixture.time}
                </span>
              </div>

              {/* PREDICT BUTTON */}
              <Link href="/predictions">
                <button
                  className="
                    rounded-2xl

                    bg-gradient-to-r
                    from-white
                    to-zinc-200

                    px-5 py-4

                    text-sm
                    font-black
                    text-black

                    shadow-[0_10px_30px_rgba(255,255,255,0.08)]

                    transition-all
                    duration-300

                    hover:scale-[1.03]
                  "
                >
                  View Predictions
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingFixtures;