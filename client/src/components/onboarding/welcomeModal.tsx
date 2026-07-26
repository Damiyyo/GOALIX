"use client";

import { useState } from "react";

import {
  Bot,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface GoalixWelcomeModalProps {
  onClose: (dontShowAgain: boolean) => void;
}

const GoalixWelcomeModal = ({
  onClose,
}: GoalixWelcomeModalProps) => {
  const [step, setStep] = useState(1);

  const [dontShowAgain, setDontShowAgain] =
    useState(false);

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]

        flex
        items-center
        justify-center

        bg-black/70

        backdrop-blur-md
      "
    >
      <div
        className="
          w-full
          max-w-2xl

          rounded-[36px]

          border
          border-white/10

          bg-[#111111]

          p-8

          text-white
        "
      >
        {/* HEADER */}

        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center

              rounded-2xl

              bg-green-500/10
            "
          >
            {step === 1 ? (
              <Bot
                className="text-green-400"
                size={34}
              />
            ) : (
              <ShieldCheck
                className="text-green-400"
                size={34}
              />
            )}
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-green-400">
              Goalix AI
            </p>

            <h2 className="text-3xl font-black">
              {step === 1
                ? "Welcome"
                : "How Predictions Work"}
            </h2>
          </div>
        </div>

        {/* BODY */}

        <div className="mt-8">
          {step === 1 ? (
            <>
              <p className="text-zinc-300 leading-8">
                Welcome to Goalix.

                <br />
                <br />

                Goalix is an AI-powered football prediction platform that helps
                you make informed decisions before every gameweek.

                <br />
                <br />

                Our AI analyzes hundreds of football statistics including club
                form, expected goals (xG), injuries, home & away performance,
                historical trends, squad depth and recent momentum to calculate
                prediction probabilities.
              </p>
            </>
          ) : (
            <>
              <p className="text-zinc-300 leading-8">
                Football is unpredictable.

                <br />
                <br />

                While statistics provide a strong indication of likely outcomes,
                football matches can completely change because of a single
                moment.

                <br />
                <br />

                A red card, injury, tactical substitution or individual
                brilliance can affect any prediction.

                <br />
                <br />

                Goalix AI provides intelligent probability-based predictions —
                never guaranteed outcomes.
              </p>
            </>
          )}
        </div>
                {/* PROGRESS */}

                <div
          className="
            mt-10

            flex
            items-center
            justify-center
            gap-3
          "
        >
          <div
            className={`
              h-2
              w-10

              rounded-full

              transition-all

              ${
                step === 1
                  ? "bg-green-400"
                  : "bg-white/10"
              }
            `}
          />

          <div
            className={`
              h-2
              w-10

              rounded-full

              transition-all

              ${
                step === 2
                  ? "bg-green-400"
                  : "bg-white/10"
              }
            `}
          />
        </div>

        {/* FOOTER */}

        <div
          className="
            mt-10

            flex
            flex-col
            gap-5

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* DON'T SHOW */}

          <label
            className="
              flex
              items-center
              gap-3

              text-sm

              text-zinc-400

              cursor-pointer
              select-none
            "
          >
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(e) =>
                setDontShowAgain(
                  e.target.checked
                )
              }
              className="
                h-4
                w-4

                accent-green-500
              "
            />

            Don't show again
          </label>

          {/* BUTTONS */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            {step === 2 && (
              <button
                onClick={() =>
                  setStep(1)
                }
                className="
                  rounded-xl

                  border
                  border-white/10

                  px-5
                  py-3

                  text-sm
                  font-bold

                  transition-all

                  hover:bg-white/5
                "
              >
                Back
              </button>
            )}

            {step === 1 ? (
              <button
                onClick={() =>
                  setStep(2)
                }
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-xl

                  bg-white

                  px-6
                  py-3

                  text-sm
                  font-black

                  text-black

                  transition-all
                  duration-300

                  hover:scale-[1.02]
                "
              >
                Continue

                <ArrowRight
                  size={18}
                />
              </button>
            ) : (
              <button
                onClick={() =>
                  onClose(
                    dontShowAgain
                  )
                }
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-xl

                  bg-green-500

                  px-6
                  py-3

                  text-sm
                  font-black

                  text-white

                  transition-all
                  duration-300

                  hover:scale-[1.02]
                "
              >
                Enter Dashboard

                <ArrowRight
                  size={18}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalixWelcomeModal;