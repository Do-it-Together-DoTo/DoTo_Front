import React, { ReactNode, useState, Children } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowDownwardIcon, ArrowForwardIcon } from '@/assets/svg';
import CategoryDetail from './CategoryDetail';
import { ICON_MAP } from './CategoryConstant';

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

  const handleClickCategory = () => {
    setIsCategoryActive((prev) => !prev);
  };

  return (
    <>
      {page.detail ? (
        <>
          <div
            className={
              isCategoryActive
                ? 'bg-Light_Layout-200 dark:bg-Dark_Layout-300 flex items-center w-full px-11 py-3  gap-[0.5rem] relative'
                : 'flex items-center w-full px-11 py-3 gap-[0.5rem] relative'
            }
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
              className={
                isCategoryActive
                  ? ' text-base text-Light_CategoryText_Icon dark:text-Dark_Text_Name'
                  : 'text-base  text-Dark_CategoryText_Icon dark:text-Light_Text_Name'
              }
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
                {React.createElement(ICON_MAP[detail.icon], { width: '17', height: '17' })}
              </CategoryDetail>
            ))}
        </>
      ) : (
        <NavLink
          to={page.to}
          className={({ isActive }) =>
            isActive
              ? 'bg-Light_Layout-200 dark:bg-Dark_Layout-300 flex items-center w-full px-11 py-3  gap-[0.5rem] relative'
              : 'flex items-center w-full px-11 py-3 gap-[0.5rem] relative'
          }
        >
          {({ isActive }) => (
            <>
              <span
                className={
                  isActive
                    ? ' text-base text-Light_CategoryText_Icon dark:text-Dark_Text_Name'
                    : 'text-base  text-Dark_CategoryText_Icon dark:text-Light_Text_Name'
                }
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
