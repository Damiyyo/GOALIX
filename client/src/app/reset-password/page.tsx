"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import API from "@/lib/axios";

const ResetPasswordPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      await API.post(
        "/auth/reset-password",
        {
          token,
          password,
        }
      );

      alert(
        "Password reset successful."
      );

      router.push("/login");
    } catch (error: any) {
      alert(
        error?.response?.data?.message ||
          "Unable to reset password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0b0b] px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-[#121212] p-8"
      >
        <h1 className="text-3xl font-black text-white">
          Reset Password
        </h1>

        <p className="mt-3 text-zinc-400">
          Enter your new password.
        </p>

        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="mt-8 w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
          className="mt-5 w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none"
        />

        <button
          disabled={loading}
          className="mt-8 w-full rounded-2xl bg-white py-4 font-bold text-black"
        >
          {loading
            ? "Resetting..."
            : "Reset Password"}
        </button>
      </form>
    </main>
  );
};

export default ResetPasswordPage;