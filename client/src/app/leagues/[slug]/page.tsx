import { notFound } from "next/navigation";

import Navbar from "@/components/navigation/Navbar";

import { leagueTables } from "@/data/leagues";

import LeagueHeader from "@/data/leagues/LeagueHeader";
import LeagueTable from "@/data/leagues/LeagueTable";

export default async function LeaguePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const league =
    leagueTables[
      slug as keyof typeof leagueTables
    ];

  if (!league) {
    notFound();
  }

  return (
    <main
      className="
        min-h-screen

        bg-[#0b0b0b]

        text-white
      "
    >
      {/* MOBILE NAVBAR */}

      <div className="lg:hidden">
        <Navbar />
      </div>

      {/* DESKTOP NAVBAR */}

      <div className="hidden lg:block">
        <Navbar />
      </div>

      {/* PAGE */}

      <div
        className="
          mx-auto

          max-w-7xl

          px-4

          pt-36
          pb-10

          lg:px-8
          lg:pt-28
        "
      >
        <LeagueHeader
          league={league.name}
          season="2026/27"
          slug={slug}
        />

        <div className="mt-10">
          <LeagueTable
            table={league.table}
          />
        </div>
      </div>
    </main>
  );
}