import { NavLink } from 'react-router-dom';
import { HomeIcon, CommunityIcon, StoreIcon, MypageIcon, Logo } from '@/assets/svg';

import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-16 w-40 px-[1.59375rem] dark:bg-Dark_Layout-100 h-[calc(100vh-3.1875rem)]">
      <div>
        <NavLink to="/">
          <Logo width={`6.8125rem`} height={`4.375rem`} className="fill-Light_Text_Name dark:fill-Dark_Text_Name " />
        </NavLink>
      </div>
      <div className="flex flex-col gap-11">
        <NavbarItem to={'/'} name="홈">
          <HomeIcon width={`2rem`} height={`1.9375rem`} />
        </NavbarItem>

        <NavbarItem to={'/community'} name="커뮤니티">
          <CommunityIcon width={`1.875rem`} height={`1.875rem`} />
        </NavbarItem>

        <NavbarItem to={'/store'} name="스토어">
          <StoreIcon width={`1.875rem`} height={`1.875rem`} />
        </NavbarItem>

        <NavbarItem to={'/mypage'} name="마이페이지">
          <MypageIcon width={`1.75rem`} height={`1.75rem`} />
        </NavbarItem>
      </div>
    </nav>
  );
};

export default Navbar;
