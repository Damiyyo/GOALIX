"use client";

interface FeedbackButtonProps {
  onClick: () => void;
}

export default function FeedbackButton({
  onClick,
}: FeedbackButtonProps) {
  return (
    <>
      {/* Desktop */}

      <button
        onClick={onClick}
        className="
          fixed
          right-6
          top-1/2
          z-40

          hidden
          -translate-y-1/2

          rounded-2xl

          border
          border-white/10

          bg-[#171717]/90

          px-5
          py-4

          text-sm
          font-bold

          text-white

          backdrop-blur-xl

          transition-all
          duration-300

          hover:scale-105
          hover:border-green-500/40
          hover:bg-[#1d1d1d]

          lg:flex
          lg:items-center
          lg:gap-3
        "
      >
        💬 Feedback
      </button>

      {/* Mobile */}

      <button
        onClick={onClick}
        className="
          fixed

          bottom-24
          right-5

          z-40

          flex
          h-14
          w-14

          items-center
          justify-center

          rounded-full

          bg-green-500

          text-2xl

          shadow-xl

          transition-all
          duration-300

          hover:scale-105

          lg:hidden
        "
      >
        💬
      </button>
    </>
  );
}