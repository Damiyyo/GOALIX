"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLoginLoading() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/dashboard");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0b0b] text-white">
      <div className="text-center">
        <div
          className="
            mx-auto
            mb-8
            h-16
            w-16
            animate-spin
            rounded-full
            border-4
            border-zinc-700
            border-t-green-400
          "
        />

        <h1 className="text-3xl font-black">
          Loading Dashboard...
        </h1>
      </div>
    </main>
  );
}