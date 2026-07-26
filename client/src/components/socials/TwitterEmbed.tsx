"use client";

import { useEffect } from "react";

interface TwitterEmbedProps {
  tweetUrl: string;
}

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: () => void;
      };
    };
  }
}

const TwitterEmbed = ({
  tweetUrl,
}: TwitterEmbedProps) => {
  useEffect(() => {
    if (
      window.twttr?.widgets
    ) {
      window.twttr.widgets.load();
      return;
    }

    const script =
      document.createElement(
        "script"
      );

    script.src =
      "https://platform.twitter.com/widgets.js";

    script.async = true;

    script.charset = "utf-8";

    script.onload = () => {
      window.twttr?.widgets.load();
    };

    document.body.appendChild(
      script
    );
  }, [tweetUrl]);

  return (
    <blockquote
      className="twitter-tweet"
      data-theme="dark"
    >
      <a href={tweetUrl}>
        {tweetUrl}
      </a>
    </blockquote>
  );
};

export default TwitterEmbed;