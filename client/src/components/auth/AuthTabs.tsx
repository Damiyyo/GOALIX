"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const AuthTabs = () => {
  const pathname = usePathname();

  return (
    <div
      className="
        relative mb-10 grid
        grid-cols-2 rounded-2xl
        bg-zinc-200 p-1
      "
    >
<div
  className={`
    absolute top-1 left-1
    h-[calc(100%-8px)]
    w-[calc(50%-4px)]
    rounded-xl bg-white shadow-sm
    transition-all duration-300 ease-in-out

    ${
      pathname === "/login"
        ? "translate-x-[100%]"
        : "translate-x-0"
    }
  `}
/>



      {/* Register */}
      <Link
        href="/register"
        className={`
          relative z-10 rounded-xl
          px-4 py-3 text-center
          text-sm font-semibold
          transition-colors duration-300

          ${
            pathname === "/register"
              ? "text-zinc-900"
              : "text-zinc-500"
          }
        `}
      >
        Register
      </Link>

      {/* Login */}
      <Link
        href="/login"
        className={`
          relative z-10 rounded-xl
          px-4 py-3 text-center
          text-sm font-semibold
          transition-colors duration-300

          ${
            pathname === "/login"
              ? "text-zinc-900"
              : "text-zinc-500"
          }
        `}
      >
        Login
      </Link>
    </div>
  );
};

export default AuthTabs;

