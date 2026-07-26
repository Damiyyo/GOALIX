"use client";

import Container from "@/components/ui/Container";
import NewsDeck from "@/components/news/NewsDeck";

const news = [
  {
    title:
      "BREAKING: Real Madrid submit initial bid for Yan Diomandé to RB Leipzig with club to club talks underway. Contacts have started this week between the two clubs, as BILD reported. Negotiations ongoing also with player camp.",
    category: "Transfers",
    image:
      "/newsPics/diomade.jpeg",
  },

  {
    title:
      "Loïs Openda won’t feature in today’s friendly match for Juventus as he will become new Olympique Lyon player next week.",
      category: "Friendlies",
    image:
      "/newsPics/openda.jpeg",
  },

  {
    title:
      "Bayern director Freund confirms Michael Olise will NOT leave: “Olise to Real Madrid? That's not a topic for us at all. He will play an important role for FC Bayern this season again.  ",
    category: "Transfer",
    image:
      "/newsPics/Olise.jpeg",
  },

  {
    title:
      "Rúben Amorim: “Francesco Camarda will stay with us this season. No loan, no exit.  “I’m happy to feel the coach’s confidence”, the Italian striker says.",
    category: "Transfer News",
    image:
      "/newsPics/amorim.jpeg",
  },

  {
    title:
      "Enzo Maresca on 115 charges: “The only thing I can say is three years ago, the Treble season, I was here and it was the same words about this. In three years, it’s still the same”. “Nothing has happened” “I don’t have any concerns personally”. ",
    category: "Manchester City",
    image:
      "newsPics/Mare.jpeg",
  },
];

const NewsSection = () => {
  return (
    <section
      className="
        bg-[#0b0b0b]

        py-28

        overflow-hidden
      "
    >
      <Container>
        {/* Heading */}

        <div
          className="
            mb-20

            flex
            flex-col
            gap-5

            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div>
            <p
              className="
                mb-3

                text-sm
                font-semibold

                uppercase

                tracking-[0.2em]

                text-green-400
              "
            >
              Football News
            </p>

            <h2
              className="
                text-4xl
                font-black
                leading-tight

                text-white

                md:text-5xl
              "
            >
              <br />
            </h2>
          </div>

          <p
            className="
              max-w-md

              leading-8

              text-zinc-400
            "
          >
            Previews and breaking football stories
            from around the world.
          </p>
        </div>


        <div
          className="
            flex
            justify-center
          "
        >
          <NewsDeck
            news={news}
          />
        </div>
      </Container>
    </section>
  );
};

export default NewsSection;