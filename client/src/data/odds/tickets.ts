export interface Ticket {
    id: string;
    title: string;
    confidence: number;
    odds: number;
    code: string;
  }
  
  export const tickets: Ticket[] = [
    {
      id: "1",
      title: "Sportbet",
      confidence: 78,
      odds: 1932.80,
      code: "V1SB59",
    },
  
    {
      id: "2",
      title: "Sportybet",
      confidence: 75,
      odds: 110.36,
      code: "TGJ7L2",
    },
  
    {
      id: "3",
      title: "Sportybet",
      confidence: 57,
      odds: 205.73,
      code: "YY5E2C",
    },
  
    {
      id: "4",
      title: "SportyBet Demonic Odds",
      confidence: 60,
      odds: 51.75,
      code: "GS9EYX",
    },

   
  ];