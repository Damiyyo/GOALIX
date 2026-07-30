"use client";

import { Mail } from "lucide-react";

export default function EmailSupportButton() {
  return (
    <a
      href="mailto:banjooluwadamilola.ng@gmail.com?subject=Goalix%20Support&body=Hi%20Goalix%20Team,"
      className="
        fixed

        left-6
        bottom-8

        z-40

        flex
        items-center
        gap-3

        rounded-full

        border
        border-white/10

        bg-[#111111]

        px-5
        py-4

        shadow-2xl

        transition-all
        duration-300

        hover:scale-105
        hover:border-green-500/30
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center

          rounded-full

          bg-green-500
        "
      >
        <Mail
          size={20}
          className="text-black"
        />
      </div>

      <div>
        <p
          className="
            text-xs

            uppercase

            tracking-[0.15em]

            text-zinc-500
          "
        >
          Support
        </p>

        <p
          className="
            text-sm
            font-black

            text-white
          "
        >
          Email Us
        </p>
      </div>
    </a>
  );
}