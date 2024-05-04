import CategorybarItem from './CategorybarItem';
import { ElementType } from 'react';
import React from 'react';
import { BettingIcon, ChattingIcon, FriendIcon, RankingIcon } from '@/assets/svg/community';
import { MydataIcon, PasswordUpdateIcon, ProfileUpdateIcon, SettingIcon } from '@/assets/svg/mypage';
import { InventoryIcon, ShopIcon } from '@/assets/svg/store';

interface CategorybarProps {
  category: string;
}

const Categorybar = ({ category }: CategorybarProps) => {
  const iconMap: Record<string, ElementType> = {
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
  };

  const categoryList: Record<string, { name: string; to: string; icon: keyof typeof iconMap }[]> = {
    community: [
      { name: '랭킹', to: 'ranking', icon: 'RankingIcon' },
      { name: '친구', to: 'friends', icon: 'FriendIcon' },
      { name: '베팅', to: 'betting', icon: 'BettingIcon' },
      { name: '채팅', to: 'chatting', icon: 'ChattingIcon' },
    ],
    store: [
      { name: '스토어', to: 'shop', icon: 'ShopIcon' },
      { name: '보관함', to: 'inventory', icon: 'InventoryIcon' },
    ],
    mypage: [
      { name: '마이페이지', to: 'mypage', icon: 'MydataIcon' },
      { name: '설정', to: 'setting', icon: 'SettingIcon' },
    ],
  };
  return (
    <nav className="w-[16.1875rem] py-[7rem] h-screen bg-Light_Layout-100 rounded-tl-3xl dark:bg-Dark_Layout-200 flex flex-col gap-8  px-4 ">
      {categoryList[category].map((page) => (
        <CategorybarItem to={page.to} name={page.name} key={page.name}>
          {React.createElement(iconMap[page.icon], { width: '17', height: '17' })}
        </CategorybarItem>
      ))}
    </nav>
  );
};

export default Categorybar;
