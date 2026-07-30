"use client";

interface FeedbackFiltersProps {
  activeFilter:
    | "all"
    | "new"
    | "resolved";

  onChange: (
    filter:
      | "all"
      | "new"
      | "resolved"
  ) => void;
}

const filters = [
  {
    label: "All",
    value: "all",
  },

  {
    label: "New",
    value: "new",
  },

  {
    label: "Resolved",
    value: "resolved",
  },
] as const;

export default function FeedbackFilters({
  activeFilter,
  onChange,
}: FeedbackFiltersProps) {
  return (
    <div
      className="
        inline-flex

        rounded-2xl

        border
        border-white/10

        bg-[#111111]

        p-2
      "
    >
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() =>
            onChange(filter.value)
          }
          className={`
            rounded-xl

            px-7
            py-3

            text-sm
            font-black

            transition-all
            duration-300

            ${
              activeFilter ===
              filter.value
                ? `
                  bg-green-500
                  text-black

                  shadow-lg
                  shadow-green-500/30
                `
                : `
                  text-zinc-400

                  hover:text-white
                `
            }
          `}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}