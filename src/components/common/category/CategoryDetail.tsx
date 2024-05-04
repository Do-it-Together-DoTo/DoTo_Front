import React, { ReactNode } from 'react';
import { Children } from 'react';
import { NavLink } from 'react-router-dom';

interface CategoryDetailProps {
  to: string;
  name: string;
  children: ReactNode;
}

const CategoryDetail = ({ to, name, children }: CategoryDetailProps) => {
  return (
    <NavLink to={to} className="w-full px-11 py-3 flex gap-[0.5rem] items-center justify-start ">
      {({ isActive }) => (
        <>
          <span
            className={
              isActive
                ? ' text-[1rem] text-Light_CategoryText_Icon dark:text-Dark_Text_Name'
                : 'text-[1rem]  text-Dark_CategoryText_Icon dark:text-Light_Text_Name'
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
export default CategoryDetail;
