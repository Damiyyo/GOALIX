"use client";

import {
  useEffect,
  useState,
} from "react";

const launchDate = new Date(
  "2026-08-10T00:00:00"
);

export default function PredictionCountdown() {
  const [timeLeft, setTimeLeft] =
    useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

  useEffect(() => {
    const timer = setInterval(() => {
      const now =
        new Date().getTime();

      const distance =
        launchDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);

        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      setTimeLeft({
        days: Math.floor(
          distance /
            (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (distance %
            (1000 *
              60 *
              60 *
              24)) /
            (1000 * 60 * 60)
        ),

        minutes: Math.floor(
          (distance %
            (1000 *
              60 *
              60)) /
            (1000 * 60)
        ),

        seconds: Math.floor(
          (distance %
            (1000 * 60)) /
            1000
        ),
      });
    }, 1000);

    return () =>
      clearInterval(timer);
  }, []);

  const Box = ({
    value,
    label,
  }: {
    value: number;
    label: string;
  }) => (
    <div
      className="
        rounded-[24px]

        border
        border-white/10

        bg-white/[0.03]

        px-6
        py-5

        text-center
      "
    >
      <h2
        className="
          text-5xl
          font-black
        "
      >
        {String(value).padStart(
          2,
          "0"
        )}
      </h2>

      <p
        className="
          mt-2

          text-sm

          uppercase

          tracking-[0.15em]

          text-zinc-500
        "
      >
        {label}
      </p>
    </div>
  );

  return (
    <div
      className="
        mt-12

        grid

        grid-cols-2

        gap-5

        md:grid-cols-4
      "
    >
      <Box
        value={timeLeft.days}
        label="Days"
      />

      <Box
        value={timeLeft.hours}
        label="Hours"
      />

      <Box
        value={timeLeft.minutes}
        label="Minutes"
      />

      <Box
        value={timeLeft.seconds}
        label="Seconds"
      />
    </div>
  );
}