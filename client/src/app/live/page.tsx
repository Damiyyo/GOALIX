
import Link from "next/link";

import Navbar from "@/components/navigation/Navbar";

const PublicLivePage = () => {
  return (
    <main
      className="
        min-h-screen

        bg-[#0b0b0b]

        bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_35%)]

        text-white
      "
    >
      {/* NAVBAR */}
      <Navbar />

      <div
        className="
          px-4
          py-28
        "
      >
        <div className="mx-auto max-w-7xl">
          {/* HERO */}

          <section
            className="
              text-center
            "
          >
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]

                text-green-400
              "
            >
              Goalix Public LiveScore
            </p>

            <h1
              className="
                mt-5

                text-6xl
                font-black
                tracking-tight
              "
            >
              Live Football Scores
            </h1>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl

                text-zinc-400
              "
            >
              Follow football matches
              in real-time and unlock
              advanced analytics with
              Goalix Premium.
            </p>

            {/* CTA */}

            <div
              className="
                mt-8

                flex flex-wrap
                items-center
                justify-center
                gap-4
              "
            >
              <Link
                href="/register"
                className="
                  rounded-2xl

                  bg-white

                  px-6 py-4

                  text-sm
                  font-black

                  text-black
                "
              >
                Get Premium Access
              </Link>

              <Link
                href="/login"
                className="
                  rounded-2xl

                  border border-white/[0.08]

                  bg-white/[0.03]

                  px-6 py-4

                  text-sm
                  font-semibold
                "
              >
                Login
              </Link>
            </div>
          </section>

          {/* LIVE MATCHES */}

          <section
            className="
              mt-14

              grid gap-5

              md:grid-cols-2

              xl:grid-cols-3
            "
          >
            {[1, 2, 3].map(
              (match) => (
                <div
                  key={match}
                  className="
                    rounded-[30px]

                    border border-white/[0.08]

                    bg-[#111111]

                    p-6
                  "
                >
                  {/* LEAGUE */}

                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.15em]

                      text-green-400
                    "
                  >
                    Premier League
                  </p>

                  {/* MATCH */}

                  <div
                    className="
                      mt-8

                      flex items-center
                      justify-between
                    "
                  >
                    {/* HOME */}

                    <div
                      className="
                        flex flex-col
                        items-center
                      "
                    >
                      <div
                        className="
                          h-16
                          w-16

                          rounded-full

                          bg-white/[0.05]
                        "
                      />

                      <p
                        className="
                          mt-3

                          text-sm
                          font-bold
                        "
                      >
                        Arsenal
                      </p>
                    </div>

                    {/* SCORE */}

                    <div
                      className="
                        flex flex-col
                        items-center
                      "
                    >
                      <h2
                        className="
                          text-5xl
                          font-black
                        "
                      >
                        2

                        <span
                          className="
                            mx-2

                            text-zinc-600
                          "
                        >
                          -
                        </span>

                        1
                      </h2>

                      <div
                        className="
                          mt-3

                          flex items-center
                          gap-2
                        "
                      >
                        <div
                          className="
                            h-2
                            w-2

                            rounded-full

                            bg-red-500

                            animate-pulse
                          "
                        />

                        <p
                          className="
                            text-sm
                            font-black

                            text-green-400
                          "
                        >
                          LIVE
                        </p>
                      </div>
                    </div>

                    {/* AWAY */}

                    <div
                      className="
                        flex flex-col
                        items-center
                      "
                    >
                      <div
                        className="
                          h-16
                          w-16

                          rounded-full

                          bg-white/[0.05]
                        "
                      />

                      <p
                        className="
                          mt-3

                          text-sm
                          font-bold
                        "
                      >
                        Liverpool
                      </p>
                    </div>
                  </div>

                  {/* PREMIUM LOCK */}

                  <div
                    className="
                      mt-8

                      rounded-2xl

                      border border-green-500/20

                      bg-green-500/10

                      p-4
                    "
                  >
                    <p
                      className="
                        text-sm
                        font-semibold

                        text-green-300
                      "
                    >
                      Unlock:
                    </p>

                    <ul
                      className="
                        mt-3

                        space-y-2

                        text-sm

                        text-zinc-300
                      "
                    >
                      <li>
                        • AI Predictions
                      </li>

                      <li>
                        • xG Analytics
                      </li>

                      <li>
                        • Live Momentum
                      </li>

                      <li>
                        • Match Insights
                      </li>
                    </ul>

                    <Link
                      href="/register"
                      className="
                        mt-5
                        inline-flex

                        rounded-xl

                        bg-white

                        px-4 py-3

                        text-sm
                        font-black

                        text-black
                      "
                    >
                      Upgrade
                    </Link>
                  </div>
                </div>
              )
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default PublicLivePage;