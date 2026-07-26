import { premierLeaguePredictions } from "@/data/prediction/premierLeague";
import { laLigaPredictions } from "@/data/prediction/laLiga";
import { bundesligaPredictions } from "@/data/prediction/bundesliga";
import { serieAPredictions } from "@/data/prediction/serieA";
import { ligue1Predictions } from "@/data/prediction/ligue1";

export const getUserPredictions = async () => {
  return [
    ...premierLeaguePredictions,
    ...laLigaPredictions,
    ...bundesligaPredictions,
    ...serieAPredictions,
    ...ligue1Predictions,
  ];
};