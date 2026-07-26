import { premierLeaguePredictions } from "./premierLeague";
import { laLigaPredictions } from "./laLiga";
import { bundesligaPredictions } from "./bundesliga";
import { serieAPredictions } from "./serieA";
import { ligue1Predictions } from "./ligue1";

export const allPredictions = [
  ...premierLeaguePredictions,
  ...laLigaPredictions,
  ...bundesligaPredictions,
  ...serieAPredictions,
  ...ligue1Predictions,
];