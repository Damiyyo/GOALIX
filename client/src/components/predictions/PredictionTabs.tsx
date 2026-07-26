"use client";

interface PredictionTabsProps {
  activeTab: "predictions" | "odds";

  onTabChange: (
    tab: "predictions" | "odds"
  ) => void;
}

export default function PredictionTabs({
  activeTab,
  onTabChange,
}: PredictionTabsProps) {
  return (
    <section className="mt-12">
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
        <button
          onClick={() =>
            onTabChange(
              "predictions"
            )
          }
          className={`
            rounded-xl

            px-8
            py-3

            text-sm
            font-black

            transition-all
            duration-300

            ${
              activeTab ===
              "predictions"
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
          Predictions
        </button>

        <button
          onClick={() =>
            onTabChange("odds")
          }
          className={`
            rounded-xl

            px-8
            py-3

            text-sm
            font-black

            transition-all
            duration-300

            ${
              activeTab ===
              "odds"
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
          Odds Tickets
        </button>
      </div>
    </section>
  );
}