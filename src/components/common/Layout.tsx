import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Topbar from './Topbar';

const Layout = () => {
  return (
    <>
      <div>전체 레이아웃</div>
      <Topbar />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
