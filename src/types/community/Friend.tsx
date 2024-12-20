export type Friend = {
  memberId: number;
  nickname: string;
  mainCharacterImg: string;
  status?: 'FRIEND' | 'NOT_FRIEND';
};

export type FriendRequest = {
  friendId: number;
};

export type FriendSearchRequest = {
  keyword: string;
  lastMemberId?: number;
};

export type FriendDetail = {
  memberId: number;
  nickname: string;
  description: string;
  mainCharacterImg: string;
  mainCharacterExp: number;
  mainCharacterLevel: number;
};

//친구목록, 친구차단목록, 친구상세목록 Request
export type FriendListRequest = {
  lastFriendId?: number;
  lastFriendLastUpload?: Date;
};
