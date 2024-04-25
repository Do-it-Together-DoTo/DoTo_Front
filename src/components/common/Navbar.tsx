import { Link } from 'react-router-dom';
import { HomeIcon } from '@/assets/svg';
import { CommunityIcon } from '@/assets/svg';
import { StoreIcon } from '@/assets/svg';
import { MypageIcon } from '@/assets/svg';
import { Logo } from '@/assets/svg';

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-16 w-48 px-7">
      <div>
        <Link to="/">
          <Logo width="109" height="70" />
        </Link>
      </div>
      <div className="flex flex-col gap-11 h-screen">
        <Link to={'/'}>
          <div className="flex gap-5 items-center">
            <HomeIcon width="32" height="32" />
            <span className="text-base">홈</span>
          </div>
        </Link>
        <Link to={'/community/ranking'}>
          <div className="flex gap-5 items-center">
            <CommunityIcon width="32" height="32" />
            <span className="text-base">커뮤니티</span>
          </div>
        </Link>
        <Link to={'/store/shop'}>
          <div className="flex gap-5 items-center">
            <StoreIcon width="32" height="32" />
            <span className="text-base">스토어</span>
          </div>
        </Link>
        <Link to={'/mypage'}>
          <div className="flex gap-5 items-center">
            <MypageIcon width="32" height="32" />
            <span className="text-base">마이페이지</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
