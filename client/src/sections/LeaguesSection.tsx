"use client";

import Container from "@/components/ui/Container";
import LeagueMarquee from "@/components/home/LeagueMarquee";

const LeaguesSection = () => {
  return (
    <section
      className="
        bg-[#f5f5f5]

        py-24

        overflow-hidden
      "
    >
      <Container>
        {/* Heading */}

        <div className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            </p>

            <h2 className="text-4xl font-black leading-tight text-black md:text-5xl">
              Explore Top
              <br />
              Football Competitions
            </h2>
          </div>

          <p className="max-w-md leading-7 text-zinc-500">
            Follow the biggest football leagues around the world with standings, predictions and in-depth insights.
          </p>
        </div>

        {/* Animated League Marquee */}

        <LeagueMarquee />
      </Container>
    </section>
  );
};

export default LeaguesSection;