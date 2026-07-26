"use client";

import { useState } from "react";
import Link from "next/link";

import API from "@/lib/axios";

const ForgotPasswordPage = () => {
  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const [error, setError] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email) {
      setError(
        "Please enter your email."
      );
      return;
    }

    try {
      setLoading(true);

      const res =
        await API.post(
          "/auth/forgot-password",
          {
            email,
          }
        );

      setSuccess(
        res.data.message
      );

      setEmail("");
    } catch (err: any) {
      setError(
        err.response?.data
          ?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center

        bg-[#0b0b0b]

        px-6

        text-white
      "
    >
      <div
        className="
          w-full
          max-w-md

          rounded-[32px]

          border
          border-white/10

          bg-[#121212]

          p-8
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
          Goalix
        </p>

        <h1
          className="
            mt-4

            text-4xl
            font-black
          "
        >
          Forgot Password
        </h1>

        <p
          className="
            mt-4

            text-zinc-400
          "
        >
          Enter your email and
          we'll send you a
          password reset link.
        </p>

        <form
          onSubmit={
            handleSubmit
          }
          className="mt-8 space-y-5"
        >
          <input
            type="email"
            placeholder="Email address"

            value={email}

            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }

            className="
              w-full

              rounded-2xl

              border
              border-white/10

              bg-[#0f0f0f]

              px-5
              py-4

              outline-none

              placeholder:text-zinc-500
            "
          />

          {error && (
            <p
              className="
                text-sm

                text-red-400
              "
            >
              {error}
            </p>
          )}

          {success && (
            <p
              className="
                text-sm

                text-green-400
              "
            >
              {success}
            </p>
          )}

          <button
            disabled={
              loading
            }

            className="
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

              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loading
              ? "Sending..."
              : "Send Reset Link"}
          </button>
        </form>

        <Link
          href="/login"

          className="
            mt-8
            block

            text-center
            text-sm

            text-zinc-400

            transition-all
            duration-300

            hover:text-white
          "
        >
          ← Back to Login
        </Link>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;