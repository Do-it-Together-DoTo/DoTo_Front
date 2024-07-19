export interface TodoRecord {
  name: string;
  total: number;
  achieved: number;
}

export interface MydataResponse {
  year: number;
  month: number;
  coinUsage: number;
  coinEarned: number;
  myBetOpen: number;
  betParticipation: number;
  betWins: number;
  betAmount: number;
  betProfit: number;
  todoRecords: TodoRecord[];
}
