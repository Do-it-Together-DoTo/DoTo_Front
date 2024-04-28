import React, { ReactNode } from 'react';
import { Children } from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemLinkProps {
  to: string;
  name: string;
  children: ReactNode;
}

const NavItemLink = ({ to, name, children }: NavItemLinkProps) => {
  return (
    <NavLink to={to} className="flex gap-5 items-center">
      {({ isActive }) => (
        <>
          {Children.map(children, (child) =>
            React.cloneElement(child as React.ReactElement, {
              className: isActive ? 'fill-Light_CategoryText_Icon_Contents' : 'fill-Dark_CategoryText_Icon',
            }),
          )}
          <span
            className={isActive ? ' text-base text-Light_CategoryText_Icon ' : 'text-base  text-Dark_CategoryText_Icon'}
          >
            {name}
          </span>
        </>
      )}
    </NavLink>
  );
};
export default NavItemLink;
