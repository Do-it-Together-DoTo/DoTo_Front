import React, { ReactNode, useState, Children } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowDownwardIcon, ArrowForwardIcon } from '@/assets/svg';
import CategoryDetail from './CategoryDetail';
import { ICON_MAP } from './CategoryConstant';
import { useDeviceSize } from '@/hooks/useDeviceSize';

interface CategoryProps {
  page: {
    name: string;
    to: string;
    icon: keyof typeof ICON_MAP;
    detail?: { name: string; to: string; icon: keyof typeof ICON_MAP }[];
  };
  children: ReactNode;
}

const Category = ({ page, children }: CategoryProps) => {
  const [isCategoryActive, setIsCategoryActive] = useState(false);
  const { isDesktop } = useDeviceSize();
  const handleClickCategory = () => {
    setIsCategoryActive((prev) => !prev);
  };

  return (
    <>
      {page.detail && isDesktop ? (
        <>
          <div
            className={`flex items-center w-full px-11 py-3  gap-[0.5rem] relative ${
              isCategoryActive ? 'dt:bg-Light_Layout-200 dark:bg-Dark_Layout-300 mb:border-b-2' : ''
            }`}
            onClick={handleClickCategory}
          >
            {isCategoryActive ? (
              <ArrowDownwardIcon
                width="17"
                height="17"
                className="fill-Light_Text_Name dark:fill-Dark_Text_Name absolute left-4"
              />
            ) : (
              <ArrowForwardIcon
                width="17"
                height="17"
                className="fill-Light_Text_Name dark:fill-Dark_Text_Name absolute left-4"
              />
            )}
            <span
              className={`text-base ${
                isCategoryActive
                  ? 'text-Light_CategoryText_Icon dark:text-Dark_Text_Name'
                  : 'text-Dark_CategoryText_Icon dark:text-Light_Text_Name'
              }`}
            >
              {page.name}
            </span>
            {Children.map(children, (child) =>
              React.cloneElement(child as React.ReactElement, {
                className: isCategoryActive
                  ? 'fill-Light_CategoryText_Icon_Contents dark:fill-Dark_Text_Name'
                  : 'fill-Dark_CategoryText_Icon dark:fill-Light_Text_Name',
              }),
            )}
          </div>
          {isCategoryActive &&
            page.detail.map((detail) => (
              <CategoryDetail key={detail.name} to={detail.to} name={detail.name}>
                {React.createElement(ICON_MAP[detail.icon], { width: `1rem`, height: `1rem` })}
              </CategoryDetail>
            ))}
        </>
      ) : (
        <NavLink
          to={page.to}
          className={({ isActive }) =>
            ` flex items-center w-full px-11 py-3 gap-[0.5rem] relative ${
              isActive
                ? 'dt:bg-Light_Layout-200 dt:dark:bg-Dark_Layout-300 mb:border-b-2 mb:border-Dark_Layout-300 mb:dark:border-Light_Layout-200'
                : ''
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span
                className={`dt:text-base mb:text-xl ${
                  isActive
                    ? 'text-Light_CategoryText_Icon dark:text-Dark_Text_Name'
                    : 'text-Dark_CategoryText_Icon dark:text-Light_Text_Name'
                }`}
              >
                {page.name}
              </span>
              {Children.map(children, (child) =>
                React.cloneElement(child as React.ReactElement, {
                  className: isActive
                    ? 'fill-Light_CategoryText_Icon_Contents dark:fill-Dark_Text_Name'
                    : 'fill-Dark_CategoryText_Icon dark:fill-Light_Text_Name',
                }),
              )}
            </>
          )}
        </NavLink>
      )}
    </>
  );
};
export default Category;
