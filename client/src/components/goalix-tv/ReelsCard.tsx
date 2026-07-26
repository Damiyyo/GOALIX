"use client";

import { useRef } from "react";

import ReelInfo from "./ReelsInfo";
import ReelActions from "./ReelsActions";

export interface Reel {
  _id: string;

  title: string;

  caption: string;

  category: string;

  videoUrl: string;
}

interface Props {
  reel: Reel;

  muted: boolean;

  toggleMute: () => void;

  onShare: () => void;

  setVideoRef: (
    element: HTMLVideoElement | null
  ) => void;
}

const ReelCard = ({
  reel,
  muted,
  toggleMute,
  onShare,
  setVideoRef,
}: Props) => {
  return (
    <section
      className="
        relative

        flex

        h-screen

        snap-start

        items-center
        justify-center
      "
    >
      {/* VIDEO */}

      <video
        ref={setVideoRef}
        src={reel.videoUrl}
        muted={muted}
        loop
        playsInline
        className="
          h-full
          w-full

          object-cover
        "
      />

      {/* DARK OVERLAY */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-t

          from-black/80

          via-black/10

          to-transparent
        "
      />

      {/* INFO */}

      <ReelInfo reel={reel} />

      {/* ACTIONS */}

      <ReelActions
        muted={muted}
        toggleMute={toggleMute}
        onShare={onShare}
      />
    </section>
  );
};

export default ReelCard;
