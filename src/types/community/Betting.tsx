export type Betting = {
  bettingId: number;
  bettingName: string;
  mainCharacterImg: string;
  memberId: number;
  memberNickname: string;
};

export type BettingDetailRequest = {
  bettingId: number;
  bettingName: string;
  chatRoomId: number;
  failureCoins: number;
  isAchieved: boolean | null;
  isFinished: boolean;
  isParticipating: boolean;
  memberId: number;
  memberNickname: string;
  myBetCoins: number;
  myBetOn: boolean;
  participantCount: number;
  successCoins: number;
  todoContents: string;
};

export type BettingDetail = {
  bettingId: number;
  bettingName: string;
  chatRoomId: number;
  failureCoins: number;
  isAchieved: boolean | null;
  isFinished: boolean;
  isParticipating: boolean;
  memberId: number;
  memberNickname: string;
  myBetCoins: number;
  myBetOn: boolean;
  participantCount: number;
  successCoins: number;
  todoContents: string;
};

export type BettingAddRequest = {
  todoId: number;
  name: string;
};

export type BettingJoinRequest = {
  cost: number;
  prediction: boolean;
};
