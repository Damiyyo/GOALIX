"use client";

import { useEffect, useState } from "react";

interface PredictionCountdownProps {
  kickoff: string;
}

export default function PredictionCountdown({
  kickoff,
}: PredictionCountdownProps) {
  const calculateTimeLeft = () => {
    const difference =
      new Date(kickoff).getTime() -
      Date.now();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(
        difference /
          (1000 * 60 * 60 * 24)
      ),

      hours: Math.floor(
        (difference %
          (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      ),

      minutes: Math.floor(
        (difference %
          (1000 * 60 * 60)) /
          (1000 * 60)
      ),

      seconds: Math.floor(
        (difference %
          (1000 * 60)) /
          1000
      ),
    };
  };

  const [timeLeft, setTimeLeft] =
    useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(
        calculateTimeLeft()
      );
    }, 1000);

    return () =>
      clearInterval(timer);
  }, [kickoff]);

  if (!timeLeft) {
    return (
      <div
        className="
          mt-4

          rounded-xl

          border border-red-500/20

          bg-red-500/10

          px-4
          py-3

          text-center
        "
      >
        <p
          className="
            text-xs
            font-bold

            text-red-400
          "
        >
          Match Started
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        mt-4

        flex
        items-center
        justify-between

        rounded-xl

        border border-white/10

        bg-white/[0.03]

        px-4
        py-3
      "
    >
      {/* LEFT */}

      <div>
        <p
          className="
            text-[10px]

            uppercase

            tracking-[0.12em]

            text-zinc-500
          "
        >
          Kickoff
        </p>

        <p
          className="
            mt-1

            text-xs
            font-semibold

            text-green-400
          "
        >
          Starts Soon ⚽
        </p>
      </div>

      {/* TIMER */}

      <div
        className="
          flex
          items-center

          gap-2
        "
      >
        {[
          {
            label: "D",
            value: timeLeft.days,
          },

          {
            label: "H",
            value: timeLeft.hours,
          },

          {
            label: "M",
            value:
              timeLeft.minutes,
          },

          {
            label: "S",
            value:
              timeLeft.seconds,
          },
        ].map((item) => (
          <div
            key={item.label}
            className="
              flex
              flex-col
              items-center
            "
          >
            <div
              className="
                flex

                h-9
                w-9

                items-center
                justify-center

                rounded-lg

                bg-[#1b1b1b]
              "
            >
              <span
                className="
                  text-xs
                  font-black

                  text-white
                "
              >
                {String(
                  item.value
                ).padStart(2, "0")}
              </span>
            </div>

            <span
              className="
                mt-1

                text-[9px]

                text-zinc-500
              "
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}