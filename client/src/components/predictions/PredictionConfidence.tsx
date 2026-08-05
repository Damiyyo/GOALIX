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
  
      <div className="mb-2 flex items-center justify-between">
        <p
          className="
            text-xs
            font-semibold
  
            text-zinc-500
          "
        >
          Confidence
        </p>
  
        <span
          className="
            text-base
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
          h-2
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
          mt-2
  
          text-[10px]
  
          uppercase
  
          tracking-[0.12em]
  
          text-zinc-600
        "
      >
        Goalix Pred Confidence
      </p>
    </div>
  );
}