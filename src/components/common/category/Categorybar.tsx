import Category from './Category';
import React from 'react';
import { ICON_MAP, CATEGORY_LIST } from './CategoryConstant';
import { Outlet } from 'react-router-dom';

interface CategorybarProps {
  category: 'community' | 'store' | 'mypage';
}

const Categorybar = ({ category }: CategorybarProps) => {
  return (
    <div className="flex w-full">
      <div className="flex shrink-0 dt:bg-Light_Layout-100 mb:dark:bg-Dark_Layout-100 dt:rounded-tl-3xl dt:h-[calc(100vh-3.1875rem)] dt:w-[16.1875rem]  dt:py-[7rem] dt:flex-col gap-3 px-4 mb:fixed mb:top-[4rem] mb:h-[3rem] mb:w-screen mb:justify-around dark:bg-Dark_Layout-200 ">
        {CATEGORY_LIST[category].map((page) => (
          <div key={page.name}>
            <Category page={page}>
              {React.createElement(ICON_MAP[page.icon], { width: `1rem`, height: `1rem` })}
            </Category>
          </div>
        ))}
      </div>
      <div className="mb:pt-[3rem] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Categorybar;
