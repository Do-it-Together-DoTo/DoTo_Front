export interface IMember {
  status: number;
  memberId: string;
  nickname: string;
}

export const STATUS = {
  FRIEND: 0,
  UNFOLLOW: 1,
  WAIT: 2,
};
