export interface IChat {
  chatId: number;
  contents: string;
  createdDate: Date;
  memberId: number;
  memberNickname: string;
  mainCharacterImg: string;
}

export interface IChatRoom {
  chatRoomId: number;
  bettingId: number;
  bettingName: string;
  memberId: number;
  memberNickname: string;
  mainCharacterImg: string;
}

export interface ChatAdd {
  contents: string;
}

export interface ChatListReq {
  lastChatId: number;
}
