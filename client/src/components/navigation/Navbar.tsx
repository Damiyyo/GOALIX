"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  /* Navbar State */


  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

    const [isAdmin, setIsAdmin] =
  useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

 
  /* CHECK LOGIN */

  useEffect(() => {
    const token =
      localStorage.getItem(
        "goalixToken"
      );

    const user =
      localStorage.getItem(
        "goalixUser"
      );

      if (
        token &&
        token !== "undefined" &&
        token !== "null" &&
        user
      ) {
        const parsedUser =
          JSON.parse(user);
      
        setIsLoggedIn(true);
      
        setIsAdmin(
          parsedUser.role === "admin"
        );
      }  else {
      localStorage.removeItem(
        "goalixToken"
      );

      localStorage.removeItem(
        "goalixUser"
      );

      setIsLoggedIn(false);
      setIsAdmin(false);
    }
  }, []);

  /* LOGOUT */

  const handleLogout = () => {
    localStorage.removeItem(
      "goalixToken"
    );

    localStorage.removeItem(
      "goalixUser"
    );

    setMenuOpen(false);

    setIsLoggedIn(false);

    window.location.href = "/";
  };

  /* LINKS */
  const guestLinks = [
    {
      name: "Home",
      href: "/",
    },
  ];

  const userLinks = [
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Predictions",
      href: "/predictions",
    },
    {
      name: "Goalix-TV",
      href: "/goalix-tv",
    },
    {
      name: "2 Odds",
      href: "/2odds",
    },
    {
      name: "Leagues",
      href: "/leagues",
    },


    ...(isAdmin
      ? [
          {
            name: "Admin",
            href: "/admin",
          },
          {
            name: "Reels",
            href: "/admin/reels",
          },
        ]
      : []),
    ];

  const links = isLoggedIn
    ? userLinks
    : guestLinks;

  return (
    <>
      {/* MOBILE NAVBAR */}
   
      <header
        className={`
          fixed
          top-0
          left-0
          right-0

          z-[999]

          flex
          justify-center

          px-4
          py-4

          transition-all
          duration-300

          lg:hidden

          ${
            menuOpen
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }
        `}
      >
        <div
          className="
            flex
            w-full
            max-w-2xl

            items-center
            justify-between

            rounded-[24px]

            border
            border-white/10

            bg-black/40

            backdrop-blur-xl

            px-5
            py-4
          "
        >
          <Link
            href={
              isLoggedIn
                ? "/dashboard"
                : "/"
            }
            className="
              text-2xl
              font-black
              tracking-tight

              text-white
            "
          >
            Goalix
          </Link>

          <button
            onClick={() =>
              setMenuOpen(true)
            }
            className="
              flex
              h-12
              w-12

              items-center
              justify-center

              rounded-2xl

              border
              border-white/10

              bg-white/5

              text-white

              transition-all
              duration-300

              hover:bg-white/10
            "
          >
            ☰
          </button>
        </div>
      </header>


      {/* DESKTOP NAVBAR */}   

      <div
        className="
          fixed
          top-0
          left-0
          right-0

          z-40

          hidden

          lg:flex
          lg:justify-center
        "
      >
        <div
          className="
            flex
            items-center
            gap-8

            px-8
            py-6
          "
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                text-sm
                font-semibold

                text-zinc-400

                transition-all
                duration-300

                hover:text-white
              "
            >
              {link.name}
            </Link>
          ))}

          {isLoggedIn ? (
            <button
              onClick={
                handleLogout
              }
              className="
                rounded-2xl

                bg-white

                px-5
                py-3

                text-sm
                font-black

                text-black
              "
            >
              Logout
            </button>
          ) : (
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <Link
                href="/login"
                className="
                  text-sm
                  font-semibold

                  text-zinc-300
                "
              >
                Login
              </Link>

              <Link
                href="/register"
                className="
                  rounded-2xl

                  bg-white

                  px-5
                  py-3

                  text-sm
                  font-black

                  text-black
                "
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* OVERLAY */}  

      <div
        onClick={() =>
          setMenuOpen(false)
        }
        className={`
          fixed
          inset-0

          z-[1000]

          bg-black/70

          backdrop-blur-sm

          transition-all
          duration-300

          ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* MOBILE MENU */}
   
      <aside
        className={`
          fixed
          top-0
          left-0
          right-0

          z-[1001]

          rounded-b-[32px]

          border-b
          border-white/10

          bg-[#111111]

          px-6
          pt-8
          pb-8

          shadow-[0_20px_60px_rgba(0,0,0,0.55)]

          transition-all
          duration-500

          lg:hidden

          ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }
        `}
      >
        {/* HEADER */}

        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <Link
            href={
              isLoggedIn
                ? "/dashboard"
                : "/"
            }
            onClick={() =>
              setMenuOpen(false)
            }
            className="
              text-2xl
              font-black
              tracking-tight

              text-white
            "
          >
            Goalix
          </Link>

          <button
            onClick={() =>
              setMenuOpen(false)
            }
            className="
              flex
              h-11
              w-11

              items-center
              justify-center

              rounded-2xl

              border
              border-white/10

              bg-white/5

              text-2xl
              text-white

              transition-all
              duration-300

              hover:bg-white/10
            "
          >
            ×
          </button>
        </div>

        {/* NAVIGATION */}

        <nav
          className="
            mt-10

            flex
            flex-col

            gap-3
          "
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() =>
                setMenuOpen(false)
              }
              className="
                rounded-2xl

                px-5
                py-4

                text-sm
                font-semibold

                text-zinc-300

                transition-all
                duration-300

                hover:bg-white/5
                hover:text-white
              "
            >
              {link.name}
            </Link>
          ))}

          {/* AUTH */}

          {isLoggedIn ? (
            <button
              onClick={
                handleLogout
              }
              className="
                mt-6

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
              "
            >
              Logout
            </button>
          ) : (
            <div
              className="
                mt-6

                flex
                flex-col

                gap-3
              "
            >
              <Link
                href="/login"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="
                  rounded-2xl

                  border
                  border-white/10

                  px-5
                  py-4

                  text-center
                  text-sm
                  font-semibold

                  text-white

                  transition-all
                  duration-300

                  hover:bg-white/5
                "
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="
                  rounded-2xl

                  bg-white

                  px-5
                  py-4

                  text-center
                  text-sm
                  font-black

                  text-black

                  transition-all
                  duration-300

                  hover:scale-[1.02]
                "
              >
                Sign Up
              </Link>
            </div>
          )}
        </nav>
      </aside>
    </>
  );
};

export default Navbar;