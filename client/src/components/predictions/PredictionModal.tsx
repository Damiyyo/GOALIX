"use client";

import { useEffect } from "react";
import Image from "next/image";

import PredictionConfidence from "./PredictionConfidence";
import PredictionH2H from "./PredictionH2H";
import type { PredictionMatch } from "./PredictionCard";

interface PredictionModalProps {
  match: PredictionMatch;
  onClose: () => void;
}

export default function PredictionModal({
  match,
  onClose,
}: PredictionModalProps) {
  // lock scroll + allow Escape to close while the modal is open
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="
        fixed inset-0 z-50

        flex
        items-end
        justify-center

        lg:items-center

        p-0
        lg:p-6
      "
    >
      {/* BACKDROP */}

      <button
        aria-label="Close prediction details"
        onClick={onClose}
        className="
          absolute inset-0

          bg-black/70

          backdrop-blur-sm
        "
      />

      {/* MODAL */}

      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${match.homeTeam} vs ${match.awayTeam} prediction details`}
        className="
          relative z-10

          w-full
          max-w-lg

          max-h-[90vh]
          overflow-y-auto

          rounded-t-[30px]
          lg:rounded-[30px]

          border
          border-white/10

          bg-[#111111]

          p-6
          lg:p-8

          text-white

          animate-[predictionModalIn_0.25s_ease-out]
        "
      >
        {/* CLOSE */}

        <button
          onClick={onClose}
          aria-label="Close"
          className="
            absolute
            right-5
            top-5

            rounded-full

            p-2

            text-zinc-500

            transition-colors

            hover:bg-white/5
            hover:text-white
          "
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* HEADER */}

        <div className="flex items-center justify-between pr-8">
          <div className="flex w-20 flex-col items-center">
            <Image
              src={match.homeLogo}
              alt={match.homeTeam}
              width={44}
              height={44}
              className="object-contain"
            />
            <h3 className="mt-2 text-center text-xs font-bold">
              {match.homeTeam}
            </h3>
          </div>

          <div className="text-lg font-black text-zinc-600">VS</div>

          <div className="flex w-20 flex-col items-center">
            <Image
              src={match.awayLogo}
              alt={match.awayTeam}
              width={44}
              height={44}
              className="object-contain"
            />
            <h3 className="mt-2 text-center text-xs font-bold">
              {match.awayTeam}
            </h3>
          </div>
        </div>

        {/* PREDICTION */}

        <div className="mt-6 rounded-xl bg-white/[0.03] p-3">
          <p className="text-[10px] uppercase tracking-[0.12em] text-zinc-500">
            Prediction
          </p>
          <h2 className="mt-1 text-xl font-black">{match.prediction}</h2>
        </div>

        {/* CONFIDENCE */}

        <div className="mt-4">
          <PredictionConfidence confidence={match.confidence} />
        </div>

        {/* WHY THIS PREDICTION */}

        <div className="mt-5">
          <p className="text-[10px] uppercase tracking-[0.12em] text-zinc-500">
            Why This Prediction
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            {match.reason ??
              "Goalix AI hasn't published the breakdown for this pick yet."}
          </p>
        </div>

        {/* H2H + FORM */}

        <PredictionH2H
          homeTeam={match.homeTeam}
          awayTeam={match.awayTeam}
          form={match.form}
          h2h={match.h2h}
        />

        {/* ODDS + BOOKING */}

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] text-zinc-500">Odds</p>
            <h3 className="mt-1 text-lg font-black">{match.odds}</h3>
          </div>

          <div className="text-right">
            <p className="text-[11px] text-zinc-500">Booking Code</p>
            <h3 className="mt-1 text-sm font-black text-green-400">
              {match.bookingCode}
            </h3>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes predictionModalIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}