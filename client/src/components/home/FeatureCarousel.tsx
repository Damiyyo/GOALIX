"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: string;
};

type Props = {
  features: Feature[];
};

const FeatureCarousel = ({
  features,
}: Props) => {
  const [emblaRef, emblaApi] =
    useEmblaCarousel({
      loop: true,
      align: "start",
      dragFree: false,
    });

  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi)
      emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi)
      emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(
      emblaApi.selectedScrollSnap()
    );
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // autoplay

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay =
      setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);

    return () =>
      clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* LEFT */}

      <button
        onClick={scrollPrev}
        className="
          absolute

          left-0
          top-1/2

          z-20

          hidden

          -translate-y-1/2

          rounded-full

          border
          border-zinc-200

          bg-white

          p-3

          shadow-xl

          transition-all

          hover:scale-110

          lg:flex
        "
      >
        <ChevronLeft size={22} />
      </button>

      {/* RIGHT */}

      <button
        onClick={scrollNext}
        className="
          absolute

          right-0
          top-1/2

          z-20

          hidden

          -translate-y-1/2

          rounded-full

          border
          border-zinc-200

          bg-white

          p-3

          shadow-xl

          transition-all

          hover:scale-110

          lg:flex
        "
      >
        <ChevronRight size={22} />
      </button>

      {/* SLIDER */}

      <div
        className="overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex">
          {features.map(
            (
              feature,
              index
            ) => (
              <div
                key={index}
                className="
                  min-w-0

                  flex-[0_0_100%]

                  px-3

                  md:flex-[0_0_50%]

                  lg:flex-[0_0_33.333%]

                  xl:flex-[0_0_25%]
                "
              >
                <div
                  className="
                    group

                    h-full

                    rounded-3xl

                    border
                    border-zinc-200

                    bg-white

                    p-6

                    transition-all
                    duration-500

                    hover:-translate-y-2

                    hover:shadow-2xl
                  "
                >
                  {/* ICON */}

                  <div
                    className="
                      mb-6

                      flex
                      h-16
                      w-16

                      items-center
                      justify-center

                      rounded-2xl

                      bg-zinc-100

                      text-3xl

                      transition-all

                      group-hover:bg-zinc-200
                    "
                  >
                    {feature.icon}
                  </div>

                  <h3
                    className="
                      text-2xl

                      font-black

                      text-black
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      mt-4

                      leading-7

                      text-zinc-500
                    "
                  >
                    {feature.description}
                  </p>

                  <button
                    className="
                      mt-8

                      font-semibold

                      transition-all

                      hover:translate-x-2
                    "
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* DOTS */}

      <div
        className="
          mt-10

          flex

          justify-center

          gap-3
        "
      >
        {features.map(
          (_, index) => (
            <button
              key={index}
              onClick={() =>
                emblaApi?.scrollTo(
                  index
                )
              }
              className={`
                h-3
                w-3

                rounded-full

                transition-all
                duration-300

                ${
                  selectedIndex ===
                  index
                    ? "w-8 bg-black"
                    : "bg-zinc-300"
                }
              `}
            />
          )
        )}
      </div>
    </div>
  );
};

export default FeatureCarousel;