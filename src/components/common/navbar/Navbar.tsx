import { NavLink } from 'react-router-dom';
import { HomeIcon, CommunityIcon, StoreIcon, MypageIcon, Logo } from '@/assets/svg';

import NavbarItem from './NavbarItem';
import { useDeviceSize } from '@/hooks/useDeviceSize';

const Navbar = () => {
  const { isDesktop } = useDeviceSize();
  return (
    <div
      className="flex dark:bg-Dark_Layout-100 dt:px-[1.59375rem] dt:gap-16 dt:flex-col dt:w-40 dt:h-[calc(100vh-3.1875rem)] 
     mb:fixed mb:bottom-0 mb:justify-center mb:h-[4rem]"
    >
      {isDesktop && (
        <div>
          <NavLink to="/">
            <Logo width={`6.8125rem`} height={`4.375rem`} className="fill-Light_Text_Name dark:fill-Dark_Text_Name " />
          </NavLink>
        </div>
      )}
      <nav className="flex gap-[2.75rem] dt:flex-col mb:justify-between mb:w-screen mb:px-[3rem] mb:h-[4rem]">
        <NavbarItem to={'/'} name="홈">
          <HomeIcon width={`2rem`} height={`1.9375rem`} />
        </NavbarItem>

        <NavbarItem to={'/community'} name="커뮤니티">
          <CommunityIcon width={`2rem`} height={`1.875rem`} />
        </NavbarItem>

        <NavbarItem to={'/store'} name="스토어">
          <StoreIcon width={`2rem`} height={`1.875rem`} />
        </NavbarItem>

        <NavbarItem to={'/mypage'} name="마이페이지">
          <MypageIcon width={`1.75rem`} height={`1.75rem`} />
        </NavbarItem>
      </nav>
    </div>
  );
};

export default Navbar;
