import { HomeIcon, CommunityIcon, StoreIcon, MypageIcon } from '@/assets/svg';
import CategorybarItem from './CategorybarItem';
import { ElementType } from 'react';
import React from 'react';

interface CategorybarProps {
  category: string;
}

const Categorybar = ({ category }: CategorybarProps) => {
  const iconMap: Record<string, ElementType> = {
    HomeIcon: HomeIcon,
  };

  const categoryList: Record<string, { name: string; to: string; icon: keyof typeof iconMap }[]> = {
    community: [
      { name: '랭킹', to: 'ranking', icon: 'HomeIcon' },
      { name: '친구', to: 'friends', icon: 'HomeIcon' },
      { name: '베팅', to: 'betting', icon: 'HomeIcon' },
      { name: '채팅', to: 'chatting', icon: 'HomeIcon' },
    ],
    store: [
      { name: '스토어', to: 'shop', icon: 'HomeIcon' },
      { name: '보관함', to: 'inventory', icon: 'HomeIcon' },
    ],
    mypage: [
      { name: '마이페이지', to: 'mypage', icon: 'HomeIcon' },
      { name: '설정', to: 'setting', icon: 'HomeIcon' },
    ],
  };
  return (
    <nav className="w-[16.1875rem] py-[7rem] h-screen bg-Light_Layout-100 rounded-tl-3xl dark:bg-Dark_Layout-200 flex flex-col gap-8  px-4 ">
      {categoryList[category].map((page) => (
        <CategorybarItem to={page.to} name={page.name} key={page.name}>
          {React.createElement(iconMap[page.icon], { width: '32', height: '31' })}
        </CategorybarItem>
      ))}

      {/* <CategorybarItem to={'ranking'} name="랭킹">
        <HomeIcon width="32" height="31" />
      </CategorybarItem>

      <CategorybarItem to={'friends'} name="친구">
        <CommunityIcon width="30" height="30" />
      </CategorybarItem>

      <CategorybarItem to={'betting'} name="베팅">
        <StoreIcon width="30" height="30" />
      </CategorybarItem>

      <CategorybarItem to={'chatting'} name="채팅">
        <MypageIcon width="28" height="28" />
      </CategorybarItem> */}
    </nav>
  );
};

export default Categorybar;
