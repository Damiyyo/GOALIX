
import Link from "next/link";

import Container from "@/components/ui/Container";

const CTASection = () => {
  return (
    <section className="bg-[#0f0f0f] py-24">
      <Container>
        <div
          className="
            overflow-hidden rounded-[40px]
            bg-gradient-to-br from-zinc-900
            to-zinc-800 px-8 py-16
            md:px-16
          "
        >
          <div className="max-w-3xl">
            {/* Small Text */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Join Goalix
            </p>

            {/* Heading */}
            <h2
              className="
                text-4xl font-black leading-tight
                text-white md:text-6xl
              "
            >
              Unlock Predictions,
              <br />
              Football Insights &
              <br />
              Match Analysis.
            </h2>

            {/* Description */}
            <p
              className="
                mt-6 max-w-2xl text-lg
                leading-8 text-zinc-400
              "
            >
              Create your Goalix account to
              access football predictions and premium football tools.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/register"
                className="
                  rounded-2xl bg-white px-7 py-4
                  font-semibold text-black
                  transition-all duration-300
                  hover:bg-zinc-200
                "
              >
                Create Account →
              </Link>

              <Link
                href="/login"
                className="
                  rounded-2xl border border-white/20
                  px-7 py-4 font-semibold text-white
                  transition-all duration-300
                  hover:bg-white/10
                "
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
