"use client";

import Image from "next/image";

import PredictionConfidence from "./PredictionConfidence";
import PredictionCountdown from "./PredictionCountdown";

export interface PredictionMatch {
  id: number;

  league: string;

  homeTeam: string;

  awayTeam: string;

  homeLogo: string;

  awayLogo: string;

  prediction: string;

  confidence: number;

  odds: number;

  bookingCode: string;

  kickoff: string;

  status: "published";
}

interface PredictionCardProps {
  match: PredictionMatch;
}

export default function PredictionCard({
  match,
}: PredictionCardProps) {
  return (
    <article
      className="
        group

        overflow-hidden

        rounded-[26px]

        border
        border-white/10

        bg-[#111111]

        p-5

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-green-500/30
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

            bg-green-500/15

            px-4
            py-2

            text-xs
            font-bold
            uppercase

            tracking-[0.15em]

            text-green-400
          "
        >
          {match.league}
        </span>

        <span
          className="
            rounded-full

            bg-red-500/15

            px-3
            py-1

            text-xs
            font-black

            text-red-400
          "
        >
          Coming Soon
        </span>
      </div>

      {/* CLUBS */}

      <div
        className="
          mt-10

          flex
          items-center
          justify-between
        "
      >
        {/* HOME */}

        <div
          className="
            flex
            w-24
            flex-col
            items-center
          "
        >
          <Image
            src={match.homeLogo}
            alt={match.homeTeam}
            width={72}
            height={72}
            className="object-contain"
          />

          <h3
            className="
              mt-4

              text-center

              text-lg
              font-black
            "
          >
            {match.homeTeam}
          </h3>
        </div>

        {/* VS */}

        <div
          className="
            text-3xl
            font-black
            text-zinc-600
          "
        >
          VS
        </div>

        {/* AWAY */}

        <div
          className="
            flex
            w-24
            flex-col
            items-center
          "
        >
          <Image
            src={match.awayLogo}
            alt={match.awayTeam}
            width={72}
            height={72}
            className="object-contain"
          />

          <h3
            className="
              mt-4

              text-center

              text-lg
              font-black
            "
          >
            {match.awayTeam}
          </h3>
        </div>
      </div>

      {/* PREDICTION */}

      <div
        className="
          mt-6

          rounded-2xl

          bg-white/[0.03]

          p-4
        "
      >
        <p
          className="
            text-xs

            uppercase

            tracking-[0.15em]

            text-zinc-500
          "
        >
          Prediction
        </p>

        <h2
          className="
            mt-2

            text-2xl
            font-black
          "
        >
          {match.prediction}
        </h2>
      </div>

      {/* CONFIDENCE */}

      <div className="mt-7">
        <PredictionConfidence
          confidence={match.confidence}
        />
      </div>

      {/* BOTTOM */}

      <div
        className="
          mt-6

          flex
          items-center
          justify-between
        "
      >
        <div>
          <p className="text-xs text-zinc-500">
            Odds
          </p>

          <h3
            className="
              mt-1

              text-xl
              font-black
            "
          >
            {match.odds}
          </h3>
        </div>

        <div className="text-right">
          <p className="text-xs text-zinc-500">
            Booking Code
          </p>

          <h3
            className="
              mt-1

              font-black

              text-green-400
            "
          >
            {match.bookingCode}
          </h3>
        </div>
      </div>

      {/* COUNTDOWN */}

      <div className="mt-6">
        <PredictionCountdown
          kickoff={match.kickoff}
        />
      </div>
    </article>
  );
}