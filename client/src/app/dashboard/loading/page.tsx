"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DashboardLoadingPage = () => {
  const router = useRouter();

  useEffect(() => {
    const onboardingComplete =
      localStorage.getItem(
        "goalixOnboardingComplete"
      );

    // Skip loading after onboarding has been dismissed
    if (onboardingComplete === "true") {
      router.replace("/dashboard");
      return;
    }

    const timer = setTimeout(() => {
      router.replace("/dashboard");

    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center

        bg-[#0b0b0b]

        text-white
      "
    >
      <div className="text-center">
        <div
          className="
            mx-auto
            mb-8

            h-20
            w-20

            animate-spin

            rounded-full

            border-4
            border-zinc-700
            border-t-green-400
          "
        />

        <h1
          className="
            text-4xl
            font-black
          "
        >
          Personalising your Dashboard
        </h1>

        <p
          className="
            mt-4
            text-zinc-400
          "
        >
          Preparing your AI predictions,
          leagues and live scores...
        </p>
      </div>
    </main>
  );
};

export default DashboardLoadingPage;