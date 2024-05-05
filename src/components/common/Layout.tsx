import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Topbar from './topbar/Topbar';

const Layout = () => {
  return (
    <>
      <div>
        <Topbar />
        <div className="flex ">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
