"use client";

const ChampionsLeague = () => {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <div className="mx-auto max-w-5xl px-6 py-24">

        <div className="text-center">

          <div className="text-7xl">
          🟠
          </div>

          <h1 className="mt-8 text-6xl font-black">
            UEFA Europa League
          </h1>

          <p className="mt-5 text-zinc-400">
            The road to Europen glory continues
          </p>

          <div className="mt-10 rounded-[35px] border border-white/10 bg-[#141414] p-8">

            <p className="uppercase tracking-[0.2em] text-zinc-500">
              Competition Starts
            </p>

            <h2 className="mt-4 text-4xl font-black text-green-400">
              17 September 2026
            </h2>

            <p className="mt-6 text-zinc-400">
              Goalix Champions League predictions, AI match insights,
              live scores, xG, lineups and statistics
              will become available once the tournament begins.
            </p>

          </div>

        </div>

      </div>
    </main>
  );
};

export default ChampionsLeague;