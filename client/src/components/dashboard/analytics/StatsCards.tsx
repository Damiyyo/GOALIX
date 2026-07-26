const stats = [
  {
    title: "Total Predictions",
    value: "1,248",
    change: "+12.5%",
  },

  {
    title: "Accuracy Rate",
    value: "87%",
    change: "+4.3%",
  },

  {
    title: "Win Streak",
    value: "14",
    change: "+2 wins",
  },

  {
    title: "Total Profit",
    value: "+₦482K",
    change: "+18.2%",
  },
];

const StatsCards = () => {
  return (
    <section
      className="
        mt-10

        grid grid-cols-1
        gap-5

        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="
            rounded-[30px]

            border border-white/10
            bg-[#141414]

            p-6

            transition-all
            duration-300

            hover:-translate-y-1
            hover:bg-[#1a1a1a]
          "
        >
          {/* Small Label */}
          <p
            className="
              text-sm
              font-medium
              text-zinc-500
            "
          >
            {stat.title}
          </p>

          {/* Big Number */}
          <h2
            className="
              mt-5

              text-5xl
              font-black
              tracking-tight
              text-white
            "
          >
            {stat.value}
          </h2>

          {/* Growth */}
          <div
            className="
              mt-5

              inline-flex
              items-center

              rounded-full
              bg-green-500/10

              px-4 py-2
            "
          >
            <span
              className="
                text-sm
                font-bold
                text-green-400
              "
            >
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StatsCards;
