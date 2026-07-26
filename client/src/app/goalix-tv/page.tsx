"use client";

import DashboardNavbar from "@/components/navigation/Navbar";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import API from "@/lib/axios";

import ReelCard, {
  Reel,
} from "@/components/goalix-tv/ReelsCard";

import ReelLoader from "@/components/goalix-tv/ReelsLoader";
import Navbar from "@/components/navigation/Navbar";

const GoalixTVPage = () => {
  const [reels, setReels] =
    useState<Reel[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [muted, setMuted] =
    useState(true);

  const videoRefs =
    useRef<
      (HTMLVideoElement | null)[]
    >([]);

  /* ===================== */
  /* FETCH REELS */
  /* ===================== */

  useEffect(() => {
    const fetchReels =
      async () => {
        try {
          const res =
            await API.get(
              "/reels"
            );

          setReels(
            res.data
          );
        } catch (error) {
          console.error(
            error
          );
        } finally {
          setLoading(false);
        }
      };

    fetchReels();
  }, []);

  /* ===================== */
  /* AUTO PLAY */
  /* ===================== */

  useEffect(() => {
    if (!reels.length)
      return;

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (
              entry
            ) => {
              const video =
                entry.target as HTMLVideoElement;

              if (
                entry.isIntersecting
              ) {
                video.play();
              } else {
                video.pause();
              }
            }
          );
        },
        {
          threshold: 0.7,
        }
      );

    videoRefs.current.forEach(
      (
        video
      ) => {
        if (video)
          observer.observe(
            video
          );
      }
    );

    return () =>
      observer.disconnect();
  }, [reels]);

  /* ===================== */
  /* SHARE */
  /* ===================== */

  const shareReel =
    async (
      reel: Reel
    ) => {
      try {
        if (
          navigator.share
        ) {
          await navigator.share(
            {
              title:
                reel.title,

              text: reel.caption,

              url:
                window.location.href,
            }
          );
        } else {
          await navigator.clipboard.writeText(
            window.location.href
          );

          alert(
            "Link copied successfully."
          );
        }
      } catch (error) {
        console.error(
          error
        );
      }
    };

  if (loading) {
    return (
      <ReelLoader />
    );
  }

  return (

    <>

    <Navbar />

    <main
      className="
        h-screen

        snap-y
        snap-mandatory

        overflow-y-scroll

        bg-black
      "
    >
      {reels.map(
        (
          reel,
          index
        ) => (
          <ReelCard
            key={
              reel._id
            }
            reel={reel}
            muted={
              muted
            }
            toggleMute={() =>
              setMuted(
                (
                  prev
                ) =>
                  !prev
              )
            }
            onShare={() =>
              shareReel(
                reel
              )
            }
            setVideoRef={(
              element
            ) => {
              videoRefs.current[
                index
              ] = element;
            }}
          />
        )
      )}
    </main>
    </>
  );
};

export default GoalixTVPage;