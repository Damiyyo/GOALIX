"use client";

import TwitterEmbed from "./TwitterEmbed";

interface SocialCardProps {
  source: string;

  category: string;

  tweetUrl: string;
}

const SocialCard = ({
  source,
  category,
  tweetUrl,
}: SocialCardProps) => {
  return (
    <article
      className="
        overflow-hidden

        rounded-3xl

        border
        border-white/10

        bg-[#111111]

        p-4

        transition-all
        duration-300

        hover:border-green-500/30
        hover:-translate-y-1
      "
    >
      {/* HEADER */}

      <div
        className="
          mb-4

          flex
          items-center
          justify-between
        "
      >
        <div>
          <h2
            className="
              text-base
              font-black

              text-white
            "
          >
            {source}
          </h2>

          <p
            className="
              mt-1

              text-xs

              uppercase

              tracking-[0.15em]

              text-green-400
            "
          >
            {category}
          </p>
        </div>

        <span
          className="

            px-3
            py-1

            text-[10px]
            font-bold

            uppercase
          "
        >
        </span>
      </div>

      {/* EMBED */}

      <div
        className="
          overflow-hidden

          rounded-2xl
        "
      >
        <TwitterEmbed
          tweetUrl={tweetUrl}
        />
      </div>
    </article>
  );
};

export default SocialCard;