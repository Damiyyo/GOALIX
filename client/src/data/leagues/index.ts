import { premierLeagueTable } from "./premierLeague";
import { laLigaTable } from "./laLiga";
import { bundesligaTable } from "./bundesliga";
import { serieATable } from "./serieA";
import { ligue1Table } from "./ligue1";

export const leagueTables = {
  "premier-league": {
    name: "Premier League",
    table: premierLeagueTable,
  },

  "la-liga": {
    name: "La Liga",
    table: laLigaTable,
  },

  bundesliga: {
    name: "Bundesliga",
    table: bundesligaTable,
  },

  "serie-a": {
    name: "Serie A",
    table: serieATable,
  },

  "ligue-1": {
    name: "Ligue 1",
    table: ligue1Table,
  },
};