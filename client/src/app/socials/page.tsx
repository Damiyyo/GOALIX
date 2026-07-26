"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import Navbar from "@/components/navigation/Navbar";

import SocialCard from "@/components/socials/SocialCard";

import {
  socialPosts,
  SocialPost,
} from "@/data/socials/socialPosts";

export default function SocialsPage() {
  /* ============================= */
  /* NAVBAR */
  /* ============================= */

  const [
    navbarOpacity,
    setNavbarOpacity,
  ] = useState(1);

  /* ============================= */
  /* REFRESH TIMER */
  /* ============================= */

  const REFRESH_TIME = 90;

  const [
    secondsLeft,
    setSecondsLeft,
  ] = useState(REFRESH_TIME);

  const [
    showTimer,
    setShowTimer,
  ] = useState(true);

  /* ============================= */
  /* SHUFFLE POSTS */
  /* ============================= */

  const [
    visiblePosts,
    setVisiblePosts,
  ] = useState<SocialPost[]>([]);
  
  useEffect(() => {
    const shuffled = [...socialPosts].sort(
      () => Math.random() - 0.5
    );
  
    setVisiblePosts(
      shuffled.slice(0, 6)
    );
  }, []);

  /* ============================= */
  /* NAVBAR FADE */
  /* ============================= */

  useEffect(() => {
    const handleScroll = () => {
      const scrollY =
        window.scrollY;

      const opacity = Math.max(
        0.2,
        1 - scrollY / 400
      );

      setNavbarOpacity(opacity);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* ============================= */
  /* HIDE TIMER AFTER 10s */
  /* ============================= */

  useEffect(() => {
    const timeout =
      setTimeout(() => {
        setShowTimer(false);
      }, 10000);

    return () =>
      clearTimeout(timeout);
  }, []);

  /* ============================= */
  /* REFRESH COUNTDOWN */
  /* ============================= */

  useEffect(() => {
    const interval =
      setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            window.location.reload();

            return 0;
          }

          return prev - 1;
        });
      }, 1000);

    return () =>
      clearInterval(interval);
  }, []);

  /* ============================= */
  /* FORMAT TIMER */
  /* ============================= */

  const minutes = Math.floor(
    secondsLeft / 60
  );

  const seconds =
    secondsLeft % 60;
    return (
      <main
        className="
          min-h-screen
  
          bg-[#0b0b0b]
  
          text-white
        "
      >
        {/* NAVBAR */}
  
        <div
          style={{
            opacity: navbarOpacity,
          }}
          className="
            fixed
            inset-x-0
            top-0
  
            z-50
  
            transition-all
            duration-500
          "
        >
          <Navbar />
        </div>
  
        {/* TIMER */}
  
        <div
          className={`
            fixed
  
            left-1/2
            top-24
  
            z-40
  
            -translate-x-1/2
  
            transition-all
            duration-700
  
            ${
              showTimer
                ? "opacity-100 translate-y-0"
                : "pointer-events-none -translate-y-4 opacity-0"
            }
          `}
        >
          <div
            className="
              rounded-full
  
              border
              border-green-500/20
  
              bg-[#111111]/90
  
              px-6
              py-3
  
              backdrop-blur-xl
  
              shadow-[0_20px_60px_rgba(34,197,94,0.15)]
            "
          >
            <p
              className="
                text-sm
                font-semibold
  
                text-zinc-300
              "
            >
              Refreshing feeds in{" "}
              <span
                className="
                  font-black
  
                  text-green-400
                "
              >
                {String(minutes).padStart(
                  2,
                  "0"
                )}
                :
                {String(seconds).padStart(
                  2,
                  "0"
                )}
              </span>
            </p>
          </div>
        </div>
  
        {/* CONTENT */}
  
        <div
          className="
            mx-auto
  
            max-w-7xl
  
            px-4
  
            pt-36
            pb-20
  
            lg:px-8
            lg:pt-32
          "
        >
          <section
            className="
              grid
  
              gap-5
  
              md:grid-cols-2
  
              xl:grid-cols-3
            "
          >
           {visiblePosts.length === 0 ? (
  <div className="col-span-full text-center text-zinc-500">
    Loading social feed...
  </div>
) : (
  visiblePosts.map((post) => (
    <SocialCard
      key={post.id}
      source={post.source}
      category={post.category}
      tweetUrl={post.tweetUrl}
    />
  ))
)}
          </section>
        </div>
      </main>
    );
  }