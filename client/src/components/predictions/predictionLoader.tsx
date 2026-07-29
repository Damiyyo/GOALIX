"use client";

import { useEffect, useState } from "react";

interface PredictionLoaderProps {
  onComplete: () => void;
}

const steps = [
  {
    title: "Returning to Predictions...",
    duration: 1000,
    progress: 35,
  },
  {
    title: "Loading Today's Fixtures...",
    duration: 1000,
    progress: 70,
  },
  {
    title: "Preparing AI Predictions...",
    duration: 1000,
    progress: 100,
  },
];

const PredictionLoader = ({
  onComplete,
}: PredictionLoaderProps) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= steps.length) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setStep((prev) => prev + 1);
    }, steps[step].duration);

    return () => clearTimeout(timer);
  }, [step, onComplete]);

  if (step >= steps.length) return null;

  return (
    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center

        bg-[#0b0b0b]
      "
    >
      <div
        className="
          w-full
          max-w-lg

          rounded-[30px]

          border
          border-white/10

          bg-[#111111]

          p-10

          text-center
        "
      >
        {/* Spinner */}

        <div
          className="
            mx-auto

            h-16
            w-16

            rounded-full

            border-4
            border-zinc-700
            border-t-green-500

            animate-spin
          "
        />

        {/* Title */}

        <h2
          className="
            mt-8

            text-3xl
            font-black

            text-white
          "
        >
          {steps[step].title}
        </h2>

        <p
          className="
            mt-3

            text-zinc-400
          "
        >
          Goalix AI is preparing today's predictions.
        </p>

        {/* Progress */}

        <div
          className="
            mt-8

            h-3

            overflow-hidden

            rounded-full

            bg-white/10
          "
        >
          <div
            className="
              h-full

              rounded-full

              bg-green-500

              transition-all
              duration-700
            "
            style={{
              width: `${steps[step].progress}%`,
            }}
          />
        </div>

        <p
          className="
            mt-4

            text-lg
            font-black

            text-green-400
          "
        >
          {steps[step].progress}%
        </p>
      </div>
    </div>
  );
};

export default PredictionLoader;