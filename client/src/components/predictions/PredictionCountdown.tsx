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
          rounded-2xl

          border
          border-red-500/20

          bg-red-500/10

          p-4

          text-center
        "
      >
        <p
          className="
            text-sm
            font-black

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
        rounded-2xl

        border
        border-white/10

        bg-white/[0.03]

        p-5
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
        Kickoff Countdown
      </p>

      <div
        className="
          mt-4

          grid
          grid-cols-4

          gap-3
        "
      >
        {[
          {
            label: "Days",
            value: timeLeft.days,
          },

          {
            label: "Hours",
            value: timeLeft.hours,
          },

          {
            label: "Minutes",
            value:
              timeLeft.minutes,
          },

          {
            label: "Seconds",
            value:
              timeLeft.seconds,
          },
        ].map((item) => (
          <div
            key={item.label}
            className="
              rounded-xl

              bg-[#1b1b1b]

              py-3

              text-center
            "
          >
            <h3
              className="
                text-xl
                font-black

                text-white
              "
            >
              {String(
                item.value
              ).padStart(2, "0")}
            </h3>

            <p
              className="
                mt-1

                text-[10px]

                uppercase

                tracking-[0.15em]

                text-zinc-500
              "
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <p
        className="
          mt-4

          text-center

          text-xs
          font-semibold

          text-green-400
        "
      >
        ⚽ Starts Soon
      </p>
    </div>
  );
}