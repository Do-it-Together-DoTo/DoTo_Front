import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Topbar from './topbar/Topbar';
import { useDeviceSize } from '@/hooks/useDeviceSize';

const Layout = () => {
  const { isDesktop, isMobile } = useDeviceSize();
  return (
    <>
      {isDesktop && (
        <div className="w-full h-full bg-Light_Layout-400 dark:bg-Dark_Layout-100">
          <Topbar />
          <div className="flex">
            <Navbar />
            <Outlet />
          </div>
        </div>
      )}
      {isMobile && (
        <div className="w-screen h-full bg-Light_Layout-400 dark:bg-Dark_Layout-100">
          <Topbar />
          <div className="py-[4rem]">
            <Outlet />
          </div>
          <Navbar />
        </div>
      )}
    </>
  );
};

export default Layout;
