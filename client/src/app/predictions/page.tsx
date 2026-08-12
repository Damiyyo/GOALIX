"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

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
  const [activeTab, setActiveTab] =
    useState<"predictions" | "odds">(
      "predictions"
    );

  const [selectedLeague, setSelectedLeague] =
    useState("All");

  const [showOdds, setShowOdds] =
    useState(false);

  const [
    showPredictionLoader,
    setShowPredictionLoader,
  ] = useState(false);

  /* ========================= */
  /* 2 ODDS PROMPT             */
  /* ========================= */

  const [
    showWeeklyOddsPrompt,
    setShowWeeklyOddsPrompt,
  ] = useState(false);

  const FIVE_DAYS =
    5 * 24 * 60 * 60 * 1000;

  /* ========================= */
  /* CHECK 2 ODDS PROMPT       */
  /* ========================= */

  useEffect(() => {
    const lastShown =
      localStorage.getItem(
        "goalix_2_odds_prompt"
      );

    if (!lastShown) {
      setShowWeeklyOddsPrompt(true);
      return;
    }

    const lastShownTime =
      Number(lastShown);

    const timePassed =
      Date.now() - lastShownTime;

    if (timePassed >= FIVE_DAYS) {
      setShowWeeklyOddsPrompt(true);
    }
  }, []);

  /* ========================= */
  /* CLOSE PROMPT               */
  /* ========================= */

  const closeWeeklyOddsPrompt = () => {
    localStorage.setItem(
      "goalix_2_odds_prompt",
      Date.now().toString()
    );

    setShowWeeklyOddsPrompt(false);
  };

  /* ========================= */
  /* VIEW 2 ODDS                */
  /* ========================= */

  const viewWeeklyOdds = () => {
    localStorage.setItem(
      "goalix_2_odds_prompt",
      Date.now().toString()
    );

    setShowWeeklyOddsPrompt(false);

    setShowPredictionLoader(false);

    setShowOdds(false);

    setActiveTab("odds");
  };

  /* ========================= */
  /* FILTER PREDICTIONS         */
  /* ========================= */

  const filteredPredictions =
    useMemo(() => {
      if (
        selectedLeague ===
        "All"
      ) {
        return allPredictions;
      }

      return allPredictions.filter(
        (match) =>
          match.league ===
          selectedLeague
      );
    }, [selectedLeague]);

  /* ========================= */
  /* TAB CHANGE                 */
  /* ========================= */

  const handleTabChange = (
    tab: "predictions" | "odds"
  ) => {
    if (tab === activeTab) {
      return;
    }

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
      {/* ========================= */}
      {/* MOBILE NAVBAR              */}
      {/* ========================= */}

      <div className="lg:hidden">
        <Navbar />
      </div>

      {/* ========================= */}
      {/* DESKTOP NAVBAR             */}
      {/* ========================= */}

      <div className="hidden lg:block">
        <Navbar />
      </div>

      {/* ========================= */}
      {/* MAIN CONTENT               */}
      {/* ========================= */}

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
        {/* ========================= */}
        {/* HERO                       */}
        {/* ========================= */}

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

        {/* ========================= */}
        {/* TABS                       */}
        {/* ========================= */}

        <PredictionTabs
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        {/* ========================= */}
        {/* FILTER                     */}
        {/* ========================= */}

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

        {/* ========================= */}
        {/* PREDICTIONS                */}
        {/* ========================= */}

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
        {/* RETURNING TO PREDICTIONS   */}
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
        {/* ODDS LOADER                */}
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
        {/* ODDS CARDS                 */}
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

      {/* ========================= */}
      {/* 2 ODDS PROMPT              */}
      {/* ========================= */}

      {showWeeklyOddsPrompt && (
        <div
          className="
            fixed
            inset-0
            z-[100]

            flex
            items-center
            justify-center

            bg-black/75

            px-4

            backdrop-blur-md
          "
        >
          <div
            className="
              relative

              w-full
              max-w-lg

              overflow-hidden

              rounded-[32px]

              border
              border-white/10

              bg-[#111111]

              p-8

              shadow-2xl
            "
          >
            {/* GLOW */}

            <div
              className="
                pointer-events-none

                absolute
                -right-20
                -top-20

                h-48
                w-48

                rounded-full

                bg-green-500/10

                blur-3xl
              "
            />

            {/* ICON */}

            <div
              className="
                relative

                flex
                h-16
                w-16

                items-center
                justify-center

                rounded-2xl

                border
                border-green-500/20

                bg-green-500/10

                text-2xl
              "
            >
              ⚡
            </div>

            {/* LABEL */}

            <p
              className="
                relative

                mt-6

                text-xs
                font-black
                uppercase
                tracking-[0.2em]

                text-green-400
              "
            >
              Goalix Pick
            </p>

            {/* TITLE */}

            <h2
              className="
                relative

                mt-3

                text-4xl
                font-black
                tracking-tight
              "
            >
              This Week's
              <br />
              2 Odds
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                relative

                mt-4

                leading-7

                text-zinc-400
              "
            >
              We've selected a
              carefully researched
              2-odds ticket from our
              available predictions.
              Check out this week's
              selection and see what
              Goalix AI is backing.
            </p>

            {/* ODDS PREVIEW */}

            <div
              className="
                relative

                mt-7

                flex
                items-center
                justify-between

                rounded-2xl

                border
                border-green-500/20

                bg-green-500/5

                p-5
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-wider

                    text-zinc-500
                  "
                >
                  Selected Ticket
                </p>

                <p
                  className="
                    mt-1

                    text-lg
                    font-black
                  "
                >
                  2 Odds
                </p>
              </div>

              <div
                className="
                  text-3xl
                  font-black

                  text-green-400
                "
              >
                2.00+
              </div>
            </div>

            {/* ACTIONS */}

            <div
              className="
                relative

                mt-7

                flex
                flex-col

                gap-3
              "
            >
              <button
                type="button"
                onClick={
                  viewWeeklyOdds
                }
                className="
                  w-full

                  rounded-2xl

                  bg-green-500

                  px-6
                  py-4

                  text-sm
                  font-black

                  text-black

                  transition-all
                  duration-300

                  hover:scale-[1.02]
                  hover:bg-green-400
                "
              >
                View 2 Odds
              </button>

              <button
                type="button"
                onClick={
                  closeWeeklyOddsPrompt
                }
                className="
                  w-full

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.03]

                  px-6
                  py-4

                  text-sm
                  font-semibold

                  text-zinc-400

                  transition-all

                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                Maybe Later
              </button>
            </div>

            {/* FOOTNOTE */}

            <p
              className="
                relative

                mt-5

                text-center

                text-xs

                text-zinc-600
              "
            >
              New Goalix picks are
              added regularly.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
