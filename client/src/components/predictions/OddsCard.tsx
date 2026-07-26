"use client";

import { useState } from "react";
import { Ticket } from "@/data/odds/tickets";

interface OddsCardProps {
  ticket: Ticket;
}

const confidenceColors = (confidence: number) => {
  if (confidence >= 90)
    return "text-green-400";

  if (confidence >= 80)
    return "text-yellow-400";

  return "text-red-400";
};

const badgeColors = (
  title: string
) => {
  switch (title) {
    case "Safe Ticket":
      return "bg-green-500/20 text-green-400";

    case "Medium Ticket":
      return "bg-yellow-500/20 text-yellow-400";

    case "Premium Ticket":
      return "bg-cyan-500/20 text-cyan-400";

    case "High Odds":
      return "bg-orange-500/20 text-orange-400";

    case "Super Acca":
      return "bg-purple-500/20 text-purple-400";

    case "VIP Ticket":
      return "bg-pink-500/20 text-pink-400";

    case "Mega Odds":
      return "bg-indigo-500/20 text-indigo-400";

    default:
      return "bg-red-500/20 text-red-400";
  }
};

const OddsCard = ({
  ticket,
}: OddsCardProps) => {
  const [copied, setCopied] =
    useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(
      ticket.code
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className="
        rounded-[30px]

        border border-white/10

        bg-[#111111]

        p-7

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-green-500/30
        hover:shadow-[0_25px_70px_rgba(34,197,94,0.15)]
      "
    >
      {/* Ticket */}

      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <span
          className={`
            rounded-full

            px-4
            py-2

            text-xs
            font-black
            uppercase

            ${badgeColors(
              ticket.title
            )}
          `}
        >
          {ticket.title}
        </span>

        <p
          className="
            text-sm

            text-zinc-500
          "
        >
          Goalix AI
        </p>
      </div>

      {/* Confidence */}

      <div className="mt-8">
        <p
          className="
            text-sm

            text-zinc-500
          "
        >
          Confidence
        </p>

        <h2
          className={`
            mt-2

            text-6xl

            font-black

            ${confidenceColors(
              ticket.confidence
            )}
          `}
        >
          {ticket.confidence}%
        </h2>
      </div>

      {/* Odds */}

      <div
        className="
          mt-8

          rounded-2xl

          bg-white/[0.04]

          p-5
        "
      >
        <p
          className="
            text-sm

            text-zinc-500
          "
        >
          Combined Odds
        </p>

        <h3
          className="
            mt-2

            text-4xl

            font-black
          "
        >
          {ticket.odds}
        </h3>
      </div>

      {/* Booking */}

      <div
        className="
          mt-6

          rounded-2xl

          border border-dashed
          border-green-500/30

          bg-green-500/10

          p-5
        "
      >
        <p
          className="
            text-sm

            text-zinc-500
          "
        >
          Booking Code
        </p>

        <h2
          className="
            mt-3

            break-all

            text-2xl

            font-black

            tracking-[0.3em]

            text-green-400
          "
        >
          {ticket.code}
        </h2>
      </div>

      {/* Copy */}

      <button
        onClick={copyCode}
        className="
          mt-8

          w-full

          rounded-2xl

          bg-white

          py-4

          text-sm
          font-black

          text-black

          transition-all
          duration-300

          hover:scale-[1.02]
        "
      >
        {copied
          ? "✓ Code Copied"
          : "Copy Booking Code"}
      </button>
    </div>
  );
};

export default OddsCard;