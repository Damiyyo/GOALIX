"use client";

import { useEffect, useState } from "react";

interface RegisterSuccessModalProps {
  open: boolean;
  onFinish: () => void;
}

const RegisterSuccessModal = ({
  open,
  onFinish,
}: RegisterSuccessModalProps) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!open) return;

    setCountdown(5);

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);

          setTimeout(() => {
            onFinish();
          }, 300);

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [open, onFinish]);

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]

        flex
        items-center
        justify-center

        bg-black/70
        backdrop-blur-md

        transition-all
        duration-300
      "
    >
      <div
        className="
          w-[92%]
          max-w-md

          rounded-[32px]

          border
          border-white/10

          bg-[#111111]

          p-10

          shadow-[0_20px_80px_rgba(34,197,94,0.15)]

          transition-all
          duration-500
          scale-100
        "
      >
        {/* SUCCESS ICON */}

        <div
          className="
            mx-auto

            flex
            h-20
            w-20

            items-center
            justify-center

            rounded-full

            bg-green-500/15

            ring-4
            ring-green-500/20
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="
              h-10
              w-10
              text-green-400
            "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* TITLE */}

        <h2
          className="
            mt-8

            text-center

            text-3xl
            font-black

            text-white
          "
        >
          Account Created!
        </h2>

        {/* DESCRIPTION */}

        <p
          className="
            mt-5

            text-center

            text-sm
            leading-7

            text-zinc-400
          "
        >
          Welcome to <span className="font-bold text-white">Goalix</span>.

          <br />
          <br />

          Your account has been created successfully.

          <br />

          You will now be redirected to the login page.
        </p>

        {/* COUNTDOWN */}

        <div
          className="
            mt-8

            rounded-2xl

            border
            border-green-500/20

            bg-green-500/10

            py-4

            text-center
          "
        >
          <p
            className="
              text-sm
              text-zinc-300
            "
          >
            Redirecting in
          </p>

          <h3
            className="
              mt-2

              text-4xl
              font-black

              text-green-400
            "
          >
            {countdown}s
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RegisterSuccessModal;