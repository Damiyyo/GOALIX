"use client";

import { motion } from "framer-motion";

const GoalixBot = () => {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative flex h-[140px] w-[120px] items-end justify-center"
    >
      {/* Glow */}

      <div
        className="
          absolute
          bottom-0

          h-24
          w-24

          rounded-full

          bg-green-500/20

          blur-3xl
        "
      />

      {/* Head */}

      <div
        className="
          absolute
          top-0

          flex
          h-20
          w-20
          items-center
          justify-center

          rounded-[28px]

          border
          border-white/10

          bg-[#1a1a1a]
        "
      >
        {/* Eyes */}

        <div className="flex gap-4">
          <motion.div
            animate={{
              opacity: [1, 0.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="
              h-3
              w-3

              rounded-full

              bg-green-400
            "
          />

          <motion.div
            animate={{
              opacity: [1, 0.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: 0.15,
            }}
            className="
              h-3
              w-3

              rounded-full

              bg-green-400
            "
          />
        </div>
      </div>

      {/* Body */}

      <div
        className="
          absolute
          top-16

          h-16
          w-16

          rounded-[22px]

          border
          border-white/10

          bg-[#111111]
        "
      />

      {/* Left Arm */}

      <motion.div
        animate={{
          rotate: [-15, 15, -15],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
        }}
        className="
          absolute
          left-3
          top-20

          h-10
          w-[4px]

          origin-top

          rounded-full

          bg-zinc-400
        "
      />

      {/* Right Arm */}

      <motion.div
        animate={{
          rotate: [15, -15, 15],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
        }}
        className="
          absolute
          right-3
          top-20

          h-10
          w-[4px]

          origin-top

          rounded-full

          bg-zinc-400
        "
      />

      {/* Left Leg */}

      <motion.div
        animate={{
          rotate: [15, -15, 15],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-0
          left-[44px]

          h-12
          w-[4px]

          origin-top

          rounded-full

          bg-zinc-400
        "
      />

      {/* Right Leg */}

      <motion.div
        animate={{
          rotate: [-15, 15, -15],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-0
          right-[44px]

          h-12
          w-[4px]

          origin-top

          rounded-full

          bg-zinc-400
        "
      />
    </motion.div>
  );
};

export default GoalixBot;