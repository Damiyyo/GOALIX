"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

import Navbar from "@/components/navigation/Navbar";

import RecentPredictions from "@/components/dashboard/analytics/RecentPredictions";
import UpcomingFixtures from "@/components/dashboard/fixtures/UpcomingFixtures";

import DashboardFooter from "@/components/dashboard/footer/DashboardFooter";
import FPLHub from "@/components/dashboard/fplhub/FPLHub";


const DashboardPage = () => {
  const router = useRouter();

  const [userName, setUserName] =
    useState("User");

  const [
    showWelcome,
    setShowWelcome,
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
        user.fullName ||
          "User"
      );
    }

  }, []);

  const handleLogout = () => {
    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "goalixUser"
    );

    router.replace("/");
  };


  return (

    <div
    className="
      animate-[fadeIn_.7s_ease]
    "
  >
    <main
      className="
        min-h-screen

        bg-[#0b0b0b]

        bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_35%)]

        text-white
      "
    >

      {/* MOBILE NAVBAR */}

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
                {/* DESKTOP SIDEBAR */}

                <aside
          className="
            hidden

            min-h-screen
            w-[260px]

            border-r
            border-white/[0.08]

            bg-black/20

            backdrop-blur-xl

            p-6

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

                bg-black-500

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

        {/* DASHBOARD CONTENT */}

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
                        {/* HERO */}

                        <section
              className="
                rounded-[35px]

                border
                border-white/[0.08]

                bg-white/[0.03]

                backdrop-blur-xl

                p-8
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
                    intelligence all in
                    one place.
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

            {/* RECENT PREDICTIONS */}

            <RecentPredictions />

            {/* FPL HUB */}

            <FPLHub />

            {/* UPCOMING FIXTURES */}

            <UpcomingFixtures />

            {/* FOOTER */}

            <DashboardFooter />
            </div>
        </section>
      </div>
    </main>
    </div>
  );
};

export default DashboardPage;