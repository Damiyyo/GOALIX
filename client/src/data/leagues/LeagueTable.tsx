import TableRow from "./TableRow";
import { LeagueClub } from "@/data/leagues/types";

interface Props {
  table: LeagueClub[];
}

const LeagueTable = ({ table }: Props) => {
  return (
    <div
      className="
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.03]
      "
    >
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead
            className="
              bg-white/[0.05]
              text-sm
              uppercase
              tracking-wide
              text-zinc-400
            "
          >
            <tr>
              <th className="px-4 py-5 text-left">
                #
              </th>

              <th className="px-4 py-5 text-left">
                Club
              </th>

              <th className="px-4 py-5">P</th>

              <th className="px-4 py-5">W</th>

              <th className="px-4 py-5">D</th>

              <th className="px-4 py-5">L</th>

              <th className="px-4 py-5">GF</th>

              <th className="px-4 py-5">GA</th>

              <th className="px-4 py-5">GD</th>

              <th className="px-4 py-5">Pts</th>

              <th className="px-4 py-5">
                Form
              </th>
            </tr>
          </thead>

          <tbody>
            {table.map((club) => (
              <TableRow
                key={club.club}
                club={club}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeagueTable;