import Link from "next/link";

const predictions = [
  {
    home: "Al Hilal",
    away: "Mamelodi",
    prediction: "Home Win",
    confidence: "89%",
    status: "Won",
    score: "2 - 0",
  },

  {
    home: "Rosenborg",
    away: "Man U",
    prediction: "Away Win",
    confidence: "70%",
    status: "Won",
    score: "0 - 5",
  },

  {
    home: "Galatasaray",
    away: "AC Monza",
    prediction: "Home win",
    confidence: "80%",
    status: "Lost",
    score: "0 - 2",
  },

  {
    home: "Benfica",
    away: "Belenenses",
    prediction: "Home Win",
    confidence: "77%",
    status: "Won",
    score: "5 - 1",
  },
  {
    home: "Bournemouth",
    away: "St Pauli",
    prediction: "Home Win",
    confidence: "85%",
    status: "Won",
    score: "4 - 1",
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
      {/* Header */}
      <div
        className="
          flex items-center
          justify-between
        "
      >
        <div>
          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.15em]
              text-zinc-500
            "
          >
          </p>

          <h2
            className="
              mt-3

              text-3xl
              font-black
              tracking-tight
              text-white
            "
          >
            Recent Predictions
          </h2>
        </div>

        {/* CLICKABLE BUTTON */}
        <Link href="/predictions">
          <button
            className="
              rounded-2xl

              border border-white/10

              px-5 py-3

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

      {/* Table */}
      <div className="mt-10 overflow-x-auto">
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
              (prediction, index) => (
                <tr
                  key={index}
                  className="
                    border-b
                    border-white/5
                  "
                >
                  {/* Match */}
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

                  {/* Prediction */}
                  <td
                    className="
                      py-6
                      text-sm
                      text-zinc-300
                    "
                  >
                    {prediction.prediction}
                  </td>

                  {/* Confidence */}
                  <td className="py-6">
                    <div
                      className="
                        inline-flex

                        rounded-full
                        bg-green-500/10

                        px-4 py-2
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

                  {/* Score */}
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

                  {/* Status */}
                  <td className="py-6">
                    <div
                      className={`
                        inline-flex rounded-full px-4 py-2

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
    </section>
  );
};

export default RecentPredictions;