import CategorybarItem from './CategorybarItem';
import React from 'react';
import { ICON_MAP, CATEGORY_LIST } from './CategoryConstant';

interface CategorybarProps {
  category: 'community' | 'store' | 'mypage';
}

const Categorybar = ({ category }: CategorybarProps) => {
  return (
    <nav className="w-[16.1875rem] py-[7rem] h-screen bg-Light_Layout-100 rounded-tl-3xl dark:bg-Dark_Layout-200 flex flex-col gap-3 px-4">
      {CATEGORY_LIST[category].map((page) => (
        <div key={page.name}>
          <CategorybarItem page={page}>
            {React.createElement(ICON_MAP[page.icon], { width: '17', height: '17' })}
          </CategorybarItem>
        </div>
      ))}
    </nav>
  );
};

export default Categorybar;
