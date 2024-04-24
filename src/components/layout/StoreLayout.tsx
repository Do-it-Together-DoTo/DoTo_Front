import { Outlet } from 'react-router-dom';

const StoreLayout = () => {
  return (
    <>
      <div>스토어 레이아웃</div>
      <Outlet />
    </>
  );
};

export default StoreLayout;
