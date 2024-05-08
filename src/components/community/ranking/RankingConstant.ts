import { ElementType } from 'react';

import { BronzeStarIcon, GoldStarIcon, SilverStarIcon } from '@/assets/svg/community';

export const STAR_ICON_MAP: ElementType[] = [GoldStarIcon, SilverStarIcon, BronzeStarIcon];
export interface IUser {
  nickname: string;
  point: number;
}
export const RANKERS = [
  { nickname: '센', point: 6300 },
  { nickname: '지현', point: 510 },
  { nickname: '현', point: 90 },
  { nickname: 'user1', point: 80 },
  { nickname: 'user2', point: 70 },
  { nickname: 'user3', point: 66 },
  { nickname: 'user4', point: 50 },
  { nickname: 'user5', point: 40 },
  { nickname: 'user6', point: 20 },
  { nickname: 'user7', point: 10 },
];
