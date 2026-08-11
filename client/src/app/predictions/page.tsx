
"use client";

import { useMemo, useState } from "react";

import Navbar from "@/components/navigation/Navbar";

import PredictionCard from "@/components/predictions/PredictionCard";
import PredictionTabs from "@/components/predictions/PredictionTabs";
import PredictionFilter from "@/components/predictions/predictionFilter";

import OddsLoader from "@/components/predictions/OddsLoader";
import PredictionLoader from "@/components/predictions/predictionLoader";

import OddsCard from "@/components/predictions/OddsCard";

import { allPredictions } from "@/data/prediction";
import { tickets } from "@/data/odds/tickets";

export default function PredictionsPage() {
  const [activeTab, setActiveTab] = useState<
    "predictions" | "odds"
  >("predictions");

  const [selectedLeague, setSelectedLeague] =
    useState("All");

  const [showOdds, setShowOdds] =
    useState(false);

  const [
    showPredictionLoader,
    setShowPredictionLoader,
  ] = useState(false);

  const filteredPredictions =
    useMemo(() => {
      if (selectedLeague === "All") {
        return allPredictions;
      }

      return allPredictions.filter(
        (match) =>
          match.league === selectedLeague
      );
    }, [selectedLeague]);

  const handleTabChange = (
    tab: "predictions" | "odds"
  ) => {
    if (tab === activeTab) return;

    if (tab === "odds") {
      setShowOdds(false);

      setActiveTab("odds");

      return;
    }

    setShowOdds(false);

    setShowPredictionLoader(true);
  };

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

      <div
        className="
          mx-auto
          max-w-7xl

          px-4

          pt-36
          pb-14

          lg:px-8
          lg:pt-24
        "
      >
        {/* HERO */}

        <section className="mb-10">
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]

              text-green-400
            "
          >
            Goalix AI
          </p>

          <h1
            className="
              mt-4

              text-5xl
              font-black
              tracking-tight

              lg:text-7xl
            "
          >
            Football Predictions
          </h1>

          <p
            className="
              mt-4

              max-w-2xl

              text-zinc-400
            "
          >
            Premium football predictions
            powered by Goalix AI.
            Analyze Europe's biggest
            leagues with confidence
            ratings, odds and betting
            tickets.
          </p>
        </section>

        {/* TABS */}

        <PredictionTabs
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        {/* FILTER */}

        {activeTab ===
          "predictions" && (
          <PredictionFilter
            selectedLeague={
              selectedLeague
            }
            onLeagueChange={
              setSelectedLeague
            }
          />
        )}

        {/* PREDICTIONS */}

        {activeTab ===
          "predictions" &&
          !showPredictionLoader && (
            <>
              {filteredPredictions.length ===
              0 ? (
                <div
                  className="
                    mt-12

                    rounded-[32px]

                    border
                    border-white/10

                    bg-[#111111]

                    p-12

                    text-center
                  "
                >
                  <h2
                    className="
                      text-2xl
                      font-black
                    "
                  >
                    No Predictions Found
                  </h2>

                  <p
                    className="
                      mt-3

                      text-zinc-400
                    "
                  >
                    There are currently
                    no predictions
                    available for this
                    league.
                  </p>
                </div>
              ) : (
                <section
                  className="
                    mt-10

                    grid
                    gap-6

                    md:grid-cols-2

                    xl:grid-cols-3
                  "
                >
                  {filteredPredictions.map(
                    (match) => (
                      <PredictionCard
                        key={match.id}
                        match={match}
                      />
                    )
                  )}
                </section>
              )}
            </>
          )}
                  {/* ========================= */}
        {/* RETURNING TO PREDICTIONS */}
        {/* ========================= */}

        {showPredictionLoader && (
          <PredictionLoader
            onComplete={() => {
              setShowPredictionLoader(
                false
              );

              setActiveTab(
                "predictions"
              );
            }}
          />
        )}

        {/* ========================= */}
        {/* ODDS LOADER */}
        {/* ========================= */}

        {activeTab === "odds" &&
          !showOdds &&
          !showPredictionLoader && (
            <OddsLoader
              onComplete={() =>
                setShowOdds(true)
              }
            />
          )}

        {/* ========================= */}
        {/* ODDS CARDS */}
        {/* ========================= */}

        {activeTab === "odds" &&
          showOdds &&
          !showPredictionLoader && (
            <section
              className="
                mt-10

                grid
                gap-6

                md:grid-cols-2

                xl:grid-cols-3
              "
            >
              {tickets.map(
                (ticket) => (
                  <OddsCard
                    key={ticket.id}
                    ticket={ticket}
                  />
                )
              )}
            </section>
          )}
      </div>
    </main>
  );
}