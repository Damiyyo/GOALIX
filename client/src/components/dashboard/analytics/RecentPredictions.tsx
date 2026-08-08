"use client";

import { useState } from "react";
import Link from "next/link";
import { Copy, Check } from "lucide-react";

const predictions = [
  {
    home: "Juventus",
    away: "Inter Milan",
    prediction: "OV 2.5",
    confidence: "89%",
    status: "Not Started",
    score: "0 - 0",
  },
  {
    home: "Chelsea",
    away: "AC Milan",
    prediction: "GG & BTTS",
    confidence: "70%",
    status: "Not Started",
    score: "0 - 0",
  },
  {
    home: "PSG",
    away: "Manchester United",
    prediction: "OV 2.5",
    confidence: "80%",
    status: "Not Started",
    score: "0 - 0",
  },
  {
    home: "Ferencvarosi Budapest",
    away: "Real Madrid",
    prediction: "Away Win & OV 2.5",
    confidence: "89%",
    status: "Not Started",
    score: "0 - 0",
  },
  {
    home: "Brighton",
    away: "Roma",
    prediction: "GG",
    confidence: "82%",
    status: "Not Started",
    score: "0 - 0",
  },
];

const betCode = "";

const RecentPredictions = () => {
  const [copied, setCopied] =
    useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        betCode
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(
        "Failed to copy bet code:",
        error
      );
    }
  };

  return (
    <section
      className="
        mt-8

        rounded-[35px]

        border border-white/10

        bg-[#141414]

        p-7
      "
    >
      {/* HEADER */}

      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <div>
          <h2
            className="
              text-3xl
              font-black
              tracking-tight
              text-white
            "
          >
            Recent Predictions
          </h2>
        </div>

        <Link href="/predictions">
          <button
            className="
              rounded-2xl

              border border-white/10

              px-5
              py-3

              text-sm
              font-semibold

              text-white

              transition-all
              duration-300

              hover:bg-white/5
            "
          >
            View All
          </button>
        </Link>
      </div>

      {/* ========================= */}
      {/* DESKTOP TABLE */}
      {/* ========================= */}

      <div className="mt-10 hidden overflow-x-auto md:block">
        <table className="w-full">
          <thead>
            <tr
              className="
                border-b
                border-white/10
              "
            >
              <th
                className="
                  pb-5

                  text-left
                  text-sm
                  font-semibold

                  text-zinc-500
                "
              >
                Match
              </th>

              <th
                className="
                  pb-5

                  text-left
                  text-sm
                  font-semibold

                  text-zinc-500
                "
              >
                Prediction
              </th>

              <th
                className="
                  pb-5

                  text-left
                  text-sm
                  font-semibold

                  text-zinc-500
                "
              >
                Confidence
              </th>

              <th
                className="
                  pb-5

                  text-left
                  text-sm
                  font-semibold

                  text-zinc-500
                "
              >
                Score
              </th>

              <th
                className="
                  pb-5

                  text-left
                  text-sm
                  font-semibold

                  text-zinc-500
                "
              >
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {predictions.map(
              (
                prediction,
                index
              ) => (
                <tr
                  key={index}
                  className="
                    border-b
                    border-white/5
                  "
                >
                  <td
                    className="
                      py-6

                      text-sm
                      font-semibold

                      text-white
                    "
                  >
                    {prediction.home} vs{" "}
                    {prediction.away}
                  </td>

                  <td
                    className="
                      py-6

                      text-sm

                      text-zinc-300
                    "
                  >
                    {prediction.prediction}
                  </td>

                  <td className="py-6">
                    <div
                      className="
                        inline-flex

                        rounded-full

                        bg-green-500/10

                        px-4
                        py-2
                      "
                    >
                      <span
                        className="
                          text-xs
                          font-bold

                          text-green-400
                        "
                      >
                        {prediction.confidence}
                      </span>
                    </div>
                  </td>

                  <td
                    className="
                      py-6

                      text-sm
                      font-semibold

                      text-white
                    "
                  >
                    {prediction.score}
                  </td>

                  <td className="py-6">
                    <div
                      className={`
                        inline-flex

                        rounded-full

                        px-4
                        py-2

                        ${
                          prediction.status ===
                          "Won"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-red-500/10 text-red-400"
                        }
                      `}
                    >
                      <span
                        className="
                          text-xs
                          font-bold
                        "
                      >
                        {prediction.status}
                      </span>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* ========================= */}
      {/* MOBILE CARDS */}
      {/* ========================= */}

      <div className="mt-8 space-y-4 md:hidden">
        {predictions.map(
          (
            prediction,
            index
          ) => (
            <div
              key={index}
              className="
                rounded-3xl

                border border-white/10

                bg-[#181818]

                p-5
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <h3
                  className="
                    text-base
                    font-bold

                    text-white
                  "
                >
                  {prediction.home}
                </h3>

                <span className="text-zinc-500">
                  vs
                </span>

                <h3
                  className="
                    text-base
                    font-bold

                    text-white
                  "
                >
                  {prediction.away}
                </h3>
              </div>

              <div
                className="
                  mt-5

                  grid
                  grid-cols-2

                  gap-5
                "
              >
                <div>
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-wide

                      text-zinc-500
                    "
                  >
                    Prediction
                  </p>

                  <p
                    className="
                      mt-1

                      font-semibold

                      text-white
                    "
                  >
                    {prediction.prediction}
                  </p>
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-wide

                      text-zinc-500
                    "
                  >
                    Confidence
                  </p>

                  <div
                    className="
                      mt-2

                      inline-flex

                      rounded-full

                      bg-green-500/10

                      px-3
                      py-1
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-bold

                        text-green-400
                      "
                    >
                      {prediction.confidence}
                    </span>
                  </div>
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-wide

                      text-zinc-500
                    "
                  >
                    Score
                  </p>

                  <p
                    className="
                      mt-1

                      font-semibold

                      text-white
                    "
                  >
                    {prediction.score}
                  </p>
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-wide

                      text-zinc-500
                    "
                  >
                    Status
                  </p>

                  <div
                    className={`
                      mt-2

                      inline-flex

                      rounded-full

                      px-3
                      py-1

                      ${
                        prediction.status ===
                        "Won"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-red-500/10 text-red-400"
                      }
                    `}
                  >
                    <span
                      className="
                        text-xs
                        font-bold
                      "
                    >
                      {prediction.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* ========================= */}
      {/* BET CODE */}
      {/* ========================= */}

      <div
        className="
          mt-8

          flex
          items-center
          justify-between

          rounded-2xl

          border border-white/10

          bg-[#181818]

          px-5
          py-4
        "
      >
        <div>
          <p
            className="
              text-xs
              uppercase
              tracking-[0.12em]

              text-zinc-500
            "
          >
            Bet Code
          </p>

          <p
            className="
              mt-1

              text-lg
              font-black

              tracking-wide

              text-green-400
            "
          >
            {betCode}
          </p>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          aria-label={
            copied
              ? "Bet code copied"
              : "Copy bet code"
          }
          title={
            copied
              ? "Copied"
              : "Copy bet code"
          }
          className="
            flex
            h-10
            w-10

            items-center
            justify-center

            rounded-xl

            border border-white/10

            text-zinc-400

            transition-all
            duration-200

            hover:bg-white/10
            hover:text-white

            active:scale-95
          "
        >
          {copied ? (
            <Check
              size={18}
              className="text-green-400"
            />
          ) : (
            <Copy size={18} />
          )}
        </button>
      </div>
    </section>
  );
};

export default RecentPredictions;