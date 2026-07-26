
"use client";

import { useEffect, useState } from "react";

const DashboardHeader = () => {
  const [userName, setUserName] =
    useState("User");

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

  return (
    <header
      className="
        sticky top-0 z-30

        flex items-center
        justify-between

        border-b border-zinc-200
        bg-white/80

        px-6 py-5

        backdrop-blur-xl
      "
    >
      {/* LEFT */}
      <div>
        <h1
          className="
            text-2xl
            font-black

            text-zinc-900
          "
        >
          Dashboard
        </h1>

        <p
          className="
            mt-1

            text-sm

            text-zinc-500
          "
        >
          Welcome back,{" "}
          <span
            className="
              font-bold

              text-zinc-900
            "
          >
            {userName}
          </span>
          .
        </p>
      </div>

      {/* RIGHT */}
      <div
        className="
          flex items-center
          gap-4
        "
      >
        {/* AVATAR */}
        <div
          className="
            flex h-12 w-12
            items-center
            justify-center

            rounded-full

            bg-zinc-900

            text-sm
            font-bold

            text-white
          "
        >
          {userName.charAt(0)}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;