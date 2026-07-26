import { Reel } from "./ReelsCard";

interface Props {
  reel: Reel;
}

const ReelInfo = ({
  reel,
}: Props) => {
  return (
    <div
      className="
        absolute

        bottom-10
        left-8

        max-w-md
      "
    >
      {/* CATEGORY */}

      <span
        className="
          inline-flex

          rounded-full

          bg-green-500/20

          px-4
          py-2

          text-sm
          font-bold

          text-green-400
        "
      >
        {reel.category}
      </span>

      {/* TITLE */}

      <h2
        className="
          mt-5

          text-4xl
          font-black
          leading-tight
        "
      >
        {reel.title}
      </h2>

      {/* CAPTION */}

      <p
        className="
          mt-4

          leading-7

          text-zinc-300
        "
      >
        {reel.caption}
      </p>
    </div>
  );
};

export default ReelInfo;
