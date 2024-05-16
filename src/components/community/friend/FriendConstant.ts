export interface IMember {
  memberId: string;
  nickname: string;
}

export const MEMBER_LIST: IMember[] = [
  { memberId: '1', nickname: 'member1' },
  { memberId: '2', nickname: 'member2' },
  { memberId: '3', nickname: 'member3' },
  { memberId: '4', nickname: 'member4' },
  { memberId: '5', nickname: 'member5' },
];

export const FRIEND_LIST: IMember[] = [
  { memberId: '1', nickname: 'Friend1' },
  { memberId: '2', nickname: 'Friend2' },
  { memberId: '3', nickname: 'Friend3' },
  { memberId: '4', nickname: 'Friend4' },
  { memberId: '5', nickname: 'Friend5' },
];
