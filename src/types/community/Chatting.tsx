export type IChat = {
  chatId: number;
  contents: string;
  createdDate: Date;
  memberId: number;
  memberNickname: string;
  mainCharacterImg: string;
};

export type IChatRoom = {
  chatRoomId: number;
  bettingId: number;
  bettingName: string;
  memberId: number;
  memberNickname: string;
  mainCharacterImg: string;
};

export type ChatAdd = {
  contents: string;
};

export type ChatListReq = {
  lastChatId: number;
};
