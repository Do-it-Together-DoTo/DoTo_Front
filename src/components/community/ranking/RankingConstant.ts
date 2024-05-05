import { ElementType } from 'react';

import { BronzeStarIcon, GoldStarIcon, SilverStarIcon } from '@/assets/svg/community';

export const STAR_ICON_MAP: ElementType[] = [GoldStarIcon, SilverStarIcon, BronzeStarIcon];
export interface IUser {
  nickname: string;
  point: number;
}
