"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

import Navbar from "@/components/navigation/Navbar";

import RecentPredictions from "@/components/dashboard/analytics/RecentPredictions";
import UpcomingFixtures from "@/components/dashboard/fixtures/UpcomingFixtures";

import DashboardFooter from "@/components/dashboard/footer/DashboardFooter";
import FPLHub from "@/components/dashboard/fplhub/FPLHub";

import FeedbackButton from "@/components/feedback/FeedbackButton";
import FeedbackDrawer from "@/components/feedback/FeedbackDrawer";
import EmailSupportButton from "@/components/feedback/EmailSupportButton";

const DashboardPage = () => {
  const router = useRouter();

  const [userName, setUserName] =
    useState("User");

  const [showWelcome, setShowWelcome] =
    useState(false);

  const [showFeedback, setShowFeedback] =
    useState(false);

  const [
    showPredictionNotice,
    setShowPredictionNotice,
  ] = useState(false);

  useEffect(() => {
    const storedUser =
      localStorage.getItem(
        "goalixUser"
      );

    if (storedUser) {
      const user =
        JSON.parse(storedUser);

      setUserName(
        user.fullName || "User"
      );
    }

    const noticeSeen =
      localStorage.getItem(
        "goalixPredictionNoticeSeen"
      );

    if (!noticeSeen) {
      setShowPredictionNotice(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem(
      "goalixToken"
    );

    localStorage.removeItem(
      "goalixUser"
    );

    router.replace("/");
  };

  const handlePredictionNoticeClose =
    () => {
      localStorage.setItem(
        "goalixPredictionNoticeSeen",
        "true"
      );

      setShowPredictionNotice(false);
    };

  return (
    <div
      className="
        animate-[fadeIn_.7s_ease]
      "
    >
      {/* ================================= */}
      {/* PREDICTION NOTICE MODAL */}
      {/* ================================= */}

      {showPredictionNotice && (
        <div
          className="
            fixed
            inset-0

            z-[100]

            flex
            items-center
            justify-center

            bg-black/70

            px-4

            backdrop-blur-sm
          "
        >
          <div
            className="
              w-full
              max-w-md

              rounded-[30px]

              border
              border-white/10

              bg-[#151515]

              p-7

              shadow-2xl

              animate-[fadeIn_.3s_ease]
            "
          >
            {/* ICON */}

            <div
              className="
                flex
                h-14
                w-14

                items-center
                justify-center

                rounded-2xl

                bg-green-500/10

                text-2xl
              "
            >
              ⚽
            </div>

            {/* TITLE */}

            <h2
              className="
                mt-5

                text-2xl
                font-black

                tracking-tight

                text-white
              "
            >
              Predictions are opening soon
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-3

                text-sm
                leading-6

                text-zinc-400
              "
            >
              We're getting the Goalix
              prediction section ready
              for you. Predictions will be
              available soon.
            </p>

            {/* SPORTYBET NOTICE */}

            <div
              className="
                mt-5

                rounded-2xl

                border
                border-green-500/10

                bg-green-500/[0.06]

                p-4
              "
            >
              <p
                className="
                  text-xs
                  font-semibold

                  uppercase

                  tracking-[0.15em]

                  text-green-400
                "
              >
                Courtesy of the Goalix Team
              </p>

              <p
                className="
                  mt-2

                  text-sm
                  leading-6

                  text-zinc-300
                "
              >
                We've added a SportyBet code
                to your dashboard as a
                courtesy from the Goalix team.
              </p>

              <p
                className="
                  mt-3

                  text-xs

                  text-zinc-500
                "
              >
                You can find the code on your
                dashboard.
              </p>
            </div>

            {/* BUTTON */}

            <button
              type="button"
              onClick={
                handlePredictionNoticeClose
              }
              className="
                mt-6

                w-full

                rounded-2xl

                bg-white

                px-5
                py-4

                text-sm
                font-black

                text-black

                transition-all
                duration-300

                hover:scale-[1.02]

                active:scale-[0.98]
              "
            >
              Continue to Dashboard
            </button>
          </div>
        </div>
      )}

      <main
        className="
          min-h-screen

          bg-[#0b0b0b]

          bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_35%)]

          text-white
        "
      >
        {/* ================================= */}
        {/* MOBILE NAVBAR */}
        {/* ================================= */}

        <div
          className="
            fixed
            inset-x-0
            top-0

            z-50

            lg:hidden
          "
        >
          <Navbar />
        </div>

        <div className="flex">
          {/* ================================= */}
          {/* DESKTOP SIDEBAR */}
          {/* ================================= */}

          <aside
            className="
              hidden

              min-h-screen
              w-[260px]

              border-r
              border-white/[0.08]

              bg-black/20

              p-6

              backdrop-blur-xl

              lg:flex
              lg:flex-col
            "
          >
            {/* LOGO */}

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12

                  items-center
                  justify-center

                  rounded-2xl

                  bg-white

                  text-xl
                  font-black

                  text-black
                "
              >
                G
              </div>

              <div>
                <h1
                  className="
                    text-2xl
                    font-black
                  "
                >
                  Goalix
                </h1>

                <p
                  className="
                    text-sm
                    text-zinc-500
                  "
                >
                  Football Intelligence
                </p>
              </div>
            </div>

            {/* NAVIGATION */}

            <nav
              className="
                mt-12

                flex
                flex-col

                gap-3
              "
            >
              <Link
                href="/dashboard"
                className="
                  rounded-2xl

                  border
                  border-white/[0.08]

                  bg-white/[0.05]

                  px-5
                  py-4

                  text-sm
                  font-semibold

                  text-white
                "
              >
                Dashboard
              </Link>

              <Link
                href="/predictions"
                className="
                  rounded-2xl

                  px-5
                  py-4

                  text-sm
                  font-semibold

                  text-zinc-400

                  transition-all
                  duration-300

                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                Predictions
              </Link>

              <Link
                href="/socials"
                className="
                  rounded-2xl

                  px-5
                  py-4

                  text-sm
                  font-semibold

                  text-zinc-400

                  transition-all
                  duration-300

                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                Social Feeds
              </Link>

              <Link
                href="/leagues"
                className="
                  rounded-2xl

                  px-5
                  py-4

                  text-sm
                  font-semibold

                  text-zinc-400

                  transition-all
                  duration-300

                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                Leagues
              </Link>

              <button
                onClick={handleLogout}
                className="
                  mt-6

                  rounded-2xl

                  bg-black

                  px-5
                  py-4

                  text-sm
                  font-black

                  text-white

                  transition-all
                  duration-300

                  hover:bg-red-600
                "
              >
                Logout
              </button>
            </nav>
          </aside>

          {/* ================================= */}
          {/* DASHBOARD CONTENT */}
          {/* ================================= */}

          <section
            className="
              flex-1

              px-4
              pb-10
              pt-36

              lg:px-8
              lg:pt-10
            "
          >
            <div className="mx-auto max-w-7xl">
              {/* ================================= */}
              {/* HERO */}
              {/* ================================= */}

              <section
                className="
                  rounded-[35px]

                  border
                  border-white/[0.08]

                  bg-white/[0.03]

                  p-8

                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    flex
                    flex-col

                    gap-6

                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                  "
                >
                  <div>
                    <p
                      className="
                        text-sm
                        font-semibold

                        uppercase

                        tracking-[0.2em]

                        text-green-400
                      "
                    >
                      Goalix Dashboard
                    </p>

                    <h1
                      className="
                        mt-4

                        text-4xl
                        font-black
                        tracking-tight

                        text-white

                        lg:text-6xl
                      "
                    >
                      Welcome Back,{" "}
                      {userName} 👋
                    </h1>

                    <p
                      className="
                        mt-4

                        max-w-2xl

                        text-zinc-400
                      "
                    >
                      View predictions,
                      league analytics,
                      fixtures and football
                      intelligence all in one
                      place.
                    </p>
                  </div>

                  <Link href="/predictions">
                    <button
                      className="
                        rounded-2xl

                        bg-gradient-to-r

                        from-white
                        to-zinc-200

                        px-6
                        py-4

                        text-sm
                        font-black

                        text-black

                        transition-all
                        duration-500

                        hover:scale-[1.03]
                      "
                    >
                      View Predictions
                    </button>
                  </Link>
                </div>
              </section>

              {/* ================================= */}
              {/* RECENT PREDICTIONS */}
              {/* ================================= */}

              <RecentPredictions />

              {/* ================================= */}
              {/* FPL HUB */}
              {/* ================================= */}

              <FPLHub />

              {/* ================================= */}
              {/* UPCOMING FIXTURES */}
              {/* ================================= */}

              <UpcomingFixtures />

              {/* ================================= */}
              {/* FOOTER */}
              {/* ================================= */}

              <DashboardFooter />
            </div>
          </section>
        </div>

        {/* ================================= */}
        {/* FEEDBACK */}
        {/* ================================= */}

        <FeedbackButton
          onClick={() =>
            setShowFeedback(true)
          }
        />

        <FeedbackDrawer
          open={showFeedback}
          onClose={() =>
            setShowFeedback(false)
          }
        />
      </main>
    </div>
  );
};

export default DashboardPage;