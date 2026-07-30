"use client";

import { Feedback } from "./page";
import FeedbackCard from "./FeedbackCard";

interface FeedbackListProps {
  feedback: Feedback[];

  loading: boolean;

  selectedFeedback: Feedback | null;

  onSelect: (
    feedback: Feedback
  ) => void;
}

export default function FeedbackList({
  feedback,
  loading,
  selectedFeedback,
  onSelect,
}: FeedbackListProps) {
  if (loading) {
    return (
      <div
        className="
          flex
          h-[650px]
          items-center
          justify-center

          rounded-[30px]

          border
          border-white/10

          bg-[#111111]
        "
      >
        <div
          className="
            h-12
            w-12

            rounded-full

            border-4
            border-zinc-700
            border-t-green-500

            animate-spin
          "
        />
      </div>
    );
  }

  if (feedback.length === 0) {
    return (
      <div
        className="
          flex
          h-[650px]
          flex-col

          items-center
          justify-center

          rounded-[30px]

          border
          border-white/10

          bg-[#111111]

          text-center
        "
      >
        <div className="text-6xl">
          📭
        </div>

        <h2
          className="
            mt-6

            text-2xl
            font-black
          "
        >
          No Feedback
        </h2>

        <p
          className="
            mt-3

            text-zinc-500
          "
        >
          No feedback has been
          submitted yet.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        h-[650px]

        overflow-y-auto

        space-y-4

        rounded-[30px]

        border
        border-white/10

        bg-[#111111]

        p-5
      "
    >
      {feedback.map(
        (item) => (
          <FeedbackCard
            key={item._id}
            feedback={item}
            selected={
              selectedFeedback?._id ===
              item._id
            }
            onClick={() =>
              onSelect(item)
            }
          />
        )
      )}
    </div>
  );
}