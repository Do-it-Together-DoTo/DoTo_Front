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
import SignIn from '@pages/sign/SignIn';
import { RouterProvider, createBrowserRouter, RouteObject, Navigate } from 'react-router-dom';

const Router = () => {
  const routes: RouteObject[] = [
     {
          path: 'sign',
          children: [
            { path: '', element: <Navigate to="signin" /> },
            { path: 'signin', element: <SignIn /> },
          ],
        },
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
          children: [
            { path: '', element: <Navigate to="shop" /> },
            { path: 'shop', element: <ShopPage /> },
            { path: 'inventory', element: <InventoryPage /> },
          ],
        },
        {
          path: 'community',
          children: [
            { path: '', element: <Navigate to="ranking" /> },
            { path: 'ranking', element: <RankingPage /> },
            { path: 'search', element: <SearchPage /> },
            { path: 'chatting', element: <ChattingPage /> },
            { path: 'betting', element: <BettingPage /> },
          ],
        },
        {
          path: 'mypage',
          element: <Mypage />,
        },
      ],
    },
  ];
  const router = createBrowserRouter([...routes]);
  return <RouterProvider router={router} />;
};

export default Router;
