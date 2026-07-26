"use client";

import { useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  PanInfo,
} from "framer-motion";

import NewsCard from "./NewsCard";

type News = {
  title: string;
  category: string;
  image: string;
};

type Props = {
  news: News[];
};

const SWIPE_THRESHOLD = 180;

export default function NewsDeck({
  news,
}: Props) {
  const [index, setIndex] =
    useState(0);

  const [exitX, setExitX] =
    useState(0);

  const orderedCards =
    useMemo(() => {
      return news.map(
        (_, i) =>
          news[
            (index + i) %
              news.length
          ]
      );
    }, [index, news]);

  const swipe = (
    direction: number
  ) => {
    setExitX(direction);

    setTimeout(() => {
      setIndex(
        (prev) =>
          (prev + 1) %
          news.length
      );

      setExitX(0);
    }, 250);
  };

  const onDragEnd = (
    _: any,
    info: PanInfo
  ) => {
    if (
      info.offset.x >
      SWIPE_THRESHOLD
    ) {
      swipe(1000);
      return;
    }

    if (
      info.offset.x <
      -SWIPE_THRESHOLD
    ) {
      swipe(-1000);
      return;
    }
  };
  return (
    <div
      className="
        relative

        mx-auto

        h-[650px]
        w-full

        max-w-[720px]
      "
    >
      {/* Back Card */}

      {orderedCards[2] && (
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{
            scale: 0.9,
            y: 32,
            opacity: 0.35,
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 25,
          }}
        >
          <NewsCard
            {...orderedCards[2]}
          />
        </motion.div>
      )}

      {/* Middle Card */}

      {orderedCards[1] && (
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{
            scale: 0.95,
            y: 16,
            opacity: 0.65,
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 25,
          }}
        >
          <NewsCard
            {...orderedCards[1]}
          />
        </motion.div>
      )}

      {/* Front Card */}

      <AnimatePresence mode="wait">
        <motion.div
          key={orderedCards[0].title}
          className="
            absolute
            inset-0

            cursor-grab

            active:cursor-grabbing
          "
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          dragElastic={0.18}
          onDragEnd={onDragEnd}
          whileDrag={{
            rotate: 10,
            scale: 1.03,
          }}
          style={{
            x: exitX,
          }}
          animate={{
            x: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
          }}
          exit={{
            x: exitX,
            rotate:
              exitX > 0 ? 25 : -25,
            opacity: 0,
            transition: {
              duration: 0.25,
            },
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 28,
          }}
        >
          <motion.div
            style={{
              originX: 0.5,
              originY: 1,
            }}
            whileDrag={{
              rotate: 8,
            }}
          >
            <NewsCard
              {...orderedCards[0]}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}