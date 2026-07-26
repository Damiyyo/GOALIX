"use client";

import { useEffect, useState } from "react";

interface OddsLoaderProps {
  onComplete: () => void;
}

const steps = [
  {
    title: "Getting Codes...",
    duration: 5000,
    progress: 35,
  },
  {
    title: "Compiling Predictions...",
    duration: 3000,
    progress: 75,
  },
  {
    title: "Finalizing Odds...",
    duration: 3000,
    progress: 100,
  },
];

const OddsLoader = ({
  onComplete,
}: OddsLoaderProps) => {
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
        min-h-[500px]
        items-center
        justify-center
      "
    >
      <div
        className="
          w-full
          max-w-xl

          rounded-[32px]

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

        {/* Status */}

        <h2
          className="
            mt-8

            text-3xl

            font-black
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
          Please wait while Goalix AI prepares today's betting codes.
        </p>

        {/* Progress Bar */}

        <div
          className="
            mt-10

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
              duration-1000
            "
            style={{
              width: `${steps[step].progress}%`,
            }}
          />
        </div>

        {/* Percentage */}

        <p
          className="
            mt-4

            text-lg

            font-bold

            text-green-400
          "
        >
          {steps[step].progress}%
        </p>
      </div>
    </div>
  );
};

export default OddsLoader;