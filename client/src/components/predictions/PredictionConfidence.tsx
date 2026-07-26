"use client";

interface PredictionConfidenceProps {
  confidence: number;
}

export default function PredictionConfidence({
  confidence,
}: PredictionConfidenceProps) {
  const percentage = Math.max(
    0,
    Math.min(confidence, 100)
  );

  const getColor = () => {
    if (percentage >= 90)
      return "bg-green-500";

    if (percentage >= 75)
      return "bg-yellow-500";

    return "bg-red-500";
  };

  return (
    <div>
      {/* HEADER */}

      <div
        className="
          mb-3

          flex
          items-center
          justify-between
        "
      >
        <p
          className="
            text-sm
            font-semibold

            text-zinc-400
          "
        >
          Confidence
        </p>

        <span
          className="
            text-lg
            font-black

            text-white
          "
        >
          {percentage}%
        </span>
      </div>

      {/* BAR */}

      <div
        className="
          h-3
          w-full

          overflow-hidden

          rounded-full

          bg-white/10
        "
      >
        <div
          className={`
            h-full
            rounded-full

            transition-all
            duration-700
            ease-out

            ${getColor()}
          `}
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      {/* LABEL */}

      <p
        className="
          mt-3

          text-xs

          uppercase

          tracking-[0.15em]

          text-zinc-500
        "
      >
        AI Match Confidence
      </p>
    </div>
  );
}