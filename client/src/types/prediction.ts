export interface Prediction {
    _id: string;
  
    league: string;
  
    homeTeam: string;
  
    awayTeam: string;
  
    prediction: string;
  
    confidence: number;
  
    odds: number;
  
    bookingCode: string;
  
    matchweek: number;
  
    kickoffTime: string;
  
    status: string;
  }