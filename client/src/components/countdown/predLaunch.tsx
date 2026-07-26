"use client";

import Link from "next/link";

import Navbar from "@/components/navigation/Navbar";

import PredictionCountdown from "./predCoundown";

export default function PredictionLaunch() {
  return (
    <main
      className="
        relative

        min-h-screen

        overflow-hidden

        bg-[#0b0b0b]

        text-white
      "
    >
      {/* NAVBAR */}

      <Navbar />

      {/* BACKGROUND */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_35%)]
        "
      />

      <div
        className="
          absolute

          -left-32
          top-24

          h-72
          w-72

          rounded-full

          bg-green-500/10

          blur-[140px]
        "
      />

      <div
        className="
          absolute

          -right-24
          bottom-20

          h-80
          w-80

          rounded-full

          bg-green-500/10

          blur-[150px]
        "
      />

      {/* CONTENT */}

      <div
        className="
          relative
          z-10

          flex
          min-h-screen
          items-center
          justify-center

          px-6

          pt-32
          pb-16

          lg:pt-20
        "
      >
        <div
          className="
            mx-auto

            max-w-4xl

            text-center
          "
        >
          {/* TITLE */}

          <h1
            className="
              text-5xl
              font-black
              tracking-tight

              lg:text-7xl
            "
          >
            Predictions
            <br />
            Launch Soon
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto

              mt-8

              max-w-3xl

              text-lg

              leading-8

              text-zinc-400
            "
          >
            Our prediction engine is
            currently preparing the first
            matchweek of the 2026/27
            football season.

            <br />
            <br />

            Match Winner, BTTS,
            Over/Under Goals,
            Correct Score,
            Confidence Ratings and
            Booking Codes will all be
            available when predictions
            officially open.

            <br />
            <br />

            Subsequently, new predictions
            will be released two days
            before every gameweek,
            giving you enough time to
            review our analysis,
            compare odds, and make
            informed betting decisions
            before kickoff.
          </p>

          {/* COUNTDOWN */}

          <PredictionCountdown />

          {/* FEATURES */}

          <div
            className="
              mt-14

              grid
              gap-4

              md:grid-cols-2

              lg:grid-cols-4
            "
          >
            {[
              "Match Winner",
              "BTTS",
              "Over / Under",
              "Correct Score",
            ].map((item) => (
              <div
                key={item}
                className="
                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.03]

                  px-6
                  py-5

                  text-center

                  font-bold
                "
              >
                {item}
              </div>
            ))}
          </div>

          {/* BUTTON */}

          <Link
            href="/dashboard"
            className="
              mt-14

              inline-flex

              rounded-2xl

              bg-white

              px-8
              py-4

              text-sm
              font-black

              text-black

              transition-all
              duration-300

              hover:scale-105
            "
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}