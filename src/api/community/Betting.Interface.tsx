export interface IBetting {
  bettingId: number;
  bettingName: string;
  mainCharacterImg: string;
  memberId: number;
  memberNickname: string;
}

export interface IBettingDetail {
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
}

export interface IBettingAdd {
  todoId: number;
  name: string;
}

export interface IBettingJoin {
  cost: number;
  prediction: boolean;
}
