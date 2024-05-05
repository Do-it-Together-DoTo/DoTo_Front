import Category from './Category';
import React from 'react';
import { ICON_MAP, CATEGORY_LIST } from './CategoryConstant';
import { Outlet } from 'react-router-dom';

interface CategorybarProps {
  category: 'community' | 'store' | 'mypage';
}

const Categorybar = ({ category }: CategorybarProps) => {
  return (
    <div className="flex">
      <div className="w-[16.1875rem] py-[7rem] h-screen bg-Dark_Text_Contents rounded-tl-3xl dark:bg-Dark_Layout-200 flex flex-col gap-3 px-4">
        {CATEGORY_LIST[category].map((page) => (
          <div key={page.name}>
            <Category page={page}>{React.createElement(ICON_MAP[page.icon], { width: '17', height: '17' })}</Category>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Categorybar;
