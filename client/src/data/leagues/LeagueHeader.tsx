"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface LeagueHeaderProps {
  league: string;
  season: string;
  slug: string;
}

const leagues = [
  {
    slug: "premier-league",
    name: "Premier League",
  },
  {
    slug: "la-liga",
    name: "La Liga",
  },
  {
    slug: "bundesliga",
    name: "Bundesliga",
  },
  {
    slug: "serie-a",
    name: "Serie A",
  },
  {
    slug: "ligue-1",
    name: "Ligue 1",
  },
];

const LeagueHeader = ({
  league,
  season,
  slug,
}: LeagueHeaderProps) => {
  const router = useRouter();

  return (
    <div
      className="
        mb-10

        flex
        flex-col
        gap-6

        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      {/* LEFT */}

      <div
        className="
          flex
          flex-col
          gap-4

          lg:flex-row
          lg:items-center
        "
      >
        {/* BACK */}

        <Link
          href="/leagues"
          className="
            inline-flex
            items-center
            gap-2

            rounded-xl

            border
            border-white/10

            bg-white/[0.04]

            px-4
            py-2

            text-sm
            font-semibold

            transition-all
            duration-300

            hover:bg-white/[0.08]
          "
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        {/* TITLE */}

        <div
          className="
            flex
            flex-col

            lg:flex-row
            lg:items-center
            lg:gap-4
          "
        >
          <h1
            className="
              text-4xl
              font-black
              tracking-tight

              lg:text-5xl
            "
          >
            {league}
          </h1>

          <span
            className="
              text-lg
              font-medium

              text-zinc-400

              lg:mt-2
            "
          >
            {season} Season
          </span>
        </div>
      </div>

      {/* LEAGUE SELECTOR */}

      <select
        value={slug}
        onChange={(e) =>
          router.push(
            `/leagues/${e.target.value}`
          )
        }
        className="
          rounded-2xl

          border
          border-white/10

          bg-white/[0.03]

          px-5
          py-3

          text-sm

          outline-none

          transition-all
          duration-300

          hover:border-green-500/30
        "
      >
        {leagues.map((league) => (
          <option
            key={league.slug}
            value={league.slug}
          >
            {league.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LeagueHeader;