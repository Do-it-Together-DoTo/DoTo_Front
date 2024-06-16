import { BettingIcon, ChattingIcon, FriendIcon, RankingIcon } from '@/assets/svg/community';
import { AccountDeleteIcon, MydataIcon, PasswordUpdateIcon, ProfileUpdateIcon, SettingIcon } from '@/assets/svg/mypage';
import { InventoryIcon, ShopIcon } from '@/assets/svg/store';
import { ElementType } from 'react';

interface Category {
  name: string;
  to: string;
  icon: keyof typeof ICON_MAP;
  detail?: { name: string; to: string; icon: keyof typeof ICON_MAP }[];
}
export const ICON_MAP: Record<string, ElementType> = {
  RankingIcon: RankingIcon,
  ChattingIcon: ChattingIcon,
  FriendIcon: FriendIcon,
  BettingIcon: BettingIcon,
  MydataIcon: MydataIcon,
  PasswordUpdateIcon: PasswordUpdateIcon,
  ProfileUpdateIcon: ProfileUpdateIcon,
  SettingIcon: SettingIcon,
  InventoryIcon: InventoryIcon,
  ShopIcon: ShopIcon,
  AccountDeleteIcon: AccountDeleteIcon,
};

export const CATEGORY_LIST: Record<string, Category[]> = {
  community: [
    { name: '랭킹', to: 'ranking', icon: 'RankingIcon' },
    { name: '친구', to: 'friends', icon: 'FriendIcon' },
    { name: '베팅', to: 'betting', icon: 'BettingIcon' },
    { name: '채팅', to: 'chatting', icon: 'ChattingIcon' },
  ],
  store: [
    {
      name: '스토어',
      to: 'shop/character',
      icon: 'ShopIcon',
      detail: [
        { name: '캐릭터', to: '/store/shop/character', icon: 'MydataIcon' },
        { name: '아이템', to: '/store/shop/item', icon: 'InventoryIcon' },
      ],
    },
    {
      name: '보관함',
      to: 'inventory/character',
      icon: 'InventoryIcon',
      detail: [
        { name: '캐릭터', to: '/store/inventory/character', icon: 'MydataIcon' },
        { name: '아이템', to: '/store/inventory/item', icon: 'InventoryIcon' },
      ],
    },
  ],
  mypage: [
    {
      name: '마이페이지',
      icon: 'MydataIcon',
      to: 'mydata',
      detail: [
        { name: '나의 기록', to: 'mydata', icon: 'MydataIcon' },
        { name: '보관함', to: '/store/inventory', icon: 'InventoryIcon' },
        { name: '프로필 수정', to: 'update-profile', icon: 'ProfileUpdateIcon' },
      ],
    },
    {
      name: '설정',
      icon: 'SettingIcon',
      to: 'change-password',
      detail: [
        { name: '비밀번호 변경', to: 'change-password', icon: 'PasswordUpdateIcon' },
        { name: '계정 삭제', to: 'delete-account', icon: 'AccountDeleteIcon' },
      ],
    },
  ],
};
