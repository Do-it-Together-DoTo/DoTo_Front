import { Link } from 'react-router-dom';
import { HomeIcon } from '@/assets/svg';
import { CommunityIcon } from '@/assets/svg';
import { StoreIcon } from '@/assets/svg';
import { MypageIcon } from '@/assets/svg';

const Navbar = () => {
  return (
    <nav>
      <div>로고</div>
      <div className="flex flex-col w-40 items-center">
        <Link to={'/'}>
          <HomeIcon width="32" height="32" />홈
        </Link>
        <Link to={'/community/ranking'}>
          <CommunityIcon width="32" height="32" />
          커뮤니티
        </Link>
        <Link to={'/store/shop'}>
          <StoreIcon width="32" height="32" />
          스토어
        </Link>
        <Link to={'/mypage'}>
          <MypageIcon width="32" height="32" />
          마이페이지
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
