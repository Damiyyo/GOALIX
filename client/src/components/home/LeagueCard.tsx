"use client";

import { motion } from "framer-motion";

type LeagueCardProps = {
  name: string;
  country: string;
  logo: string;
};

const LeagueCard = ({
  name,
  country,
  logo,
}: LeagueCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group

        min-w-[280px]

        rounded-[30px]

        border
        border-white/10

        bg-[#0b0b0b]

        p-6

        transition-all
        duration-300

        hover:border-green-500/40
        hover:shadow-[0_0_35px_rgba(34,197,94,0.18)]
      "
    >
      {/* TOP */}

      <div className="flex items-center justify-between">
        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.08,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            flex

            h-16
            w-16

            items-center
            justify-center

            rounded-2xl

            bg-white

            p-3
          "
        >
          <img
            src={logo}
            alt={name}
            className="
              h-full
              w-full

              object-contain
            "
          />
        </motion.div>

        <span
          className="

            px-3
            py-1

            text-xs
            font-semibold

            text-green-400
          "
        >
        </span>
      </div>

      {/* BODY */}

      <div className="mt-8">
        <h3
          className="
            text-2xl
            font-black

            text-white
          "
        >
          {name}
        </h3>

        <p
          className="
            mt-2

            text-zinc-400
          "
        >
          {country}
        </p>
      </div>

      {/* FOOTER */}

      <div className="mt-8">
        <button
          className="
            text-sm
            font-semibold

            text-white

            transition-all
            duration-300

            group-hover:translate-x-2
          "
        >
          View League →
        </button>
      </div>
    </motion.div>
  );
};

export default LeagueCard;