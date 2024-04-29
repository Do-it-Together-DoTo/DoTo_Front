import { NavLink } from 'react-router-dom';
import { HomeIcon } from '@/assets/svg';
import { CommunityIcon } from '@/assets/svg';
import { StoreIcon } from '@/assets/svg';
import { MypageIcon } from '@/assets/svg';
import { Logo } from '@/assets/svg';
import NavItemLink from './NavItemLink';

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-16 w-40 px-[1.59375rem] dark:bg-Dark_Layout-100">
      <div>
        <NavLink to="/">
          <Logo width="109" height="70" className="fill-Light_Text_Name dark:fill-Dark_Text_Name " />
        </NavLink>
      </div>
      <div className="flex flex-col gap-11 h-screen">
        <NavItemLink to={'/'} name="홈">
          <HomeIcon width="32" height="31" />
        </NavItemLink>

        <NavItemLink to={'/community/ranking'} name="커뮤니티">
          <CommunityIcon width="30" height="30" />
        </NavItemLink>

        <NavItemLink to={'/store/shop'} name="스토어">
          <StoreIcon width="30" height="30" />
        </NavItemLink>

        <NavItemLink to={'/mypage'} name="마이페이지">
          <MypageIcon width="28" height="28" />
        </NavItemLink>
      </div>
    </nav>
  );
};

export default Navbar;
