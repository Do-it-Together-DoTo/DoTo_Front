import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Topbar from './Topbar';

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
