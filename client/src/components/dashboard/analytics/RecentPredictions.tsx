
import Link from "next/link";

const predictions = [
    {
      home: "PSG",
      away: "Monaco",
      prediction: "GG & OV 2.5",
      confidence: "89%",
      status: "Won",
      score: "1 - 2",
    },
    {
      home: "Ipswich Town",
      away: "Liverpool",
      prediction: "Away win",
      confidence: "70%",
      status: "Won",
      score: "0 - 2",
    },
    {
      home: "Real Betis",
      away: "Real Madrid",
      prediction: "BTTS",
      confidence: "76%",
      status: "Lost",
      score: "1 - 0",
    },
    {
      home: "Schalke",
      away: "Bayern Munich",
      prediction: "Away Win & OV 2.5",
      confidence: "89%",
      status: "Not Started",
      score: "0 - 0",
    },
    {
      home: "Inter Milan",
      away: "Napoli",
      prediction: "BTTS",
      confidence: "70%",
      status: "Not Started",
      score: "0 - 0",
    },
  ];

const RecentPredictions = () => {
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
    </section>
  );
};

export default RecentPredictions;