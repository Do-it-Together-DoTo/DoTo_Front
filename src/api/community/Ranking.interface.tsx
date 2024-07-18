export interface IRankingReq {
  order: string;
}

export interface IRanking {
  memberId: number;
  memberNickname: string;
  mainCharacterImg: string;
  score: number;
  rank: number;
}
