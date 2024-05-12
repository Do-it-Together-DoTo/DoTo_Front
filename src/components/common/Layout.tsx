import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Topbar from './topbar/Topbar';

const Layout = () => {
  return (
    <>
      <div className="w-full h-full bg-Light_Layout-400 dark:bg-Dark_Layout-100">
        <Topbar />
        <div className="flex max-w-screen">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
