"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Prediction {
  home: string;
  away: string;
  homeLogo: string;
  awayLogo: string;
  prediction: string;
  confidence: number;
  type: string;
}

interface League {
  name: string;
  country: string;
  predictions: Prediction[];
}

const leagues: League[] = [
  {
    name: "Premier League",
    country: "",
    predictions: [
      {
        home: "Arsenal",
        away: "Coventry",
        homeLogo: "/clubs/premier-league/Arsenal_FC.svg.png",
        awayLogo: "/clubs/premier-league/coventry.png",
        prediction: "Arsenal Win",
        confidence: 85,
        type: "Match Winner",
      },
      {
        home: "Newcastle United",
        away: "Liverpool",
        homeLogo: "/clubs/premier-league/Newcastle.svg.png",
        awayLogo: "/clubs/premier-league/liverpool.png",
        prediction: "BTTS & Over 2.5 Goals",
        confidence: 88,
        type: "Goals",
      },
      {
        home: "Fulham",
        away: "Chelsea",
        homeLogo: "/clubs/premier-league/Fulham.svg.png",
        awayLogo: "/clubs/premier-league/chelsea.png",
        prediction: "BTTS & OV 2.5",
        confidence: 79,
        type: "BTTS",
      },
    ],
  },

  {
    name: "La Liga",
    country: "",
    predictions: [
      {
        home: "Espanyol",
        away: "Real Madrid",
        homeLogo: "/clubs/laLiga/espanyol.svg.png",
        awayLogo: "/clubs/laLiga/real-madrid.png",
        prediction: "Real Madrid Win",
        confidence: 76,
        type: "Match Winner",
      },
      {
        home: "Barcelona",
        away: "Athletic Bilbao",
        homeLogo: "/clubs/laLiga/barcelona.png",
        awayLogo: "/clubs/laLiga/athletic-bilbao.svg.png",
        prediction: "Under 3.5 Goals",
        confidence: 73,
        type: "Goals",
      },
      {
        home: "Racing Santander",
        away: "Villarreal",
        homeLogo: "/clubs/laLiga/santander.svg.png",
        awayLogo:"/clubs/laLiga/villarreal.svg.png",
        prediction: "Barcelona Win",
        confidence: 82,
        type: "Match Winner",
      },
    ],
  },

  {
    name: "Bundesliga",
    country: "",
    predictions: [
      {
        home: "Bayern Munich",
        away: "Stuttgart",
        homeLogo: "/clubs/bundesliga/bayern-munich.png",
        awayLogo: "/clubs/bundesliga/stuttgart.png",
        prediction: "Bayern Win",
        confidence: 81,
        type: "Match Winner",
      },
      {
        home: "Cologne",
        away: "Hoffenheim",
        homeLogo: "/clubs/bundesliga/koln.png",
        awayLogo: "/clubs/bundesliga/hoffenhiem.png",
        prediction: " BTSS & OV 2.5 Goals",
        confidence: 79,
        type: "Goals",
      },
      {
        home: "Union Berlin",
        away: "Frankfurt",
        homeLogo: "/clubs/bundesliga/berlin.png",
        awayLogo: "/clubs/bundesliga/frankfurt.png",
        prediction: "Both Teams To Score",
        confidence: 72,
        type: "BTTS",
      },
    ],
  },

  {
    name: "Ligue 1",
    country: "",
    predictions: [
      {
        home: "PSG",
        away: "Rennes",
        homeLogo: "/clubs/ligue1/psg.webp",
        awayLogo: "/clubs/ligue1/rennes.png",
        prediction: "PSG Win",
        confidence: 84,
        type: "Match Winner",
      },
      {
        home: "Marseille",
        away: "Strasbourg",
        homeLogo: "/clubs/ligue1/marseille.png",
        awayLogo: "/clubs/ligue1/strasbourg.png",
        prediction: "Over 2.5 Goals",
        confidence: 75,
        type: "Goals",
      },
      {
        home: "Le Havre",
        away: "Monaco",
        homeLogo: "/clubs/ligue1/lehavre.png",
        awayLogo: "/clubs/ligue1/monaco.png",
        prediction: "Under 3.5 Goals",
        confidence: 70,
        type: "Goals",
      },
    ],
  },
];

function ClubLogo({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div
      className="
        flex
        h-20
        w-20
        items-center
        justify-center

        rounded-full

        border
        border-white/10

        bg-white

        p-3

        shadow-2xl
      "
    >
      <Image
        src={src}
        alt={alt}
        width={56}
        height={56}
        className="h-14 w-14 object-contain"
      />
    </div>
  );
}

function PredictionCard({
  prediction,
  locked,
}: {
  prediction: Prediction;
  locked: boolean;
}) {
  return (
    <div
      className="
        relative

        w-full
        max-w-[430px]

        overflow-hidden

        rounded-[32px]

        border
        border-white/10

        bg-[#111111]

        p-6

        shadow-2xl
      "
    >
      {/* TOP */}

      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            rounded-full

            bg-white/[0.06]

            px-4
            py-2

            text-[10px]
            font-black
            uppercase
            tracking-[0.18em]

            text-zinc-400
          "
        >
          {prediction.type}
        </span>

        <span
          className="
            text-xs
            font-bold

            text-zinc-500
          "
        >
          Prediction
        </span>
      </div>

      {/* TEAMS */}

      <div
        className="
          mt-8

          flex
          items-center
          justify-between
        "
      >
        <div
          className="
            flex
            w-[38%]
            flex-col
            items-center
          "
        >
          <ClubLogo
            src={prediction.homeLogo}
            alt={prediction.home}
          />

          <p
            className="
              mt-4

              text-center

              text-sm
              font-black
            "
          >
            {prediction.home}
          </p>
        </div>

        <div
          className="
            flex
            flex-col
            items-center
          "
        >
          <span
            className="
              text-xs
              font-black
              uppercase
              tracking-widest

              text-zinc-600
            "
          >
            VS
          </span>

          <span
            className="
              mt-2

              text-xs

              text-zinc-600
            "
          >
            Football
          </span>
        </div>

        <div
          className="
            flex
            w-[38%]
            flex-col
            items-center
          "
        >
          <ClubLogo
            src={prediction.awayLogo}
            alt={prediction.away}
          />

          <p
            className="
              mt-4

              text-center

              text-sm
              font-black
            "
          >
            {prediction.away}
          </p>
        </div>
      </div>

      {/* PREDICTION */}

      <div
        className="
          relative

          mt-8

          overflow-hidden

          rounded-[24px]

          border
          border-green-500/20

          bg-green-500/[0.07]

          p-5
        "
      >
        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-widest

            text-zinc-500
          "
        >
          Our Prediction
        </p>

        <div
          className={`
            mt-3

            ${
              locked
                ? "select-none blur-md"
                : ""
            }
          `}
        >
          <h3
            className="
              text-2xl
              font-black

              text-green-400
            "
          >
            {prediction.prediction}
          </h3>

          <p
            className="
              mt-2

              text-sm
              text-zinc-400
            "
          >
            AI confidence:{" "}
            {prediction.confidence}%
          </p>
        </div>

        {locked && (
          <div
            className="
              absolute
              inset-0

              flex
              items-center
              justify-center

              bg-black/20

              backdrop-blur-[1px]
            "
          >
            <div className="text-center">
              <div className="text-2xl">
                🔒
              </div>

              <p
                className="
                  mt-2

                  text-xs
                  font-black
                  uppercase
                  tracking-widest

                  text-white
                "
              >
                Sign up to unlock
              </p>
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}

      <div
        className="
          mt-5

          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-xs

            text-zinc-600
          "
        >
          Goalix AI
        </span>

        <span
          className="
            text-xs
            font-bold

            text-zinc-500
          "
        >
          {prediction.confidence}% confidence
        </span>
      </div>
    </div>
  );
}

function LeagueCarousel({
  league,
}: {
  league: League;
}) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const [dragStart, setDragStart] =
    useState<number | null>(null);

  const next = () => {
    setActiveIndex(
      (current) =>
        (current + 1) %
        league.predictions.length
    );
  };

  const previous = () => {
    setActiveIndex(
      (current) =>
        (current -
          1 +
          league.predictions.length) %
        league.predictions.length
    );
  };

  const handlePointerDown = (
    event: React.PointerEvent
  ) => {
    setDragStart(event.clientX);
  };

  const handlePointerUp = (
    event: React.PointerEvent
  ) => {
    if (dragStart === null) return;

    const distance =
      event.clientX - dragStart;

    if (distance < -60) {
      next();
    }

    if (distance > 60) {
      previous();
    }

    setDragStart(null);
  };

  return (
    <section className="mt-14">
      {/* LEAGUE TITLE */}

      <div
        className="
          mb-5

          flex
          items-end
          justify-between
        "
      >
        <div>
          <p
            className="
              text-[10px]
              font-black
              uppercase
              tracking-[0.2em]

              text-green-400
            "
          >
            {league.country}
          </p>

          <h2
            className="
              mt-1

              text-2xl
              font-black
            "
          >
            {league.name}
          </h2>
        </div>

        <div
          className="
            text-xs
            text-zinc-600
          "
        >
          {activeIndex + 1}/
          {league.predictions.length}
        </div>
      </div>

      {/* SWIPE AREA */}

      <div
        className="
          relative

          flex
          min-h-[430px]

          touch-pan-y

          items-center
          justify-center

          overflow-hidden
        "
        onPointerDown={
          handlePointerDown
        }
        onPointerUp={handlePointerUp}
      >
        {/* NEXT CARD */}

        <div
          className="
            absolute

            w-full

            translate-x-3
            translate-y-3
            scale-[0.94]

            opacity-30

            pointer-events-none
          "
        >
          <div className="mx-auto max-w-[430px]">
            <PredictionCard
              prediction={
                league.predictions[
                  (activeIndex + 1) %
                    league.predictions.length
                ]
              }
              locked={true}
            />
          </div>
        </div>

        {/* ACTIVE CARD */}

        <div
          className="
            relative
            z-10

            w-full

            cursor-grab

            active:cursor-grabbing
          "
        >
          <div className="mx-auto max-w-[430px]">
            <PredictionCard
              prediction={
                league.predictions[
                  activeIndex
                ]
              }
              locked={activeIndex !== 0}
            />
          </div>
        </div>
      </div>

      {/* SWIPE HINT */}

      <div
        className="
          mt-5

          flex
          items-center
          justify-center
          gap-3
        "
      >
        <span
          className="
            rounded-full

            border
            border-white/10

            px-4
            py-2

            text-[10px]
            font-bold
            uppercase
            tracking-widest

            text-zinc-500
          "
        >
          ← Swipe
        </span>

        <div className="flex gap-1.5">
          {league.predictions.map(
            (_, index) => (
              <button
                key={index}
                onClick={() =>
                  setActiveIndex(index)
                }
                className={`
                  h-1.5
                  rounded-full

                  transition-all

                  ${
                    index ===
                    activeIndex
                      ? "w-6 bg-green-400"
                      : "w-1.5 bg-zinc-700"
                  }
                `}
                aria-label={`View prediction ${
                  index + 1
                }`}
              />
            )
          )}
        </div>

        <span
          className="
            rounded-full

            border
            border-white/10

            px-4
            py-2

            text-[10px]
            font-bold
            uppercase
            tracking-widest

            text-zinc-500
          "
        >
          Swipe →
        </span>
      </div>
    </section>
  );
}

function WhatWePredict() {
  return (
    <section
      className="
        mt-20

        rounded-[32px]

        border
        border-white/10

        bg-[#111111]

        p-7
      "
    >
      <div className="text-center">
        <p
          className="
            text-[10px]
            font-black
            uppercase
            tracking-[0.2em]

            text-green-400
          "
        >
          Goalix Predictions
        </p>

        <h2
          className="
            mt-3

            text-3xl
            font-black
          "
        >
          What We Predict
        </h2>

        <p
          className="
            mx-auto
            mt-3
            max-w-lg

            text-sm
            leading-6

            text-zinc-500
          "
        >
          More than match winners. Goalix
          analyzes different areas of the
          game to help you make smarter
          predictions.
        </p>
      </div>

      <div
        className="
          mt-8

          grid
          grid-cols-2

          gap-4

          md:grid-cols-4
        "
      >
        {/* PLAYER SHOTS */}

        <div
          className="
            rounded-[24px]

            border
            border-white/10

            bg-[#181818]

            p-5

            text-center
          "
        >
          <div
            className="
              flex
              h-16
              items-center
              justify-center
            "
          >
            {/* SHIRT */}

            <svg
              width="48"
              height="48"
              viewBox="0 0 64 64"
              fill="none"
            >
              <path
                d="
                  M22 8
                  L12 14
                  L5 24
                  L15 31
                  L21 23
                  V56
                  H43
                  V23
                  L49 31
                  L59 24
                  L52 14
                  L42 8
                  C39 12 35 14 32 14
                  C29 14 25 12 22 8Z
                "
                stroke="white"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />

              <path
                d="M22 8C25 12 29 14 32 14C35 14 39 12 42 8"
                stroke="white"
                strokeWidth="2.5"
              />
            </svg>
          </div>

          <p
            className="
              mt-3

              text-sm
              font-black
            "
          >
            Players Shots On Target
          </p>
        </div>

        {/* GOALS */}

        <div
          className="
            rounded-[24px]

            border
            border-white/10

            bg-[#181818]

            p-5

            text-center
          "
        >
          <div
            className="
              flex
              h-16
              items-center
              justify-center
            "
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 64 64"
              fill="none"
            >
              <circle
                cx="32"
                cy="32"
                r="23"
                stroke="white"
                strokeWidth="2.5"
              />

              <path
                d="
                  M32 18
                  L40 24
                  L37 34
                  H27
                  L24 24
                  Z
                "
                stroke="white"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />

              <path
                d="
                  M24 24
                  L17 29
                  M40 24
                  L47 29
                  M27 34
                  L22 43
                  M37 34
                  L42 43
                  M32 18
                  V10
                "
                stroke="white"
                strokeWidth="2.5"
              />
            </svg>
          </div>

          <p
            className="
              mt-3

              text-sm
              font-black
            "
          >
            Over / Under Goals
          </p>
        </div>

        {/* CORNERS */}

        <div
          className="
            rounded-[24px]

            border
            border-white/10

            bg-[#181818]

            p-5

            text-center
          "
        >
          <div
            className="
              flex
              h-16
              items-center
              justify-center
            "
          >
            <span
              className="
                text-4xl
              "
            >
              🚩
            </span>
          </div>

          <p
            className="
              mt-3

              text-sm
              font-black
            "
          >
            Corners
          </p>
        </div>

        {/* CORRECT SCORE */}

        <div
          className="
            rounded-[24px]

            border
            border-white/10

            bg-[#181818]

            p-5

            text-center
          "
        >
          <div
            className="
              flex
              h-16
              items-center
              justify-center
            "
          >
            <span
              className="
                text-4xl
                font-black
              "
            >
              2:1
            </span>
          </div>

          <p
            className="
              mt-3

              text-sm
              font-black
            "
          >
            Correct Score
          </p>
        </div>
      </div>
    </section>
  );
}

export default function GoalixPredictionLanding() {
  return (
    <main
      className="
        min-h-screen

        bg-[#0b0b0b]

        text-white
      "
    >
      {/* HERO */}

      <section
        className="
          px-5
          pt-14
          pb-8

          md:px-8
          md:pt-20
        "
      >
        <div className="mx-auto max-w-5xl">
          {/* LOGO */}

          <div
            className="
              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <Image
                src="/Goalix.png"
                alt="Goalix"
                width={42}
                height={42}
                className="
                  h-10
                  w-10
                  object-contain
                "
              />

              <span
                className="
                  text-3xl
                  font-black
                  tracking-tight
                "
              >

              </span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.25em]

                text-green-400
              "
            >
            </p>

            <h1
              className="
                mx-auto
                mt-4
                max-w-3xl

                text-5xl
                font-black
                leading-[0.95]
                tracking-tight

                md:text-7xl
              "
            >
              Predict Smarter &
              <br />
              Stay Ahead.
            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-xl

                text-sm
                leading-7

                text-zinc-500

                md:text-base
              "
            >
              Explore Goalix predictions across
              all the biggest football leagues.
              Swipe through matches and discover
              what our prediction engine sees.
            </p>
          </div>
        </div>
      </section>

      {/* PREDICTIONS */}

      <section
        className="
          px-5
          pb-12

          md:px-8
        "
      >
        <div className="mx-auto max-w-5xl">
          {leagues.map((league) => (
            <LeagueCarousel
              key={league.name}
              league={league}
            />
          ))}

          {/* WHAT WE PREDICT */}

          <WhatWePredict />

          {/* CTA */}

          <section
            className="
              mt-10

              overflow-hidden

              rounded-[32px]

              border
              border-white/10

              bg-white

              p-8

              text-center

              text-black

              md:p-12
            "
          >
            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.2em]

                text-zinc-500
              "
            >
              Unlock Goalix
            </p>

            <h2
              className="
                mt-3

                text-3xl
                font-black

                md:text-4xl
              "
            >
              See Every Prediction.
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-lg

                text-sm
                leading-6

                text-zinc-600
              "
            >
              Sign up to unlock predictions,
              confidence levels and deeper
              football insights.
            </p>

            <Link
              href="/register"
              className="
                mt-7

                inline-flex

                rounded-2xl

                bg-black

                px-7
                py-4

                text-sm
                font-black

                text-white

                transition-all
                duration-300

                hover:scale-105
              "
            >
              Get Started →
            </Link>
          </section>

        </div>
      </section>
    </main>
  );
}
