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
    id: 1,

    league: "Premier League",

    homeTeam: "Arsenal",

    awayTeam: "Coventry",

    homeLogo: clubLogos.Arsenal,

    awayLogo: clubLogos.Coventry,

    prediction: "BTTS % OV 2.5",

    confidence: 85,

    odds: 2.80,

    bookingCode: "",

    kickoff: "2026-08-21T20:00:00",

    status: "published",
  },

  {
    id: 2,

    league: "Premier League",

    homeTeam: "Everton",

    awayTeam: "Crystal Palace",

    homeLogo: clubLogos.Everton,

    awayLogo: clubLogos.CrystalPalace,

    prediction: "BTTS",

    confidence: 88,

    odds: 1.75,

    bookingCode: "",

    kickoff: "2026-08-22T15:00:00",

    status: "published",
  },

  {
    id: 3,

    league: "Premier League",

    homeTeam: "Manchester City",

    awayTeam: "Bournemouth",

    homeLogo: clubLogos.ManchesterCity,

    awayLogo: clubLogos.Bournemouth,

    prediction: "Home Win",

    confidence: 91,

    odds: 1.50,

    bookingCode: "",

    kickoff: "2026-08-23T14:00:00",

    status: "published",
  },

  {
    id: 4,

    league: "Premier League",

    homeTeam: "Hull City",

    awayTeam: "Manchester United",

    homeLogo: clubLogos.HullCity,

    awayLogo: clubLogos.ManchesterUnited,

    prediction: "Away Win",

    confidence: 84,

    odds: 1.49,

    bookingCode: "",

    kickoff: "2026-08-22T12:30:00",

    status: "published",
  },

  {
    id: 5,

    league: "Premier League",

    homeTeam: "Ipswich",

    awayTeam: "Sunderland",

    homeLogo: clubLogos.Ipswich,

    awayLogo: clubLogos.Sunderland,

    prediction: "Draw",

    confidence: 80,

    odds: 3.44,

    bookingCode: "",

    kickoff: "2026-08-22T15:00:00",

    status: "published",
  },

  {
    id: 6,

    league: "Premier League",

    homeTeam: "Nottingham Forest",

    awayTeam: "Leeds United",

    homeLogo: clubLogos.NottinghamForest,

    awayLogo: clubLogos.LeedsUnited,

    prediction: "Away 1up",

    confidence: 77,

    odds: 1.93,

    bookingCode: "",

    kickoff: "2026-08-22T15:00:00",

    status: "published",
  },

  {
    id: 7,

    league: "Premier League",

    homeTeam: "Brentford",

    awayTeam: "Tottenham",

    homeLogo: clubLogos.Brentford,

    awayLogo: clubLogos.Tottenham,

    prediction: "OV 2.5",

    confidence: 75,

    odds: 1.63,

    bookingCode: "",

    kickoff: "2026-08-22T17:30:00",


    status: "published",
  },

  {
    id: 8,

    league: "Premier League",

    homeTeam: "Brighton",

    awayTeam: "Aston Villa",

    homeLogo: clubLogos.Brighton,

    awayLogo: clubLogos.AstonVilla,

    prediction: "OV 2.5",

    confidence: 80,

    odds: 1.60,

    bookingCode: "",

    kickoff: "2026-08-23T14:00:00",

    status: "published",
  },

  {
    id: 9,

    league: "Premier League",

    homeTeam: "Newcastle United",

    awayTeam: "Liverpool",

    homeLogo: clubLogos.NewcastleUnited,

    awayLogo: clubLogos.Liverpool,

    prediction: "BTTS & OV 2.5",

    confidence: 85,

    odds: 1.67,

    bookingCode: "",

    kickoff: "2026-08-23T16:30:00",


    status: "published",
  },

  {
    id: 10,

    league: "Premier League",

    homeTeam: "Fulham ",

    awayTeam: "Chelsea",

    homeLogo: clubLogos.Fulham,

    awayLogo: clubLogos.Chelsea,

    prediction: "Away Win",

    confidence: 77,

    odds: 2.21,

    bookingCode: "",

    kickoff: "2026-08-24T20:00:00",

    status: "published",
  },
];