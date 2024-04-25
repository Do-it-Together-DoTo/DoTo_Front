import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>로고</div>
      <div className="flex flex-col w-40 items-center">
        <Link to={'/'}>홈 </Link>
        <Link to={'/community/ranking'}>커뮤니티</Link>
        <Link to={'/store/shop'}>스토어</Link>
        <Link to={'/mypage'}>마이페이지</Link>
      </div>
    </nav>
  );
};

export default Navbar;
