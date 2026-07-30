"use client";

import { Feedback } from "./page";

interface FeedbackDetailsProps {
    feedback: Feedback | null;
    onResolve: (id: string) => void;
    onDelete: (id: string) => void;
  }

export default function FeedbackDetails({
  feedback,
  onResolve,
  onDelete,
}: FeedbackDetailsProps) {
  if (!feedback) {
    return (
      <div
        className="
          flex
          h-[650px]
          flex-col
          items-center
          justify-center

          rounded-[30px]

          border border-white/10

          bg-[#111111]

          text-center
        "
      >
        <div className="text-6xl">💬</div>

        <h2
          className="
            mt-6

            text-3xl
            font-black
          "
        >
          Select Feedback
        </h2>

        <p
          className="
            mt-3

            max-w-sm

            text-zinc-500
          "
        >
          Select a feedback card from the left to
          view its complete details.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        flex
        h-[650px]
        flex-col

        overflow-hidden

        rounded-[30px]

        border
        border-white/10

        bg-[#111111]
      "
    >
      {/* HEADER */}

      <div
        className="
          border-b
          border-white/10

          p-7
        "
      >
        <span
          className={`
            inline-flex

            rounded-full

            px-4
            py-2

            text-xs
            font-black
            uppercase

            ${
              feedback.status === "new"
                ? "bg-green-500/15 text-green-400"
                : "bg-zinc-700 text-zinc-300"
            }
          `}
        >
          {feedback.status}
        </span>

        <h1
          className="
            mt-5

            text-3xl
            font-black
          "
        >
          {feedback.subject}
        </h1>

        <p
          className="
            mt-2

            text-zinc-500
          "
        >
          {feedback.category}
        </p>
      </div>

      {/* BODY */}

      <div
        className="
          flex-1

          overflow-y-auto

          space-y-8

          p-7
        "
      >
        {/* USER */}

        <div>
          <p
            className="
              text-xs
              uppercase
              tracking-[0.15em]

              text-zinc-500
            "
          >
            Submitted By
          </p>

          <h2
            className="
              mt-2

              text-xl
              font-black
            "
          >
            {feedback.fullName}
          </h2>

          <p className="text-zinc-400">
            {feedback.email}
          </p>
        </div>

        {/* DATE */}

        <div>
          <p
            className="
              text-xs
              uppercase
              tracking-[0.15em]

              text-zinc-500
            "
          >
            Date Submitted
          </p>

          <p className="mt-2">
            {new Date(
              feedback.createdAt
            ).toLocaleString()}
          </p>
        </div>

        {/* MESSAGE */}

        <div>
          <p
            className="
              text-xs
              uppercase
              tracking-[0.15em]

              text-zinc-500
            "
          >
            Feedback
          </p>

          <div
            className="
              mt-4

              rounded-2xl

              border
              border-white/10

              bg-[#181818]

              p-5
            "
          >
            <p
              className="
                whitespace-pre-wrap

                leading-8

                text-zinc-300
              "
            >
              {feedback.message}
            </p>
          </div>
        </div>

        {/* SCREENSHOT */}

        <div>
          <p
            className="
              text-xs
              uppercase
              tracking-[0.15em]

              text-zinc-500
            "
          >
            Screenshot
          </p>

          {feedback.screenshot ? (
            <img
              src={feedback.screenshot}
              alt="Feedback Screenshot"
              className="
                mt-4

                w-full

                rounded-2xl

                border
                border-white/10

                object-cover
              "
            />
          ) : (
            <div
              className="
                mt-4

                flex
                h-52
                items-center
                justify-center

                rounded-2xl

                border
                border-dashed
                border-white/10

                bg-[#181818]

                text-zinc-500
              "
            >
              No Screenshot
            </div>
          )}
        </div>
      </div>

      {/* FOOTER */}

      <div
        className="
          border-t
          border-white/10

          p-6
        "
      >
        <div className="flex gap-4">
          <button
            onClick={() =>
              onResolve(feedback._id)
            }
            disabled={
              feedback.status === "resolved"
            }
            className="
              flex-1

              rounded-2xl

              bg-green-500

              py-4

              font-black

              text-black

              transition-all

              hover:scale-[1.02]

              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            {feedback.status === "resolved"
              ? "Resolved"
              : "Mark as Resolved"}
          </button>

          <button
            onClick={() =>
              onDelete(feedback._id)
            }
            className="
              flex-1

              rounded-2xl

              border
              border-red-500/30

              bg-red-500/10

              py-4

              font-black

              text-red-400

              transition-all

              hover:bg-red-500/20
            "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}