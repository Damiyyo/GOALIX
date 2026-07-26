"use client";

import { motion } from "framer-motion";

type NewsCardProps = {
  title: string;
  category: string;
  image: string;
};

const NewsCard = ({
  title,
  category,
  image,
}: NewsCardProps) => {
  return (
    <motion.div
      className="
        absolute

        w-full
        max-w-[700px]

        overflow-hidden

        rounded-[36px]

        border
        border-white/10

        bg-[#111111]

        shadow-[0_25px_80px_rgba(0,0,0,0.45)]
      "
    >
      {/* IMAGE */}

      <div className="relative h-[380px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full

            object-cover
          "
        />

        {/* Gradient */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t

            from-black
            via-black/20
            to-transparent
          "
        />

        {/* Category */}

        <span
          className="
            absolute

            left-6
            top-6

            rounded-full

            bg-green-500

            px-4
            py-2

            text-xs
            font-black

            uppercase
            tracking-[0.15em]

            text-white
          "
        >
          {category}
        </span>
      </div>

      {/* CONTENT */}

      <div className="p-8">
        <h2
          className="
            text-3xl
            font-black
            leading-tight

            text-white
          "
        >
          {title}
        </h2>

        <div
          className="
            mt-8

            flex
            items-center
            justify-between
          "
        >
          <button
            className="
              rounded-xl

              bg-white

              px-5
              py-3

              font-bold

              text-black

              transition

              hover:scale-105
            "
          >
            Read More
          </button>

          <p
            className="
              text-sm

              text-zinc-500
            "
          >
            Goalix News
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCard;