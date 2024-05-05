import Categorybar from '@/components/common/category/Categorybar';
import Layout from '@/components/common/Layout';
import NotFoundPage from '@/pages/NotFoundPage';
import BettingPage from '@/pages/community/BettingPage';
import ChattingPage from '@/pages/community/ChattingPage';
import RankingPage from '@/pages/community/RankingPage';
import SearchPage from '@/pages/community/SearchPage';
import HomePage from '@/pages/home/HomePage';
import ChangePasswordPage from '@/pages/mypage/ChangePasswordPage';
import DeleteAccountPage from '@/pages/mypage/DeleteAccountPage';
import MydataPage from '@/pages/mypage/MydataPage';
import UpdateProfilePage from '@/pages/mypage/UpdateProfilePage';
import InventoryPage from '@/pages/store/InventoryPage';
import ShopPage from '@/pages/store/ShopPage';
import { RouterProvider, createBrowserRouter, RouteObject, Navigate } from 'react-router-dom';
import ChattingRoomPage from '@/pages/community/ChattingRoomPage';

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
          path: 'community',
          element: <Categorybar category="community" />,
          children: [
            { path: '', element: <Navigate to="ranking" /> },
            { path: 'ranking', element: <RankingPage /> },
            { path: 'friends', element: <SearchPage /> },
            { path: 'chatting', element: <ChattingPage /> },
            { path: 'chatting/:roomId', element: <ChattingRoomPage /> },
            { path: 'betting', element: <BettingPage /> },
          ],
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
          path: 'mypage',
          element: <Categorybar category="mypage" />,
          children: [
            { path: '', element: <Navigate to="mydata" /> },
            { path: 'mydata', element: <MydataPage /> },
            { path: 'update-profile', element: <UpdateProfilePage /> },
            { path: 'change-password', element: <ChangePasswordPage /> },
            { path: 'delete-account', element: <DeleteAccountPage /> },
          ],
        },
      ],
    },
  ];
  const router = createBrowserRouter([...routes]);
  return <RouterProvider router={router} />;
};

export default Router;
