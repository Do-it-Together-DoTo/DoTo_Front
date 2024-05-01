import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Topbar from './Topbar';
import WebBackground from '../WebBackground';

const Layout = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <WebBackground />
      <Outlet />
    </>
  );
};

export default Layout;
