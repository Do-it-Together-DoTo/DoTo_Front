import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Topbar from './Topbar';

const Layout = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
