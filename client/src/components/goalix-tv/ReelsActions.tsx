"use client";

import {
  Share2,
  Volume2,
  VolumeX,
} from "lucide-react";

interface Props {
  muted: boolean;

  toggleMute: () => void;

  onShare: () => void;
}

const ReelActions = ({
  muted,
  toggleMute,
  onShare,
}: Props) => {
  return (
    <div
      className="
        absolute

        right-6
        bottom-20

        flex
        flex-col
        gap-5
      "
    >
      {/* MUTE */}

      <button
        onClick={toggleMute}
        className="
          flex
          h-16
          w-16
          items-center
          justify-center

          rounded-full

          border
          border-white/10

          bg-black/50

          backdrop-blur-md

          transition-all
          duration-300

          hover:scale-110
          hover:bg-black/70
        "
      >
        {muted ? (
          <VolumeX size={24} />
        ) : (
          <Volume2 size={24} />
        )}
      </button>

      {/* SHARE */}

      <button
        onClick={onShare}
        className="
          flex
          h-16
          w-16
          items-center
          justify-center

          rounded-full

          border
          border-white/10

          bg-black/50

          backdrop-blur-md

          transition-all
          duration-300

          hover:scale-110
          hover:bg-black/70
        "
      >
        <Share2 size={24} />
      </button>
    </div>
  );
};

export default ReelActions;
