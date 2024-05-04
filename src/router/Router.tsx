import Categorybar from '@/components/common/Categorybar';
import Layout from '@/components/common/Layout';
import NotFoundPage from '@/pages/NotFoundPage';
import BettingPage from '@/pages/community/BettingPage';
import ChattingPage from '@/pages/community/ChattingPage';
import RankingPage from '@/pages/community/RankingPage';
import SearchPage from '@/pages/community/SearchPage';
import HomePage from '@/pages/home/HomePage';
import Mypage from '@/pages/mypage/Mypage';
import InventoryPage from '@/pages/store/InventoryPage';
import ShopPage from '@/pages/store/ShopPage';
import { RouterProvider, createBrowserRouter, RouteObject, Navigate } from 'react-router-dom';

const Router = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'store',
          element: <Categorybar category="store" />,
          children: [
            { path: '', element: <Navigate to="shop" /> },
            { path: 'shop', element: <ShopPage /> },
            { path: 'inventory', element: <InventoryPage /> },
          ],
        },
        {
          path: 'community',
          element: <Categorybar category="community" />,
          children: [
            { path: 'ranking', element: <RankingPage /> },
            { path: 'friends', element: <SearchPage /> },
            { path: 'chatting', element: <ChattingPage /> },
            { path: 'betting', element: <BettingPage /> },
          ],
        },
        {
          path: 'mypage',
          element: <Categorybar category="mypage" />,
          children: [{ path: '', element: <Mypage /> }],
        },
      ],
    },
  ];
  const router = createBrowserRouter([...routes]);
  return <RouterProvider router={router} />;
};

export default Router;
