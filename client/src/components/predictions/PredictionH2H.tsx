"use client";

export type FormResult = "W" | "D" | "L";

export interface H2HMeeting {
  date: string; // ISO date
  homeTeam: string;
  awayTeam: string;
  score: string; // e.g. "2-1"
}

export interface TeamForm {
  home: FormResult[]; // oldest first, most recent last
  away: FormResult[];
}

interface PredictionH2HProps {
  homeTeam: string;
  awayTeam: string;
  form?: TeamForm;
  h2h?: H2HMeeting[];
}

export default function PredictionH2H({
  homeTeam,
  awayTeam,
  form,
  h2h,
}: PredictionH2HProps) {
  return (
    <div className="mt-4 space-y-4">
      {/* RECENT FORM */}

      <div
        className="
          rounded-xl

          bg-white/[0.03]

          p-3
        "
      >
        <p
          className="
            text-[10px]

            uppercase

            tracking-[0.12em]

            text-zinc-500
          "
        >
          Recent Form
        </p>

        {form ? (
          <div className="mt-3 space-y-2.5">
            <FormRow label={homeTeam} results={form.home} />
            <FormRow label={awayTeam} results={form.away} />
          </div>
        ) : (
          <p className="mt-2 text-xs text-zinc-500">
            Form data not available yet.
          </p>
        )}
      </div>

      {/* HEAD TO HEAD */}

      <div
        className="
          rounded-xl

          bg-white/[0.03]

          p-3
        "
      >
        <p
          className="
            text-[10px]

            uppercase

            tracking-[0.12em]

            text-zinc-500
          "
        >
          Head-to-Head
        </p>

        {h2h && h2h.length > 0 ? (
          <ul className="mt-3 divide-y divide-white/5">
            {h2h.map((meeting, i) => (
              <li
                key={i}
                className="
                  flex
                  items-center
                  justify-between

                  py-2.5

                  text-sm
                "
              >
                <span className="text-zinc-500">
                  {formatDate(meeting.date)}
                </span>

                <span className="font-bold text-white">
                  {meeting.homeTeam}{" "}
                  <span className="text-green-400">
                    {meeting.score}
                  </span>{" "}
                  {meeting.awayTeam}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-xs text-zinc-500">
            No previous meetings on record.
          </p>
        )}
      </div>
    </div>
  );
}

function FormRow({
  label,
  results,
}: {
  label: string;
  results: FormResult[];
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs font-semibold text-zinc-300">
        {label}
      </span>

      <div className="flex gap-1.5">
        {results.map((r, i) => (
          <span
            key={i}
            className={`
              flex
              h-6
              w-6

              items-center
              justify-center

              rounded-full

              text-[10px]
              font-black

              ${resultStyle(r)}
            `}
          >
            {r}
          </span>
        ))}
      </div>
    </div>
  );
}

function resultStyle(result: FormResult) {
  switch (result) {
    case "W":
      return "bg-green-500/15 text-green-400";
    case "L":
      return "bg-red-500/15 text-red-400";
    default:
      return "bg-white/10 text-zinc-300";
  }
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}