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

      {/* ====================== */}
{/* DESKTOP TABLE */}
{/* ====================== */}

<div className="mt-10 hidden overflow-x-auto md:block">
  <table className="w-full">
    {/* Paste your CURRENT table here */}
  </table>
</div>

{/* ====================== */}
{/* MOBILE CARDS */}
{/* ====================== */}

<div className="mt-8 space-y-4 md:hidden">
  {predictions.map((prediction, index) => (
    <div
      key={index}
      className="
        rounded-3xl
        border border-white/10
        bg-[#181818]
        p-5
      "
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-white">
          {prediction.home}
        </h3>

        <span className="text-zinc-500">
          vs
        </span>

        <h3 className="text-base font-bold text-white">
          {prediction.away}
        </h3>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Prediction
          </p>

          <p className="mt-1 font-semibold">
            {prediction.prediction}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Confidence
          </p>

          <div className="mt-2 inline-flex rounded-full bg-green-500/10 px-3 py-1">
            <span className="text-xs font-bold text-green-400">
              {prediction.confidence}
            </span>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Score
          </p>

          <p className="mt-1 font-semibold text-white">
            {prediction.score}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Status
          </p>

          <div
            className={`mt-2 inline-flex rounded-full px-3 py-1 ${
              prediction.status === "Won"
                ? "bg-green-500/10 text-green-400"
                : "bg-red-500/10 text-red-400"
            }`}
          >
            <span className="text-xs font-bold">
              {prediction.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
    </section>
  );
};

export default RecentPredictions;