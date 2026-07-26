const ReelLoader = () => {
  return (
    <main
      className="
        flex
        h-screen
        items-center
        justify-center

        bg-black
      "
    >
      <div
        className="
          relative

          h-[92vh]
          w-full
          max-w-md

          overflow-hidden

          rounded-[36px]

          bg-[#151515]
        "
      >
        {/* VIDEO PLACEHOLDER */}

        <div
          className="
            h-full
            w-full

            animate-pulse

            bg-zinc-800
          "
        />

        {/* OVERLAY */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t

            from-black/90

            via-transparent

            to-transparent
          "
        />

        {/* INFO */}

        <div
          className="
            absolute

            bottom-10
            left-8
            right-8
          "
        >
          <div
            className="
              mb-5

              h-8
              w-28

              animate-pulse

              rounded-full

              bg-zinc-700
            "
          />

          <div
            className="
              h-10
              w-3/4

              animate-pulse

              rounded-xl

              bg-zinc-700
            "
          />

          <div
            className="
              mt-5

              h-5
              w-full

              animate-pulse

              rounded-lg

              bg-zinc-700
            "
          />

          <div
            className="
              mt-3

              h-5
              w-2/3

              animate-pulse

              rounded-lg

              bg-zinc-700
            "
          />
        </div>

        {/* ACTION BUTTONS */}

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
          <div
            className="
              h-16
              w-16

              animate-pulse

              rounded-full

              bg-zinc-700
            "
          />

          <div
            className="
              h-16
              w-16

              animate-pulse

              rounded-full

              bg-zinc-700
            "
          />
        </div>
      </div>
    </main>
  );
};

export default ReelLoader;