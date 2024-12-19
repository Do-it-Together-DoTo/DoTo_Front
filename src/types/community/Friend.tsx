export type IFriend = {
  memberId: number;
  nickname: string;
  mainCharacterImg: string;
  status?: 'FRIEND' | 'NOT_FRIEND';
};

export type IFriendBlock = {
  lastFriendId: number;
};

export type IFriendReq = {
  friendId: number;
};

export type IFriendSearchReq = {
  keyword: string;
  lastMemberId?: number;
};

export type IFriendDetail = {
  memberId: number;
  nickname: string;
  description: string;
  mainCharacterImg: string;
  mainCharacterExp: number;
  mainCharacterLevel: number;
};

//친구목록, 친구차단목록, 친구상세목록 Request
export type IFriendList = {
  lastFriendId?: number;
  lastFriendLastUpload?: Date;
};
