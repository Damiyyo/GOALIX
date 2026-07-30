"use client";

import { Feedback } from "./page";

interface FeedbackCardProps {
  feedback: Feedback;

  selected: boolean;

  onClick: () => void;
}

export default function FeedbackCard({
  feedback,
  selected,
  onClick,
}: FeedbackCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full

        rounded-[24px]

        border

        p-5

        text-left

        transition-all
        duration-300

        ${
          selected
            ? `
              border-green-500/40
              bg-green-500/10
            `
            : `
              border-white/10
              bg-[#181818]

              hover:border-green-500/20
              hover:bg-[#1d1d1d]
            `
        }
      `}
    >
      {/* TOP */}

      <div
        className="
          flex
          items-start
          justify-between
        "
      >
        <div>
          <h3
            className="
              text-lg
              font-black
            "
          >
            {feedback.subject}
          </h3>

          <p
            className="
              mt-1

              text-sm

              text-zinc-500
            "
          >
            {feedback.category}
          </p>
        </div>

        <span
          className={`
            rounded-full

            px-3
            py-1

            text-xs
            font-black
            uppercase

            ${
              feedback.status ===
              "new"
                ? `
                  bg-green-500/15
                  text-green-400
                `
                : `
                  bg-zinc-700
                  text-zinc-300
                `
            }
          `}
        >
          {feedback.status}
        </span>
      </div>

      {/* USER */}

      <div className="mt-5">
        <p
          className="
            font-semibold
          "
        >
          {feedback.fullName}
        </p>

        <p
          className="
            mt-1

            text-sm

            text-zinc-500
          "
        >
          {feedback.email}
        </p>
      </div>

      {/* PREVIEW */}

      <p
        className="
          mt-5

          line-clamp-2

          text-sm

          text-zinc-400
        "
      >
        {feedback.message}
      </p>

      {/* DATE */}

      <div
        className="
          mt-6

          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-xs

            text-zinc-500
          "
        >
          {new Date(
            feedback.createdAt
          ).toLocaleDateString()}
        </span>

        <span
          className="
            text-xs
            font-bold

            text-green-400
          "
        >
          View →
        </span>
      </div>
    </button>
  );
}