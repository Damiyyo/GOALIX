"use client";

import Container from "@/components/ui/Container";

import {
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] py-16">
      <Container>
        <div
          className="
            flex flex-col gap-12
            border-b border-zinc-800 pb-12
            md:flex-row md:justify-between
          "
        >
          {/* Brand */}

          <div className="max-w-sm">
            <h2 className="text-3xl font-black text-white">
              Goalix
            </h2>

            <p className="mt-5 leading-7 text-zinc-400">
              Your modern football platform for football
              news, league tracking and match predictions.
            </p>
          </div>

          {/* Links */}

          <div
            className="
              grid gap-10
              sm:grid-cols-2
              md:grid-cols-3
            "
          >
            {/* Features */}

            <div>
              <h3 className="mb-4 font-semibold text-white">
                FEATURES
              </h3>

              <ul className="space-y-3 text-zinc-400">
                <li>
                  <button className="transition hover:text-white">
                    Leagues
                  </button>
                </li>

                <li>
                  <button className="transition hover:text-white">
                    Socials
                  </button>
                </li>

                <li>
                  <button className="transition hover:text-white">
                    Predictions
                  </button>
                </li>
              </ul>
            </div>

            {/* Socials */}

            <div>
              <h3 className="mb-4 font-semibold text-white">
                SOCIALS
              </h3>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/oluwadamilola-banjo-2b6812418/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center

                    rounded-xl

                    bg-white/5

                    text-zinc-400

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-green-500
                    hover:text-white
                  "
                >
                  <FaLinkedin size={20} />
                </a>

                <a
                  href="https://www.instagram.com/dbreadandbutter_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center

                    rounded-xl

                    bg-white/5

                    text-zinc-400

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-green-500
                    hover:text-white
                  "
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="https://x.com/dbreadandbutter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center

                    rounded-xl

                    bg-white/5

                    text-zinc-400

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-green-500
                    hover:text-white
                  "
                >
                  <FaXTwitter size={20} />
                </a>

                <a
  href="https://github.com/Damiyyo"
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex
    h-11
    w-11
    items-center
    justify-center

    rounded-xl

    bg-white/5

    text-zinc-400

    transition-all
    duration-300

    hover:-translate-y-1
    hover:bg-green-500
    hover:text-white
  "
>
  <FaGithub size={20} />
</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div
  className="
    mt-8

    flex
    flex-col
    items-center
    justify-center

    gap-5

    text-center
    text-sm

    text-zinc-500
  "
>
  <p>August 15 – May 30, 2027</p>

  <p>
    Built for football fans worldwide.
  </p>

  <div
    className="
      flex
      flex-wrap
      items-center
      justify-center
      gap-4
    "
  >
    {/* Instagram */}

    <a
      href="https://www.instagram.com/dbreadandbutter_/"
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        items-center
        gap-3

      

        text-white

        px-5
        py-3

      "
    >
      <FaInstagram
        size={18}
        className="text-pink-400"
      />

      <span className="font-semibold">
        BANJO🎱📿
      </span>
    </a>

    {/* Show Love */}

    <a
      href="https://selar.com/me/showlove/create"
      target="_blank"
      rel="noopener noreferrer"
      className="

        font-bold

        text-white

        transition-all
        duration-300
      "
    >
      ☕ Show Love
    </a>
  </div>
</div>
      </Container>
    </footer>
  );
};

export default Footer;