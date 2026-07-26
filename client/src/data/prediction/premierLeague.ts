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

    prediction: "Home Win",

    confidence: 92,

    odds: 1.20,

    bookingCode: "GXPL001",

    kickoff: "2026-08-15T17:30:00",

    status: "published",
  },

  {
    id: 2,

    league: "Premier League",

    homeTeam: "Everton",

    awayTeam: "Crystal Palace",

    homeLogo: clubLogos.Everton,

    awayLogo: clubLogos.CrystalPalace,

    prediction: "Both Teams To Score",

    confidence: 88,

    odds: 1.74,

    bookingCode: "",

    kickoff: "2026-08-16T14:00:00",

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

    kickoff: "2026-08-16T16:30:00",

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

    odds: 1.45,

    bookingCode: "",

    kickoff: "2026-08-17T20:00:00",

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

    confidence: 77,

    odds: 3.44,

    bookingCode: "GXPL005",

    kickoff: "2026-08-18T19:45:00",

    status: "published",
  },

  {
    id: 6,

    league: "Premier League",

    homeTeam: "Nottingham Forest",

    awayTeam: "Leeds United",

    homeLogo: clubLogos.NottinghamForest,

    awayLogo: clubLogos.LeedsUnited,

    prediction: "Home 1UP",

    confidence: 77,

    odds: 1.60,

    bookingCode: "GXPL005",

    kickoff: "2026-08-18T19:45:00",

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

    confidence: 77,

    odds: 1.62,

    bookingCode: "GXPL005",

    kickoff: "2026-08-18T19:45:00",

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

    confidence: 77,

    odds: 1.59,

    bookingCode: "GXPL005",

    kickoff: "2026-08-18T19:45:00",

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

    confidence: 77,

    odds: 1.65,

    bookingCode: "GXPL005",

    kickoff: "2026-08-18T19:45:00",

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

    confidence: 7,

    odds: 2.26,

    bookingCode: "GXPL005",

    kickoff: "2026-08-24T19:45:00",

    status: "published",
  },
];