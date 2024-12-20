export type Chat = {
  chatId: number;
  contents: string;
  createdDate: Date;
  memberId: number;
  memberNickname: string;
  mainCharacterImg: string;
};

export type ChatRoom = {
  chatRoomId: number;
  bettingId: number;
  bettingName: string;
  memberId: number;
  memberNickname: string;
  mainCharacterImg: string;
};

export type ChatAddRequest = {
  contents: string;
};

export type ChatListRequest = {
  lastChatId: number;
};
