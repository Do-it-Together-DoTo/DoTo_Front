export type RankingRequest = {
  order: string;
};

export type Ranking = {
  memberId: number;
  memberNickname: string;
  mainCharacterImg: string;
  score: number;
  rank: number;
};
