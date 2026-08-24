"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/navigation/Navbar";

type PredictionState =
  | "closed"
  | "open";

export default function PredictionsPage() {
  const [predictionState, setPredictionState] =
    useState<PredictionState>("closed");

  const [timeRemaining, setTimeRemaining] =
    useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

  /*
   * ==========================================
   * PREDICTION SCHEDULE
   * ==========================================
   *
   * Predictions open every Wednesday.
   *
   * For now, the page only controls the
   * opening/closing state.
   *
   * Later we can connect the actual
   * predictions to the backend.
   */

  useEffect(() => {
    const updatePredictionState = () => {
      const now = new Date();

      /*
       * Nigeria uses WAT (UTC+1).
       *
       * Convert current time to Nigeria
       * using Intl so we don't depend on
       * the user's computer timezone.
       */

      const nigeriaParts = new Intl.DateTimeFormat(
        "en-US",
        {
          timeZone: "Africa/Lagos",
          weekday: "long",
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
        }
      ).formatToParts(now);

      const getPart = (
        type: string
      ) =>
        nigeriaParts.find(
          (part) =>
            part.type === type
        )?.value;

      const weekday =
        getPart("weekday");

      const year = Number(
        getPart("year")
      );

      const month =
        Number(getPart("month"));

      const day =
        Number(getPart("day"));

      const hour =
        Number(getPart("hour"));

      const minute =
        Number(getPart("minute"));

      const second =
        Number(getPart("second"));

      /*
       * ======================================
       * WEDNESDAY = OPEN
       * ======================================
       */

      if (
        weekday === "Wednesday" ||
        weekday === "Thursday" ||
        weekday === "Friday" ||
        weekday === "Saturday" ||
        weekday === "Sunday"
      ) {
        setPredictionState("open");
        return;
      }

      /*
       * ======================================
       * MONDAY / TUESDAY = CLOSED
       * ======================================
       *
       * Calculate time until Wednesday 00:00 WAT.
       */

      const currentNigeriaTime =
        new Date(
          `${year}-${String(
            month
          ).padStart(2, "0")}-${String(
            day
          ).padStart(
            2,
            "0"
          )}T${String(hour).padStart(
            2,
            "0"
          )}:${String(
            minute
          ).padStart(
            2,
            "0"
          )}:${String(
            second
          ).padStart(
            2,
            "0"
          )}+01:00`
        );

      const nextWednesday =
        new Date(
          currentNigeriaTime
        );

      /*
       * Monday = 1
       * Tuesday = 2
       * Wednesday = 3
       */

      const currentDay =
        currentNigeriaTime.getDay();

      const daysUntilWednesday =
        3 - currentDay;

      nextWednesday.setDate(
        nextWednesday.getDate() +
          daysUntilWednesday
      );

      nextWednesday.setHours(
        0,
        0,
        0,
        0
      );

      const difference =
        nextWednesday.getTime() -
        currentNigeriaTime.getTime();

      const totalSeconds =
        Math.max(
          0,
          Math.floor(
            difference / 1000
          )
        );

      const days =
        Math.floor(
          totalSeconds /
            (60 * 60 * 24)
        );

      const hours =
        Math.floor(
          (totalSeconds %
            (60 * 60 * 24)) /
            (60 * 60)
        );

      const minutes =
        Math.floor(
          (totalSeconds %
            (60 * 60)) /
            60
        );

      const seconds =
        totalSeconds % 60;

      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds,
      });

      setPredictionState(
        "closed"
      );
    };

    updatePredictionState();

    const interval =
      setInterval(
        updatePredictionState,
        1000
      );

    return () =>
      clearInterval(interval);
  }, []);

  /*
   * ==========================================
   * OPEN PREDICTIONS
   * ==========================================
   */

  if (
    predictionState ===
    "open"
  ) {
    return (
      <main
        className="
          min-h-screen

          bg-[#0b0b0b]

          text-white
        "
      >
        <div className="lg:hidden">
          <Navbar />
        </div>

        <div
          className="
            hidden
            lg:block
          "
        >
          <Navbar />
        </div>

        <section
          className="
            mx-auto

            flex
            min-h-screen

            max-w-7xl

            items-center
            justify-center

            px-6
            py-24
          "
        >
          <div
            className="
              w-full
              max-w-4xl

              rounded-[35px]

              border
              border-white/[0.08]

              bg-[#111111]

              p-8
              text-center

              lg:p-14
            "
          >
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
                mt-5

                text-4xl
                font-black
                tracking-tight

                lg:text-6xl
              "
            >
              Next Week's
              Predictions
            </h1>

            <p
              className="
                mx-auto

                mt-5

                max-w-2xl

                text-zinc-400
              "
            >
              Our new football
              predictions are now
              available. Analyze
              the upcoming
              matchweek with Goalix
              AI.
            </p>

            {/* PREDICTIONS WILL GO HERE */}

            <div
              className="
                mt-10

                rounded-[28px]

                border
                border-green-500/20

                bg-green-500/[0.06]

                p-8
              "
            >
              <p
                className="
                  text-lg
                  font-black

                  text-green-400
                "
              >
                Predictions are
                now open.
              </p>

              <p
                className="
                  mt-2

                  text-sm
                  text-zinc-500
                "
              >
                Prediction cards
                will be displayed
                here.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  /*
   * ==========================================
   * FIRST WEEK COMPLETED
   * ==========================================
   */

  return (
    <main
      className="
        min-h-screen

        bg-[#0b0b0b]

        text-white
      "
    >
      <div className="lg:hidden">
        <Navbar />
      </div>

      <div
        className="
          hidden
          lg:block
        "
      >
        <Navbar />
      </div>

      <section
        className="
          mx-auto

          flex
          min-h-screen

          max-w-7xl

          items-center
          justify-center

          px-6
          py-24
        "
      >
        <div
          className="
            w-full
            max-w-4xl

            rounded-[35px]

            border
            border-white/[0.08]

            bg-[#111111]

            p-8

            text-center

            lg:p-14
          "
        >
          {/* BRAND */}

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

          {/* TITLE */}

          <h1
            className="
              mt-5

              text-5xl
              font-black
              tracking-tight

              lg:text-7xl
            "
          >
            First Week Done.
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto

              mt-5

              max-w-2xl

              text-base
              leading-7

              text-zinc-400

              lg:text-lg
            "
          >
            The opening week of
            Goalix predictions has
            been completed.
            <br />

            Our next set of football
            predictions will be
            available Wednesday.
          </p>

          {/* COUNTDOWN */}

          <div
            className="
              mx-auto

              mt-10

              grid

              max-w-2xl

              grid-cols-2

              gap-4

              sm:grid-cols-4
            "
          >
            {/* DAYS */}

            <div
              className="
                rounded-[24px]

                border
                border-white/[0.08]

                bg-white/[0.03]

                p-5
              "
            >
              <h2
                className="
                  text-4xl
                  font-black

                  lg:text-5xl
                "
              >
                {String(
                  timeRemaining.days
                ).padStart(
                  2,
                  "0"
                )}
              </h2>

              <p
                className="
                  mt-2

                  text-xs
                  font-bold
                  uppercase
                  tracking-wider

                  text-zinc-500
                "
              >
                Days
              </p>
            </div>

            {/* HOURS */}

            <div
              className="
                rounded-[24px]

                border
                border-white/[0.08]

                bg-white/[0.03]

                p-5
              "
            >
              <h2
                className="
                  text-4xl
                  font-black

                  lg:text-5xl
                "
              >
                {String(
                  timeRemaining.hours
                ).padStart(
                  2,
                  "0"
                )}
              </h2>

              <p
                className="
                  mt-2

                  text-xs
                  font-bold
                  uppercase
                  tracking-wider

                  text-zinc-500
                "
              >
                Hours
              </p>
            </div>

            {/* MINUTES */}

            <div
              className="
                rounded-[24px]

                border
                border-white/[0.08]

                bg-white/[0.03]

                p-5
              "
            >
              <h2
                className="
                  text-4xl
                  font-black

                  lg:text-5xl
                "
              >
                {String(
                  timeRemaining.minutes
                ).padStart(
                  2,
                  "0"
                )}
              </h2>

              <p
                className="
                  mt-2

                  text-xs
                  font-bold
                  uppercase
                  tracking-wider

                  text-zinc-500
                "
              >
                Minutes
              </p>
            </div>

            {/* SECONDS */}

            <div
              className="
                rounded-[24px]

                border
                border-green-500/20

                bg-green-500/[0.06]

                p-5
              "
            >
              <h2
                className="
                  text-4xl
                  font-black

                  text-green-400

                  lg:text-5xl
                "
              >
                {String(
                  timeRemaining.seconds
                ).padStart(
                  2,
                  "0"
                )}
              </h2>

              <p
                className="
                  mt-2

                  text-xs
                  font-bold
                  uppercase
                  tracking-wider

                  text-green-500/60
                "
              >
                Seconds
              </p>
            </div>
          </div>

          {/* NOTICE */}

          <div
            className="
              mx-auto

              mt-10

              max-w-2xl

              rounded-[24px]

              border
              border-white/[0.06]

              bg-white/[0.02]

              p-5
            "
          >
            <p
              className="
                text-sm

                leading-6

                text-zinc-500
              "
            >
              🗓️ Predictions open every{" "}
              <span
                className="
                  font-bold

                  text-white
                "
              >
                Wednesday
              </span>{" "}
              for the following
              matchweek.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

// "use client";

// import { useMemo, useState } from "react";

// import Navbar from "@/components/navigation/Navbar";

// import PredictionCard from "@/components/predictions/PredictionCard";
// import PredictionTabs from "@/components/predictions/PredictionTabs";
// import PredictionFilter from "@/components/predictions/predictionFilter";

// import OddsLoader from "@/components/predictions/OddsLoader";
// import PredictionLoader from "@/components/predictions/predictionLoader";

// import OddsCard from "@/components/predictions/OddsCard";

// import { allPredictions } from "@/data/prediction";
// import { tickets } from "@/data/odds/tickets";

// export default function PredictionsPage() {
//   const [activeTab, setActiveTab] = useState<
//     "predictions" | "odds"
//   >("predictions");

//   const [selectedLeague, setSelectedLeague] =
//     useState("All");

//   const [showOdds, setShowOdds] =
//     useState(false);

//   const [
//     showPredictionLoader,
//     setShowPredictionLoader,
//   ] = useState(false);

//   const filteredPredictions =
//     useMemo(() => {
//       if (selectedLeague === "All") {
//         return allPredictions;
//       }

//       return allPredictions.filter(
//         (match) =>
//           match.league === selectedLeague
//       );
//     }, [selectedLeague]);

//   const handleTabChange = (
//     tab: "predictions" | "odds"
//   ) => {
//     if (tab === activeTab) return;

//     if (tab === "odds") {
//       setShowOdds(false);

//       setActiveTab("odds");

//       return;
//     }

//     setShowOdds(false);

//     setShowPredictionLoader(true);
//   };

//   return (
//     <main
//       className="
//         min-h-screen

//         bg-[#0b0b0b]

//         text-white
//       "
//     >
//       {/* MOBILE NAVBAR */}

//       <div className="lg:hidden">
//         <Navbar />
//       </div>

//       {/* DESKTOP NAVBAR */}

//       <div className="hidden lg:block">
//         <Navbar />
//       </div>

//       <div
//         className="
//           mx-auto
//           max-w-7xl

//           px-4

//           pt-36
//           pb-14

//           lg:px-8
//           lg:pt-24
//         "
//       >
//         {/* HERO */}

//         <section className="mb-10">
//           <p
//             className="
//               text-sm
//               font-semibold
//               uppercase
//               tracking-[0.2em]

//               text-green-400
//             "
//           >
//             Goalix AI
//           </p>

//           <h1
//             className="
//               mt-4

//               text-5xl
//               font-black
//               tracking-tight

//               lg:text-7xl
//             "
//           >
//             Football Predictions
//           </h1>

//           <p
//             className="
//               mt-4

//               max-w-2xl

//               text-zinc-400
//             "
//           >
//             Premium football predictions
//             powered by Goalix AI.
//             Analyze Europe's biggest
//             leagues with confidence
//             ratings, odds and betting
//             tickets.
//           </p>
//         </section>

//         {/* TABS */}

//         <PredictionTabs
//           activeTab={activeTab}
//           onTabChange={handleTabChange}
//         />

//         {/* FILTER */}

//         {activeTab ===
//           "predictions" && (
//           <PredictionFilter
//             selectedLeague={
//               selectedLeague
//             }
//             onLeagueChange={
//               setSelectedLeague
//             }
//           />
//         )}

//         {/* PREDICTIONS */}

//         {activeTab ===
//           "predictions" &&
//           !showPredictionLoader && (
//             <>
//               {filteredPredictions.length ===
//               0 ? (
//                 <div
//                   className="
//                     mt-12

//                     rounded-[32px]

//                     border
//                     border-white/10

//                     bg-[#111111]

//                     p-12

//                     text-center
//                   "
//                 >
//                   <h2
//                     className="
//                       text-2xl
//                       font-black
//                     "
//                   >
//                     No Predictions Found
//                   </h2>

//                   <p
//                     className="
//                       mt-3

//                       text-zinc-400
//                     "
//                   >
//                     There are currently
//                     no predictions
//                     available for this
//                     league.
//                   </p>
//                 </div>
//               ) : (
//                 <section
//                   className="
//                     mt-10

//                     grid
//                     gap-6

//                     md:grid-cols-2

//                     xl:grid-cols-3
//                   "
//                 >
//                   {filteredPredictions.map(
//                     (match) => (
//                       <PredictionCard
//                         key={match.id}
//                         match={match}
//                       />
//                     )
//                   )}
//                 </section>
//               )}
//             </>
//           )}
//                   {/* ========================= */}
//         {/* RETURNING TO PREDICTIONS */}
//         {/* ========================= */}

//         {showPredictionLoader && (
//           <PredictionLoader
//             onComplete={() => {
//               setShowPredictionLoader(
//                 false
//               );

//               setActiveTab(
//                 "predictions"
//               );
//             }}
//           />
//         )}

//         {/* ========================= */}
//         {/* ODDS LOADER */}
//         {/* ========================= */}

//         {activeTab === "odds" &&
//           !showOdds &&
//           !showPredictionLoader && (
//             <OddsLoader
//               onComplete={() =>
//                 setShowOdds(true)
//               }
//             />
//           )}

//         {/* ========================= */}
//         {/* ODDS CARDS */}
//         {/* ========================= */}

//         {activeTab === "odds" &&
//           showOdds &&
//           !showPredictionLoader && (
//             <section
//               className="
//                 mt-10

//                 grid
//                 gap-6

//                 md:grid-cols-2

//                 xl:grid-cols-3
//               "
//             >
//               {tickets.map(
//                 (ticket) => (
//                   <OddsCard
//                     key={ticket.id}
//                     ticket={ticket}
//                   />
//                 )
//               )}
//             </section>
//           )}
//       </div>
//     </main>
//   );
// }