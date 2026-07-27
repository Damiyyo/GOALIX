"use client";

import Link from "next/link";

import {
  ArrowRight,
  Bot,
  Sparkles,
  Trophy,
} from "lucide-react";

const FPLHub = () => {
  return (
    <section
      className="
        relative

        mt-10

        overflow-hidden

        rounded-[40px]

        border
        border-white/10

        bg-[#111111]

        p-8

        lg:mt-14
        lg:p-10
      "
    >
      {/* Glow */}

      <div
        className="
          absolute

          -left-32
          -top-20

          h-80
          w-80

          rounded-full

          bg-green-500/10

          blur-[150px]
        "
      />

      <div
        className="
          absolute

          -right-20
          bottom-0

          h-72
          w-72

          rounded-full

          bg-green-500/10

          blur-[150px]
        "
      />

      {/* HEADER */}

      <div className="relative z-10">
        <div
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-green-500/30

            bg-green-500/10

            px-4
            py-2
          "
        >
          <Sparkles
            size={16}
            className="text-green-400"
          />
        </div>

        <h2
          className="
            mt-6

            text-4xl
            font-black
            tracking-tight

            lg:text-6xl
          "
        >
          FPL Cheatbot
        </h2>

        <p
          className="
            mt-6

            max-w-3xl

            text-lg

            leading-8

            text-zinc-400
          "
        >
          Use the Fantasy
          Premier League CheatBot for
          smarter captain picks,
          transfer recommendations and
          weekly insights while competing
          in the official Goalix Fantasy
          League.
        </p>
      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10

          mt-12

          grid
          gap-6

          lg:grid-cols-[1.3fr_.9fr]
        "
      >
        {/* LEFT */}

        <div
          className="
            rounded-[30px]

            border
            border-white/10

            bg-white/[0.03]

            p-8
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center

                rounded-2xl

                bg-green-500/15
              "
            >
              <Bot
                size={34}
                className="text-green-400"
              />
            </div>

            <div>
              <h3
                className="
                  text-3xl
                  font-black
                "
              >
                FPL CheatBot
              </h3>

              <p
                className="
                  mt-1

                  text-zinc-500
                "
              >
                
              </p>
            </div>
          </div>

          <p
            className="
              mt-8

              leading-8

              text-zinc-400
            "
          >
            Get player form, injuries, transfer advive,
            differential players
            expected minutes and
            advanced statistics to help
            maximize your Fantasy Premier
            League points every gameweek.
          </p>

          <div
            className="
              mt-10

              grid
              gap-4

              md:grid-cols-2
            "
          >
            {[
              "Captain Picks",
              "Transfer Advice",
              "Differential Players",
              "Fixture Difficulty",
            ].map((item) => (
              <div
                key={item}
                className="
                  rounded-2xl

                  border
                  border-white/5

                  bg-white/[0.04]

                  px-5
                  py-4

                  font-semibold

                  transition-all
                  duration-300

                  hover:border-green-500/20
                "
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
                {/* RIGHT */}

                <div
          className="
            rounded-[30px]

            border
            border-green-500/20

            bg-gradient-to-br

            from-green-500/10
            via-green-500/5
            to-transparent

            p-8
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center

                rounded-2xl

                bg-yellow-500/15
              "
            >
              <Trophy
                size={34}
                className="text-yellow-400"
              />
            </div>

            <div>
              <h3
                className="
                  text-3xl
                  font-black
                "
              >
                Goalix League
              </h3>

              <p
                className="
                  mt-1

                  text-zinc-400
                "
              >
                Official FPL Competition
              </p>
            </div>
          </div>

          {/* Prize */}

          <div
            className="
              mt-10

              rounded-[28px]

              border
              border-green-500/20

              bg-black/20

              p-6
            "
          >
            <p
              className="
                text-sm

                uppercase

                tracking-[0.15em]

                text-zinc-400
              "
            >
              Grand Prize
            </p>

            <h2
              className="
                mt-4

                text-7xl

                font-black

                text-green-400
              "
            >
              $100
            </h2>

            <p
              className="
                mt-4

                leading-7

                text-zinc-400
              "
            >
              The manager with the
              highest overall Fantasy
              Premier League points at
              the end of the season wins
              the entire cash prize.
            </p>
          </div>

          {/* Competition Rules */}

          <div
            className="
              mt-8

              rounded-[28px]

              bg-white/[0.03]

              p-6
            "
          >
            <h4
              className="
                text-lg
                font-black
              "
            >
              Competition Rules
            </h4>

            <div
              className="
                mt-5

                space-y-4
              "
            >
              {[
                "Free to Join",
                "Highest Overall Points Wins",
                "Prize Paid At Season End",
              ].map((rule) => (
                <div
                  key={rule}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      h-2
                      w-2

                      rounded-full

                      bg-green-400
                    "
                  />

                  <span
                    className="
                      font-medium

                      text-zinc-300
                    "
                  >
                    {rule}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
            {/* LIVE STATS */}

            <div
        className="
          relative
          z-10

          mt-10

          grid
          gap-5

          md:grid-cols-2
        "
      >
        {/* Members */}

        <div
          className="
            rounded-[28px]

            border
            border-white/10

            bg-white/[0.03]

            p-6

            text-center
          "
        >
          <p
            className="
              text-sm

              text-zinc-500
            "
          >
            League Members
          </p>

          <h3
            className="
              mt-3

              text-5xl

              font-black
            "
          >
            0
          </h3>

          <p
            className="
              mt-2

              text-sm

              text-zinc-500
            "
          >
            Join now and become one of
            the first competitors.
          </p>
        </div>

        {/* Prize */}

        <div
          className="
            rounded-[28px]

            border
            border-green-500/20

            bg-green-500/10

            p-6

            text-center
          "
        >
          <p
            className="
              text-sm

              text-zinc-300
            "
          >
            Prize Pool
          </p>

          <h3
            className="
              mt-3

              text-5xl

              font-black

              text-green-400
            "
          >
            $100
          </h3>

          <p
            className="
              mt-2

              text-sm

              text-zinc-300
            "
          >
            Winner takes it all.
          </p>
        </div>
      </div>

      {/* ACTION BUTTONS */}

      <div
        className="
          relative
          z-10

          mt-10

          flex
          flex-wrap
          gap-4
        "
      >
        <Link
          href="https://fantasy.premierleague.com/leagues/auto-join/qknq5z"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-3

            rounded-2xl

            bg-white

            px-8
            py-4

            text-sm
            font-black

            text-black

            transition-all
            duration-300

            hover:scale-[1.03]
          "
        >
          Join Goalix League

          <ArrowRight size={18} />
        </Link>

        <Link
  href="https://www.fplcheat.com"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex
    items-center
    gap-3

    rounded-2xl

    bg-white

    px-8
    py-4

    text-sm
    font-black

    text-black

    transition-all
    duration-300

    hover:scale-[1.03]
  "
>
  Open CheatBot
</Link>
      </div>
    </section>
  );
};

export default FPLHub;