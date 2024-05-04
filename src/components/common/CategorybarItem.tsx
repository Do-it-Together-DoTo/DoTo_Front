import React, { ReactNode } from 'react';
import { Children } from 'react';
import { NavLink } from 'react-router-dom';

interface CategorybarItemProps {
  to: string;
  name: string;
  children: ReactNode;
}

const CategorybarItem = ({ to, name, children }: CategorybarItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'bg-Light_Layout-200 dark:bg-Dark_Layout-300 w-full py-3 px-11 flex  gap-[0.5rem] items-center'
          : 'w-full px-11 py-3 flex  gap-[0.5rem] items-center'
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
            {name}
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
  );
};
export default CategorybarItem;
