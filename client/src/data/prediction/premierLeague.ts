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
    id: 11,

    league: "Premier League",

    homeTeam: "Crystal Palace",

    awayTeam: "Manchester City",

    homeLogo: clubLogos.CrystalPalace,

    awayLogo: clubLogos.ManchesterCity,

    prediction: "Away Win",

    confidence: 84,

    odds: 1.67,

    bookingCode: "",

    kickoff: "2026-08-28T20:00:00",

    status: "published",
  },

  {
    id: 12,

    league: "Premier League",

    homeTeam: "Liverpool",

    awayTeam: "Nottingham Forest",

    homeLogo: clubLogos.Liverpool,

    awayLogo: clubLogos.NottinghamForest,

    prediction: "Home Win",

    confidence: 87,

    odds: 1.53,

    bookingCode: "",

    kickoff: "2026-08-29T12:30:00",

    status: "published",
  },

  {
    id: 13,

    league: "Premier League",

    homeTeam: "Bournemouth",

    awayTeam: "Everton",

    homeLogo: clubLogos.Bournemouth,

    awayLogo: clubLogos.Everton,

    prediction: "OV 2.5 Goals",

    confidence: 90,

    odds: 1.88,

    bookingCode: "",

    kickoff: "2026-08-29T15:00:00",

    status: "published",
  },

  {
    id: 14,

    league: "Premier League",

    homeTeam: "Coventry",

    awayTeam: "Hull City",

    homeLogo: clubLogos.Coventry,

    awayLogo: clubLogos.HullCity,

    prediction: "Home win",

    confidence: 81,

    odds: 1.93,

    bookingCode: "",

    kickoff: "2026-08-29T15:00:00",

    status: "published",
  },

  {
    id: 15,

    league: "Premier League",

    homeTeam: "Tottenham",

    awayTeam: "Newcastle United",

    homeLogo: clubLogos.Tottenham,

    awayLogo: clubLogos.NewcastleUnited,

    prediction: "BTTS",

    confidence: 79,

    odds: 1.57,

    bookingCode: "",

    kickoff: "2026-08-29T17:30:00",

    status: "published",
  },

  {
    id: 16,

    league: "Premier League",

    homeTeam: "Chelsea",

    awayTeam: "Brighton",

    homeLogo: clubLogos.Chelsea,

    awayLogo: clubLogos.Brighton,

    prediction: "OV 2.5 Goals",

    confidence: 85,

    odds: 1.70,

    bookingCode: "",

    kickoff: "2026-08-30T14:00:00",

    status: "published",
  },

  {
    id: 17,

    league: "Premier League",

    homeTeam: "Leeds United",

    awayTeam: "Brentford",

    homeLogo: clubLogos.LeedsUnited,

    awayLogo: clubLogos.Brentford,

    prediction: "OV 1.5 Goals",

    confidence: 83,

    odds: 1.29,

    bookingCode: "",

    kickoff: "2026-08-30T14:00:00",

    status: "published",
  },

  {
    id: 18,

    league: "Premier League",

    homeTeam: "Sunderland",

    awayTeam: "Fulham",

    homeLogo: clubLogos.Sunderland,

    awayLogo: clubLogos.Fulham,

    prediction: "OV 1.5 Goals",

    confidence: 78,

    odds: 1.35,

    bookingCode: "",

    kickoff: "2026-08-30T14:00:00",

    status: "published",
  },

  {
    id: 19,

    league: "Premier League",

    homeTeam: "Manchester United",

    awayTeam: "Ipswich",

    homeLogo: clubLogos.ManchesterUnited,

    awayLogo: clubLogos.Ipswich,

    prediction: "Home Win",

    confidence: 82,

    odds: 1.45,

    bookingCode: "",

    kickoff: "2026-08-30T16:30:00",

    status: "published",
  },

  {
    id: 20,

    league: "Premier League",

    homeTeam: "Aston Villa",

    awayTeam: "Arsenal",

    homeLogo: clubLogos.AstonVilla,

    awayLogo: clubLogos.Arsenal,

    prediction: "Away win",

    confidence: 85,

    odds: 1.56,

    bookingCode: "",

    kickoff: "2026-08-31T20:00:00",

    status: "published",
  },
];