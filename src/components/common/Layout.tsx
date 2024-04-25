import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <div>전체 레이아웃</div>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
