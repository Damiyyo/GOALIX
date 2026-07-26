"use client";

import Link from "next/link";

const links = [
  "Dashboard",
  "Predictions",
  "Live Scores",
  "Leagues",
  "Stats",
  "Favorites",
  "History",
  "Settings",
];

const DashboardSidebar = () => {
  return (
    <aside
      className="
        fixed left-0 top-0

        hidden h-screen
        w-[260px]

        border-r border-white/10
        bg-[#0f0f0f]

        px-6 py-8

        lg:flex
        lg:flex-col
      "
    >
      {/* Logo */}
      <div
        className="
          flex items-center
          gap-3
        "
      >
        <div
          className="
            flex h-12 w-12
            items-center
            justify-center

            rounded-2xl
            bg-white

            text-2xl
            font-black
            text-black
          "
        >
          G
        </div>

        <h1
          className="
            text-3xl
            font-black
            text-white
          "
        >
          Goalix
        </h1>
      </div>

      {/* Nav Links */}
      <div className="mt-14 space-y-3">
        {links.map((link, index) => (
          <Link
            key={index}
            href="#"
            className={`
              flex items-center

              rounded-2xl

              px-5 py-4

              text-sm
              font-semibold

              transition-all

              ${
                link === "Dashboard"
                  ? "bg-white/10 text-white"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }
            `}
          >
            {link}
          </Link>
        ))}
      </div>

      {/* Premium Card */}
      <div
        className="
          mt-auto

          rounded-[30px]

          border border-white/10
          bg-white/5

          p-6
        "
      >
        <div
          className="
            flex h-14 w-14
            items-center
            justify-center

            rounded-2xl
            bg-[#1d1d1d]

            text-2xl
          "
        >
          👑
        </div>

        <h3
          className="
            mt-5
            text-xl
            font-black
            text-white
          "
        >
          Upgrade to Premium
        </h3>

        <p
          className="
            mt-3
            text-sm
            leading-7
            text-zinc-400
          "
        >
          Unlock advanced analytics and
          exclusive predictions.
        </p>

        <button
          className="
            mt-6
            w-full

            rounded-2xl
            bg-white

            px-5 py-4

            text-sm
            font-black
            text-black

            transition-all
            hover:scale-[1.02]
          "
        >
          Upgrade Now
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;