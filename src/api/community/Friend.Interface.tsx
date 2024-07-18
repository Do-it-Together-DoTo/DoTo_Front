export interface IFriend {
  memberId: number;
  nickname: string;
  mainCharacterImg: string;
  status?: 'FRIEND' | 'NOT_FRIEND';
}

export interface IFriendBlock {
  lastFriendId: number;
}

export interface IFriendReq {
  friendId: number;
}

export interface IFriendSearchReq {
  keyword: string;
  lastMemberId?: number;
}

export interface IFriendDetail {
  memberId: number;
  nickname: string;
  description: string;
  mainCharacterImg: string;
  mainCharacterExp: number;
  mainCharacterLevel: number;
}
//친구목록, 친구차단목록, 친구상세목록 Request
export interface IFriendList {
  lastFriendId?: number;
  lastFriendLastUpload?: Date;
}
