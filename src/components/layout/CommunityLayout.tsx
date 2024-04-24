import { Outlet } from 'react-router-dom';

const CommunityLayout = () => {
  return (
    <>
      <div>커뮤니티 레이아웃</div>
      <Outlet />
    </>
  );
};

export default CommunityLayout;
