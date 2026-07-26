import FormBadge from "./FormBadge";
import { LeagueClub } from "@/data/leagues/types";

interface TableRowProps {
  club: LeagueClub;
}

export default function TableRow({
  club,
}: TableRowProps) {
  return (
    <tr
      className="
        border-b
        border-white/5
        transition-colors
        hover:bg-white/5
      "
    >
      {/* Position */}
      <td
        className="
          w-12
          py-4
          text-center
          font-bold
          text-zinc-400
        "
      >
        {club.position}
      </td>

      {/* Club */}
      <td className="py-4">
        <div className="flex min-w-[190px] items-center gap-3">
          <img
            src={club.logo}
            alt={club.club}
            className="h-8 w-8 flex-shrink-0"
          />

          <div className="min-w-0">
            <p
              className="
                whitespace-nowrap
                text-sm
                font-semibold
                text-white
              "
            >
              {club.club}
            </p>

            <p
              className="
                text-xs
                text-zinc-500
              "
            >
              {club.shortName}
            </p>
          </div>
        </div>
      </td>

      {/* Played */}
      <td className="px-3 py-4 text-center">
        {club.played}
      </td>

      {/* Won */}
      <td className="px-3 py-4 text-center">
        {club.won}
      </td>

      {/* Drawn */}
      <td className="px-3 py-4 text-center">
        {club.drawn}
      </td>

      {/* Lost */}
      <td className="px-3 py-4 text-center">
        {club.lost}
      </td>

      {/* Goals For */}
      <td className="px-3 py-4 text-center">
        {club.goalsFor}
      </td>

      {/* Goals Against */}
      <td className="px-3 py-4 text-center">
        {club.goalsAgainst}
      </td>

      {/* Goal Difference */}
      <td className="px-3 py-4 text-center font-semibold">
        {club.goalDifference > 0
          ? `+${club.goalDifference}`
          : club.goalDifference}
      </td>

      {/* Points */}
      <td
        className="
          px-3
          py-4
          text-center
          font-bold
          text-green-400
        "
      >
        {club.points}
      </td>

      {/* Form */}
      <td className="px-3 py-4">
        <div className="flex items-center gap-1">
          {club.form.length > 0 ? (
            club.form.map((result, index) => (
              <FormBadge
                key={index}
                result={result}
              />
            ))
          ) : (
            <span className="text-zinc-500">
              —
            </span>
          )}
        </div>
      </td>
    </tr>
  );
}