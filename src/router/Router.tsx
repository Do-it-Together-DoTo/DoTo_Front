import App from '@/App';
import CommunityLayout from '@/components/layout/CommunityLayout';
import StoreLayout from '@/components/layout/StoreLayout';
import NotFound from '@/pages/NotFound';
import Betting from '@/pages/community/Betting';
import Chatting from '@/pages/community/Chatting';
import Ranking from '@/pages/community/Ranking';
import Search from '@/pages/community/Search';
import Home from '@/pages/home/Home';
import Mypage from '@/pages/mypage/Mypage';
import Inventory from '@/pages/store/Inventory';
import Shop from '@/pages/store/Shop';
import { RouterProvider, createBrowserRouter, RouteObject } from 'react-router-dom';

const Router = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'store',
          element: <StoreLayout />,
          children: [
            { path: 'shop', element: <Shop /> },
            { path: 'inventory', element: <Inventory /> },
          ],
        },
        {
          path: 'community',
          element: <CommunityLayout />,
          children: [
            { path: 'ranking', element: <Ranking /> },
            { path: 'search', element: <Search /> },
            { path: 'chatting', element: <Chatting /> },
            { path: 'betting', element: <Betting /> },
          ],
        },
        {
          path: '/mypage',
          element: <Mypage />,
        },
      ],
    },
  ];
  const router = createBrowserRouter([...routes]);
  return <RouterProvider router={router} />;
};

export default Router;
