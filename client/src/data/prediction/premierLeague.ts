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
    id: 41,
    league: "Premier League",
    homeTeam: "Arsenal",
    awayTeam: "Leeds United",
    homeLogo: clubLogos.Arsenal,
    awayLogo: clubLogos.LeedsUnited,
    prediction: "Home Win",
    confidence: 82,
    odds: 1.45,
    bookingCode: "",
    kickoff: "2026-10-10T12:30:00",
    status: "published",
  },
  {
    id: 42,
    league: "Premier League",
    homeTeam: "Aston Villa",
    awayTeam: "Brentford",
    homeLogo: clubLogos.AstonVilla,
    awayLogo: clubLogos.Brentford,
    prediction: "BTTS",
    confidence: 76,
    odds: 1.60,
    bookingCode: "",
    kickoff: "2026-10-10T15:00:00",
    status: "published",
  },
  {
    id: 43,
    league: "Premier League",
    homeTeam: "Chelsea",
    awayTeam: "Bournemouth",
    homeLogo: clubLogos.Chelsea,
    awayLogo: clubLogos.Bournemouth,
    prediction: "OV 2.5 Goals",
    confidence: 85,
    odds: 1.50,
    bookingCode: "",
    kickoff: "2026-10-10T15:00:00",
    status: "published",
  },
  {
    id: 44,
    league: "Premier League",
    homeTeam: "Ipswich Town",
    awayTeam: "Fulham",
    homeLogo: clubLogos.Ipswich,
    awayLogo: clubLogos.Fulham,
    prediction: "BTTS",
    confidence: 73,
    odds: 1.65,
    bookingCode: "",
    kickoff: "2026-10-10T15:00:00",
    status: "published",
  },
  {
    id: 45,
    league: "Premier League",
    homeTeam: "Sunderland",
    awayTeam: "Brighton",
    homeLogo: clubLogos.Sunderland,
    awayLogo: clubLogos.Brighton,
    prediction: "OV 1.5 Goals",
    confidence: 81,
    odds: 1.30,
    bookingCode: "",
    kickoff: "2026-10-10T15:00:00",
    status: "published",
  },
  {
    id: 46,
    league: "Premier League",
    homeTeam: "Manchester United",
    awayTeam: "Tottenham",
    homeLogo: clubLogos.ManchesterUnited,
    awayLogo: clubLogos.Tottenham,
    prediction: "BTTS",
    confidence: 77,
    odds: 1.55,
    bookingCode: "",
    kickoff: "2026-10-10T17:30:00",
    status: "published",
  },
  {
    id: 47,
    league: "Premier League",
    homeTeam: "Crystal Palace",
    awayTeam: "Nottingham Forest",
    homeLogo: clubLogos.CrystalPalace,
    awayLogo: clubLogos.NottinghamForest,
    prediction: "Over 1.5 Goals",
    confidence: 74,
    odds: 1.30,
    bookingCode: "",
    kickoff: "2026-10-11T14:00:00",
    status: "published",
  },
  {
    id: 48,
    league: "Premier League",
    homeTeam: "Hull City",
    awayTeam: "Everton",
    homeLogo: clubLogos.HullCity,
    awayLogo: clubLogos.Everton,
    prediction: "Away 1up",
    confidence: 70,
    odds: 1.60,
    bookingCode: "",
    kickoff: "2026-10-11T14:00:00",
    status: "published",
  },
  {
    id: 49,
    league: "Premier League",
    homeTeam: "Liverpool",
    awayTeam: "Manchester City",
    homeLogo: clubLogos.Liverpool,
    awayLogo: clubLogos.ManchesterCity,
    prediction: "BTTS",
    confidence: 79,
    odds: 1.55,
    bookingCode: "",
    kickoff: "2026-10-11T16:30:00",
    status: "published",
  },
  {
    id: 50,
    league: "Premier League",
    homeTeam: "Coventry",
    awayTeam: "Newcastle United",
    homeLogo: clubLogos.Coventry,
    awayLogo: clubLogos.NewcastleUnited,
    prediction: "Away 1up",
    confidence: 85,
    odds: 1.60,
    bookingCode: "",
    kickoff: "2026-10-12T20:00:00",
    status: "published",
  },
];