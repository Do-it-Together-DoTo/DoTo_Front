export type IRankingReq = {
  order: string;
};

export type IRanking = {
  memberId: number;
  memberNickname: string;
  mainCharacterImg: string;
  score: number;
  rank: number;
};
