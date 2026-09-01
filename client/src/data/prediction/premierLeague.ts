import { clubLogos } from "../clubLogos";

export interface PredictionMatch {
  id: number;

  league: string;

  homeTeam: string;

  awayTeam: string;

  homeLogo: string;

  awayLogo: string;

  prediction: string;

  confidence: number;

  odds: number;

  bookingCode: string;

  kickoff: string;

  status: "published";
}

export const premierLeaguePredictions: PredictionMatch[] =
[
  {
    id: 21,

    league: "Premier League",

    homeTeam: "Ipswich",

    awayTeam: "Liverpool",

    homeLogo: clubLogos.Ipswich,

    awayLogo: clubLogos.Liverpool,

    prediction: "Away Win",

    confidence: 86,

    odds: 1.55,

    bookingCode: "",

    kickoff: "2026-09-04T20:00:00",

    status: "published",
  },

  {
    id: 22,

    league: "Premier League",

    homeTeam: "Newcastle United",

    awayTeam: "Bournemouth",

    homeLogo: clubLogos.NewcastleUnited,

    awayLogo: clubLogos.Bournemouth,

    prediction: "OV 2.5",

    confidence: 78,

    odds: 1.60,

    bookingCode: "",

    kickoff: "2026-09-05T12:30:00",

    status: "published",
  },

  {
    id: 23,

    league: "Premier League",

    homeTeam: "Brentford",

    awayTeam: "Sunderland",

    homeLogo: clubLogos.Brentford,

    awayLogo: clubLogos.Sunderland,

    prediction: "Home win & OV 2.5",

    confidence: 82,

    odds: 2.35,

    bookingCode: "",

    kickoff: "2026-09-05T15:00:00",

    status: "published",
  },

  {
    id: 24,

    league: "Premier League",

    homeTeam: "Brighton",

    awayTeam: "Leeds United",

    homeLogo: clubLogos.Brighton,

    awayLogo: clubLogos.LeedsUnited,

    prediction: "BTTS",

    confidence: 76,

    odds: 1.74,

    bookingCode: "",

    kickoff: "2026-09-05T15:00:00",

    status: "published",
  },

  {
    id: 25,

    league: "Premier League",

    homeTeam: "Fulham",

    awayTeam: "Crystal Palace",

    homeLogo: clubLogos.Fulham,

    awayLogo: clubLogos.CrystalPalace,

    prediction: "OV 1.5",

    confidence: 74,

    odds: 1.30,

    bookingCode: "",

    kickoff: "2026-09-05T15:00:00",

    status: "published",
  },

  {
    id: 26,

    league: "Premier League",

    homeTeam: "Manchester City",

    awayTeam: "Coventry",

    homeLogo: clubLogos.ManchesterCity,

    awayLogo: clubLogos.Coventry,

    prediction: "Home Win & OV 2.5",

    confidence: 91,

    odds: 1.45,

    bookingCode: "",

    kickoff: "2026-09-05T15:00:00",

    status: "published",
  },

  {
    id: 27,

    league: "Premier League",

    homeTeam: "Nottingham Forest",

    awayTeam: "Tottenham",

    homeLogo: clubLogos.NottinghamForest,

    awayLogo: clubLogos.Tottenham,

    prediction: "OV 1.5",

    confidence: 81,

    odds: 1.32,

    bookingCode: "",

    kickoff: "2026-09-05T15:00:00",

    status: "published",
  },

  {
    id: 28,

    league: "Premier League",

    homeTeam: "Hull City",

    awayTeam: "Aston Villa",

    homeLogo: clubLogos.HullCity,

    awayLogo: clubLogos.AstonVilla,

    prediction: "Home OV 0.5",

    confidence: 80,

    odds: 1.50,

    bookingCode: "",

    kickoff: "2026-09-05T17:30:00",

    status: "published",
  },

  {
    id: 29,

    league: "Premier League",

    homeTeam: "Everton",

    awayTeam: "Manchester United",

    homeLogo: clubLogos.Everton,

    awayLogo: clubLogos.ManchesterUnited,

    prediction: "OV 2.5 Goals",

    confidence: 77,

    odds: 1.72,

    bookingCode: "",

    kickoff: "2026-09-06T14:00:00",

    status: "published",
  },

  {
    id: 30,

    league: "Premier League",

    homeTeam: "Arsenal",

    awayTeam: "Chelsea",

    homeLogo: clubLogos.Arsenal,

    awayLogo: clubLogos.Chelsea,

    prediction: "Correct Score 2-1",

    confidence: 83,

    odds: 8.20,

    bookingCode: "",

    kickoff: "2026-09-06T16:30:00",

    status: "published",
  },
];