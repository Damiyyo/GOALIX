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

export const premierLeaguePredictions: PredictionMatch[] = [
  {
    id: 31,

    league: "Premier League",

    homeTeam: "Bournemouth",
    awayTeam: "Brentford",

    homeLogo: clubLogos.Bournemouth,
    awayLogo: clubLogos.Brentford,

    prediction: "OV 2.5 Goals",

    confidence: 80,

    odds: 1.61,

    bookingCode: "",

    kickoff: "2026-09-12T15:00:00",

    status: "published",
  },

  {
    id: 32,

    league: "Premier League",

    homeTeam: "Aston Villa",
    awayTeam: "Nottingham Forest",

    homeLogo: clubLogos.AstonVilla,
    awayLogo: clubLogos.NottinghamForest,

    prediction: "Home Win",

    confidence: 82,

    odds: 2.35,

    bookingCode: "",

    kickoff: "2026-09-12T15:00:00",

    status: "published",
  },

  {
    id: 33,

    league: "Premier League",

    homeTeam: "Chelsea",
    awayTeam: "Hull City",

    homeLogo: clubLogos.Chelsea,
    awayLogo: clubLogos.HullCity,

    prediction: "Home Win",

    confidence: 89,

    odds: 1.27,

    bookingCode: "",

    kickoff: "2026-09-12T15:00:00",

    status: "published",
  },

  {
    id: 34,

    league: "Premier League",

    homeTeam: "Crystal Palace",
    awayTeam: "Ipswich",

    homeLogo: clubLogos.CrystalPalace,
    awayLogo: clubLogos.Ipswich,

    prediction: "Home Win",

    confidence: 78,

    odds: 1.94,

    bookingCode: "",

    kickoff: "2026-09-12T15:00:00",

    status: "published",
  },

  {
    id: 35,

    league: "Premier League",

    homeTeam: "Liverpool",
    awayTeam: "Fulham",

    homeLogo: clubLogos.Liverpool,
    awayLogo: clubLogos.Fulham,

    prediction: "Home Win",

    confidence: 90,

    odds: 1.47,

    bookingCode: "",

    kickoff: "2026-09-12T15:00:00",

    status: "published",
  },

  {
    id: 36,

    league: "Premier League",

    homeTeam: "Tottenham",
    awayTeam: "Everton",

    homeLogo: clubLogos.Tottenham,
    awayLogo: clubLogos.Everton,

    prediction: "BTTS",

    confidence: 79,

    odds: 1.76,

    bookingCode: "",

    kickoff: "2026-09-12T17:30:00",

    status: "published",
  },

  {
    id: 37,

    league: "Premier League",

    homeTeam: "Sunderland",
    awayTeam: "Arsenal",

    homeLogo: clubLogos.Sunderland,
    awayLogo: clubLogos.Arsenal,

    prediction: "Away Win",

    confidence: 87,

    odds: 1.52,

    bookingCode: "",

    kickoff: "2026-09-12T20:00:00",

    status: "published",
  },

  {
    id: 38,

    league: "Premier League",

    homeTeam: "Coventry",
    awayTeam: "Brighton",

    homeLogo: clubLogos.Coventry,
    awayLogo: clubLogos.Brighton,

    prediction: "OV 1.5 Goals",

    confidence: 83,

    odds: 1.25,

    bookingCode: "",

    kickoff: "2026-09-13T14:00:00",

    status: "published",
  },

  {
    id: 39,

    league: "Premier League",

    homeTeam: "Manchester United",
    awayTeam: "Manchester City",

    homeLogo: clubLogos.ManchesterUnited,
    awayLogo: clubLogos.ManchesterCity,

    prediction: "BTTS",

    confidence: 81,

    odds: 1.49,

    bookingCode: "",

    kickoff: "2026-09-13T16:30:00",

    status: "published",
  },

  {
    id: 40,

    league: "Premier League",

    homeTeam: "Leeds United",
    awayTeam: "Newcastle United",

    homeLogo: clubLogos.LeedsUnited,
    awayLogo: clubLogos.NewcastleUnited,

    prediction: "OV 1.5 Goals",

    confidence: 82,

    odds: 1.25,

    bookingCode: "",

    kickoff: "2026-09-14T20:00:00",

    status: "published",
  },
];