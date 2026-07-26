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
      confidence: 90,
      odds: 5.41,
      code: "GX-8KP-921Q",
    },
  
    {
      id: "2",
      title: "Medium Ticket",
      confidence: 79,
      odds: 11.37,
      code: "GX-Q91K-71LP",
    },
  
    {
      id: "3",
      title: "Sportybet",
      confidence: 37,
      odds: 16.82,
      code: "GX-9K21-XPA8",
    },
  
    {
      id: "4",
      title: "High Odds",
      confidence: 84,
      odds: 22.90,
      code: "GX-LP82-ZQ17",
    },
  
    {
      id: "5",
      title: "Super Acca",
      confidence: 80,
      odds: 38.25,
      code: "GX-QA72-KPL8",
    },
  
    {
      id: "6",
      title: "VIP Ticket",
      confidence: 77,
      odds: 56.70,
      code: "GX-JQ81-MXA7",
    },
  
    {
      id: "7",
      title: "Mega Odds",
      confidence: 74,
      odds: 91.20,
      code: "GX-PQ82-LAK9",
    },
  
    {
      id: "8",
      title: "Jackpot",
      confidence: 70,
      odds: 1000,
      code: "GX-KA91-QPL2",
    },
  ];