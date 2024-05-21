export interface IBetting {
  host: string;
  name: string;
  state?: 'host' | 'participate' | 'complete';
}

export const MyBettingList: IBetting[] = [
  { host: '닉네임뭐하지', name: '베팅ㄱㄱ', state: 'host' },
  { host: '닉네임뭐하지22', name: '오늘의 베팅', state: 'participate' },
  { host: '닉네임뭐하지33', name: '베팅베팅', state: 'participate' },
  { host: '갓생', name: 'todo베팅', state: 'complete' },
  { host: '갓생123', name: '베팅?', state: 'complete' },
];

export const OpenBettingList: IBetting[] = [
  { host: '닉네임뭐하지', name: '베팅ㄱㄱ' },
  { host: '닉네임뭐하지22', name: '오늘의 베팅' },
  { host: '닉네임뭐하지33', name: '베팅베팅' },
  { host: '갓생', name: 'todo베팅' },
  { host: '갓생123', name: '베팅?' },
];
