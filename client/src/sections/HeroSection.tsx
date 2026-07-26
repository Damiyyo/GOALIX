import Container from "@/components/ui/Container";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
      "
    >
      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="
          absolute
          inset-0

          h-full
          w-full

          object-cover
        "
      >
        <source
          src="/videos/home.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}

      <div
        className="
          absolute
          inset-0

          bg-black/60
        "
      />

      {/* Gradient Overlay */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-r

          from-black
          via-black/50
          to-transparent
        "
      />

      {/* Spotlight */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_45%)]
        "
      />

      {/* Content */}

      <Container>
        <div
          className="
            relative
            z-10

            flex
            min-h-screen
            items-center
          "
        >
          <div className="max-w-3xl pt-24">
            <p
              className="
                mb-5

                text-sm
                font-bold

                uppercase

                tracking-[0.25em]

                text-green-400
              "
            >
            </p>

            <h1
              className="
                text-5xl
                font-black
                leading-tight

                text-white

                md:text-7xl
              "
            >
              Predict Smarter.
              <br />
              Track Matches Live.
              <br />
              Stay Ahead with Goalix.
            </h1>

            <p
              className="
                mt-7

                max-w-2xl

                text-lg
                leading-8

                text-zinc-300
              "
            >
              Your all-in-one platform for football
              predictions, league
              analytics and AI-powered football
              intelligence.
            </p>

            {/* Buttons */}

            <div
              className="
                mt-12

                flex
                flex-col
                gap-4

                sm:flex-row
              "
            >
              <Link
                href="/register"
                className="
                  rounded-xl

                  bg-white

                  px-8
                  py-4

                  text-center
                  font-bold

                  text-black

                  transition-all
                  duration-300

                  hover:scale-105
                  hover:bg-zinc-200
                "
              >
                Get Started →
              </Link>

              <button
                className="
                  rounded-xl

                  border
                  border-white/20

                  bg-white/5

                  px-8
                  py-4

                  font-semibold

                  text-white

                  backdrop-blur-md

                  transition-all
                  duration-300

                  hover:bg-white/10
                "
              >
                Explore Features
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Fade */}

      <div
        className="
          absolute
          bottom-0
          left-0

          h-40
          w-full

          bg-gradient-to-t

          from-[#0f0f0f]
          to-transparent
        "
      />
    </section>
  );
};

export default HeroSection;